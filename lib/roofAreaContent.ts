import type { CityGutterLandingData } from '@/constants/cityGutterLandingData';
import { CITY_GUTTER_LANDINGS } from '@/constants/cityGutterLandingData';
import type { SuburbPageData } from '@/components/areas/SuburbGutterCleaningPage';
import { buildRoofLandingFromSlug } from '@/lib/buildRoofLandingFromCity';
import { getSuburbPageForSlug } from '@/lib/suburbPageData';
import { getAreaData } from '@/lib/getAreaData';
import { areaPath, roofAreaPath } from '@/lib/areaSlugs';
import { roofPriceFrom, roofPriceTo } from '@/lib/areaServiceMeta';
import { roofLocalSpotlight, roofSpecificFaq, roofUniqueWhyParagraphs } from '@/lib/roofUniqueContent';
import { buildRoofSchemaFaqs, roofInternalLinks } from '@/lib/roofCityFaqs';

function swapAreaLinks(href: string): string {
  if (href.startsWith('/gutter-cleaning-')) {
    return href.replace('/gutter-cleaning-', '/roof-cleaning-');
  }
  return href;
}

function swapAreaLinkLabel(label: string): string {
  return label
    .replace(/Gutter cleaning/gi, 'Roof cleaning')
    .replace(/Gutter Cleaning/g, 'Roof Cleaning')
    .replace(/gutter cleaning/gi, 'roof cleaning');
}

function transformRoofPrices(text: string): string {
  return text.replace(/£(\d+)(?:\s*[–-]\s*£(\d+))?/g, (match, a, b) => {
    const low = parseInt(a, 10);
    if (Number.isNaN(low) || low >= 120) return match;
    if (b) {
      const high = parseInt(b, 10);
      return `£${roofPriceFrom(low)}–£${roofPriceTo(Number.isNaN(high) ? low + 40 : high)}`;
    }
    return `£${roofPriceFrom(low)}`;
  });
}

/** Convert gutter-focused copy to roof cleaning copy for area landing pages. */
export function transformTextToRoof(text: string): string {
  return transformRoofPrices(
    text
    .replace(/\bgutter cleaning\b/gi, 'roof cleaning')
    .replace(/\bGutter Cleaning\b/g, 'Roof Cleaning')
    .replace(/\bgutters\b/gi, 'roofs')
    .replace(/\bGutters\b/g, 'Roofs')
    .replace(/\bgutter\b/gi, 'roof')
    .replace(/\bGutter\b/g, 'Roof')
    .replace(/\bdownpipe flushing\b/gi, 'biocide treatment')
    .replace(/\bdownpipe clearance\b/gi, 'moss removal')
    .replace(/\bdownpipes\b/gi, 'roof valleys')
    .replace(/\bdownpipe\b/gi, 'roof valley')
    .replace(/\bvacuum system\b/gi, 'soft-wash system')
    .replace(/\bground-level vacuum\b/gi, 'controlled soft-wash')
    .replace(/\b1-year service guarantee\b/gi, 'biocide treatment included')
    .replace(/\bwe return free if your roofs block within 12 months\b/gi, 'biocide slows moss regrowth after treatment')
    .replace(/\boverflow\b/gi, 'moss build-up')
    .replace(/\bblocked\b/gi, 'moss-covered')
    .replace(/from £(\d+)/gi, (_, n) => {
      const base = parseInt(n, 10);
      if (!Number.isNaN(base) && base < 120) return `from £${roofPriceFrom(base)}`;
      return `from £${n}`;
    }),
  );
}

function transformFaqToRoof(faq: { question: string; answer: string }): { question: string; answer: string } {
  return {
    question: transformTextToRoof(faq.question),
    answer: transformTextToRoof(faq.answer),
  };
}

function roofFaqsForArea(
  slug: string,
  city: string,
  sourceFaqs: { question: string; answer: string }[],
  gutterPriceFrom: number,
  gutterPriceTo: number,
  postcodes: string[],
  nearbyAreas: string[],
): { question: string; answer: string }[] {
  const areaData = getAreaData(slug);
  const transformed = sourceFaqs.length > 0
    ? sourceFaqs.map(transformFaqToRoof)
    : buildRoofSchemaFaqs({
        city,
        slug,
        priceFrom: roofPriceFrom(gutterPriceFrom),
        priceTo: roofPriceTo(gutterPriceTo),
        postcodes,
        nearbyAreas,
      });

  const extraFaq = areaData ? roofSpecificFaq(areaData) : null;
  if (extraFaq && !transformed.some((f) => f.question.includes(extraFaq.question.slice(0, 20)))) {
    return [...transformed, extraFaq];
  }
  return transformed;
}

