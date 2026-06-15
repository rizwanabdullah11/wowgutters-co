import type { CityGutterLandingData, CityPropertyRow } from '@/constants/cityGutterLandingData';
import { buildCitySchemaFaqs } from '@/lib/cityFaqs';
import type { CityData } from '@/lib/cities';
import type { AreaSupplementEntry } from '@/lib/areaSupplement';
import { areaLocalSpotlight, areaSpecificFaq, areaUniqueWhyParagraphs } from '@/lib/areaUniqueContent';
import { getAreaData } from '@/lib/getAreaData';
import { areaPath } from '@/lib/areaSlugs';

type AreaInput = CityData & { streets?: string[]; hubSlug?: string };

type RegionTone = 'birmingham' | 'coventry' | 'walsall' | 'dudley' | 'sandwell' | 'wolverhampton' | 'solihull';

function inferTone(input: AreaInput): RegionTone {
  const hub = input.hubSlug;
  if (hub === 'coventry') return 'coventry';
  if (hub === 'walsall') return 'walsall';
  if (hub === 'dudley') return 'dudley';
  if (hub === 'sandwell') return 'sandwell';
  if (hub === 'wolverhampton') return 'wolverhampton';
  if (hub === 'solihull') return 'solihull';
  const pc = input.postcodes[0] ?? '';
  if (pc.startsWith('CV')) return 'coventry';
  if (pc.startsWith('WS') || pc.startsWith('WV12') || pc.startsWith('WV13')) return 'walsall';
  if (pc.startsWith('WV')) return 'wolverhampton';
  if (pc.startsWith('DY')) return 'dudley';
  if (pc.startsWith('B9') || pc.startsWith('B37') || pc.startsWith('B92') || pc.startsWith('B93') || pc.startsWith('B94')) {
    return 'solihull';
  }
  return 'birmingham';
}

function propertyTypesFor(tone: RegionTone, name: string, nearby: string[]): CityPropertyRow[] {
  const n = nearby.slice(0, 2).join(' and ') || 'surrounding streets';
  switch (tone) {
    case 'coventry':
      return [
        { label: `Post-war terraces (${name})`, detail: '1950s–70s uPVC runs that trap moss in damp weather. We vacuum from ground level with full downpipe flushing.' },
        { label: `Period semis near ${name} centre`, detail: 'Older rooflines and cast iron remnants need careful clearing — no ladders against brickwork.' },
        { label: 'University & rental stock', detail: 'Landlords across CV postcodes use WOW Gutters Ltd for annual maintenance with photo proof for compliance.' },
        { label: `Modern estates bordering ${n}`, detail: 'Long gutter runs and multi-storey sections cleared in one visit up to four storeys.' },
      ];
    case 'walsall':
    case 'sandwell':
    case 'dudley':
      return [
        { label: `Victorian & interwar terraces (${name})`, detail: 'Dense Black Country housing with shared rooflines — efficient vacuum clean with no mess on pavements.' },
        { label: '1930s semis', detail: 'Original or early uPVC systems prone to sagging when debris is left. We report joint condition after every clean.' },
        { label: 'Canalside & industrial-era homes', detail: 'Wind-blown silt and leaf fall from mature street trees — common cause of overflow we clear on first visit.' },
        { label: `Larger semis near ${n}`, detail: 'Multi-section rooflines and detached homes — full photographic evidence included on every job.' },
      ];
    case 'wolverhampton':
      return [
        { label: `Terraced streets (${name})`, detail: 'Quick access, thorough vacuum clear, downpipes flushed and tested on every property.' },
        { label: 'Suburban semis (WV postcodes)', detail: 'Mature garden trees shed heavily each autumn — annual cleaning prevents fascia staining and damp.' },
        { label: 'Penn & elevated properties', detail: 'Wind exposure accelerates debris build-up on higher rooflines — our 4-storey reach handles all sections.' },
        { label: `Nearby ${n}`, detail: 'We route teams across Wolverhampton and bordering WV postcodes weekly.' },
      ];
    case 'solihull':
      return [
        { label: `Village & high-street properties (${name})`, detail: 'Character homes with longer gutter runs — cleared from the ground with before & after photos.' },
        { label: '1930s–60s semis', detail: 'Established gardens mean heavy leaf fall; we recommend autumn plus spring cleans for tree-lined plots.' },
        { label: 'Larger detached homes', detail: 'Complex roof valleys and multiple downpipes handled in a single visit without scaffolding.' },
        { label: `Bordering ${n}`, detail: 'Regular coverage across Solihull borough and adjoining B90–B94 / CV7 postcodes.' },
      ];
    default:
      return [
        { label: `Victorian & Edwardian terraces (${name})`, detail: 'Period brickwork stays protected — no ladders placed against walls. Cast iron and uPVC both handled.' },
        { label: '1930s–60s semis', detail: 'Standard uPVC runs with moss and joint leaks — the most common issues we find in Birmingham suburbs.' },
        { label: 'Post-war estates', detail: 'Council and private estates with mature street trees — gutters can fill within weeks each autumn.' },
        { label: `Areas near ${n}`, detail: 'We work across neighbouring suburbs weekly with same-day availability on many routes.' },
      ];
  }
}

