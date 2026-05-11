# Renner Elementary PTA Website

This is **Paige Rodenberg's** PTA website for Alfred L. Renner Elementary (Park Hill School District). Founder is **non-technical** — explain code edits in plain language, favor free-tier tools, and keep content editable from a single place rather than scattered across components.

Sister project: Itty Bitty Pantry Network (separate codebase at `/Users/paigerodenberg/Itty Bitty Pantry`).

---

## Stack & hosting

- **Vite + React 18 + TypeScript + Tailwind CSS v3 + React Router v6** — static SPA
- **Hosted on Vercel** (free tier) at `https://renner-pta-website.vercel.app`
- **GitHub repo:** `github.com/prodeykcmo/renner-pta-website`
- **Auth:** `gh` CLI authenticated via OAuth as `prodeykcmo`. Push works directly from any future session — no auth steps needed.
- **Deploy flow:** any commit to `main` triggers Vercel auto-deploy in ~60 seconds. No manual deploy step.

---

## Current state (as of May 8, 2026)

✅ **Live and deployed:**
- Homepage with roadrunner mascot in hero, header, footer
- Royal blue + true red + stark white color palette (matches logo)
- Red spirit stripe at top of every page
- Footer credits "Alfred L. Renner Elementary, Park Hill School District"
- TikTok icon + handle `@renner.elementary8` in footer (alongside Facebook + Instagram)
- Translate widget at top of every page
- Logo at `public/renner-logo.png` (700×640, optimized)

📁 **Single sources of truth for content:**
- `src/siteConfig.ts` — all copy, contact info, social URLs, integration URLs
- `src/data/events.ts` — homepage featured events
- `src/data/board.ts` — board roster (placeholders for now)
- `src/data/sponsors.ts` — empty at MVP

🎨 **Brand:**
- Royal blue `#1E40AF` (primary) + true red `#DC2626` (secondary) + stark white
- Fonts: Poppins (display) + Inter (body)
- Mascot: Roadrunner

---

## Decisions made (not yet built)

Long strategy conversations happened on May 8 — outcomes:

### 1. Embed strategy (HYBRID)
- **Full-page embeds for primary flows:** Zeffy membership, donations, store, event tickets; Google Calendar; SignUpGenius; YouTube; newsletter signup; photo galleries; TikTok video feed
- **Linkouts as edge case:** mobile-app deep links (TikTok app), admin tools
- Each flow gets its own page (`/membership`, `/donate`, `/shop`, `/events/[slug]`, `/sponsors`, `/calendar`, `/volunteer`, `/photos`)
- Goal: every PTA action stays on the website; no shuffling to other tabs

### 2. Succession & non-technical handoff (CRITICAL)
- **Decap CMS** to be added at `/admin` — board members log in via GitHub, edit content via friendly forms, commits happen automatically
- **GitHub Organization** `renner-pta` (to be created) — repo transferred so multiple board members can be owners
- **Shared institutional email** (`rennerpta@gmail.com` or similar, TBD) — owns all accounts (Vercel, Zeffy, Domain, etc.), password in shared Bitwarden
- **Operations Manual** in Google Drive — single doc, screenshots, "how to do X" guides
- **Bus factor rule:** always at least 2 people with admin access to every account
- **Board admin dashboard** at `/admin/board` — password-protected, lists all accounts and access

### 3. Payments architecture (HYBRID, $0 fees)
Three-tier stack:
- **Tier 1 — Zeffy** (primary): cards, Apple Pay, Google Pay, ACH for memberships/donations/tickets/shop. Uses Stripe under the hood. $0 to PTA (donor tip model).
- **Tier 2 — PayPal Giving Fund + Venmo Charity** (secondary): for Venmo/PayPal users. Free for verified 501(c)(3). 2-week verification process.
- **Tier 3 — Offline tracking** (cash/check): admin tool we build, stores in Supabase free tier.

Each payment surface is its own page so transactions auto-categorize:
- `/membership` → tagged "Membership Dues YY-YY"
- `/donate` → tagged "General Donation"
- `/shop` → tagged "PTA Spirit Shop"
- `/events/[name]` → tagged event name
- `/sponsors` → tagged "Sponsor Donation" (with EIN on receipt)

Mobile-first UX: Apple/Google Pay buttons first on mobile (one-tap pay). Venmo deep-link via `venmo://` URL scheme. Forms use mobile keyboard hints.

Treasurer dashboard at `/admin/treasury`:
- Summary cards (YTD totals by category, YoY compare)
- Quick-links to Zeffy & PayPal live dashboards
- Offline payment logger (cash/check entries → Supabase → auto receipts)
- Unified CSV export (Zeffy + PayPal + offline)
- Annual donor letter generator (IRS-compliant for 501c3)

**Split payments:** explicitly NOT building. Offer installments via Zeffy recurring instead.

---

## Pending decisions (need answers from Paige before building)

1. **501(c)(3) status?** Required for PayPal Giving Fund + tax-deductible language on receipts. Get EIN.
2. **Shared PTA email** — what's the address? (Currently uses `paige.rodenberg@gmail.com` everywhere — wrong long-term.)
3. **Custom domain?** `rennerpta.org` or similar — buy under shared email when ready.
4. **Sponsor tier amounts** — Bronze/Silver/Gold/Platinum thresholds.
5. **Recurring giving option** — yes/no on monthly donations.
6. **Spirit shop fulfillment** — pickup at school office vs shipping.
7. **Existing Zeffy form URLs** — if any are already created, plug them in directly.

---

## Constraints & conventions

- **BCC requirement:** every form (Tally/Formspree/Zeffy/etc.) must BCC `paige.rodenberg@gmail.com` AND `beepbeeppta@gmail.com`. Configure this inside the form tool, not in code.
- **Zeffy hedge:** Paige initially noted "we are using a free trial of Zeffy" but Zeffy publicly markets as 100% free forever — likely a misunderstanding. Either way, architecture keeps Zeffy URLs swappable via `siteConfig.ts.links.*` so we can switch to Givebutter / DonorBox / etc. without component edits.
- **Photos of children:** PTA must have media release on file. Build an "remove this photo" request flow.
- **Accessibility:** alt text, color contrast, screen-reader compatibility — bake in now, not later.
- **Default to free tier** for any new service. Cost-tracking is part of every architectural decision.

---

## How to work with Paige

- She is the founder of both this PTA initiative and Itty Bitty Pantry Network — wears many hats, technical level is **non-deep**
- Don't assume git/CLI knowledge — explain in plain language
- When she says "change X," check `siteConfig.ts` and `src/data/*.ts` first before touching components
- She owns `prodeykcmo` GitHub, `paige.rodenberg@gmail.com` Google/Vercel/Zeffy
- Free hosting + zero-fee payment processing are firm requirements, not aspirations
- Show before/after when making changes. Verify builds before claiming done.

---

## Next planned session

Phase 1 of the build-out: scaffolded pages for `/membership`, `/donate`, `/shop`, `/events/[slug]`, `/sponsors`, `/calendar`, `/volunteer`, `/photos` with placeholder embed codes marked `REPLACE_WITH_REAL_URL`. Sponsor showcase wall (hardcoded test data). Board admin dashboard at `/admin/board`. ~6 hours of work.

After that: Decap CMS setup (Session 2), real URLs plugged in (Session 3), treasurer training & ops manual (Session 4).
