import type { Metadata } from 'next';
import CleanPage from '@/components/services/CleanPage';

export const metadata: Metadata = {
  title: 'Roof & Exterior Cleaning Service | WOW Gutter Cleaning',
  description:
    'Specialist roof and exterior cleaning to remove moss, algae and dirt and keep your home looking its best.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/help/clean/',
  },
};

export default function HelpCleanPage() {
  return <CleanPage />;
}
