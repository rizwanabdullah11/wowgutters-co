import type { Metadata } from 'next';
import CommercialGutterCleaningPage from '@/components/services/CommercialGutterCleaningPage';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Commercial Gutter Cleaning Birmingham | WOW Gutters Ltd',
  description:
    'Professional commercial gutter cleaning for offices, warehouses, schools and retail units. Flexible scheduling, maintenance contracts, fully insured. Call 07421 433910.',
  canonicalPath: '/services/commercial-gutter-cleaning/',
});

export default function CommercialGutterCleaningServicePage() {
  return <CommercialGutterCleaningPage />;
}
