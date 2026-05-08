# Renner Elementary PTA Website

The official website for the Alfred L. Renner Elementary PTA (Park Hill School District).

**Live site:** _add Vercel URL after first deploy_
**Repo:** https://github.com/paige-rodenberg/renner-pta-website _(update with real URL)_

---

## What this is

A mobile-first, fast, free-to-host static site for Roadrunner families. Built so non-technical
board members can keep it running year after year.

**Stack:** Vite + React + TypeScript + Tailwind CSS, deployed on Vercel.

**Integrations (all swappable):**
- **Zeffy** — membership dues, donations, ticketing (no platform fees)
- **Google Calendar** — events calendar (board members manage from their phones)
- **SignUpGenius** — slot-based volunteer signups _(URL TBD)_
- **Google Translate widget** — language toggle on every page
- **Venmo / Zelle / mailed check** — backup donation methods

---

## Quick start (for whoever is editing the code)

```bash
npm install
npm run dev      # opens http://localhost:5173
npm run build    # production build into ./dist
```

## Deploy

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click "Add New → Project" and select `renner-pta-website`.
4. Vercel auto-detects Vite. Click **Deploy**. Done.

Every push to `main` redeploys automatically.

---

## How content lives

We deliberately concentrated editable content in a small number of files so the board can update
the site without touching React components. See [`BOARD_GUIDE.md`](./BOARD_GUIDE.md) for the
plain-English version.

| What you want to change | Edit this file |
|---|---|
| PTA email, phone, address | `src/siteConfig.ts` → `contact` |
| Zeffy / Venmo / SignUpGenius URLs | `src/siteConfig.ts` → `links` |
| Google Calendar embed | `src/siteConfig.ts` → `calendar.embedSrc` |
| Tagline / mission statement | `src/siteConfig.ts` → `tagline` / `mission` |
| Featured upcoming events | `src/data/events.ts` |
| Board roster | `src/data/board.ts` |
| Sponsors | `src/data/sponsors.ts` |
| Brand colors | `tailwind.config.js` |

Anything inside `src/components/` and `src/pages/` is structural — only edit if you're comfortable
reading React/TypeScript.

---

## Pages

- `/` — Home
- `/events` — Calendar embed + featured events
- `/join` — Membership (Zeffy embed/link) + board roster
- `/volunteer` — Volunteer opportunities + SignUpGenius link
- `/donate` — Zeffy donation + Venmo/Zelle/check alternatives
- `/embed-kit` — Pre-written blurbs, QR codes, and links for teachers & newsletters
- `/documents` — Meeting minutes, bylaws, budget, staff favorites
- `/sponsors` — Tier list + sponsor application
- `/contact` — Contact info + form

---

## Things to wire up after first deploy

These have placeholder URLs (`#`) in `siteConfig.ts` until you paste real ones:

- [ ] Volunteer signup URL (SignUpGenius)
- [ ] Spirit wear store URL (Glory Days Threads)
- [ ] Recurring Microsoft Teams meeting link
- [ ] Newsletter signup URL
- [ ] Feedback form URL
- [ ] Sponsor application URL
- [ ] Zelle phone or email
- [ ] Real Google Calendar embed source (currently shows the US Holidays calendar as a placeholder)
- [ ] Replace the Zeffy donation URL with a dedicated donation form (currently points at the
      membership form so the button works)

---

## Notes

- The site is designed so swapping Zeffy for any other platform (Givebutter, Donorbox, etc.)
  is a one-line change in `siteConfig.ts`. No component edits needed.
- Forms on this site (currently `/contact`) are frontend-only. To collect real submissions,
  embed a Tally or Formspree form and configure both `beepbeeppta@gmail.com` and the personal
  BCC address as recipients.
- The Google Translate widget is officially deprecated by Google but continues to work and is
  the only no-code, free option. If it ever breaks, swap to Weglot or build manual i18n.
