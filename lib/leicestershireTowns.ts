/**
 * Leicestershire service area (Nov 2026) — gutter cleaning + roof cleaning town pages.
 * Each town carries its own local facts so no two pages read alike. Only state facts that are
 * true of the place; never invent a street address or a job we have not done.
 */
export type LeicsHome =
  | 'victorian-terrace'
  | 'edwardian'
  | 'interwar-semi'
  | 'postwar-estate'
  | 'modern-estate'
  | 'bungalow'
  | 'village-cottage'
  | 'swithland-slate'
  | 'large-detached'
  | 'ex-mining'
  | 'flats'
  | 'commercial';

export type LeicsTrees = 'heavy' | 'medium' | 'light';

export type LeicsTown = {
  slug: string;
  name: string;
  district: string;
  postcodes: string[];
  geo: { latitude: number; longitude: number };
  /** Slugs of neighbouring towns on this list (linked from the page). */
  nearby: string[];
  /** Villages/areas around it that we also cover (plain text). */
  alsoCovers: string[];
  trees: LeicsTrees;
  homes: LeicsHome[];
  /** About the place — 1–2 sentences. */
  intro: string;
  /** What the housing is like. */
  housing: string;
  /** Local reason gutters block here. */
  gutter: string;
  /** Local reason roofs grow moss / need care here. */
  roof: string;
  /** A local landmark or feature line. */
  local: string;
  /** Main-town flag: bigger pages, listed first on the hub. */
  main?: boolean;
};

