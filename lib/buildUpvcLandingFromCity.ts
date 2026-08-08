import type { CityGutterLandingData, CityPropertyRow } from '@/constants/cityGutterLandingData';
import type { CityData } from '@/lib/cities';
import { upvcLocalSpotlight, upvcSpecificFaq, upvcUniqueWhyParagraphs } from '@/lib/upvcUniqueContent';
import { buildUpvcSchemaFaqs } from '@/lib/upvcCityFaqs';
import { getAreaData } from '@/lib/getAreaData';
import { areaPath, upvcAreaPath } from '@/lib/areaSlugs';
import { upvcPriceFrom, upvcPriceTo } from '@/lib/areaServiceMeta';

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

function upvcPropertyTypesFor(tone: RegionTone, name: string, nearby: string[]): CityPropertyRow[] {
  const n = nearby.slice(0, 2).join(' and ') || 'surrounding streets';
  switch (tone) {
    case 'coventry':
      return [
        { label: `Post-war terraces (${name})`, detail: 'uPVC windows and fascias refitted across CV postcodes — green algae on shaded rear elevations removed with hot purified water.' },
        { label: `Period semis near ${name} centre`, detail: 'White uPVC systems with soot and carbon staining on road-facing elevations restored to a bright finish.' },
        { label: 'University & rental stock', detail: 'Landlords use WOW Gutters Ltd for documented uPVC cleans with before and after photos for compliance and kerb appeal.' },
        { label: `Modern estates bordering ${n}`, detail: 'Fascias, soffits, porches and conservatories — full exterior uPVC clean in a single visit.' },
      ];
    case 'walsall':
    case 'sandwell':
    case 'dudley':
      return [
        { label: `Victorian & interwar terraces (${name})`, detail: 'Refitted uPVC windows and fascia boards with green mould on shaded elevations after wet Black Country winters.' },
        { label: '1930s semis', detail: 'uPVC windows, cills and raised fascias — the most common exterior uPVC clean we carry out in this corridor.' },
        { label: 'Canalside & industrial-era homes', detail: 'Elevated atmospheric moisture and fine soot speed up mould and carbon staining — hot purified water restores the white finish.' },
        { label: `Larger semis near ${n}`, detail: 'Longer fascia runs and conservatory uPVC — full photographic documentation on every job.' },
      ];
    case 'wolverhampton':
      return [
        { label: `Terraced streets (${name})`, detail: 'Compact uPVC rooflines with algae in shaded corners and along party-wall abutments — cleaned without ladders against the wall.' },
        { label: 'Suburban semis (WV postcodes)', detail: 'Mature garden trees cause green streaks on window frames and fascias — cleaning every 2–3 years recommended.' },
        { label: 'Penn & elevated properties', detail: 'Exposed facades pick up wind-driven grime and lichen — full surface clean included in every visit.' },
        { label: `Nearby ${n}`, detail: 'We route exterior uPVC cleaning teams across Wolverhampton and bordering WV postcodes weekly.' },
      ];
    case 'solihull':
      return [
        { label: `Village & high-street properties (${name})`, detail: 'Character homes with white uPVC windows and conservatories — careful cleaning preserving seals and gaskets.' },
        { label: '1930s–60s semis', detail: 'Established gardens mean shaded north-facing facades — spring cleaning before summer growth.' },
        { label: 'Larger detached homes', detail: 'Extensive fascia runs, cladding and porches handled in one visit without scaffolding.' },
        { label: `Bordering ${n}`, detail: 'Regular uPVC cleaning coverage across Solihull borough and adjoining B90–B94 / CV7 postcodes.' },
      ];
    default:
      return [
        { label: `Victorian & Edwardian terraces (${name})`, detail: 'uPVC windows and fascias on period properties — cleaned without abrasive methods that scratch the surface.' },
        { label: '1930s–60s semis', detail: 'uPVC window frames, cills and fascia boards with algae and carbon staining — the most common clean in Birmingham suburbs.' },
        { label: 'Post-war estates', detail: 'Mature street trees cause green streaking on uPVC — hot purified water lifts growth and leaves a streak-free finish.' },
        { label: `Areas near ${n}`, detail: 'We work across neighbouring suburbs weekly with documented before and after photos on every uPVC job.' },
      ];
  }
}

