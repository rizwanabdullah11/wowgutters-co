import type { CityGutterLandingData, CityPropertyRow } from '@/constants/cityGutterLandingData';
import { CITY_GUTTER_LANDINGS } from '@/constants/cityGutterLandingData';
import type { SuburbPageData } from '@/components/areas/SuburbGutterCleaningPage';
import type { CityData } from '@/lib/cities';
import { getSuburbPageForSlug } from '@/lib/suburbPageData';
import { getAreaData } from '@/lib/getAreaData';
import { areaPath, installationAreaPath } from '@/lib/areaSlugs';
import { installationPriceFrom, installationPriceTo } from '@/lib/areaServiceMeta';

function transformInstallationPrices(text: string): string {
  return text.replace(/£(\d+)(?:\s*[–-]\s*£(\d+))?/g, (match, a, b) => {
    const low = parseInt(a, 10);
    if (Number.isNaN(low)) return match;
    if (low >= 280) return match;
    if (b) {
      const high = parseInt(b, 10);
      const lowPrice = installationPriceFrom(low);
      const highPrice = installationPriceTo(Number.isNaN(high) ? high : low + 60);
      if (lowPrice === highPrice) return `£${lowPrice}+`;
      return `£${lowPrice}–£${highPrice}`;
    }
    return `£${installationPriceFrom(low)}`;
  });
}

/** Convert gutter-focused copy to gutter installation copy for area landing pages. */
export function transformTextToInstallation(text: string): string {
  return transformInstallationPrices(
    text
      .replace(/\bGutter Cleaning\b/g, 'Gutter Installation')
      .replace(/\bgutter cleaning\b/g, 'gutter installation')
      .replace(/\bGutter cleaning\b/g, 'Gutter installation')
      .replace(/ground-level vacuum system\b/gi, 'full supply and fitting service')
      .replace(/ground-level vacuum\b/gi, 'full supply and fitting service')
      .replace(/vacuum system\b/gi, 'supply and fitting service')
      .replace(/vacuum(ed|es)?\b/gi, 'fitted')
      .replace(/cleaned\b/gi, 'fitted')
      .replace(/clearing\b/gi, 'installation')
      .replace(/cleans\b/gi, 'installs')
      .replace(/cleaning\b/gi, 'installation')
      .replace(/cleared\b/gi, 'fitted')
      .replace(/clears\b/gi, 'installs')
      .replace(/clear\b/gi, 'fit')
      .replace(/downpipe flushing\b/gi, 'downpipe system installation')
      .replace(/downpipe clearance\b/gi, 'downpipe installation')
      .replace(/1-year service guarantee\b/gi, '10-year workmanship guarantee')
      .replace(/1-year guarantee\b/gi, '10-year guarantee')
      .replace(/we return free if your gutters block within 12 months\b/gi, 'all installation work carries a 10-year guarantee')
      .replace(/no ladders placed against your property\b/gi, 'careful, tidy fitting with no avoidable mess')
      .replace(/Reaches up to 4 storeys\b/gi, 'Installs gutters and downpipes on properties up to 4 storeys'),
  );
}

function transformFaqToInstallation(faq: { question: string; answer: string }): { question: string; answer: string } {
  return {
    question: transformTextToInstallation(faq.question),
    answer: transformTextToInstallation(faq.answer),
  };
}

function installationFaqsForArea(
  city: string,
  sourceFaqs: { question: string; answer: string }[],
): { question: string; answer: string }[] {
  if (sourceFaqs.length > 0) {
    const transformed = sourceFaqs.map(transformFaqToInstallation);
    const installationSpecific: { question: string; answer: string }[] = [
      {
        question: `Do you supply and install new gutter systems in ${city}?`,
        answer: `Yes. We survey your property, measure every run, and supply and fit quality uPVC gutter and downpipe systems across ${city}. Every installation has the correct fall, properly spaced brackets and fully sealed joints, backed by a 10-year guarantee on workmanship.`,
      },
      {
        question: `How much does gutter installation cost in ${city}?`,
        answer: `Costs depend on the length of guttering, the number of downpipes, the type of system and access. A typical replacement starts from around £300 and a full new system for a detached home can reach £1,500. We provide a free, fixed quote after a site survey — no obligation.`,
      },
    ];
    return [...installationSpecific, ...transformed.slice(0, 4)];
  }
  return [
    {
      question: `Do you supply and install new gutter systems in ${city}?`,
      answer: `Yes. We survey your property, measure every run, and supply and fit quality uPVC gutter and downpipe systems across ${city}. Every installation has the correct fall, properly spaced brackets and fully sealed joints, backed by a 10-year guarantee on workmanship.`,
    },
    {
      question: `How much does gutter installation cost in ${city}?`,
      answer: `Costs depend on the length of guttering, the number of downpipes, the type of system and access. A typical replacement starts from around £300 and a full new system for a detached home can reach £1,500. We provide a free, fixed quote after a site survey — no obligation.`,
    },
    {
      question: `Can you replace existing gutters in ${city}?`,
      answer: `Yes. We remove old or damaged guttering and install a new uPVC system with correct fall and bracket spacing. We will always tell you honestly whether repair or full replacement is the better value for your property.`,
    },
    {
      question: `How long does a gutter installation take in ${city}?`,
      answer: `Most domestic installations are completed in a single day. A full survey establishes the system size first, and we give you a start-to-finish schedule with the quote.`,
    },
  ];
}

