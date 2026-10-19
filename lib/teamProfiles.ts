/** E-E-A-T team profiles (About page + Organization schema). */

export const WOW_BUSINESS_FOUNDED = '2019';

export type TeamProfile = {
  name: string;
  role: string;
  experience: string;
  /** Optional photo in /public. Leave empty to show initials until a real photo is added. */
  image: string;
  imageAlt: string;
};

/**
 * Real WOW Gutters Ltd team. To add a photo, drop it in /public/assets/team/
 * (e.g. harley-davies.jpg) and set `image: '/assets/team/harley-davies.jpg'`.
 */
export const TEAM_PROFILES: TeamProfile[] = [
  {
    name: 'Abid Nazir',
    role: 'Founder & Director',
    experience:
      'Runs WOW Gutters Ltd from our Birmingham base at 38 Ryland Street (B16).',
    image: '',
    imageAlt: 'Abid Nazir - Founder & Director of WOW Gutters Ltd',
  },
  {
    name: 'Harley Davies',
    role: 'Gutter Cleaning Engineer',
    experience:
      'Ground-level vacuum gutter cleaning, downpipe unblocking and before-and-after photo reports across Birmingham and the West Midlands.',
    image: '',
    imageAlt: 'Harley Davies - Gutter Cleaning Engineer at WOW Gutters Ltd',
  },
  {
    name: 'Ian Thompson',
    role: 'Gutter Cleaning Engineer',
    experience:
      'Ground-level vacuum gutter cleaning, downpipe unblocking and before-and-after photo reports across Birmingham and the West Midlands.',
    image: '',
    imageAlt: 'Ian Thompson - Gutter Cleaning Engineer at WOW Gutters Ltd',
  },
  {
    name: 'Rikesh Patel',
    role: 'Gutter Cleaning Engineer',
    experience:
      'Ground-level vacuum gutter cleaning, downpipe unblocking and before-and-after photo reports across Birmingham and the West Midlands.',
    image: '',
    imageAlt: 'Rikesh Patel - Gutter Cleaning Engineer at WOW Gutters Ltd',
  },
];

export function teamInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? '')
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export const EEAT_TRUST_POINTS = [
  {
    title: 'Fully insured',
    detail: 'Comprehensive public liability insurance on every residential and commercial visit.',
  },
  {
    title: '1-year service guarantee',
    detail: 'If your gutters block again within 12 months of a full clean, we return and clear them at no extra charge.',
  },
  {
    title: 'Verified Google reviews',
    detail: 'Genuine customer feedback across Google and our website — real jobs, real before-and-after photographic proof.',
  },
  {
    title: 'Ground-level vacuum system',
    detail: 'No ladders against your walls on standard homes — safer for tiles, render, and fascias.',
  },
] as const;
