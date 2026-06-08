import type { Metadata } from 'next';
import ServiceRedirect from '@/components/services/ServiceRedirect';

export const metadata: Metadata = {
  title: 'Gutter Inspection | WOW Gutters',
  description: 'This page has moved to our dedicated gutter inspection service.',
  robots: { index: false, follow: true },
};

export default function InspectionRedirectPage() {
  return <ServiceRedirect target="/services/gutter-inspection/" label="gutter inspection" />;
}
