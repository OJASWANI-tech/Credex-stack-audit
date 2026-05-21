import { FormInput, AuditReport, ToolAuditResult } from '../types/audit'

const PRICING: Record<string, { Pro?: number; Team?: number; Enterprise?: number; seatBased?: boolean }> = {
  Cursor: { Pro: 20, Team: 30, Enterprise: 50, seatBased: true },
  Claude: { Pro: 20, Team: 30, Enterprise: 60, seatBased: true },
  Copilot: { Pro: 0, Team: 30, Enterprise: 50, seatBased: true },
  ChatGPT: { Pro: 20, Team: 40, Enterprise: 80, seatBased: true },
  'Credex API': { Pro: 0, Team: 0, Enterprise: 0, seatBased: false }
}

function clamp(n: number) { return Math.max(0, Number(n || 0)) }

function perSeatBaseline(tool: string, tier: string): number | null {
  const p = PRICING[tool]
  if (!p) return null
  // @ts-ignore
  return p[tier as keyof typeof p] ?? null
}

export function calculateAudit(inputs: FormInput[], teamSize: number, useCase: string): AuditReport {
  const tools: ToolAuditResult[] = []
  let currentMonthlyTotal = 0
  let recommendedMonthlyTotal = 0

  for (const input of inputs) {
    const id = input.id
    const toolName = input.toolName
    const planTier = input.planTier
    const seats = Math.max(0, Math.floor(input.seats || 0))
    const currentMonthlySpend = clamp(input.monthlySpend)
    currentMonthlyTotal += currentMonthlySpend

    let recommendedMonthlySpend = currentMonthlySpend
    let recommendedAction = 'Maintain current subscription'
    let savingsMonthly = 0
    let reason = ''

    // Rule 1: Claude Team optimization
    if (toolName.toLowerCase().includes('claude') && planTier === 'Team' && seats > 0 && seats < 5) {
      // team is currently paying Team price; recommend downgrading to Pro per seat
      const teamRate = perSeatBaseline('Claude', 'Team') || (currentMonthlySpend / Math.max(seats, 1))
      const proRate = perSeatBaseline('Claude', 'Pro') || 20
      const recommended = seats * proRate
      recommendedMonthlySpend = Math.min(currentMonthlySpend, recommended)
      savingsMonthly = currentMonthlySpend - recommendedMonthlySpend
      recommendedAction = `Downgrade Claude from Team to Pro at $${proRate}/seat`;
      reason = `Small team (${seats} seats) — Pro tier is cheaper per-seat than Team.`
    }

    // Rule 2: API Volume Optimization
    if (toolName.toLowerCase().includes('api') && currentMonthlySpend > 300) {
      const wholesaleSavings = Math.round(currentMonthlySpend * 0.25 * 100) / 100
      // If we already computed a savings, pick the greater
      if (wholesaleSavings > savingsMonthly) {
        recommendedMonthlySpend = currentMonthlySpend - wholesaleSavings
        savingsMonthly = wholesaleSavings
        recommendedAction = 'Route API traffic through Credex wholesale credits (25% cost reduction)'
        reason = `High-volume API usage (> $300/mo) — wholesale credits reduce costs by ~25%.`
      }
    }

    // Rule 3: IDE License Consolidation for Copilot into Cursor Pro
    if (toolName.toLowerCase().includes('copilot') && useCase.toLowerCase() === 'coding' && seats > 3) {
      const cursorProRate = perSeatBaseline('Cursor', 'Pro') || 20
      const recommended = seats * cursorProRate
      const delta = currentMonthlySpend - recommended
      if (delta > 0) {
        recommendedMonthlySpend = recommended
        savingsMonthly = delta
        recommendedAction = `Consolidate IDE licenses to Cursor Pro at $${cursorProRate}/seat`;
        reason = `Copilot seats (${seats}) for coding can be consolidated to Cursor Pro to standardize pricing.`
      }
    }

    // If no special rule applied, attempt to normalize recommend based on per-seat baseline when seats present
    if (savingsMonthly === 0 && seats > 0) {
      const baselineRate = perSeatBaseline(toolName, planTier)
      if (baselineRate && Math.abs(currentMonthlySpend - seats * baselineRate) / Math.max(currentMonthlySpend,1) > 0.12) {
        // If current spend deviates meaningfully (>12%) from baseline, recommend aligning
        const aligned = seats * baselineRate
        const diff = Math.max(0, currentMonthlySpend - aligned)
        if (diff > 0) {
          recommendedMonthlySpend = aligned
          savingsMonthly = diff
          recommendedAction = `Align to vendor baseline pricing at $${baselineRate}/seat`;
          reason = `Current spend deviates from expected baseline; aligning reduces variance and cost.`
        }
      }
    }

    // Fallback: if recommendedMonthlySpend still equals current, set reason
    if (!reason) reason = 'No high-confidence tactical optimization identified.'

    recommendedMonthlyTotal += recommendedMonthlySpend

    tools.push({
      id,
      toolName,
      planTier,
      seats,
      currentMonthlySpend: Math.round(currentMonthlySpend * 100) / 100,
      recommendedMonthlySpend: Math.round(recommendedMonthlySpend * 100) / 100,
      recommendedAction,
      savingsMonthly: Math.round(savingsMonthly * 100) / 100,
      reason
    })
  }

  const savingsMonthly = Math.round((currentMonthlyTotal - recommendedMonthlyTotal) * 100) / 100
  const savingsAnnual = Math.round(savingsMonthly * 12 * 100) / 100

  return {
    teamSize,
    useCase,
    tools,
    currentMonthlyTotal: Math.round(currentMonthlyTotal * 100) / 100,
    recommendedMonthlyTotal: Math.round(recommendedMonthlyTotal * 100) / 100,
    savingsMonthly,
    savingsAnnual
  }
}

export default calculateAudit
