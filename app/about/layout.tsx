import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { buildAboutPageSchemaGraph } from '@/lib/pageSchemaGraphs';
import PageSchema from '@/components/seo/PageSchema';

export const metadata: Metadata = buildMetadata({
  title: 'About WOW Gutters Ltd',
  description:
    'About WOW Gutters Ltd — trained, insured gutter technicians in Birmingham since 2019. Meet our team, ground-level vacuum system, and verified customer reviews.',
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