function upvcHeroIntroFor(input: AreaInput, tone: RegionTone): string {
  const { name, postcodes, nearbyAreas, streets = [] } = input;
  const pc = postcodes.join('–') || 'local postcodes';
  const streetBit =
    streets.length >= 2
      ? ` Properties along ${streets.slice(0, 3).join(', ')} and nearby roads often develop green algae and black mould on shaded uPVC surfaces each year.`
      : '';
  const nearbyBit = nearbyAreas.length
    ? ` We also serve ${nearbyAreas.slice(0, 5).join(', ')}.`
    : '';

  const toneLead: Record<RegionTone, string> = {
    birmingham: `${name} sits within Birmingham's varied suburban housing — from Victorian terraces to post-war semis — where damp West Midlands weather drives green algae, black mould and carbon staining across uPVC fascias, soffits and window frames year-round.`,
    coventry: `${name} is part of Coventry's mixed housing stock, where uPVC windows and fascias dull quickly across CV postcodes — particularly on north-facing and tree-shaded elevations.`,
    walsall: `${name} lies in the Walsall / Black Country corridor, where interwar semis, Victorian terraces and greener edges toward Cannock Chase all need periodic exterior uPVC restoration.`,
    dudley: `${name} is in the Dudley borough, where sloping plots, mature trees and older uPVC refits make green-stained fascias and mouldy soffits a common cause of lost kerb appeal.`,
    sandwell: `${name} is in the Sandwell borough — dense housing where green algae on rear uPVC elevations and fine soot on road-facing frames dull the white finish if left untreated.`,
    wolverhampton: `${name} is covered from our Wolverhampton routes, serving WV postcodes with professional hot purified water uPVC cleaning and streak-free finishes.`,
    solihull: `${name} is in the Solihull borough — village streets, 1930s semis and larger detached homes where tree cover accelerates algae on shaded uPVC sections.`,
  };

  return `${toneLead[tone]} WOW Gutters Ltd provides exterior uPVC cleaning across ${name} (${pc}) using hot purified water — no harsh chemicals, no abrasive scrubbing, streak-free results on fascias, soffits, window frames and doors, with before & after photos on every job.${streetBit}${nearbyBit}`;
}

function upvcWhyBodyFor(input: AreaInput, tone: RegionTone): string[] {
  const { name, postcodes } = input;
  const pc = postcodes[0] ?? 'local';
  return [
    `Green algae and black mould on uPVC in ${name} hold moisture against the surface through wet West Midlands winters. Left untreated, the staining etches into the plastic, dulls the bright white finish, and spreads from fascias onto render and brickwork — one of the most visible signs of a neglected roofline across ${pc} postcodes.`,
    tone === 'coventry'
      ? `Coventry's rebuilt housing and tree-lined suburbs mean many ${name} properties need exterior uPVC cleaning every 2–3 years, with shaded north-facing elevations checked sooner. We use hot purified water, photograph the results, and flag seal or gasket wear honestly — no pressure to book extra work.`
      : `Most ${name} homeowners book exterior uPVC cleaning every 2–3 years — late spring is ideal before the growth season, with a further check for tree-heavy plots. We include before and after photos, a streak-free finish, and a clear condition note after every visit.`,
  ];
}

