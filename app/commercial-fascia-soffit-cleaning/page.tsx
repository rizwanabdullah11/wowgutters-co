import type { Metadata } from 'next';
import ServiceRedirect from '@/components/services/ServiceRedirect';

export const metadata: Metadata = {
  title: 'Commercial Fascia & Soffit Cleaning | WOW Gutters Ltd',
  description: 'This page has moved to our dedicated commercial fascia and soffit cleaning service.',
  robots: { index: false, follow: true },
};

export default function CommercialFasciaSoffitRedirectPage() {
  return <ServiceRedirect target="/services/commercial-fascia-soffit-cleaning/" label="commercial fascia and soffit cleaning" />;
}
