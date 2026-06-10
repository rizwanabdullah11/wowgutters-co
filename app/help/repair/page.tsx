import type { Metadata } from 'next';
import RepairPage from '@/components/services/RepairPage';

export const metadata: Metadata = {
  title: 'Expert Gutter Repair Service | WOW Gutter Cleaning',
  description:
    'Expert gutter repair service to fix leaks, sagging and damage and protect your property from water problems.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/help/repair/',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function HelpRepairPage() {
  return <RepairPage />;
}