function upvcInternalLinksFor(input: AreaInput): { label: string; href: string }[] {
  const links: { label: string; href: string }[] = [];
  const hub = input.hubSlug;
  if (hub && hub !== input.slug) {
    const hubName = hub === 'birmingham' ? 'Birmingham' : hub.charAt(0).toUpperCase() + hub.slice(1);
    links.push({ label: `Exterior uPVC Cleaning ${hubName}`, href: upvcAreaPath(hub === 'birmingham' ? 'birmingham' : hub) });
  }
  for (const area of input.nearbyAreas.slice(0, 3)) {
    const nearbySlug = area.toLowerCase().replace(/\s+/g, '-');
    if (nearbySlug !== input.slug) {
      links.push({ label: `Exterior uPVC Cleaning ${area}`, href: upvcAreaPath(nearbySlug) });
    }
  }
  links.push({ label: `Gutter cleaning ${input.name}`, href: areaPath(input.slug) });
  links.push({ label: 'Roof cleaning', href: `/roof-cleaning-${input.slug}/` });
  links.push({ label: 'uPVC care', href: '/upvc-cleaning/' });
  return links.slice(0, 6);
}

export function buildUpvcLandingFromCity(input: AreaInput): CityGutterLandingData {
  const tone = inferTone(input);
  const { slug, name, postcodes, nearbyAreas, geo, priceFrom, priceTo } = input;
  const pcLabel = postcodes.length ? postcodes.join(', ') : 'local postcodes';
  const upvcFrom = upvcPriceFrom(priceFrom);
  const upvcTo = upvcPriceTo(priceTo);

  const faqs = buildUpvcSchemaFaqs({
    city: name,
    slug,
    priceFrom: upvcFrom,
    priceTo: upvcTo,
    postcodes,
    nearbyAreas,
  });
  const extraFaq = upvcSpecificFaq(input);
  const allFaqs = extraFaq ? [...faqs, extraFaq] : faqs;

  const areasInline = [name, ...nearbyAreas.slice(0, 8)].join(' | ');

  return {
    slug,
    city: name,
    titleTag: `Exterior uPVC Cleaning ${name} | Fascias, Soffits & Frames | WOW Gutters Ltd`,
    metaDescription: `Professional exterior uPVC cleaning in ${name} from £${upvcFrom}. Hot purified water restores fascias, soffits, window frames & doors — streak-free, chemical-free. Postcodes ${pcLabel}. Call WOW Gutters Ltd: 07421 433910.`,
    h1: `Exterior uPVC Cleaning ${name} — Fascias, Soffits & Window Frames Restored Across ${pcLabel}`,
    heroIntro: upvcHeroIntroFor(input, tone),
    whyTitle: `Why ${name} uPVC Needs Professional Cleaning`,
    whyBody: [...upvcWhyBodyFor(input, tone), ...upvcUniqueWhyParagraphs(input)],
    localSpotlight: upvcLocalSpotlight(input),
    guarantees: [
      'Hot purified water system — no harsh chemicals, no abrasive scrubbing',
      'Algae, mould, lichen and carbon staining removed from all uPVC surfaces',
      'Streak-free, bright finish restored on fascias, soffits, frames and doors',
      'Before & after photos included as standard on every job',
      'Fully insured — comprehensive public liability cover on every visit',
      '4.9★ rating from verified Google reviews',
    ],
    propertyTypesTitle: `Exterior uPVC Cleaning for All Property Types in ${name}`,
    propertyTypes: upvcPropertyTypesFor(tone, name, nearbyAreas),
    areasTitle: `Areas We Cover Around ${name}`,
    areasInline,
    faqsTitle: `FAQs — Exterior uPVC Cleaning ${name}`,
    faqs: allFaqs,
    geo,
    internalLinks: upvcInternalLinksFor(input),
    nearbyAreas,
    postcodes,
    ctaHeading: `Book Your Exterior uPVC Clean in ${name} — Free Quote in 60 Seconds`,
    priceTo: upvcTo,
  };
}

export function buildUpvcLandingFromSlug(slug: string): CityGutterLandingData | null {
  const data = getAreaData(slug);
  if (!data) return null;
  return buildUpvcLandingFromCity(data);
}