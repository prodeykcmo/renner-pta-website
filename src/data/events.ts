// =============================================================================
//  EVENTS — full 2026-27 Renner PTA calendar.
// =============================================================================
//
//  TO EDIT EVENTS:
//    • Update the `events` array below — add, remove, or modify entries.
//    • Confirmed events: set `date` to ISO ("2026-08-12") and `dateTbd: false`.
//    • TBD events: set `date: null` and `dateTbd: true` — page shows
//      "Date TBD — <month>".
//    • Set `featured: true` for events eligible for the homepage carousel.
//    • Set `volunteerLink: true` to surface a "Sign up to volunteer" link.
//    • Set `teamsLink: true` to show the Microsoft Teams join button
//      (currently used for monthly PTA meetings).
//
//  CATEGORIES: meeting | school | fundraiser | community | restaurant | fifth-grade
//  These map to filter chips on /events.
// =============================================================================

export type EventCategory =
  | 'meeting'
  | 'school'
  | 'fundraiser'
  | 'community'
  | 'restaurant'
  | 'fifth-grade';

export type PTAEvent = {
  id: string;
  title: string;
  /** ISO date 'YYYY-MM-DD' or null if TBD. */
  date: string | null;
  /** When true, display "Date TBD — <month>" instead of a date. */
  dateTbd: boolean;
  /** Month label, e.g. "September 2026". Used when dateTbd is true and for grouping. */
  month: string;
  /** Display-friendly time string, or null. */
  time: string | null;
  location: string;
  description: string;
  category: EventCategory;
  /** Show the Microsoft Teams join button. */
  teamsLink: boolean;
  /** Show a "Sign up to volunteer" link. */
  volunteerLink: boolean;
  /** Marks events that are primarily for 5th-grade families. */
  fifthGradeOnly: boolean;
  /** Eligible for the homepage featured events section. */
  featured: boolean;
};

