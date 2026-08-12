import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import SuburbGutterCleaningPage from '@/components/areas/SuburbGutterCleaningPage';
import { getAreaData } from '@/lib/getAreaData';
import { installationAreaPath } from '@/lib/areaSlugs';
import { installationPriceFrom, installationPriceTo } from '@/lib/areaServiceMeta';
import {
  getInstallationCityLanding,
  getInstallationGeneratedLanding,
  getInstallationSuburbLanding,
  buildBirminghamInstallationLanding,
} from '@/lib/installationAreaContent';

export function renderInstallationSuburbLanding(slug: string) {
  const suburb = getInstallationSuburbLanding(slug);
  if (!suburb) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${installationAreaPath(slug)}`;
  const priceFrom = installationPriceFrom(city?.priceFrom ?? 50);
  const priceTo = installationPriceTo(city?.priceTo ?? 140);

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
        serviceKind="installation"
        slug={slug}
      />
      <SuburbGutterCleaningPage
        data={suburb}
        serviceKind="installation"
        priceFrom={priceFrom}
        priceTo={priceTo}
        areaSlug={slug}
      />
    </>
  );
}

export function renderInstallationCityLanding(slug: string) {
  const data = getInstallationCityLanding(slug);
  if (!data) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${installationAreaPath(slug)}`;
  const priceFrom = installationPriceFrom(city?.priceFrom ?? 50);
  const priceTo = installationPriceTo(data.priceTo ?? city?.priceTo ?? 140);

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
        serviceKind="installation"
        slug={slug}
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} serviceKind="installation" />
    </>
  );
}

export function renderInstallationGeneratedAreaLanding(slug: string) {
  const data = getInstallationGeneratedLanding(slug);
  if (!data) return null;

  const city = getAreaData(slug);
  const url = `https://wowgutters.co.uk${installationAreaPath(slug)}`;
  const priceFrom = installationPriceFrom(city?.priceFrom ?? 50);
  const priceTo = installationPriceTo(data.priceTo ?? city?.priceTo ?? 140);

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
        serviceKind="installation"
        slug={slug}
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} serviceKind="installation" />
    </>
  );
}

export function renderBirminghamInstallationLanding() {
  const data = buildBirminghamInstallationLanding();
  const url = 'https://wowgutters.co.uk/gutter-installation-birmingham/';
  const priceFrom = installationPriceFrom(50);
  const priceTo = installationPriceTo(140);

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
        serviceKind="installation"
        slug="birmingham"
      />
      <CityGutterCleaningPage data={data} priceFrom={priceFrom} priceTo={priceTo} serviceKind="installation" />
    </>
  );
}