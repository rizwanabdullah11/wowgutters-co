import type { CityGutterLandingData } from '@/constants/cityGutterLandingData';
import type { SuburbPageData } from '@/components/areas/SuburbGutterCleaningPage';
import { buildUpvcLandingFromSlug } from '@/lib/buildUpvcLandingFromCity';
import { getSuburbPageForSlug } from '@/lib/suburbPageData';
import { getAreaData } from '@/lib/getAreaData';
import { areaPath, upvcAreaPath } from '@/lib/areaSlugs';
import { upvcPriceFrom, upvcPriceTo } from '@/lib/areaServiceMeta';
import { buildUpvcSchemaFaqs, upvcInternalLinks } from '@/lib/upvcCityFaqs';
import { upvcLocalSpotlight, upvcSpecificFaq } from '@/lib/upvcUniqueContent';

function upvcSuburbFaqs(
  city: string,
  slug: string,
  priceFrom: number,
  priceTo: number,
  postcodes: string[],
  nearbyAreas: string[],
): { question: string; answer: string }[] {
  const base = buildUpvcSchemaFaqs({ city, slug, priceFrom, priceTo, postcodes, nearbyAreas });
  const areaData = getAreaData(slug);
  const extra = areaData ? upvcSpecificFaq(areaData) : null;
  return extra ? [...base, extra] : base;
}

function upvcSuburbPropertyTypes(name: string): { label: string; detail: string }[] {
  return [
    { label: `Terraced homes in ${name}`, detail: `Compact uPVC rooflines where algae builds on shaded rear elevations — cleaned without ladders against brickwork.` },
    { label: `1930s–60s semis around ${name}`, detail: `uPVC windows, cills and raised fascias with green streaking — hot purified water restores the bright finish.` },
    { label: 'Post-war estates', detail: `Mature street trees cause algae and moss streaking on uPVC surfaces — fully cleaned in a single visit.` },
    { label: `Larger detached properties near ${name}`, detail: `Extensive fascia runs, cladding and conservatory uPVC — full clean documented with before and after photos.` },
  ];
}

/** Rich primary-city landing — builds fresh exterior uPVC content from city data, not transformed from gutter text. */
export function getUpvcCityLanding(slug: string): CityGutterLandingData | null {
  return buildUpvcLandingFromSlug(slug);
}

export function getUpvcGeneratedLanding(slug: string): CityGutterLandingData | null {
  return buildUpvcLandingFromSlug(slug);
}

/** Build uPVC-specific suburb landing from city data — completely independent of gutter suburb content. */
export function getUpvcSuburbLanding(slug: string): SuburbPageData | null {
  const suburb = getSuburbPageForSlug(slug);
  if (!suburb) return null;

  const cityData = getAreaData(slug);
  const priceFrom = upvcPriceFrom(cityData?.priceFrom ?? 50);
  const priceTo = upvcPriceTo(cityData?.priceTo ?? 140);
  const pcLabel = cityData?.postcodes?.join('–') ?? 'local postcodes';

  const faqs = upvcSuburbFaqs(
    suburb.city,
    slug,
    priceFrom,
    priceTo,
    cityData?.postcodes ?? [],
    cityData?.nearbyAreas ?? [],
  );

  return {
    city: suburb.city,
    heroBadge: `${suburb.city} exterior uPVC cleaning specialists • Same-day booking`,
    heroTitleLine1: `Exterior uPVC Cleaning ${suburb.city}`,
    heroTitleLine2: `Fascias, Soffits & Frames Restored Across ${pcLabel}`,
    whyTitle: `Why ${suburb.city} uPVC Needs Professional Cleaning`,
    whyParagraphs: [
      `${suburb.city}'s West Midlands climate creates ideal conditions for green algae, black mould and carbon staining on uPVC. Damp weather, shaded north-facing elevations and mature garden trees all contribute to growth that dulls the bright white finish of fascias, soffits and window frames. Left untreated, algae etches into the surface and staining becomes permanent — hurting kerb appeal and the overall look of your property.`,
      `Professional exterior uPVC cleaning with hot purified water every 2\u20133 years is the most cost-effective way to protect your uPVC and keep your roofline looking its best across ${suburb.city}. No harsh chemicals, no abrasive scrubbing — just a streak-free finish that restores fascias, soffits, frames and doors.`,
      ...(cityData ? [upvcLocalSpotlight(cityData)].filter(Boolean as unknown as (x: string | undefined) => x is string) : []),
    ],
    guarantees: [
      'Hot purified water system — no harsh chemicals, no abrasive scrubbing',
      'Algae, mould, lichen and carbon staining removed from all uPVC surfaces',
      'Streak-free, bright finish restored on fascias, soffits, frames and doors',
      'Before & after photos included as standard on every job',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from verified Google reviews',
    ],
    propertyTypesTitle: `Exterior uPVC Cleaning for All Property Types in ${suburb.city}`,
    propertyTypes: upvcSuburbPropertyTypes(suburb.city),
    areasCoveredTitle: suburb.areasCoveredTitle,
    areasCoveredText: suburb.areasCoveredText,
    areaLinks: [
      { href: upvcAreaPath(slug), label: `Exterior uPVC Cleaning ${suburb.city}` },
      { href: areaPath(slug), label: `Gutter cleaning ${suburb.city}` },
      ...suburb.areaLinks.slice(0, 4),
      { href: '/roof-cleaning/', label: 'Roof cleaning' },
      { href: '/upvc-cleaning/', label: 'uPVC care' },
    ],
    whatsappPrefix: `Hi WOW Gutters Ltd, I'm interested in exterior uPVC cleaning in ${suburb.city}.`,
    faqs,
    postcodesTitle: `Exterior uPVC Cleaning Postcodes We Cover in ${suburb.city}`,
    postcodeStreetTitle: suburb.postcodeStreetTitle,
    postcodeStreets: suburb.postcodeStreets,
    postcodeFooter: suburb.postcodeFooter,
    bookingTitle: `Book Your Exterior uPVC Clean in ${suburb.city} Today`,
    mapTitle: suburb.mapTitle.replace(/gutter cleaning|Gutter Cleaning/gi, 'exterior uPVC cleaning'),
    mapSrc: suburb.mapSrc,
    blogLocality: suburb.blogLocality,
  };
}