export const events: PTAEvent[] = [
  // ── AUGUST 2026 ────────────────────────────────────────────────────────────
  {
    id: 'kindergarten-popsicles-2026',
    title: 'Kindergarten Popsicles',
    date: '2026-08-12',
    dateTbd: false,
    month: 'August 2026',
    time: '5:30–6:30 PM',
    location: 'Renner Elementary Playground',
    description:
      'Incoming kindergarten families are invited to meet on the playground for popsicles before the school year begins. A great chance to meet other families and get a feel for the school.',
    category: 'school',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: true,
  },
  {
    id: 'spirit-wear-store-fall-2026',
    title: 'Spirit Wear Store — Online Ordering Open',
    date: '2026-08-20',
    dateTbd: false,
    month: 'August 2026',
    time: null,
    location: 'Online — Glory Days',
    description:
      'The Renner spirit wear store is open for online ordering from August 20 through September 11. Show your Roadrunner pride! Orders ship directly to you.',
    category: 'fundraiser',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'back-to-school-night-2026',
    title: 'Back to School Night',
    date: '2026-08-20',
    dateTbd: false,
    month: 'August 2026',
    time: '5:30–7:00 PM',
    location: 'Renner Elementary',
    description:
      "Meet your child's teacher, drop off supplies, and visit the PTA membership and spirit wear tables in the hallway. A great way to start the year connected.",
    category: 'school',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: true,
  },

  // ── SEPTEMBER 2026 ─────────────────────────────────────────────────────────
  {
    id: 'pta-meeting-sep-2026',
    title: 'PTA Meeting — September',
    date: '2026-09-01',
    dateTbd: false,
    month: 'September 2026',
    time: '6:30 PM',
    location: 'Renner Elementary + Virtual (Teams)',
    description:
      'Monthly PTA meeting open to all Renner families. Attend in person or join virtually via Microsoft Teams.',
    category: 'meeting',
    teamsLink: true,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'parent-orientation-sep-2026',
    title: 'Parent Orientation',
    date: '2026-09-09',
    dateTbd: false,
    month: 'September 2026',
    time: '5:30–7:00 PM',
    location: 'Renner Elementary',
    description:
      'An evening for parents to learn more about school routines, expectations, and how to get involved with the PTA.',
    category: 'school',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: true,
  },
  {
    id: 'papa-johns-sep-2026',
    title: 'Papa Johns Spirit Night',
    date: null,
    dateTbd: true,
    month: 'September 2026',
    time: null,
    location: 'Papa Johns',
    description:
      'Dine at Papa Johns and a portion of your order supports Renner PTA. Date and details coming soon.',
    category: 'restaurant',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'skate-night-sep-2026',
    title: 'River Roll Skate Night',
    date: null,
    dateTbd: true,
    month: 'September 2026',
    time: '6:00–8:00 PM',
    location: 'River Roll',
    description:
      'Lace up and roll with Renner families at River Roll! A fun evening out with a portion of proceeds supporting the PTA.',
    category: 'community',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },

  // ── OCTOBER 2026 ───────────────────────────────────────────────────────────
  {
    id: 'culture-night-oct-2026',
    title: 'Culture Night',
    date: '2026-10-01',
    dateTbd: false,
    month: 'October 2026',
    time: '5:00–7:00 PM',
    location: 'Renner Elementary',
    description:
      'Celebrate the rich cultures represented in the Renner community. Families are encouraged to share food, clothing, music, and traditions from their heritage. All are welcome.',
    category: 'community',
    teamsLink: false,
    volunteerLink: true,
    fifthGradeOnly: false,
    featured: true,
  },
  {
    id: 'pta-meeting-oct-2026',
    title: 'PTA Meeting — October',
    date: '2026-10-06',
    dateTbd: false,
    month: 'October 2026',
    time: '6:30 PM',
    location: 'Renner Elementary + Virtual (Teams)',
    description:
      'Monthly PTA meeting open to all Renner families. Attend in person or join virtually via Microsoft Teams.',
    category: 'meeting',
    teamsLink: true,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'chipotle-oct-2026',
    title: 'Chipotle Spirit Night',
    date: null,
    dateTbd: true,
    month: 'October 2026',
    time: null,
    location: 'Chipotle',
    description:
      'Order at Chipotle and support the Renner PTA. Mention Renner at checkout. Date and details coming soon.',
    category: 'restaurant',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'fall-parties-oct-2026',
    title: 'Fall Parties',
    date: '2026-10-23',
    dateTbd: false,
    month: 'October 2026',
    time: 'During school specials',
    location: 'Renner Elementary — classrooms',
    description:
      'Classroom fall parties hosted by room parents. Volunteers needed to help set up the evening before (October 22) and assist during parties. Sign up to volunteer!',
    category: 'school',
    teamsLink: false,
    volunteerLink: true,
    fifthGradeOnly: false,
    featured: true,
  },

  // ── NOVEMBER 2026 ──────────────────────────────────────────────────────────
  {
    id: 'pta-meeting-nov-2026',
    title: 'PTA Meeting — November',
    date: '2026-11-03',
    dateTbd: false,
    month: 'November 2026',
    time: '6:30 PM',
    location: 'Renner Elementary + Virtual (Teams)',
    description:
      'Monthly PTA meeting open to all Renner families. Special guest: teacher spotlight. Attend in person or join virtually via Microsoft Teams.',
    category: 'meeting',
    teamsLink: true,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'papa-johns-nov-2026',
    title: 'Papa Johns Spirit Night',
    date: null,
    dateTbd: true,
    month: 'November 2026',
    time: null,
    location: 'Papa Johns',
    description:
      'Dine at Papa Johns and a portion of your order supports Renner PTA. Date and details coming soon.',
    category: 'restaurant',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },

  // ── DECEMBER 2026 ──────────────────────────────────────────────────────────
  {
    id: 'pta-meeting-dec-2026',
    title: 'PTA Meeting — December',
    date: '2026-12-01',
    dateTbd: false,
    month: 'December 2026',
    time: '6:00 PM',
    location: 'Renner Elementary + Virtual (Teams)',
    description:
      'Monthly PTA meeting open to all Renner families. Attend in person or join virtually via Microsoft Teams.',
    category: 'meeting',
    teamsLink: true,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'cultural-art-event-dec-2026',
    title: 'PTA Cultural Art Event',
    date: '2026-12-11',
    dateTbd: false,
    month: 'December 2026',
    time: 'During grade level specials',
    location: 'Renner Elementary',
    description:
      'A school-wide art event celebrating cultural expression. Organized by the PTA for all students during their specials period.',
    category: 'community',
    teamsLink: false,
    volunteerLink: true,
    fifthGradeOnly: false,
    featured: true,
  },
  {
    id: 'winter-parties-dec-2026',
    title: 'Winter Parties',
    date: '2026-12-22',
    dateTbd: false,
    month: 'December 2026',
    time: 'During grade level specials',
    location: 'Renner Elementary — classrooms',
    description:
      'Classroom winter parties hosted by room parents. Volunteers needed to help with setup on December 21 and assist during parties. Sign up to volunteer!',
    category: 'school',
    teamsLink: false,
    volunteerLink: true,
    fifthGradeOnly: false,
    featured: false,
  },

  // ── JANUARY 2027 ───────────────────────────────────────────────────────────
  {
    id: 'pta-meeting-jan-2027',
    title: 'PTA Meeting — January',
    date: '2027-01-05',
    dateTbd: false,
    month: 'January 2027',
    time: '6:30 PM',
    location: 'Renner Elementary + Virtual (Teams)',
    description:
      'Monthly PTA meeting open to all Renner families. Attend in person or join virtually via Microsoft Teams.',
    category: 'meeting',
    teamsLink: true,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'clothing-center-volunteer-jan-2027',
    title: 'Renner Clothing Center Volunteer Day',
    date: null,
    dateTbd: true,
    month: 'January 2027',
    time: null,
    location: 'Park Hill Clothing Center — 8009 N Atkins Ave',
    description:
      'Come volunteer at the Park Hill Clothing Center on behalf of the Renner community. Help sort donations and assist families. Open to all Renner families. Date to be confirmed.',
    category: 'community',
    teamsLink: false,
    volunteerLink: true,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'papa-johns-jan-2027',
    title: 'Papa Johns Spirit Night',
    date: null,
    dateTbd: true,
    month: 'January 2027',
    time: null,
    location: 'Papa Johns',
    description:
      'Dine at Papa Johns and a portion of your order supports Renner PTA. Date and details coming soon.',
    category: 'restaurant',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },

  // ── FEBRUARY 2027 ──────────────────────────────────────────────────────────
  {
    id: 'pta-meeting-feb-2027',
    title: 'PTA Meeting — February',
    date: '2027-02-02',
    dateTbd: false,
    month: 'February 2027',
    time: '6:30 PM',
    location: 'Renner Elementary + Virtual (Teams)',
    description:
      'Monthly PTA meeting open to all Renner families. Attend in person or join virtually via Microsoft Teams.',
    category: 'meeting',
    teamsLink: true,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'roadshow-meeting-feb-2027',
    title: "Dr. Kimbrel's Community Road Show",
    date: null,
    dateTbd: true,
    month: 'February 2027',
    time: '6:30 PM',
    location: 'Congress — location TBD',
    description:
      'A community meeting hosted by Dr. Kimbrel. Open to Renner families and the broader Park Hill community. Details and location to be confirmed.',
    category: 'community',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'skate-night-feb-2027',
    title: 'River Roll Skate Night',
    date: null,
    dateTbd: true,
    month: 'February 2027',
    time: '6:00–8:00 PM',
    location: 'River Roll',
    description:
      'A fun family skate night with a portion of proceeds supporting Renner PTA. Date coming soon.',
    category: 'community',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'chipotle-feb-2027',
    title: 'Chipotle Spirit Night',
    date: null,
    dateTbd: true,
    month: 'February 2027',
    time: null,
    location: 'Chipotle',
    description:
      'Order at Chipotle and support Renner PTA. Mention Renner at checkout. Date and details coming soon.',
    category: 'restaurant',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },

  // ── MARCH 2027 ─────────────────────────────────────────────────────────────
  {
    id: 'pta-meeting-mar-2027',
    title: 'PTA Meeting — March',
    date: '2027-03-02',
    dateTbd: false,
    month: 'March 2027',
    time: '6:30 PM',
    location: 'Renner Elementary + Virtual (Teams)',
    description:
      'Monthly PTA meeting open to all Renner families. Attend in person or join virtually via Microsoft Teams.',
    category: 'meeting',
    teamsLink: true,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'glow-run-kickoff-2027',
    title: 'Glow Run Fundraiser Kickoff & Game Night',
    date: '2027-03-11',
    dateTbd: false,
    month: 'March 2027',
    time: null,
    location: 'Renner Elementary',
    description:
      'Kick off the Glow Run fundraiser with a family game night! Details on pledges, prizes, and how to participate will be shared at this event.',
    category: 'fundraiser',
    teamsLink: false,
    volunteerLink: true,
    fifthGradeOnly: false,
    featured: true,
  },
  {
    id: 'glow-run-celebration-2027',
    title: 'Glow Run Celebration',
    date: '2027-03-19',
    dateTbd: false,
    month: 'March 2027',
    time: null,
    location: 'Renner Elementary',
    description:
      'The big day — students run, glow, and celebrate all the funds raised for Renner! One of the most exciting events of the school year. Volunteers welcome.',
    category: 'fundraiser',
    teamsLink: false,
    volunteerLink: true,
    fifthGradeOnly: false,
    featured: true,
  },
  {
    id: 'papa-johns-mar-2027',
    title: 'Papa Johns Spirit Night',
    date: null,
    dateTbd: true,
    month: 'March 2027',
    time: null,
    location: 'Papa Johns',
    description:
      'Dine at Papa Johns and a portion of your order supports Renner PTA. Date and details coming soon.',
    category: 'restaurant',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },

  // ── APRIL 2027 ─────────────────────────────────────────────────────────────
  {
    id: 'pta-meeting-apr-2027',
    title: 'PTA Meeting — April',
    date: '2027-04-06',
    dateTbd: false,
    month: 'April 2027',
    time: '6:30 PM',
    location: 'Renner Elementary + Virtual (Teams)',
    description:
      'Monthly PTA meeting open to all Renner families. Attend in person or join virtually via Microsoft Teams.',
    category: 'meeting',
    teamsLink: true,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'raising-canes-apr-2027',
    title: "Raising Cane's Spirit Night",
    date: null,
    dateTbd: true,
    month: 'April 2027',
    time: null,
    location: "Raising Cane's",
    description: "Dine at Raising Cane's and support Renner PTA. Date and details coming soon.",
    category: 'restaurant',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'spring-fling-parties-2027',
    title: 'Spring Fling Parties',
    date: '2027-04-16',
    dateTbd: false,
    month: 'April 2027',
    time: 'All day during specials',
    location: 'Renner Elementary — classrooms',
    description:
      'Classroom spring parties hosted by room parents. Volunteers needed to help with setup on April 15 and assist during parties. Sign up to volunteer!',
    category: 'school',
    teamsLink: false,
    volunteerLink: true,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'steam-night-2027',
    title: 'STEAM Night',
    date: '2027-04-29',
    dateTbd: false,
    month: 'April 2027',
    time: '5:30–7:00 PM',
    location: 'Renner Elementary',
    description:
      'An interactive evening of science, technology, engineering, art, and math activities for the whole family. One of the most popular events of the year — bring the kids!',
    category: 'school',
    teamsLink: false,
    volunteerLink: true,
    fifthGradeOnly: false,
    featured: true,
  },

  // ── MAY 2027 ───────────────────────────────────────────────────────────────
  {
    id: 'pta-meeting-may-2027',
    title: 'PTA Meeting — May',
    date: '2027-05-04',
    dateTbd: false,
    month: 'May 2027',
    time: '6:30 PM',
    location: 'Renner Elementary + Virtual (Teams)',
    description:
      'Monthly PTA meeting open to all Renner families. Attend in person or join virtually via Microsoft Teams.',
    category: 'meeting',
    teamsLink: true,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'kindergarten-kickoff-may-2027',
    title: 'Kindergarten Kick-Off',
    date: '2027-05-06',
    dateTbd: false,
    month: 'May 2027',
    time: null,
    location: 'Renner Elementary',
    description:
      'Welcome event for incoming kindergarten families for the 2027–28 school year. PTA membership and spirit wear tables on site. Come meet the community!',
    category: 'school',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'pta-carnival-2027',
    title: 'PTA Carnival',
    date: '2027-05-13',
    dateTbd: false,
    month: 'May 2027',
    time: '5:00–7:00 PM',
    location: 'Renner Elementary',
    description:
      'The biggest celebration of the year! Games, food, music, and fun for the whole Renner community. Volunteers are the heart of this event — sign up to help.',
    category: 'community',
    teamsLink: false,
    volunteerLink: true,
    fifthGradeOnly: false,
    featured: true,
  },
  {
    id: 'papa-johns-may-2027',
    title: 'Papa Johns Spirit Night',
    date: null,
    dateTbd: true,
    month: 'May 2027',
    time: null,
    location: 'Papa Johns',
    description:
      'Dine at Papa Johns and a portion of your order supports Renner PTA. Date and details coming soon.',
    category: 'restaurant',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'fifth-grade-graduation-2027',
    title: '5th Grade Graduation',
    date: '2027-05-18',
    dateTbd: false,
    month: 'May 2027',
    time: '9:30 AM',
    location: 'Renner Elementary',
    description:
      'Celebrate our 5th graders as they move on to middle school! A special ceremony for graduating students and their families.',
    category: 'fifth-grade',
    teamsLink: false,
    volunteerLink: true,
    fifthGradeOnly: true,
    featured: true,
  },
  {
    id: 'field-day-2027',
    title: 'Field Day',
    date: '2027-05-21',
    dateTbd: true,
    month: 'May 2027',
    time: 'All day',
    location: 'Renner Elementary',
    description:
      'An all-day outdoor celebration with games, activities, and friendly competition for all students. Volunteers welcome to help run stations.',
    category: 'school',
    teamsLink: false,
    volunteerLink: true,
    fifthGradeOnly: false,
    featured: false,
  },
  {
    id: 'fifth-grade-last-recess-2027',
    title: '5th Grade Last Recess & Staff Kickball',
    date: '2027-05-28',
    dateTbd: false,
    month: 'May 2027',
    time: '12:00–2:45 PM',
    location: 'Renner Elementary',
    description:
      'A longer-than-usual final recess for 5th graders, capped off with a 5th grade vs. staff kickball game. A beloved Renner tradition.',
    category: 'fifth-grade',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: true,
    featured: false,
  },
  {
    id: 'fifth-grade-walkout-2027',
    title: '5th Grade Walk-Out',
    date: '2027-05-28',
    dateTbd: false,
    month: 'May 2027',
    time: '9:30 AM–12:00 PM',
    location: 'Renner Elementary',
    description:
      'The traditional 5th grade walk-out — students walk the hallways one final time as Renner Roadrunners while the school cheers them on. Families welcome.',
    category: 'fifth-grade',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: true,
    featured: false,
  },
  {
    id: 'end-of-year-social-2027',
    title: 'End of Year Social',
    date: '2027-05-28',
    dateTbd: false,
    month: 'May 2027',
    time: null,
    location: 'Fifth & Emery',
    description:
      'Cap off the school year with the Renner community at Fifth & Emery. A casual social for families and staff to celebrate a great year together.',
    category: 'community',
    teamsLink: false,
    volunteerLink: false,
    fifthGradeOnly: false,
    featured: false,
  },
];

