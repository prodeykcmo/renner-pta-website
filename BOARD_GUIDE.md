# Renner PTA Website — Board Update Guide

A plain-English guide for board members who need to update the site.
Most updates take less than 5 minutes.

---

## What lives where

The site is a thin wrapper around tools you already use. **You manage the dynamic stuff in
the tool itself**, not the website code:

| Update this | In this tool | Approx. time |
|---|---|---|
| Add or change events | **Google Calendar app** (on your phone) | 1 min/event |
| Update membership form | **Zeffy dashboard** (zeffy.com) | 5 min |
| Update donation form | **Zeffy dashboard** | 5 min |
| Add volunteer slots | **SignUpGenius dashboard** | 5 min/event |
| Send a newsletter | **Zeffy email tool** (or Mailchimp) | 10 min |
| Update spirit wear | **Glory Days Threads dashboard** | n/a |

The website itself only needs editing when you change the tools, the board, or the page copy.

---

## How to update the website (no code experience required)

The website is hosted on **GitHub** and deploys automatically through **Vercel**. To edit it,
you can either:

1. Use the **GitHub website** in your browser (easiest — recommended for content edits)
2. Use **GitHub Desktop** if you'd rather edit files locally

This guide assumes the GitHub-website approach.

---

### How to edit the website on GitHub.com

1. Go to [github.com/your-username/renner-pta-website](https://github.com).
2. Find the file you want to edit (see the table below for which file does what).
3. Click the file → click the **pencil icon** (top right) to edit.
4. Make your change.
5. Scroll to the bottom → write a short note (e.g., "Updated PTA email") → click
   **Commit changes**.
6. Vercel will redeploy the site automatically in about a minute.

---

### Common edits

#### 1. Update the PTA email or school phone

**File:** `src/siteConfig.ts`

Look for the `contact` section near the top. Change the `email`, `schoolPhone`, or address
values. Save (commit). Done.

```ts
contact: {
  email: 'beepbeeppta@gmail.com',  // ← change this
  schoolPhone: '816-359-4350',     // ← or this
  ...
}
```

#### 2. Swap in a new Zeffy / SignUpGenius / Mailchimp URL

**File:** `src/siteConfig.ts`

Look for the `links` section. Each line is a different button on the site. Paste the new URL
between the quotes:

```ts
links: {
  membership: 'https://www.zeffy.com/...',  // ← Zeffy membership URL
  donate: 'https://www.zeffy.com/...',      // ← Zeffy donation URL
  volunteer: '#',                            // ← paste SignUpGenius URL here
  spiritwear: '#',                           // ← paste Glory Days URL here
  ptaMeeting: '#',                           // ← paste Teams meeting link here
  newsletter: '#',                           // ← paste Mailchimp/Zeffy newsletter URL
  ...
}
```

A `#` means "no URL yet — button will lead nowhere." Replace `#` with the real URL.

#### 3. Update the events calendar

The full calendar is a Google Calendar embed. To change which calendar is shown:

1. Open Google Calendar in a browser → **Settings** → click your PTA calendar.
2. Scroll to **Integrate calendar** → copy the **Embed code** URL (it starts with
   `https://calendar.google.com/calendar/embed?src=...`).
3. Paste that URL into `src/siteConfig.ts`:

```ts
calendar: {
  embedSrc: 'PASTE_THE_URL_HERE',
  timezone: 'America/Chicago',
},
```

The 3 "featured events" on the homepage are managed separately in
`src/data/events.ts` (so you can highlight the next 2–3 things even if there are 30 events
on the calendar).

#### 4. Update the board roster (annual)

**File:** `src/data/board.ts`

Each board member is an entry like this:

```ts
{
  name: 'Jane Roadrunner',
  role: 'President',
  email: 'jane@example.com',  // optional — leave blank for none
  bio: 'Mom of 2, served on the board since 2024.', // optional
},
```

Just edit the names and roles each year.

#### 5. Add or remove a sponsor

**File:** `src/data/sponsors.ts`

Add a new entry:

```ts
{
  name: 'Local Coffee Shop',
  tier: 'Roadrunner',  // or 'Scarlet' or 'Friend'
  url: 'https://localcoffeeshop.com',
  blurb: 'Proud Renner partner since 2026.',
},
```

#### 6. Change school colors (rebrand)

**File:** `tailwind.config.js`

The `scarlet` and `navy` color sections at the top of the file control every branded element.
Change the hex codes to rebrand the entire site at once.

---

## Translation

Every page can be translated by parents using the bar at the very top of the site. It supports
Spanish, Vietnamese, Chinese, Arabic, and 100+ other languages. **You don't need to do
anything** — Google handles the translation automatically. Just share the page URL.

---

## Form submissions

The contact form on `/contact` is currently a placeholder — submissions don't go anywhere yet.

**To make it work:**
1. Create a free form in [Tally](https://tally.so) or [Formspree](https://formspree.io).
2. In the form's Notification Settings, add **two** recipients:
   - `beepbeeppta@gmail.com` (PTA inbox)
   - `paige.rodenberg@gmail.com` (BCC)
3. Replace the form on `/contact` with the embed code from Tally/Formspree.

Same pattern for any other form (feedback, sponsor inquiry, etc.).

---

## When something breaks

1. Check Vercel — go to vercel.com → your project → **Deployments** tab. The most recent
   deployment will say "Ready" (good) or "Error" (something broke).
2. If it says Error, click into it and read the error message — usually it's a typo in
   `siteConfig.ts` or `events.ts` (missing comma, missing quote).
3. Fix the typo on GitHub. Vercel will auto-redeploy.

If you're stuck, email the person who set this up. The whole site is open-source and well
commented — anyone with React experience can pick it up in an hour.
