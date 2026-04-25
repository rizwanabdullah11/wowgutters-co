import ConservatoryCleaningPage from '@/components/services/ConservatoryCleaningPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conservatory Cleaning | WOW Gutters',
  description: 'Specialist cleaning solutions to safely remove algae and restore the sparkle to your conservatory.',
};

export default function Page() {
  return <ConservatoryCleaningPage />;
}
