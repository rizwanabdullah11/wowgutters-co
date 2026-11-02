import type { RealGutterJob } from '@/constants/realGutterJobs';

/**
 * Real WOW Gutters roof cleaning jobs (photos in /public). Keyed by area slug so each roof
 * town page only shows its own jobs. Only describe what the photos show; add more jobs as the
 * owner supplies them (photos + area).
 */
export const REAL_ROOF_JOBS: (RealGutterJob & { areaSlug: string })[] = [
  {
    id: 'dudley-roof',
    areaSlug: 'dudley',
    area: 'Dudley',
    title: 'Roof moss removal in Dudley',
    summary:
      'Moss and algae cleared from this Dudley roof with our soft-wash method, then treated with biocide to slow regrowth. Same roof, before and after.',
    photos: [
      { src: '/dudley-roof-cleaning-before.webp', alt: 'Roof in Dudley before cleaning – moss and algae on the tiles', label: 'Before' },
      { src: '/dudley-roof-cleaning-after.webp', alt: 'Roof in Dudley after cleaning – moss removed from the tiles', label: 'After' },
    ],
  },
];

export function realRoofJobsFor(areaSlug?: string) {
  if (!areaSlug) return undefined;
  const jobs = REAL_ROOF_JOBS.filter((j) => j.areaSlug === areaSlug);
  return jobs.length ? jobs : undefined;
}
