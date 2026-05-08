// Featured events highlighted on the homepage.
// Full list lives in the embedded Google Calendar — only put the
// next ~3 highlight events here.

export type FeaturedEvent = {
  id: string;
  title: string;
  dateLabel: string; // e.g. "Aug 14, 2026"
  time?: string; // e.g. "6:00 – 7:30 PM"
  location?: string;
  description: string;
  // Optional Zeffy ticketing or SignUpGenius URL — leave undefined if no signup needed.
  signupUrl?: string;
  signupLabel?: string;
};

export const featuredEvents: FeaturedEvent[] = [
  {
    id: 'back-to-school-night',
    title: 'Back to School Night',
    dateLabel: 'Aug 14, 2026',
    time: '6:00 – 7:30 PM',
    location: 'Renner Elementary',
    description:
      'Meet your child\'s teacher, drop off supplies, and say hi to your PTA board.',
  },
  {
    id: 'pta-membership',
    title: 'Join the PTA for 2026–27',
    dateLabel: 'Open now',
    description:
      'Annual membership is the easiest way to support Renner. Sign up online in under 2 minutes.',
    signupUrl:
      'https://www.zeffy.com/en-US/ticketing/2026-2027-renner-elementary-pta-membership',
    signupLabel: 'Become a member',
  },
  {
    id: 'fall-party',
    title: 'Fall Party',
    dateLabel: 'October 2026',
    description:
      'Classroom parties hosted by room parents. Sign up to volunteer or send treats.',
  },
];
