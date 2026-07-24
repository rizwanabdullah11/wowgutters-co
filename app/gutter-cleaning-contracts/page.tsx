import type { Metadata } from 'next';
import ServiceRedirect from '@/components/services/ServiceRedirect';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Contracts | WOW Gutters Ltd',
  description: 'This page has moved to our dedicated gutter cleaning contracts service.',
  robots: { index: false, follow: true },
};

export default function GutterCleaningContractsRedirectPage() {
  return <ServiceRedirect target="/services/gutter-cleaning-contracts/" label="gutter cleaning contracts" />;
}
