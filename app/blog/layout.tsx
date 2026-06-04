import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Gutter Cleaning Blog | Tips & Guides',
  description:
    'Expert advice on gutter cleaning, maintenance, and repairs. Tips for Birmingham and West Midlands homeowners from WOW Gutters.',
  canonicalPath: '/blog/',
});

export default function BlogLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
