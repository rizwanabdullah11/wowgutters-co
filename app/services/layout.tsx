import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Gutter Cleaning Services',
  description:
    'Professional gutter cleaning, repairs, UPVC cleaning, roof cleaning, drain clearing and inspections across Birmingham and the West Midlands. View all WOW Gutters services.',
  canonicalPath: '/services/',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
