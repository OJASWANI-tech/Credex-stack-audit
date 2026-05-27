# USER_INTERVIEWS.md: Customer Discovery Logs

## Interview 1: Abhinav S.
* **Role:** Technical Co-Founder
* **Company Stage:** Bootstrapped team of 7 running a fast-growing AI-native SaaS product.
* **Direct Quotes:**
  1. *"We literally have 4 people on the team who use Cursor Pro, but I think our previous intern left his subscription active on the corporate card for two months after he headed back to university."*
  2. *"I don't mind spending money on developer infrastructure, but it's the total lack of central visibility that kills me—everyone just expenses random AI seats."*
  3. *"If an optimization tool forces me to log in via GitHub OAuth or read my repository access just to estimate numbers, I'm closing the tab immediately."*
* **The Most Surprising Insight:** He was fully aware that they were leaking at least $100 a month in ghost licenses, but explicitly avoided fixing it because logging into individual billing portals to check usage parameters felt like too much of a chore.
* **Design Changes Implemented:** This completely validated our decision to build an entirely local, input-driven spreadsheet workspace. It proves that a frictionless manual input grid is significantly more attractive to a busy founder than a heavy, database-backed automated system that requires complex onboarding.

---

## Interview 2: Priya M.
* **Role:** Engineering Lead
* **Company Stage:** Pre-seed startup with 14 core developers.
* **Direct Quotes:**
  1. *"We recently upgraded to an Enterprise tier for a specific security compliance review, but looking at our true system logs, half the team is still only utilizing standard baseline features."*
  2. *"Every single tool tells you that you need their top-tier enterprise plan for 'team security,' but it's often just a premium tax on simple features like single sign-on."*
  3. *"If you show me a clear visual calculation displaying how much capital we reclaim instantly by dropping down a tier, I can hand that exact screenshot directly to our finance lead to justify the adjustment."*
* **The Most Surprising Insight:** Startups are often intentionally overpaying for high-tier subscriptions simply because they fear losing security compliance certifications, without realizing they can maintain strict data guardrails on lower-cost tiers.
* **Design Changes Implemented:** Added clear, dynamic recommendation micro-copy at the bottom of each per-tool analysis block (e.g., *"Downgrade ChatGPT from Enterprise to Pro — Team size indicates a lower tier is sufficient for this tool"*). This provides clear textual justifications that engineering leads can easily copy and paste into internal company threads.

---

## Interview 3: J. R.
* **Role:** VP of Engineering (Talked via Discord Network)
* **Company Stage:** Series A infrastructure scaleup with 45 engineers.
* **Direct Quotes:**
  1. *"Our monthly subscription run-rate for AI coding tools grew so fast that it's now a top-five operational expense line item on our balance sheets."*
  2. *"I don't have the time to audit individual seats manually, but I would happily click a 'Join List' button if it sent me automated monthly pricing reports tailored to my team's size."*
  3. *"The moment a tool identifies over $1,000 in structural savings, it ceases to be a simple toy and immediately becomes an internal engineering roadmap priority."*
* **The Most Surprising Insight:** He explicitly stated that he values speed over extreme precision; a rough 90% accurate audit delivered in 30 seconds is infinitely more valuable to him than a perfect 100% precise audit that takes an hour to run.
* **Design Changes Implemented:** Designed the "Quick Summary" sidebar container to float prominently at the top right of the viewport. This gives users an instantaneous, high-impact running tally of their Annualized Recovery margins the exact second they alter any input field.
