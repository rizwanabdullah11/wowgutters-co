import type { CityGutterLandingData } from '@/constants/cityGutterLandingData';
import type { SuburbPageData } from '@/components/areas/SuburbGutterCleaningPage';
import { buildRoofLandingFromSlug } from '@/lib/buildRoofLandingFromCity';
import { getSuburbPageForSlug } from '@/lib/suburbPageData';
import { getAreaData } from '@/lib/getAreaData';
import { areaPath, roofAreaPath } from '@/lib/areaSlugs';
import { roofPriceFrom, roofPriceTo } from '@/lib/areaServiceMeta';
import { buildRoofSchemaFaqs, roofInternalLinks } from '@/lib/roofCityFaqs';
import { roofLocalSpotlight, roofSpecificFaq } from '@/lib/roofUniqueContent';

function formatAreaName(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function roofSuburbFaqs(
  city: string,
  slug: string,
  priceFrom: number,
  priceTo: number,
  postcodes: string[],
  nearbyAreas: string[],
): { question: string; answer: string }[] {
  const base = buildRoofSchemaFaqs({ city, slug, priceFrom, priceTo, postcodes, nearbyAreas });
  const areaData = getAreaData(slug);
  const extra = areaData ? roofSpecificFaq(areaData) : null;
  return extra ? [...base, extra] : base;
}

function roofSuburbPropertyTypes(name: string): { label: string; detail: string }[] {
  return [
    { label: `Terraced homes in ${name}`, detail: `Compact rooflines where moss builds on shaded rear slopes — soft-wash cleared without ladders against brickwork.` },
    { label: `1930s–60s semis around ${name}`, detail: `Concrete interlocking tiles with moss on north-facing elevations — biocide treatment slows regrowth after cleaning.` },
    { label: 'Post-war estates', detail: `Mature street trees cause moss accumulation on roof valleys and abutments — fully treated in a single visit.` },
    { label: `Larger detached properties near ${name}`, detail: `Multi-pitch roofs and rear extensions — full surface treatment documented with before and after photos.` },
  ];
}

/** Rich primary-city landing — builds fresh roof content from city data, not transformed from gutter text. */
export function getRoofCityLanding(slug: string): CityGutterLandingData | null {
  return buildRoofLandingFromSlug(slug);
}

export function getRoofGeneratedLanding(slug: string): CityGutterLandingData | null {
  return buildRoofLandingFromSlug(slug);
}

/** Build roof-specific suburb landing from city data — completely independent of gutter suburb content. */
export function getRoofSuburbLanding(slug: string): SuburbPageData | null {
  const suburb = getSuburbPageForSlug(slug);
  if (!suburb) return null;

  const cityData = getAreaData(slug);
  const priceFrom = roofPriceFrom(cityData?.priceFrom ?? 50);
  const priceTo = roofPriceTo(cityData?.priceTo ?? 140);
  const areaName = formatAreaName(slug);
  const pcLabel = cityData?.postcodes?.join('–') ?? 'local postcodes';

  const faqs = roofSuburbFaqs(
    suburb.city,
    slug,
    priceFrom,
    priceTo,
    cityData?.postcodes ?? [],
    cityData?.nearbyAreas ?? [],
  );

  return {
    city: suburb.city,
    heroBadge: `${suburb.city} roof moss removal specialists • Same-day booking`,
    heroTitleLine1: `Roof Cleaning ${suburb.city}`,
    heroTitleLine2: `Moss Removal & Biocide Treatment Across ${pcLabel}`,
    whyTitle: `Why ${suburb.city} Roofs Need Professional Cleaning`,
    whyParagraphs: [
      `${suburb.city}'s West Midlands climate creates ideal conditions for moss, algae and lichen on roof tiles. Damp weather, shaded north-facing slopes and mature garden trees all contribute to organic growth that holds moisture against tiles and pointing. Left untreated, moss accelerates frost damage in winter and sheds into gutters — causing blockages that overflow onto fascias and brickwork.`,
      `Professional roof cleaning with biocide treatment every 2\u20133 years is the most cost-effective way to protect your roof and maintain kerb appeal across ${suburb.city}. Our controlled soft-wash methods remove moss, algae and lichen without high-pressure damage to tiles, leaving your roofline looking restored and protected.`,
      ...(cityData ? [roofLocalSpotlight(cityData)].filter(Boolean as unknown as (x: string | undefined) => x is string) : []),
    ],
    guarantees: [
      'Controlled soft-wash methods — no damaging high-pressure washing on tiles',
      'Moss, algae and lichen removal included on every job',
      'Biocide treatment applied after cleaning to slow regrowth',
      'Before & after photos included as standard on every job',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from verified Google reviews',
    ],
    propertyTypesTitle: `Roof Cleaning for All Property Types in ${suburb.city}`,
    propertyTypes: roofSuburbPropertyTypes(suburb.city),
    areasCoveredTitle: suburb.areasCoveredTitle,
    areasCoveredText: suburb.areasCoveredText,
    areaLinks: [
      { href: roofAreaPath(slug), label: `Roof Cleaning ${suburb.city}` },
      { href: areaPath(slug), label: `Gutter cleaning ${suburb.city}` },
      ...suburb.areaLinks.slice(0, 4),
      { href: '/services/roof-inspection/', label: 'Roof inspection' },
      { href: '/help/clean/', label: 'Moss removal' },
    ],
    whatsappPrefix: `Hi WOW Gutters Ltd, I'm interested in roof cleaning in ${suburb.city}.`,
    faqs,
    postcodesTitle: `Roof Cleaning Postcodes We Cover in ${suburb.city}`,
    postcodeStreetTitle: suburb.postcodeStreetTitle,
    postcodeStreets: suburb.postcodeStreets,
    postcodeFooter: suburb.postcodeFooter,
    bookingTitle: `Book Your Roof Clean in ${suburb.city} Today`,
    mapTitle: suburb.mapTitle.replace(/gutter cleaning|Gutter Cleaning/gi, 'roof cleaning'),
    mapSrc: suburb.mapSrc,
    blogLocality: suburb.blogLocality,
  };
}

export function buildBirminghamRoofLanding(): CityGutterLandingData {
  const city = getAreaData('birmingham');
  const postcodes = city?.postcodes ?? ['B1', 'B13', 'B14', 'B15', 'B16', 'B17', 'B23', 'B27', 'B28', 'B29', 'B31', 'B43', 'B73', 'B74', 'B76'];
  const nearbyAreas = city?.nearbyAreas ?? ['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich'];
  const priceFrom = roofPriceFrom(50);
  const priceTo = roofPriceTo(140);

  return {
    slug: 'birmingham',
    city: 'Birmingham',
    titleTag: 'Roof Cleaning Birmingham | Professional Moss Removal | WOW Gutters Ltd',
    metaDescription:
      'Professional roof cleaning in Birmingham from £150. Soft-wash moss removal, biocide treatment, before & after photos. Fully insured. Call WOW Gutters Ltd: 07421 433910.',
    h1: 'Roof Cleaning Birmingham — Professional Moss & Algae Removal Across the West Midlands',
    heroIntro:
      'WOW Gutters Ltd provides professional roof cleaning across Birmingham and all surrounding West Midlands postcodes. Our controlled soft-wash methods remove moss, algae and lichen from roof tiles without high-pressure damage — with biocide treatment applied after every clean and before & after photos on every job. From Victorian terraces in Moseley to semis in Sutton Coldfield and detached homes across B15–B76, we restore roof appearance and help protect tiles from moisture damage caused by organic growth.',
    whyTitle: 'Why Birmingham Roofs Need Professional Cleaning',
    whyBody: [
      'Birmingham\'s damp West Midlands climate creates ideal conditions for moss, algae and lichen on roof tiles. Left untreated, moss holds moisture against tiles and pointing, accelerates frost damage in winter, and sheds into gutters — causing blockages and overflow that stain brickwork and fascia boards.',
      'Tree-lined suburbs such as Moseley, Harborne, Sutton Coldfield and Kings Heath see faster moss growth on north-facing and shaded roof slopes. Professional roof cleaning with biocide treatment every 2–3 years is the most cost-effective way to protect your roof and maintain kerb appeal.',
      ...(city ? [roofLocalSpotlight(city)].filter(Boolean as unknown as (x: string | undefined) => x is string) : []),
    ],
    guarantees: [
      'Controlled soft-wash methods — no damaging high-pressure washing on tiles',
      'Moss, algae and lichen removal included on every job',
      'Biocide treatment applied after cleaning to slow regrowth',
      'Before & after photos included as standard on every job',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from verified Google reviews',
    ],
    propertyTypesTitle: 'Roof Cleaning for All Birmingham Property Types',
    propertyTypes: [
      { label: 'Victorian & Edwardian terraces', detail: 'Period properties across inner Birmingham — careful moss removal from clay and concrete tiles without ladder damage to brickwork.' },
      { label: '1930s–60s semis', detail: 'The most common Birmingham housing stock. Moss on rear slopes and along valleys cleared with full biocide treatment.' },
      { label: 'Large detached homes', detail: 'Sutton Coldfield, Edgbaston and Solihull detached properties with complex rooflines — full surface treatment from experienced technicians.' },
      { label: 'Flats & managed blocks', detail: 'We coordinate with managing agents, provide photographic documentation, and can schedule planned maintenance programmes.' },
    ],
    areasTitle: 'Areas We Cover Around Birmingham',
    areasInline:
      'Moseley, Harborne, Edgbaston, Kings Heath, Sutton Coldfield, Erdington, Selly Oak, Northfield, Acocks Green, Hall Green, Solihull, West Bromwich, Walsall, Wolverhampton, Dudley',
    faqsTitle: 'FAQs — Roof Cleaning Birmingham',
    localSpotlight: city ? roofLocalSpotlight(city) : undefined,
    faqs: (() => {
      const base = buildRoofSchemaFaqs({
        city: 'Birmingham',
        slug: 'birmingham',
        priceFrom,
        priceTo,
        postcodes,
        nearbyAreas,
      });
      const extra = city ? roofSpecificFaq(city) : null;
      return extra ? [...base, extra] : base;
    })(),
    geo: city?.geo ?? { latitude: 52.4862, longitude: -1.8904 },
    internalLinks: roofInternalLinks('birmingham', nearbyAreas),
    nearbyAreas,
    postcodes,
    ctaHeading: 'Book Your Birmingham Roof Clean — Free Quote in 60 Seconds',
    priceTo,
  };
}
