// Business sponsors / community partners.
// Tier names match the sponsor application tiers; rename here if those change.

export type Sponsor = {
  name: string;
  tier: 'Roadrunner' | 'Scarlet' | 'Friend';
  url?: string;
  blurb?: string;
};

export const sponsors: Sponsor[] = [];
