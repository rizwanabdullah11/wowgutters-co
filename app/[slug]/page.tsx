import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AreaPage from '@/components/areas/AreaPage';
import { AREA_SLUGS, areaPath } from '@/lib/areaSlugs';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const AREA_PREFIX = 'gutter-cleaning-';
const slugSet = new Set(AREA_SLUGS);

function getAreaSlug(slug: string): string | null {
  if (!slug.startsWith(AREA_PREFIX)) {
    return null;
  }

  const areaSlug = slug.slice(AREA_PREFIX.length);
  return slugSet.has(areaSlug) ? areaSlug : null;
}

function formatAreaName(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug: `${AREA_PREFIX}${slug}` }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const areaSlug = getAreaSlug(params.slug);

  if (!areaSlug) {
    return { title: 'Not found' };
  }

  const areaName = formatAreaName(areaSlug);

  return {
    title: `Gutter Cleaning ${areaName} | WOW Gutters`,
    description: `Professional gutter cleaning and repair services in ${areaName} and surrounding areas. Get a free quote today!`,
    alternates: {
      canonical: `https://wowgutters.pro${areaPath(areaSlug)}`,
    },
  };
}

export default async function SingleSegmentAreaPage(props: PageProps) {
  const params = await props.params;
  const areaSlug = getAreaSlug(params.slug);

  if (!areaSlug) {
    notFound();
  }

  return <AreaPage areaName={areaSlug} />;
}
