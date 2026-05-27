"use client"

import React, { useEffect, useState } from 'react'
// lightweight id generator to avoid extra runtime dependencies
function generateId() {
  return 'id_' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36)
}
import type { FormInput } from '../types/audit'
import { calculateAudit } from '../utils/auditEngine'

const TOOL_OPTIONS = [
  'Cursor',
  'Claude',
  'Copilot',
  'ChatGPT',
  'Credex API',
  'Payment API'
]

function emptyRow(): FormInput {
  return { id: generateId(), toolName: 'Cursor', planTier: 'Pro', monthlySpend: 0, seats: 1 }
}

export default function Page() {
  const [teamSize, setTeamSize] = useState<number>(5)
  const [useCase, setUseCase] = useState<string>('coding')
  const [rows, setRows] = useState<FormInput[]>(() => [emptyRow()])

  // Load persisted state
  useEffect(() => {
    try {
      const raw = localStorage.getItem('stackaudit:v1')
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed.rows) setRows(parsed.rows)
        if (parsed.teamSize) setTeamSize(parsed.teamSize)
        if (parsed.useCase) setUseCase(parsed.useCase)
      }
    } catch (e) {
      console.warn('Failed to load saved state', e)
    }
  }, [])

  // Persist state
  useEffect(() => {
    try {
      localStorage.setItem('stackaudit:v1', JSON.stringify({ rows, teamSize, useCase }))
    } catch (e) {
      console.warn('Failed to save state', e)
    }
  }, [rows, teamSize, useCase])

  function updateRow(id: string, patch: Partial<FormInput>) {
    setRows(r => r.map(x => x.id === id ? { ...x, ...patch } : x))
  }

  function addRow() { setRows(r => [...r, emptyRow()]) }
  function removeRow(id: string) { setRows(r => r.filter(x => x.id !== id)) }

  const report = calculateAudit(rows, teamSize, useCase)

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card col-span-2">
          <h2 className="text-lg font-medium">Audit Inputs</h2>
          <div className="mt-4 space-y-4">
            <div className="flex gap-4 items-center">
              <label className="muted w-28">Team Size</label>
              <input type="number" value={teamSize} onChange={e => setTeamSize(Math.max(1, parseInt(e.target.value || '1')))} className="bg-white border border-slate-300 px-3 py-2 rounded w-28" />
              <label className="muted ml-4">Use Case</label>
              <select value={useCase} onChange={e => setUseCase(e.target.value)} className="bg-white border border-slate-300 px-3 py-2 rounded">
                <option value="coding">Coding</option>
                <option value="ml">Machine Learning</option>
                <option value="analytics">Analytics</option>
              </select>
            </div>

            <div className="space-y-3">
              {rows.map(row => (
                <div key={row.id} className="flex gap-3 items-center">
                  <select value={row.toolName} onChange={e => updateRow(row.id, { toolName: e.target.value })} className="bg-white border border-slate-300 px-3 py-2 rounded w-40">
                    {TOOL_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <select value={row.planTier} onChange={e => updateRow(row.id, { planTier: e.target.value as any })} className="bg-white border border-slate-300 px-3 py-2 rounded w-32">
                    <option>Pro</option>
                    <option>Team</option>
                    <option>Enterprise</option>
                    <option>Free</option>
                  </select>
                  <input type="number" value={row.seats} onChange={e => updateRow(row.id, { seats: Math.max(0, parseInt(e.target.value || '0')) })} className="bg-white border border-slate-300 px-3 py-2 rounded w-24" />
                  <input type="number" value={row.monthlySpend} onChange={e => updateRow(row.id, { monthlySpend: Math.max(0, parseFloat(e.target.value || '0')) })} step="0.01" className="bg-white border border-slate-300 px-3 py-2 rounded w-40" placeholder="Monthly spend" />
                  <button onClick={() => removeRow(row.id)} className="text-sm muted">Remove</button>
                </div>
              ))}
            </div>

            <div>
              <button onClick={addRow} className="px-4 py-2 bg-slate-900 text-white rounded">Add Tool</button>
            </div>
          </div>
        </div>

        <aside className="card">
          <h3 className="text-sm muted">Quick Summary</h3>
          <div className="mt-4">
            <div className="flex justify-between muted"><span>Gross Current Run Rate</span><strong>${report.currentMonthlyTotal.toLocaleString()}</strong></div>
            <div className="flex justify-between muted mt-2"><span>Identified Monthly Savings</span><strong>${report.savingsMonthly.toLocaleString()}</strong></div>
            <div className="flex justify-between muted mt-2"><span>Annualized Recovery</span><strong>${report.savingsAnnual.toLocaleString()}</strong></div>
          </div>
        </aside>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-4">Per-tool Analysis</h2>
        <div className="grid gap-4">
          {report.tools.map(t => (
            <div key={t.id} className="card flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-3"><h4 className="font-medium">{t.toolName}</h4><span className="muted text-sm">{t.planTier} · {t.seats} seats</span></div>
                <p className="muted text-sm mt-1">Current: ${t.currentMonthlySpend.toLocaleString()} · Recommended: ${t.recommendedMonthlySpend.toLocaleString()}</p>
                <p className="mt-2">{t.recommendedAction} <span className="muted">— {t.reason}</span></p>
              </div>
              <div className="text-right">
                <div className="text-sm muted">Monthly Savings</div>
                <div className="text-xl font-semibold">${t.savingsMonthly.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        {report.savingsMonthly > 500 ? (
          <div className="card p-6 bg-white text-black rounded-lg">
            <h3 className="text-xl font-semibold">Secure a Custom Credex Wholesale Consultation</h3>
            <p className="muted mt-2">You qualify for a tailored wholesale credits analysis — our team will map your API volume and propose contractual credits to capture the identified savings.</p>
            <form className="mt-4 flex gap-3">
              <input placeholder="Your work email" className="px-3 py-2 border border-slate-300 rounded flex-1 bg-white" />
              <button className="px-4 py-2 bg-slate-900 text-white rounded">Request Consultation</button>
            </form>
          </div>
        ) : report.savingsMonthly < 100 ? (
          <div className="card p-6">
            <h3 className="font-semibold">Your stack is optimized</h3>
            <p className="muted mt-2">Identified savings are small. Join our notifications list for deeper analyses and future wholesale offers.</p>
            <form className="mt-4 flex gap-3">
              <input placeholder="Your email" className="px-3 py-2 border border-slate-300 rounded flex-1 bg-white" />
              <button className="px-4 py-2 bg-slate-900 text-white rounded">Join List</button>
            </form>
          </div>
        ) : (
          <div className="card p-6">
            <h3 className="font-semibold">Tactical Recommendations</h3>
            <p className="muted mt-2">Review each per-tool recommendation above. For multi-tool consolidation or procurement help, request a consultation.</p>
          </div>
        )}
      </section>
    </div>
  )
}
