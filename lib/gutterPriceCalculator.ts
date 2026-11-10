import type { PropertyType } from '@/constants/gutterPricing';
import { isPremiumBedrooms, priceForBedrooms } from '@/constants/gutterPricing';

export type { PropertyType };

/**
 * Ballpark estimate from bedroom count only (Nov 2026, owner request: no surcharges for
 * gutter length, blockage or height). 4+ bedrooms = Premium Service, shown as "from £200".
 */
export function estimateGutterCleaningPrice(input: { propertyType: PropertyType; bedrooms: number }): {
  price: number;
  isFrom: boolean;
} {
  return { price: priceForBedrooms(input.bedrooms), isFrom: isPremiumBedrooms(input.bedrooms) };
}
