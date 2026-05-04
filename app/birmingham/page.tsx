import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import BirminghamGutterPageSchema from '@/components/areas/BirminghamGutterPageSchema';
import BirminghamGutterCleaningPage from '@/components/areas/BirminghamGutterCleaningPage';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Gutter Cleaning Birmingham | Professional, Safe & Guaranteed | WOW Gutters Ltd',
  description:
    'Professional gutter cleaning in Birmingham from £50. Ground-level vacuum system, before & after photos, 1-year guarantee. Call WOW Gutters: 07421 433910.',
  canonicalPath: '/gutter-cleaning-birmingham/',
  keywords: [
    'gutter cleaning Birmingham',
    'gutter cleaning Birmingham city centre',
    'gutter vacuum Birmingham',
    'blocked gutters Birmingham',
    'gutter repair Birmingham',
    'gutter cleaning Sutton Coldfield',
    'gutter cleaning Edgbaston',
    'gutter cleaning Moseley',
    'gutter cleaning Harborne',
    'commercial gutter cleaning Birmingham',
    'same day gutter cleaning Birmingham',
    'WOW Gutters Birmingham',
  ],
});

export default function BirminghamPage() {
  return (
    <>
      <BirminghamGutterPageSchema />
      <BirminghamGutterCleaningPage />
    </>
  );
}
