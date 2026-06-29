import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Customer Reviews | 4.9★ Rating',
  description:
    'Read verified Google reviews for WOW Gutters Ltd. Rated 4.9/5 stars across Birmingham and the West Midlands. Before & after photos on every job.',
  canonicalPath: '/reviews/',
});

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
