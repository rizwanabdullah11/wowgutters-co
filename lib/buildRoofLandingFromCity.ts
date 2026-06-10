import type { CityGutterLandingData, CityPropertyRow } from '@/constants/cityGutterLandingData';
import type { CityData } from '@/lib/cities';
import type { AreaSupplementEntry } from '@/lib/areaSupplement';
import { roofLocalSpotlight, roofSpecificFaq, roofUniqueWhyParagraphs } from '@/lib/roofUniqueContent';
import { buildRoofSchemaFaqs } from '@/lib/roofCityFaqs';
import { getAreaData } from '@/lib/getAreaData';
import { areaPath, roofAreaPath } from '@/lib/areaSlugs';
import { roofPriceFrom, roofPriceTo } from '@/lib/areaServiceMeta';

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

function roofPropertyTypesFor(tone: RegionTone, name: string, nearby: string[]): CityPropertyRow[] {
  const n = nearby.slice(0, 2).join(' and ') || 'surrounding streets';
  switch (tone) {
    case 'coventry':
      return [
        { label: `Post-war terraces (${name})`, detail: 'Shallow concrete tile roofs where moss spreads quickly on north-facing rear slopes — soft-wash cleared with biocide treatment.' },
        { label: `Period semis near ${name} centre`, detail: 'Clay ridge tiles and older pointing need careful moss removal without high-pressure washing.' },
        { label: 'University & rental stock', detail: 'Landlords across CV postcodes use WOW Gutters Ltd for documented roof cleaning with before and after photos for compliance records.' },
        { label: `Modern estates bordering ${n}`, detail: 'Multi-pitch roofs and rear extensions — full surface treatment in a single visit.' },
      ];
    case 'walsall':
    case 'sandwell':
    case 'dudley':
      return [
        { label: `Victorian & interwar terraces (${name})`, detail: 'Shared rooflines and rear valleys where moss compacts after wet Black Country winters.' },
        { label: '1930s semis', detail: 'Concrete interlocking tiles with moss on rear slopes — the most common roof type we treat in this corridor.' },
        { label: 'Canalside & industrial-era homes', detail: 'Elevated atmospheric moisture accelerates algae on north-facing tiles — biocide slows regrowth after treatment.' },
        { label: `Larger semis near ${n}`, detail: 'Detached and semi-detached homes with longer roof runs — full photographic documentation on every job.' },
      ];
    case 'wolverhampton':
      return [
        { label: `Terraced streets (${name})`, detail: 'Compact rooflines with moss in valleys and along party-wall abutments — cleared with soft-wash methods.' },
        { label: 'Suburban semis (WV postcodes)', detail: 'Mature garden trees cause heavy moss on rear elevations — treatment every 2–3 years recommended.' },
        { label: 'Penn & elevated properties', detail: 'Wind exposure drives faster moss and lichen on exposed ridges — full surface assessment included.' },
        { label: `Nearby ${n}`, detail: 'We route roof cleaning teams across Wolverhampton and bordering WV postcodes weekly.' },
      ];
    case 'solihull':
      return [
        { label: `Village & high-street properties (${name})`, detail: 'Character homes with clay tiles and longer roof runs — careful moss removal preserving ridge mortar.' },
        { label: '1930s–60s semis', detail: 'Established gardens mean shaded north-facing slopes — autumn moss treatment before winter frost.' },
        { label: 'Larger detached homes', detail: 'Complex valleys and multi-level extensions handled in one visit without scaffolding.' },
        { label: `Bordering ${n}`, detail: 'Regular roof cleaning coverage across Solihull borough and adjoining B90–B94 / CV7 postcodes.' },
      ];
    default:
      return [
        { label: `Victorian & Edwardian terraces (${name})`, detail: 'Clay and concrete tiles on period properties — moss cleared without ladder damage to brickwork or pointing.' },
        { label: '1930s–60s semis', detail: 'Concrete tile roofs with moss on rear slopes and along valleys — the most common treatment in Birmingham suburbs.' },
        { label: 'Post-war estates', detail: 'Mature street trees cause heavy moss on north-facing roof sections — biocide applied after every clean.' },
        { label: `Areas near ${n}`, detail: 'We work across neighbouring suburbs weekly with documented before and after photos on every roof job.' },
      ];
  }
}

function roofHeroIntroFor(input: AreaInput, tone: RegionTone): string {
  const { name, postcodes, nearbyAreas, streets = [] } = input;
  const pc = postcodes.join('–') || 'local postcodes';
  const streetBit =
    streets.length >= 2
      ? ` Properties along ${streets.slice(0, 3).join(', ')} and nearby roads often develop heavy moss on shaded roof slopes each winter.`
      : '';
  const nearbyBit = nearbyAreas.length
    ? ` We also serve ${nearbyAreas.slice(0, 5).join(', ')}.`
    : '';

  const toneLead: Record<RegionTone, string> = {
    birmingham: `${name} sits within Birmingham's varied suburban housing — from Victorian terraces to post-war semis — where damp West Midlands weather drives moss, algae and lichen across roof tiles year-round.`,
    coventry: `${name} is part of Coventry's mixed housing stock, where moss establishes quickly on concrete and clay tiles across CV postcodes — particularly on north-facing and tree-shaded elevations.`,
    walsall: `${name} lies in the Walsall / Black Country corridor, where interwar semis, Victorian terraces and greener edges toward Cannock Chase all need periodic roof moss treatment.`,
    dudley: `${name} is in the Dudley borough, where sloping plots, mature trees and older tile roofs make moss-covered valleys a common cause of pointing deterioration and gutter blockage.`,
    sandwell: `${name} is in the Sandwell borough — dense housing where moss on rear roof slopes stains fascias and sheds into gutters if left untreated.`,
    wolverhampton: `${name} is covered from our Wolverhampton routes, serving WV postcodes with professional soft-wash roof cleaning and biocide treatment.`,
    solihull: `${name} is in the Solihull borough — village streets, 1930s semis and larger detached homes where tree cover accelerates moss on shaded roof sections.`,
  };

  return `${toneLead[tone]} WOW Gutters Ltd provides roof cleaning across ${name} (${pc}) using controlled soft-wash methods — no damaging high-pressure washing, biocide applied after every clean, and before & after photos on every job.${streetBit}${nearbyBit}`;
}

