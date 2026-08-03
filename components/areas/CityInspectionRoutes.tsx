import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage';
import { getAreaData } from '@/lib/getAreaData';
import { inspectionAreaPath } from '@/lib/areaSlugs';
import {
  getInspectionCityLanding,
  getInspectionGeneratedLanding,
  getInspectionSuburbLanding,
  buildBirminghamInspectionLanding,
} from '@/lib/inspectionAreaContent';

export function renderInspectionSuburbLanding(slug: string) {
  const suburb = getInspectionSuburbLanding(slug);
  if (!suburb) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${inspectionAreaPath(slug)}`;

  return (
    <>
      <LocalBusinessSchema
        city={suburb.city}
        url={url}
        priceFrom={0}
        priceTo={0}
        nearbyAreas={city?.nearbyAreas ?? []}
        geo={city?.geo ?? { latitude: 52.4862, longitude: -1.8904 }}
        postcodes={city?.postcodes ?? []}
        faqs={suburb.faqs}
        serviceKind="inspection"
        slug={slug}
      />
      <SuburbGutterCleaningPage
        data={suburb}
        serviceKind="inspection"
        priceFrom={0}
        priceTo={0}
        areaSlug={slug}
      />
    </>
  );
}

export function renderInspectionCityLanding(slug: string) {
  const data = getInspectionCityLanding(slug);
  if (!data) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${inspectionAreaPath(slug)}`;

  return (
    <>
      <LocalBusinessSchema
        city={data.city}
        url={url}
        priceFrom={0}
        priceTo={0}
        nearbyAreas={data.nearbyAreas ?? []}
        geo={data.geo}
        postcodes={data.postcodes}
        faqs={data.faqs}
        serviceKind="inspection"
        slug={slug}
      />
      <CityGutterCleaningPage data={data} priceFrom={0} priceTo={0} serviceKind="inspection" showPricing={false} />
    </>
  );
}

export function renderInspectionGeneratedAreaLanding(slug: string) {
  const data = getInspectionGeneratedLanding(slug);
  if (!data) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${inspectionAreaPath(slug)}`;

  return (
    <>
      <LocalBusinessSchema
        city={data.city}
        url={url}
        priceFrom={0}
        priceTo={0}
        nearbyAreas={data.nearbyAreas ?? []}
        geo={data.geo}
        postcodes={data.postcodes}
        faqs={data.faqs}
        serviceKind="inspection"
        slug={slug}
      />
      <CityGutterCleaningPage data={data} priceFrom={0} priceTo={0} serviceKind="inspection" showPricing={false} />
    </>
  );
}

export function renderBirminghamInspectionLanding() {
  const data = buildBirminghamInspectionLanding();
  const url = 'https://wowgutters.co.uk/gutter-inspection-birmingham/';

  return (
    <>
      <LocalBusinessSchema
        city="Birmingham"
        url={url}
        priceFrom={0}
        priceTo={0}
        nearbyAreas={data.nearbyAreas ?? []}
        geo={data.geo}
        postcodes={data.postcodes}
        faqs={data.faqs}
        serviceKind="inspection"
        slug="birmingham"
      />
      <CityGutterCleaningPage data={data} priceFrom={0} priceTo={0} serviceKind="inspection" showPricing={false} />
    </>
  );
}
