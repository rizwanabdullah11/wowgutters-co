import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import LeicestershireAreaLinks from '@/components/areas/LeicestershireAreaLinks';
import { REAL_GUTTER_JOBS } from '@/constants/realGutterJobs';
import { LIVE_ROOF_JOBS } from '@/constants/realRoofJobs';
import { LEICS_TOWNS } from '@/lib/leicestershireTowns';
import { buildLeicsLanding, leicsPageFromSlug, leicsPath } from '@/lib/leicestershirePages';

const GUTTER_FROM = 100;
const GUTTER_TO = 200;
const ROOF_FROM = 500;

/** One real job photo per page; neighbouring towns on the list get a different job. */
function recentJobsFor(slug: string, service: 'gutter' | 'roof') {
  const i = Math.max(0, LEICS_TOWNS.findIndex((t) => t.slug === slug));
  const jobs = service === 'gutter' ? REAL_GUTTER_JOBS : LIVE_ROOF_JOBS;
  return jobs.length ? [jobs[i % jobs.length]] : [];
}

/** Renders /gutter-cleaning-<town>/ or /roof-cleaning-<town>/ for a Leicestershire town, else null. */
export function renderLeicestershireLanding(slug: string) {
  const page = leicsPageFromSlug(slug);
  if (!page) return null;
  const { service, town } = page;
  const data = buildLeicsLanding(service, town);
  const url = `https://wowgutters.co.uk${leicsPath(service, town.slug)}`;
  const priceFrom = service === 'gutter' ? GUTTER_FROM : ROOF_FROM;
  const priceTo = service === 'gutter' ? GUTTER_TO : ROOF_FROM;

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
