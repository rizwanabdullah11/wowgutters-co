import type { Metadata } from 'next';
import UnblockPage from '@/components/services/UnblockPage';

export const metadata: Metadata = {
  title: 'Gutter Cleaning & Unblocking Service | WOW Gutter Cleaning',
  description:
    'Professional gutter cleaning and unblocking to clear debris and keep rainwater flowing away from your home.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/help/unblock/',
  },
};

export default function HelpUnblockPage() {
  return <UnblockPage />;
}
