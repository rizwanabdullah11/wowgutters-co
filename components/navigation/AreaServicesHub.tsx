import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { colors } from '@/constants/colors';
import { AREA_SERVICE_META, type AreaServiceKind } from '@/lib/areaServiceMeta';
import { AREA_SLUGS, areaPath, roofAreaPath, repairAreaPath } from '@/lib/areaSlugs';
import { getAreaData } from '@/lib/getAreaData';
import { areaLinkLabel } from '@/lib/crawlHub';

/**
 * Sitewide services hub — shown at the bottom of every area page.
 * Replaces the old "Find X near you" crawl footer with unique, on-topic copy
 * and clean internal links to the related services, nearby areas, and
 * supporting pages (pricing, blog, help). Content rotates per area + service
 * kind so each page gets a unique bottom block (not a templated duplicate).
 */
export default function AreaServicesHub({
  currentSlug,
  serviceKind = 'gutter',
  cityName,
}: {
  currentSlug: string;
  serviceKind?: AreaServiceKind;
  cityName?: string;
}) {
  const meta = AREA_SERVICE_META[serviceKind];
  const area = getAreaData(currentSlug);
  const displayName = cityName || area?.name || formatSlug(currentSlug);
  const nearby = (area?.nearbyAreas ?? []).slice(0, 6);

  // Deterministic seed for content variation per area + service combination
  const seed = hashSeed(`${currentSlug}::${serviceKind}`);

  // Pick a unique intro sentence and detail sentence for this area
  const intro = pick(seed, 0, INTRO_LINES, {
    area: displayName,
    service: meta.label,
    serviceLower: meta.labelLower,
    postcode: area?.postcodes?.[0] ?? 'local',
  });
  const detail = pick(seed, 1, DETAIL_LINES, {
    area: displayName,
    service: meta.label,
    serviceLower: meta.labelLower,
    neighbour: nearby[0] || 'the wider West Midlands',
  });

  // Build the related-services list (always include the current service, plus
  // the complementary roof/gutter/repair services the user may also need).
  const relatedServices: { label: string; href: string; description: string }[] = [
    {
      label: 'Gutter Cleaning',
      href: meta.servicePageHref === '/services/gutter-cleaning/' ? '/services/gutter-cleaning/' : meta.servicePageHref,
      description: meta.kind === 'gutter'
        ? 'You are on a gutter cleaning page — book a full clean with our vacuum system.'
        : 'Add a full gutter clean to the same visit for a discounted combined price.',
    },
    {
      label: 'Gutter Repairs',
      href: '/services/gutter-repairs/',
      description: 'Leaking joints, sagging runs, and broken brackets fixed with a 6-month guarantee.',
    },
    {
      label: 'Roof Cleaning',
      href: '/services/roof-cleaning/',
      description: 'Soft-wash moss removal and biocide treatment to keep new debris from washing into your gutters.',
    },
    {
      label: 'Gutter Inspection',
      href: '/services/gutter-inspection/',
      description: 'Free condition report with photos — useful before you buy or sell a property.',
    },
  ];

  // Nearby-areas links (filter out the current slug and any missing from AREA_SLUGS)
  const nearbyLinks = nearby
    .map((name) => slugFromName(name))
    .filter((slug): slug is string => Boolean(slug) && AREA_SLUGS.includes(slug as string) && slug !== currentSlug)
    .slice(0, 6)
    .map((slug) => ({
      slug,
      label: areaLinkLabel(slug),
      href: pathForKind(serviceKind, slug),
    }));

  // Add a fallback "nearby hub" link if the area is not in the primary list
  if (nearbyLinks.length === 0) {
    const fallback = FALLBACK_NEARBY[seed % FALLBACK_NEARBY.length];
    for (const slug of fallback) {
      if (slug === currentSlug) continue;
      if (!AREA_SLUGS.includes(slug)) continue;
      nearbyLinks.push({ slug, label: areaLinkLabel(slug), href: pathForKind(serviceKind, slug) });
      if (nearbyLinks.length >= 4) break;
    }
  }

  const heading = `More from WOW Gutters Ltd in ${displayName}`;
  const eyebrow = serviceKind === 'roof' ? 'Roof Care' : serviceKind === 'gutter' ? 'Gutter Care' : 'Gutter Repairs';

  return (
    <nav
      aria-label={`Related services and nearby ${meta.labelLower} areas`}
      className="border-t border-slate-200 bg-slate-50 py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm font-bold uppercase tracking-widest text-center mb-2"
          style={{ color: colors.primary }}
        >
          {eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-4">
          {heading}
        </h2>
        <p className="text-slate-700 text-base md:text-lg max-w-3xl mx-auto text-center mb-3">
          {intro}
        </p>
        <p className="text-slate-600 text-sm md:text-base max-w-3xl mx-auto text-center mb-10">
          {detail}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {relatedServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#19C58B] hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="w-6 h-6 mt-0.5 shrink-0"
                  style={{ color: colors.primary }}
                />
                <div>
                  <p className="text-slate-900 font-black text-lg group-hover:text-[#0f766e] transition-colors">
                    {s.label}
                  </p>
                  <p className="text-slate-600 text-sm mt-1">{s.description}</p>
                  <span
                    className="inline-flex items-center gap-1 mt-2 text-sm font-bold"
                    style={{ color: colors.primary }}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {nearbyLinks.length > 0 && (
          <div className="mb-8">
            <h3 className="text-base font-black text-slate-900 text-center mb-4 uppercase tracking-wider">
              {meta.label} in nearby areas
            </h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {nearbyLinks.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={l.href}
                    className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:border-[#19C58B] hover:text-[#0f766e] transition-colors"
                  >
                    {serviceKind === 'roof'
                      ? `Roof Cleaning ${l.label}`
                      : serviceKind === 'repair'
                        ? `Gutter Repairs ${l.label}`
                        : `Gutter Cleaning ${l.label}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold">
          <Link
            href="/pricing/"
            className="underline"
            style={{ color: colors.primary }}
          >
            Gutter cleaning prices
          </Link>
          <Link
            href="/blog/"
            className="underline"
            style={{ color: colors.primary }}
          >
            Latest gutter & roof tips
          </Link>
          <Link
            href="/help/"
            className="underline"
            style={{ color: colors.primary }}
          >
            Help Centre
          </Link>
          <Link
            href="/contact/"
            className="underline"
            style={{ color: colors.primary }}
          >
            Contact WOW Gutters
          </Link>
          <Link
            href="/quote/"
            className="underline"
            style={{ color: colors.primary }}
          >
            Get a free {meta.labelLower} quote
          </Link>
        </div>
      </div>
    </nav>
  );
}

function pathForKind(kind: AreaServiceKind, slug: string): string {
  if (kind === 'roof') return roofAreaPath(slug);
  if (kind === 'repair') return repairAreaPath(slug);
  return areaPath(slug);
}

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/**
 * Best-effort slug lookup from a human-readable area name.
 * Returns null if the name does not match a known slug.
 */
function slugFromName(name: string): string | null {
  const norm = name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  if (AREA_SLUGS.includes(norm)) return norm;
  // Common variations: "Birmingham Airport" → "bickenhill" / "elmdon" / "birmingham" — fall back to first match
  const match = AREA_SLUGS.find((slug) => norm.includes(slug) || slug.includes(norm));
  return match ?? null;
}

function hashSeed(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pick(seed: number, salt: number, items: string[], vars: Record<string, string>): string {
  const s = (seed ^ (salt * 2654435761)) >>> 0;
  const template = items[s % items.length];
  return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? '');
}

const INTRO_LINES = [
  'Booked in for {service} in {area}? Most {area} customers add a {serviceLower} appointment to a wider {serviceLower} plan so the whole roofline is covered in one visit.',
  'Our {area} team runs {service} visits alongside repairs, inspections and roof cleaning — so you only need one appointment, one engineer, and one fixed quote.',
  'If you live in {area} ({postcode} postcodes) we can usually fit you in within a few days, and bundle {serviceLower} with related work for a better price.',
  'Working across {area} every week means we know the housing types, common gutter issues and local water-table quirks — and we keep parts on the van for the most common fixes.',
  '{area} homeowners book WOW Gutters Ltd for {serviceLower} because the same engineer who inspects your property also clears the gutters, tests the downpipes, and reports any repairs needed.',
];

const DETAIL_LINES = [
  'For properties near {neighbour} we often schedule combined days, which is why our {area} appointment slots open up so quickly.',
  'If you are on the border with {neighbour}, ask about our dual-area discount when you request a quote.',
  'Customers moving from {neighbour} into {area} usually ring us within the first month — we are happy to quote both properties in a single visit.',
  'Most jobs in {area} are completed the same day you book, and we will always tell you if a neighbouring visit to {neighbour} would speed up your appointment.',
  'Need a quote for {area} and {neighbour} together? We are happy to give a combined price for adjacent streets.',
];

// Used when an area does not have nearby areas defined in the data layer.
const FALLBACK_NEARBY: string[][] = [
  ['birmingham', 'solihull', 'sutton-coldfield', 'wolverhampton'],
  ['coventry', 'solihull', 'birmingham', 'walsgrave'],
  ['wolverhampton', 'walsall', 'birmingham', 'bilston'],
  ['dudley', 'stourbridge', 'halesowen', 'birmingham'],
  ['sandwell', 'west-bromwich', 'smethwick', 'oldbury'],
  ['walsall', 'bloxwich', 'brownhills', 'wolverhampton'],
  ['derby', 'birmingham', 'lichfield', 'tamworth'],
];
