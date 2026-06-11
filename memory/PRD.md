# PRD — Ashraf Laidi Premium WhatsApp Market Access Landing Page

## Original Problem Statement
Build a high-converting, premium, standalone landing page selling paid access to Ashraf Laidi's private WhatsApp Broadcast Group (WBG) — timely macro, FX, commodities, indices, bonds, and intermarket analysis delivered via WhatsApp. Aesthetic: shadcn/ui + YC clarity + Vercel/Linear polish + premium financial research. No hype, no signals-scam look. Exact 15-section structure, specified copy, color palette (orange #F97316 CTA, blue #2563EB data accent, light-first with dark premium sections), Inter + JetBrains Mono typography.

## User Choices
- React + Tailwind + shadcn/ui (user accepted React over Next.js)
- All "Join WhatsApp Access" CTAs smooth-scroll to Pricing section
- Real prices: 6 Months $550 USD, Yearly $995 USD ("Best Value")
- Frontend-only prototype — no payment flow yet
- WBG context provided: broadcast format, anonymous members, individual Q&A with Ashraf, messages as text/charts/voice notes/video links (incorporated in product preview panel + FAQ)

## Architecture
- Frontend-only React (CRA) app, single route `/` → `src/pages/LandingPage.jsx`
- Components in `src/components/landing/`: Header, Hero, CredibilityStrip, ProblemSection, ProductPreview, WhatYouGet, ExampleUpdates, MarketsCovered, HowItWorks, Pricing, Testimonials, FAQ, RiskDisclaimer, FinalCTA, Footer, StickyMobileCTA, Reveal (framer-motion wrapper)
- `src/lib/scrollTo.js` smooth-scroll helper; sections use `scroll-mt-20` for sticky-header offset
- Fonts via Google Fonts in `public/index.html` (Inter + JetBrains Mono); SEO title/meta set
- Backend (FastAPI/Mongo) untouched template — unused by the page

## Implemented (June 2026)
- ✅ All 15 sections per brief, exact copy, palette, and typography hierarchy
- ✅ Sticky glass header + mobile Sheet drawer + sticky mobile bottom CTA (appears after 600px scroll)
- ✅ Hero with mock WhatsApp broadcast card, SVG mini-chart, dark market dashboard card (DXY/XAUUSD/EURUSD/US10Y/NASDAQ)
- ✅ Pricing $550 / $995 with Best Value highlight; CTAs show sonner toast (checkout placeholder)
- ✅ FAQ shadcn Accordion (8 items), risk disclaimer, dark final CTA, minimal footer
- ✅ Reveal animations (framer-motion, reduced-motion supported), data-testid on all interactive elements
- ✅ E2E tested (iteration_1): 100% pass; a11y SheetTitle fix applied

## Backlog
- P0: Connect pricing CTAs to real checkout (Stripe available with test key) + WhatsApp number registration flow
- P1: "Sign in" flow (currently placeholder), footer link destinations, newsletter capture
- P2: Real testimonial content, analytics events on CTA clicks, Arabic/French localization
