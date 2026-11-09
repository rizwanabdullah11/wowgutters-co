import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Gutter Cleaning Cost Calculator',
  description:
    'Work out what gutter cleaning should cost for a terrace, semi, detached house or bungalow in seconds. Prices from £100, fixed before we arrive.',
  canonicalPath: '/gutter-cleaning-calculator/',
});

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
