import type { Metadata } from 'next';
import ServiceRedirect from '@/components/services/ServiceRedirect';

export const metadata: Metadata = {
  title: 'Commercial Roof Cleaning | WOW Gutters Ltd',
  description: 'This page has moved to our dedicated commercial roof cleaning service.',
  robots: { index: false, follow: true },
};

export default function CommercialRoofCleaningRedirectPage() {
  return <ServiceRedirect target="/services/commercial-roof-cleaning/" label="commercial roof cleaning" />;
}