export function transformCityGutterToRoof(data: CityGutterLandingData): CityGutterLandingData {
  const priceFrom = roofPriceFrom(50);
  const priceTo = roofPriceTo(data.priceTo ?? 140);
  const areaData = getAreaData(data.slug);

  return {
    ...data,
    titleTag: transformTextToRoof(data.titleTag).replace('WOW Gutters Ltd', 'WOW Gutters Ltd'),
    metaDescription: transformTextToRoof(data.metaDescription),
    h1: transformTextToRoof(data.h1),
    heroIntro: transformTextToRoof(data.heroIntro),
    whyTitle: transformTextToRoof(data.whyTitle),
    whyBody: [
      ...data.whyBody.map(transformTextToRoof),
      ...(areaData ? roofUniqueWhyParagraphs(areaData) : []),
    ],
    localSpotlight: data.localSpotlight
      ? transformTextToRoof(data.localSpotlight)
      : areaData
        ? roofLocalSpotlight(areaData)
        : undefined,
    guarantees: data.guarantees.map((g) =>
      transformTextToRoof(g)
        .replace(/no ladders placed against your property/gi, 'soft-wash methods that protect tiles and pointing')
        .replace(/Reaches up to 4 storeys/gi, 'Suitable for terraced, semi-detached and detached homes'),
    ),
    propertyTypesTitle: transformTextToRoof(data.propertyTypesTitle),
    propertyTypes: data.propertyTypes.map((row) => ({
      label: transformTextToRoof(row.label),
      detail: transformTextToRoof(row.detail),
    })),
    areasTitle: data.areasTitle,
    areasInline: data.areasInline,
    faqsTitle: transformTextToRoof(data.faqsTitle),
    faqs: roofFaqsForArea(
      data.slug,
      data.city,
      data.faqs,
      50,
      data.priceTo ?? 140,
      data.postcodes ?? [],
      data.nearbyAreas ?? [],
    ),
    internalLinks: (data.internalLinks ?? []).map((l) => ({
      label: swapAreaLinkLabel(l.label),
      href: swapAreaLinks(l.href),
    })),
    ctaHeading: transformTextToRoof(data.ctaHeading ?? `Book your roof clean in ${data.city} — free quote in 60 seconds`),
    priceTo,
  };
}

export function transformSuburbGutterToRoof(data: SuburbPageData, slug: string): SuburbPageData {
  const cityData = getAreaData(slug);

  return {
    ...data,
    heroBadge: data.heroBadge.replace(/gutter/gi, 'roof'),
    heroTitleLine1: transformTextToRoof(data.heroTitleLine1),
    heroTitleLine2: transformTextToRoof(data.heroTitleLine2),
    whyTitle: transformTextToRoof(data.whyTitle),
    whyParagraphs: [
      ...data.whyParagraphs.map(transformTextToRoof),
      ...(cityData ? roofUniqueWhyParagraphs(cityData) : []),
    ],
    guarantees: (data.guarantees ?? []).map(transformTextToRoof),
    propertyTypesTitle: transformTextToRoof(data.propertyTypesTitle),
    propertyTypes: data.propertyTypes.map((row) => ({
      label: transformTextToRoof(row.label),
      detail: transformTextToRoof(row.detail),
    })),
    areasCoveredTitle: data.areasCoveredTitle,
    areasCoveredText: data.areasCoveredText,
    areaLinks: [
      { href: roofAreaPath(slug), label: `Roof cleaning ${data.city}` },
      { href: areaPath(slug), label: `Gutter cleaning ${data.city}` },
      ...data.areaLinks.slice(0, 4).map((l) => ({
        href: swapAreaLinks(l.href),
        label: swapAreaLinkLabel(l.label),
      })),
      { href: '/services/roof-inspection/', label: 'Roof inspection' },
      { href: '/help/clean/', label: 'Moss removal' },
    ],
    faqs: roofFaqsForArea(
      slug,
      data.city,
      data.faqs,
      cityData?.priceFrom ?? 50,
      cityData?.priceTo ?? 140,
      cityData?.postcodes ?? [],
      cityData?.nearbyAreas ?? [],
    ),
    postcodesTitle: transformTextToRoof(data.postcodesTitle),
    bookingTitle: transformTextToRoof(data.bookingTitle),
    blogLocality: data.blogLocality,
  };
}

/** Rich primary-city landing only (mirrors CITY_GUTTER_LANDINGS lookup). */
export function getRoofCityLanding(slug: string): CityGutterLandingData | null {
  const gutterCity = CITY_GUTTER_LANDINGS[slug];
  if (!gutterCity) return null;
  return transformCityGutterToRoof(gutterCity);
}

export function getRoofGeneratedLanding(slug: string): CityGutterLandingData | null {
  return buildRoofLandingFromSlug(slug);
}

export function getRoofSuburbLanding(slug: string): SuburbPageData | null {
  const suburb = getSuburbPageForSlug(slug);
  if (!suburb) return null;
  return transformSuburbGutterToRoof(suburb, slug);
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
      ...(city ? roofUniqueWhyParagraphs(city) : []),
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
