import type { Metadata } from 'next';
import InspectionPage from '@/components/services/InspectionPage';

export const metadata: Metadata = {
  title: 'Free Gutter Inspection Help | WOW Gutter Cleaning',
  description:
    'Get help booking a free gutter inspection and quote. Find out what we check and how the process works.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/help/inspect/',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function HelpInspectPage() {
  return <InspectionPage />;
}