// ----- Helpers ---------------------------------------------------------------

export const categoryLabels: Record<EventCategory, string> = {
  meeting: 'PTA Meeting',
  school: 'School Event',
  fundraiser: 'Fundraiser',
  community: 'Community',
  restaurant: 'Restaurant Night',
  'fifth-grade': '5th Grade',
};

export const categoryStyles: Record<EventCategory, string> = {
  meeting: 'bg-navy text-white',
  school: 'bg-gold text-navy',
  fundraiser: 'bg-roadrunnerRed text-white',
  community: 'bg-teal-100 text-teal-900',
  restaurant: 'bg-amber-100 text-amber-900',
  'fifth-grade': 'bg-purple-600 text-white',
};

/** Parse 'YYYY-MM-DD' as a local Date (no timezone drift). */
export function parseLocalDate(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

/** Format an ISO date as "Thursday, August 20". */
export function formatEventDate(iso: string): string {
  return parseLocalDate(iso).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Featured events for the homepage: earliest 4, with dated events sorted
 * soonest-first and TBD events appearing after dated ones.
 */
export function getFeaturedEvents(limit = 4): PTAEvent[] {
  const featured = events.filter((e) => e.featured);
  return featured
    .slice()
    .sort((a, b) => {
      if (a.dateTbd && !b.dateTbd) return 1;
      if (!a.dateTbd && b.dateTbd) return -1;
      if (a.date && b.date) return a.date.localeCompare(b.date);
      return 0;
    })
    .slice(0, limit);
}

/** All distinct month labels in calendar order (uses first event in each month for sort). */
export function getMonthsInOrder(filtered: PTAEvent[]): string[] {
  const seen: Record<string, string> = {};
  filtered.forEach((e) => {
    if (!seen[e.month]) {
      // Use the first dated event in the month for sort key; fallback to month label parse.
      const sortKey = e.date ?? monthSortKey(e.month);
      seen[e.month] = sortKey;
    } else if (e.date && e.date < seen[e.month]) {
      seen[e.month] = e.date;
    }
  });
  return Object.keys(seen).sort((a, b) => seen[a].localeCompare(seen[b]));
}

function monthSortKey(monthLabel: string): string {
  // Convert "September 2026" → "2026-09-01"
  const [name, year] = monthLabel.split(' ');
  const monthIndex = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ].indexOf(name);
  return `${year}-${String(monthIndex + 1).padStart(2, '0')}-01`;
}
