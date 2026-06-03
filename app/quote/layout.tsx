import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Free Gutter Cleaning Quote',
  description:
    'Get a free, no-obligation gutter cleaning quote for Birmingham and the West Midlands. Fast response from WOW Gutters — call 07421 433910.',
  canonicalPath: '/quote/',
});

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
