import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AreaPage from '@/components/areas/AreaPage';
import BirminghamGutterCleaningPage from '@/components/areas/BirminghamGutterCleaningPage';
import BirminghamGutterPageSchema from '@/components/areas/BirminghamGutterPageSchema';
import { AREA_SLUGS, areaPath } from '@/lib/areaSlugs';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const slugSet = new Set(AREA_SLUGS);

export async function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  if (!slugSet.has(params.slug)) {
    return { title: 'Not found' };
  }
  const areaName = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const canonicalPath = `https://wowgutters.co.uk${areaPath(params.slug)}`;

  if (params.slug === 'birmingham') {
    return {
      title: { absolute: 'Gutter Cleaning Birmingham | Professional, Safe & Guaranteed | WOW Gutters Ltd' },
      description:
        'Professional gutter cleaning in Birmingham from £50. Ground-level vacuum system, before & after photos, 1-year guarantee. Call WOW Gutters: 07421 433910.',
      alternates: { canonical: canonicalPath },
    };
  }

  return {
    title: `Gutter Cleaning ${areaName}`,
    description: `Professional gutter cleaning and repair services in ${areaName} and surrounding areas. Get a free quote today!`,
    alternates: {
      canonical: canonicalPath,
    },
  };
}

export default async function GutterCleaningAreaPage(props: PageProps) {
  const params = await props.params;
  if (!slugSet.has(params.slug)) {
    notFound();
  }
  if (params.slug === 'birmingham') {
    return (
      <>
        <BirminghamGutterPageSchema />
        <BirminghamGutterCleaningPage />
      </>
    );
  }
  return <AreaPage areaName={params.slug} />;
}
