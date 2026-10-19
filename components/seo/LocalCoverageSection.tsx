import Link from 'next/link';
import type { ReactNode } from 'react';
import { AREA_SLUGS, areaPath } from '@/lib/areaSlugs';
import { areaLinkLabel } from '@/lib/crawlHub';

/**
 * Local coverage copy (Oct 2026) — replaces the old 70-button "Gutter cleaning near you"
 * grid. Each page type gets its own written section; town names sit inside the
 * sentences as normal contextual links, so the page keeps its internal links without a
 * repeated block of town buttons on every page.
 */

/** Inline area link. Birmingham's area page is merged into the homepage. */
function A({ s, children }: { s: string; children?: ReactNode }) {
  const label = children ?? areaLinkLabel(s);
  if (s === 'birmingham') {
    return (
      <Link href="/" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800">
        {label}
      </Link>
    );
  }
  if (!AREA_SLUGS.includes(s)) return <>{label}</>;
  return (
    <Link
      href={areaPath(s)}
      className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
    >
      {label}
    </Link>
  );
}

function Shell({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="border-t border-slate-100 bg-slate-50 py-14 px-4" aria-labelledby={id}>
      <div className="mx-auto max-w-3xl">
        <h2 id={id} className="mb-6 text-2xl font-black text-slate-900 md:text-3xl">
          {title}
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-slate-700">{children}</div>
      </div>
    </section>
  );
}

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/* ───────────────────────── Services hub ───────────────────────── */
function ServicesHubCopy() {
  return (
    <Shell id="coverage-services" title="Where our gutter and roofline teams work">
      <p>
        From our base in <A s="birmingham" /> we clean gutters on everything from Victorian terraces in <A s="moseley" /> and{' '}
        <A s="kings-heath" /> to the larger detached homes of <A s="edgbaston" />, <A s="harborne" /> and{' '}
        <A s="sutton-coldfield" />. Bay-fronted semis in <A s="erdington" />, <A s="hall-green" /> and{' '}
        <A s="northfield" /> are a big part of our week, especially in autumn when tree-lined roads fill
        gutters fast.
      </p>
      <p>
        Across the Black Country we cover <A s="wolverhampton" />, <A s="dudley" />, <A s="walsall" />,{' '}
        <A s="west-bromwich" />, <A s="smethwick" />, <A s="halesowen" /> and <A s="stourbridge" />. Older
        cast-iron systems are common there, so we clear them by vacuum from the ground rather than leaning
        ladders on brittle brackets.
      </p>
      <p>
        To the south and east, homeowners in <A s="solihull" />, <A s="shirley" />, <A s="knowle" /> and{' '}
        <A s="coventry" /> book roof cleaning and moss removal alongside gutter clearing. Further out we
        regularly work in <A s="bromsgrove" />, <A s="redditch" />, <A s="worcester" />,{' '}
        <A s="kidderminster" />, <A s="lichfield" /> and <A s="tamworth" />. Every visit includes before and
        after photos, whichever service you book.
      </p>
    </Shell>
  );
}

/* ───────────────────────── Pricing ───────────────────────── */
function PricingCopy() {
  return (
    <Shell id="coverage-pricing" title="Why gutter cleaning prices differ from street to street">
      <p>
        The biggest factor in your price is the length and height of the gutter run, not your postcode.
        A two-up two-down terrace in <A s="selly-oak" /> or <A s="stirchley" /> is usually at the lower end,
        while a three-storey Victorian villa in <A s="moseley" /> or <A s="edgbaston" /> takes longer to clear
        and costs more.
      </p>
      <p>
        Access matters too. Conservatories and extensions are common in <A s="solihull" />,{' '}
        <A s="sutton-coldfield" /> and <A s="four-oaks" />, and our ground-based vacuum clears the gutters
        above them without anything touching the glass. Homes under mature trees in <A s="harborne" />,{' '}
        <A s="bournville" /> and <A s="kings-norton" /> often need a downpipe unblock as well, which we quote
        upfront.
      </p>
      <p>
        Each local page shows typical rates for that area. Popular ones include <A s="birmingham" />,{' '}
        <A s="coventry" />, <A s="wolverhampton" />, <A s="dudley" />, <A s="walsall" />,{' '}
        <A s="west-bromwich" />, <A s="halesowen" />, <A s="stourbridge" />, <A s="bromsgrove" /> and{' '}
        <A s="worcester" />. You get the price before we start.
      </p>
    </Shell>
  );
}

/* ───────────────────────── Hot wash / exterior ───────────────────────── */
function HotWashCopy() {
  return (
    <Shell id="coverage-hotwash" title="Hot wash cleaning booked with your gutter visit">
      <p>
        Most customers add a hot wash to a gutter clean so the fascias, soffits and uPVC are done in the
        same visit. It is popular on newer estates in <A s="shirley" />, <A s="walmley" /> and{' '}
        <A s="castle-bromwich" />, where white uPVC shows green streaks after one wet winter.
      </p>
      <p>
        On period homes in <A s="moseley" />, <A s="harborne" /> and <A s="kings-heath" /> we use a lower
        pressure so older paintwork and timber are not damaged. In <A s="solihull" />,{' '}
        <A s="sutton-coldfield" />, <A s="halesowen" /> and <A s="stourbridge" /> many bookings combine hot
        wash, gutter clearing and conservatory roof cleaning in one trip.
      </p>
    </Shell>
  );
}

