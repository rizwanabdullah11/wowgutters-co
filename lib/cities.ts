/**
 * Single source of truth for all city pages
 * Contains slug, name, postcodes, nearby areas, and pricing for each service area
 * 
 * This file is used by:
 * - Area page generation (generateStaticParams)
 * - Metadata generation (titles, descriptions)
 * - Schema generation (LocalBusiness, Service)
 * - Sitemap generation
 * - Pricing calculator
 */

export type CityData = {
  /** URL slug (e.g., "birmingham") */
  slug: string
  /** Display name (e.g., "Birmingham") */
  name: string
  /** Main postcodes served (for schema and SEO) */
  postcodes: string[]
  /** Nearby areas/suburbs (for content and internal linking) */
  nearbyAreas: string[]
  /** Geographic coordinates for schema and maps */
  geo: {
    latitude: number
    longitude: number
  }
  /** Typical pricing range for standard gutter cleaning */
  pricing: {
    terraced: { min: number; max: number }
    semiDetached: { min: number; max: number }
    detached: { min: number; max: number }
  }
  /** Starting price (shorthand for terraced.min) */
  priceFrom: number
  /** Maximum price (shorthand for detached.max) */
  priceTo: number
  /** Region (for schema) */
  region: string
  /** County (for schema) */
  county?: string
}

/**
 * All service areas with complete data
 * Ordered by importance: major cities first, then suburbs/neighborhoods
 */
