import type { Metadata } from 'next';
import ServiceRedirect from '@/components/services/ServiceRedirect';

export const metadata: Metadata = {
  title: 'Gutter Cleaning for Landlords | WOW Gutters Ltd',
  description: 'This page has moved to our dedicated gutter cleaning for landlords service.',
  robots: { index: false, follow: true },
};

export default function GutterCleaningForLandlordsRedirectPage() {
  return <ServiceRedirect target="/services/gutter-cleaning-for-landlords/" label="gutter cleaning for landlords" />;
}
