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
  { slug: 'bentley', name: 'Bentley', postcodes: ['WS2'], nearbyAreas: ['Walsall', 'Bloxwich', 'Birchills', 'Leamore', 'Willenhall'], hubSlug: 'walsall', geo: { latitude: 52.578, longitude: -2.008 }, streets: ['Bentley Lane', 'School Street', 'Little Station Street', 'Bentley Road'] },
  { slug: 'bloxwich', name: 'Bloxwich', postcodes: ['WS3'], nearbyAreas: ['Walsall', 'Willenhall', 'Darlaston', 'Pelsall', 'Birmingham'], hubSlug: 'walsall', geo: { latitude: 52.614, longitude: -2.004 }, streets: ['High Street', 'Field Road', 'Bell Lane'] },
  { slug: 'brownhills', name: 'Brownhills', postcodes: ['WS8'], nearbyAreas: ['Aldridge', 'Walsall', 'Cannock', 'Pelsall', 'Chasetown'], hubSlug: 'walsall', geo: { latitude: 52.647, longitude: -1.934 }, streets: ['High Street', 'Chester Road', 'Pelsall Road'] },
  { slug: 'darlaston', name: 'Darlaston', postcodes: ['WS10'], nearbyAreas: ['Wednesbury', 'Walsall', 'Willenhall', 'Bilston', 'West Bromwich'], hubSlug: 'walsall', geo: { latitude: 52.571, longitude: -2.037 }, streets: ['King Street', 'Pinfold Street', 'Walsall Street'] },
  { slug: 'pelsall', name: 'Pelsall', postcodes: ['WS3', 'WS4'], nearbyAreas: ['Bloxwich', 'Walsall', 'Brownhills', 'Rushall', 'Shelfield'], hubSlug: 'walsall', geo: { latitude: 52.628, longitude: -1.969 }, streets: ['High Street', 'Church Road', 'Lichfield Road'] },
  { slug: 'pleck', name: 'Pleck', postcodes: ['WS2'], nearbyAreas: ['Walsall', 'Caldmore', 'Alumwell', 'Bentley', 'Birchills'], hubSlug: 'walsall', geo: { latitude: 52.583, longitude: -1.987 }, streets: ['Pleck Road', 'Sandwell Street', 'Trent Road', 'Weston Street'] },
  { slug: 'rushall', name: 'Rushall', postcodes: ['WS4'], nearbyAreas: ['Pelsall', 'Walsall', 'Aldridge', 'Shelfield', 'Streetly'], hubSlug: 'walsall', geo: { latitude: 52.6, longitude: -1.965 }, streets: ['Lichfield Road', 'Pelsall Road', 'Rushall Road'] },
  { slug: 'shelfield', name: 'Shelfield', postcodes: ['WS4'], nearbyAreas: ['Rushall', 'Walsall', 'Pelsall', 'Bloxwich', 'Aldridge'], hubSlug: 'walsall', geo: { latitude: 52.595, longitude: -1.978 }, streets: ['Lichfield Road', 'Shelfield Road', 'High Street'] },
  { slug: 'willenhall', name: 'Willenhall', postcodes: ['WV12', 'WV13'], nearbyAreas: ['Wolverhampton', 'Walsall', 'Bilston', 'Darlaston', 'Wednesfield'], hubSlug: 'walsall', geo: { latitude: 52.585, longitude: -2.059 }, streets: ['High Street', 'Union Street', 'Stafford Street'] },

  // Coventry
  { slug: 'allesley', name: 'Allesley', postcodes: ['CV5'], nearbyAreas: ['Coventry', 'Earlsdon', 'Tile Hill', 'Berkswell', 'Birmingham'], hubSlug: 'coventry', geo: { latitude: 52.42, longitude: -1.57 }, streets: ['Allesley Old Road', 'Birmingham Road', 'Wolverhampton Lane'] },
  { slug: 'bell-green', name: 'Bell Green', postcodes: ['CV2', 'CV6'], nearbyAreas: ['Wood End', 'Foleshill', 'Longford', 'Courthouse Green', 'Walsgrave'], hubSlug: 'coventry', geo: { latitude: 52.455, longitude: -1.480 }, streets: ['Bell Green Road', 'Stoke Heath', 'Henley Road', 'Walsgrave Road'] },
  { slug: 'binley', name: 'Binley', postcodes: ['CV3'], nearbyAreas: ['Coventry', 'Stoke', 'Wyken', 'Eastern Green', 'Walsgrave'], hubSlug: 'coventry', geo: { latitude: 52.41, longitude: -1.45 }, streets: ['Binley Road', 'Brinklow Road', 'Allard Way'] },
  { slug: 'canley', name: 'Canley', postcodes: ['CV4'], nearbyAreas: ['Tile Hill', 'Coventry', 'Westwood', 'Earlsdon', 'University of Warwick'], hubSlug: 'coventry', geo: { latitude: 52.385, longitude: -1.545 }, streets: ['Canley Road', 'Prior Deram Walk', 'Cannon Hill Road'] },
  { slug: 'cheylesmore', name: 'Cheylesmore', postcodes: ['CV3'], nearbyAreas: ['Earlsdon', 'Stivichall', 'Whitley', 'Coventry city centre', 'War Memorial Park'], hubSlug: 'coventry', geo: { latitude: 52.400, longitude: -1.535 }, streets: ['Cheylesmore Avenue', 'Quinton Road', 'Daventry Road', 'Leamington Road'] },
  { slug: 'coundon', name: 'Coundon', postcodes: ['CV6'], nearbyAreas: ['Radford', 'Allesley', 'Chapelfields', 'Whitmore Park', 'Spon End'], hubSlug: 'coventry', geo: { latitude: 52.433, longitude: -1.520 }, streets: ['Coundon Road', 'Holbrook Lane', 'Moseley Avenue', 'Barkers Butts Lane'] },
  { slug: 'earlsdon', name: 'Earlsdon', postcodes: ['CV5'], nearbyAreas: ['Coventry', 'Allesley', 'Chapelfields', 'Canley', 'Kenilworth'], hubSlug: 'coventry', geo: { latitude: 52.408, longitude: -1.53 }, streets: ['Earlsdon Avenue', 'Warwick Road', 'Albany Road'] },
  { slug: 'foleshill', name: 'Foleshill', postcodes: ['CV6'], nearbyAreas: ['Coventry', 'Radford', 'Holbrooks', 'Longford', 'Bell Green'], hubSlug: 'coventry', geo: { latitude: 52.435, longitude: -1.5 }, streets: ['Foleshill Road', 'Stoney Stanton Road', 'Broad Street'] },
  { slug: 'green-lane', name: 'Green Lane', postcodes: ['CV3', 'CV6'], nearbyAreas: ['Walsgrave', 'Wood End', 'Binley', 'Stoke', 'Hillfields'], hubSlug: 'coventry', geo: { latitude: 52.430, longitude: -1.475 }, streets: ['Green Lane', 'Walsgrave Road', 'Hinckley Road', 'Ansty Road'] },
  { slug: 'holbrooks', name: 'Holbrooks', postcodes: ['CV6'], nearbyAreas: ['Longford', 'Foleshill', 'Bedworth', 'Wood End', 'Keresley'], hubSlug: 'coventry', geo: { latitude: 52.460, longitude: -1.500 }, streets: ['Holbrook Lane', 'Longford Road', 'Foleshill Road', 'Keresley Road'] },
  { slug: 'keresley', name: 'Keresley', postcodes: ['CV6'], nearbyAreas: ['Coventry', 'Coundon', 'Radford', 'Whitmore Park', 'Allesley'], hubSlug: 'coventry', geo: { latitude: 52.440, longitude: -1.540 }, streets: ['Keresley Road', 'Brownshill Green Road', 'Mount Nod Way', 'Tamworth Road'] },
  { slug: 'longford', name: 'Longford', postcodes: ['CV6'], nearbyAreas: ['Coventry', 'Holbrooks', 'Rowley Green', 'Wood End', 'Bell Green'], hubSlug: 'coventry', geo: { latitude: 52.440, longitude: -1.460 }, streets: ['Longford Road', 'Foleshill Road', 'Bedworth Road', 'Brinton Road'] },
  { slug: 'radford', name: 'Radford', postcodes: ['CV6'], nearbyAreas: ['Coventry', 'Foleshill', 'Holbrooks', 'Coundon', 'City Centre'], hubSlug: 'coventry', geo: { latitude: 52.42, longitude: -1.51 }, streets: ['Radford Road', 'Moseley Avenue', 'Broadgate'] },
  { slug: 'stoke', name: 'Stoke', postcodes: ['CV2', 'CV3'], nearbyAreas: ['Coventry', 'Wyken', 'Binley', 'Gosford Green', 'City Centre'], hubSlug: 'coventry', geo: { latitude: 52.415, longitude: -1.48 }, streets: ['Walsgrave Road', 'Stoke Green', 'Briton Road'] },
  { slug: 'tile-hill', name: 'Tile Hill', postcodes: ['CV4'], nearbyAreas: ['Canley', 'Coventry', 'Earlsdon', 'Westwood Heath', 'Birmingham'], hubSlug: 'coventry', geo: { latitude: 52.395, longitude: -1.56 }, streets: ['Tile Hill Lane', 'Jardine Crescent', 'Broad Lane'] },
  { slug: 'walsgrave', name: 'Walsgrave', postcodes: ['CV2'], nearbyAreas: ['Coventry', 'Wyken', 'Wood End', 'Stoke', 'Binley'], hubSlug: 'coventry', geo: { latitude: 52.420, longitude: -1.430 }, streets: ['Walsgrave Road', 'Hinckley Road', 'Ansty Road', 'Clifford Road'] },
  { slug: 'wyken', name: 'Wyken', postcodes: ['CV2'], nearbyAreas: ['Coventry', 'Stoke', 'Binley', 'Bell Green', 'Walsgrave'], hubSlug: 'coventry', geo: { latitude: 52.425, longitude: -1.47 }, streets: ['Wyken Croft', 'Ansty Road', 'Hinckley Road'] },

  // Wolverhampton
  { slug: 'bilston', name: 'Bilston', postcodes: ['WV14'], nearbyAreas: ['Wolverhampton', 'Willenhall', 'Darlaston', 'Coseley', 'Wednesbury'], hubSlug: 'wolverhampton', geo: { latitude: 52.566, longitude: -2.074 }, streets: ['High Street', 'Church Street', 'Oxford Street'] },
  { slug: 'bushbury', name: 'Bushbury', postcodes: ['WV10'], nearbyAreas: ['Wolverhampton', 'Oxley', 'Wednesfield', 'Fordhouses', 'Heath Town'], hubSlug: 'wolverhampton', geo: { latitude: 52.61, longitude: -2.12 }, streets: ['Bushbury Lane', 'Cannock Road', 'Three Tuns Lane'] },
  { slug: 'compton', name: 'Compton', postcodes: ['WV3'], nearbyAreas: ['Wolverhampton', 'Tettenhall', 'Finchfield', 'Penn', 'Merridale'], hubSlug: 'wolverhampton', geo: { latitude: 52.597, longitude: -2.125 }, streets: ['Compton Road', 'Park Road', 'Finchfield Road', 'Wood Road'] },
  { slug: 'ettingshall', name: 'Ettingshall', postcodes: ['WV2'], nearbyAreas: ['Wolverhampton', 'Bilston', 'Spring Vale', 'Coseley', 'Sedgley'], hubSlug: 'wolverhampton', geo: { latitude: 52.586, longitude: -2.070 }, streets: ['Ettingshall Road', 'Bilston Road', 'Camp Street', 'Glyn Drive'] },
  { slug: 'fallings-park', name: 'Fallings Park', postcodes: ['WV10'], nearbyAreas: ['Bushbury', 'Dunstall Park', 'Fordhouses', 'Pendeford', 'Ashmore Park'], hubSlug: 'wolverhampton', geo: { latitude: 52.610, longitude: -2.115 }, streets: ['Bushbury Road', 'Pendeford Avenue', 'Dunstall Road', 'Stafford Road'] },
  { slug: 'finchfield', name: 'Finchfield', postcodes: ['WV3'], nearbyAreas: ['Compton', 'Tettenhall', 'Castlecroft', 'Wolverhampton city centre', 'Newbridge'], hubSlug: 'wolverhampton', geo: { latitude: 52.573, longitude: -2.160 }, streets: ['Finchfield Road', 'Jeffcock Road', 'Castlecroft Road', 'Birches Barn Road'] },
  { slug: 'heath-town', name: 'Heath Town', postcodes: ['WV10', 'WV2'], nearbyAreas: ['Wednesfield', 'New Cross', 'Wolverhampton city centre', 'Fallings Park', 'Bushbury'], hubSlug: 'wolverhampton', geo: { latitude: 52.593, longitude: -2.085 }, streets: ['Stafford Road', 'Long Knowle', 'Birch Street', 'New Cross'] },
  { slug: 'low-hill', name: 'Low Hill', postcodes: ['WV10'], nearbyAreas: ['Bushbury', 'Fallings Park', 'Fordhouses', 'Wolverhampton city centre', 'Pendeford'], hubSlug: 'wolverhampton', geo: { latitude: 52.615, longitude: -2.100 }, streets: ['Low Hill Road', 'Stafford Road', 'Bushbury Road', 'Elston Drive'] },
  { slug: 'merry-hill-wolverhampton', name: 'Merry Hill', postcodes: ['WV6'], nearbyAreas: ['Tettenhall', 'Compton', 'Finchfield', 'Wolverhampton city centre', 'Newbridge'], hubSlug: 'wolverhampton', geo: { latitude: 52.587, longitude: -2.155 }, streets: ['Merry Hill Road', 'Finchfield Road', 'Tettenhall Road', 'Wergs Road'] },
  { slug: 'oxley', name: 'Oxley', postcodes: ['WV10'], nearbyAreas: ['Wolverhampton', 'Bushbury', 'Fordhouses', 'Wednesfield', 'Bilston'], hubSlug: 'wolverhampton', geo: { latitude: 52.625, longitude: -2.135 }, streets: ['Oxley Avenue', 'Cannock Road', 'Showell Road'] },
  { slug: 'parkfield', name: 'Parkfield', postcodes: ['WV4'], nearbyAreas: ['Bilston', 'Ettingshall', 'Penn', 'Wolverhampton city centre', 'Bradley'], hubSlug: 'wolverhampton', geo: { latitude: 52.560, longitude: -2.080 }, streets: ['Parkfield Road', 'Bilston Road', 'Ettingshall Road', 'Leopold Street'] },
  { slug: 'penn', name: 'Penn', postcodes: ['WV4'], nearbyAreas: ['Wolverhampton', 'Tettenhall', 'Sedgley', 'Dudley', 'Compton'], hubSlug: 'wolverhampton', geo: { latitude: 52.555, longitude: -2.155 }, streets: ['Penn Road', 'Mount Road', 'Warstones Road'] },
  { slug: 'tettenhall', name: 'Tettenhall', postcodes: ['WV6'], nearbyAreas: ['Wolverhampton', 'Penn', 'Compton', 'Wombourne', 'Codsall'], hubSlug: 'wolverhampton', geo: { latitude: 52.598, longitude: -2.168 }, streets: ['Wergs Road', 'Tettenhall Road', 'Lower Green'] },
  { slug: 'wednesfield', name: 'Wednesfield', postcodes: ['WV11'], nearbyAreas: ['Wolverhampton', 'Willenhall', 'Bushbury', 'Heath Town', 'Bilston'], hubSlug: 'wolverhampton', geo: { latitude: 52.599, longitude: -2.083 }, streets: ['Lichfield Road', 'Bentley Lane', 'Wood End Road'] },
  { slug: 'whitmore-reans', name: 'Whitmore Reans', postcodes: ['WV1', 'WV6'], nearbyAreas: ['Dunstall Park', 'Wolverhampton city centre', 'Tettenhall', 'Penn', 'Newbridge'], hubSlug: 'wolverhampton', geo: { latitude: 52.593, longitude: -2.124 }, streets: ['Whitmore Road', 'Dunstall Road', 'Tettenhall Road', 'Cleveland Road'] },

  // Dudley borough
  { slug: 'amblecote', name: 'Amblecote', postcodes: ['DY8'], nearbyAreas: ['Stourbridge', 'Brierley Hill', 'Kingswinford', 'Lye', 'Dudley'], hubSlug: 'dudley', geo: { latitude: 52.468, longitude: -2.145 }, streets: ['Stourbridge Road', 'Vicarage Road', 'Enville Street'] },
  { slug: 'brierley-hill', name: 'Brierley Hill', postcodes: ['DY5'], nearbyAreas: ['Dudley', 'Stourbridge', 'Netherton', 'Kingswinford', 'Halesowen'], hubSlug: 'dudley', geo: { latitude: 52.481, longitude: -2.121 }, streets: ['High Street', 'Bank Street', 'Mill Street'] },
  { slug: 'coseley', name: 'Coseley', postcodes: ['WV14'], nearbyAreas: ['Bilston', 'Dudley', 'Sedgley', 'Willenhall', 'Tipton'], hubSlug: 'dudley', geo: { latitude: 52.545, longitude: -2.085 }, streets: ['Castle Street', 'Church Road', 'Green Road'] },
  { slug: 'gornal', name: 'Gornal', postcodes: ['DY3'], nearbyAreas: ['Sedgley', 'Dudley', 'Brierley Hill', 'Coseley', 'Stourbridge'], hubSlug: 'dudley', geo: { latitude: 52.528, longitude: -2.125 }, streets: ['Abbey Road', 'Griffiths Avenue', 'Upper Gornal'] },
  { slug: 'kingswinford', name: 'Kingswinford', postcodes: ['DY6'], nearbyAreas: ['Stourbridge', 'Dudley', 'Brierley Hill', 'Wordsley', 'Wombourne'], hubSlug: 'dudley', geo: { latitude: 52.498, longitude: -2.168 }, streets: ['High Street', 'Hagley Road', 'Summer Street'] },
  { slug: 'lye', name: 'Lye', postcodes: ['DY9'], nearbyAreas: ['Stourbridge', 'Amblecote', 'Brierley Hill', 'Halesowen', 'Cradley Heath'], hubSlug: 'dudley', geo: { latitude: 52.458, longitude: -2.11 }, streets: ['High Street', 'Stourbridge Road', 'Pedmore Road'] },
  { slug: 'netherton', name: 'Netherton', postcodes: ['DY2'], nearbyAreas: ['Dudley', 'Brierley Hill', 'Cradley', 'Halesowen', 'Stourbridge'], hubSlug: 'dudley', geo: { latitude: 52.49, longitude: -2.085 }, streets: ['Halesowen Road', 'Netherton High Street', 'Saltwells Road'] },
  { slug: 'pensnett', name: 'Pensnett', postcodes: ['DY5'], nearbyAreas: ['Dudley', 'Kingswinford', 'Brierley Hill', 'Stourbridge', 'Sedgley'], hubSlug: 'dudley', geo: { latitude: 52.498, longitude: -2.127 }, streets: ['Pensnett Road', 'Himley Road', 'Brown Bear Lane', 'Summer Hill'] },
  { slug: 'quarry-bank', name: 'Quarry Bank', postcodes: ['DY5'], nearbyAreas: ['Brierley Hill', 'Kingswinford', 'Dudley', 'Stourbridge', 'Halesowen'], hubSlug: 'dudley', geo: { latitude: 52.478, longitude: -2.102 }, streets: ['Cakemore Road', 'Quarry Bank Road', 'Saltwells Lane', 'Dudley Road'] },
  { slug: 'sedgley', name: 'Sedgley', postcodes: ['DY3'], nearbyAreas: ['Dudley', 'Gornal', 'Coseley', 'Wolverhampton', 'Penn'], hubSlug: 'dudley', geo: { latitude: 52.541, longitude: -2.121 }, streets: ['High Street', 'Bilston Street', 'Tipton Road'] },
  { slug: 'wollaston', name: 'Wollaston', postcodes: ['DY8'], nearbyAreas: ['Stourbridge', 'Amblecote', 'Norton', 'Wordsley', 'Kingswinford'], hubSlug: 'dudley', geo: { latitude: 52.462, longitude: -2.137 }, streets: ['Wollaston Road', 'Bridgnorth Road', 'Ismere Road', 'Cheltenham Road'] },
  { slug: 'wordsley', name: 'Wordsley', postcodes: ['DY8'], nearbyAreas: ['Stourbridge', 'Kingswinford', 'Wollaston', 'Brierley Hill', 'Amblecote'], hubSlug: 'dudley', geo: { latitude: 52.472, longitude: -2.113 }, streets: ['Wordsley Road', 'Glasshouse Hill', 'Kingswinford Road', 'Bridgnorth Road'] },

  // Sandwell
  { slug: 'tipton', name: 'Tipton', postcodes: ['DY4'], nearbyAreas: ['Dudley', 'West Bromwich', 'Wednesbury', 'Coseley', 'Bilston'], hubSlug: 'sandwell', geo: { latitude: 52.53, longitude: -2.065 }, streets: ['Owen Street', 'Dudley Port', 'Horseley Heath'] },
  { slug: 'rowley-regis', name: 'Rowley Regis', postcodes: ['B65'], nearbyAreas: ['Blackheath', 'Oldbury', 'Halesowen', 'West Bromwich', 'Cradley Heath'], hubSlug: 'sandwell', geo: { latitude: 52.485, longitude: -2.045 }, streets: ['Hawes Lane', 'Station Road', 'Newbury Lane'] },
  { slug: 'wednesbury', name: 'Wednesbury', postcodes: ['WS10'], nearbyAreas: ['Darlaston', 'West Bromwich', 'Tipton', 'Walsall', 'Bilston'], hubSlug: 'sandwell', geo: { latitude: 52.552, longitude: -2.023 }, streets: ['High Street', 'Holyhead Road', 'Wood Green'] },
  { slug: 'blackheath', name: 'Blackheath', postcodes: ['B65'], nearbyAreas: ['Rowley Regis', 'Oldbury', 'Halesowen', 'Cradley Heath', 'West Bromwich'], hubSlug: 'sandwell', geo: { latitude: 52.475, longitude: -2.04 }, streets: ['High Street', 'Britannia Road', 'Waterfall Lane'] },
  { slug: 'cradley-heath', name: 'Cradley Heath', postcodes: ['B64'], nearbyAreas: ['Blackheath', 'Oldbury', 'Halesowen', 'Rowley Regis', 'Stourbridge'], hubSlug: 'sandwell', geo: { latitude: 52.465, longitude: -2.07 }, streets: ['High Street', 'Reddal Hill Road', 'Lower High Street'] },
  { slug: 'great-bridge', name: 'Great Bridge', postcodes: ['DY4'], nearbyAreas: ['West Bromwich', 'Tipton', 'Dudley', 'Oldbury', 'Wednesbury'], hubSlug: 'sandwell', geo: { latitude: 52.528, longitude: -2.038 }, streets: ['Great Bridge Street', 'Horseley Road', 'Sheepwash Lane', 'Tame Road'] },
  { slug: 'tividale', name: 'Tividale', postcodes: ['DY4'], nearbyAreas: ['Tipton', 'Dudley', 'Great Bridge', 'West Bromwich', 'Oldbury'], hubSlug: 'sandwell', geo: { latitude: 52.519, longitude: -2.048 }, streets: ['Tividale Road', 'Sedgley Road', 'Castle Gate', 'New Birmingham Road'] },
  { slug: 'warley', name: 'Warley', postcodes: ['B68'], nearbyAreas: ['Oldbury', 'Langley Green', 'Bearwood', 'Smethwick', 'Quinton'], hubSlug: 'sandwell', geo: { latitude: 52.488, longitude: -1.998 }, streets: ['Warley Road', 'St James\'s Road', 'Moat Road', 'Claypit Lane'] },

  // Solihull borough
  { slug: 'balsall-common', name: 'Balsall Common', postcodes: ['CV7'], nearbyAreas: ['Meriden', 'Knowle', 'Solihull', 'Berkswell', 'Kenilworth'], hubSlug: 'solihull', geo: { latitude: 52.385, longitude: -1.655 }, streets: ['Station Road', 'Kenilworth Road', 'Meeting House Lane'] },
  { slug: 'bickenhill', name: 'Bickenhill', postcodes: ['B92'], nearbyAreas: ['NEC', 'Birmingham Airport', 'Solihull', 'Marston Green', 'Hampton-in-Arden'], hubSlug: 'solihull', geo: { latitude: 52.448, longitude: -1.745 }, streets: ['Bickenhill Road', 'Birmingham Road', 'Catherine-de-Barnes Lane', 'Shadowbrook Lane'] },
  { slug: 'chelmsley-wood', name: 'Chelmsley Wood', postcodes: ['B37'], nearbyAreas: ['Marston Green', 'Castle Bromwich', 'Birmingham', 'Kingshurst', 'Fordbridge'], hubSlug: 'solihull', geo: { latitude: 52.478, longitude: -1.735 }, streets: ['Chelmsley Circle', 'Bosworth Drive', 'Marlene Croft'] },
  { slug: 'cranmore', name: 'Cranmore', postcodes: ['B90'], nearbyAreas: ['Shirley', 'Solihull', 'Monkspath', 'Widney Manor', 'Haslucks Green'], hubSlug: 'solihull', geo: { latitude: 52.410, longitude: -1.808 }, streets: ['Cranmore Avenue', 'Stratford Road', 'Haslucks Green Road', 'Monkspath Hall Road'] },
  { slug: 'dickens-heath', name: 'Dickens Heath', postcodes: ['B90'], nearbyAreas: ['Shirley', 'Solihull', 'Blythe Valley', 'Cheswick Green', 'Monkspath'], hubSlug: 'solihull', geo: { latitude: 52.396, longitude: -1.790 }, streets: ['Dickens Heath Road', 'Blythe Way', 'School Lane', 'Stratford Road'] },
  { slug: 'dorridge', name: 'Dorridge', postcodes: ['B93'], nearbyAreas: ['Knowle', 'Solihull', 'Lapworth', 'Hockley Heath', 'Shirley'], hubSlug: 'solihull', geo: { latitude: 52.37, longitude: -1.755 }, streets: ['Station Approach', 'Grange Road', 'Dorridge Road'] },
  { slug: 'elmdon', name: 'Elmdon', postcodes: ['B26'], nearbyAreas: ['Birmingham Airport', 'Solihull', 'Sheldon', 'Marston Green', 'Bickenhill'], hubSlug: 'solihull', geo: { latitude: 52.445, longitude: -1.760 }, streets: ['Elmdon Lane', 'Bickenhill Road', 'Damson Parkway', 'Birmingham Road'] },
  { slug: 'hampton-in-arden', name: 'Hampton in Arden', postcodes: ['B92'], nearbyAreas: ['Solihull', 'Knowle', 'Meriden', 'Balsall Common', 'Coleshill'], hubSlug: 'solihull', geo: { latitude: 52.425, longitude: -1.705 }, streets: ['High Street', 'Foleshill Road', 'Shadow Brook Lane'] },
  { slug: 'hillfield', name: 'Hillfield', postcodes: ['B91'], nearbyAreas: ['Solihull', 'Olton', 'Shirley', 'Monkspath', 'Widney Manor'], hubSlug: 'solihull', geo: { latitude: 52.417, longitude: -1.773 }, streets: ['Hillfield Road', 'Solihull High Street', 'Marsh Lane', 'Lode Lane'] },
  { slug: 'hockley-heath', name: 'Hockley Heath', postcodes: ['B94'], nearbyAreas: ['Dorridge', 'Solihull', 'Lapworth', 'Earlswood', 'Warwick'], hubSlug: 'solihull', geo: { latitude: 52.345, longitude: -1.775 }, streets: ['Warwick Road', 'School Road', 'Nuthurst Road'] },
  { slug: 'knowle', name: 'Knowle', postcodes: ['B93'], nearbyAreas: ['Solihull', 'Dorridge', 'Dickens Heath', 'Hampton in Arden', 'Shirley'], hubSlug: 'solihull', geo: { latitude: 52.385, longitude: -1.735 }, streets: ['High Street', 'Station Road', 'Warwick Road'] },
  { slug: 'marston-green', name: 'Marston Green', postcodes: ['B37'], nearbyAreas: ['Chelmsley Wood', 'Solihull', 'Bickenhill', 'Castle Bromwich', 'Airport'], hubSlug: 'solihull', geo: { latitude: 52.465, longitude: -1.745 }, streets: ['Station Road', 'Land Lane', 'Elmdon Lane'] },
  { slug: 'meriden', name: 'Meriden', postcodes: ['CV7'], nearbyAreas: ['Solihull', 'Balsall Common', 'Coventry', 'Hampton in Arden', 'Berkswell'], hubSlug: 'solihull', geo: { latitude: 52.435, longitude: -1.655 }, streets: ['Main Road', 'Park Lane', 'Maxstoke Lane'] },
  { slug: 'monkspath', name: 'Monkspath', postcodes: ['B90'], nearbyAreas: ['Solihull', 'Shirley', 'Olton', 'Widney Manor', 'Dickens Heath'], hubSlug: 'solihull', geo: { latitude: 52.395, longitude: -1.795 }, streets: ['Monkspath Hall Road', 'Haslucks Green Road', 'Stratford Road', 'Widney Road'] },
  { slug: 'olton', name: 'Olton', postcodes: ['B92'], nearbyAreas: ['Solihull', 'Acocks Green', 'Shirley', 'Elmdon', 'Birmingham'], hubSlug: 'solihull', geo: { latitude: 52.435, longitude: -1.805 }, streets: ['Warwick Road', 'St Bernards Road', 'Lyndon Road'] },
  { slug: 'silhill', name: 'Silhill', postcodes: ['B91'], nearbyAreas: ['Solihull town centre', 'Olton', 'Shirley', 'Hillfield', 'Monkspath'], hubSlug: 'solihull', geo: { latitude: 52.410, longitude: -1.770 }, streets: ['Solihull High Street', 'Station Road', 'Poplar Road', 'Lode Lane'] },
  { slug: 'smiths-wood', name: 'Smiths Wood', postcodes: ['B36'], nearbyAreas: ['Chelmsley Wood', 'Kingshurst', 'Fordbridge', 'Marston Green', 'Castle Vale'], hubSlug: 'solihull', geo: { latitude: 52.495, longitude: -1.750 }, streets: ['Smiths Wood Road', 'Church Way', 'Woodlands Way', 'Kingshurst Way'] },
  { slug: 'solihull-lodge', name: 'Solihull Lodge', postcodes: ['B90'], nearbyAreas: ['Shirley', 'Monkspath', 'Cheswick Green', 'Solihull', 'Hall Green'], hubSlug: 'solihull', geo: { latitude: 52.385, longitude: -1.825 }, streets: ['Solihull Lodge Road', 'Stratford Road', 'Lodge Road', 'Widney Road'] },
  { slug: 'tidbury-green', name: 'Tidbury Green', postcodes: ['B90'], nearbyAreas: ['Shirley', 'Dickens Heath', 'Cheswick Green', 'Monkspath', 'Earlswood'], hubSlug: 'solihull', geo: { latitude: 52.375, longitude: -1.815 }, streets: ['Tidbury Green Road', 'Dickens Heath Road', 'Pilgrims Way', 'Blythe Road'] },

  // Sandwell (not yet in CITIES)
  { slug: 'bearwood', name: 'Bearwood', postcodes: ['B66'], nearbyAreas: ['Smethwick', 'Warley', 'Oldbury', 'Harborne', 'Cape Hill'], hubSlug: 'sandwell', geo: { latitude: 52.478, longitude: -1.969 }, streets: ['Bearwood Road', 'Londonderry Lane', 'Sandwell Road', 'Regent Street'] },
  { slug: 'oldbury', name: 'Oldbury', postcodes: ['B68', 'B69'], nearbyAreas: ['Smethwick', 'West Bromwich', 'Blackheath', 'Rowley Regis', 'Sandwell'], hubSlug: 'sandwell', geo: { latitude: 52.505, longitude: -2.015 }, streets: ['Halesowen Street', 'Freeth Street', 'Crosswells Road'] },
  { slug: 'smethwick', name: 'Smethwick', postcodes: ['B66', 'B67'], nearbyAreas: ['Oldbury', 'West Bromwich', 'Bearwood', 'Handsworth', 'Sandwell'], hubSlug: 'sandwell', geo: { latitude: 52.492, longitude: -1.965 }, streets: ['High Street', 'Bearwood Road', 'Londonderry Lane'] },

  // Birmingham (no dedicated page)
  {
    slug: 'bordesley',
    name: 'Bordesley',
    postcodes: ['B9'],
    nearbyAreas: ['Small Heath', 'Bordesley Green', 'Digbeth', 'Saltley', 'Nechells'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.475, longitude: -1.865 },
    streets: ['Bordesley Street', 'Coventry Road', 'Derby Road', 'Arthur Street'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'bromford',
    name: 'Bromford',
    postcodes: ['B36'],
    nearbyAreas: ['Castle Bromwich', 'Hodge Hill', 'Stechford', 'Washwood Heath', 'Chelmsley Wood'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.500, longitude: -1.790 },
    streets: ['Bromford Lane', 'Henhurst Road', 'Hall Road', 'Newstead Road'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'duddeston',
    name: 'Duddeston',
    postcodes: ['B7'],
    nearbyAreas: ['Nechells', 'Saltley', 'Aston', 'Vauxhall', 'Highgate'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.492, longitude: -1.875 },
    streets: ['Duddeston Manor Road', 'George Arthur Road', 'Cato Street', 'Nechells Park Road'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'fordbridge',
    name: 'Fordbridge',
    postcodes: ['B37'],
    nearbyAreas: ['Kingshurst', 'Chelmsley Wood', 'Marston Green', 'Smiths Wood', 'Bickenhill'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.492, longitude: -1.753 },
    streets: ['Fordbridge Road', 'Bosworth Drive', 'Marlene Croft', 'Pennine Way'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'kingshurst',
    name: 'Kingshurst',
    postcodes: ['B37'],
    nearbyAreas: ['Chelmsley Wood', 'Fordbridge', 'Marston Green', 'Smiths Wood', 'Castle Bromwich'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.488, longitude: -1.752 },
    streets: ['Kingshurst Way', 'Bosworth Drive', 'Marlene Croft', 'Helmswood Drive'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'lea-hall',
    name: 'Lea Hall',
    postcodes: ['B33'],
    nearbyAreas: ['Stechford', 'Kitts Green', 'Sheldon', 'Yardley', 'Bordesley Green'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.485, longitude: -1.780 },
    streets: ['Lea Hall Road', 'Flaxley Road', 'Yew Tree Road', 'Old Lea Hall Road'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'maypole',
    name: 'Maypole',
    postcodes: ['B14'],
    nearbyAreas: ['Kings Heath', 'Warstock', 'Yardley Wood', 'Shirley', 'Dickens Heath'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.400, longitude: -1.844 },
    streets: ['Alcester Road', 'Maypole Lane', 'Billesley Lane', 'School Road'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'oscott',
    name: 'Oscott',
    postcodes: ['B44'],
    nearbyAreas: ['Kingstanding', 'Perry Barr', 'Great Barr', 'Perry Common', 'Hamstead'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.535, longitude: -1.868 },
    streets: ['Oscott Road', 'Aldridge Road', 'Walsall Road', 'Birchdale Road'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'rotton-park',
    name: 'Rotton Park',
    postcodes: ['B16'],
    nearbyAreas: ['Ladywood', 'Edgbaston', 'Jewellery Quarter', 'Winson Green', 'Hockley'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.475, longitude: -1.918 },
    streets: ['Rotton Park Road', 'City Road', 'Icknield Street', 'Monument Road'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'selly-park',
    name: 'Selly Park',
    postcodes: ['B29'],
    nearbyAreas: ['Selly Oak', 'Bournbrook', 'Moseley', 'Harborne', 'Edgbaston'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.445, longitude: -1.910 },
    streets: ['Lonsdale Road', 'Elmfield Road', 'Bournbrook Road', 'Frankland Road'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'south-yardley',
    name: 'South Yardley',
    postcodes: ['B25', 'B26'],
    nearbyAreas: ['Yardley', 'Acocks Green', 'Sheldon', 'Bordesley Green', 'Hay Mills'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.456, longitude: -1.816 },
    streets: ['Westley Road', 'Church Road', 'Stoney Lane', 'Kineton Road'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'summerfield',
    name: 'Summerfield',
    postcodes: ['B19'],
    nearbyAreas: ['Winson Green', 'Ladywood', 'Jewellery Quarter', 'Hockley', 'Newtown'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.493, longitude: -1.918 },
    streets: ['Summerfield Crescent', 'City Road', 'Icknield Street', 'Dudley Road'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'tile-cross',
    name: 'Tile Cross',
    postcodes: ['B33'],
    nearbyAreas: ['Stechford', 'Marston Green', 'Chelmsley Wood', 'Kitts Green', 'Hodge Hill'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.479, longitude: -1.790 },
    streets: ['Tile Cross Road', 'Bosworth Drive', 'Gilson Way', 'Lyttelton Road'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'vauxhall',
    name: 'Vauxhall',
    postcodes: ['B7'],
    nearbyAreas: ['Aston', 'Nechells', 'Duddeston', 'Saltley', 'Birmingham city centre'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.488, longitude: -1.862 },
    streets: ['Vauxhall Road', 'Thimble Mill Lane', 'Miller Street', 'Lichfield Road'],
    priceFrom: 50,
    priceTo: 105,
  },
  {
    slug: 'warstock',
    name: 'Warstock',
    postcodes: ['B14'],
    nearbyAreas: ['Kings Heath', 'Maypole', 'Yardley Wood', 'Shirley', 'Tidbury Green'],
    hubSlug: 'birmingham',
    geo: { latitude: 52.411, longitude: -1.864 },
    streets: ['Warstock Road', 'Alcester Road', 'School Road', 'Yardley Wood Road'],
    priceFrom: 50,
    priceTo: 105,
  },
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