export const CITIES: Record<string, CityData> = {
  // Major Cities
  birmingham: {
    slug: 'birmingham',
    name: 'Birmingham',
    postcodes: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20', 'B21', 'B23', 'B24', 'B25', 'B26', 'B27', 'B28', 'B29', 'B30', 'B31', 'B32', 'B33', 'B34', 'B35', 'B36', 'B37', 'B38', 'B40', 'B42', 'B43', 'B44', 'B45', 'B46', 'B47', 'B48', 'B49', 'B50', 'B60', 'B61', 'B62', 'B63', 'B64', 'B65', 'B66', 'B67', 'B68', 'B69', 'B70', 'B71', 'B72', 'B73', 'B74', 'B75', 'B76', 'B90', 'B91', 'B92', 'B93', 'B94', 'B95', 'B96', 'B97', 'B98'],
    nearbyAreas: ['Moseley', 'Harborne', 'Edgbaston', 'Kings Heath', 'Erdington', 'Sutton Coldfield', 'Selly Oak', 'Northfield', 'Acocks Green', 'Hall Green', 'Great Barr'],
    geo: { latitude: 52.4862, longitude: -1.8904 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  solihull: {
    slug: 'solihull',
    name: 'Solihull',
    postcodes: ['B90', 'B91', 'B92', 'B93', 'B94'],
    nearbyAreas: ['Shirley', 'Olton', 'Dorridge', 'Knowle', 'Balsall Common', 'Marston Green'],
    geo: { latitude: 52.4118, longitude: -1.7776 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 50,
    priceTo: 130,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  wolverhampton: {
    slug: 'wolverhampton',
    name: 'Wolverhampton',
    postcodes: ['WV1', 'WV2', 'WV3', 'WV4', 'WV5', 'WV6', 'WV7', 'WV8', 'WV9', 'WV10', 'WV11', 'WV12', 'WV13', 'WV14'],
    nearbyAreas: ['Penn', 'Tettenhall', 'Wednesfield', 'Bilston', 'Willenhall', 'Bushbury', 'Fordhouses'],
    geo: { latitude: 52.5862, longitude: -2.1285 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 50,
    priceTo: 130,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  coventry: {
    slug: 'coventry',
    name: 'Coventry',
    postcodes: ['CV1', 'CV2', 'CV3', 'CV4', 'CV5', 'CV6', 'CV7', 'CV8'],
    nearbyAreas: ['Earlsdon', 'Canley', 'Tile Hill', 'Foleshill', 'Radford', 'Binley', 'Wyken'],
    geo: { latitude: 52.4068, longitude: -1.5197 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  walsall: {
    slug: 'walsall',
    name: 'Walsall',
    postcodes: ['WS1', 'WS2', 'WS3', 'WS4', 'WS5', 'WS9'],
    nearbyAreas: ['Aldridge', 'Bloxwich', 'Brownhills', 'Pelsall', 'Rushall', 'Streetly'],
    geo: { latitude: 52.5862, longitude: -1.9829 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  dudley: {
    slug: 'dudley',
    name: 'Dudley',
    postcodes: ['DY1', 'DY2', 'DY3'],
    nearbyAreas: ['Sedgley', 'Gornal', 'Coseley', 'Netherton', 'Kingswinford'],
    geo: { latitude: 52.5120, longitude: -2.0890 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  'west-bromwich': {
    slug: 'west-bromwich',
    name: 'West Bromwich',
    postcodes: ['B70', 'B71'],
    nearbyAreas: ['Sandwell', 'Oldbury', 'Smethwick', 'Wednesbury', 'Tipton'],
    geo: { latitude: 52.5188, longitude: -1.9950 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  // Worcestershire Cities
  worcester: {
    slug: 'worcester',
    name: 'Worcester',
    postcodes: ['WR1', 'WR2', 'WR3', 'WR4', 'WR5'],
    nearbyAreas: ['Droitwich Spa', 'Malvern', 'Evesham', 'Pershore'],
    geo: { latitude: 52.1936, longitude: -2.2208 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 50,
    priceTo: 130,
    region: 'West Midlands',
    county: 'Worcestershire',
  },
  
  bromsgrove: {
    slug: 'bromsgrove',
    name: 'Bromsgrove',
    postcodes: ['B60', 'B61'],
    nearbyAreas: ['Rubery', 'Hagley', 'Alvechurch', 'Barnt Green'],
    geo: { latitude: 52.3356, longitude: -2.0575 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 50,
    priceTo: 130,
    region: 'West Midlands',
    county: 'Worcestershire',
  },
  
  redditch: {
    slug: 'redditch',
    name: 'Redditch',
    postcodes: ['B97', 'B98'],
    nearbyAreas: ['Studley', 'Astwood Bank', 'Webheath'],
    geo: { latitude: 52.3065, longitude: -1.9447 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'Worcestershire',
  },
  
  kidderminster: {
    slug: 'kidderminster',
    name: 'Kidderminster',
    postcodes: ['DY10', 'DY11'],
    nearbyAreas: ['Stourport-on-Severn', 'Bewdley', 'Hagley'],
    geo: { latitude: 52.3881, longitude: -2.2495 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 50,
    priceTo: 130,
    region: 'West Midlands',
    county: 'Worcestershire',
  },
  
  malvern: {
    slug: 'malvern',
    name: 'Malvern',
    postcodes: ['WR14'],
    nearbyAreas: ['Great Malvern', 'Malvern Link', 'Colwall', 'Upton-upon-Severn'],
    geo: { latitude: 52.1122, longitude: -2.3251 },
    pricing: {
      terraced: { min: 55, max: 75 },
      semiDetached: { min: 65, max: 90 },
      detached: { min: 90, max: 140 },
    },
    priceFrom: 50,
    priceTo: 140,
    region: 'West Midlands',
    county: 'Worcestershire',
  },
  
  evesham: {
    slug: 'evesham',
    name: 'Evesham',
    postcodes: ['WR11'],
    nearbyAreas: ['Broadway', 'Pershore', 'Bretforton'],
    geo: { latitude: 52.0933, longitude: -1.9489 },
    pricing: {
      terraced: { min: 55, max: 75 },
      semiDetached: { min: 65, max: 90 },
      detached: { min: 90, max: 140 },
    },
    priceFrom: 50,
    priceTo: 140,
    region: 'West Midlands',
    county: 'Worcestershire',
  },
  
  'droitwich-spa': {
    slug: 'droitwich-spa',
    name: 'Droitwich Spa',
    postcodes: ['WR9'],
    nearbyAreas: ['Ombersley', 'Hanbury', 'Wychbold'],
    geo: { latitude: 52.2667, longitude: -2.1500 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 50,
    priceTo: 130,
    region: 'West Midlands',
    county: 'Worcestershire',
  },
  
  // Staffordshire
  tamworth: {
    slug: 'tamworth',
    name: 'Tamworth',
    postcodes: ['B77', 'B78', 'B79'],
    nearbyAreas: ['Fazeley', 'Wilnecote', 'Glascote'],
    geo: { latitude: 52.6336, longitude: -1.6910 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'Staffordshire',
  },
  
  lichfield: {
    slug: 'lichfield',
    name: 'Lichfield',
    postcodes: ['WS13', 'WS14'],
    nearbyAreas: ['Burntwood', 'Shenstone', 'Fradley'],
    geo: { latitude: 52.6817, longitude: -1.8262 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 50,
    priceTo: 130,
    region: 'West Midlands',
    county: 'Staffordshire',
  },
  
  cannock: {
    slug: 'cannock',
    name: 'Cannock',
    postcodes: ['WS11', 'WS12'],
    nearbyAreas: ['Hednesford', 'Heath Hayes', 'Rugeley'],
    geo: { latitude: 52.6906, longitude: -2.0277 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'Staffordshire',
  },
  
  // Black Country
  stourbridge: {
    slug: 'stourbridge',
    name: 'Stourbridge',
    postcodes: ['DY7', 'DY8', 'DY9'],
    nearbyAreas: ['Amblecote', 'Lye', 'Hagley', 'Wordsley'],
    geo: { latitude: 52.4569, longitude: -2.1481 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  halesowen: {
    slug: 'halesowen',
    name: 'Halesowen',
    postcodes: ['B62', 'B63'],
    nearbyAreas: ['Cradley Heath', 'Blackheath', 'Quinton', 'Hasbury'],
    geo: { latitude: 52.4486, longitude: -2.0497 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  // Birmingham Suburbs & Neighborhoods
  'sutton-coldfield': {
    slug: 'sutton-coldfield',
    name: 'Sutton Coldfield',
    postcodes: ['B72', 'B73', 'B74', 'B75', 'B76'],
    nearbyAreas: ['Four Oaks', 'Boldmere', 'Wylde Green', 'Streetly'],
    geo: { latitude: 52.5642, longitude: -1.8206 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 50,
    priceTo: 130,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  moseley: {
    slug: 'moseley',
    name: 'Moseley',
    postcodes: ['B13'],
    nearbyAreas: ['Kings Heath', 'Balsall Heath', 'Sparkhill', 'Hall Green'],
    geo: { latitude: 52.4450, longitude: -1.8850 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  harborne: {
    slug: 'harborne',
    name: 'Harborne',
    postcodes: ['B17'],
    nearbyAreas: ['Edgbaston', 'Quinton', 'Selly Oak', 'Bartley Green'],
    geo: { latitude: 52.4583, longitude: -1.9500 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 50,
    priceTo: 130,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  edgbaston: {
    slug: 'edgbaston',
    name: 'Edgbaston',
    postcodes: ['B15', 'B16'],
    nearbyAreas: ['Harborne', 'Ladywood', 'Selly Oak', 'Five Ways'],
    geo: { latitude: 52.4617, longitude: -1.9250 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 140 },
    },
    priceFrom: 50,
    priceTo: 140,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  'kings-heath': {
    slug: 'kings-heath',
    name: 'Kings Heath',
    postcodes: ['B14'],
    nearbyAreas: ['Moseley', 'Kings Norton', 'Brandwood', 'Stirchley'],
    geo: { latitude: 52.4333, longitude: -1.8917 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  erdington: {
    slug: 'erdington',
    name: 'Erdington',
    postcodes: ['B23', 'B24'],
    nearbyAreas: ['Gravelly Hill', 'Stockland Green', 'Short Heath', 'Pype Hayes'],
    geo: { latitude: 52.5250, longitude: -1.8383 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  'selly-oak': {
    slug: 'selly-oak',
    name: 'Selly Oak',
    postcodes: ['B29'],
    nearbyAreas: ['Bournbrook', 'Harborne', 'Edgbaston', 'Northfield'],
    geo: { latitude: 52.4417, longitude: -1.9367 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  northfield: {
    slug: 'northfield',
    name: 'Northfield',
    postcodes: ['B31'],
    nearbyAreas: ['Longbridge', 'Kings Norton', 'Selly Oak', 'Rubery'],
    geo: { latitude: 52.4117, longitude: -1.9633 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  'acocks-green': {
    slug: 'acocks-green',
    name: 'Acocks Green',
    postcodes: ['B27'],
    nearbyAreas: ['Yardley', 'Tyseley', 'Hall Green', 'Sparkhill'],
    geo: { latitude: 52.4383, longitude: -1.8267 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  'hall-green': {
    slug: 'hall-green',
    name: 'Hall Green',
    postcodes: ['B28'],
    nearbyAreas: ['Acocks Green', 'Sparkhill', 'Yardley Wood', 'Shirley'],
    geo: { latitude: 52.4333, longitude: -1.8417 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  'great-barr': {
    slug: 'great-barr',
    name: 'Great Barr',
    postcodes: ['B42', 'B43'],
    nearbyAreas: ['Perry Barr', 'Hamstead', 'Pheasey', 'Kingstanding'],
    geo: { latitude: 52.5417, longitude: -1.9333 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  // Additional areas (add more as needed)
  sandwell: {
    slug: 'sandwell',
    name: 'Sandwell',
    postcodes: ['B66', 'B67', 'B68', 'B69', 'B70', 'B71'],
    nearbyAreas: ['West Bromwich', 'Oldbury', 'Smethwick', 'Rowley Regis', 'Tipton', 'Wednesbury'],
    geo: { latitude: 52.5089, longitude: -2.0108 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
  },
  
  'west-midlands': {
    slug: 'west-midlands',
    name: 'West Midlands',
    postcodes: ['B', 'CV', 'DY', 'WS', 'WV'],
    nearbyAreas: ['Birmingham', 'Coventry', 'Wolverhampton', 'Dudley', 'Walsall', 'Solihull', 'West Bromwich'],
    geo: { latitude: 52.4862, longitude: -1.8904 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 50,
    priceTo: 130,
    region: 'West Midlands',
    county: 'West Midlands',
  },
};

/**
 * Get city data by slug
 */
export function getCityData(slug: string): CityData | undefined {
  return CITIES[slug]
}

/**
 * Get city by slug (alias for getCityData)
 */
export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES[slug]
}

/**
 * Get all cities as an array (for generateStaticParams)
 */
export const CITIES_ARRAY = Object.values(CITIES)

/**
 * Get all city slugs (for generateStaticParams)
 */
export function getAllCitySlugs(): string[] {
  return Object.keys(CITIES)
}

/**
 * Check if a slug is a valid city
 */
export function isValidCity(slug: string): boolean {
  return slug in CITIES
}

/**
 * Format pricing range for display
 */
export function formatPriceRange(city: CityData, propertyType: 'terraced' | 'semiDetached' | 'detached'): string {
  const { min, max } = city.pricing[propertyType]
  return `£${min}–£${max}`
}
