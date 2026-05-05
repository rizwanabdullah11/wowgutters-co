import type { Metadata } from 'next';
import CommercialRedirect from './CommercialRedirect';

export const metadata: Metadata = {
  title: 'Commercial Gutter Cleaning',
  description: 'Professional commercial gutter cleaning for businesses. Flexible scheduling, same day booking. Call 07421 433910.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/services/commercial/',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <CommercialRedirect />;
}
