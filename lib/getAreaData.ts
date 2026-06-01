import { getCityData, type CityData } from '@/lib/cities';
import { AREA_SUPPLEMENT } from '@/lib/areaSupplement';

/** City/suburb data from cities.ts plus supplemental entries for areas not yet in CITIES. */
export function getAreaData(slug: string): CityData | undefined {
  return getCityData(slug) ?? AREA_SUPPLEMENT[slug];
}
