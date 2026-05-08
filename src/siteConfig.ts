// =============================================================================
//  SITE CONFIG  —  the file you'll edit most often
// =============================================================================
//
//  Edit values below to update copy, links, and tools across the entire site.
//  Anything inside `links` is intentionally swappable — if you change Zeffy
//  for another platform later, change the URL here and the rest of the site
//  keeps working.
//
//  Anything marked `TODO` is a placeholder. The site will still build with
//  `#` links, but those buttons won't do anything until you paste real URLs.
// =============================================================================

export const siteConfig = {
  name: 'Renner Elementary PTA',
  shortName: 'Renner PTA',
  schoolName: 'Alfred L. Renner Elementary School',
  district: 'Park Hill School District',
  mascot: 'Roadrunners',
  tagline: 'Where every Roadrunner family belongs.',
  mission:
    'The Renner PTA brings together parents, teachers, and community to support every student at Renner Elementary — through events, fundraising, volunteering, and good old-fashioned showing up.',

  // Contact
  contact: {
    email: 'beepbeeppta@gmail.com',
    // Forms on this site notify the PTA inbox above. To also send a copy to
    // a personal address, configure the BCC inside each third-party tool
    // (Zeffy, Tally, etc.) — Zeffy: Settings → Notifications → Add recipient.
    bccEmail: 'paige.rodenberg@gmail.com',
    schoolPhone: '816-359-4350',
    address: {
      line1: '7401 NW Barry Road',
      city: 'Kansas City',
      state: 'MO',
      zip: '64152',
    },
  },

  // Social
  social: {
    facebook: 'https://facebook.com/RennerPTA',
    instagram: 'https://instagram.com/rennerpta',
  },

  // -------------------------------------------------------------------------
  // SWAPPABLE LINKS — change a URL, the whole site updates.
  // -------------------------------------------------------------------------
  links: {
    // Zeffy membership form (2026-2027 PTA dues)
    membership:
      'https://www.zeffy.com/en-US/ticketing/2026-2027-renner-elementary-pta-membership',

    // Donate page on Zeffy. Until a dedicated donation form is created,
    // this points at the membership form so the button always works.
    // TODO: replace with a real Zeffy donation form URL when available.
    donate:
      'https://www.zeffy.com/en-US/ticketing/2026-2027-renner-elementary-pta-membership',

    // Volunteer slot signups (SignUpGenius account TBD)
    volunteer: '#', // TODO: paste SignUpGenius URL

    // Spirit wear store (Glory Days Threads)
    spiritwear: '#', // TODO: paste Glory Days Threads URL

    // Park Hill Clothing Center (district resource)
    parkHillClothing:
      'https://www.parkhill.k12.mo.us/our-district/community-engagement/park-hill-clothing-center',

    // Recurring Microsoft Teams meeting link for monthly PTA meetings
    ptaMeeting: '#', // TODO: paste Teams meeting link

    // Newsletter signup (use Zeffy email tools, Mailchimp, or Tally)
    newsletter: '#', // TODO

    // Feedback form (Tally / Google Forms)
    feedback: '#', // TODO

    // Business support / sponsor inquiry form
    sponsor: '#', // TODO
  },

  // -------------------------------------------------------------------------
  // BACKUP DONATION METHODS — for folks who don't want to use a card online.
  // -------------------------------------------------------------------------
  donateAlternatives: {
    venmo: { handle: '@rennerPTA', url: 'https://venmo.com/rennerPTA' },
    zelle: {
      // Either a phone or email is enough; leave the other blank.
      phone: '',
      email: '',
    },
    mailedCheck: {
      payTo: 'Renner Elementary PTA',
      mailTo: '7401 NW Barry Road, Kansas City, MO 64152',
    },
  },

  // -------------------------------------------------------------------------
  // EVENTS CALENDAR
  // Replace `embedSrc` with the embed URL from your PTA Google Calendar.
  // (Google Calendar → Settings → Integrate calendar → "Embed code")
  // -------------------------------------------------------------------------
  calendar: {
    embedSrc:
      'https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FChicago',
    timezone: 'America/Chicago',
  },

  // -------------------------------------------------------------------------
  // GOOGLE TRANSLATE
  // Comma-separated list of language codes parents are most likely to use.
  // Examples: 'es' Spanish, 'vi' Vietnamese, 'zh-CN' Chinese, 'ar' Arabic.
  // Leave as 'all' to let parents pick from any of Google's 100+ languages.
  // -------------------------------------------------------------------------
  translate: {
    includedLanguages: 'all',
  },
} as const;

export type SiteConfig = typeof siteConfig;
