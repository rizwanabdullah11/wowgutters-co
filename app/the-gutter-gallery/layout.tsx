import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { buildGalleryPageSchemaGraph } from '@/lib/pageSchemaGraphs';
import PageSchema from '@/components/seo/PageSchema';

export const metadata: Metadata = buildMetadata({
  title: 'Gutter Gallery | Before & After Photos | WOW Gutters Ltd',
  description:
    'Before and after gutter cleaning photos from WOW Gutters Ltd. Real projects across Birmingham, Coventry and the West Midlands.',
  canonicalPath: '/the-gutter-gallery/',
});

export default function GutterGalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageSchema id="schema-gallery" data={buildGalleryPageSchemaGraph()} />
      {children}
    </>
  );
}
