import CityGutterCleaningPage from '@/components/areas/CityGutterCleaningPage';
import CityGutterPageSchema from '@/components/areas/CityGutterPageSchema';
import { CITY_GUTTER_LANDINGS } from '@/constants/cityGutterLandingData';

export function renderCityLanding(slug: string) {
  const data = CITY_GUTTER_LANDINGS[slug];
  if (!data) return null;
  return (
    <>
      <CityGutterPageSchema slug={slug} />
      <CityGutterCleaningPage data={data} />
    </>
  );
}

