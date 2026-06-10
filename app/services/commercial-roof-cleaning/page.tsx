import type { Metadata } from 'next';
import CommercialRoofCleaningPage from '@/components/services/CommercialRoofCleaningPage';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Commercial Roof Cleaning Birmingham | WOW Gutters Ltd',
  description:
    'Commercial roof cleaning and moss removal for warehouses, offices and industrial buildings. Safe soft-wash methods, fully insured. Call 07421 433910.',
  canonicalPath: '/services/commercial-roof-cleaning/',
});

export default function CommercialRoofCleaningServicePage() {
  return <CommercialRoofCleaningPage />;
}
