import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import AreaPage from '@/components/areas/AreaPage';
import BirminghamGutterCleaningPage from '@/components/areas/BirminghamGutterCleaningPage';
import { buildCitySchemaFaqs } from '@/lib/cityFaqs';
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
      absoluteTitle: 'Gutter Cleaning Birmingham | Professional, Safe & Guaranteed | WOW Gutters',
      description:
        'Professional gutter cleaning in Birmingham from £50. Ground-level vacuum system, before & after photos, 1-year guarantee. Call WOW Gutters: 07421 433910.',
      canonicalPath: areaPath(areaSlug),
      ogImagePath: '/og/birmingham.jpg',
    });
  }

  const cityLanding = CITY_GUTTER_LANDINGS[areaSlug];
  if (cityLanding) {
    return buildMetadata({
      absoluteTitle: cityLanding.titleTag,
      description: cityLanding.metaDescription,
      canonicalPath: areaPath(areaSlug),
      ogImagePath: `/og/${areaSlug}.jpg`,
    });
  }

  return buildMetadata({
    title: `Gutter Cleaning ${areaName}`,
    description: `Professional gutter cleaning, repairs and inspections in ${areaName}. Get a free quote today.`,
    canonicalPath: areaPath(areaSlug),
    ogImagePath: `/og/${areaSlug}.jpg`,
  });
}

export default async function SingleSegmentAreaPage(props: PageProps) {
  const params = await props.params;
  const areaSlug = getAreaSlug(params.slug);

  if (!areaSlug) {
    notFound();
  }

  if (areaSlug === 'birmingham') {
    const url = 'https://wowgutters.co.uk/gutter-cleaning-birmingham/';
    return (
      <>
        <LocalBusinessSchema
          city="Birmingham"
          url={url}
          priceFrom={50}
          priceTo={120}
          nearbyAreas={['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich']}
          geo={{ latitude: 52.4862, longitude: -1.8904 }}
          postcodes={['B1', 'B13', 'B14', 'B15', 'B16', 'B17', 'B23', 'B27', 'B28', 'B29', 'B31', 'B43', 'B73', 'B74', 'B76']}
          faqs={buildCitySchemaFaqs({
            city: 'Birmingham',
            slug: 'birmingham',
            priceFrom: 50,
            priceTo: 120,
            postcodes: ['B1', 'B13', 'B14', 'B15', 'B16', 'B17', 'B23', 'B27', 'B28', 'B29', 'B31', 'B43', 'B73', 'B74', 'B76'],
            nearbyAreas: ['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich'],
          })}
        />
        <BirminghamGutterCleaningPage />
      </>
    );
  }

  const maybeCity = renderCityLanding(areaSlug);
  if (maybeCity) return maybeCity;

  return (
    <>
      <AreaPage areaName={areaSlug} />
    </>
  );
}
