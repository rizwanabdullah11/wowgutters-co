import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import { CITY_GUTTER_LANDINGS } from '@/constants/cityGutterLandingData';
import { getCityBySlug } from '@/lib/cities';
import { buildCitySchemaFaqs, isPrimaryCitySlug } from '@/lib/cityFaqs';

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
