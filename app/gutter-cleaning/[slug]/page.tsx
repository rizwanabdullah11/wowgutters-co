import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AreaPage from '@/components/areas/AreaPage';
import BirminghamGutterCleaningPage from '@/components/areas/BirminghamGutterCleaningPage';
import BirminghamGutterPageSchema from '@/components/areas/BirminghamGutterPageSchema';
import AreaPageSchema from '@/components/areas/AreaPageSchema';
import { renderCityLanding } from '@/components/areas/CityGutterCleaningRoutes';
import { CITY_GUTTER_LANDINGS } from '@/constants/cityGutterLandingData';
import { AREA_SLUGS, areaPath } from '@/lib/areaSlugs';
import { buildMetadata } from '@/lib/seo';

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

  if (params.slug === 'birmingham') {
    return buildMetadata({
      absoluteTitle: 'Gutter Cleaning Birmingham | WOW Gutters Ltd',
      description:
        'Professional gutter cleaning in Birmingham from £50. Ground-level vacuum system, before & after photos, 1-year guarantee. Call WOW Gutters: 07421 433910.',
      canonicalPath: areaPath(params.slug),
    });
  }

  const cityLanding = CITY_GUTTER_LANDINGS[params.slug];
  if (cityLanding) {
    return buildMetadata({
      absoluteTitle: cityLanding.titleTag,
      description: cityLanding.metaDescription,
      canonicalPath: areaPath(params.slug),
    });
  }

  return buildMetadata({
    title: `Gutter Cleaning ${areaName}`,
    description: `Professional gutter cleaning and repair services in ${areaName} and surrounding areas. Get a free quote today!`,
    canonicalPath: areaPath(params.slug),
  });
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

  const maybeCity = renderCityLanding(params.slug);
  if (maybeCity) return maybeCity;

  return (
    <>
      <AreaPageSchema slug={params.slug} />
      <AreaPage areaName={params.slug} />
    </>
  );
}