export const LEICS_TOWNS_1: LeicsTown[] = [
  {
    slug: 'leicester',
    name: 'Leicester',
    district: 'Leicester City',
    postcodes: ['LE1', 'LE2', 'LE3', 'LE4', 'LE5'],
    geo: { latitude: 52.6369, longitude: -1.1398 },
    nearby: ['oadby', 'wigston', 'birstall', 'thurmaston', 'glenfield', 'leicester-forest-east'],
    alsoCovers: ['Clarendon Park', 'Knighton', 'Aylestone', 'Belgrave', 'Evington', 'Humberstone', 'Braunstone', 'Western Park'],
    trees: 'medium',
    homes: ['victorian-terrace', 'interwar-semi', 'postwar-estate', 'flats', 'commercial'],
    main: true,
    intro:
      'Leicester is the largest city in the East Midlands, built along the River Soar and the Grand Union Canal, with neighbourhoods that range from tight Victorian streets to leafy 1930s suburbs.',
    housing:
      'Clarendon Park, Highfields and Belgrave are full of long rows of red-brick Victorian terraces, while Knighton, Evington and Western Park have larger inter-war semis and detached homes. Braunstone and New Parks are mostly post-war council-built houses.',
    gutter:
      'On terraced streets the gutters often run as one shared line across several houses, so a blockage at one outlet can overflow onto the neighbours. Plane and lime trees along Victoria Park, London Road and the ring-road verges drop a lot of leaves each October.',
    roof:
      'Many older Leicester terraces still have their original Welsh slate, which grows moss in the joints on north-facing rear slopes. Inter-war semis in Knighton and Evington usually have clay or concrete tiles that hold algae along the lower courses.',
    local:
      'From the Clock Tower to Abbey Park and the streets around the university, we work right across the city, including student lets and rented terraces where landlords need photo proof of the job.',
  },
  {
    slug: 'loughborough',
    name: 'Loughborough',
    district: 'Charnwood',
    postcodes: ['LE11'],
    geo: { latitude: 52.7721, longitude: -1.2062 },
    nearby: ['shepshed', 'hathern', 'quorn', 'barrow-upon-soar', 'kegworth', 'mountsorrel'],
    alsoCovers: ['Thorpe Acre', 'Shelthorpe', 'Nanpantan', 'Woodthorpe', 'Garendon', 'Storer Road area'],
    trees: 'medium',
    homes: ['victorian-terrace', 'interwar-semi', 'modern-estate', 'flats'],
    main: true,
    intro:
      'Loughborough is the main town of Charnwood, home to Loughborough University and the Carillon war memorial in Queen\'s Park, with Charnwood Forest rising just to the south-west.',
    housing:
      'The streets around Ashby Road and Storer Road are mostly Victorian terraces, many now shared student houses. Thorpe Acre and Shelthorpe have post-war and 1960s estates, and the newer homes at Garendon Park and Nanpantan are larger and more modern.',
    gutter:
      'Student lets often go years without anyone checking the gutters, and by the time a landlord hears about a leak the outlet is packed solid. Homes nearer Nanpantan and the Outwoods sit under big oak and beech trees that fill gutters every autumn.',
    roof:
      'Terraced roofs near the town centre are usually slate, while the 1960s and 70s estates have concrete interlocking tiles that hold thick moss on shaded slopes. Roofs on the forest side of town stay damp for longer and grow moss quickly.',
    local:
      'We clean gutters and roofs for homeowners, student landlords and letting agents across LE11, from the town centre out to Thorpe Acre, Shelthorpe and Nanpantan.',
  },
  {
    slug: 'hinckley',
    name: 'Hinckley',
    district: 'Hinckley and Bosworth',
    postcodes: ['LE10'],
    geo: { latitude: 52.5413, longitude: -1.3735 },
    nearby: ['burbage', 'barwell', 'earl-shilton', 'sharnford', 'stoney-stanton', 'sapcote'],
    alsoCovers: ['Hollycroft', 'Westfield', 'Sketchley', 'Wykin'],
    trees: 'medium',
    homes: ['victorian-terrace', 'interwar-semi', 'postwar-estate', 'modern-estate'],
    main: true,
    intro:
      'Hinckley is a market town in south-west Leicestershire with a long history in hosiery and knitwear, close to the A5 and the M69 and the border with Warwickshire.',
    housing:
      'Around the town centre and Hollycroft you\'ll find Victorian and Edwardian terraces built for factory workers, with 1950s–70s estates further out and large new-build developments on the edges of town towards Barwell and Burbage.',
    gutter:
      'Hollycroft Park and the tree-lined roads near the town centre shed a lot of leaves, and older cast-iron gutters on terraces often have a slight dip that holds silt. New-build estates have shallow gutters that block easily with moss falling off the roof.',
    roof:
      'Hinckley has a lot of concrete-tiled 1960s and 70s roofs, which grow thick moss on north-facing slopes. Older terraces near the centre are slate or clay and need gentle hand-cleaning.',
    local:
      'From Hollycroft to Westfield and Sketchley, we cover all of LE10, including the homes along the Ashby Canal on the edge of town.',
  },
  {
    slug: 'coalville',
    name: 'Coalville',
    district: 'North West Leicestershire',
    postcodes: ['LE67'],
    geo: { latitude: 52.7225, longitude: -1.3704 },
    nearby: ['whitwick', 'hugglescote', 'ravenstone', 'ibstock', 'markfield', 'ashby-de-la-zouch'],
    alsoCovers: ['Thringstone', 'Greenhill', 'Snibston', 'Broom Leys', 'Bardon'],
    trees: 'medium',
    homes: ['ex-mining', 'victorian-terrace', 'postwar-estate', 'modern-estate'],
    main: true,
    intro:
      'Coalville grew up around the coal pits of the 19th century and sits on the western edge of Charnwood Forest, with the former Snibston colliery site now a country park.',
    housing:
      'Much of the older housing is terraced and semi-detached homes built for miners, with large post-war estates at Greenhill and many new-build developments around Broom Leys and towards Hugglescote.',
    gutter:
      'Homes on the Greenhill side back onto open country and Charnwood Forest woodland, so they get a heavy leaf load. Many ex-mining terraces still have old gutters with sagging brackets that hold standing water and silt.',
    roof:
      'Coalville\'s older roofs are a mix of slate and clay tiles, and the post-war estates are largely concrete interlocking tiles. Roofs facing the forest stay damp and grow moss faster than in town.',
    local:
      'We cover the whole of Coalville and its neighbours, from Thringstone and Greenhill to the new estates at Broom Leys and Bardon.',
  },
  {
    slug: 'market-harborough',
    name: 'Market Harborough',
    district: 'Harborough',
    postcodes: ['LE16'],
    geo: { latitude: 52.4775, longitude: -0.9206 },
    nearby: ['kibworth-harcourt', 'kibworth-beauchamp', 'great-glen', 'fleckney', 'lutterworth'],
    alsoCovers: ['Little Bowden', 'Great Bowden', 'Lubenham', 'Foxton'],
    trees: 'heavy',
    homes: ['village-cottage', 'victorian-terrace', 'large-detached', 'modern-estate'],
    main: true,
    intro:
      'Market Harborough is a historic market town on the River Welland, known for its 1614 Old Grammar School standing on wooden pillars in the town centre.',
    housing:
      'The town centre has Georgian and Victorian buildings, many of them listed, while Little Bowden and the roads off Northampton Road have large period and inter-war houses. Newer estates have grown up on the north and west of the town.',
    gutter:
      'Market Harborough is a very green town, with mature trees in Welland Park and along the Leicester Road. Older properties often have period cast-iron or ogee gutters that need careful cleaning rather than heavy force.',
    roof:
      'Period homes here often have Welsh slate or handmade clay tiles, which need a gentle, low-pressure approach. Newer estates have concrete tiles that hold algae on shaded rear slopes.',
    local:
      'We work across LE16, including the conservation area in the town centre, Little Bowden, Great Bowden and the villages towards Foxton Locks.',
  },
  {
    slug: 'melton-mowbray',
    name: 'Melton Mowbray',
    district: 'Melton',
    postcodes: ['LE13', 'LE14'],
    geo: { latitude: 52.765, longitude: -0.886 },
    nearby: ['syston', 'queniborough', 'thurmaston'],
    alsoCovers: ['Asfordby', 'Thorpe Arnold', 'Sysonby', 'Craven Lodge area'],
    trees: 'medium',
    homes: ['victorian-terrace', 'interwar-semi', 'postwar-estate', 'village-cottage'],
    main: true,
    intro:
      'Melton Mowbray is the market town famous for pork pies and Stilton cheese, set where the River Eye meets the River Wreake in the east of the county.',
    housing:
      'The town centre around St Mary\'s Church has old stone and brick buildings, with Victorian terraces off Snow Hill and the Burton Road, and post-war estates and new developments on the north and east sides of town.',
    gutter:
      'Homes near the Play Close, Egerton Park and the river paths sit under large trees, and the town\'s older gutters often discharge into narrow downpipes that block with leaf mush.',
    roof:
      'Older roofs in Melton are often Welsh slate or clay tiles, while the estates are concrete tiles that grow moss on the north side. Open countryside around the town brings plenty of airborne spores.',
    local:
      'We cover Melton Mowbray and the surrounding LE13 and LE14 villages, including Asfordby and Thorpe Arnold.',
  },
  {
    slug: 'ashby-de-la-zouch',
    name: 'Ashby-de-la-Zouch',
    district: 'North West Leicestershire',
    postcodes: ['LE65'],
    geo: { latitude: 52.7457, longitude: -1.4757 },
    nearby: ['measham', 'coalville', 'ravenstone', 'castle-donington', 'ibstock'],
    alsoCovers: ['Packington', 'Blackfordby', 'Smisby', 'Willesley'],
    trees: 'heavy',
    homes: ['village-cottage', 'victorian-terrace', 'large-detached', 'modern-estate'],
    main: true,
    intro:
      'Ashby-de-la-Zouch is a historic market town known for the ruins of Ashby Castle, sitting in the heart of the National Forest.',
    housing:
      'Market Street and the conservation area have Georgian and Victorian buildings, many of them listed, with larger detached homes on the roads out of town and several big new-build estates on the north and west sides.',
    gutter:
      'Being in the National Forest means a lot of young and mature trees close to homes, so Ashby gutters fill with leaves, seeds and twigs every year, especially near Hood Park and the Willesley side.',
    roof:
      'Listed and period roofs in the centre often have Welsh slate or clay tiles, and need a soft, careful clean. New-build estates use concrete tiles that grow moss on shaded slopes.',
    local:
      'We cover all of LE65, from the town centre and Ashby Castle out to Packington, Blackfordby and the newer estates around the bypass.',
  },
  {
    slug: 'lutterworth',
    name: 'Lutterworth',
    district: 'Harborough',
    postcodes: ['LE17'],
    geo: { latitude: 52.4559, longitude: -1.2004 },
    nearby: ['broughton-astley', 'market-harborough', 'cosby', 'sharnford'],
    alsoCovers: ['Bitteswell', 'Magna Park', 'Gilmorton', 'Misterton'],
    trees: 'medium',
    homes: ['village-cottage', 'interwar-semi', 'modern-estate', 'commercial'],
    main: true,
    intro:
      'Lutterworth is a small market town in the far south of the county near junction 20 of the M1, where Frank Whittle developed the jet engine and close to the Magna Park distribution hub.',
    housing:
      'The old town centre has Georgian and Victorian buildings, with inter-war and post-war homes around it and a large amount of new-build housing on the east side of town.',
    gutter:
      'New estates in Lutterworth have shallow uPVC gutters that block quickly when moss falls from the roof. Older homes near the church and the River Swift have more trees around them.',
    roof:
      'The newer homes mostly have concrete tiles, which hold algae on north-facing slopes. Period roofs in the centre are slate or clay and need a gentle hand clean.',
    local:
      'We cover Lutterworth and the LE17 villages around it, and also take on commercial and warehouse gutters in the Magna Park area.',
  },
  {
    slug: 'oadby',
    name: 'Oadby',
    district: 'Oadby and Wigston',
    postcodes: ['LE2'],
    geo: { latitude: 52.606, longitude: -1.079 },
    nearby: ['wigston', 'leicester', 'great-glen', 'scraptoft', 'glen-parva'],
    alsoCovers: ['Stoughton', 'Brocks Hill', 'Glen Road area'],
    trees: 'heavy',
    homes: ['interwar-semi', 'large-detached', 'bungalow', 'modern-estate'],
    main: true,
    intro:
      'Oadby is a leafy town on the south-east edge of Leicester, home to the University of Leicester Botanic Garden and Brocks Hill Country Park.',
    housing:
      'Oadby is known for large inter-war semis and detached houses on roads like the Leicester Road, Stoughton Road and Glen Road, with many bungalows and some newer homes on the edges of town.',
    gutter:
      'Big gardens and mature trees are part of what makes Oadby attractive, but they also mean heavy leaf fall. Large detached homes often have long gutter runs with several corners where debris collects.',
    roof:
      'Inter-war roofs in Oadby are usually clay plain tiles or rosemary-style tiles, which grow moss and lichen in the gaps. Tall trees shading the rear slopes keep them damp.',
    local:
      'We work across Oadby, from the Botanic Garden area and Stoughton Road to the homes around Brocks Hill Country Park.',
  },
  {
    slug: 'wigston',
    name: 'Wigston',
    district: 'Oadby and Wigston',
    postcodes: ['LE18'],
    geo: { latitude: 52.5866, longitude: -1.105 },
    nearby: ['oadby', 'glen-parva', 'countesthorpe', 'blaby', 'leicester'],
    alsoCovers: ['Wigston Magna', 'South Wigston', 'Wigston Fields', 'Kilby Bridge'],
    trees: 'medium',
    homes: ['victorian-terrace', 'interwar-semi', 'postwar-estate', 'bungalow'],
    main: true,
    intro:
      'Wigston, including Wigston Magna, South Wigston and Wigston Fields, sits just south of Leicester with the Grand Union Canal running along its western side.',
    housing:
      'South Wigston has long streets of Victorian terraces built for railway and factory workers, while Wigston Fields and Wigston Magna have inter-war semis, bungalows and post-war estates.',
    gutter:
      'Terraces in South Wigston often share a single gutter line between houses, so one blocked outlet causes problems next door. Homes near the canal and Blaby Road Park get leaves and seeds from the trees along the water.',
    roof:
      'The terraces in South Wigston have a lot of Welsh slate, which grows moss in the joints. The 1950s and 60s homes in Wigston Magna mostly have concrete tiles that hold algae.',
    local:
      'We cover all of LE18 — Wigston Magna, South Wigston and Wigston Fields — and the homes near Kilby Bridge on the canal.',
  },
  {
    slug: 'earl-shilton',
    name: 'Earl Shilton',
    district: 'Hinckley and Bosworth',
    postcodes: ['LE9'],
    geo: { latitude: 52.576, longitude: -1.313 },
    nearby: ['barwell', 'hinckley', 'desford', 'stoney-stanton', 'huncote'],
    alsoCovers: ['Kirkby Mallory', 'Thurlaston', 'Elmesthorpe'],
    trees: 'light',
    homes: ['victorian-terrace', 'postwar-estate', 'modern-estate', 'bungalow'],
    intro:
      'Earl Shilton is a hillside town between Hinckley and Leicester, with a long history in boot and shoe making and hosiery.',
    housing:
      'Older terraces climb the hill around the High Street and Wood Street, with post-war estates and newer developments spreading out towards the bypass.',
    gutter:
      'Because the town sits on high ground, wind blows leaves and litter from the open fields into gutters. Older terraces have gutter runs that dip between houses and hold silt.',
    roof:
      'Exposed hillside roofs here get a lot of wind-blown spores, and the concrete tiles on post-war estates often grow moss along the lower courses.',
    local:
      'We cover Earl Shilton and the nearby villages of Kirkby Mallory, Thurlaston and Elmesthorpe.',
  },
  {
    slug: 'shepshed',
    name: 'Shepshed',
    district: 'Charnwood',
    postcodes: ['LE12'],
    geo: { latitude: 52.7714, longitude: -1.295 },
    nearby: ['loughborough', 'hathern', 'whitwick', 'kegworth'],
    alsoCovers: ['Belton', 'Long Whatton', 'Charley'],
    trees: 'medium',
    homes: ['victorian-terrace', 'postwar-estate', 'modern-estate', 'bungalow'],
    intro:
      'Shepshed is a large town just west of Loughborough, next to junction 23 of the M1 and on the northern edge of Charnwood Forest.',
    housing:
      'The old centre has Victorian terraces and older stone cottages, while most of the town is post-war and modern estate housing built as it grew.',
    gutter:
      'Homes on the south side of Shepshed are close to the woodland of Charnwood Forest, so they get leaves, pine needles and seeds in their gutters.',
    roof:
      'Many Shepshed estates have concrete interlocking tiles that grow thick moss, and roofs near the forest stay damp long into the spring.',
    local:
      'We cover all of Shepshed, from the old town centre to the estates near the M1 and the forest side of town.',
  },
  {
    slug: 'mountsorrel',
    name: 'Mountsorrel',
    district: 'Charnwood',
    postcodes: ['LE12'],
    geo: { latitude: 52.723, longitude: -1.15 },
    nearby: ['quorn', 'rothley', 'sileby', 'barrow-upon-soar', 'syston'],
    alsoCovers: ['Swithland', 'Castle Hill area', 'Rothley Plain'],
    trees: 'medium',
    homes: ['swithland-slate', 'village-cottage', 'postwar-estate', 'modern-estate'],
    intro:
      'Mountsorrel is a large village on the River Soar, known for its pink granite quarry and the Butter Market in the village centre.',
    housing:
      'The older village has stone and brick cottages, many built using local granite, with post-war housing and large new-build estates around the edges.',
    gutter:
      'Homes near the river and the Castle Hill woodland get a lot of leaves, and older cottages have small, low gutters that overflow quickly.',
    roof:
      'Some of the older properties have Swithland slate roofs — the heavy local slate from Charnwood — which need a gentle hand clean. Newer homes mostly have concrete tiles.',
    local:
      'We cover Mountsorrel, Swithland and the new estates between the village and Rothley.',
  },
  {
    slug: 'broughton-astley',
    name: 'Broughton Astley',
    district: 'Harborough',
    postcodes: ['LE9'],
    geo: { latitude: 52.529, longitude: -1.221 },
    nearby: ['cosby', 'lutterworth', 'sapcote', 'stoney-stanton', 'countesthorpe'],
    alsoCovers: ['Sutton in the Elms', 'Primethorpe', 'Frolesworth'],
    trees: 'light',
    homes: ['modern-estate', 'bungalow', 'village-cottage', 'interwar-semi'],
    intro:
      'Broughton Astley is one of the largest villages in Leicestershire, made up of Broughton Astley, Sutton in the Elms and Primethorpe, and lies between Leicester and Lutterworth.',
    housing:
      'Most homes here were built from the 1960s onwards, with large modern estates, many bungalows, and a small older core of cottages around the church.',
    gutter:
      'Modern estate homes have shallow uPVC gutters, and when roof moss washes down it quickly blocks the outlets. Bungalows are easy to reach but often have long runs that collect debris.',
    roof:
      'Concrete interlocking tiles are the main roof type here and grow moss on north-facing slopes, especially on homes backing onto open fields.',
    local:
      'We cover Broughton Astley, Sutton in the Elms and Primethorpe, plus the villages towards Frolesworth.',
  },
  {
    slug: 'syston',
    name: 'Syston',
    district: 'Charnwood',
    postcodes: ['LE7'],
    geo: { latitude: 52.699, longitude: -1.075 },
    nearby: ['thurmaston', 'queniborough', 'sileby', 'rothley', 'birstall'],
    alsoCovers: ['Barkby', 'Cossington', 'East Goscote'],
    trees: 'medium',
    homes: ['victorian-terrace', 'postwar-estate', 'modern-estate', 'bungalow'],
    intro:
      'Syston is a small town north-east of Leicester, close to where the River Wreake joins the River Soar.',
    housing:
      'The centre has Victorian terraces and older brick houses, with post-war estates and a lot of new-build housing on the edges of town.',
    gutter:
      'Homes near the river and the green spaces around the town get leaves and seeds from willows and poplars, which clog gutter outlets in autumn.',
    roof:
      'Victorian homes in the centre often have slate roofs, and the newer estates mostly have concrete tiles that hold moss on the shaded side.',
    local:
      'We cover Syston and the nearby villages of Barkby, Cossington and East Goscote.',
  },
];

