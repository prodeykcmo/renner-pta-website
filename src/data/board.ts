// PTA board roster.
// Edit this file each year when the new board takes over.

export type BoardMember = {
  name: string;
  role: string;
  email?: string; // public-facing email — leave blank for none
  bio?: string;
};

export const boardMembers: BoardMember[] = [
  {
    name: 'TBD',
    role: 'President',
  },
  {
    name: 'TBD',
    role: 'Vice President',
  },
  {
    name: 'TBD',
    role: 'Treasurer',
  },
  {
    name: 'TBD',
    role: 'Secretary',
  },
  {
    name: 'TBD',
    role: 'Volunteer Coordinator',
  },
  {
    name: 'TBD',
    role: 'Communications Chair',
  },
];
