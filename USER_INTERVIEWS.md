# User Interviews — Discovery Notes

Interview A.K. — Engineering Manager, Series A (A.K.)
- Quote: "We have four different AI APIs and nobody owns the bill — it's chaos."
- Notes: A.K. described seat proliferation where individual devs buy Pro accounts; procurement prefers a single supplier for rebate leverage. She valued clear, auditable recommendations and asked for a per-seat delta rather than fuzzy percentage savings.
- Impact on UI: Added explicit per-tool `seats` input and recommended action phrasing with concrete dollar-per-seat recommendations.

Interview S.V. — Head of Platform (S.V.)
- Quote: "If you tell me 'you can save 25%', I need to know how — and whether it's repeatable next quarter." 
- Notes: S.V. insisted on conservative math and vendor citation. He emphasized a need for a clear path to escalate to wholesale negotiations when savings look material.
- Impact on product: Implemented wholesale API routing rule and documented baseline pricing in PRICING_DATA.md for audit defensibility.

Interview J.M. — Technical Lead (J.M.)
- Quote: "Our Copilot seats get out of hand — some teams have 10 seats but only 2 active devs."
- Notes: J.M. asked for consolidation suggestions (which seats to keep vs convert). He responded positively to a simple CTA for procurement help when savings exceed a practical threshold.
- Impact on UI: Added conditional lead-capture tier for savings > $500/mo and a small 'Your stack is optimized' flow for low-savings results.

Summary
- The interviews led directly to three product choices: make recommendations actionable with per-seat costs, maintain conservative, citeable vendor baselines, and route higher-savings customers into a high-touch consultation path.
