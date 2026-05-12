// PTA board roster.
// Edit this file each year when the new board takes over.

export type BoardMember = {
  name: string;
  role: string;
  email?: string; // public-facing email — leave blank for none
  bio?: string;
};

export const boardMembers: BoardMember[] = [
  { name: 'Janna Kittle', role: 'Co-President' },
  { name: 'Kelly Van Kirk', role: 'Co-President' },
  { name: 'Angela Demangone', role: 'VP of Means & Ways' },
  { name: 'Jamie Fryatt', role: 'VP of Means & Ways' },
  { name: 'Kristen Fallen', role: 'Recording Secretary' },
  { name: 'Krystal Schwenker', role: 'Corresponding Secretary' },
  { name: 'Kim Kern', role: 'Historian' },
  { name: 'Paige Rodenberg', role: 'VP of Membership' },
  { name: 'Matthew Rodenberg', role: 'Treasurer' },
];