export function transformCityGutterToInstallation(data: CityGutterLandingData): CityGutterLandingData {
  const priceTo = installationPriceTo(data.priceTo ?? 140);

  return {
    ...data,
    titleTag: transformTextToInstallation(data.titleTag),
    metaDescription: transformTextToInstallation(data.metaDescription),
    h1: transformTextToInstallation(data.h1),
    heroIntro: transformTextToInstallation(data.heroIntro),
    whyTitle: transformTextToInstallation(data.whyTitle),
    whyBody: data.whyBody.map((p) =>
      transformTextToInstallation(p)
        .replace(/blocked gutters overflow/gi, 'worn gutters leak and overflow')
        .replace(/moss, silt and leaves compact in neglected runs/gi, 'aged uPVC cracks, joints open and brackets pull loose in neglected runs'),
    ),
    localSpotlight: data.localSpotlight
      ? transformTextToInstallation(data.localSpotlight)
      : undefined,
    guarantees: [
      'Free site survey and fixed quote before any work starts',
      'Quality uPVC gutter and downpipe systems supplied & fitted',
      'Correct fall set for reliable drainage on every run',
      'Properly spaced brackets and fully sealed joints',
      '10-year guarantee on workmanship for every installation',
      'Fully insured — comprehensive public liability cover on every visit',
    ],
    propertyTypesTitle: transformTextToInstallation(data.propertyTypesTitle),
    propertyTypes: data.propertyTypes.map((row) => ({
      label: transformTextToInstallation(row.label),
      detail: transformTextToInstallation(row.detail),
    })),
    areasTitle: data.areasTitle,
    areasInline: data.areasInline,
    faqsTitle: `FAQs — Gutter Installation ${data.city}`,
    faqs: installationFaqsForArea(data.city, data.faqs),
    internalLinks: (data.internalLinks ?? []).map((l) => ({
      label: l.label
        .replace(/Gutter Cleaning/g, 'Gutter Installation')
        .replace(/gutter cleaning/g, 'gutter installation'),
      href: l.href,
    })),
    ctaHeading: `Book Your Gutter Installation in ${data.city} — Free Survey & Quote`,
    priceTo,
  };
}

export function transformSuburbGutterToInstallation(data: SuburbPageData, slug: string): SuburbPageData {
  return {
    ...data,
    heroBadge: data.heroBadge
      .replace(/Gutter Cleaning/gi, 'Gutter Installation')
      .replace(/Gutter cleaning/gi, 'Gutter installation')
      .replace(/gutter cleaning/gi, 'gutter installation'),
    heroTitleLine1: transformTextToInstallation(data.heroTitleLine1),
    heroTitleLine2: transformTextToInstallation(data.heroTitleLine2),
    whyTitle: transformTextToInstallation(data.whyTitle),
    whyParagraphs: data.whyParagraphs.map(transformTextToInstallation),
    guarantees: (data.guarantees ?? []).map(transformTextToInstallation),
    propertyTypesTitle: transformTextToInstallation(data.propertyTypesTitle),
    propertyTypes: data.propertyTypes.map((row) => ({
      label: transformTextToInstallation(row.label),
      detail: transformTextToInstallation(row.detail),
    })),
    areasCoveredTitle: data.areasCoveredTitle,
    areasCoveredText: data.areasCoveredText,
    areaLinks: [
      { href: installationAreaPath(slug), label: `Gutter Installation ${data.city}` },
      { href: areaPath(slug), label: `Gutter cleaning ${data.city}` },
      ...data.areaLinks.slice(0, 4).map((l) => ({
        href: l.href,
        label: l.label
          .replace(/Gutter Cleaning/g, 'Gutter Installation')
          .replace(/gutter cleaning/g, 'gutter installation'),
      })),
      { href: '/services/gutter-installation/', label: 'Gutter installation' },
      { href: '/help/repair/', label: 'Gutter repairs' },
    ],
    faqs: installationFaqsForArea(data.city, data.faqs),
    postcodesTitle: transformTextToInstallation(data.postcodesTitle),
    bookingTitle: transformTextToInstallation(data.bookingTitle),
    blogLocality: data.blogLocality,
  };
}

