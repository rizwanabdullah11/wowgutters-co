import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { getCityGutterPageJsonLd } from '@/lib/cityJsonLd';
import { CITY_GUTTER_LANDINGS } from '@/constants/cityGutterLandingData';

export default function CityGutterPageSchema({ slug }: { slug: string }) {
  const data = CITY_GUTTER_LANDINGS[slug];
  if (!data) return null;
  return <SchemaMarkup id={`${slug}-gutter-jsonld`} data={getCityGutterPageJsonLd(data)} />;
}

