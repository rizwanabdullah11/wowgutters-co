import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Conservatory Gutter Cleaning',
  description:
    'Conservatory gutter cleaning and maintenance across Birmingham and the West Midlands. WOW Gutters — fixed quotes and photo proof.',
  canonicalPath: '/services/conservatory/',
});

export default function ConservatoryCleaningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