/** City cleaning landings transformed to gutter installation. */
export function getInstallationCityLanding(slug: string): CityGutterLandingData | null {
  const gutterCity = CITY_GUTTER_LANDINGS[slug];
  if (!gutterCity) return null;
  return transformCityGutterToInstallation(gutterCity);
}

export function getInstallationGeneratedLanding(slug: string): CityGutterLandingData | null {
  const data = getAreaData(slug);
  if (!data) return null;
  return buildInstallationLandingFromCity(data);
}

export function getInstallationSuburbLanding(slug: string): SuburbPageData | null {
  const suburb = getSuburbPageForSlug(slug);
  if (!suburb) return null;
  return transformSuburbGutterToInstallation(suburb, slug);
}

function installationGeneratedPropertyTypes(
  name: string,
  nearby: string[],
): CityPropertyRow[] {
  const n = nearby.slice(0, 2).join(' and ') || 'surrounding areas';
  return [
    {
      label: `Victorian & Edwardian terraces (${name})`,
      detail: `New uPVC systems fitted to period properties with the correct fall and sealed joints — no more leaks on shared rooflines.`,
    },
    {
      label: '1930s–60s semis',
      detail: `The most common replacement job in ${name} — worn uPVC and cast iron removed and replaced with modern, low-maintenance guttering.`,
    },
    {
      label: 'Post-war estates & modern homes',
      detail: `Extensions, new builds and replacement runs fitted with properly spaced brackets and secure downpipe connections.`,
    },
    {
      label: `Areas near ${n}`,
      detail: `Our installation teams work across surrounding areas weekly with free surveys and fixed quotes before any work starts.`,
    },
  ];
}

function installationGeneratedWhyBody(name: string): string[] {
  return [
    `Old gutters in ${name} leak from joint failure, sag under debris weight and develop cracks that resealing cannot fix. A worn system sends water down external walls and into foundations — one of the most common causes of damp we see. Correct installation, with the right fall and bracketing, removes the problem permanently.`,
    `We survey every ${name} property before quoting, measure every run and downpipe, and give honest advice on whether repair or full replacement is better value. Quality uPVC systems are supplied and fitted with a 10-year guarantee on workmanship.`,
  ];
}

function installationGeneratedInternalLinks(slug: string, name: string, nearbyAreas: string[]): { label: string; href: string }[] {
  const links: { label: string; href: string }[] = [];
  for (const area of nearbyAreas.slice(0, 4)) {
    const nearbySlug = area.toLowerCase().replace(/\s+/g, '-');
    if (nearbySlug !== slug) {
      links.push({ label: `Gutter Installation ${area}`, href: installationAreaPath(nearbySlug) });
    }
  }
  links.push({ label: `Gutter cleaning ${name}`, href: areaPath(slug) });
  links.push({ label: 'Gutter installation service', href: '/services/gutter-installation/' });
  links.push({ label: 'Gutter repairs guide', href: '/help/repair/' });
  return links.slice(0, 6);
}

export function buildInstallationLandingFromCity(input: CityData & { streets?: string[]; hubSlug?: string }): CityGutterLandingData | null {
  const { slug, name, postcodes, nearbyAreas, geo, priceFrom, priceTo } = input;
  const pcLabel = postcodes.length ? postcodes.join(', ') : 'local postcodes';
  const installationFrom = installationPriceFrom(priceFrom);
  const installationTo = installationPriceTo(priceTo);

  const areasInline = [
    name,
    ...nearbyAreas.slice(0, 8),
  ].join(' | ');

  return {
    slug,
    city: name,
    titleTag: `Gutter Installation ${name} | New uPVC Systems Fitted | WOW Gutters Ltd`,
    metaDescription: `Professional gutter installation in ${name} from £${installationFrom}. Free survey, quality uPVC systems supplied & fitted, 10-year guarantee. Postcodes ${pcLabel}. Call WOW Gutters Ltd: 07421 433910.`,
    h1: `Gutter Installation ${name} — New uPVC Systems Measured, Supplied & Fitted`,
    heroIntro: `WOW Gutters Ltd installs new uPVC gutter and downpipe systems across ${name} (${pcLabel}). We survey every property, measure each run, set the correct fall for drainage, space brackets properly and seal every joint. Quality materials, a tidy finish and a 10-year guarantee on workmanship. Free survey and fixed quote before any work starts.`,
    whyTitle: `Why ${name} Homeowners Choose Professional Gutter Installation`,
    whyBody: installationGeneratedWhyBody(name),
    localSpotlight: undefined,
    guarantees: [
      'Free site survey and fixed quote before any work starts',
      'Quality uPVC gutter and downpipe systems supplied & fitted',
      'Correct fall set for reliable drainage on every run',
      'Properly spaced brackets and fully sealed joints',
      '10-year guarantee on workmanship for every installation',
      'Fully insured — comprehensive public liability cover on every visit',
    ],
    propertyTypesTitle: `Gutter Installation for All Property Types in ${name}`,
    propertyTypes: installationGeneratedPropertyTypes(name, nearbyAreas),
    areasTitle: `Areas We Cover Around ${name}`,
    areasInline,
    faqsTitle: `FAQs — Gutter Installation ${name}`,
    faqs: installationFaqsForArea(name, []),
    geo,
    internalLinks: installationGeneratedInternalLinks(slug, name, nearbyAreas),
    nearbyAreas,
    postcodes,
    ctaHeading: `Book Your Gutter Installation in ${name} — Free Survey & Quote`,
    priceTo: installationTo,
  };
}

