StackAudit — System Topology (ASCII)

Client Browser
  |
  |-- UI (Next.js App Router, app/page.tsx)
  |     - Dynamic audit form (add/remove tools)
  |     - Persists form state to localStorage (stackaudit:v1)
  |
  |-- LocalStorage (client)
  |     - Stores serialized inputs: rows[], teamSize, useCase
  |
  |-- Audit Engine (utils/auditEngine.ts)
        - Pure function: calculateAudit(inputs, teamSize, useCase)
        - Deterministic rules:
          * Claude Team optimization
          * API Volume wholesale optimization
          * Copilot -> Cursor consolidation for coding
        - Returns AuditReport with per-tool ToolAuditResult[] and totals

Presentation Layer
  - app/page.tsx renders AuditReport
  - Hero shows Gross Current Run Rate and Identified Annualized Deficit Recovery
  - Per-tool cards show current spend, recommended action, and one-line reason
  - Conditional CTA: Wholesale Consultation (savings > $500/mo) or "Your stack is optimized" (savings < $100/mo)

Data Flow
  User Input -> localStorage -> calculateAudit() -> UI rendering

Security & Privacy
  - No backend in MVP; no telemetry unless user opts into consultation form.
  - All calculations performed client-side for audit defensibility and to avoid transferring billing data.
