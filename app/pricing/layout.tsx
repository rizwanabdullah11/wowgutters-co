import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { buildPricingPageSchemaGraph } from '@/lib/pageSchemaGraphs';
import PageSchema from '@/components/seo/PageSchema';

export const metadata: Metadata = buildMetadata({
  title: 'Gutter Cleaning Prices',
  description:
    'Transparent gutter cleaning prices in Birmingham and the West Midlands. 2-bed £100, 3-bed £110, premium £200, fascia & soffit £90, installation £300. Free quote — call WOW Gutters Ltd: 07421 433910.',
  canonicalPath: '/pricing/',
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageSchema id="schema-pricing" data={buildPricingPageSchemaGraph()} />
      {children}
    </>
  );
}