export function buildBirminghamInstallationLanding(): CityGutterLandingData {
  const city = getAreaData('birmingham');
  const postcodes = city?.postcodes ?? ['B1', 'B13', 'B14', 'B15', 'B16', 'B17', 'B23', 'B27', 'B28', 'B29', 'B31', 'B43', 'B73', 'B74', 'B76'];
  const nearbyAreas = city?.nearbyAreas ?? ['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley', 'West Bromwich'];
  const priceTo = installationPriceTo(140);

  return {
    slug: 'birmingham',
    city: 'Birmingham',
    titleTag: 'Gutter Installation Birmingham | New uPVC Systems Fitted | WOW Gutters Ltd',
    metaDescription:
      'Professional uPVC gutter installation in Birmingham. Free survey, measured and fitted with correct fall, 10-year guarantee on workmanship. Call WOW Gutters Ltd: 07421 433910.',
    h1: 'Gutter Installation Birmingham — New uPVC Systems Measured, Supplied & Fitted',
    heroIntro:
      'WOW Gutters Ltd supplies and installs new uPVC gutter and downpipe systems across Birmingham and all surrounding West Midlands postcodes. From replacing worn runs on Victorian terraces in Moseley to full new systems on detached homes in Sutton Coldfield, every installation is surveyed, measured and fitted with the correct fall, properly spaced brackets and fully sealed joints. Free survey and fixed quote — call 07421 433910.',
    whyTitle: 'Why Birmingham Homeowners Choose Professional Gutter Installation',
    whyBody: [
      'A gutter that has cracked, sagged or repeatedly leaked is rarely worth chasing with repairs. New uPVC guttering, fitted with the correct fall and bracket spacing, removes the problem at the source and protects your walls, soffits and foundations for decades.',
      'Birmingham\'s housing stock — Victorian terraces, 1930s semis and modern estates — each suits a specific system size and fitting approach. We survey every property, advise honestly on repair versus replacement, and back all installation work with a 10-year guarantee.',
    ],
    guarantees: [
      'Free site survey and fixed quote before any work starts',
      'Quality uPVC gutter and downpipe systems supplied & fitted',
      'Correct fall set for reliable drainage on every run',
      'Properly spaced brackets and fully sealed joints',
      '10-year guarantee on workmanship for every installation',
      'Fully insured — comprehensive public liability cover on every visit',
    ],
    propertyTypesTitle: 'Gutter Installation for All Birmingham Property Types',
    propertyTypes: [
      { label: 'Victorian & Edwardian terraces', detail: 'New uPVC runs on period properties across inner Birmingham — correct fall and sealed joints stop leaks on shared rooflines.' },
      { label: '1930s–60s semis', detail: 'The most common replacement job. Worn uPVC and cast iron removed, modern guttering fitted with proper bracketing.' },
      { label: 'Large detached homes', detail: 'Sutton Coldfield, Edgbaston and Solihull — full systems for complex roof valleys and multiple downpipes in a single visit.' },
      { label: 'Flats, extensions & new builds', detail: 'Supply and fitting for extensions, conversions and new developments, coordinated with managing agents and builders.' },
    ],
    areasTitle: 'Areas We Cover Around Birmingham',
    areasInline:
      'Moseley, Harborne, Edgbaston, Kings Heath, Sutton Coldfield, Erdington, Selly Oak, Northfield, Acocks Green, Hall Green, Solihull, West Bromwich, Walsall, Wolverhampton, Dudley',
    faqsTitle: 'FAQs — Gutter Installation Birmingham',
    localSpotlight: undefined,
    faqs: installationFaqsForArea('Birmingham', []),
    geo: city?.geo ?? { latitude: 52.4862, longitude: -1.8904 },
    internalLinks: [
      { label: 'Gutter Installation Solihull', href: installationAreaPath('solihull') },
      { label: 'Gutter cleaning Birmingham', href: areaPath('birmingham') },
      { label: 'Gutter installation service', href: '/services/gutter-installation/' },
    ],
    nearbyAreas,
    postcodes,
    ctaHeading: 'Book Your Birmingham Gutter Installation — Free Survey & Quote',
    priceTo,
  };
}