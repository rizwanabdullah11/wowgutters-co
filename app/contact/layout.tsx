import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact WOW Gutters',
  description:
    'Contact WOW Gutters for gutter cleaning in Birmingham and the West Midlands. Call 07421 433910, email support@wowgutters.co.uk or request a free quote online.',
  canonicalPath: '/contact/',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
