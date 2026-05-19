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
  /** Tier: 'primary' for major cities, 'suburb' for neighborhoods */
  tier?: 'primary' | 'suburb'
}

/**
 * All service areas with complete data
 * Ordered by importance: major cities first, then suburbs/neighborhoods
 */
export const CITIES: Record<string, CityData> = {
  // Major Cities
  // NOTE: Birmingham has a dedicated route at /app/gutter-cleaning-birmingham/
  // so it's excluded from this dynamic route to avoid conflicts
  
  solihull: {
    slug: 'solihull',
    name: 'Solihull',
    postcodes: ['B90', 'B91', 'B92', 'B93', 'B94'],
    nearbyAreas: ['Birmingham', 'Shirley', 'Olton', 'Dorridge', 'Knowle', 'Balsall Common'],
    geo: { latitude: 52.4118, longitude: -1.7776 },
    pricing: {
      terraced: { min: 55, max: 75 },
      semiDetached: { min: 65, max: 90 },
      detached: { min: 90, max: 140 },
    },
    priceFrom: 55,
    priceTo: 140,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'primary',
  },
  
  wolverhampton: {
    slug: 'wolverhampton',
    name: 'Wolverhampton',
    postcodes: ['WV1', 'WV2', 'WV3', 'WV4', 'WV5', 'WV6', 'WV7', 'WV8', 'WV9', 'WV10', 'WV11', 'WV12', 'WV13', 'WV14'],
    nearbyAreas: ['Walsall', 'Dudley', 'Tettenhall', 'Bilston', 'Wednesfield', 'Mednesfield'],
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
    tier: 'primary',
  },
  
  coventry: {
    slug: 'coventry',
    name: 'Coventry',
    postcodes: ['CV1', 'CV2', 'CV3', 'CV4', 'CV5', 'CV6', 'CV7', 'CV8'],
    nearbyAreas: ['Solihull', 'Kenilworth', 'Earlsdon', 'Cheylemore', 'Tile Hill'],
    geo: { latitude: 52.4068, longitude: -1.5197 },
    pricing: {
      terraced: { min: 55, max: 75 },
      semiDetached: { min: 65, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 55,
    priceTo: 130,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'primary',
  },
  
  walsall: {
    slug: 'walsall',
    name: 'Walsall',
    postcodes: ['WS1', 'WS2', 'WS3', 'WS4', 'WS5', 'WS9'],
    nearbyAreas: ['Wolverhampton', 'Aldridge', 'Bloxwich', 'Willenhall', 'Wednesbury'],
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
    tier: 'primary',
  },
  
  dudley: {
    slug: 'dudley',
    name: 'Dudley',
    postcodes: ['DY1', 'DY2', 'DY3'],
    nearbyAreas: ['Wolverhampton', 'Stourbridge', 'Halesowen', 'Brierley Hill', 'Tipton'],
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
    tier: 'primary',
  },
  
  'west-bromwich': {
    slug: 'west-bromwich',
    name: 'West Bromwich',
    postcodes: ['B70', 'B71'],
    nearbyAreas: ['Smethwick', 'Oldbury', 'Tipton', 'Wednesbury', 'Birmingham'],
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
    tier: 'primary',
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
    tier: 'primary',
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
    tier: 'primary',
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
    tier: 'primary',
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
    tier: 'primary',
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
    tier: 'primary',
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
    tier: 'primary',
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
    tier: 'primary',
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
    tier: 'primary',
  },
  
  warwick: {
    slug: 'warwick',
    name: 'Warwick',
    postcodes: ['CV34', 'CV35'],
    nearbyAreas: ['Leamington Spa', 'Kenilworth', 'Stratford-upon-Avon', 'Royal Leamington Spa'],
    geo: { latitude: 52.2819, longitude: -1.5849 },
    pricing: {
      terraced: { min: 55, max: 75 },
      semiDetached: { min: 65, max: 90 },
      detached: { min: 90, max: 140 },
    },
    priceFrom: 55,
    priceTo: 140,
    region: 'West Midlands',
    county: 'Warwickshire',
    tier: 'primary',
  },
  
  stratford: {
    slug: 'stratford',
    name: 'Stratford-upon-Avon',
    postcodes: ['CV37'],
    nearbyAreas: ['Warwick', 'Evesham', 'Alcester', 'Shipston-on-Stour'],
    geo: { latitude: 52.1917, longitude: -1.7081 },
    pricing: {
      terraced: { min: 55, max: 75 },
      semiDetached: { min: 65, max: 90 },
      detached: { min: 90, max: 140 },
    },
    priceFrom: 55,
    priceTo: 140,
    region: 'West Midlands',
    county: 'Warwickshire',
    tier: 'primary',
  },
  
  wythall: {
    slug: 'wythall',
    name: 'Wythall',
    postcodes: ['B47'],
    nearbyAreas: ['Hollywood', 'Dickens Heath', 'Solihull', 'Redditch', 'Bromsgrove'],
    geo: { latitude: 52.3833, longitude: -1.8833 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 50,
    priceTo: 130,
    region: 'West Midlands',
    county: 'Worcestershire',
    tier: 'primary',
  },
  
  lichfield: {
    slug: 'lichfield',
    name: 'Lichfield',
    postcodes: ['WS13', 'WS14'],
    nearbyAreas: ['Sutton Coldfield', 'Tamworth', 'Cannock', 'Burntwood', 'Shenstone'],
    geo: { latitude: 52.6817, longitude: -1.8262 },
    pricing: {
      terraced: { min: 60, max: 80 },
      semiDetached: { min: 70, max: 95 },
      detached: { min: 95, max: 150 },
    },
    priceFrom: 60,
    priceTo: 150,
    region: 'West Midlands',
    county: 'Staffordshire',
    tier: 'primary',
  },
  
  cannock: {
    slug: 'cannock',
    name: 'Cannock',
    postcodes: ['WS11', 'WS12'],
    nearbyAreas: ['Hednesford', 'Morton Canes', 'Walsall', 'Lichfield', 'Stafford'],
    geo: { latitude: 52.6906, longitude: -2.0277 },
    pricing: {
      terraced: { min: 55, max: 75 },
      semiDetached: { min: 65, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 55,
    priceTo: 130,
    region: 'West Midlands',
    county: 'Staffordshire',
    tier: 'primary',
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
    tier: 'primary',
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
    tier: 'primary',
  },
  
  // Birmingham Suburbs & Neighborhoods
  'sutton-coldfield': {
    slug: 'sutton-coldfield',
    name: 'Sutton Coldfield',
    postcodes: ['B72', 'B73', 'B74', 'B75', 'B76'],
    nearbyAreas: ['Birmingham', 'Boldmere', 'Four Oaks', 'Walmley', 'Erdington'],
    geo: { latitude: 52.5642, longitude: -1.8206 },
    pricing: {
      terraced: { min: 60, max: 80 },
      semiDetached: { min: 70, max: 95 },
      detached: { min: 95, max: 150 },
    },
    priceFrom: 60,
    priceTo: 150,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'primary',
  },
  
  moseley: {
    slug: 'moseley',
    name: 'Moseley',
    postcodes: ['B13'],
    nearbyAreas: ['Kings Heath', 'Selly Park', 'Birmingham', 'Hall Green', 'Edgbaston'],
    geo: { latitude: 52.4450, longitude: -1.8850 },
    pricing: {
      terraced: { min: 55, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 55,
    priceTo: 130,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },
  
  harborne: {
    slug: 'harborne',
    name: 'Harborne',
    postcodes: ['B17'],
    nearbyAreas: ['Edgbaston', 'Bartley Green', 'Selly Oak', 'Birmingham', 'Quinton'],
    geo: { latitude: 52.4583, longitude: -1.9500 },
    pricing: {
      terraced: { min: 55, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 55,
    priceTo: 130,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },
  
  edgbaston: {
    slug: 'edgbaston',
    name: 'Edgbaston',
    postcodes: ['B15', 'B16'],
    nearbyAreas: ['Harborne', 'Selly Oak', 'Birmingham', 'Moseley', 'Ladywood'],
    geo: { latitude: 52.4617, longitude: -1.9250 },
    pricing: {
      terraced: { min: 60, max: 75 },
      semiDetached: { min: 65, max: 90 },
      detached: { min: 90, max: 140 },
    },
    priceFrom: 60,
    priceTo: 140,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },
  
  'kings-heath': {
    slug: 'kings-heath',
    name: 'Kings Heath',
    postcodes: ['B14'],
    nearbyAreas: ['Moseley', 'Hall Green', 'Stirchley', 'Birmingham', 'Yardley Wood'],
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
    tier: 'suburb',
  },
  
  erdington: {
    slug: 'erdington',
    name: 'Erdington',
    postcodes: ['B23', 'B24'],
    nearbyAreas: ['Sutton Coldfield', 'Aston', 'Stockland Green', 'Birmingham', 'Pype Hayes'],
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
    tier: 'suburb',
  },
  
  'selly-oak': {
    slug: 'selly-oak',
    name: 'Selly Oak',
    postcodes: ['B29'],
    nearbyAreas: ['Edgbaston', 'Bournville', 'Harborne', 'Birmingham', 'Cotteridge'],
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
    tier: 'suburb',
  },
  
  northfield: {
    slug: 'northfield',
    name: 'Northfield',
    postcodes: ['B31'],
    nearbyAreas: ['Longbridge', 'Bournville', 'Birmingham', 'Frankley', 'Rubery'],
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
    tier: 'suburb',
  },
  
  'acocks-green': {
    slug: 'acocks-green',
    name: 'Acocks Green',
    postcodes: ['B27'],
    nearbyAreas: ['Hall Green', 'Yardley', 'Solihull', 'Birmingham', 'Olton'],
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
    tier: 'suburb',
  },
  
  'hall-green': {
    slug: 'hall-green',
    name: 'Hall Green',
    postcodes: ['B28'],
    nearbyAreas: ['Moseley', 'Acocks Green', 'Yardley Wood', 'Birmingham', 'Kings Heath'],
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
    tier: 'suburb',
  },
  
  'great-barr': {
    slug: 'great-barr',
    name: 'Great Barr',
    postcodes: ['B43', 'B44'],
    nearbyAreas: ['Perry Barr', 'Walsall', 'Birmingham', 'Hamstead', 'Kingstanding'],
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
    tier: 'suburb',
  },
  
  // Additional areas (add more as needed)
  sandwell: {
    slug: 'sandwell',
    name: 'Sandwell',
    postcodes: ['B66', 'B67', 'B68', 'B69', 'B70', 'B71'],
    nearbyAreas: ['Birmingham', 'Smethwick', 'Oldbury', 'Tipton', 'Wednesbury'],
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
    tier: 'primary',
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
