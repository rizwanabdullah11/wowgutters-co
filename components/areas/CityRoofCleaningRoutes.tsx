import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage';
import { getAreaData } from '@/lib/getAreaData';
import { roofAreaPath } from '@/lib/areaSlugs';
import { roofPriceFrom, roofPriceTo } from '@/lib/areaServiceMeta';
import {
  buildBirminghamRoofLanding,
  getRoofCityLanding,
  getRoofGeneratedLanding,
  getRoofSuburbLanding,
} from '@/lib/roofAreaContent';

export function renderRoofSuburbLanding(slug: string) {
  const suburb = getRoofSuburbLanding(slug);
  if (!suburb) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${roofAreaPath(slug)}`;
  const priceFrom = roofPriceFrom(city?.priceFrom ?? 50);
  const priceTo = roofPriceTo(city?.priceTo ?? 140);

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
        serviceKind="roof"
        slug={slug}
      />
      <SuburbGutterCleaningPage
        data={suburb}
        serviceKind="roof"
        priceFrom={priceFrom}
        priceTo={priceTo}
        areaSlug={slug}
      />
    </>
  );
}

export function renderRoofCityLanding(slug: string) {
  const data = getRoofCityLanding(slug);
  if (!data) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${roofAreaPath(slug)}`;
  const priceFrom = roofPriceFrom(city?.priceFrom ?? 50);
  const priceTo = roofPriceTo(data.priceTo ?? city?.priceTo ?? 140);

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
        serviceKind="roof"
        slug={slug}
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} serviceKind="roof" />
    </>
  );
}

export function renderRoofGeneratedAreaLanding(slug: string) {
  const data = getRoofGeneratedLanding(slug);
  if (!data) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${roofAreaPath(slug)}`;
  const priceFrom = roofPriceFrom(city?.priceFrom ?? 50);
  const priceTo = roofPriceTo(data.priceTo ?? city?.priceTo ?? 140);

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
        serviceKind="roof"
        slug={slug}
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} serviceKind="roof" />
    </>
  );
}

export function renderBirminghamRoofLanding() {
  const data = buildBirminghamRoofLanding();
  const url = 'https://wowgutters.co.uk/roof-cleaning-birmingham/';
  const priceFrom = roofPriceFrom(50);
  const priceTo = roofPriceTo(140);

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
        serviceKind="roof"
        slug="birmingham"
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} serviceKind="roof" />
    </>
  );
}
