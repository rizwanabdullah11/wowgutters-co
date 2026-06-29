export type PropertyType = 'bungalow' | 'terraced' | 'semi' | 'detached';
export type GutterLength = 'standard' | 'long' | 'very-long';
export type GutterCondition = 'light' | 'moderate' | 'heavy';

const BASE_BY_TYPE: Record<PropertyType, number> = {
  bungalow: 50,
  terraced: 50,
  semi: 75,
  detached: 95,
};

/** Estimate aligned with gutter-cleaning-prices page (from £50 residential). */
export function estimateGutterCleaningPrice(input: {
  propertyType: PropertyType;
  bedrooms: number;
  gutterLength: GutterLength;
  condition: GutterCondition;
}): number {
  let price = BASE_BY_TYPE[input.propertyType];
  const extraBedrooms = Math.max(0, input.bedrooms - 3);
  price += extraBedrooms * 10;

  if (input.gutterLength === 'long') price += 15;
  else if (input.gutterLength === 'very-long') price += 30;

  if (input.condition === 'moderate') price += 10;
  else if (input.condition === 'heavy') price += 25;

  return price;
}
