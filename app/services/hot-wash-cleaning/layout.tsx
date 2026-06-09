import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { buildServicePageSchemaGraph } from '@/lib/pageSchemaGraphs';
import PageSchema from '@/components/seo/PageSchema';
import TopPageAreaLinks from '@/components/seo/TopPageAreaLinks';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Hot Wash Cleaning | WOW Gutters Ltd',
  description:
    'Industrial hot wash cleaning for gutters, fascias, driveways and UPVC across Birmingham and the West Midlands.',
  canonicalPath: '/services/hot-wash-cleaning/',
});

export default function HotWashCleaningLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageSchema
        id="schema-hot-wash"
        data={buildServicePageSchemaGraph({
          path: '/services/hot-wash-cleaning/',
          name: 'Hot Wash Cleaning',
          serviceType: 'Pressure washing',
          description:
            'Industrial hot wash systems for tough dirt, grease, moss and biological growth on gutters, fascias and exterior surfaces.',
          lowPrice: '80',
          highPrice: '250',
        })}
      />
      {children}
      <TopPageAreaLinks intro="Hot wash and exterior cleaning booked alongside gutter work in these areas." />
    </>
  );
}
