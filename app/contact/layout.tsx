import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { buildContactPageSchemaGraph } from '@/lib/pageSchemaGraphs';
import PageSchema from '@/components/seo/PageSchema';

export const metadata: Metadata = buildMetadata({
  title: 'Contact WOW Gutters Ltd',
  description:
    'Contact WOW Gutters Ltd for gutter cleaning in Birmingham and the West Midlands. Call 07421 433910, email support@wowgutters.co.uk or request a free quote online.',
  canonicalPath: '/contact/',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageSchema id="schema-contact" data={buildContactPageSchemaGraph()} />
      {children}
    </>
  );
}
