import { CITIES, type CityData } from '@/lib/cities';

export type AreaSupplementEntry = CityData & {
  /** Optional sample streets for unique on-page copy */
  streets?: string[];
  /** Parent hub slug for internal links and copy tone */
  hubSlug?: string;
};

type Def = {
  slug: string;
  name: string;
  postcodes: string[];
  nearbyAreas: string[];
  hubSlug: string;
  geo?: { latitude: number; longitude: number };
  streets?: string[];
  priceFrom?: number;
  priceTo?: number;
};

const BIRMINGHAM_HUB: CityData = {
  slug: 'birmingham',
  name: 'Birmingham',
  postcodes: ['B1', 'B13', 'B14', 'B15', 'B16', 'B17', 'B23', 'B27', 'B28', 'B29', 'B31'],
  nearbyAreas: ['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Walsall', 'Dudley'],
  geo: { latitude: 52.4862, longitude: -1.8904 },
  pricing: {
    terraced: { min: 50, max: 70 },
    semiDetached: { min: 60, max: 85 },
    detached: { min: 85, max: 120 },
  },
  priceFrom: 50,
  priceTo: 120,
  region: 'West Midlands',
  county: 'West Midlands',
  tier: 'primary',
};

function suburb(def: Def): AreaSupplementEntry {
  const hub = def.hubSlug === 'birmingham' ? BIRMINGHAM_HUB : CITIES[def.hubSlug];
  const pricing = hub?.pricing ?? {
    terraced: { min: 50, max: 70 },
    semiDetached: { min: 60, max: 85 },
    detached: { min: 85, max: 120 },
  };
  const priceFrom = def.priceFrom ?? hub?.priceFrom ?? 50;
  const priceTo = def.priceTo ?? hub?.priceTo ?? 120;

  return {
    slug: def.slug,
    name: def.name,
    postcodes: def.postcodes,
    nearbyAreas: def.nearbyAreas,
    geo: def.geo ?? hub?.geo ?? { latitude: 52.4862, longitude: -1.8904 },
    pricing,
    priceFrom,
    priceTo,
    region: hub?.region ?? 'West Midlands',
    county: hub?.county ?? 'West Midlands',
    tier: 'suburb',
    hubSlug: def.hubSlug,
    streets: def.streets,
  };
}