function roofWhyBodyFor(input: AreaInput, tone: RegionTone): string[] {
  const { name, postcodes } = input;
  const pc = postcodes[0] ?? 'local';
  return [
    `Moss on roofs in ${name} holds moisture against tiles and pointing through wet West Midlands winters. Left untreated, frost cycles lift mortar, algae spreads across visible elevations, and organic matter sheds into gutters — one of the most preventable causes of overflow and fascia staining we see across ${pc} postcodes.`,
    tone === 'coventry'
      ? `Coventry's rebuilt housing and tree-lined suburbs mean many ${name} properties need roof treatment every 2–3 years, with shaded north-facing slopes checked sooner. We apply biocide after cleaning, photograph the results, and report ridge or flashing issues honestly — no pressure to book extra work.`
      : `Most ${name} homeowners book roof cleaning every 2–3 years — late autumn is ideal before winter frost, with a spring check for tree-heavy plots. We include biocide treatment, photographic proof, and a clear condition note after every visit.`,
  ];
}

function roofInternalLinksFor(input: AreaInput): { label: string; href: string }[] {
  const links: { label: string; href: string }[] = [];
  const hub = input.hubSlug;
  if (hub && hub !== input.slug) {
    const hubName = hub === 'birmingham' ? 'Birmingham' : hub.charAt(0).toUpperCase() + hub.slice(1);
    links.push({ label: `Roof cleaning ${hubName}`, href: roofAreaPath(hub === 'birmingham' ? 'birmingham' : hub) });
  }
  for (const area of input.nearbyAreas.slice(0, 3)) {
    const nearbySlug = area.toLowerCase().replace(/\s+/g, '-');
    if (nearbySlug !== input.slug) {
      links.push({ label: `Roof cleaning ${area}`, href: roofAreaPath(nearbySlug) });
    }
  }
  links.push({ label: `Gutter cleaning ${input.name}`, href: areaPath(input.slug) });
  links.push({ label: 'Roof inspection', href: '/services/roof-inspection/' });
  return links.slice(0, 6);
}

export function buildRoofLandingFromCity(input: AreaInput): CityGutterLandingData {
  const tone = inferTone(input);
  const { slug, name, postcodes, nearbyAreas, geo, priceFrom, priceTo } = input;
  const pcLabel = postcodes.length ? postcodes.join(', ') : 'local postcodes';
  const roofFrom = roofPriceFrom(priceFrom);
  const roofTo = roofPriceTo(priceTo);

  const faqs = buildRoofSchemaFaqs({
    city: name,
    slug,
    priceFrom: roofFrom,
    priceTo: roofTo,
    postcodes,
    nearbyAreas,
  });
  const extraFaq = roofSpecificFaq(input);
  const allFaqs = extraFaq ? [...faqs, extraFaq] : faqs;

  const areasInline = [name, ...nearbyAreas.slice(0, 8)].join(' | ');

  return {
    slug,
    city: name,
    titleTag: `Roof Cleaning ${name} | Moss Removal & Biocide | WOW Gutters Ltd`,
    metaDescription: `Professional roof cleaning in ${name} from £${roofFrom}. Soft-wash moss removal, biocide treatment, before & after photos. Postcodes ${pcLabel}. Call WOW Gutters Ltd: 07421 433910.`,
    h1: `Roof Cleaning ${name} — Professional Moss & Algae Removal Across ${pcLabel}`,
    heroIntro: roofHeroIntroFor(input, tone),
    whyTitle: `Why ${name} Roofs Need Professional Cleaning`,
    whyBody: [...roofWhyBodyFor(input, tone), ...roofUniqueWhyParagraphs(input)],
    localSpotlight: roofLocalSpotlight(input),
    guarantees: [
      'Controlled soft-wash methods — no damaging high-pressure washing on tiles',
      'Moss, algae and lichen removal included on every job',
      'Biocide treatment applied after cleaning to slow regrowth',
      'Before & after photos included as standard on every job',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from verified Google reviews',
    ],
    propertyTypesTitle: `Roof Cleaning for All Property Types in ${name}`,
    propertyTypes: roofPropertyTypesFor(tone, name, nearbyAreas),
    areasTitle: `Areas We Cover Around ${name}`,
    areasInline,
    faqsTitle: `FAQs — Roof Cleaning ${name}`,
    faqs: allFaqs,
    geo,
    internalLinks: roofInternalLinksFor(input),
    nearbyAreas,
    postcodes,
    ctaHeading: `Book Your Roof Clean in ${name} — Free Quote in 60 Seconds`,
    priceTo: roofTo,
  };
}

export function buildRoofLandingFromSlug(slug: string): CityGutterLandingData | null {
  const data = getAreaData(slug);
  if (!data) return null;
  return buildRoofLandingFromCity(data);
}
