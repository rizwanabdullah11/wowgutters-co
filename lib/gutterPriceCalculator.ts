import type { GutterCondition, GutterLength, PropertyType } from '@/constants/gutterPricing';
import { priceForBedrooms } from '@/constants/gutterPricing';

export type { PropertyType, GutterLength, GutterCondition };

/** Ballpark estimate from bedroom count (+ small adjustment for heavy blockages). */
export function estimateGutterCleaningPrice(input: {
  propertyType: PropertyType;
  bedrooms: number;
  gutterLength: GutterLength;
  condition: GutterCondition;
}): number {
  let price = priceForBedrooms(input.bedrooms);

  if (input.gutterLength === 'long') price += 10;
  else if (input.gutterLength === 'very-long') price += 20;

  if (input.condition === 'moderate') price += 5;
  else if (input.condition === 'heavy') price += 15;

  return price;
}
