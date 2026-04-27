import CommercialGutterPage from '@/components/services/CommercialGutterPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Gutter Cleaning | Business Services | WOW Gutters',
  description: 'Professional commercial gutter cleaning for businesses. Flexible scheduling, same day booking. Call 07421 433910.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/services/commercial-gutter-cleaning/',
  },
};

export default function Page() {
  return <CommercialGutterPage />;
}
