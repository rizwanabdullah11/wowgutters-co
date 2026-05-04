import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BirminghamGutterPageSchema from '@/components/areas/BirminghamGutterPageSchema';
import AreaPage from '@/components/areas/AreaPage';
import BirminghamGutterCleaningPage from '@/components/areas/BirminghamGutterCleaningPage';
import { AREA_SLUGS, areaPath } from '@/lib/areaSlugs';
import { buildMetadata } from '@/lib/seo';
import { SEO_KEYWORD_LINKS } from '@/constants/seoKeywordLinks';

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

  if (areaSlug === 'birmingham') {
    return buildMetadata({
      absoluteTitle: 'Gutter Cleaning Birmingham | Professional, Safe & Guaranteed | WOW Gutters Ltd',
      description:
        'Professional gutter cleaning in Birmingham from £50. Ground-level vacuum system, before & after photos, 1-year guarantee. Call WOW Gutters: 07421 433910.',
      canonicalPath: areaPath(areaSlug),
      keywords: [
        'gutter cleaning Birmingham',
        'gutter vacuum Birmingham',
        'blocked gutters Birmingham',
        ...SEO_KEYWORD_LINKS.map((k) => k.label),
      ],
    });
  }

  return buildMetadata({
    title: `Gutter Cleaning ${areaName}`,
    description: `Professional gutter cleaning, repairs and inspections in ${areaName}. Get a free quote today.`,
    canonicalPath: areaPath(areaSlug),
    keywords: [
      ...SEO_KEYWORD_LINKS.map((k) => k.label),
      `gutter cleaning ${areaName.toLowerCase()}`,
      `gutter repairs ${areaName.toLowerCase()}`,
    ],
  });
}

export default async function SingleSegmentAreaPage(props: PageProps) {
  const params = await props.params;
  const areaSlug = getAreaSlug(params.slug);

  if (!areaSlug) {
    notFound();
  }

  if (areaSlug === 'birmingham') {
    return (
      <>
        <BirminghamGutterPageSchema />
        <BirminghamGutterCleaningPage />
      </>
    );
  }

  return <AreaPage areaName={areaSlug} />;
}
