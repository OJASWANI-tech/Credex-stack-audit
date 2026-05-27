# StackAudit

AI spend audit platform that helps startups and engineering teams identify unnecessary AI tooling costs, optimize subscriptions, and estimate annual savings across tools like ChatGPT, Claude, Cursor, GitHub Copilot, and Gemini.

Built as a modern SaaS-style financial optimization dashboard with rule-based audit recommendations, AI-generated summaries, lead capture workflows, and shareable audit reports.

---

## Live Demo

🌐 Live Site: https://credex-stack-audit-puhq.vercel.app/

---

# Screenshots

## Audit Dashboard

Users can input their AI tooling stack, plans, team size, and monthly spend to generate a tactical optimization report.

![image alt](https://raw.githubusercontent.com/OJASWANI-tech/Credex-stack-audit/cb1bad736c3957467e19cd71d1fab17ce51e9bac/Screenshot%202026-05-27%20201819.png)
---

## Spend Optimization Results

The audit engine analyzes subscriptions, identifies oversized plans or unnecessary seat allocations, and estimates monthly + annual savings.

![image alt](https://github.com/OJASWANI-tech/Credex-stack-audit/blob/main/Screenshot%202026-05-27%20213718.png?raw=true)
---

## Tactical Recommendations

Each tool receives a finance-style recommendation with reasoning and projected savings opportunities.

![image alt](https://github.com/OJASWANI-tech/Credex-stack-audit/blob/main/Screenshot%202026-05-27%20214016.png?raw=true)
---

# Features

- AI tooling spend audit engine
- Real-time monthly + annual savings calculations
- Per-tool optimization recommendations
- Tactical cost-reduction insights
- Team-size-aware subscription analysis
- Persistent form state across reloads
- Responsive SaaS dashboard UI
- Lead capture workflow
- AI-generated personalized summaries
- Shareable audit reports
- CI/CD with GitHub Actions

---

# Supported Platforms

- Cursor
- ChatGPT
- Claude
- GitHub Copilot
- Gemini
- OpenAI API
- Anthropic API
- Windsurf

---

# Tech Stack

## Frontend
- Next.js
- TypeScript
- Tailwind CSS

## Backend / Services
- Supabase / PostgreSQL
- Resend Email API
- Anthropic API

## Deployment
- Netlify
- GitHub Actions CI

---

# How It Works

1. User enters:
   - AI tools
   - subscription plans
   - monthly spend
   - seats
   - team size
   - use case

2. The audit engine evaluates:
   - oversized plans
   - unnecessary seats
   - pricing inefficiencies
   - downgrade opportunities
   - alternative tooling options

3. Users receive:
   - monthly savings estimates
   - annualized recovery projections
   - tactical recommendations
   - AI-generated summaries

4. High-savings users are encouraged to connect with Credex for wholesale AI pricing consultations.

---

# Quick Start

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
Install Dependencies
npm install
Run Development Server
npm run dev

Open:

http://localhost:3000
Environment Variables

Create a .env.local file:


Deploy the repository directly through Netlify.

Decisions & Trade-offs
1. Rule-Based Audit Logic Instead of Fully AI-Driven Analysis

The audit engine uses deterministic financial rules for pricing recommendations instead of relying entirely on LLM outputs. This improves consistency, explainability, and trustworthiness for finance-style recommendations.

2. Next.js + TypeScript Chosen for Scalability

Next.js provided fast iteration speed, SSR support for shareable reports, and strong ecosystem tooling. TypeScript improved maintainability and reduced runtime errors during audit calculations.

3. Email Capture Happens After Value Delivery

The product intentionally delays lead capture until after the audit is shown. This improves user trust and conversion quality compared to gating the experience upfront.

4. Lightweight SaaS UI Over Heavy Dashboard Frameworks

The interface was intentionally kept clean and focused to resemble modern fintech tooling rather than enterprise admin panels.

5. Conservative Recommendation Engine

The audit engine avoids aggressive optimization suggestions when confidence is low. In several cases, the system explicitly recommends maintaining the current subscription to preserve trust.

Testing

Run tests:

npm run test

Lint:

npm run lint
CI/CD

GitHub Actions automatically runs:

lint checks
tests
validation workflows

on every push to main.

Accessibility

The UI was designed with:

responsive layouts
semantic HTML
keyboard accessibility
high-contrast typography
Lighthouse optimization targets
Future Improvements
Benchmark analytics
PDF export
Team collaboration support
Admin analytics dashboard
Historical spend tracking
AI usage forecasting
Embedded widget version
Stripe billing integrations
Project Structure
/app
/components
/utils
/types
/public
/screenshots
Author

Built by Ojaswani Rajor
