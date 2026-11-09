import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import LeicestershireAreaLinks from '@/components/areas/LeicestershireAreaLinks';
import { REAL_GUTTER_JOBS, type RealGutterJob } from '@/constants/realGutterJobs';
import { LIVE_ROOF_JOBS } from '@/constants/realRoofJobs';
import { LEICS_TOWNS } from '@/lib/leicestershireTowns';
import { buildLeicsLanding, leicsPageFromSlug, leicsPath, type LeicsService } from '@/lib/leicestershirePages';

const PRICE: Record<LeicsService, { from: number; to: number }> = {
  gutter: { from: 100, to: 200 },
  roof: { from: 500, to: 500 },
  repair: { from: 30, to: 30 },
};

/** Real repair photos (public/, owner supplied) — no town named, as the job location isn't stated. */
const REPAIR_JOBS: RealGutterJob[] = [
  {
    id: 'repair-cherry-picker',
    title: 'Gutter repair from a cherry picker',
    summary: 'Our technician repairing a black uPVC gutter from a cherry picker, so nothing leans on the fascia or roof.',
    photos: [{ src: '/gutter-repair-technician-cherry-picker.webp', alt: 'WOW Gutters Ltd technician repairing a black uPVC gutter from a cherry picker', label: 'During' }],
  },
  {
    id: 'repair-completed',
    title: 'Finished gutter repair',
    summary: 'A completed repair on a black gutter run, re-aligned and water-tested before we left.',
    photos: [{ src: '/gutter-repair-completed-black-gutter.webp', alt: 'Completed black gutter repair on a white rendered building', label: 'After' }],
  },
];

/** One real job photo per page; neighbouring towns on the list get a different job. */
function recentJobsFor(slug: string, service: LeicsService) {
  const i = Math.max(0, LEICS_TOWNS.findIndex((t) => t.slug === slug));
  const jobs = service === 'gutter' ? REAL_GUTTER_JOBS : service === 'roof' ? LIVE_ROOF_JOBS : REPAIR_JOBS;
  return jobs.length ? [jobs[i % jobs.length]] : [];
}

/** Renders /gutter-cleaning-, /roof-cleaning- or /gutter-repair-<town>/ for a Leicestershire town, else null. */
export function renderLeicestershireLanding(slug: string) {
  const page = leicsPageFromSlug(slug);
  if (!page) return null;
  const { service, town } = page;
  const data = buildLeicsLanding(service, town);
  const url = `https://wowgutters.co.uk${leicsPath(service, town.slug)}`;
  const priceFrom = PRICE[service].from;
  const priceTo = PRICE[service].to;

  return (
    <>
      <LocalBusinessSchema
        city={data.city}
        url={url}
        priceFrom={priceFrom}
        priceTo={priceTo}
        nearbyAreas={data.nearbyAreas ?? []}
        geo={data.geo}
        postcodes={data.postcodes}
        faqs={data.faqs}
        serviceKind={service}
        slug={town.slug}
      />
      <CityGutterCleaningPage
        data={data}
        priceFrom={priceFrom}
        priceTo={priceTo}
        serviceKind={service}
        showGuarantee={false}
        useLandingFaqs
        recentJobs={recentJobsFor(town.slug, service)}
        bottomSlot={<LeicestershireAreaLinks town={town} service={service} />}
      />
    </>
  );
}