function heroIntroFor(input: AreaInput, tone: RegionTone): string {
  const { name, postcodes, nearbyAreas, streets = [] } = input;
  const pc = postcodes.join('–') || 'local postcodes';
  const streetBit =
    streets.length >= 2
      ? ` Properties along ${streets.slice(0, 3).join(', ')} and nearby roads often see heavy leaf and moss build-up each year.`
      : '';
  const nearbyBit = nearbyAreas.length
    ? ` We also serve ${nearbyAreas.slice(0, 5).join(', ')}.`
    : '';

  const toneLead: Record<RegionTone, string> = {
    birmingham: `${name} sits within Birmingham’s diverse suburban housing — from Victorian terraces to post-war semis — where mature street trees and West Midlands rainfall make annual gutter maintenance essential.`,
    coventry: `${name} is part of Coventry’s mixed housing stock, from post-war terraces to modern estates, where moss, leaves and wind-blown debris block gutters quickly across CV postcodes.`,
    walsall: `${name} lies in the Walsall / Black Country corridor, where interwar semis, Victorian terraces and greener edges toward Cannock Chase all need reliable gutter care.`,
    dudley: `${name} is in the Dudley borough, where sloping sites, older uPVC and tree-lined residential roads make blocked gutters a common cause of damp and fascia damage.`,
    sandwell: `${name} is in the Sandwell borough — dense terraces and semis where overflowing gutters stain brickwork and saturate gardens if left uncleared.`,
    wolverhampton: `${name} is covered from our Wolverhampton routes, serving WV postcodes with ground-level vacuum cleaning and full downpipe flushing.`,
    solihull: `${name} is in the Solihull borough — village streets, 1930s semis and larger detached homes that benefit from annual professional gutter clearing.`,
  };

  return `${toneLead[tone]} WOW Gutters Ltd cleans gutters across ${name} (${pc}) using our ground-level vacuum system — no ladders against your home, before & after photos on every job, and a 1-year service guarantee.${streetBit}${nearbyBit}`;
}

function whyBodyFor(input: AreaInput, tone: RegionTone): string[] {
  const { name, postcodes } = input;
  const pc = postcodes[0] ?? 'local';
  return [
    `Blocked gutters in ${name} overflow during heavy rain, sending water down external walls and into foundations — one of the most preventable causes of damp we see across ${pc} postcodes. Moss, silt and leaves compact in neglected runs, adding weight that pulls brackets loose on older uPVC.`,
    tone === 'coventry'
      ? `Coventry’s rebuilt housing and tree-lined suburbs mean many ${name} properties need cleaning every autumn and again in spring if surrounded by mature gardens. Our technicians flush every downpipe, photograph the results, and flag any repairs honestly — no pressure to book extra work.`
      : `Most ${name} homeowners book once or twice a year — October–November is critical, with a spring visit for tree-heavy plots. We include downpipe flushing, photographic proof, and a clear condition note after every visit.`,
  ];
}

