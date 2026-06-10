import type { Metadata } from 'next';
import ServiceRedirect from '@/components/services/ServiceRedirect';

export const metadata: Metadata = {
  title: 'Commercial Gutter Cleaning | WOW Gutters Ltd',
  description: 'This page has moved to our dedicated commercial gutter cleaning service.',
  robots: { index: false, follow: true },
};

export default function CommercialServiceRedirectPage() {
  return <ServiceRedirect target="/services/commercial-gutter-cleaning/" label="commercial gutter cleaning" />;
}
