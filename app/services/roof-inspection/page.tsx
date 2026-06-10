import type { Metadata } from 'next';
import RoofInspectionPage from '@/components/services/RoofInspectionPage';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Free Roof Inspection Birmingham | WOW Gutters Ltd',
  description:
    'Book a free roof inspection across Birmingham and the West Midlands. Tiles, flashing, moss and ridge assessment with photos and honest advice. No obligation. Call 07421 433910.',
  canonicalPath: '/services/roof-inspection/',
});

export default function RoofInspectionServicePage() {
  return <RoofInspectionPage />;
}
