/** Official WOW Gutters Ltd price list (GBP). */
export type PropertyType = 'bungalow' | 'terraced' | 'semi' | 'detached';
export type GutterLength = 'standard' | 'long' | 'very-long';
export type GutterCondition = 'light' | 'moderate' | 'heavy';

export const GUTTER_PRICING = {
  twoBedroom: 100,
  threeBedroom: 110,
  premium: 200,
  installation: 300,
  fasciaAndSoffit: 90,
} as const;

export function formatGbp(amount: number): string {
  return `£${amount}`;
}

/** Standard gutter clean by bedroom count. */
export function priceForBedrooms(bedrooms: number): number {
  if (bedrooms <= 1) return GUTTER_PRICING.twoBedroom;
  if (bedrooms === 2) return GUTTER_PRICING.twoBedroom;
  if (bedrooms === 3) return GUTTER_PRICING.threeBedroom;
  return GUTTER_PRICING.threeBedroom + (bedrooms - 3) * 10;
}

export const GUTTER_PRICING_PACKAGES = [
  {
    title: '2 Bedroom Gutter Clean',
    price: GUTTER_PRICING.twoBedroom,
    description: 'Standard gutter cleaning for a 2-bedroom property',
    features: [
      'Full gutter clearance',
      'Downpipe check & flush',
      'Debris removal',
      'Before & after photos',
    ],
  },
  {
    title: '3 Bedroom Gutter Clean',
    price: GUTTER_PRICING.threeBedroom,
    description: 'Standard gutter cleaning for a 3-bedroom property',
    features: [
      'Full gutter clearance',
      'Downpipe check & flush',
      'Debris removal',
      'Before & after photos',
    ],
    popular: true,
  },
  {
    title: 'Premium Service',
    price: GUTTER_PRICING.premium,
    description: 'Complete premium gutter & roofline service',
    features: [
      'Complete gutter cleaning',
      'Downpipe clearing',
      'Full inspection report',
      'Before & after photos',
      'Priority scheduling',
    ],
  },
] as const;

export const GUTTER_ADDON_SERVICES = [
  {
    title: 'Fascia & Soffit Cleaning',
    price: GUTTER_PRICING.fasciaAndSoffit,
    description: 'Professional fascia and soffit clean',
  },
  {
    title: 'Gutter Installation',
    price: GUTTER_PRICING.installation,
    description: 'New gutter supply and installation',
  },
] as const;
