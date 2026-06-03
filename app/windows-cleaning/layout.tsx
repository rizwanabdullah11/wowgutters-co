import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { buildServicePageSchemaGraph } from '@/lib/pageSchemaGraphs';
import PageSchema from '@/components/seo/PageSchema';
import TopPageAreaLinks from '@/components/seo/TopPageAreaLinks';

export const metadata: Metadata = buildMetadata({
  title: 'Windows & Frames Cleaning | WOW Gutters',
  description:
    'Professional windows and uPVC frames cleaning with hot purified water across Birmingham and the West Midlands. Streak-free finish from WOW Gutters.',
  canonicalPath: '/windows-cleaning/',
});

export default function WindowsCleaningLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageSchema
        id="schema-windows-cleaning"
        data={buildServicePageSchemaGraph({
          path: '/windows-cleaning/',
          name: 'Windows & Frames Cleaning',
          serviceType: 'Window cleaning',
          description:
            'Crystal-clear windows and uPVC frame cleaning using hot purified water. Residential and commercial properties across the West Midlands.',
          lowPrice: '60',
          highPrice: '150',
        })}
      />
      {children}
      <TopPageAreaLinks intro="Window and frame cleaning available across these West Midlands locations." />
    </>
  );
}