export const LEICS_TOWNS_2: LeicsTown[] = [
  {
    slug: 'blaby',
    name: 'Blaby',
    district: 'Blaby',
    postcodes: ['LE8'],
    geo: { latitude: 52.576, longitude: -1.164 },
    nearby: ['whetstone', 'countesthorpe', 'glen-parva', 'wigston', 'enderby'],
    alsoCovers: ['Blaby village centre', 'Northfield Park', 'Glen Hills'],
    trees: 'medium',
    homes: ['village-cottage', 'interwar-semi', 'postwar-estate', 'bungalow'],
    intro:
      'Blaby is a large village just south of Leicester that gives its name to Blaby District.',
    housing:
      'There is a small old core of brick cottages around All Saints Church, surrounded by inter-war semis, post-war estates and many bungalows.',
    gutter:
      'Homes near the brook and the green spaces at the edge of the village get leaves from willow and ash trees, and bungalows often have long, flat gutter runs that hold water.',
    roof:
      'Most Blaby roofs are concrete tiles from the 1950s–80s, which grow moss along the bottom edge where water runs off.',
    local:
      'We cover Blaby village and the surrounding estates, including Northfield Park and Glen Hills.',
  },
  {
    slug: 'birstall',
    name: 'Birstall',
    district: 'Charnwood',
    postcodes: ['LE4'],
    geo: { latitude: 52.675, longitude: -1.12 },
    nearby: ['thurmaston', 'leicester', 'rothley', 'anstey', 'syston'],
    alsoCovers: ['Wanlip', 'Hallam Fields', 'Watermead'],
    trees: 'heavy',
    homes: ['interwar-semi', 'postwar-estate', 'bungalow', 'modern-estate'],
    intro:
      'Birstall sits on the northern edge of Leicester beside Watermead Country Park and the River Soar.',
    housing:
      'Birstall is mostly inter-war and post-war semis and bungalows, with newer homes at Hallam Fields towards Thurcaston.',
    gutter:
      'Being next to Watermead Country Park means plenty of willow, alder and poplar trees nearby, and their seeds and leaves clog gutters in spring as well as autumn.',
    roof:
      'The damp air from the lakes and river helps moss and algae grow on Birstall roofs, especially concrete tiles on north-facing slopes.',
    local:
      'We cover Birstall, Wanlip and the new homes at Hallam Fields.',
  },
  {
    slug: 'thurmaston',
    name: 'Thurmaston',
    district: 'Charnwood',
    postcodes: ['LE4'],
    geo: { latitude: 52.673, longitude: -1.096 },
    nearby: ['birstall', 'syston', 'leicester', 'queniborough', 'scraptoft'],
    alsoCovers: ['Thurmaston Lock', 'Hamilton', 'Barkby Thorpe'],
    trees: 'medium',
    homes: ['interwar-semi', 'postwar-estate', 'modern-estate', 'commercial'],
    intro:
      'Thurmaston lies between Leicester and Syston on the old Fosse Way, with Watermead Country Park and the River Soar on its western side.',
    housing:
      'Most homes are inter-war and post-war semis, with new estates growing towards Barkby Thorpe and a lot of retail and industrial units along the main road.',
    gutter:
      'Homes on the river side of Thurmaston get leaves and seeds from the trees around Watermead, while busy main-road homes collect dust and grit in the gutters.',
    roof:
      'Concrete tiles are the most common roof here, and moss builds up on shaded slopes, especially near the river and the lakes.',
    local:
      'We cover Thurmaston, the area around Thurmaston Lock and the new homes towards Barkby Thorpe, plus shops and units on the main road.',
  },
  {
    slug: 'anstey',
    name: 'Anstey',
    district: 'Charnwood',
    postcodes: ['LE7'],
    geo: { latitude: 52.673, longitude: -1.189 },
    nearby: ['groby', 'glenfield', 'birstall', 'ratby', 'rothley'],
    alsoCovers: ['Cropston', 'Thurcaston', 'Newtown Linford'],
    trees: 'heavy',
    homes: ['swithland-slate', 'village-cottage', 'postwar-estate', 'bungalow'],
    intro:
      'Anstey is a large village north-west of Leicester, close to Bradgate Park and the edge of Charnwood Forest.',
    housing:
      'The old village has stone and brick cottages, some with Swithland slate roofs, surrounded by post-war estates and bungalows.',
    gutter:
      'Anstey is close to the woodland around Bradgate Park, so homes get a heavy load of leaves, twigs and seeds, especially on the Cropston side.',
    roof:
      'Older cottages may have Swithland slate, which is thick and heavy and needs a soft hand clean. Many estate homes have concrete tiles that grow moss under trees.',
    local:
      'We cover Anstey and the villages near Bradgate Park, including Cropston, Thurcaston and Newtown Linford.',
  },
  {
    slug: 'barwell',
    name: 'Barwell',
    district: 'Hinckley and Bosworth',
    postcodes: ['LE9'],
    geo: { latitude: 52.565, longitude: -1.344 },
    nearby: ['earl-shilton', 'hinckley', 'burbage', 'stoney-stanton'],
    alsoCovers: ['Stapleton', 'Barwell Lane area'],
    trees: 'light',
    homes: ['victorian-terrace', 'postwar-estate', 'modern-estate', 'bungalow'],
    intro:
      'Barwell is a large village just north of Hinckley, known for the meteorite that landed there on Christmas Eve 1965.',
    housing:
      'The older streets have Victorian terraces from Barwell\'s boot and shoe days, with post-war estates and a large new development on the edge of the village.',
    gutter:
      'Barwell is surrounded by open fields, so wind blows leaves, seeds and dust into gutters. Older terraces have shared gutter runs that block between houses.',
    roof:
      'Roofs here are mostly concrete tiles and older slate, and exposed slopes facing the fields pick up a lot of moss and lichen.',
    local:
      'We cover Barwell, Stapleton and the new estates between Barwell and Earl Shilton.',
  },
  {
    slug: 'burbage',
    name: 'Burbage',
    district: 'Hinckley and Bosworth',
    postcodes: ['LE10'],
    geo: { latitude: 52.53, longitude: -1.35 },
    nearby: ['hinckley', 'sharnford', 'barwell', 'sapcote'],
    alsoCovers: ['Sketchley', 'Burbage Common area', 'Aston Flamville'],
    trees: 'heavy',
    homes: ['interwar-semi', 'large-detached', 'bungalow', 'modern-estate'],
    intro:
      'Burbage is a large village joined to the south-east side of Hinckley, next to Burbage Common and Woods.',
    housing:
      'Burbage has a mix of older village houses, inter-war semis, large detached homes and bungalows, with newer estates around Sketchley.',
    gutter:
      'Homes near Burbage Common and Woods get a heavy leaf load, and big gardens with mature trees mean long gutter runs full of debris each autumn.',
    roof:
      'The woodland keeps the air damp, so moss grows well on Burbage roofs, especially concrete tiles on the shaded side.',
    local:
      'We cover Burbage, Sketchley and the homes around Burbage Common, plus Aston Flamville.',
  },
  {
    slug: 'castle-donington',
    name: 'Castle Donington',
    district: 'North West Leicestershire',
    postcodes: ['DE74'],
    geo: { latitude: 52.842, longitude: -1.338 },
    nearby: ['kegworth', 'hathern', 'ashby-de-la-zouch', 'shepshed'],
    alsoCovers: ['Isley Walton', 'Hemington', 'Lockington'],
    trees: 'medium',
    homes: ['village-cottage', 'postwar-estate', 'modern-estate', 'commercial'],
    intro:
      'Castle Donington is a large village in the far north of the county, next to East Midlands Airport and the Donington Park race circuit.',
    housing:
      'The old village centre has brick cottages and listed buildings, with post-war estates and large new-build developments built for people working at the airport and nearby distribution parks.',
    gutter:
      'Open land around the village means wind-blown debris, and new estates have shallow gutters that block easily when roof moss falls into them.',
    roof:
      'Older cottages often have clay tiles, and newer estates have concrete tiles. Exposed roofs pick up a lot of algae and lichen.',
    local:
      'We cover Castle Donington and nearby Hemington, Lockington and Isley Walton, and take on commercial units near the airport.',
  },
  {
    slug: 'ibstock',
    name: 'Ibstock',
    district: 'North West Leicestershire',
    postcodes: ['LE67'],
    geo: { latitude: 52.687, longitude: -1.399 },
    nearby: ['coalville', 'ravenstone', 'hugglescote', 'barlestone', 'measham'],
    alsoCovers: ['Heather', 'Ellistown', 'Battram'],
    trees: 'light',
    homes: ['ex-mining', 'postwar-estate', 'modern-estate', 'bungalow'],
    intro:
      'Ibstock is a former mining village south of Coalville, best known as the home of Ibstock brick.',
    housing:
      'Many homes are terraces and semis built for miners and brickworkers, with large post-war estates and newer homes on the edges of the village.',
    gutter:
      'Older terraces here often have tired gutters with dropped brackets, so water sits in the low spots and silt builds up. Homes near the open fields get wind-blown leaves.',
    roof:
      'Roofs are a mix of older slate and clay tiles and many concrete tiles on the estates, which grow moss on the northern side.',
    local:
      'We cover Ibstock and the nearby villages of Heather, Ellistown and Battram.',
  },
  {
    slug: 'measham',
    name: 'Measham',
    district: 'North West Leicestershire',
    postcodes: ['DE12'],
    geo: { latitude: 52.706, longitude: -1.508 },
    nearby: ['ashby-de-la-zouch', 'ibstock', 'coalville'],
    alsoCovers: ['Oakthorpe', 'Donisthorpe', 'Swepstone'],
    trees: 'heavy',
    homes: ['ex-mining', 'village-cottage', 'postwar-estate', 'modern-estate'],
    intro:
      'Measham is a former mining village in the National Forest, on the line of the old Ashby Canal and known for its Measham teapots.',
    housing:
      'The village has older brick terraces and cottages, post-war estates, and newer homes built as the area recovered from mining.',
    gutter:
      'National Forest planting means young woodland close to many homes, and those trees drop leaves and seeds straight into the gutters.',
    roof:
      'Older terraces have slate and clay roofs, and estate homes have concrete tiles. Damp air from the woodland helps moss grow quickly.',
    local:
      'We cover Measham and nearby Oakthorpe, Donisthorpe and Swepstone.',
  },
  {
    slug: 'market-bosworth',
    name: 'Market Bosworth',
    district: 'Hinckley and Bosworth',
    postcodes: ['CV13'],
    geo: { latitude: 52.624, longitude: -1.4 },
    nearby: ['barlestone', 'newbold-verdon', 'desford', 'ibstock'],
    alsoCovers: ['Carlton', 'Cadeby', 'Sutton Cheney', 'Shenton'],
    trees: 'heavy',
    homes: ['village-cottage', 'large-detached', 'victorian-terrace', 'modern-estate'],
    intro:
      'Market Bosworth is a small market town known for Bosworth Hall, the Ashby Canal and the nearby site of the Battle of Bosworth.',
    housing:
      'The town centre is a conservation area with Georgian and Victorian buildings around the Market Place, and larger detached homes on the roads out of town.',
    gutter:
      'Bosworth Country Park and the tree-lined roads bring heavy leaf fall, and period buildings often have cast-iron gutters that need careful handling.',
    roof:
      'Many old roofs here are Welsh slate or handmade clay tiles on listed buildings, so we use gentle hand-cleaning and soft-wash methods only.',
    local:
      'We cover Market Bosworth and the villages around it, including Carlton, Cadeby, Sutton Cheney and Shenton.',
  },
  {
    slug: 'markfield',
    name: 'Markfield',
    district: 'Hinckley and Bosworth',
    postcodes: ['LE67'],
    geo: { latitude: 52.688, longitude: -1.275 },
    nearby: ['groby', 'ratby', 'coalville', 'anstey', 'desford'],
    alsoCovers: ['Stanton under Bardon', 'Field Head', 'Copt Oak'],
    trees: 'heavy',
    homes: ['village-cottage', 'postwar-estate', 'modern-estate', 'bungalow'],
    intro:
      'Markfield is a hilltop village on the edge of Charnwood Forest, close to junction 22 of the M1.',
    housing:
      'The village has older stone and brick cottages, post-war housing and some larger newer estates.',
    gutter:
      'Markfield is high and exposed, close to the Charnwood Forest woodland, so gutters fill with leaves, twigs and moss blown from nearby trees.',
    roof:
      'Hilltop roofs here catch a lot of rain and wind-blown spores, and the shaded side grows thick moss, especially on concrete tiles.',
    local:
      'We cover Markfield, Field Head, Stanton under Bardon and Copt Oak.',
  },
  {
    slug: 'groby',
    name: 'Groby',
    district: 'Hinckley and Bosworth',
    postcodes: ['LE6'],
    geo: { latitude: 52.662, longitude: -1.228 },
    nearby: ['ratby', 'anstey', 'glenfield', 'markfield', 'kirby-muxloe'],
    alsoCovers: ['Field Head', 'Sacheverell Way area'],
    trees: 'heavy',
    homes: ['village-cottage', 'postwar-estate', 'bungalow', 'modern-estate'],
    intro:
      'Groby is a village north-west of Leicester, known for Groby Pool, one of the largest natural lakes in the county.',
    housing:
      'The old village has stone and brick cottages near the church and the old Groby Old Hall, with post-war estates, bungalows and newer homes around it.',
    gutter:
      'Groby Pool and the woodland around it bring a lot of leaves and seeds, and homes near the old quarry and the A50 get extra wind-blown debris.',
    roof:
      'The damp air from Groby Pool and the woods helps moss grow on roofs, especially concrete tiles on north-facing slopes.',
    local:
      'We cover all of Groby, including the homes near Groby Pool and the estates off Sacheverell Way.',
  },
  {
    slug: 'ratby',
    name: 'Ratby',
    district: 'Hinckley and Bosworth',
    postcodes: ['LE6'],
    geo: { latitude: 52.645, longitude: -1.24 },
    nearby: ['groby', 'kirby-muxloe', 'desford', 'markfield', 'glenfield'],
    alsoCovers: ['Botcheston', 'Martinshaw Wood area'],
    trees: 'heavy',
    homes: ['village-cottage', 'postwar-estate', 'bungalow', 'modern-estate'],
    intro:
      'Ratby is a village west of Leicester, next to Martinshaw Wood and close to the M1.',
    housing:
      'The village has an old centre of brick cottages, with post-war homes, bungalows and some newer housing around the edge.',
    gutter:
      'Homes near Martinshaw Wood get a lot of leaves and twigs, and many bungalows have long gutters that hold debris along their whole length.',
    roof:
      'Being next to woodland keeps Ratby roofs damp, so moss and algae build up on shaded slopes, particularly on concrete tiles.',
    local:
      'We cover Ratby and nearby Botcheston, including the homes along the edge of Martinshaw Wood.',
  },
  {
    slug: 'rothley',
    name: 'Rothley',
    district: 'Charnwood',
    postcodes: ['LE7'],
    geo: { latitude: 52.709, longitude: -1.135 },
    nearby: ['mountsorrel', 'quorn', 'birstall', 'syston', 'anstey'],
    alsoCovers: ['Swithland', 'Thurcaston', 'Rothley Plain'],
    trees: 'heavy',
    homes: ['swithland-slate', 'large-detached', 'village-cottage', 'interwar-semi'],
    intro:
      'Rothley is an attractive village north of Leicester, with a station on the Great Central Railway heritage line and the historic Rothley Court.',
    housing:
      'Rothley has many large detached homes, older cottages around the village green and church, and some inter-war and post-war houses.',
    gutter:
      'Large gardens and mature trees are typical of Rothley, so gutters fill quickly in autumn, and big detached houses have long gutter runs with many corners.',
    roof:
      'Some older Rothley homes have Swithland slate roofs, which need a gentle hand clean. Others have clay tiles that grow moss under the trees.',
    local:
      'We cover Rothley, Rothley Plain, Swithland and Thurcaston.',
  },
  {
    slug: 'quorn',
    name: 'Quorn',
    district: 'Charnwood',
    postcodes: ['LE12'],
    geo: { latitude: 52.744, longitude: -1.17 },
    nearby: ['mountsorrel', 'barrow-upon-soar', 'loughborough', 'rothley', 'sileby'],
    alsoCovers: ['Quorndon', 'Woodhouse', 'Woodhouse Eaves'],
    trees: 'heavy',
    homes: ['swithland-slate', 'village-cottage', 'large-detached', 'modern-estate'],
    intro:
      'Quorn, also called Quorndon, is a village between Loughborough and Leicester with a station on the Great Central Railway and the River Soar running beside it.',
    housing:
      'The village centre has old cottages and larger period houses, with newer estates on the edges and some large detached homes towards Woodhouse.',
    gutter:
      'Quorn is a leafy village close to Charnwood Forest, so many homes have trees right next to them and gutters fill fast in autumn.',
    roof:
      'Older Quorn homes often have Swithland slate or clay tiles, which need careful hand cleaning, and shaded slopes grow thick moss.',
    local:
      'We cover Quorn, Woodhouse and Woodhouse Eaves, on the edge of Charnwood Forest.',
  },
  {
    slug: 'sileby',
    name: 'Sileby',
    district: 'Charnwood',
    postcodes: ['LE12'],
    geo: { latitude: 52.731, longitude: -1.11 },
    nearby: ['barrow-upon-soar', 'mountsorrel', 'syston', 'quorn', 'rothley'],
    alsoCovers: ['Cossington', 'Seagrave', 'Ratcliffe on the Wreake'],
    trees: 'medium',
    homes: ['victorian-terrace', 'postwar-estate', 'modern-estate', 'bungalow'],
    intro:
      'Sileby is a large village in the Soar valley between Leicester and Loughborough, with its own railway station.',
    housing:
      'The village has Victorian terraces from its time as a shoe-making village, plus post-war estates, bungalows and newer homes.',
    gutter:
      'Homes near the River Soar and the brook get leaves and seeds from riverside trees, and terraced homes often share a gutter line that blocks between houses.',
    roof:
      'Victorian homes in Sileby often have slate roofs that grow moss in the joints, and estate homes have concrete tiles.',
    local:
      'We cover Sileby and the nearby villages of Cossington, Seagrave and Ratcliffe on the Wreake.',
  },
  {
    slug: 'barrow-upon-soar',
    name: 'Barrow upon Soar',
    district: 'Charnwood',
    postcodes: ['LE12'],
    geo: { latitude: 52.755, longitude: -1.146 },
    nearby: ['quorn', 'sileby', 'loughborough', 'mountsorrel'],
    alsoCovers: ['Barrow', 'Prestwold', 'Walton on the Wolds'],
    trees: 'medium',
    homes: ['village-cottage', 'victorian-terrace', 'postwar-estate', 'modern-estate'],
    intro:
      'Barrow upon Soar is a village on the River Soar, famous for the fossil plesiosaur found there and known locally as the Barrow Kipper.',
    housing:
      'The old village has brick and stone cottages, with Victorian terraces and post-war and modern estates around it.',
    gutter:
      'Homes near the river, the marina and the riverside trees get a lot of leaves and seeds, and older cottages have small, low gutters.',
    roof:
      'The damp river air means moss grows well on Barrow roofs, both on older slate and clay and on modern concrete tiles.',
    local:
      'We cover Barrow upon Soar and nearby Prestwold and Walton on the Wolds.',
  },
  {
    slug: 'queniborough',
    name: 'Queniborough',
    district: 'Charnwood',
    postcodes: ['LE7'],
    geo: { latitude: 52.7, longitude: -1.036 },
    nearby: ['syston', 'thurmaston', 'melton-mowbray'],
    alsoCovers: ['East Goscote', 'Rearsby', 'Barkby'],
    trees: 'medium',
    homes: ['village-cottage', 'large-detached', 'postwar-estate', 'modern-estate'],
    intro:
      'Queniborough is a village north-east of Leicester, known for the tall spire of St Mary\'s Church, one of the highest in the county.',
    housing:
      'The village has old cottages along the Main Street, larger detached homes, and post-war and newer housing.',
    gutter:
      'Large gardens and mature trees around the old village mean heavy leaf fall, and older cottages have small gutters that fill quickly.',
    roof:
      'Many older homes have clay tiles or slate, and newer homes have concrete tiles, all of which grow moss on the shaded side.',
    local:
      'We cover Queniborough, East Goscote, Rearsby and Barkby.',
  },
  {
    slug: 'kibworth-beauchamp',
    name: 'Kibworth Beauchamp',
    district: 'Harborough',
    postcodes: ['LE8'],
    geo: { latitude: 52.54, longitude: -0.993 },
    nearby: ['kibworth-harcourt', 'fleckney', 'great-glen', 'market-harborough'],
    alsoCovers: ['Smeeton Westerby', 'Tur Langton'],
    trees: 'medium',
    homes: ['village-cottage', 'victorian-terrace', 'modern-estate', 'bungalow'],
    intro:
      'Kibworth Beauchamp is the larger of the two Kibworth villages, south-east of Leicester between the A6 and the Grand Union Canal.',
    housing:
      'The village has old cottages and Victorian houses in the centre, with many new estates built in recent years on the edges.',
    gutter:
      'New-build homes here have shallow gutters that block with moss and leaves, and older cottages often have cast-iron gutters with tired joints.',
    roof:
      'Concrete tiles on the new estates hold algae, and older roofs are slate or clay that need a careful hand clean.',
    local:
      'We cover Kibworth Beauchamp, Smeeton Westerby and Tur Langton.',
  },
  {
    slug: 'kibworth-harcourt',
    name: 'Kibworth Harcourt',
    district: 'Harborough',
    postcodes: ['LE8'],
    geo: { latitude: 52.546, longitude: -0.997 },
    nearby: ['kibworth-beauchamp', 'great-glen', 'fleckney', 'market-harborough'],
    alsoCovers: ['Carlton Curlieu', 'Wistow'],
    trees: 'medium',
    homes: ['village-cottage', 'large-detached', 'modern-estate'],
    intro:
      'Kibworth Harcourt sits on the A6 next to Kibworth Beauchamp and is home to Leicestershire\'s last surviving post windmill.',
    housing:
      'The village is mostly older houses and cottages along Main Street, with some larger detached homes and newer estates.',
    gutter:
      'Mature trees in the old village gardens drop leaves and twigs into gutters, and the A6 brings road dust and grit.',
    roof:
      'Many older roofs are clay or slate on period houses, and need a gentle clean to avoid damage.',
    local:
      'We cover Kibworth Harcourt and nearby Carlton Curlieu and Wistow.',
  },
  {
    slug: 'fleckney',
    name: 'Fleckney',
    district: 'Harborough',
    postcodes: ['LE8'],
    geo: { latitude: 52.536, longitude: -1.045 },
    nearby: ['kibworth-beauchamp', 'great-glen', 'countesthorpe', 'kibworth-harcourt'],
    alsoCovers: ['Saddington', 'Kilby', 'Arnesby'],
    trees: 'light',
    homes: ['victorian-terrace', 'postwar-estate', 'modern-estate', 'bungalow'],
    intro:
      'Fleckney is a large village south of Leicester, close to the Grand Union Canal and the Saddington Tunnel.',
    housing:
      'The village has some Victorian terraces from its hosiery days, but most homes are post-war and modern estates.',
    gutter:
      'Fleckney is surrounded by open farmland, so wind-blown leaves, seeds and dust end up in gutters, and modern shallow gutters fill quickly.',
    roof:
      'Most roofs are concrete tiles that grow moss on the north side, especially on homes backing onto open fields.',
    local:
      'We cover Fleckney and the nearby villages of Saddington, Kilby and Arnesby.',
  },
  {
    slug: 'countesthorpe',
    name: 'Countesthorpe',
    district: 'Blaby',
    postcodes: ['LE8'],
    geo: { latitude: 52.554, longitude: -1.14 },
    nearby: ['blaby', 'wigston', 'cosby', 'whetstone', 'fleckney'],
    alsoCovers: ['Foston', 'Peatling Magna'],
    trees: 'medium',
    homes: ['village-cottage', 'postwar-estate', 'bungalow', 'modern-estate'],
    intro:
      'Countesthorpe is a large village south of Leicester, between Blaby and Fleckney.',
    housing:
      'The village has an older centre with cottages and a church, surrounded by post-war estates, many bungalows and newer homes.',
    gutter:
      'Bungalows and estate homes here often have long gutter runs, and the trees around the village centre and the open fields bring plenty of leaves.',
    roof:
      'Concrete tiles are common and grow moss on shaded slopes, while older cottages have clay tiles that need a soft clean.',
    local:
      'We cover Countesthorpe and nearby Foston and Peatling Magna.',
  },
];

