/**
 * Real WOW Gutters job photos (supplied by the owner, Nov 2026) — files in /public/jobs/.
 *
 * Only describe what the photo actually shows. Do NOT add a town/street to a job unless the
 * owner has confirmed where it was — add `area` once known (it is shown in the caption + alt).
 */
export type RealJobPhoto = { src: string; alt: string; label: 'Before' | 'After' | 'Camera view' };

export type RealGutterJob = {
  id: string;
  title: string;
  summary: string;
  area?: string;
  date?: string;
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