const DEFINITIONS: Def[] = [
  // Walsall borough
  { slug: 'aldridge', name: 'Aldridge', postcodes: ['WS9'], nearbyAreas: ['Streetly', 'Walsall', 'Brownhills', 'Bloxwich', 'Rushall'], hubSlug: 'walsall', geo: { latitude: 52.606, longitude: -1.917 }, streets: ['High Street', 'Anchor Road', 'Walsall Road'] },
  { slug: 'bloxwich', name: 'Bloxwich', postcodes: ['WS3'], nearbyAreas: ['Walsall', 'Willenhall', 'Darlaston', 'Pelsall', 'Birmingham'], hubSlug: 'walsall', geo: { latitude: 52.614, longitude: -2.004 }, streets: ['High Street', 'Field Road', 'Bell Lane'] },
  { slug: 'brownhills', name: 'Brownhills', postcodes: ['WS8'], nearbyAreas: ['Aldridge', 'Walsall', 'Cannock', 'Pelsall', 'Chasetown'], hubSlug: 'walsall', geo: { latitude: 52.647, longitude: -1.934 }, streets: ['High Street', 'Chester Road', 'Pelsall Road'] },
  { slug: 'pelsall', name: 'Pelsall', postcodes: ['WS3', 'WS4'], nearbyAreas: ['Bloxwich', 'Walsall', 'Brownhills', 'Rushall', 'Shelfield'], hubSlug: 'walsall', geo: { latitude: 52.628, longitude: -1.969 }, streets: ['High Street', 'Church Road', 'Lichfield Road'] },
  { slug: 'darlaston', name: 'Darlaston', postcodes: ['WS10'], nearbyAreas: ['Wednesbury', 'Walsall', 'Willenhall', 'Bilston', 'West Bromwich'], hubSlug: 'walsall', geo: { latitude: 52.571, longitude: -2.037 }, streets: ['King Street', 'Pinfold Street', 'Walsall Street'] },
  { slug: 'rushall', name: 'Rushall', postcodes: ['WS4'], nearbyAreas: ['Pelsall', 'Walsall', 'Aldridge', 'Shelfield', 'Streetly'], hubSlug: 'walsall', geo: { latitude: 52.6, longitude: -1.965 }, streets: ['Lichfield Road', 'Pelsall Road', 'Rushall Road'] },
  { slug: 'shelfield', name: 'Shelfield', postcodes: ['WS4'], nearbyAreas: ['Rushall', 'Walsall', 'Pelsall', 'Bloxwich', 'Aldridge'], hubSlug: 'walsall', geo: { latitude: 52.595, longitude: -1.978 }, streets: ['Lichfield Road', 'Shelfield Road', 'High Street'] },
  { slug: 'willenhall', name: 'Willenhall', postcodes: ['WV12', 'WV13'], nearbyAreas: ['Wolverhampton', 'Walsall', 'Bilston', 'Darlaston', 'Wednesfield'], hubSlug: 'walsall', geo: { latitude: 52.585, longitude: -2.059 }, streets: ['High Street', 'Union Street', 'Stafford Street'] },

  // Coventry
  { slug: 'allesley', name: 'Allesley', postcodes: ['CV5'], nearbyAreas: ['Coventry', 'Earlsdon', 'Tile Hill', 'Berkswell', 'Birmingham'], hubSlug: 'coventry', geo: { latitude: 52.42, longitude: -1.57 }, streets: ['Allesley Old Road', 'Birmingham Road', 'Wolverhampton Lane'] },
  { slug: 'tile-hill', name: 'Tile Hill', postcodes: ['CV4'], nearbyAreas: ['Canley', 'Coventry', 'Earlsdon', 'Westwood Heath', 'Birmingham'], hubSlug: 'coventry', geo: { latitude: 52.395, longitude: -1.56 }, streets: ['Tile Hill Lane', 'Jardine Crescent', 'Broad Lane'] },
  { slug: 'earlsdon', name: 'Earlsdon', postcodes: ['CV5'], nearbyAreas: ['Coventry', 'Allesley', 'Chapelfields', 'Canley', 'Kenilworth'], hubSlug: 'coventry', geo: { latitude: 52.408, longitude: -1.53 }, streets: ['Earlsdon Avenue', 'Warwick Road', 'Albany Road'] },
  { slug: 'wyken', name: 'Wyken', postcodes: ['CV2'], nearbyAreas: ['Coventry', 'Stoke', 'Binley', 'Bell Green', 'Walsgrave'], hubSlug: 'coventry', geo: { latitude: 52.425, longitude: -1.47 }, streets: ['Wyken Croft', 'Ansty Road', 'Hinckley Road'] },
  { slug: 'foleshill', name: 'Foleshill', postcodes: ['CV6'], nearbyAreas: ['Coventry', 'Radford', 'Holbrooks', 'Longford', 'Bell Green'], hubSlug: 'coventry', geo: { latitude: 52.435, longitude: -1.5 }, streets: ['Foleshill Road', 'Stoney Stanton Road', 'Broad Street'] },
  { slug: 'radford', name: 'Radford', postcodes: ['CV6'], nearbyAreas: ['Coventry', 'Foleshill', 'Holbrooks', 'Coundon', 'City Centre'], hubSlug: 'coventry', geo: { latitude: 52.42, longitude: -1.51 }, streets: ['Radford Road', 'Moseley Avenue', 'Broadgate'] },
  { slug: 'canley', name: 'Canley', postcodes: ['CV4'], nearbyAreas: ['Tile Hill', 'Coventry', 'Westwood', 'Earlsdon', 'University of Warwick'], hubSlug: 'coventry', geo: { latitude: 52.385, longitude: -1.545 }, streets: ['Canley Road', 'Prior Deram Walk', 'Cannon Hill Road'] },
  { slug: 'binley', name: 'Binley', postcodes: ['CV3'], nearbyAreas: ['Coventry', 'Stoke', 'Wyken', 'Eastern Green', 'Walsgrave'], hubSlug: 'coventry', geo: { latitude: 52.41, longitude: -1.45 }, streets: ['Binley Road', 'Brinklow Road', 'Allard Way'] },
  { slug: 'stoke', name: 'Stoke', postcodes: ['CV2', 'CV3'], nearbyAreas: ['Coventry', 'Wyken', 'Binley', 'Gosford Green', 'City Centre'], hubSlug: 'coventry', geo: { latitude: 52.415, longitude: -1.48 }, streets: ['Walsgrave Road', 'Stoke Green', 'Briton Road'] },

  // Wolverhampton
  { slug: 'bilston', name: 'Bilston', postcodes: ['WV14'], nearbyAreas: ['Wolverhampton', 'Willenhall', 'Darlaston', 'Coseley', 'Wednesbury'], hubSlug: 'wolverhampton', geo: { latitude: 52.566, longitude: -2.074 }, streets: ['High Street', 'Church Street', 'Oxford Street'] },
  { slug: 'wednesfield', name: 'Wednesfield', postcodes: ['WV11'], nearbyAreas: ['Wolverhampton', 'Willenhall', 'Bushbury', 'Heath Town', 'Bilston'], hubSlug: 'wolverhampton', geo: { latitude: 52.599, longitude: -2.083 }, streets: ['Lichfield Road', 'Bentley Lane', 'Wood End Road'] },
  { slug: 'tettenhall', name: 'Tettenhall', postcodes: ['WV6'], nearbyAreas: ['Wolverhampton', 'Penn', 'Compton', 'Wombourne', 'Codsall'], hubSlug: 'wolverhampton', geo: { latitude: 52.598, longitude: -2.168 }, streets: ['Wergs Road', 'Tettenhall Road', 'Lower Green'] },
  { slug: 'bushbury', name: 'Bushbury', postcodes: ['WV10'], nearbyAreas: ['Wolverhampton', 'Oxley', 'Wednesfield', 'Fordhouses', 'Heath Town'], hubSlug: 'wolverhampton', geo: { latitude: 52.61, longitude: -2.12 }, streets: ['Bushbury Lane', 'Cannock Road', 'Three Tuns Lane'] },
  { slug: 'penn', name: 'Penn', postcodes: ['WV4'], nearbyAreas: ['Wolverhampton', 'Tettenhall', 'Sedgley', 'Dudley', 'Compton'], hubSlug: 'wolverhampton', geo: { latitude: 52.555, longitude: -2.155 }, streets: ['Penn Road', 'Mount Road', 'Warstones Road'] },
  { slug: 'oxley', name: 'Oxley', postcodes: ['WV10'], nearbyAreas: ['Wolverhampton', 'Bushbury', 'Fordhouses', 'Wednesfield', 'Bilston'], hubSlug: 'wolverhampton', geo: { latitude: 52.625, longitude: -2.135 }, streets: ['Oxley Avenue', 'Cannock Road', 'Showell Road'] },

  // Dudley borough
  { slug: 'brierley-hill', name: 'Brierley Hill', postcodes: ['DY5'], nearbyAreas: ['Dudley', 'Stourbridge', 'Netherton', 'Kingswinford', 'Halesowen'], hubSlug: 'dudley', geo: { latitude: 52.481, longitude: -2.121 }, streets: ['High Street', 'Bank Street', 'Mill Street'] },
  { slug: 'sedgley', name: 'Sedgley', postcodes: ['DY3'], nearbyAreas: ['Dudley', 'Gornal', 'Coseley', 'Wolverhampton', 'Penn'], hubSlug: 'dudley', geo: { latitude: 52.541, longitude: -2.121 }, streets: ['High Street', 'Bilston Street', 'Tipton Road'] },
  { slug: 'coseley', name: 'Coseley', postcodes: ['WV14'], nearbyAreas: ['Bilston', 'Dudley', 'Sedgley', 'Willenhall', 'Tipton'], hubSlug: 'dudley', geo: { latitude: 52.545, longitude: -2.085 }, streets: ['Castle Street', 'Church Road', 'Green Road'] },
  { slug: 'kingswinford', name: 'Kingswinford', postcodes: ['DY6'], nearbyAreas: ['Stourbridge', 'Dudley', 'Brierley Hill', 'Wordsley', 'Wombourne'], hubSlug: 'dudley', geo: { latitude: 52.498, longitude: -2.168 }, streets: ['High Street', 'Hagley Road', 'Summer Street'] },
  { slug: 'netherton', name: 'Netherton', postcodes: ['DY2'], nearbyAreas: ['Dudley', 'Brierley Hill', 'Cradley', 'Halesowen', 'Stourbridge'], hubSlug: 'dudley', geo: { latitude: 52.49, longitude: -2.085 }, streets: ['Halesowen Road', 'Netherton High Street', 'Saltwells Road'] },
  { slug: 'gornal', name: 'Gornal', postcodes: ['DY3'], nearbyAreas: ['Sedgley', 'Dudley', 'Brierley Hill', 'Coseley', 'Stourbridge'], hubSlug: 'dudley', geo: { latitude: 52.528, longitude: -2.125 }, streets: ['Abbey Road', 'Griffiths Avenue', 'Upper Gornal'] },
  { slug: 'amblecote', name: 'Amblecote', postcodes: ['DY8'], nearbyAreas: ['Stourbridge', 'Brierley Hill', 'Kingswinford', 'Lye', 'Dudley'], hubSlug: 'dudley', geo: { latitude: 52.468, longitude: -2.145 }, streets: ['Stourbridge Road', 'Vicarage Road', 'Enville Street'] },
  { slug: 'lye', name: 'Lye', postcodes: ['DY9'], nearbyAreas: ['Stourbridge', 'Amblecote', 'Brierley Hill', 'Halesowen', 'Cradley Heath'], hubSlug: 'dudley', geo: { latitude: 52.458, longitude: -2.11 }, streets: ['High Street', 'Stourbridge Road', 'Pedmore Road'] },

  // Sandwell
  { slug: 'tipton', name: 'Tipton', postcodes: ['DY4'], nearbyAreas: ['Dudley', 'West Bromwich', 'Wednesbury', 'Coseley', 'Bilston'], hubSlug: 'sandwell', geo: { latitude: 52.53, longitude: -2.065 }, streets: ['Owen Street', 'Dudley Port', 'Horseley Heath'] },
  { slug: 'rowley-regis', name: 'Rowley Regis', postcodes: ['B65'], nearbyAreas: ['Blackheath', 'Oldbury', 'Halesowen', 'West Bromwich', 'Cradley Heath'], hubSlug: 'sandwell', geo: { latitude: 52.485, longitude: -2.045 }, streets: ['Hawes Lane', 'Station Road', 'Newbury Lane'] },
  { slug: 'wednesbury', name: 'Wednesbury', postcodes: ['WS10'], nearbyAreas: ['Darlaston', 'West Bromwich', 'Tipton', 'Walsall', 'Bilston'], hubSlug: 'sandwell', geo: { latitude: 52.552, longitude: -2.023 }, streets: ['High Street', 'Holyhead Road', 'Wood Green'] },
  { slug: 'blackheath', name: 'Blackheath', postcodes: ['B65'], nearbyAreas: ['Rowley Regis', 'Oldbury', 'Halesowen', 'Cradley Heath', 'West Bromwich'], hubSlug: 'sandwell', geo: { latitude: 52.475, longitude: -2.04 }, streets: ['High Street', 'Britannia Road', 'Waterfall Lane'] },
  { slug: 'cradley-heath', name: 'Cradley Heath', postcodes: ['B64'], nearbyAreas: ['Blackheath', 'Oldbury', 'Halesowen', 'Rowley Regis', 'Stourbridge'], hubSlug: 'sandwell', geo: { latitude: 52.465, longitude: -2.07 }, streets: ['High Street', 'Reddal Hill Road', 'Lower High Street'] },

  // Solihull borough
  { slug: 'knowle', name: 'Knowle', postcodes: ['B93'], nearbyAreas: ['Solihull', 'Dorridge', 'Dickens Heath', 'Hampton in Arden', 'Shirley'], hubSlug: 'solihull', geo: { latitude: 52.385, longitude: -1.735 }, streets: ['High Street', 'Station Road', 'Warwick Road'] },
  { slug: 'dorridge', name: 'Dorridge', postcodes: ['B93'], nearbyAreas: ['Knowle', 'Solihull', 'Lapworth', 'Hockley Heath', 'Shirley'], hubSlug: 'solihull', geo: { latitude: 52.37, longitude: -1.755 }, streets: ['Station Approach', 'Grange Road', 'Dorridge Road'] },
  { slug: 'olton', name: 'Olton', postcodes: ['B92'], nearbyAreas: ['Solihull', 'Acocks Green', 'Shirley', 'Elmdon', 'Birmingham'], hubSlug: 'solihull', geo: { latitude: 52.435, longitude: -1.805 }, streets: ['Warwick Road', 'St Bernards Road', 'Lyndon Road'] },
  { slug: 'chelmsley-wood', name: 'Chelmsley Wood', postcodes: ['B37'], nearbyAreas: ['Marston Green', 'Castle Bromwich', 'Birmingham', 'Kingshurst', 'Fordbridge'], hubSlug: 'solihull', geo: { latitude: 52.478, longitude: -1.735 }, streets: ['Chelmsley Circle', 'Bosworth Drive', 'Marlene Croft'] },
  { slug: 'marston-green', name: 'Marston Green', postcodes: ['B37'], nearbyAreas: ['Chelmsley Wood', 'Solihull', 'Bickenhill', 'Castle Bromwich', 'Airport'], hubSlug: 'solihull', geo: { latitude: 52.465, longitude: -1.745 }, streets: ['Station Road', 'Land Lane', 'Elmdon Lane'] },
  { slug: 'hockley-heath', name: 'Hockley Heath', postcodes: ['B94'], nearbyAreas: ['Dorridge', 'Solihull', 'Lapworth', 'Earlswood', 'Warwick'], hubSlug: 'solihull', geo: { latitude: 52.345, longitude: -1.775 }, streets: ['Warwick Road', 'School Road', 'Nuthurst Road'] },
  { slug: 'meriden', name: 'Meriden', postcodes: ['CV7'], nearbyAreas: ['Solihull', 'Balsall Common', 'Coventry', 'Hampton in Arden', 'Berkswell'], hubSlug: 'solihull', geo: { latitude: 52.435, longitude: -1.655 }, streets: ['Main Road', 'Park Lane', 'Maxstoke Lane'] },
  { slug: 'hampton-in-arden', name: 'Hampton in Arden', postcodes: ['B92'], nearbyAreas: ['Solihull', 'Knowle', 'Meriden', 'Balsall Common', 'Coleshill'], hubSlug: 'solihull', geo: { latitude: 52.425, longitude: -1.705 }, streets: ['High Street', 'Foleshill Road', 'Shadow Brook Lane'] },
  { slug: 'balsall-common', name: 'Balsall Common', postcodes: ['CV7'], nearbyAreas: ['Meriden', 'Knowle', 'Solihull', 'Berkswell', 'Kenilworth'], hubSlug: 'solihull', geo: { latitude: 52.385, longitude: -1.655 }, streets: ['Station Road', 'Kenilworth Road', 'Meeting House Lane'] },

  // Sandwell (not yet in CITIES)
  { slug: 'oldbury', name: 'Oldbury', postcodes: ['B68', 'B69'], nearbyAreas: ['Smethwick', 'West Bromwich', 'Blackheath', 'Rowley Regis', 'Sandwell'], hubSlug: 'sandwell', geo: { latitude: 52.505, longitude: -2.015 }, streets: ['Halesowen Street', 'Freeth Street', 'Crosswells Road'] },
  { slug: 'smethwick', name: 'Smethwick', postcodes: ['B66', 'B67'], nearbyAreas: ['Oldbury', 'West Bromwich', 'Bearwood', 'Handsworth', 'Sandwell'], hubSlug: 'sandwell', geo: { latitude: 52.492, longitude: -1.965 }, streets: ['High Street', 'Bearwood Road', 'Londonderry Lane'] },

  // Birmingham (no dedicated page)
  {
    slug: 'winson-green',
    name: 'Winson Green',
    postcodes: ['B18', 'B19'],
    nearbyAreas: ['Hockley', 'Ladywood', 'Newtown', 'Birmingham', 'Handsworth'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.495, longitude: -1.925 },
    streets: ['Winson Green Road', 'Soho Road', 'Heath Street'],
    priceFrom: 50,
    priceTo: 105,
  },
];

export const AREA_SUPPLEMENT: Record<string, AreaSupplementEntry> = Object.fromEntries(
  DEFINITIONS.map((d) => [d.slug, suburb(d)]),
);

export function getAreaSupplement(slug: string): AreaSupplementEntry | undefined {
  return AREA_SUPPLEMENT[slug];
}
