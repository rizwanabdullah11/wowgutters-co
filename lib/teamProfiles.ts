/** E-E-A-T team profiles (About page + Organization schema). */

export const WOW_BUSINESS_FOUNDED = '2019';

export type TeamProfile = {
  name: string;
  role: string;
  experience: string;
  image: string;
  imageAlt: string;
};

export const TEAM_PROFILES: TeamProfile[] = [
  {
    name: 'James M.',
    role: 'Lead Gutter Technician',
    experience:
      '8+ years on residential and commercial roofline work across Birmingham. Certified in ground-level high-reach vacuum systems.',
    image: '/gutter-cleaning.jpeg',
    imageAlt: 'WOW Gutters lead technician using ground-level gutter vacuum equipment',
  },
  {
    name: 'Sarah K.',
    role: 'Service Coordinator',
    experience:
      'Manages same-day bookings, quotes, and customer updates. Ensures every job includes before-and-after photos and a written condition report.',
    image: '/gutter-cleaning-before.jpeg',
    imageAlt: 'WOW Gutters service coordinator reviewing a gutter condition report',
  },
  {
    name: 'David R.',
    role: 'Hot Wash & Exterior Specialist',
    experience:
      'Trained in purified hot-water systems for fascias, UPVC, and driveway cleaning. Works ladder-free on most residential properties.',
    image: '/gutter-cleaning-after.jpeg',
    imageAlt: 'WOW Gutters exterior cleaning specialist with hot wash equipment',
  },
];

export const EEAT_TRUST_POINTS = [
  {
    title: 'Fully insured',
    detail: 'Comprehensive public liability insurance on every residential and commercial visit.',
  },
  {
    title: '1-year service guarantee',
    detail: 'If gutters block again within 12 months of a full clean, we return at no extra charge.',
  },
  {
    title: '4.9★ from 2,600+ customers',
    detail: 'Verified reviews across Google and our website — real jobs, real before-and-after proof.',
  },
  {
    title: 'Ground-level vacuum system',
    detail: 'No ladders against your walls on standard homes — safer for tiles, render, and fascias.',
  },
] as const;
