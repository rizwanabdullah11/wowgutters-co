import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { buildAboutPageSchemaGraph } from '@/lib/pageSchemaGraphs';
import PageSchema from '@/components/seo/PageSchema';

export const metadata: Metadata = buildMetadata({
  title: 'About WOW Gutters',
  description:
    'About WOW Gutters Ltd — trained, insured gutter technicians in Birmingham since 2019. Meet our team, 4.9★ reviews, ground-level vacuum system, 1-year guarantee.',
  canonicalPath: '/about/',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageSchema id="schema-about" data={buildAboutPageSchemaGraph()} />
      {children}
    </>
  );
}
