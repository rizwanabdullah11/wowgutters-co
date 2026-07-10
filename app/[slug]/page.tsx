import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ClientRedirect from '@/components/ClientRedirect';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import BirminghamGutterCleaningPage from '@/components/areas/BirminghamGutterCleaningPage';
import { buildCitySchemaFaqs } from '@/lib/cityFaqs';
import {
  renderCityLanding,
  renderGeneratedAreaLanding,
  renderSuburbLanding,
} from '@/components/areas/CityGutterCleaningRoutes';
import {
  renderBirminghamRoofLanding,
  renderRoofCityLanding,
  renderRoofGeneratedAreaLanding,
  renderRoofSuburbLanding,
} from '@/components/areas/CityRoofCleaningRoutes';
import { getSuburbPageForSlug } from '@/lib/suburbPageData';
import { CITY_GUTTER_LANDINGS } from '@/constants/cityGutterLandingData';
import { buildAreaLandingFromSlug } from '@/lib/buildAreaLandingFromCity';
import { getRoofCityLanding, getRoofGeneratedLanding, getRoofSuburbLanding } from '@/lib/roofAreaContent';
import { AREA_SLUGS, areaPath, roofAreaPath } from '@/lib/areaSlugs';
import { buildMetadata } from '@/lib/seo';
import { getKeywordPage, getAllKeywordSlugs } from '@/lib/keywordPages';
import KeywordLandingPage from '@/components/KeywordLandingPage';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const GUTTER_PREFIX = 'gutter-cleaning-';
const ROOF_PREFIX = 'roof-cleaning-';
const slugSet = new Set(AREA_SLUGS);

const COMMON_TYPOS: Record<string, string> = {
  'gutter-cleaning-sevices': '/gutter-cleaning-services/',
};

const KEYWORD_SLUGS = new Set(getAllKeywordSlugs());

function getGutterAreaSlug(slug: string): string | null {
  if (!slug.startsWith(GUTTER_PREFIX)) return null;
  const areaSlug = slug.slice(GUTTER_PREFIX.length);
  return slugSet.has(areaSlug) ? areaSlug : null;
}

function getRoofAreaSlug(slug: string): string | null {
  if (!slug.startsWith(ROOF_PREFIX)) return null;
  const areaSlug = slug.slice(ROOF_PREFIX.length);
  return slugSet.has(areaSlug) ? areaSlug : null;
}

