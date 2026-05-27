# StackAudit — AI Spend Optimization Platform

StackAudit is a free AI spend auditing platform designed for startups, engineering teams, and indie builders who want to optimize their AI tooling costs. The platform analyzes subscriptions across tools like ChatGPT, Claude, Cursor, Copilot, Gemini, and API usage to identify overspending, recommend better-fit plans or alternatives, and estimate monthly and annual savings instantly.

The goal of the product is to help teams make financially smarter AI infrastructure decisions while also surfacing opportunities to reduce costs through AI credits and vendor optimization.

## Live Demo

Deployed URL: https://credex-stack-audit.netlify.app/

---

# Features

- AI spend audit engine
- Multi-tool pricing comparison
- Savings recommendations with reasoning
- AI-generated personalized audit summary
- Shareable public audit reports
- Lead capture with backend storage
- Responsive UI optimized for desktop and mobile
- Persistent form state across reloads

---

# Screenshots

## Landing Page
(Add screenshot here)

## Audit Results Dashboard
(Add screenshot here)

## Savings Breakdown
(Add screenshot here)

## Screen Recording
Loom/YouTube Demo: (Add link here)

---

# Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Netlify
- Supabase
- Anthropic/OpenAI API

---

# Quick Start

## Clone the repository

```bash
git clone <your-repo-url>
cd <repo-name>
Install dependencies
npm install
Run locally
npm run dev

Visit:

http://localhost:3000
Environment Variables

Create a .env.local file:

NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
OPENAI_API_KEY=your_key
ANTHROPIC_API_KEY=your_key
Deployment

The project is deployed on Netlify.

Production URL:
https://credex-stack-audit.netlify.app/

To deploy manually:

npm run build

Then connect the repository to Netlify or Vercel.

Decisions & Trade-offs
1. Hardcoded Audit Logic Instead of Fully AI-Driven Decisions

The audit calculations use deterministic pricing and rule-based logic rather than relying entirely on LLM outputs. This improves consistency, transparency, and financial reliability for savings recommendations.

2. Next.js + TypeScript Instead of Plain React

I chose Next.js for routing, server-side capabilities, metadata handling, and scalable deployment support. TypeScript was used to reduce runtime bugs and improve maintainability as pricing schemas grew more complex.

3. Email Gate After Value Delivery

The app shows the full audit before asking for user information. This improves trust and conversion rates while aligning with good product-led growth principles.

4. Local Storage Persistence Instead of Mandatory Authentication

Rather than forcing account creation, form state is stored locally so users can continue their audit seamlessly across reloads with minimal friction.

5. Lightweight UI Over Complex Dashboards

I intentionally avoided overly enterprise-style dashboards and focused on a clean, fast, screenshot-friendly interface optimized for sharing and quick comprehension.

Folder Structure
app/
utils/
types/
.github/workflows/

README.md
ARCHITECTURE.md
DEVLOG.md
PRICING_DATA.md
Future Improvements
PDF export support
Benchmarking against similar companies
Referral system
Advanced API usage analytics
Spend trend visualizations
Multi-team reporting
Author

Ojaswani Rajor
