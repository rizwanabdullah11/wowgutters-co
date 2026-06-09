import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Neighbourhood Discount — Group Gutter Cleaning Savings | WOW Gutters Ltd',
  description:
    'Save on gutter cleaning when neighbours book together. Group discounts across Birmingham and the West Midlands. WOW Gutters Ltd.',
  canonicalPath: '/neighbourhood-discount/',
});

export default function NeighbourhoodDiscountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
