import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage';
import { getAreaData } from '@/lib/getAreaData';
import { roofInspectionAreaPath } from '@/lib/areaSlugs';
import {
  getRoofInspectionCityLanding,
  getRoofInspectionGeneratedLanding,
  getRoofInspectionSuburbLanding,
  buildBirminghamRoofInspectionLanding,
} from '@/lib/roofInspectionAreaContent';

export function renderRoofInspectionSuburbLanding(slug: string) {
  const suburb = getRoofInspectionSuburbLanding(slug);
  if (!suburb) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${roofInspectionAreaPath(slug)}`;

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
        serviceKind="roof-inspection"
        slug={slug}
      />
      <SuburbGutterCleaningPage
        data={suburb}
        serviceKind="roof-inspection"
        priceFrom={0}
        priceTo={0}
        areaSlug={slug}
      />
    </>
  );
}

export function renderRoofInspectionCityLanding(slug: string) {
  const data = getRoofInspectionCityLanding(slug);
  if (!data) return null;

  const url = `https://wowgutters.co.uk${roofInspectionAreaPath(slug)}`;

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
        serviceKind="roof-inspection"
        slug={slug}
      />
      <CityGutterCleaningPage data={data} priceFrom={0} priceTo={0} serviceKind="roof-inspection" showPricing={false} />
    </>
  );
}

export function renderRoofInspectionGeneratedAreaLanding(slug: string) {
  const data = getRoofInspectionGeneratedLanding(slug);
  if (!data) return null;

  const url = `https://wowgutters.co.uk${roofInspectionAreaPath(slug)}`;

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
        serviceKind="roof-inspection"
        slug={slug}
      />
      <CityGutterCleaningPage data={data} priceFrom={0} priceTo={0} serviceKind="roof-inspection" showPricing={false} />
    </>
  );
}

export function renderBirminghamRoofInspectionLanding() {
  const data = buildBirminghamRoofInspectionLanding();
  const url = 'https://wowgutters.co.uk/roof-inspection-birmingham/';

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
        serviceKind="roof-inspection"
        slug="birmingham"
      />
      <CityGutterCleaningPage data={data} priceFrom={0} priceTo={0} serviceKind="roof-inspection" showPricing={false} />
    </>
  );
}
