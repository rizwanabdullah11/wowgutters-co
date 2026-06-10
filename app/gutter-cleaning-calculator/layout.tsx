import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Gutter Cleaning Cost Calculator',
  description:
    'Calculate gutter cleaning costs for your Birmingham property instantly. Estimates by property type. From £50. Free quotes from WOW Gutters Ltd.',
  canonicalPath: '/gutter-cleaning-calculator/',
});

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
