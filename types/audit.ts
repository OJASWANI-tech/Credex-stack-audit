export type PlanTier = 'Pro' | 'Team' | 'Enterprise' | 'Free'

export interface FormInput {
  id: string
  toolName: string
  planTier: PlanTier
  monthlySpend: number
  seats: number
}

export interface ToolAuditResult {
  id: string
  toolName: string
  planTier: PlanTier
  seats: number
  currentMonthlySpend: number
  recommendedMonthlySpend: number
  recommendedAction: string
  savingsMonthly: number
  reason: string
}

export interface AuditReport {
  teamSize: number
  useCase: string
  tools: ToolAuditResult[]
  currentMonthlyTotal: number
  recommendedMonthlyTotal: number
  savingsMonthly: number
  savingsAnnual: number
}
