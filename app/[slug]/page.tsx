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
import {
  renderBirminghamRepairLanding,
  renderRepairCityLanding,
  renderRepairGeneratedAreaLanding,
  renderRepairSuburbLanding,
} from '@/components/areas/CityRepairRoutes';
import {
  renderBirminghamInspectionLanding,
  renderInspectionCityLanding,
  renderInspectionGeneratedAreaLanding,
  renderInspectionSuburbLanding,
} from '@/components/areas/CityInspectionRoutes';
import {
  renderBirminghamRoofInspectionLanding,
  renderRoofInspectionCityLanding,
  renderRoofInspectionGeneratedAreaLanding,
  renderRoofInspectionSuburbLanding,
} from '@/components/areas/CityRoofInspectionRoutes';
import {
  renderBirminghamUpvcLanding,
  renderUpvcCityLanding,
  renderUpvcGeneratedAreaLanding,
  renderUpvcSuburbLanding,
} from '@/components/areas/CityUpvcCleaningRoutes';
import {
  renderBirminghamInstallationLanding,
  renderInstallationCityLanding,
  renderInstallationGeneratedAreaLanding,
  renderInstallationSuburbLanding,
} from '@/components/areas/CityInstallationRoutes';
import { getSuburbPageForSlug } from '@/lib/suburbPageData';
import { CITY_GUTTER_LANDINGS } from '@/constants/cityGutterLandingData';
import { buildAreaLandingFromSlug } from '@/lib/buildAreaLandingFromCity';
import { getRoofCityLanding, getRoofGeneratedLanding, getRoofSuburbLanding } from '@/lib/roofAreaContent';
import { getRepairCityLanding, getRepairGeneratedLanding, getRepairSuburbLanding } from '@/lib/repairAreaContent';
import { getInspectionCityLanding, getInspectionGeneratedLanding, getInspectionSuburbLanding } from '@/lib/inspectionAreaContent';
import { getRoofInspectionCityLanding, getRoofInspectionGeneratedLanding, getRoofInspectionSuburbLanding } from '@/lib/roofInspectionAreaContent';
import { getUpvcCityLanding, getUpvcGeneratedLanding, getUpvcSuburbLanding } from '@/lib/upvcAreaContent';
import { getInstallationCityLanding, getInstallationGeneratedLanding, getInstallationSuburbLanding } from '@/lib/installationAreaContent';
import { AREA_SLUGS, areaPath, roofAreaPath, repairAreaPath, inspectionAreaPath, roofInspectionAreaPath, upvcAreaPath, installationAreaPath } from '@/lib/areaSlugs';
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
const REPAIR_PREFIX = 'gutter-repair-';
const INSPECTION_PREFIX = 'gutter-inspection-';
const ROOF_INSPECTION_PREFIX = 'roof-inspection-';
const UPVC_PREFIX = 'exterior-upvc-cleaning-';
const INSTALLATION_PREFIX = 'gutter-installation-';
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

function getRepairAreaSlug(slug: string): string | null {
  if (!slug.startsWith(REPAIR_PREFIX)) return null;
  const areaSlug = slug.slice(REPAIR_PREFIX.length);
  return slugSet.has(areaSlug) ? areaSlug : null;
}

function getInspectionAreaSlug(slug: string): string | null {
  if (!slug.startsWith(INSPECTION_PREFIX)) return null;
  const areaSlug = slug.slice(INSPECTION_PREFIX.length);
  return slugSet.has(areaSlug) ? areaSlug : null;
}

function getRoofInspectionAreaSlug(slug: string): string | null {
  if (!slug.startsWith(ROOF_INSPECTION_PREFIX)) return null;
  const areaSlug = slug.slice(ROOF_INSPECTION_PREFIX.length);
  return slugSet.has(areaSlug) ? areaSlug : null;
}

function getUpvcAreaSlug(slug: string): string | null {
  if (!slug.startsWith(UPVC_PREFIX)) return null;
  const areaSlug = slug.slice(UPVC_PREFIX.length);
  return slugSet.has(areaSlug) ? areaSlug : null;
}

