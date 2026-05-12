// =============================================================================
//  DOCUMENTS — the list shown on the /documents page.
// =============================================================================
//
//  TO ADD A NEW DOCUMENT:
//    1. Upload the PDF to the `public/` folder.
//    2. Add a new entry to the `documents` array below.
//    3. Pick a `category` — to add a new category, add it to both
//       `DocCategory` and `documentCategories` below.
//
//  Filtering on the page is automatic — set `schoolYear` (e.g. '2024-2025')
//  and it will appear under that year. Bylaws and other timeless documents
//  can leave `schoolYear` undefined.
// =============================================================================

export type DocCategory =
  | 'meeting-minutes'
  | 'bylaws'
  | 'budget'
  | 'staff-favorites'
  | 'other';

export type PTADocument = {
  id: string;
  title: string;
  category: DocCategory;
  /** School year e.g. '2024-2025'. Optional — leave undefined for timeless docs. */
  schoolYear?: string;
  /** ISO date 'YYYY-MM-DD'. Optional but recommended for sorting. */
  date?: string;
  /** Filename in `/public`. Just the name, no leading slash. */
  filename: string;
  /** Optional short note shown under the title. */
  description?: string;
};

export const documentCategories: {
  value: DocCategory;
  label: string;
  description: string;
}[] = [
  {
    value: 'meeting-minutes',
    label: 'Meeting minutes',
    description: 'Notes from monthly PTA meetings.',
  },
  {
    value: 'bylaws',
    label: 'Bylaws',
    description: 'How the PTA operates, votes, and spends funds.',
  },
  {
    value: 'budget',
    label: 'Budget & finance',
    description: 'Where dues and donations go each year.',
  },
  {
    value: 'staff-favorites',
    label: 'Staff favorites',
    description: "Each teacher and staff member's favorite snacks, drinks, and gift cards.",
  },
  {
    value: 'other',
    label: 'Other',
    description: 'Anything else not covered above.',
  },
];

export const documents: PTADocument[] = [
  // ---- 2024-2025 meeting minutes (newest first) ----
  {
    id: 'mm-2025-01-23',
    title: 'January 23, 2025',
    category: 'meeting-minutes',
    schoolYear: '2024-2025',
    date: '2025-01-23',
    filename: '01.23.25_pta_meeting_minutes.pdf',
  },
  {
    id: 'mm-2024-12-12',
    title: 'December 12, 2024',
    category: 'meeting-minutes',
    schoolYear: '2024-2025',
    date: '2024-12-12',
    filename: '12-12-24_meeting_minutes.pdf',
  },
  {
    id: 'mm-2024-11-21',
    title: 'November 21, 2024',
    category: 'meeting-minutes',
    schoolYear: '2024-2025',
    date: '2024-11-21',
    filename: '11.21.24_pta_meetin_gminutes.pdf',
  },
  {
    id: 'mm-2024-10-17',
    title: 'October 17, 2024',
    category: 'meeting-minutes',
    schoolYear: '2024-2025',
    date: '2024-10-17',
    filename: '10-17-24_meeting_minutes.pdf',
  },
  {
    id: 'mm-2024-09-19',
    title: 'September 19, 2024',
    category: 'meeting-minutes',
    schoolYear: '2024-2025',
    date: '2024-09-19',
    filename: '9-19-24_meeting_minutes.docx.pdf',
  },
  {
    id: 'mm-2024-08-22',
    title: 'August 22, 2024',
    category: 'meeting-minutes',
    schoolYear: '2024-2025',
    date: '2024-08-22',
    filename: '8.22.24_pta_meeting_minutes.pdf',
  },
  {
    id: 'mm-2024-07-09',
    title: 'July 9, 2024 — Summer board',
    category: 'meeting-minutes',
    schoolYear: '2024-2025',
    date: '2024-07-09',
    description: 'Summer board planning meeting.',
    filename: '7.9.24_pta_meeting_minutes_summer_board.pdf',
  },

  // ---- Bylaws ----
  {
    id: 'bylaws-2022-12-06',
    title: 'Renner PTA Bylaws',
    category: 'bylaws',
    date: '2022-12-06',
    description: 'Current governing document, adopted December 6, 2022.',
    filename: 'alfred_l_renner_pta_bylaws_12.6.22.docx_1.pdf',
  },
];
