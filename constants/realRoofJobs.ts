import type { RealGutterJob } from '@/constants/realGutterJobs';
import { pickMany } from '@/lib/localVariants';

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

/**
 * Live roof cleaning photos from real WOW Gutters jobs (owner supplied, Nov 2026), cropped to 16:9.
 * Town not confirmed — so no `area`; never caption these with a town name.
 */
export const LIVE_ROOF_JOBS: RealGutterJob[] = [
  {
    id: 'roof-half-cleaned-clay',
    landscape: true,
    title: 'Half-cleaned clay tile roof',
    summary:
      'The left side is cleaned, the right side is not yet. Moss and lichen come off and the red and blue clay tiles show their real colour again.',
    photos: [{ src: '/jobs/roof-cleaning-half-cleaned-clay-tiles.webp', alt: 'Clay tile roof half cleaned – moss removed on the left, still mossy on the right', label: 'Before & after' }],
  },
  {
    id: 'roof-cherry-picker',
    landscape: true,
    title: 'Roof cleaning from a cherry picker',
    summary:
      'On this semi-detached house we cleaned the roof from a cherry picker platform, so nobody walks on the tiles and no scaffolding is needed.',
    photos: [{ src: '/jobs/roof-cleaning-cherry-picker-semi-detached.webp', alt: 'WOW Gutters operative cleaning a semi-detached roof from a cherry picker platform', label: 'During' }],
  },
  {
    id: 'roof-concrete-heavy-moss',
    landscape: true,
    title: 'Heavy moss on concrete roof tiles',
    summary:
      'Thick moss on concrete interlocking tiles and the ridge, above a conservatory. We clear it carefully so nothing falls onto the conservatory roof.',
    photos: [{ src: '/jobs/roof-cleaning-live-concrete-tile-heavy-moss.webp', alt: 'Cleaning heavy moss from concrete roof tiles and ridge above a conservatory', label: 'During' }],
  },
  {
    id: 'roof-chimney',
    landscape: true,
    title: 'Cleaning around a chimney stack',
    summary:
      'Moss collects where the roof meets the chimney. The cleaned patch next to the stack shows the difference against the tiles still to be done.',
    photos: [{ src: '/jobs/roof-cleaning-live-around-chimney.webp', alt: 'Roof tiles being cleaned next to a brick chimney stack', label: 'During' }],
  },
  {
    id: 'roof-clay-ridge',
    landscape: true,
    title: 'Moss removal on clay plain tiles',
    summary:
      'Moss and lichen being lifted from small clay plain tiles near the ridge. Each cleaned row shows the tile colour coming back.',
    photos: [{ src: '/jobs/roof-cleaning-live-clay-tile-moss-removal.webp', alt: 'Moss and lichen being cleaned off clay plain roof tiles near the ridge', label: 'During' }],
  },
];

/** Two live jobs per roof town page, different mix per town, for pages with no local job yet. */
export function liveRoofJobsFor(seed: string): RealGutterJob[] {
  return pickMany(`${seed}-liveroof`, LIVE_ROOF_JOBS, 2);
}

export function realRoofJobsFor(areaSlug?: string) {
  if (!areaSlug) return undefined;
  const jobs = REAL_ROOF_JOBS.filter((j) => j.areaSlug === areaSlug);
  return jobs.length ? jobs : undefined;
}