/* ───────────────────────── Window cleaning ───────────────────────── */
function WindowsCopy() {
  return (
    <Shell id="coverage-windows" title="Window and frame cleaning alongside gutter work">
      <p>
        Window and frame cleaning is available across the north of the city, including{' '}
        <A s="erdington" />, <A s="boldmere" />, <A s="sutton-coldfield" /> and <A s="great-barr" />.
      </p>
      <p>
        South of the city we cover <A s="hall-green" />, <A s="acocks-green" />, <A s="shirley" /> and{' '}
        <A s="solihull" />. Customers in <A s="quinton" />, <A s="bearwood" /> and <A s="halesowen" /> often
        book windows together with a gutter clean, so the dirty run-off from clearing the gutters is washed
        off the glass straight away.
      </p>
    </Shell>
  );
}

/* ───────────────────────── Individual service pages ───────────────────────── */
const SERVICE_AREA_SETS: string[][] = [
  ['moseley', 'kings-heath', 'hall-green', 'acocks-green', 'yardley', 'solihull', 'shirley', 'knowle'],
  ['erdington', 'sutton-coldfield', 'boldmere', 'walmley', 'great-barr', 'perry-barr', 'aldridge', 'walsall'],
  ['harborne', 'edgbaston', 'quinton', 'bearwood', 'smethwick', 'halesowen', 'stourbridge', 'dudley'],
  ['northfield', 'kings-norton', 'longbridge', 'rubery', 'bromsgrove', 'redditch', 'selly-oak', 'bournville'],
  ['wolverhampton', 'tettenhall', 'bilston', 'sedgley', 'tipton', 'wednesbury', 'west-bromwich', 'oldbury'],
];

function ServiceCopy({ serviceName, slug }: { serviceName: string; slug: string }) {
  const set = SERVICE_AREA_SETS[hash(slug) % SERVICE_AREA_SETS.length];
  const next = SERVICE_AREA_SETS[(hash(slug) + 2) % SERVICE_AREA_SETS.length];
  const lower = serviceName.toLowerCase();
  return (
    <Shell id="coverage-service" title={`${serviceName}: local teams across the West Midlands`}>
      <p>
        We carry out {lower} across <A s="birmingham" /> and the surrounding towns, including{' '}
        <A s={set[0]} />, <A s={set[1]} />, <A s={set[2]} /> and <A s={set[3]} />. Typical problems we deal
        with are compacted silt, moss washed off the roof slope and blocked downpipe outlets.
      </p>
      <p>
        Many customers in <A s={set[4]} />, <A s={set[5]} />, <A s={set[6]} /> and <A s={set[7]} /> book{' '}
        {lower} before autumn leaf fall or after a heavy storm. We also cover <A s={next[0]} />,{' '}
        <A s={next[2]} />, <A s="coventry" /> and <A s="worcester" />. Every visit comes with before and after
        photos and our 1-year guarantee.
      </p>
    </Shell>
  );
}

/* ───────────────────────── Main gutter cleaning service page ───────────────────────── */
function GutterCleaningServiceCopy() {
  return (
    <Shell id="coverage-gutter-cleaning" title="Gutter cleaning in your part of the West Midlands">
      <p>
        Every area has its own gutter problems. In leafy <A s="harborne" />, <A s="edgbaston" /> and{' '}
        <A s="bournville" />, autumn leaves and sycamore seeds are the main cause of blockages. On the
        terraced streets of <A s="selly-oak" />, <A s="stirchley" /> and <A s="kings-heath" />, shared gutter
        runs between houses fill with moss washed off the roof.
      </p>
      <p>
        In <A s="sutton-coldfield" />, <A s="four-oaks" /> and <A s="walmley" /> we often clear gutters above
        conservatories and extensions, all from the ground. Around <A s="solihull" />, <A s="shirley" /> and{' '}
        <A s="knowle" />, three-storey new builds are easy for our 4-storey vacuum reach.
      </p>
      <p>
        We also clean gutters across <A s="coventry" />, <A s="wolverhampton" />, <A s="dudley" />,{' '}
        <A s="walsall" />, <A s="west-bromwich" />, <A s="halesowen" />, <A s="stourbridge" />,{' '}
        <A s="bromsgrove" /> and <A s="redditch" />. Each local page has typical prices for that area.
      </p>
    </Shell>
  );
}

export type LocalCoverageVariant = 'services' | 'pricing' | 'hotwash' | 'windows' | 'gutter-cleaning' | 'service';

export default function LocalCoverageSection({
  variant,
  serviceName = '',
  slug = '',
}: {
  variant: LocalCoverageVariant;
  serviceName?: string;
  slug?: string;
}) {
  switch (variant) {
    case 'services':
      return <ServicesHubCopy />;
    case 'pricing':
      return <PricingCopy />;
    case 'hotwash':
      return <HotWashCopy />;
    case 'windows':
      return <WindowsCopy />;
    case 'gutter-cleaning':
      return <GutterCleaningServiceCopy />;
    default:
      return <ServiceCopy serviceName={serviceName} slug={slug} />;
  }
}