function internalLinksFor(input: AreaInput): { label: string; href: string }[] {
  const links: { label: string; href: string }[] = [];
  const hub = input.hubSlug;
  if (hub && hub !== input.slug) {
    const hubName = hub === 'birmingham' ? 'Birmingham' : hub.charAt(0).toUpperCase() + hub.slice(1);
    links.push({ label: `Gutter cleaning ${hubName}`, href: areaPath(hub === 'birmingham' ? 'birmingham' : hub) });
  }
  for (const area of input.nearbyAreas.slice(0, 3)) {
    const nearbySlug = area.toLowerCase().replace(/\s+/g, '-');
    if (nearbySlug !== input.slug) {
      links.push({ label: `Gutter cleaning ${area}`, href: areaPath(nearbySlug) });
    }
  }
  links.push({ label: 'Gutter repairs', href: '/help/repair/' });
  return links.slice(0, 6);
}

export function buildAreaLandingFromCity(input: AreaInput): CityGutterLandingData {
  const tone = inferTone(input);
  const { slug, name, postcodes, nearbyAreas, geo, priceFrom, priceTo } = input;
  const pcLabel = postcodes.length ? postcodes.join(', ') : 'local postcodes';
  const streets = (input as AreaSupplementEntry).streets ?? input.streets ?? [];
  const faqs = buildCitySchemaFaqs({
    city: name,
    slug,
    priceFrom,
    priceTo,
    postcodes,
    nearbyAreas,
  });
  const extraFaq = areaSpecificFaq(input);
  const allFaqs = extraFaq ? [...faqs, extraFaq] : faqs;

  const areasInline = [
    name,
    ...nearbyAreas.slice(0, 8),
  ].join(' | ');

  return {
    slug,
    city: name,
    titleTag: `Gutter Cleaning ${name} | Professional, Safe & Guaranteed | WOW Gutters Ltd`,
    metaDescription: `Professional gutter cleaning in ${name} from £${priceFrom}. Ground-level vacuum, before & after photos, 1-year guarantee. Postcodes ${pcLabel}. Call WOW Gutters Ltd: 07421 433910.`,
    h1: `Gutter Cleaning ${name}${tone === 'birmingham' ? ' Birmingham' : ''} — Professional Service for ${pcLabel} Properties`,
    heroIntro: heroIntroFor(input, tone),
    whyTitle: `Why ${name} Homeowners Choose Professional Gutter Cleaning`,
    whyBody: [...whyBodyFor(input, tone), ...areaUniqueWhyParagraphs(input)],
    localSpotlight: areaLocalSpotlight(input),
    guarantees: [
      'Ground-level vacuum system — no ladders placed against your property',
      'Reaches up to 4 storeys — homes, flats and commercial buildings',
      'Before & after photos included as standard on every job',
      '1-year service guarantee — we return free if your gutters block within 12 months',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from verified Google reviews',
    ],
    propertyTypesTitle: `Gutter Cleaning for All Property Types in ${name}`,
    propertyTypes: propertyTypesFor(tone, name, nearbyAreas),
    areasTitle: `Areas We Cover Around ${name}`,
    areasInline,
    faqsTitle: `FAQs — Gutter Cleaning ${name}`,
    faqs: allFaqs,
    geo,
    internalLinks: internalLinksFor(input),
    nearbyAreas,
    postcodes,
    ctaHeading: `Book Your Gutter Clean in ${name} — Free Quote in 60 Seconds`,
    priceTo,
  };
}

export function buildAreaLandingFromSlug(slug: string): CityGutterLandingData | null {
  const data = getAreaData(slug);
  if (!data) return null;
  return buildAreaLandingFromCity(data);
}
