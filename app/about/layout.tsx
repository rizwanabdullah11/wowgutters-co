import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About WOW Gutters',
  description:
    'About WOW Gutters Ltd — professional gutter cleaning in Birmingham and the West Midlands. 4.9★ rated, fully insured, ground-level vacuum system, 1-year guarantee.',
  canonicalPath: '/about/',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
