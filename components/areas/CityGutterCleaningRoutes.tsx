import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage';
import { CITY_GUTTER_LANDINGS } from '@/constants/cityGutterLandingData';
import { getCityBySlug } from '@/lib/cities';
import { buildAreaLandingFromSlug } from '@/lib/buildAreaLandingFromCity';
import { getAreaData } from '@/lib/getAreaData';
import { buildCitySchemaFaqs, isPrimaryCitySlug } from '@/lib/cityFaqs';
import { getSuburbPageForSlug } from '@/lib/suburbPageData';

/** Rich suburb copy from suburbPageData (audit 08.03 — avoids thin template pages). */
export function renderSuburbLanding(slug: string) {
  const suburb = getSuburbPageForSlug(slug);
  if (!suburb) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk/gutter-cleaning-${slug}/`;
  const priceFrom = city?.priceFrom ?? 50;
  const priceTo = city?.priceTo ?? 140;

  return (
    <>
      <LocalBusinessSchema
        city={suburb.city}
        url={url}
        priceFrom={priceFrom}
        priceTo={priceTo}
        nearbyAreas={city?.nearbyAreas ?? []}
        geo={city?.geo ?? { latitude: 52.4862, longitude: -1.8904 }}
        postcodes={city?.postcodes ?? []}
        faqs={suburb.faqs}
      />
      <SuburbGutterCleaningPage data={suburb} areaSlug={slug} />
    </>
  );
}

export function renderGeneratedAreaLanding(slug: string) {
  const data = buildAreaLandingFromSlug(slug);
  if (!data) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk/gutter-cleaning-${slug}/`;
  const priceFrom = city?.priceFrom ?? 50;
  const priceTo = data.priceTo ?? city?.priceTo ?? 140;

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
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} />
    </>
  );
}

export function renderCityLanding(slug: string) {
  const data = CITY_GUTTER_LANDINGS[slug];
  if (!data) return null;

  const city = getCityBySlug(slug);
  const url = `https://wowgutters.co.uk/gutter-cleaning-${slug}/`;
  const priceFrom = city?.priceFrom ?? 50;
  const priceTo = data.priceTo ?? city?.priceTo ?? 140;

  const schemaFaqs = isPrimaryCitySlug(slug)
    ? buildCitySchemaFaqs({
        city: data.city,
        slug,
        priceFrom,
        priceTo,
        postcodes: data.postcodes,
        nearbyAreas: data.nearbyAreas,
      })
    : data.faqs;

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
        faqs={schemaFaqs}
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} />
    </>
  );
}
