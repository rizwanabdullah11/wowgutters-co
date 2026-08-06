import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage';
import { getAreaData } from '@/lib/getAreaData';
import { upvcAreaPath } from '@/lib/areaSlugs';
import { upvcPriceFrom, upvcPriceTo } from '@/lib/areaServiceMeta';
import {
  buildBirminghamUpvcLanding,
  getUpvcCityLanding,
  getUpvcGeneratedLanding,
  getUpvcSuburbLanding,
} from '@/lib/upvcAreaContent';

export function renderUpvcSuburbLanding(slug: string) {
  const suburb = getUpvcSuburbLanding(slug);
  if (!suburb) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${upvcAreaPath(slug)}`;
  const priceFrom = upvcPriceFrom(city?.priceFrom ?? 50);
  const priceTo = upvcPriceTo(city?.priceTo ?? 140);

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
        serviceKind="upvc"
        slug={slug}
      />
      <SuburbGutterCleaningPage
        data={suburb}
        serviceKind="upvc"
        priceFrom={priceFrom}
        priceTo={priceTo}
        areaSlug={slug}
      />
    </>
  );
}

export function renderUpvcCityLanding(slug: string) {
  const data = getUpvcCityLanding(slug);
  if (!data) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${upvcAreaPath(slug)}`;
  const priceFrom = upvcPriceFrom(city?.priceFrom ?? 50);
  const priceTo = upvcPriceTo(data.priceTo ?? city?.priceTo ?? 140);

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
        serviceKind="upvc"
        slug={slug}
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} serviceKind="upvc" />
    </>
  );
}

export function renderUpvcGeneratedAreaLanding(slug: string) {
  const data = getUpvcGeneratedLanding(slug);
  if (!data) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${upvcAreaPath(slug)}`;
  const priceFrom = upvcPriceFrom(city?.priceFrom ?? 50);
  const priceTo = upvcPriceTo(data.priceTo ?? city?.priceTo ?? 140);

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
        serviceKind="upvc"
        slug={slug}
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} serviceKind="upvc" />
    </>
  );
}

export function renderBirminghamUpvcLanding() {
  const data = buildBirminghamUpvcLanding();
  const url = 'https://wowgutters.co.uk/exterior-upvc-cleaning-birmingham/';
  const priceFrom = upvcPriceFrom(50);
  const priceTo = upvcPriceTo(140);

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
        serviceKind="upvc"
        slug="birmingham"
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} serviceKind="upvc" />
    </>
  );
}