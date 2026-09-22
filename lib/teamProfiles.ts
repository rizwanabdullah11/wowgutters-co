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
    image: '/assets/team/james-m.svg',
    imageAlt: 'James M. - Lead Gutter Technician at WOW Gutters Ltd',
  },
  {
    name: 'Sarah K.',
    role: 'Service Coordinator',
    experience:
      'Manages same-day bookings, quotes, and customer updates. Ensures every job includes before-and-after photos and a written condition report.',
    image: '/assets/team/sarah-k.svg',
    imageAlt: 'Sarah K. - Service Coordinator at WOW Gutters Ltd',
  },
  {
    name: 'David R.',
    role: 'Hot Wash & Exterior Specialist',
    experience:
      'Trained in purified hot-water systems for fascias, UPVC, and driveway cleaning. Works ladder-free on most residential properties.',
    image: '/assets/team/david-r.svg',
    imageAlt: 'David R. - Hot Wash & Exterior Specialist at WOW Gutters Ltd',
  },
];

export const EEAT_TRUST_POINTS = [
  {
    title: 'Fully insured',
    detail: 'Comprehensive public liability insurance on every residential and commercial visit.',
  },
  {
    title: 'Trained technicians',
    detail: 'Experienced local staff using high-reach ground vacuum systems and camera inspection equipment.',
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