export function buildBirminghamUpvcLanding(): CityGutterLandingData {
  const city = getAreaData('birmingham');
  const postcodes = city?.postcodes ?? ['B1', 'B13', 'B14', 'B15', 'B16', 'B17', 'B23', 'B27', 'B28', 'B29', 'B31', 'B43', 'B73', 'B74', 'B76'];
  const nearbyAreas = city?.nearbyAreas ?? ['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich'];
  const priceFrom = upvcPriceFrom(50);
  const priceTo = upvcPriceTo(140);

  return {
    slug: 'birmingham',
    city: 'Birmingham',
    titleTag: 'Exterior uPVC Cleaning Birmingham | Fascias, Soffits & Frames | WOW Gutters Ltd',
    metaDescription:
      'Professional exterior uPVC cleaning in Birmingham from £120. Hot purified water restores fascias, soffits, window frames & doors — streak-free, chemical-free. Fully insured. Call WOW Gutters Ltd: 07421 433910.',
    h1: 'Exterior uPVC Cleaning Birmingham — Fascias, Soffits & Window Frames Restored Across the West Midlands',
    heroIntro:
      'WOW Gutters Ltd provides professional exterior uPVC cleaning across Birmingham and all surrounding West Midlands postcodes. Our hot purified water system removes green algae, black mould, lichen and carbon staining from fascias, soffits, window frames and doors — without harsh chemicals or abrasive scrubbing. From Victorian terraces in Moseley to semis in Sutton Coldfield and detached homes across B15–B76, we restore the bright white finish and protect your uPVC from permanent staining.',
    whyTitle: 'Why Birmingham uPVC Needs Professional Cleaning',
    whyBody: [
      'Birmingham\'s damp West Midlands climate creates ideal conditions for green algae, black mould and carbon staining on uPVC. Left untreated, algae etches into the surface, dulls the bright white finish, and spreads from fascias onto render and brickwork — one of the most visible signs of a neglected roofline.',
      'Tree-lined suburbs such as Moseley, Harborne, Sutton Coldfield and Kings Heath see faster algae growth on north-facing and shaded uPVC elevations, while roadside frames pick up fine carbon dust. Professional exterior uPVC cleaning every 2–3 years is the most cost-effective way to protect your uPVC and maintain kerb appeal.',
      ...(city ? [upvcLocalSpotlight(city)].filter(Boolean as unknown as (x: string | undefined) => x is string) : []),
    ],
    guarantees: [
      'Hot purified water system — no harsh chemicals, no abrasive scrubbing',
      'Algae, mould, lichen and carbon staining removed from all uPVC surfaces',
      'Streak-free, bright finish restored on fascias, soffits, frames and doors',
      'Before & after photos included as standard on every job',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from verified Google reviews',
    ],
    propertyTypesTitle: 'Exterior uPVC Cleaning for All Birmingham Property Types',
    propertyTypes: [
      { label: 'Victorian & Edwardian terraces', detail: 'Period properties across inner Birmingham — uPVC windows and fascias cleaned without abrasive methods that scratch the surface.' },
      { label: '1930s–60s semis', detail: 'The most common Birmingham housing stock. uPVC frames, cills and raised fascias with algae and carbon staining fully restored.' },
      { label: 'Large detached homes', detail: 'Sutton Coldfield, Edgbaston and Solihull detached properties with extensive fascia runs, cladding and conservatories.' },
      { label: 'Flats & managed blocks', detail: 'We coordinate with managing agents, provide photographic documentation, and can schedule planned maintenance programmes.' },
    ],
    areasTitle: 'Areas We Cover Around Birmingham',
    areasInline:
      'Moseley, Harborne, Edgbaston, Kings Heath, Sutton Coldfield, Erdington, Selly Oak, Northfield, Acocks Green, Hall Green, Solihull, West Bromwich, Walsall, Wolverhampton, Dudley',
    faqsTitle: 'FAQs — Exterior uPVC Cleaning Birmingham',
    localSpotlight: city ? upvcLocalSpotlight(city) : undefined,
    faqs: (() => {
      const base = buildUpvcSchemaFaqs({
        city: 'Birmingham',
        slug: 'birmingham',
        priceFrom,
        priceTo,
        postcodes,
        nearbyAreas,
      });
      const extra = city ? upvcSpecificFaq(city) : null;
      return extra ? [...base, extra] : base;
    })(),
    geo: city?.geo ?? { latitude: 52.4862, longitude: -1.8904 },
    internalLinks: upvcInternalLinks('birmingham', nearbyAreas),
    nearbyAreas,
    postcodes,
    ctaHeading: 'Book Your Birmingham Exterior uPVC Clean — Free Quote in 60 Seconds',
    priceTo,
  };
}