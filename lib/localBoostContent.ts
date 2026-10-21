/**
 * Day-4 local content boost (Oct 2026).
 *
 * Extra, genuinely local copy for the town pages that sit just off page 1 in
 * Search Console (positions ~10–20). Each block targets the searches Google
 * already shows the page for — e.g. the Coventry page ranks for
 * "gutter cleaning binley" (468 impressions, pos 9.8), Malvern ranks for
 * repairs / new guttering, Dudley for Sedgley / Kingswinford / Brierley Hill.
 *
 * Rules: facts only (real districts, postcodes, housing stock, official
 * prices from constants/gutterPricing.ts). No invented reviews or job counts.
 */

export type LocalBoostDistrict = { name: string; text: string };
export type LocalBoostFaq = { question: string; answer: string };
export type LocalBoostLink = { label: string; href: string };

export type LocalBoost = {
  /** Display name used in headings, e.g. "Coventry". */
  place: string;
  heading: string;
  intro: string[];
  districtsHeading: string;
  districts: LocalBoostDistrict[];
  /** Optional extra block (e.g. repairs & new guttering for Malvern). */
  extra?: { heading: string; body: string[]; links: LocalBoostLink[] };
  faqs: LocalBoostFaq[];
  links: LocalBoostLink[];
};

export const LOCAL_BOOST: Record<string, LocalBoost> = {
  coventry: {
    place: 'Coventry',
    heading: 'Gutter Cleaning Across Coventry, Binley & Walsgrave',
    intro: [
      'Coventry was largely rebuilt after 1940, so most streets mix post-war semis and terraces with older Victorian and Edwardian housing that survived in places like Earlsdon and Chapelfields, and 1930s semis in Styvechale and Finham. Each brings different gutter problems. Shallow post-war uPVC runs fill quickly with moss from concrete roof tiles, while older cast iron gutters on period homes rust at the joints when silt sits in them over winter.',
      'We clean gutters right across the CV1–CV6 postcodes using a ground-based vacuum that reaches up to four storeys, so no ladders lean on your fascias or conservatory. Every downpipe is flushed and tested, and you get before and after photos of every run we clear.',
    ],
    districtsHeading: 'Coventry areas we clean every week',
    districts: [
      {
        name: 'Binley & Binley Woods (CV3)',
        text: 'Interwar and post-war semis plus newer estates on the eastern edge of the city. Gardens backing onto the woodland mean heavy leaf fall in October and November, so we recommend a late-autumn clean here.',
      },
      {
        name: 'Walsgrave & Wyken (CV2)',
        text: 'Family semis and bungalows, many with extensions and lean-to roofs where debris collects at the joins. Our vacuum reaches over extensions without standing on them.',
      },
      {
        name: 'Earlsdon & Chapelfields (CV5, CV1)',
        text: 'Victorian and Edwardian terraces with deep bay roofs and older cast iron gutters. We clear them gently and flag any joints or brackets that need attention.',
      },
      {
        name: 'Tile Hill, Canley & Allesley (CV4, CV5)',
        text: 'Post-war estates and larger detached homes towards the green belt. Tree-lined roads here mean twice-yearly cleaning is often worth it.',
      },
      {
        name: 'Cheylesmore, Stoke & Styvechale (CV3, CV2)',
        text: '1930s semis and terraces close to the city centre, where blocked downpipes are the most common call-out we get.',
      },
    ],
    faqs: [
      {
        question: 'Do you clean gutters in Binley and Binley Woods?',
        answer:
          'Yes. Binley and Binley Woods (CV3) are covered by our Coventry team, with the same fixed prices as the rest of the city: £100 for a 2-bed home and £110 for a 3-bed home.',
      },
      {
        question: 'What is the minimum charge for gutter cleaning in Coventry?',
        answer:
          'Our smallest standard clean is £100 for a 2-bedroom property, including downpipe flushing and before and after photos. You get a fixed quote before any work starts.',
      },
      {
        question: 'Can you clear gutters above a conservatory or extension in Coventry?',
        answer:
          'Yes. Our ground-based vacuum reaches over conservatories, porches and single-storey extensions, so nothing has to be leaned on or climbed over.',
      },
    ],
    links: [
      { label: 'Gutter repairs in Coventry', href: '/gutter-repair-coventry/' },
      { label: 'Roof cleaning in Coventry', href: '/roof-cleaning-coventry/' },
      { label: 'Gutter cleaning in Walsgrave', href: '/gutter-cleaning-walsgrave/' },
      { label: 'Gutter cleaning in Cheylesmore', href: '/gutter-cleaning-cheylesmore/' },
      { label: 'Gutter cleaning prices', href: '/gutter-cleaning-prices/' },
    ],
  },

  dudley: {
    place: 'Dudley',
    heading: 'Gutter Cleaning in Dudley, Sedgley, Kingswinford & Brierley Hill',
    intro: [
      'Dudley sits high on the Black Country ridge, so many homes in Sedgley, Gornal and around the castle hill take the full force of wind-blown leaves and rain. Gutters on these exposed roofs block faster than in sheltered parts of the West Midlands, and overflowing water soon shows up as damp patches and green staining on brickwork.',
      'We clean gutters across the DY1–DY6 postcodes with a ground-level vacuum system, flush and test every downpipe, and send you before and after photos. If we spot a leaking joint, sagging section or loose bracket, we tell you and quote before doing anything.',
    ],
    districtsHeading: 'Dudley areas we cover',
    districts: [
      {
        name: 'Sedgley & Gornal (DY3)',
        text: 'Hillside semis and detached homes on exposed ground. Moss and leaves build up quickly, so most homes here benefit from an annual autumn clean.',
      },
      {
        name: 'Kingswinford & Wall Heath (DY6)',
        text: 'Large 1960s and 1970s estates plus bigger detached homes with long gutter runs and garages. Our vacuum clears the whole run, garage gutters included.',
      },
      {
        name: 'Brierley Hill & Pensnett (DY5)',
        text: 'Victorian terraces near the town centre and newer housing around Merry Hill. Blocked downpipes and overflowing valley gutters are common here.',
      },
      {
        name: 'Netherton, Coseley & Dudley town (DY1, DY2, WV14)',
        text: 'Traditional terraced streets and interwar semis, often with older cast iron gutters that need careful clearing.',
      },
    ],
    faqs: [
      {
        question: 'Do you cover Sedgley, Kingswinford and Brierley Hill?',
        answer:
          'Yes. Our Dudley team covers Sedgley, Gornal, Kingswinford, Wall Heath, Brierley Hill, Pensnett, Netherton and Coseley at the same fixed prices as Dudley town.',
      },
      {
        question: 'Can you repair gutters in Dudley as well as clean them?',
        answer:
          'Yes. We reseal leaking joints, refit loose brackets and replace damaged sections. If we find a problem during a clean, we photograph it and quote before doing any repair work.',
      },
      {
        question: 'Why do gutters in Sedgley and Gornal block so often?',
        answer:
          'Many homes sit on high, exposed ground, so wind carries leaves and moss onto roofs from a wide area. An autumn clean each year usually keeps them flowing.',
      },
    ],
    links: [
      { label: 'Gutter repairs in Dudley', href: '/gutter-repair-dudley/' },
      { label: 'Roof cleaning in Dudley', href: '/roof-cleaning-dudley/' },
      { label: 'Gutter cleaning in Pensnett', href: '/gutter-cleaning-pensnett/' },
      { label: 'Gutter cleaning in Quarry Bank', href: '/gutter-cleaning-quarry-bank/' },
      { label: 'Gutter cleaning prices', href: '/gutter-cleaning-prices/' },
    ],
  },

  malvern: {
    place: 'Malvern',
    heading: 'Gutter Cleaning, Repairs & New Guttering in Malvern',
    intro: [
      'Great Malvern climbs the eastern slopes of the Malvern Hills, and many of its Victorian villas are three or four storeys tall on steep plots, which is exactly where ladders are unsafe and scaffolding is expensive. Our ground-based vacuum reaches up to four storeys, so we can clear tall Malvern elevations safely from the ground.',
      'Woodland on the hills and mature garden trees mean leaves, needles and moss reach gutters all year round. We clean across the WR13 and WR14 postcodes, including Malvern Link, Barnards Green, Malvern Wells and Upton-upon-Severn, with downpipe testing and before and after photos as standard.',
    ],
    districtsHeading: 'Malvern areas we cover',
    districts: [
      {
        name: 'Great Malvern (WR14)',
        text: 'Tall Victorian villas and townhouses, often with original cast iron gutters and hoppers. We clear them gently and report any rust or failing joints.',
      },
      {
        name: 'Malvern Link & Barnards Green (WR14)',
        text: 'Edwardian terraces, interwar semis and newer estates. Moss from nearby trees is the most common cause of overflowing gutters here.',
      },
      {
        name: 'Malvern Wells & West Malvern (WR14)',
        text: 'Hillside homes exposed to wind-blown leaves from the Malvern Hills, so an annual autumn clean is strongly recommended.',
      },
      {
        name: 'Upton-upon-Severn & surrounding villages (WR8, WR13)',
        text: 'Period cottages and larger rural homes. We cover the villages around Malvern at the same fixed prices.',
      },
    ],
    extra: {
      heading: 'Gutter repairs and new guttering in Malvern',
      body: [
        'Malvern’s older cast iron and early uPVC systems often need more than a clean. We reseal leaking joints, refit sagging sections and loose brackets, and replace cracked lengths, downpipes and hoppers.',
        'Where a gutter system is beyond repair, we fit new uPVC guttering and downpipes. Every repair or installation starts with a free inspection and a fixed written quote, so you know the cost before any work starts.',
      ],
      links: [
        { label: 'Gutter repairs in Malvern', href: '/gutter-repair-malvern/' },
        { label: 'New gutter installation', href: '/services/gutter-installation/' },
        { label: 'Roof cleaning in Malvern', href: '/roof-cleaning-malvern/' },
      ],
    },
    faqs: [
      {
        question: 'Do you repair and replace gutters in Malvern?',
        answer:
          'Yes. As well as cleaning, we repair leaking joints and sagging gutters and fit new uPVC guttering and downpipes across Malvern. Every repair starts with a free inspection and fixed quote.',
      },
      {
        question: 'Can you clean gutters on tall Victorian houses in Great Malvern?',
        answer:
          'Yes. Our ground-based vacuum reaches up to four storeys, so we can clear tall Malvern elevations from the ground without ladders or scaffolding.',
      },
      {
        question: 'Do you cover Upton-upon-Severn and the villages around Malvern?',
        answer:
          'Yes. We cover Upton-upon-Severn, Malvern Wells, West Malvern, Malvern Link, Barnards Green and the surrounding WR8, WR13 and WR14 villages.',
      },
    ],
    links: [
      { label: 'Gutter repairs in Malvern', href: '/gutter-repair-malvern/' },
      { label: 'Gutter cleaning in Worcester', href: '/gutter-cleaning-worcester/' },
      { label: 'Gutter cleaning in Evesham', href: '/gutter-cleaning-evesham/' },
      { label: 'Gutter cleaning prices', href: '/gutter-cleaning-prices/' },
    ],
  },

  wolverhampton: {
    place: 'Wolverhampton',
    heading: 'Gutter Cleaning & Repairs Across Wolverhampton, Wednesfield & Willenhall',
    intro: [
      'From the Victorian terraces around the city centre and Whitmore Reans to the 1930s semis in Penn and Fordhouses and the larger detached homes in Tettenhall, Wolverhampton’s housing covers almost every gutter type we work on. Older cast iron systems block at the outlets, while long uPVC runs on newer estates sag when they fill with silt and moss.',
      'We clean gutters across WV1–WV14 using a ground-level vacuum, flush and test every downpipe, and send before and after photos. If a joint is leaking or a section is sagging, we photograph it and give you a fixed repair quote before doing anything.',
    ],
    districtsHeading: 'Wolverhampton areas we cover',
    districts: [
      {
        name: 'Wednesfield (WV11)',
        text: 'Post-war semis and newer estates, many with extensions and garages where gutters are easy to forget. We clear the whole property in one visit.',
      },
      {
        name: 'Willenhall (WV12, WV13)',
        text: 'Traditional terraced streets and interwar semis. Blocked downpipes and overflowing front gutters are the most common problems we fix here.',
      },
      {
        name: 'Bilston (WV14)',
        text: 'Victorian terraces and post-war housing, often with older gutter systems that need gentle clearing and an honest condition check.',
      },
      {
        name: 'Tettenhall, Penn & Compton (WV3, WV4, WV6)',
        text: 'Larger detached homes on tree-lined roads with long gutter runs. Twice-yearly cleaning is worth it for homes under mature trees.',
      },
    ],
    faqs: [
      {
        question: 'Do you repair gutters in Wolverhampton?',
        answer:
          'Yes. We reseal leaking joints, fix sagging gutters and replace broken brackets and sections across Wolverhampton. You get a fixed quote before any repair work starts.',
      },
      {
        question: 'Do you cover Wednesfield, Willenhall and Bilston?',
        answer:
          'Yes. Wednesfield, Willenhall, Bilston, Tettenhall, Penn, Compton, Fordhouses and Bushbury are all covered at the same fixed prices as central Wolverhampton.',
      },
    ],
    links: [
      { label: 'Gutter repairs in Wolverhampton', href: '/gutter-repair-wolverhampton/' },
      { label: 'Roof cleaning in Wolverhampton', href: '/roof-cleaning-wolverhampton/' },
      { label: 'Gutter cleaning in Walsall', href: '/gutter-cleaning-walsall/' },
      { label: 'Gutter cleaning prices', href: '/gutter-cleaning-prices/' },
    ],
  },

  'kings-norton': {
    place: 'Kings Norton',
    heading: 'Guttering Cleaning in Kings Norton (B30 & B38)',
    intro: [
      'Kings Norton mixes the historic Old Village around St Nicolas’ Church and the Green with streets of 1930s semis, post-war estates at Hawkesley and Pool Farm, and newer homes towards West Heath and Walkers Heath. Older properties near the Green often have cast iron gutters and deep roof valleys that trap leaves, while the 1930s semis have long front runs that overflow when moss builds up.',
      'We clear guttering across B30 and B38 using a ground-based vacuum, so no ladders touch period brickwork or bay roofs. Every downpipe is flushed and tested, and you get before and after photos of the work.',
    ],
    districtsHeading: 'Kings Norton streets and neighbourhoods we cover',
    districts: [
      {
        name: 'Kings Norton Green & Old Village',
        text: 'Period homes and cottages in the conservation area. We take extra care with original gutters and hoppers.',
      },
      {
        name: 'Cotteridge & Kings Norton Park (B30)',
        text: '1930s semis and terraces along tree-lined roads, where autumn leaf fall is the main cause of blockages.',
      },
      {
        name: 'Hawkesley, Pool Farm & Primrose (B38)',
        text: 'Post-war estates and bungalows. Blocked downpipes and moss-filled gutters are the jobs we see most.',
      },
      {
        name: 'West Heath & Walkers Heath (B38, B14)',
        text: 'Family semis and newer homes, many with extensions and conservatories we can clean over safely.',
      },
    ],
    faqs: [
      {
        question: 'How much is guttering cleaning in Kings Norton?',
        answer:
          'Fixed prices: £100 for a 2-bed home and £110 for a 3-bed home, with larger detached homes quoted from £140. Downpipe flushing and before and after photos are included.',
      },
      {
        question: 'Do you clean gutters on period homes near Kings Norton Green?',
        answer:
          'Yes. Our ground-based vacuum means no ladders against old brickwork or bay roofs, and we report any cast iron sections that need attention.',
      },
    ],
    links: [
      { label: 'Gutter cleaning in Northfield', href: '/gutter-cleaning-northfield/' },
      { label: 'Gutter cleaning in Cotteridge', href: '/gutter-cleaning-cotteridge/' },
      { label: 'Gutter cleaning in Stirchley', href: '/gutter-cleaning-stirchley/' },
      { label: 'Roof cleaning in Kings Norton', href: '/roof-cleaning-kings-norton/' },
    ],
  },
};

export function getLocalBoost(slug: string | undefined | null): LocalBoost | undefined {
  return slug ? LOCAL_BOOST[slug] : undefined;
}

/** Append the page's boost FAQs (visible + schema stay in sync). */
export function withLocalBoostFaqs<T extends { question: string; answer: string }>(
  slug: string | undefined | null,
  faqs: T[],
  extra: Omit<T, 'question' | 'answer'> = {} as Omit<T, 'question' | 'answer'>,
): T[] {
  const boost = getLocalBoost(slug);
  if (!boost) return faqs;
  const seen = new Set(faqs.map((f) => f.question.toLowerCase()));
  const added = boost.faqs
    .filter((f) => !seen.has(f.question.toLowerCase()))
    .map((f) => ({ ...extra, ...f }) as T);
  return [...faqs, ...added];
}
