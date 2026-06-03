import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Gutter Cleaning Prices',
  description:
    'Transparent gutter cleaning prices in Birmingham and the West Midlands. Terraced homes from £50, semis and detached quoted upfront. Free quote — call WOW Gutters: 07421 433910.',
  canonicalPath: '/pricing/',
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
