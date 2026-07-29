import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage';
import { getAreaData } from '@/lib/getAreaData';
import { repairAreaPath } from '@/lib/areaSlugs';
import { repairPriceFrom, repairPriceTo } from '@/lib/areaServiceMeta';
import {
  getRepairCityLanding,
  getRepairGeneratedLanding,
  getRepairSuburbLanding,
  buildBirminghamRepairLanding,
} from '@/lib/repairAreaContent';

export function renderRepairSuburbLanding(slug: string) {
  const suburb = getRepairSuburbLanding(slug);
  if (!suburb) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${repairAreaPath(slug)}`;
  const priceFrom = repairPriceFrom(city?.priceFrom ?? 50);
  const priceTo = repairPriceTo(city?.priceTo ?? 140);

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
        serviceKind="repair"
        slug={slug}
      />
      <SuburbGutterCleaningPage
        data={suburb}
        serviceKind="repair"
        priceFrom={priceFrom}
        priceTo={priceTo}
        areaSlug={slug}
      />
    </>
  );
}

export function renderRepairCityLanding(slug: string) {
  const data = getRepairCityLanding(slug);
  if (!data) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${repairAreaPath(slug)}`;
  const priceFrom = repairPriceFrom(city?.priceFrom ?? 50);
  const priceTo = repairPriceTo(data.priceTo ?? city?.priceTo ?? 140);

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
        serviceKind="repair"
        slug={slug}
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} serviceKind="repair" />
    </>
  );
}

export function renderRepairGeneratedAreaLanding(slug: string) {
  const data = getRepairGeneratedLanding(slug);
  if (!data) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${repairAreaPath(slug)}`;
  const priceFrom = repairPriceFrom(city?.priceFrom ?? 50);
  const priceTo = repairPriceTo(data.priceTo ?? city?.priceTo ?? 140);

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
        serviceKind="repair"
        slug={slug}
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} serviceKind="repair" />
    </>
  );
}

export function renderBirminghamRepairLanding() {
  const data = buildBirminghamRepairLanding();
  const url = 'https://wowgutters.co.uk/gutter-repair-birmingham/';
  const priceFrom = repairPriceFrom(50);
  const priceTo = repairPriceTo(140);

  return (
    <>
      <LocalBusinessSchema
        city="Birmingham"
        url={url}
        priceFrom={priceFrom}
        priceTo={priceTo}
        nearbyAreas={data.nearbyAreas ?? []}
        geo={data.geo}
        postcodes={data.postcodes}
        faqs={data.faqs}
        serviceKind="repair"
        slug="birmingham"
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} serviceKind="repair" />
    </>
  );
}
