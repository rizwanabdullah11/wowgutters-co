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

// Active service areas that should be indexed
const ACTIVE_SERVICE_AREAS = [
  'birmingham',
  'solihull',
  'wolverhampton',
  'coventry',
  'walsall',
  'dudley',
  'sandwell',
  'west-bromwich',
  'sutton-coldfield',
  'stourbridge',
  'halesowen',
  'tamworth',
  'lichfield',
  'cannock',
  'west-midlands',
  'worcester',
  'worcestershire',
  'bromsgrove',
  'redditch',
  'kidderminster',
  'malvern',
  'evesham',
  'droitwich-spa',
  // Neighbourhood pages — add as created:
  'moseley',
  'harborne',
  'edgbaston',
  'kings-heath',
  'erdington',
  'selly-oak',
  'northfield',
  'acocks-green',
];

export async function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  
  // Safety check for undefined slug
  if (!params.slug) {
    return { 
      title: 'Not found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  
  const slug = params.slug.toLowerCase().replace(/^gutter-cleaning-/, '').replace(/^roof-cleaning-/, '');
  const isActive = ACTIVE_SERVICE_AREAS.some(area =>
    slug === area || slug.includes(area) || area.includes(slug)
  );
  
  if (!slugSet.has(params.slug)) {
    return { 
      title: 'Not found',
      robots: {
        index: false,
        follow: false,
      },
    };
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
      robots: isActive ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true }
      } : {
        index: false,
        follow: true,
      },
    });
  }

  const cityLanding = CITY_GUTTER_LANDINGS[params.slug];
  if (cityLanding) {
    return buildMetadata({
      absoluteTitle: cityLanding.titleTag,
      description: cityLanding.metaDescription,
      canonicalPath: areaPath(params.slug),
      robots: isActive ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true }
      } : {
        index: false,
        follow: true,
      },
    });
  }

  return buildMetadata({
    title: `Gutter Cleaning ${areaName}`,
    description: `Professional gutter cleaning and repair services in ${areaName} and surrounding areas. Get a free quote today!`,
    canonicalPath: areaPath(params.slug),
    robots: isActive ? {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true }
    } : {
      index: false,
      follow: true,
    },
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
      <AreaPage areaName={params.slug} />
    </>
  );
}
