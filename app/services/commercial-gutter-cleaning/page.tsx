import CommercialGutterPage from '@/components/services/CommercialGutterPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Gutter Cleaning Birmingham | Business Services',
  description: 'Professional commercial gutter cleaning for businesses in Birmingham & West Midlands. Flexible scheduling, fully insured. Call 07421 433910.',
  alternates: {
    canonical: 'https://wowgutters.pro/services/commercial-gutter-cleaning/',
  },
};

export default function Page() {
  return <CommercialGutterPage />;
}
