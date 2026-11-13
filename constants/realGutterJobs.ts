/**
 * Real WOW Gutters job photos (supplied by the owner, Nov 2026) — files in /public/jobs/.
 *
 * Only describe what the photo actually shows. Do NOT add a town/street to a job unless the
 * owner has confirmed where it was — add `area` once known (it is shown in the caption + alt).
 */
export type RealJobPhoto = { src: string; alt: string; label: 'Before' | 'After' | 'Camera view' | 'During' | 'Before & after' };

export type RealGutterJob = {
  id: string;
  title: string;
  summary: string;
  area?: string;
  date?: string;
  /** 16:9 photos — shown full width instead of the portrait before/after grid. */
  landscape?: boolean;
  photos: RealJobPhoto[];
};

export const REAL_GUTTER_JOBS: RealGutterJob[] = [
  {
    id: 'leaves-silt-black-gutter',
    title: 'Leaves and silt cleared from a black uPVC gutter',
    summary:
      'The gutter under concrete roof tiles was packed with leaves, silt and cobwebs. After the clean the channel is empty and the outlet is clear, so rainwater can reach the downpipe again.',
    photos: [
      {
        src: '/jobs/gutter-cleaning-before-leaves-silt-black-gutter.webp',
        alt: 'Before gutter cleaning – leaves, silt and cobwebs packed in a black uPVC gutter',
        label: 'Before',
      },
      {
        src: '/jobs/gutter-cleaning-after-clear-black-gutter-outlet.webp',
        alt: 'After gutter cleaning – clear black uPVC gutter with the outlet open',
        label: 'After',
      },
    ],
  },
  {
    id: 'leaves-moss-blocked-gutter',
    title: 'Heavy leaf and moss blockage removed',
    summary:
      'Leaves, moss from the roof tiles and cobwebs had built up along the gutter run and around the bracket. Cleared back to a bare, clean gutter.',
    photos: [
      {
        src: '/jobs/gutter-cleaning-before-leaves-moss-blocked-gutter.webp',
        alt: 'Before gutter cleaning – gutter blocked with leaves and moss from the roof',
        label: 'Before',
      },
      {
        src: '/jobs/gutter-cleaning-after-clean-black-gutter.webp',
        alt: 'After gutter cleaning – clean black gutter run with no debris',
        label: 'After',
      },
    ],
  },
  {
    id: 'ground-based-camera',
    title: 'Cleaned from the ground with a camera on the pole',
    summary:
      'Our operative works from the ground with the vacuum unit on the patio — no ladder against the house. The pole camera shows silt in the gutter before it is removed, and the same camera is used to check the result.',
    date: '20 July 2026',
    photos: [
      {
        src: '/jobs/gutter-camera-inspection-silt-before-cleaning.webp',
        alt: 'Gutter camera view of silt in a gutter, with the gutter vacuum unit on the patio below',
        label: 'Camera view',
      },
      {
        src: '/jobs/ground-based-gutter-vacuum-camera-view.webp',
        alt: 'Pole camera view along a gutter while a WOW Gutters operative works from the ground',
        label: 'Camera view',
      },
    ],
  },
  {
    id: 'silt-white-gutter',
    title: 'Silt and cobwebs in a white uPVC gutter',
    summary:
      'Fine silt and cobwebs line the bottom of this white gutter — easy to miss from the ground, but enough to slow the water and feed moss. This is the kind of build-up our camera shows you before we clean.',
    photos: [
      {
        src: '/jobs/gutter-cleaning-before-silt-white-gutter.webp',
        alt: 'Before gutter cleaning – silt and cobwebs in a white uPVC gutter',
        label: 'Before',
      },
    ],
  },
];

/**
 * Real jobs tied to a town page (owner confirmed the location). Shown high on that town page
 * only, so the photos stay unique to one page.
 */
export const REAL_AREA_GUTTER_JOBS: Record<string, RealGutterJob[]> = {
  birmingham: [
    {
      id: 'birmingham-b9-leaf-blocked-gutter-nov-2026',
      title: 'Leaf-blocked gutter cleared on a B9 Birmingham home',
      summary:
        'Autumn leaves had packed this black gutter along its full length, with moss growing from the edge of the concrete roof tiles. We cleared it from the ground with our vacuum and checked it with the pole camera: the after photo shows the same run empty down to the downpipe outlet. Before at 12:07, after at 12:14.',
      area: 'Birmingham B9',
      date: '13 November 2026',
      landscape: true,
      photos: [
        {
          src: '/area-pages/birmingham-page/birmingham-b9-gutter-cleaning-before-leaves-blocked-gutter.webp',
          alt: 'Before gutter cleaning – black gutter packed with autumn leaves below concrete roof tiles',
          label: 'Before',
        },
        {
          src: '/area-pages/birmingham-page/birmingham-b9-gutter-cleaning-after-clear-gutter.webp',
          alt: 'After gutter cleaning – the same gutter run empty down to the downpipe outlet',
          label: 'After',
        },
      ],
    },
  ],
  walsall: [
    {
      id: 'walsall-moss-blocked-gutter-nov-2026',
      title: 'Moss-packed gutter cleared on a Walsall home',
      summary:
        'Thick moss from the concrete roof tiles had filled this gutter run, with leaves and silt underneath, so rainwater was sitting in the gutter instead of reaching the downpipe. We cleared it from the ground with our vacuum and checked it with the pole camera: the after photo shows the same run empty and draining. Before at 12:33, after at 12:46.',
      area: 'Walsall',
      date: '9 November 2026',
      landscape: true,
      photos: [
        {
          src: '/area-pages/walsall-page/walsall-gutter-cleaning-before-moss-blocked-gutter.webp',
          alt: 'Before gutter cleaning – gutter packed with moss and debris under concrete roof tiles',
          label: 'Before',
        },
        {
          src: '/area-pages/walsall-page/walsall-gutter-cleaning-after-clear-gutter.webp',
          alt: 'After gutter cleaning – the same gutter run cleared and draining',
          label: 'After',
        },
      ],
    },
  ],
};

export function realGutterJobsFor(slug: string): RealGutterJob[] | undefined {
  return REAL_AREA_GUTTER_JOBS[slug];
}