function getInstallationAreaSlug(slug: string): string | null {
  if (!slug.startsWith(INSTALLATION_PREFIX)) return null;
  const areaSlug = slug.slice(INSTALLATION_PREFIX.length);
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
    ...AREA_SLUGS.map((slug) => ({ slug: `${REPAIR_PREFIX}${slug}` })),
    ...AREA_SLUGS.map((slug) => ({ slug: `${INSPECTION_PREFIX}${slug}` })),
    ...AREA_SLUGS.map((slug) => ({ slug: `${ROOF_INSPECTION_PREFIX}${slug}` })),
    ...AREA_SLUGS.map((slug) => ({ slug: `${UPVC_PREFIX}${slug}` })),
    ...AREA_SLUGS.map((slug) => ({ slug: `${INSTALLATION_PREFIX}${slug}` })),
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

function buildRepairMetadata(areaSlug: string): Metadata {
  const areaName = formatAreaName(areaSlug);

  if (areaSlug === 'birmingham') {
    return buildMetadata({
      absoluteTitle: 'Gutter Repairs Birmingham | Leaks, Sagging & Broken Gutters Fixed | WOW Gutters Ltd',
      description:
        'Expert gutter repairs in Birmingham. Leaking joints, sagging runs, cracked sections, broken brackets — diagnosed and fixed with a 6-month guarantee. Call WOW Gutters Ltd: 07421 433910.',
      canonicalPath: repairAreaPath(areaSlug),
      ogImagePath: '/og/birmingham.jpg',
    });
  }

  const cityLanding = getRepairCityLanding(areaSlug);
  if (cityLanding) {
    return buildMetadata({
      absoluteTitle: cityLanding.titleTag,
      description: cityLanding.metaDescription,
      canonicalPath: repairAreaPath(areaSlug),
      ogImagePath: `/og/${areaSlug}.jpg`,
    });
  }

  const suburb = getRepairSuburbLanding(areaSlug);
  if (suburb) {
    const intro = suburb.whyParagraphs[0] ?? '';
    const description =
      intro.length > 155 ? `${intro.slice(0, 152).trim()}…` : intro ||
      `Expert gutter repairs in ${suburb.city}. Leaking joints, sagging runs — fixed with a 6-month guarantee. Call 07421 433910.`;
    return buildMetadata({
      absoluteTitle: `${suburb.heroTitleLine1} | WOW Gutters Ltd`,
      description,
      canonicalPath: repairAreaPath(areaSlug),
      ogImagePath: `/og/${areaSlug}.jpg`,
    });
  }

  const generated = getRepairGeneratedLanding(areaSlug);
  if (generated) {
    return buildMetadata({
      absoluteTitle: generated.titleTag,
      description: generated.metaDescription,
      canonicalPath: repairAreaPath(areaSlug),
      ogImagePath: `/og/${areaSlug}.jpg`,
    });
  }

  return buildMetadata({
    title: `Gutter Repairs ${areaName}`,
    description: `Expert gutter repairs in ${areaName}. Leaking joints, sagging runs, cracked sections — fixed with a 6-month guarantee. Call WOW Gutters Ltd: 07421 433910.`,
    canonicalPath: repairAreaPath(areaSlug),
    ogImagePath: `/og/${areaSlug}.jpg`,
  });
}

function buildInspectionMetadata(areaSlug: string): Metadata {
  const areaName = formatAreaName(areaSlug);

  if (areaSlug === 'birmingham') {
    return buildMetadata({
      absoluteTitle: 'Gutter Inspection Birmingham | Free Condition Report | WOW Gutters Ltd',
      description:
        'Free gutter inspection across Birmingham. We check gutters, downpipes, joints, brackets and fascia — photo report, honest advice, no obligation. Call WOW Gutters Ltd: 07421 433910.',
      canonicalPath: inspectionAreaPath(areaSlug),
      ogImagePath: '/gutter-inspection.png',
    });
  }

  const cityLanding = getInspectionCityLanding(areaSlug);
  if (cityLanding) {
    return buildMetadata({
      absoluteTitle: cityLanding.titleTag,
      description: cityLanding.metaDescription,
      canonicalPath: inspectionAreaPath(areaSlug),
      ogImagePath: '/gutter-inspection.png',
    });
  }

  const suburb = getInspectionSuburbLanding(areaSlug);
  if (suburb) {
    const intro = suburb.whyParagraphs[0] ?? '';
    const description =
      intro.length > 155 ? `${intro.slice(0, 152).trim()}…` : intro ||
      `Free gutter inspection in ${suburb.city}. Gutters, downpipes, joints and fascia checked — photo report, no obligation. Call 07421 433910.`;
    return buildMetadata({
      absoluteTitle: `${suburb.heroTitleLine1} | WOW Gutters Ltd`,
      description,
      canonicalPath: inspectionAreaPath(areaSlug),
      ogImagePath: '/gutter-inspection.png',
    });
  }

  const generated = getInspectionGeneratedLanding(areaSlug);
  if (generated) {
    return buildMetadata({
      absoluteTitle: generated.titleTag,
      description: generated.metaDescription,
      canonicalPath: inspectionAreaPath(areaSlug),
      ogImagePath: '/gutter-inspection.png',
    });
  }

  return buildMetadata({
    title: `Gutter Inspection ${areaName}`,
    description: `Free gutter inspection in ${areaName}. We check gutters, downpipes, joints, brackets and fascia — honest advice, no obligation. Call WOW Gutters Ltd: 07421 433910.`,
    canonicalPath: inspectionAreaPath(areaSlug),
    ogImagePath: '/gutter-inspection.png',
  });
}

function buildRoofInspectionMetadata(areaSlug: string): Metadata {
  const areaName = formatAreaName(areaSlug);

  if (areaSlug === 'birmingham') {
    return buildMetadata({
      absoluteTitle: 'Roof Inspection Birmingham | Free Condition Report | WOW Gutters Ltd',
      description:
        'Free roof inspection across Birmingham. We check tiles, ridges, flashing, moss coverage and ventilation — photo report, honest advice, no obligation. Call WOW Gutters Ltd: 07421 433910.',
      canonicalPath: roofInspectionAreaPath(areaSlug),
      ogImagePath: '/roof-cleaning.JPG',
    });
  }

  const cityLanding = getRoofInspectionCityLanding(areaSlug);
  if (cityLanding) {
    return buildMetadata({
      absoluteTitle: cityLanding.titleTag,
      description: cityLanding.metaDescription,
      canonicalPath: roofInspectionAreaPath(areaSlug),
      ogImagePath: '/roof-cleaning.JPG',
    });
  }

  const suburb = getRoofInspectionSuburbLanding(areaSlug);
  if (suburb) {
    const intro = suburb.whyParagraphs[0] ?? '';
    const description =
      intro.length > 155 ? `${intro.slice(0, 152).trim()}…` : intro ||
      `Free roof inspection in ${suburb.city}. Tiles, ridges, flashing, moss coverage and ventilation checked — no obligation. Call 07421 433910.`;
    return buildMetadata({
      absoluteTitle: `${suburb.heroTitleLine1} | WOW Gutters Ltd`,
      description,
      canonicalPath: roofInspectionAreaPath(areaSlug),
      ogImagePath: '/roof-cleaning.JPG',
    });
  }

  const generated = getRoofInspectionGeneratedLanding(areaSlug);
  if (generated) {
    return buildMetadata({
      absoluteTitle: generated.titleTag,
      description: generated.metaDescription,
      canonicalPath: roofInspectionAreaPath(areaSlug),
      ogImagePath: '/roof-cleaning.JPG',
    });
  }

  return buildMetadata({
    title: `Roof Inspection ${areaName}`,
    description: `Free roof inspection in ${areaName}. We check tiles, ridges, flashing, moss coverage and ventilation — honest advice, no obligation. Call WOW Gutters Ltd: 07421 433910.`,
    canonicalPath: roofInspectionAreaPath(areaSlug),
    ogImagePath: '/roof-cleaning.JPG',
  });
}

function buildUpvcMetadata(areaSlug: string): Metadata {
  const areaName = formatAreaName(areaSlug);

  if (areaSlug === 'birmingham') {
    return buildMetadata({
      absoluteTitle: 'Exterior uPVC Cleaning Birmingham | Fascias, Soffits & Frames | WOW Gutters Ltd',
      description:
        'Professional exterior uPVC cleaning in Birmingham from £120. Hot purified water restores fascias, soffits, window frames & doors — streak-free, chemical-free. Call WOW Gutters Ltd: 07421 433910.',
      canonicalPath: upvcAreaPath(areaSlug),
      ogImagePath: '/upvc-cleaning.jpg',
    });
  }

  const cityLanding = getUpvcCityLanding(areaSlug);
  if (cityLanding) {
    return buildMetadata({
      absoluteTitle: cityLanding.titleTag,
      description: cityLanding.metaDescription,
      canonicalPath: upvcAreaPath(areaSlug),
      ogImagePath: '/upvc-cleaning.jpg',
    });
  }

  const suburb = getUpvcSuburbLanding(areaSlug);
  if (suburb) {
    const intro = suburb.whyParagraphs[0] ?? '';
    const description =
      intro.length > 155 ? `${intro.slice(0, 152).trim()}…` : intro ||
      `Professional exterior uPVC cleaning in ${suburb.city}. Fascias, soffits, window frames & doors — streak-free, chemical-free. Call 07421 433910.`;
    return buildMetadata({
      absoluteTitle: `${suburb.heroTitleLine1} | WOW Gutters Ltd`,
      description,
      canonicalPath: upvcAreaPath(areaSlug),
      ogImagePath: '/upvc-cleaning.jpg',
    });
  }

  const generated = getUpvcGeneratedLanding(areaSlug);
  if (generated) {
    return buildMetadata({
      absoluteTitle: generated.titleTag,
      description: generated.metaDescription,
      canonicalPath: upvcAreaPath(areaSlug),
      ogImagePath: '/upvc-cleaning.jpg',
    });
  }

  return buildMetadata({
    title: `Exterior uPVC Cleaning ${areaName}`,
    description: `Professional exterior uPVC cleaning in ${areaName}. Fascias, soffits, window frames & doors restored — hot purified water, no chemicals. Call WOW Gutters Ltd: 07421 433910.`,
    canonicalPath: upvcAreaPath(areaSlug),
    ogImagePath: '/upvc-cleaning.jpg',
  });
}

function buildInstallationMetadata(areaSlug: string): Metadata {
  const areaName = formatAreaName(areaSlug);

  if (areaSlug === 'birmingham') {
    return buildMetadata({
      absoluteTitle: 'Gutter Installation Birmingham | New uPVC Systems Fitted | WOW Gutters Ltd',
      description:
        'Professional uPVC gutter installation in Birmingham. Free survey, measured and fitted with correct fall, 10-year guarantee on workmanship. Call WOW Gutters Ltd: 07421 433910.',
      canonicalPath: installationAreaPath(areaSlug),
      ogImagePath: '/gutter-installation.png',
    });
  }

  const cityLanding = getInstallationCityLanding(areaSlug);
  if (cityLanding) {
    return buildMetadata({
      absoluteTitle: cityLanding.titleTag,
      description: cityLanding.metaDescription,
      canonicalPath: installationAreaPath(areaSlug),
      ogImagePath: '/gutter-installation.png',
    });
  }

  const suburb = getInstallationSuburbLanding(areaSlug);
  if (suburb) {
    const intro = suburb.whyParagraphs[0] ?? '';
    const description =
      intro.length > 155 ? `${intro.slice(0, 152).trim()}…` : intro ||
      `Professional gutter installation in ${suburb.city}. New uPVC systems measured, supplied and fitted with a 10-year guarantee. Call 07421 433910.`;
    return buildMetadata({
      absoluteTitle: `${suburb.heroTitleLine1} | WOW Gutters Ltd`,
      description,
      canonicalPath: installationAreaPath(areaSlug),
      ogImagePath: '/gutter-installation.png',
    });
  }

  const generated = getInstallationGeneratedLanding(areaSlug);
  if (generated) {
    return buildMetadata({
      absoluteTitle: generated.titleTag,
      description: generated.metaDescription,
      canonicalPath: installationAreaPath(areaSlug),
      ogImagePath: '/gutter-installation.png',
    });
  }

  return buildMetadata({
    title: `Gutter Installation ${areaName}`,
    description: `Professional gutter installation in ${areaName}. New uPVC systems measured, supplied and fitted with a 10-year guarantee. Call WOW Gutters Ltd: 07421 433910.`,
    canonicalPath: installationAreaPath(areaSlug),
    ogImagePath: '/gutter-installation.png',
  });
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;

  const gutterSlug = getGutterAreaSlug(params.slug);
  if (gutterSlug) return buildGutterMetadata(gutterSlug);

  const roofSlug = getRoofAreaSlug(params.slug);
  if (roofSlug) return buildRoofMetadata(roofSlug);

  const repairSlug = getRepairAreaSlug(params.slug);
  if (repairSlug) return buildRepairMetadata(repairSlug);

  const inspectionSlug = getInspectionAreaSlug(params.slug);
  if (inspectionSlug) return buildInspectionMetadata(inspectionSlug);

  const roofInspectionSlug = getRoofInspectionAreaSlug(params.slug);
  if (roofInspectionSlug) return buildRoofInspectionMetadata(roofInspectionSlug);

  const upvcSlug = getUpvcAreaSlug(params.slug);
  if (upvcSlug) return buildUpvcMetadata(upvcSlug);

  const installationSlug = getInstallationAreaSlug(params.slug);
  if (installationSlug) return buildInstallationMetadata(installationSlug);

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

  const repairAreaSlug = getRepairAreaSlug(params.slug);
  if (repairAreaSlug) {
    if (repairAreaSlug === 'birmingham') {
      return renderBirminghamRepairLanding();
    }

    const maybeCity = renderRepairCityLanding(repairAreaSlug);
    if (maybeCity) return maybeCity;

    const maybeSuburb = renderRepairSuburbLanding(repairAreaSlug);
    if (maybeSuburb) return maybeSuburb;

    const generated = renderRepairGeneratedAreaLanding(repairAreaSlug);
    if (generated) return generated;

    notFound();
  }

  const inspectionAreaSlug = getInspectionAreaSlug(params.slug);
  if (inspectionAreaSlug) {
    if (inspectionAreaSlug === 'birmingham') {
      return renderBirminghamInspectionLanding();
    }

    const maybeCity = renderInspectionCityLanding(inspectionAreaSlug);
    if (maybeCity) return maybeCity;

    const maybeSuburb = renderInspectionSuburbLanding(inspectionAreaSlug);
    if (maybeSuburb) return maybeSuburb;

    const generated = renderInspectionGeneratedAreaLanding(inspectionAreaSlug);
    if (generated) return generated;

    notFound();
  }

  const roofInspectionAreaSlug = getRoofInspectionAreaSlug(params.slug);
  if (roofInspectionAreaSlug) {
    if (roofInspectionAreaSlug === 'birmingham') {
      return renderBirminghamRoofInspectionLanding();
    }

    const maybeCity = renderRoofInspectionCityLanding(roofInspectionAreaSlug);
    if (maybeCity) return maybeCity;

    const maybeSuburb = renderRoofInspectionSuburbLanding(roofInspectionAreaSlug);
    if (maybeSuburb) return maybeSuburb;

    const generated = renderRoofInspectionGeneratedAreaLanding(roofInspectionAreaSlug);
    if (generated) return generated;

    notFound();
  }

  const upvcAreaSlug = getUpvcAreaSlug(params.slug);
  if (upvcAreaSlug) {
    if (upvcAreaSlug === 'birmingham') {
      return renderBirminghamUpvcLanding();
    }

    const maybeCity = renderUpvcCityLanding(upvcAreaSlug);
    if (maybeCity) return maybeCity;

    const maybeSuburb = renderUpvcSuburbLanding(upvcAreaSlug);
    if (maybeSuburb) return maybeSuburb;

    const generated = renderUpvcGeneratedAreaLanding(upvcAreaSlug);
    if (generated) return generated;

    notFound();
  }

  const installationAreaSlug = getInstallationAreaSlug(params.slug);
  if (installationAreaSlug) {
    if (installationAreaSlug === 'birmingham') {
      return renderBirminghamInstallationLanding();
    }

    const maybeCity = renderInstallationCityLanding(installationAreaSlug);
    if (maybeCity) return maybeCity;

    const maybeSuburb = renderInstallationSuburbLanding(installationAreaSlug);
    if (maybeSuburb) return maybeSuburb;

    const generated = renderInstallationGeneratedAreaLanding(installationAreaSlug);
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
