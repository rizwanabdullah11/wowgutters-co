import type { Metadata } from 'next';
import ConservatoryRedirect from './ConservatoryRedirect';

const CANONICAL = 'https://wowgutters.co.uk/services/conservatory/';

export const metadata: Metadata = {
  title: 'Conservatory Cleaning',
  description:
    'Conservatory cleaning and restoration service. This alias route redirects to the main conservatory service page.',
  alternates: {
    canonical: CANONICAL,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ConservatoryCleaningAliasPage() {
  return <ConservatoryRedirect />;
}