export const LEICS_TOWNS_3: LeicsTown[] = [
  {
    slug: 'narborough',
    name: 'Narborough',
    district: 'Blaby',
    postcodes: ['LE19'],
    geo: { latitude: 52.573, longitude: -1.203 },
    nearby: ['enderby', 'huncote', 'cosby', 'whetstone', 'blaby'],
    alsoCovers: ['Littlethorpe', 'Croft'],
    trees: 'medium',
    homes: ['village-cottage', 'interwar-semi', 'postwar-estate', 'bungalow'],
    intro:
      'Narborough is a village south-west of Leicester on the River Soar, with its own railway station on the Leicester to Birmingham line.',
    housing:
      'The village has older brick cottages near the river and station, with inter-war and post-war homes and bungalows around it.',
    gutter:
      'Homes near the River Soar and the trees along the water get leaves and seeds in their gutters, and older homes often have narrow downpipes that block.',
    roof:
      'The damp river valley helps moss grow on roofs, and concrete tiles on the post-war homes hold algae on the lower rows.',
    local:
      'We cover Narborough, Littlethorpe and nearby Croft.',
  },
  {
    slug: 'whetstone',
    name: 'Whetstone',
    district: 'Blaby',
    postcodes: ['LE8'],
    geo: { latitude: 52.57, longitude: -1.18 },
    nearby: ['blaby', 'cosby', 'narborough', 'countesthorpe', 'enderby'],
    alsoCovers: ['Whetstone Pastures'],
    trees: 'medium',
    homes: ['interwar-semi', 'postwar-estate', 'bungalow', 'modern-estate'],
    intro:
      'Whetstone is a large village south of Leicester between Blaby and Cosby, with open farmland on its southern side.',
    housing:
      'Most homes are inter-war and post-war semis and bungalows, with some newer estates on the edges of the village.',
    gutter:
      'Gardens backing onto fields and the trees around the brook bring leaves and seeds into gutters, especially on the south side of the village.',
    roof:
      'Concrete interlocking tiles are the most common roof here, and moss builds up on north-facing slopes.',
    local:
      'We cover the whole of Whetstone, from the village centre to the homes near Whetstone Pastures.',
  },
  {
    slug: 'cosby',
    name: 'Cosby',
    district: 'Blaby',
    postcodes: ['LE9'],
    geo: { latitude: 52.548, longitude: -1.19 },
    nearby: ['whetstone', 'broughton-astley', 'narborough', 'countesthorpe', 'huncote'],
    alsoCovers: ['Littlethorpe', 'Willoughby Waterleys'],
    trees: 'medium',
    homes: ['village-cottage', 'postwar-estate', 'bungalow', 'modern-estate'],
    intro:
      'Cosby is a village south of Leicester with a brook running through the centre of the village.',
    housing:
      'The older village has cottages along the brook and around the church, with post-war homes, bungalows and some newer houses.',
    gutter:
      'Trees along the brook and in village gardens drop a lot of leaves, and older cottages have small gutters that overflow quickly in heavy rain.',
    roof:
      'Older cottage roofs are clay or slate, and estate homes have concrete tiles, all of which grow moss in the damp air near the brook.',
    local:
      'We cover Cosby and nearby Littlethorpe and Willoughby Waterleys.',
  },
  {
    slug: 'enderby',
    name: 'Enderby',
    district: 'Blaby',
    postcodes: ['LE19'],
    geo: { latitude: 52.589, longitude: -1.209 },
    nearby: ['narborough', 'leicester-forest-east', 'glenfield', 'blaby', 'whetstone'],
    alsoCovers: ['Fosse Park area', 'Grove Park'],
    trees: 'medium',
    homes: ['village-cottage', 'postwar-estate', 'modern-estate', 'commercial'],
    intro:
      'Enderby is a village south-west of Leicester, next to Fosse Park shopping centre and close to junction 21 of the M1.',
    housing:
      'The old village has stone and brick cottages, with post-war estates and newer homes, plus a lot of business units at Grove Park.',
    gutter:
      'Homes close to the M1 and the A563 get dust and grit in their gutters, and the village\'s old quarry area and green spaces add leaves.',
    roof:
      'Concrete tiles are common on the estates and grow moss on shaded slopes, while older cottages have clay or slate.',
    local:
      'We cover Enderby village and also offer commercial gutter cleaning at the business parks nearby.',
  },
  {
    slug: 'glenfield',
    name: 'Glenfield',
    district: 'Blaby',
    postcodes: ['LE3'],
    geo: { latitude: 52.65, longitude: -1.205 },
    nearby: ['kirby-muxloe', 'leicester-forest-east', 'anstey', 'groby', 'leicester'],
    alsoCovers: ['Glenfield Hospital area', 'Faire Road area', 'Gynsill'],
    trees: 'medium',
    homes: ['interwar-semi', 'postwar-estate', 'bungalow', 'modern-estate'],
    intro:
      'Glenfield is a large village on the north-west edge of Leicester, home to County Hall and Glenfield Hospital and the old Glenfield railway tunnel.',
    housing:
      'Most homes are inter-war and post-war semis and bungalows, with newer houses on the edges of the village.',
    gutter:
      'Homes near Rothley Brook and the parks get leaves and seeds, and bungalows often have long gutter runs that hold debris.',
    roof:
      'The concrete tiles on many Glenfield homes grow moss along the lower rows, especially on the shaded side.',
    local:
      'We cover the whole of Glenfield, including the roads around County Hall and Glenfield Hospital.',
  },
  {
    slug: 'glen-parva',
    name: 'Glen Parva',
    district: 'Blaby',
    postcodes: ['LE2'],
    geo: { latitude: 52.586, longitude: -1.156 },
    nearby: ['blaby', 'wigston', 'leicester', 'whetstone', 'oadby'],
    alsoCovers: ['Glen Hills'],
    trees: 'medium',
    homes: ['interwar-semi', 'postwar-estate', 'bungalow', 'modern-estate'],
    intro:
      'Glen Parva sits on the southern edge of Leicester between Aylestone and Blaby, with the Grand Union Canal and the River Soar close by.',
    housing:
      'Most homes are inter-war and post-war semis and bungalows, with some newer estates.',
    gutter:
      'Homes near the canal and the riverside paths get leaves and seeds from the trees along the water, which clog gutter outlets in autumn.',
    roof:
      'The damp canal-side air helps moss grow, especially on concrete tiles facing north.',
    local:
      'We cover Glen Parva and nearby Glen Hills.',
  },
  {
    slug: 'kirby-muxloe',
    name: 'Kirby Muxloe',
    district: 'Blaby',
    postcodes: ['LE9'],
    geo: { latitude: 52.633, longitude: -1.225 },
    nearby: ['leicester-forest-east', 'ratby', 'glenfield', 'desford', 'groby'],
    alsoCovers: ['Kirby Fields', 'Castle area'],
    trees: 'heavy',
    homes: ['large-detached', 'interwar-semi', 'village-cottage', 'bungalow'],
    intro:
      'Kirby Muxloe is a village west of Leicester, known for the moated ruins of Kirby Muxloe Castle.',
    housing:
      'The village has many large detached homes and inter-war houses, with older cottages and some bungalows.',
    gutter:
      'Large gardens with mature trees are common here, so gutters fill quickly in autumn, and big detached homes have long gutter runs.',
    roof:
      'Many roofs are clay plain tiles on older and inter-war homes, which grow moss and lichen in the gaps under trees.',
    local:
      'We cover Kirby Muxloe and Kirby Fields, from the castle side of the village to the golf course.',
  },
  {
    slug: 'leicester-forest-east',
    name: 'Leicester Forest East',
    district: 'Blaby',
    postcodes: ['LE3'],
    geo: { latitude: 52.62, longitude: -1.22 },
    nearby: ['kirby-muxloe', 'enderby', 'glenfield', 'leicester', 'ratby'],
    alsoCovers: ['Leicester Forest West', 'Hinckley Road area'],
    trees: 'medium',
    homes: ['interwar-semi', 'bungalow', 'postwar-estate', 'large-detached'],
    intro:
      'Leicester Forest East lies on the western edge of Leicester along the Hinckley Road, close to the M1 and its services.',
    housing:
      'The area is mostly inter-war and post-war semis and many bungalows, with some larger detached homes.',
    gutter:
      'Homes along the busy Hinckley Road collect road dust and grit, and the trees in larger gardens add leaves every autumn.',
    roof:
      'Concrete and clay tiles are common here, and moss grows on the shaded rear slopes.',
    local:
      'We cover Leicester Forest East and Leicester Forest West, along the Hinckley Road corridor.',
  },
  {
    slug: 'scraptoft',
    name: 'Scraptoft',
    district: 'Harborough',
    postcodes: ['LE7'],
    geo: { latitude: 52.641, longitude: -1.041 },
    nearby: ['thurmaston', 'leicester', 'oadby', 'great-glen'],
    alsoCovers: ['Thurnby', 'Bushby', 'Netherhall'],
    trees: 'medium',
    homes: ['large-detached', 'village-cottage', 'modern-estate', 'interwar-semi'],
    intro:
      'Scraptoft is a village on the eastern edge of Leicester, next to Thurnby and Bushby.',
    housing:
      'The old village has cottages and larger houses near the church, with newer estates and large detached homes built in recent years.',
    gutter:
      'Homes on the edge of the open countryside get wind-blown leaves and seeds, and newer homes have shallow gutters that fill quickly.',
    roof:
      'Many newer homes have concrete tiles that grow algae, and the older village roofs are clay or slate.',
    local:
      'We cover Scraptoft, Thurnby and Bushby on the eastern edge of the city.',
  },
  {
    slug: 'great-glen',
    name: 'Great Glen',
    district: 'Harborough',
    postcodes: ['LE8'],
    geo: { latitude: 52.575, longitude: -1.035 },
    nearby: ['oadby', 'kibworth-harcourt', 'fleckney', 'scraptoft'],
    alsoCovers: ['Stretton Hall area', 'Burton Overy'],
    trees: 'heavy',
    homes: ['village-cottage', 'large-detached', 'modern-estate', 'bungalow'],
    intro:
      'Great Glen is a village south-east of Leicester on the River Sence, just off the A6.',
    housing:
      'The village has older cottages and large detached homes, with newer estates on the north side.',
    gutter:
      'Mature trees in the old village and along the river drop a lot of leaves, and big detached homes have long gutter runs that collect them.',
    roof:
      'Older roofs here are clay and slate, and newer homes have concrete tiles that grow moss on the shaded slopes.',
    local:
      'We cover Great Glen and nearby Burton Overy.',
  },
  {
    slug: 'desford',
    name: 'Desford',
    district: 'Hinckley and Bosworth',
    postcodes: ['LE9'],
    geo: { latitude: 52.625, longitude: -1.293 },
    nearby: ['newbold-verdon', 'ratby', 'kirby-muxloe', 'market-bosworth', 'earl-shilton'],
    alsoCovers: ['Botcheston', 'Peckleton', 'Newtown Unthank'],
    trees: 'medium',
    homes: ['village-cottage', 'postwar-estate', 'bungalow', 'modern-estate'],
    intro:
      'Desford is a large village west of Leicester, home to the Caterpillar works and surrounded by farmland.',
    housing:
      'The village has older cottages and houses in the centre, with post-war estates, bungalows and newer homes.',
    gutter:
      'Open farmland around Desford brings wind-blown leaves, seeds and dust, and bungalows often have long gutters that hold debris.',
    roof:
      'Concrete tiles are the most common roof here and grow moss on north-facing slopes.',
    local:
      'We cover Desford, Botcheston, Peckleton and Newtown Unthank.',
  },
  {
    slug: 'newbold-verdon',
    name: 'Newbold Verdon',
    district: 'Hinckley and Bosworth',
    postcodes: ['LE9'],
    geo: { latitude: 52.629, longitude: -1.348 },
    nearby: ['desford', 'barlestone', 'market-bosworth'],
    alsoCovers: ['Kirkby Mallory', 'Osbaston'],
    trees: 'light',
    homes: ['village-cottage', 'postwar-estate', 'bungalow', 'modern-estate'],
    intro:
      'Newbold Verdon is a village between Desford and Market Bosworth, surrounded by open countryside.',
    housing:
      'The village has older cottages, post-war homes, bungalows and some newer estates.',
    gutter:
      'The open fields around the village mean leaves, seeds and dust blow into gutters, and newer homes have shallow gutters that block quickly.',
    roof:
      'Exposed roofs here pick up a lot of algae and lichen, and concrete tiles grow moss on the north side.',
    local:
      'We cover Newbold Verdon and nearby Kirkby Mallory and Osbaston.',
  },
  {
    slug: 'barlestone',
    name: 'Barlestone',
    district: 'Hinckley and Bosworth',
    postcodes: ['CV13'],
    geo: { latitude: 52.644, longitude: -1.37 },
    nearby: ['newbold-verdon', 'market-bosworth', 'ibstock'],
    alsoCovers: ['Osbaston', 'Nailstone'],
    trees: 'light',
    homes: ['village-cottage', 'postwar-estate', 'modern-estate', 'bungalow'],
    intro:
      'Barlestone is a village north of Market Bosworth, in the countryside of western Leicestershire.',
    housing:
      'The village has some older cottages, with post-war housing and newer estates.',
    gutter:
      'Gardens that back onto fields get wind-blown leaves, and newer homes have shallow gutters that fill with moss from the roof.',
    roof:
      'Most roofs are concrete tiles that grow moss on the shaded side, especially on exposed homes on the edge of the village.',
    local:
      'We cover Barlestone and nearby Osbaston and Nailstone.',
  },
  {
    slug: 'sapcote',
    name: 'Sapcote',
    district: 'Blaby',
    postcodes: ['LE9'],
    geo: { latitude: 52.538, longitude: -1.277 },
    nearby: ['stoney-stanton', 'sharnford', 'broughton-astley', 'burbage'],
    alsoCovers: ['Aston Flamville', 'Frolesworth'],
    trees: 'medium',
    homes: ['village-cottage', 'postwar-estate', 'bungalow', 'modern-estate'],
    intro:
      'Sapcote is a village between Hinckley and Leicester, close to Stoney Stanton and the old granite quarries.',
    housing:
      'The village has older stone and brick cottages, with post-war homes, bungalows and newer estates.',
    gutter:
      'Trees in the village and open fields around it drop leaves and seeds into gutters, and older cottages have small gutters that overflow.',
    roof:
      'Older roofs are clay or slate, and estate homes have concrete tiles that grow moss on shaded slopes.',
    local:
      'We cover Sapcote and nearby Aston Flamville and Frolesworth.',
  },
  {
    slug: 'stoney-stanton',
    name: 'Stoney Stanton',
    district: 'Blaby',
    postcodes: ['LE9'],
    geo: { latitude: 52.55, longitude: -1.278 },
    nearby: ['sapcote', 'huncote', 'broughton-astley', 'earl-shilton', 'barwell'],
    alsoCovers: ['Stoney Cove area', 'Elmesthorpe'],
    trees: 'medium',
    homes: ['village-cottage', 'postwar-estate', 'modern-estate', 'bungalow'],
    intro:
      'Stoney Stanton is a village known for its granite quarries, including the flooded quarry at Stoney Cove used for diving.',
    housing:
      'The village has older stone cottages built from local granite, with post-war homes and newer estates.',
    gutter:
      'Wind across the open quarry land and fields brings dust and debris, and older cottages have low gutters that fill quickly.',
    roof:
      'Concrete tiles on the estates grow moss on north-facing slopes, and older cottage roofs need a gentle clean.',
    local:
      'We cover Stoney Stanton and nearby Elmesthorpe.',
  },
  {
    slug: 'sharnford',
    name: 'Sharnford',
    district: 'Blaby',
    postcodes: ['LE10'],
    geo: { latitude: 52.524, longitude: -1.3 },
    nearby: ['sapcote', 'burbage', 'hinckley', 'lutterworth'],
    alsoCovers: ['Wigston Parva', 'Frolesworth'],
    trees: 'light',
    homes: ['village-cottage', 'postwar-estate', 'bungalow'],
    intro:
      'Sharnford is a small village on the old Fosse Way, east of Hinckley.',
    housing:
      'The village has older cottages, some post-war homes and bungalows.',
    gutter:
      'Being surrounded by farmland, Sharnford homes get wind-blown leaves, seeds and dust in their gutters.',
    roof:
      'Exposed roofs here grow algae and lichen, and older cottage roofs need careful hand-cleaning.',
    local:
      'We cover Sharnford and nearby Wigston Parva and Frolesworth.',
  },
  {
    slug: 'huncote',
    name: 'Huncote',
    district: 'Blaby',
    postcodes: ['LE9'],
    geo: { latitude: 52.577, longitude: -1.231 },
    nearby: ['narborough', 'stoney-stanton', 'cosby', 'earl-shilton', 'enderby'],
    alsoCovers: ['Croft', 'Thurlaston'],
    trees: 'medium',
    homes: ['village-cottage', 'postwar-estate', 'bungalow', 'modern-estate'],
    intro:
      'Huncote is a village south-west of Leicester, next to Croft Hill and close to the village of Croft.',
    housing:
      'The village has older cottages, post-war homes, bungalows and newer estates.',
    gutter:
      'Homes near the brook and the wooded areas get leaves and seeds, and bungalows often have long gutter runs.',
    roof:
      'Concrete tiles are common and grow moss on shaded slopes in the damp air near the brook.',
    local:
      'We cover Huncote and nearby Croft and Thurlaston.',
  },
  {
    slug: 'hathern',
    name: 'Hathern',
    district: 'Charnwood',
    postcodes: ['LE12'],
    geo: { latitude: 52.796, longitude: -1.255 },
    nearby: ['loughborough', 'shepshed', 'kegworth', 'castle-donington'],
    alsoCovers: ['Long Whatton', 'Zouch'],
    trees: 'light',
    homes: ['village-cottage', 'victorian-terrace', 'postwar-estate', 'modern-estate'],
    intro:
      'Hathern is a village north-west of Loughborough, known for Hathernware terracotta, which was made in the village.',
    housing:
      'The village has older brick cottages and terraces, with post-war and newer homes.',
    gutter:
      'Homes near the A6 get road dust and grit, and gardens backing onto fields bring leaves and seeds.',
    roof:
      'Older terraces have slate or clay tiles, and newer homes have concrete tiles that grow moss on the shaded side.',
    local:
      'We cover Hathern and nearby Long Whatton and Zouch.',
  },
  {
    slug: 'kegworth',
    name: 'Kegworth',
    district: 'North West Leicestershire',
    postcodes: ['DE74'],
    geo: { latitude: 52.834, longitude: -1.278 },
    nearby: ['castle-donington', 'hathern', 'shepshed', 'loughborough'],
    alsoCovers: ['Kingston on Soar', 'Sutton Bonington'],
    trees: 'medium',
    homes: ['village-cottage', 'victorian-terrace', 'postwar-estate', 'modern-estate'],
    intro:
      'Kegworth is a large village on the River Soar near junction 24 of the M1 and East Midlands Airport.',
    housing:
      'The village has old brick cottages and terraces in the centre, with post-war and modern estates.',
    gutter:
      'Homes near the river and the M1 get both leaves and road grit in their gutters, and older homes have narrow gutters that block quickly.',
    roof:
      'The damp river air helps moss grow on Kegworth roofs, both older slate and modern concrete tiles.',
    local:
      'We cover Kegworth and nearby Kingston on Soar and Sutton Bonington.',
  },
  {
    slug: 'whitwick',
    name: 'Whitwick',
    district: 'North West Leicestershire',
    postcodes: ['LE67'],
    geo: { latitude: 52.743, longitude: -1.355 },
    nearby: ['coalville', 'shepshed', 'hugglescote', 'markfield'],
    alsoCovers: ['Thringstone', 'Swannington'],
    trees: 'heavy',
    homes: ['ex-mining', 'victorian-terrace', 'postwar-estate', 'modern-estate'],
    intro:
      'Whitwick is a former mining town just north of Coalville, close to Mount St Bernard Abbey and the rocks of Charnwood Forest.',
    housing:
      'The town has older terraces and cottages from its mining days, with post-war estates and newer homes.',
    gutter:
      'Homes on the forest side of Whitwick get a lot of leaves and twigs, and older terraces have gutters that sag and hold silt.',
    roof:
      'Roofs near the forest stay damp and grow moss quickly, especially concrete tiles on north-facing slopes.',
    local:
      'We cover Whitwick and nearby Thringstone and Swannington.',
  },
  {
    slug: 'hugglescote',
    name: 'Hugglescote',
    district: 'North West Leicestershire',
    postcodes: ['LE67'],
    geo: { latitude: 52.712, longitude: -1.37 },
    nearby: ['coalville', 'ibstock', 'ravenstone', 'whitwick'],
    alsoCovers: ['Donington le Heath', 'Ellistown'],
    trees: 'light',
    homes: ['ex-mining', 'modern-estate', 'postwar-estate', 'bungalow'],
    intro:
      'Hugglescote is a village joined to the south of Coalville, next to Donington le Heath and its medieval manor house.',
    housing:
      'Hugglescote has older mining-era terraces and a large amount of new-build housing built in recent years.',
    gutter:
      'New-build homes here have shallow gutters that block with roof moss and leaves, and older terraces have sagging brackets that hold water.',
    roof:
      'Concrete tiles on new and post-war homes grow moss on north-facing slopes, and older terraces have slate.',
    local:
      'We cover Hugglescote, Donington le Heath and the new estates towards Ellistown.',
  },
  {
    slug: 'ravenstone',
    name: 'Ravenstone',
    district: 'North West Leicestershire',
    postcodes: ['LE67'],
    geo: { latitude: 52.728, longitude: -1.398 },
    nearby: ['coalville', 'ashby-de-la-zouch', 'ibstock', 'hugglescote'],
    alsoCovers: ['Snibston', 'Normanton le Heath'],
    trees: 'medium',
    homes: ['village-cottage', 'postwar-estate', 'modern-estate', 'bungalow'],
    intro:
      'Ravenstone is a village west of Coalville, on the road to Ashby-de-la-Zouch and in the National Forest.',
    housing:
      'The village has older cottages and houses, with post-war homes and newer estates.',
    gutter:
      'National Forest trees and open fields around the village bring leaves and seeds into gutters.',
    roof:
      'Concrete tiles are common and grow moss on shaded slopes, while older roofs need a gentle hand clean.',
    local:
      'We cover Ravenstone and nearby Normanton le Heath.',
  },
];

export const LEICS_TOWNS: LeicsTown[] = [...LEICS_TOWNS_1, ...LEICS_TOWNS_2, ...LEICS_TOWNS_3];

const BY_SLUG = new Map(LEICS_TOWNS.map((t) => [t.slug, t]));

export const LEICS_TOWN_SLUGS: string[] = LEICS_TOWNS.map((t) => t.slug);

export function leicsTown(slug: string | undefined | null): LeicsTown | undefined {
  return slug ? BY_SLUG.get(slug) : undefined;
}

export const LEICS_DISTRICTS = [
  'Leicester City',
  'Charnwood',
  'Oadby and Wigston',
  'Blaby',
  'Harborough',
  'Hinckley and Bosworth',
  'North West Leicestershire',
  'Melton',
] as const;
