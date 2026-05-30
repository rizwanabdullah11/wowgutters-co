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

  aston: {
    slug: 'aston',
    name: 'Aston',
    postcodes: ['B6', 'B7'],
    nearbyAreas: ['Erdington', 'Handsworth', 'Newtown', 'Birmingham', 'Witton'],
    geo: { latitude: 52.5050, longitude: -1.8850 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 50,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  handsworth: {
    slug: 'handsworth',
    name: 'Handsworth',
    postcodes: ['B20', 'B21'],
    nearbyAreas: ['Aston', 'Perry Barr', 'Great Barr', 'Birmingham', 'Hamstead'],
    geo: { latitude: 52.5133, longitude: -1.9283 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
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

  'balsall-heath': {
    slug: 'balsall-heath',
    name: 'Balsall Heath',
    postcodes: ['B12'],
    nearbyAreas: ['Moseley', 'Sparkbrook', 'Edgbaston', 'Birmingham', 'Highgate'],
    geo: { latitude: 52.4617, longitude: -1.8883 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'kings-norton': {
    slug: 'kings-norton',
    name: 'Kings Norton',
    postcodes: ['B30', 'B38'],
    nearbyAreas: ['Northfield', 'Bournville', 'Cotteridge', 'Birmingham', 'Redditch'],
    geo: { latitude: 52.4050, longitude: -1.9283 },
    pricing: {
      terraced: { min: 50, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 80, max: 125 },
    },
    priceFrom: 50,
    priceTo: 125,
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
  'handsworth-wood': {
    slug: 'handsworth-wood',
    name: 'Handsworth Wood',
    postcodes: ['B20'],
    nearbyAreas: ['Handsworth', 'Perry Barr', 'Great Barr', 'Hamstead', 'Birmingham'],
    geo: { latitude: 52.5200, longitude: -1.9350 },
    pricing: {
      terraced: { min: 55, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 135 },
    },
    priceFrom: 55,
    priceTo: 135,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  hawkesley: {
    slug: 'hawkesley',
    name: 'Hawkesley',
    postcodes: ['B38'],
    nearbyAreas: ['Kings Norton', 'Northfield', 'Turves Green', 'Birmingham', 'Longbridge'],
    geo: { latitude: 52.3980, longitude: -1.9480 },
    pricing: {
      terraced: { min: 40, max: 55 },
      semiDetached: { min: 45, max: 65 },
      detached: { min: 65, max: 95 },
    },
    priceFrom: 40,
    priceTo: 95,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'hay-mills': {
    slug: 'hay-mills',
    name: 'Hay Mills',
    postcodes: ['B25'],
    nearbyAreas: ['Yardley', 'Bordesley Green', 'Birmingham', 'Small Heath', 'Acocks Green'],
    geo: { latitude: 52.4650, longitude: -1.8300 },
    pricing: {
      terraced: { min: 40, max: 55 },
      semiDetached: { min: 45, max: 65 },
      detached: { min: 65, max: 95 },
    },
    priceFrom: 40,
    priceTo: 95,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  highgate: {
    slug: 'highgate',
    name: 'Highgate',
    postcodes: ['B12', 'B5'],
    nearbyAreas: ['Birmingham', 'Balsall Heath', 'Moseley', 'Sparkbrook', 'Edgbaston'],
    geo: { latitude: 52.4650, longitude: -1.8950 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 70, max: 105 },
    },
    priceFrom: 45,
    priceTo: 105,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'highters-heath': {
    slug: 'highters-heath',
    name: 'Highter\'s Heath',
    postcodes: ['B14'],
    nearbyAreas: ['Yardley Wood', 'Kings Heath', 'Hall Green', 'Birmingham', 'Shirley'],
    geo: { latitude: 52.4150, longitude: -1.8600 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 70, max: 105 },
    },
    priceFrom: 45,
    priceTo: 105,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  hockley: {
    slug: 'hockley',
    name: 'Hockley',
    postcodes: ['B18', 'B19'],
    nearbyAreas: ['Birmingham', 'Jewellery Quarter', 'Handsworth', 'Aston', 'Ladywood'],
    geo: { latitude: 52.4900, longitude: -1.9200 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 70, max: 105 },
    },
    priceFrom: 45,
    priceTo: 105,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'hollywood-birmingham': {
    slug: 'hollywood-birmingham',
    name: 'Hollywood',
    postcodes: ['B47', 'B14'],
    nearbyAreas: ['Wythall', 'Kings Heath', 'Yardley Wood', 'Solihull', 'Redditch'],
    geo: { latitude: 52.3830, longitude: -1.8630 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'Worcestershire',
    tier: 'suburb',
  },

  'jewellery-quarter': {
    slug: 'jewellery-quarter',
    name: 'Jewellery Quarter',
    postcodes: ['B1', 'B3', 'B4', 'B18'],
    nearbyAreas: ['Birmingham', 'Hockley', 'Ladywood', 'Edgbaston', 'Lee Bank'],
    geo: { latitude: 52.4850, longitude: -1.9150 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 50,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'hodge-hill': {
    slug: 'hodge-hill',
    name: 'Hodge Hill',
    postcodes: ['B36'],
    nearbyAreas: ['Stechford', 'Shard End', 'Castle Bromwich', 'Birmingham', 'Erdington'],
    geo: { latitude: 52.5000, longitude: -1.8000 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 50,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  saltley: {
    slug: 'saltley',
    name: 'Saltley',
    postcodes: ['B8'],
    nearbyAreas: ['Bordesley Green', 'Small Heath', 'Aston', 'Birmingham', 'Nechells'],
    geo: { latitude: 52.4933, longitude: -1.8567 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 50,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'small-heath': {
    slug: 'small-heath',
    name: 'Small Heath',
    postcodes: ['B10'],
    nearbyAreas: ['Sparkbrook', 'Bordesley Green', 'Saltley', 'Birmingham', 'Sparkhill'],
    geo: { latitude: 52.4700, longitude: -1.8500 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 50,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  sparkbrook: {
    slug: 'sparkbrook',
    name: 'Sparkbrook',
    postcodes: ['B11', 'B12'],
    nearbyAreas: ['Sparkhill', 'Moseley', 'Balsall Heath', 'Birmingham', 'Small Heath'],
    geo: { latitude: 52.4617, longitude: -1.8717 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 50,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  sparkhill: {
    slug: 'sparkhill',
    name: 'Sparkhill',
    postcodes: ['B11'],
    nearbyAreas: ['Sparkbrook', 'Moseley', 'Hall Green', 'Birmingham', 'Acocks Green'],
    geo: { latitude: 52.4533, longitude: -1.8617 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 50,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  kingstanding: {
    slug: 'kingstanding',
    name: 'Kingstanding',
    postcodes: ['B44'],
    nearbyAreas: ['Great Barr', 'Perry Barr', 'Erdington', 'Birmingham', 'Sutton Coldfield'],
    geo: { latitude: 52.5383, longitude: -1.8817 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'weoley-castle': {
    slug: 'weoley-castle',
    name: 'Weoley Castle',
    postcodes: ['B29'],
    nearbyAreas: ['Selly Oak', 'Harborne', 'Bartley Green', 'Northfield', 'Birmingham'],
    geo: { latitude: 52.4370, longitude: -1.9700 },
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

  'west-heath': {
    slug: 'west-heath',
    name: 'West Heath',
    postcodes: ['B31'],
    nearbyAreas: ['Northfield', 'Longbridge', 'Kings Norton', 'Cofton Hackett', 'Birmingham'],
    geo: { latitude: 52.4010, longitude: -1.9620 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  witton: {
    slug: 'witton',
    name: 'Witton',
    postcodes: ['B6'],
    nearbyAreas: ['Aston', 'Perry Barr', 'Erdington', 'Birmingham', 'Nechells'],
    geo: { latitude: 52.5050, longitude: -1.8850 },
    pricing: {
      terraced: { min: 45, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 45,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'wylde-green': {
    slug: 'wylde-green',
    name: 'Wylde Green',
    postcodes: ['B73'],
    nearbyAreas: ['Sutton Coldfield', 'Boldmere', 'Four Oaks', 'Erdington', 'Birmingham'],
    geo: { latitude: 52.5370, longitude: -1.8310 },
    pricing: {
      terraced: { min: 60, max: 80 },
      semiDetached: { min: 70, max: 95 },
      detached: { min: 95, max: 150 },
    },
    priceFrom: 60,
    priceTo: 150,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'perry-barr': {
    slug: 'perry-barr',
    name: 'Perry Barr',
    postcodes: ['B42'],
    nearbyAreas: ['Great Barr', 'Handsworth', 'Kingstanding', 'Birmingham', 'Walsall'],
    geo: { latitude: 52.5267, longitude: -1.9083 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  yardley: {
    slug: 'yardley',
    name: 'Yardley',
    postcodes: ['B25', 'B26'],
    nearbyAreas: ['Acocks Green', 'Stechford', 'Sheldon', 'Birmingham', 'Solihull'],
    geo: { latitude: 52.4700, longitude: -1.8100 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'yardley-wood': {
    slug: 'yardley-wood',
    name: 'Yardley Wood',
    postcodes: ['B14'],
    nearbyAreas: ['Billesley', 'Kings Heath', 'Hall Green', 'Shirley', 'Warstock', 'Solihull'],
    geo: { latitude: 52.4120, longitude: -1.8530 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  stechford: {
    slug: 'stechford',
    name: 'Stechford',
    postcodes: ['B33'],
    nearbyAreas: ['Yardley', 'Shard End', 'Acocks Green', 'Birmingham', 'Sheldon'],
    geo: { latitude: 52.4817, longitude: -1.8017 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 50,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'shard-end': {
    slug: 'shard-end',
    name: 'Shard End',
    postcodes: ['B34'],
    nearbyAreas: ['Stechford', 'Castle Bromwich', 'Chelmsley Wood', 'Birmingham', 'Solihull'],
    geo: { latitude: 52.4883, longitude: -1.7817 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 50,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  shirley: {
    slug: 'shirley',
    name: 'Shirley',
    postcodes: ['B90'],
    nearbyAreas: ['Solihull', 'Olton', 'Hall Green', 'Yardley Wood', 'Cheswick Green', 'Birmingham'],
    geo: { latitude: 52.4065, longitude: -1.8566 },
    pricing: {
      terraced: { min: 55, max: 75 },
      semiDetached: { min: 65, max: 90 },
      detached: { min: 90, max: 140 },
    },
    priceFrom: 55,
    priceTo: 140,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  sheldon: {
    slug: 'sheldon',
    name: 'Sheldon',
    postcodes: ['B26'],
    nearbyAreas: ['Yardley', 'Stechford', 'Solihull', 'Marston Green', 'Birmingham', 'Elmdon'],
    geo: { latitude: 52.4590, longitude: -1.7780 },
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

  'shenley-fields': {
    slug: 'shenley-fields',
    name: 'Shenley Fields',
    postcodes: ['B29'],
    nearbyAreas: ['Weoley Castle', 'Selly Oak', 'Northfield', 'Bartley Green', 'Birmingham', 'Kings Norton'],
    geo: { latitude: 52.4380, longitude: -1.9500 },
    pricing: {
      terraced: { min: 45, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 45,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'shenley-green': {
    slug: 'shenley-green',
    name: 'Shenley Green',
    postcodes: ['B29'],
    nearbyAreas: ['Weoley Castle', 'Northfield', 'Kings Norton', 'Selly Oak', 'Birmingham', 'Rubery'],
    geo: { latitude: 52.4350, longitude: -1.9600 },
    pricing: {
      terraced: { min: 45, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 45,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

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
  
  westmidlands: {
    slug: 'westmidlands',
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

  stirchley: {
    slug: 'stirchley',
    name: 'Stirchley',
    postcodes: ['B30'],
    nearbyAreas: ['Bournville', 'Kings Heath', 'Selly Park', 'Birmingham', 'Cotteridge'],
    geo: { latitude: 52.4286, longitude: -1.9181 },
    pricing: {
      terraced: { min: 45, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 45,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  streetly: {
    slug: 'streetly',
    name: 'Streetly',
    postcodes: ['B74'],
    nearbyAreas: ['Sutton Coldfield', 'Four Oaks', 'Little Aston', 'Birmingham', 'Walsall'],
    geo: { latitude: 52.5720, longitude: -1.8910 },
    pricing: {
      terraced: { min: 60, max: 80 },
      semiDetached: { min: 70, max: 95 },
      detached: { min: 95, max: 150 },
    },
    priceFrom: 60,
    priceTo: 150,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'turves-green': {
    slug: 'turves-green',
    name: 'Turves Green',
    postcodes: ['B31'],
    nearbyAreas: ['West Heath', 'Northfield', 'Longbridge', 'Birmingham', 'Kings Norton'],
    geo: { latitude: 52.4030, longitude: -1.9650 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 65, max: 100 },
    },
    priceFrom: 45,
    priceTo: 100,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  tyseley: {
    slug: 'tyseley',
    name: 'Tyseley',
    postcodes: ['B11'],
    nearbyAreas: ['Sparkhill', 'Acocks Green', 'Yardley', 'Birmingham', 'Small Heath'],
    geo: { latitude: 52.4480, longitude: -1.8580 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 65, max: 100 },
    },
    priceFrom: 45,
    priceTo: 100,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'ward-end': {
    slug: 'ward-end',
    name: 'Ward End',
    postcodes: ['B8', 'B34'],
    nearbyAreas: ['Stechford', 'Bordesley Green', 'Hodge Hill', 'Birmingham', 'Shard End'],
    geo: { latitude: 52.4900, longitude: -1.8330 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 65, max: 100 },
    },
    priceFrom: 45,
    priceTo: 100,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'washwood-heath': {
    slug: 'washwood-heath',
    name: 'Washwood Heath',
    postcodes: ['B8'],
    nearbyAreas: ['Ward End', 'Saltley', 'Hodge Hill', 'Birmingham', 'Aston'],
    geo: { latitude: 52.4930, longitude: -1.8450 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 65, max: 100 },
    },
    priceFrom: 45,
    priceTo: 100,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'perry-common': {
    slug: 'perry-common',
    name: 'Perry Common',
    postcodes: ['B23', 'B24'],
    nearbyAreas: ['Erdington', 'Kingstanding', 'Perry Barr', 'Birmingham', 'Sutton Coldfield'],
    geo: { latitude: 52.5350, longitude: -1.8500 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 70, max: 105 },
    },
    priceFrom: 45,
    priceTo: 105,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  queslett: {
    slug: 'queslett',
    name: 'Queslett',
    postcodes: ['B43'],
    nearbyAreas: ['Great Barr', 'Kingstanding', 'Perry Barr', 'Birmingham', 'Walsall'],
    geo: { latitude: 52.5430, longitude: -1.9200 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 45,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  quinton: {
    slug: 'quinton',
    name: 'Quinton',
    postcodes: ['B32'],
    nearbyAreas: ['Harborne', 'Bartley Green', 'Halesowen', 'Birmingham', 'Edgbaston'],
    geo: { latitude: 52.4580, longitude: -1.9900 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  rednal: {
    slug: 'rednal',
    name: 'Rednal',
    postcodes: ['B45'],
    nearbyAreas: ['Rubery', 'Longbridge', 'Northfield', 'Birmingham', 'Kings Norton'],
    geo: { latitude: 52.3870, longitude: -2.0080 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 70, max: 105 },
    },
    priceFrom: 45,
    priceTo: 105,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  rubery: {
    slug: 'rubery',
    name: 'Rubery',
    postcodes: ['B45'],
    nearbyAreas: ['Rednal', 'Longbridge', 'Northfield', 'Birmingham', 'Bromsgrove'],
    geo: { latitude: 52.3930, longitude: -2.0170 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  nechells: {
    slug: 'nechells',
    name: 'Nechells',
    postcodes: ['B7'],
    nearbyAreas: ['Aston', 'Saltley', 'Washwood Heath', 'Birmingham', 'Ward End'],
    geo: { latitude: 52.4950, longitude: -1.8680 },
    pricing: {
      terraced: { min: 40, max: 55 },
      semiDetached: { min: 45, max: 65 },
      detached: { min: 65, max: 95 },
    },
    priceFrom: 40,
    priceTo: 95,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'new-oscott': {
    slug: 'new-oscott',
    name: 'New Oscott',
    postcodes: ['B73'],
    nearbyAreas: ['Sutton Coldfield', 'Wylde Green', 'Erdington', 'Birmingham', 'Perry Common'],
    geo: { latitude: 52.5410, longitude: -1.8450 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'kitts-green': {
    slug: 'kitts-green',
    name: 'Kitts Green',
    postcodes: ['B26'],
    nearbyAreas: ['Yardley', 'Sheldon', 'Stechford', 'Birmingham', 'Shard End'],
    geo: { latitude: 52.4770, longitude: -1.7800 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 70, max: 105 },
    },
    priceFrom: 45,
    priceTo: 105,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  ladywood: {
    slug: 'ladywood',
    name: 'Ladywood',
    postcodes: ['B16'],
    nearbyAreas: ['Birmingham', 'Edgbaston', 'Harborne', 'Jewellery Quarter', 'Broad Street'],
    geo: { latitude: 52.4750, longitude: -1.9200 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 70, max: 105 },
    },
    priceFrom: 45,
    priceTo: 105,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'lee-bank': {
    slug: 'lee-bank',
    name: 'Lee Bank',
    postcodes: ['B1', 'B5'],
    nearbyAreas: ['Birmingham', 'Edgbaston', 'Highgate', 'Ladywood', 'Jewellery Quarter'],
    geo: { latitude: 52.4700, longitude: -1.9050 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 70, max: 105 },
    },
    priceFrom: 45,
    priceTo: 105,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  longbridge: {
    slug: 'longbridge',
    name: 'Longbridge',
    postcodes: ['B31', 'B45'],
    nearbyAreas: ['Northfield', 'Rubery', 'Rednal', 'Birmingham', 'Bromsgrove'],
    geo: { latitude: 52.3950, longitude: -1.9800 },
    pricing: {
      terraced: { min: 45, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 45,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  lozells: {
    slug: 'lozells',
    name: 'Lozells',
    postcodes: ['B19'],
    nearbyAreas: ['Handsworth', 'Aston', 'Birmingham', 'Perry Barr', 'Witton'],
    geo: { latitude: 52.5000, longitude: -1.9000 },
    pricing: {
      terraced: { min: 40, max: 55 },
      semiDetached: { min: 45, max: 65 },
      detached: { min: 65, max: 95 },
    },
    priceFrom: 40,
    priceTo: 95,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'mere-green': {
    slug: 'mere-green',
    name: 'Mere Green',
    postcodes: ['B75'],
    nearbyAreas: ['Sutton Coldfield', 'Four Oaks', 'Little Aston', 'Birmingham', 'Streetly'],
    geo: { latitude: 52.5590, longitude: -1.8360 },
    pricing: {
      terraced: { min: 55, max: 75 },
      semiDetached: { min: 65, max: 90 },
      detached: { min: 90, max: 140 },
    },
    priceFrom: 55,
    priceTo: 140,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  minworth: {
    slug: 'minworth',
    name: 'Minworth',
    postcodes: ['B76'],
    nearbyAreas: ['Sutton Coldfield', 'Walmley', 'Castle Vale', 'Birmingham', 'Erdington'],
    geo: { latitude: 52.5280, longitude: -1.7850 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 80 },
      detached: { min: 80, max: 120 },
    },
    priceFrom: 50,
    priceTo: 120,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'five-ways': {
    slug: 'five-ways',
    name: 'Five Ways',
    postcodes: ['B15', 'B16'],
    nearbyAreas: ['Edgbaston', 'Birmingham', 'Harborne', 'Ladywood', 'Lee Bank'],
    geo: { latitude: 52.4700, longitude: -1.9200 },
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

  'four-oaks': {
    slug: 'four-oaks',
    name: 'Four Oaks',
    postcodes: ['B74', 'B75'],
    nearbyAreas: ['Sutton Coldfield', 'Little Aston', 'Mere Green', 'Birmingham', 'Lichfield'],
    geo: { latitude: 52.5650, longitude: -1.8450 },
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

  frankley: {
    slug: 'frankley',
    name: 'Frankley',
    postcodes: ['B45'],
    nearbyAreas: ['Rubery', 'Longbridge', 'Rednal', 'Birmingham', 'Halesowen'],
    geo: { latitude: 52.4000, longitude: -2.0100 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'garretts-green': {
    slug: 'garretts-green',
    name: 'Garretts Green',
    postcodes: ['B26', 'B33'],
    nearbyAreas: ['Sheldon', 'Yardley', 'Stechford', 'Birmingham', 'Solihull'],
    geo: { latitude: 52.4630, longitude: -1.7950 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 70, max: 105 },
    },
    priceFrom: 45,
    priceTo: 105,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'gravelly-hill': {
    slug: 'gravelly-hill',
    name: 'Gravelly Hill',
    postcodes: ['B23', 'B24'],
    nearbyAreas: ['Erdington', 'Witton', 'Aston', 'Birmingham', 'Stockland Green'],
    geo: { latitude: 52.5150, longitude: -1.8550 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 45,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'bartley-green': {
    slug: 'bartley-green',
    name: 'Bartley Green',
    postcodes: ['B29'],
    nearbyAreas: ['Selly Oak', 'Northfield', 'Birmingham', 'Halesowen', 'Rubery'],
    geo: { latitude: 52.4350, longitude: -1.9820 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 70, max: 110 },
    },
    priceFrom: 45,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  billesley: {
    slug: 'billesley',
    name: 'Billesley',
    postcodes: ['B13'],
    nearbyAreas: ['Moseley', 'Kings Heath', 'Hall Green', 'Birmingham', 'Acocks Green'],
    geo: { latitude: 52.4330, longitude: -1.8600 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  birchfield: {
    slug: 'birchfield',
    name: 'Birchfield',
    postcodes: ['B6', 'B20'],
    nearbyAreas: ['Handsworth', 'Aston', 'Perry Barr', 'Birmingham', 'Witton'],
    geo: { latitude: 52.5100, longitude: -1.9100 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 70, max: 105 },
    },
    priceFrom: 45,
    priceTo: 105,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  boldmere: {
    slug: 'boldmere',
    name: 'Boldmere',
    postcodes: ['B73'],
    nearbyAreas: ['Sutton Coldfield', 'Erdington', 'Birmingham', 'Wylde Green', 'Walmley'],
    geo: { latitude: 52.5400, longitude: -1.8300 },
    pricing: {
      terraced: { min: 55, max: 70 },
      semiDetached: { min: 60, max: 80 },
      detached: { min: 85, max: 130 },
    },
    priceFrom: 55,
    priceTo: 130,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'bordesley-green': {
    slug: 'bordesley-green',
    name: 'Bordesley Green',
    postcodes: ['B9', 'B10'],
    nearbyAreas: ['Small Heath', 'Hay Mills', 'Birmingham', 'Stechford', 'Yardley'],
    geo: { latitude: 52.4730, longitude: -1.8500 },
    pricing: {
      terraced: { min: 40, max: 55 },
      semiDetached: { min: 45, max: 65 },
      detached: { min: 65, max: 100 },
    },
    priceFrom: 40,
    priceTo: 100,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  bournbrook: {
    slug: 'bournbrook',
    name: 'Bournbrook',
    postcodes: ['B29'],
    nearbyAreas: ['Selly Oak', 'Edgbaston', 'Harborne', 'Birmingham', 'Moseley'],
    geo: { latitude: 52.4450, longitude: -1.9200 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  bournville: {
    slug: 'bournville',
    name: 'Bournville',
    postcodes: ['B30'],
    nearbyAreas: ['Cotteridge', 'Stirchley', 'Selly Oak', 'Kings Norton', 'Birmingham'],
    geo: { latitude: 52.4270, longitude: -1.9360 },
    pricing: {
      terraced: { min: 55, max: 70 },
      semiDetached: { min: 60, max: 85 },
      detached: { min: 85, max: 135 },
    },
    priceFrom: 55,
    priceTo: 135,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'browns-green': {
    slug: 'browns-green',
    name: 'Browns Green',
    postcodes: ['B13', 'B90'],
    nearbyAreas: ['Kings Heath', 'Solihull', 'Hall Green', 'Birmingham', 'Shirley'],
    geo: { latitude: 52.4200, longitude: -1.8500 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'california-birmingham': {
    slug: 'california-birmingham',
    name: 'California (Birmingham)',
    postcodes: ['B31', 'B45'],
    nearbyAreas: ['Frankley', 'Rubery', 'Longbridge', 'Birmingham', 'Halesowen'],
    geo: { latitude: 52.4050, longitude: -2.0000 },
    pricing: {
      terraced: { min: 45, max: 60 },
      semiDetached: { min: 50, max: 70 },
      detached: { min: 70, max: 110 },
    },
    priceFrom: 45,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'castle-vale': {
    slug: 'castle-vale',
    name: 'Castle Vale',
    postcodes: ['B35'],
    nearbyAreas: ['Erdington', 'Minworth', 'Birmingham', 'Castle Bromwich', 'Walmley'],
    geo: { latitude: 52.5200, longitude: -1.8000 },
    pricing: {
      terraced: { min: 40, max: 55 },
      semiDetached: { min: 45, max: 65 },
      detached: { min: 65, max: 100 },
    },
    priceFrom: 40,
    priceTo: 100,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  cotteridge: {
    slug: 'cotteridge',
    name: 'Cotteridge',
    postcodes: ['B30'],
    nearbyAreas: ['Bournville', 'Kings Norton', 'Stirchley', 'Birmingham', 'Selly Oak'],
    geo: { latitude: 52.4200, longitude: -1.9300 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  digbeth: {
    slug: 'digbeth',
    name: 'Digbeth',
    postcodes: ['B5', 'B9', 'B11', 'B12'],
    nearbyAreas: ['Birmingham', 'Bordesley Green', 'Small Heath', 'Sparkbrook', 'Deritend'],
    geo: { latitude: 52.4750, longitude: -1.8800 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 110 },
    },
    priceFrom: 50,
    priceTo: 110,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
  },

  'druids-heath': {
    slug: 'druids-heath',
    name: 'Druids Heath',
    postcodes: ['B90', 'B91'],
    nearbyAreas: ['Solihull', 'Shirley', 'Hall Green', 'Birmingham', 'Yardley Wood'],
    geo: { latitude: 52.4100, longitude: -1.8300 },
    pricing: {
      terraced: { min: 50, max: 65 },
      semiDetached: { min: 55, max: 75 },
      detached: { min: 75, max: 115 },
    },
    priceFrom: 50,
    priceTo: 115,
    region: 'West Midlands',
    county: 'West Midlands',
    tier: 'suburb',
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
