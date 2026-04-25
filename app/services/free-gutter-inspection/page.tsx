import FreeInspectionPage from '@/components/services/FreeInspectionPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Gutter Inspection | WOW Gutters',
  description: 'Book our completely free, no-obligation gutter inspection using high-reaching pole cameras.',
};

export default function Page() {
  return <FreeInspectionPage />;
}