function formatAreaName(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getKeywordSlug(slug: string): string | null {
  return KEYWORD_SLUGS.has(slug) ? slug : null;
}

export async function generateStaticParams() {
  return [
    ...AREA_SLUGS.map((slug) => ({ slug: `${GUTTER_PREFIX}${slug}` })),
    ...AREA_SLUGS.map((slug) => ({ slug: `${ROOF_PREFIX}${slug}` })),
    ...Object.keys(COMMON_TYPOS).map((slug) => ({ slug })),
    ...getAllKeywordSlugs().map((slug) => ({ slug })),
  ];
}

function buildGutterMetadata(areaSlug: string): Metadata {
  const areaName = formatAreaName(areaSlug);

  if (areaSlug === 'birmingham') {
    return buildMetadata({
      absoluteTitle: 'Gutter Cleaning Birmingham | Professional, Safe & Guaranteed | WOW Gutters Ltd',
      description:
        'Professional gutter cleaning in Birmingham from £50. Ground-level vacuum system, before & after photos, 1-year guarantee. Call WOW Gutters Ltd: 07421 433910.',
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

  const suburb = getSuburbPageForSlug(areaSlug);
  if (suburb) {
    const intro = suburb.whyParagraphs[0] ?? '';
    const description =
      intro.length > 155 ? `${intro.slice(0, 152).trim()}…` : intro ||
      `Professional gutter cleaning in ${suburb.city}. Fixed quotes, before & after photos. Call 07421 433910.`;
    return buildMetadata({
      absoluteTitle: `${suburb.heroTitleLine1} | WOW Gutters Ltd`,
      description,
      canonicalPath: areaPath(areaSlug),
      ogImagePath: `/og/${areaSlug}.jpg`,
    });
  }

  const generated = buildAreaLandingFromSlug(areaSlug);
  if (generated) {
    return buildMetadata({
      absoluteTitle: generated.titleTag,
      description: generated.metaDescription,
      canonicalPath: areaPath(areaSlug),
      ogImagePath: `/og/${areaSlug}.jpg`,
    });
  }

  return buildMetadata({
    title: `Gutter Cleaning ${areaName}`,
    description: `Professional gutter cleaning, repairs and inspections in ${areaName}. Fixed quotes from £50. Call WOW Gutters Ltd: 07421 433910.`,
    canonicalPath: areaPath(areaSlug),
    ogImagePath: `/og/${areaSlug}.jpg`,
  });
}

function buildRoofMetadata(areaSlug: string): Metadata {
  const areaName = formatAreaName(areaSlug);
  const roofCity = getRoofCityLanding(areaSlug);
  const roofSuburb = getRoofSuburbLanding(areaSlug);

  if (areaSlug === 'birmingham') {
    return buildMetadata({
      absoluteTitle: 'Roof Cleaning Birmingham | Professional Moss Removal | WOW Gutters Ltd',
      description:
        'Professional roof cleaning in Birmingham from £150. Soft-wash moss removal, biocide treatment, before & after photos. Fully insured. Call WOW Gutters Ltd: 07421 433910.',
      canonicalPath: roofAreaPath(areaSlug),
      ogImagePath: '/roof-cleaning.JPG',
    });
  }

  if (roofCity) {
    return buildMetadata({
      absoluteTitle: roofCity.titleTag,
      description: roofCity.metaDescription,
      canonicalPath: roofAreaPath(areaSlug),
      ogImagePath: '/roof-cleaning.JPG',
    });
  }

  if (roofSuburb) {
    const intro = roofSuburb.whyParagraphs[0] ?? '';
    const description =
      intro.length > 155 ? `${intro.slice(0, 152).trim()}…` : intro ||
      `Professional roof cleaning in ${roofSuburb.city}. Moss removal, biocide treatment, before & after photos. Call 07421 433910.`;
    return buildMetadata({
      absoluteTitle: `${roofSuburb.heroTitleLine1} | WOW Gutters Ltd`,
      description,
      canonicalPath: roofAreaPath(areaSlug),
      ogImagePath: '/roof-cleaning.JPG',
    });
  }

  const roofGenerated = getRoofGeneratedLanding(areaSlug);
  if (roofGenerated) {
    return buildMetadata({
      absoluteTitle: roofGenerated.titleTag,
      description: roofGenerated.metaDescription,
      canonicalPath: roofAreaPath(areaSlug),
      ogImagePath: '/roof-cleaning.JPG',
    });
  }

  return buildMetadata({
    title: `Roof Cleaning ${areaName}`,
    description: `Professional roof cleaning and moss removal in ${areaName}. Soft-wash methods from £150. Call WOW Gutters Ltd: 07421 433910.`,
    canonicalPath: roofAreaPath(areaSlug),
    ogImagePath: '/roof-cleaning.JPG',
  });
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const gutterSlug = getGutterAreaSlug(params.slug);
  if (gutterSlug) return buildGutterMetadata(gutterSlug);

  const roofSlug = getRoofAreaSlug(params.slug);
  if (roofSlug) return buildRoofMetadata(roofSlug);

  const keywordSlug = getKeywordSlug(params.slug);
  if (keywordSlug) {
    const page = getKeywordPage(keywordSlug);
    if (page) {
      return buildMetadata({
        absoluteTitle: page.titleTag,
        description: page.metaDescription,
        canonicalPath: `/${keywordSlug}/`,
      });
    }
  }

  return { title: 'Not found' };
}

export default async function SingleSegmentAreaPage(props: PageProps) {
  const params = await props.params;

  const typoRedirect = COMMON_TYPOS[params.slug];
  if (typoRedirect) {
    return <ClientRedirect to={typoRedirect} />;
  }

  const gutterAreaSlug = getGutterAreaSlug(params.slug);
  if (gutterAreaSlug) {
    if (gutterAreaSlug === 'birmingham') {
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

    const maybeCity = renderCityLanding(gutterAreaSlug);
    if (maybeCity) return maybeCity;

    const maybeSuburb = renderSuburbLanding(gutterAreaSlug);
    if (maybeSuburb) return maybeSuburb;

    const generated = renderGeneratedAreaLanding(gutterAreaSlug);
    if (generated) return generated;

    notFound();
  }

  const roofAreaSlug = getRoofAreaSlug(params.slug);
  if (roofAreaSlug) {
    if (roofAreaSlug === 'birmingham') {
      return renderBirminghamRoofLanding();
    }

    const maybeCity = renderRoofCityLanding(roofAreaSlug);
    if (maybeCity) return maybeCity;

    const maybeSuburb = renderRoofSuburbLanding(roofAreaSlug);
    if (maybeSuburb) return maybeSuburb;

    const generated = renderRoofGeneratedAreaLanding(roofAreaSlug);
    if (generated) return generated;

    notFound();
  }

  const keywordSlug = getKeywordSlug(params.slug);
  if (keywordSlug) {
    const page = getKeywordPage(keywordSlug);
    if (page) {
      return <KeywordLandingPage page={page} />;
    }
  }

  notFound();
}
