/**
 * Recent jobs shown on the homepage (Ben's Gutters-style case studies).
 *
 * Photos are real WOW Gutters jobs from /public. Only add `story` text from a REAL job —
 * never invent issues or results. A card without a story shows the before/after photos only.
 */
export type RecentJob = {
  id: string;
  service: 'Gutter cleaning' | 'Roof cleaning';
  area: string;
  before: string;
  after: string;
  href: string;
  linkLabel: string;
  story?: { issue: string; whatWeDid: string; result: string };
};

export const RECENT_JOBS: RecentJob[] = [
  {
    id: 'south-birmingham-semi',
    service: 'Gutter cleaning',
    area: 'Selly Oak, B29',
    before: '/selly-oak-gutter-cleaning-before.webp',
    after: '/selly-oak-gutter-cleaning-after.webp',
    href: '/gutter-cleaning-selly-oak/',
    linkLabel: 'Gutter cleaning in Selly Oak',
    // From the Selly Oak guide: "a recent job in south Birmingham".
    story: {
      issue: 'Two-storey semi-detached home with gutters overflowing for at least two autumn and winter seasons.',
      whatWeDid: 'Removed over 4kg of compacted leaves, silt and moss with our ground-level vacuum. The downpipe outlet was 80% blocked and was cleared.',
      result: 'One clean, about one hour. Water flows to the downpipe again instead of down the walls.',
    },
  },
  {
    id: 'harborne',
    service: 'Gutter cleaning',
    area: 'Harborne, B17',
    before: '/harborne-gutter-cleaning-before.webp',
    after: '/harborne-gutter-cleaning-after.webp',
    href: '/gutter-cleaning-harborne/',
    linkLabel: 'Gutter cleaning in Harborne',
  },
  {
    id: 'nechells',
    service: 'Gutter cleaning',
    area: 'Nechells, B7',
    before: '/nechells-gutter-cleaning-before.webp',
    after: '/nechells-gutter-cleaning-after.webp',
    href: '/gutter-cleaning-birmingham/',
    linkLabel: 'Gutter cleaning in Birmingham',
  },
  {
    id: 'acocks-green',
    service: 'Gutter cleaning',
    area: 'Acocks Green, B27',
    before: '/gutter-cleaning-acocks-green-before.webp',
    after: '/gutter-cleaning-acocks-green-after.webp',
    href: '/gutter-cleaning-acocks-green/',
    linkLabel: 'Gutter cleaning in Acocks Green',
  },
  {
    id: 'walsall',
    service: 'Gutter cleaning',
    area: 'Walsall',
    before: '/walsall-gutter-cleaning-before.webp',
    after: '/walsall-gutter-cleaning-after.webp',
    href: '/gutter-cleaning-walsall/',
    linkLabel: 'Gutter cleaning in Walsall',
  },
  {
    id: 'dudley-roof',
    service: 'Roof cleaning',
    area: 'Dudley',
    before: '/dudley-roof-cleaning-before.webp',
    after: '/dudley-roof-cleaning-after.webp',
    href: '/roof-cleaning/',
    linkLabel: 'Roof cleaning & moss removal',
  },
];
