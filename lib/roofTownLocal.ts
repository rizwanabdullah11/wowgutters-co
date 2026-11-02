/**
 * Town-specific roof cleaning copy for the indexable roof-cleaning-* town pages (Nov 2026).
 *
 * Why: the roof town pages were ~78% identical (one template with the town name swapped),
 * and Worcestershire / Staffordshire towns were wrongly described as "within Birmingham".
 * Each entry uses well-known, checkable local facts (borough, postcodes, landscape, housing
 * types). Never add a job, street story or customer claim here unless it really happened.
 */
export type RoofTownLocal = {
  lead: string;
  why: [string, string];
  propertyTypes: { label: string; detail: string }[];
};

export const ROOF_TOWN_LOCAL: Record<string, RoofTownLocal> = {
  bromsgrove: {
    lead: 'Bromsgrove is a Worcestershire market town just south of Birmingham, with the wooded Lickey Hills on its north-east edge and a housing mix that runs from Victorian terraces near the High Street to large post-war estates.',
    why: [
      'Homes close to the Lickey Hills and the many mature trees around Bromsgrove collect leaf litter and moss faster than open estates. Moss on the north-facing slopes holds rain against the tiles, and in hard frosts that trapped water opens up pointing and ridge mortar.',
      'Most of the roofs we see in B60 and B61 are concrete interlocking tiles from the 1960s–80s, which grip moss well. We soft-wash rather than pressure-wash, apply biocide afterwards and photograph every slope so you can see the difference.',
    ],
    propertyTypes: [
      { label: 'Victorian terraces near the town centre', detail: 'Slate and clay roofs with shared valleys — cleaned by hand-safe soft-wash methods, never high pressure.' },
      { label: 'Post-war estates (B60 / B61)', detail: 'Concrete interlocking tiles where moss builds in the laps of each tile — the most common Bromsgrove roof we treat.' },
      { label: 'Homes backing onto the Lickey Hills', detail: 'Heavy tree shade means faster regrowth; biocide after the clean slows it down.' },
      { label: 'Newer developments around the town', detail: 'Shallower pitches and dormers — moss and algae treated in one visit with photo proof.' },
    ],
  },
  cannock: {
    lead: 'Cannock is a south Staffordshire town on the edge of Cannock Chase, the large forest and heath area whose pines and birches drop needles, seeds and leaves on rooftops for much of the year.',
    why: [
      'Being next to Cannock Chase means more airborne debris and more shade than most West Midlands towns. Pine needles knit together with moss in roof valleys and behind chimney stacks, which is why Cannock roofs often need treating sooner on the Chase-facing side.',
      'Much of the housing in WS11 and WS12 is post-war and 1970s–90s estate stock with concrete tiles. We remove the moss with soft-wash methods, apply biocide and send before & after photos — no pressure washing that strips tile surfaces.',
    ],
    propertyTypes: [
      { label: 'Homes bordering Cannock Chase', detail: 'Needles and moss bind together in valleys — cleared carefully and treated to slow regrowth.' },
      { label: 'Post-war semis and former colliery housing', detail: 'Older concrete tiles that hold moss in every lap — full surface treatment.' },
      { label: 'Hednesford and Heath Hayes estates', detail: 'Popular 1970s–90s estates with long uniform roof runs — cleaned in one visit.' },
      { label: 'Bungalows across WS11 / WS12', detail: 'Low roofs that still need a professional clean to protect tiles and gutters below.' },
    ],
  },
  coventry: {
    lead: 'Coventry rebuilt much of its housing after 1940, so alongside Victorian streets such as those in Earlsdon there are large areas of 1950s–60s homes with concrete tile roofs across the CV postcodes.',
    why: [
      'The post-war concrete tiles common across Coventry have a rough surface that moss and lichen take hold of quickly, especially on rear slopes shaded by neighbouring houses. Left alone, the moss sheds into gutters every autumn and keeps the tiles damp through winter.',
      'Coventry also has a lot of rented student and family housing, where landlords need proof of maintenance. Every roof clean comes with dated before & after photos you can keep for your records.',
    ],
    propertyTypes: [
      { label: '1950s–60s rebuilt housing', detail: 'Concrete tile roofs where moss spreads fast on rear slopes — soft-washed and biocide treated.' },
      { label: 'Victorian terraces (e.g. Earlsdon)', detail: 'Slate and clay roofs with chimneys and shared valleys — careful moss removal without high pressure.' },
      { label: 'Rented and student homes', detail: 'Photo-documented cleans for landlords and letting agents.' },
      { label: 'Modern estates on the city edge', detail: 'Multi-pitch roofs and extensions treated in a single visit.' },
    ],
  },
  dudley: {
    lead: 'Dudley sits high on a ridge in the Black Country, crowned by Dudley Castle, so many streets are steep and many roofs catch the wind and rain from the west.',
    why: [
      'Hillside plots in Dudley often mean one side of the roof is in shade for most of the day. That damp, shaded slope is where moss and lichen build first — and the run-off carries it straight into gutters and downpipes.',
      'Across DY1–DY3 we see a lot of Victorian and 1930s housing with older tiles and pointing. We use low-pressure soft-wash cleaning so the tiles and mortar aren\'t damaged, then apply biocide and photograph the finished roof.',
    ],
    propertyTypes: [
      { label: 'Terraces on Dudley\'s hillside streets', detail: 'Steep, exposed rooflines where moss and lichen gather on the shaded slope.' },
      { label: '1930s semis', detail: 'Older concrete and clay tiles — cleaned gently to protect pointing.' },
      { label: 'Post-war council-built estates', detail: 'Uniform concrete tile roofs with moss in every lap — full treatment.' },
      { label: 'Larger homes towards Sedgley and Gornal', detail: 'Bigger roofs with valleys and dormers cleaned and documented in one visit.' },
    ],
  },
  halesowen: {
    lead: 'Halesowen, in the Borough of Dudley, sits between the Clent Hills and the Leasowes, with plenty of sloping, tree-lined streets in the B62 and B63 postcodes.',
    why: [
      'Tree cover around the Leasowes and towards the Clent Hills keeps many Halesowen roofs shaded and damp, which is ideal for moss. Sloping plots also mean rainwater runs fast across the tiles, washing moss and grit into gutters.',
      'Much of the housing is 1930s–70s semis and detached homes with concrete tiles. We clean with controlled soft-wash methods, apply biocide to slow regrowth, and send before & after photos of every elevation.',
    ],
    propertyTypes: [
      { label: 'Tree-lined streets near the Leasowes', detail: 'Shaded roofs where moss returns quickly — biocide applied after every clean.' },
      { label: '1930s–70s semis (B62 / B63)', detail: 'Concrete interlocking tiles — the most common Halesowen roof we treat.' },
      { label: 'Homes on sloping plots', detail: 'Fast run-off carries moss into gutters; we check gutters at the roofline too.' },
      { label: 'Detached homes towards the Clent Hills', detail: 'Larger, more complex roofs cleaned without scaffolding.' },
    ],
  },
  kidderminster: {
    lead: 'Kidderminster is a Worcestershire town on the River Stour, known for its carpet-making past, with Victorian terraces near the centre and the Wyre Forest a short drive west.',
    why: [
      'Kidderminster\'s older terraces often have slate or clay roofs with chimneys and shared valleys, where moss and debris collect out of sight. Newer estates in DY10 and DY11 mostly have concrete tiles that hold moss in every lap.',
      'Damp air from the river valley and nearby woodland keeps roofs wet for longer, so moss grows back faster. A soft-wash clean with biocide treatment every couple of years keeps it under control without damaging the tiles.',
    ],
    propertyTypes: [
      { label: 'Victorian terraces near the town centre', detail: 'Slate and clay roofs with chimneys — cleaned without high pressure.' },
      { label: 'Post-war and modern estates (DY10 / DY11)', detail: 'Concrete tiles where moss builds in the laps — fully treated.' },
      { label: 'Homes near the Stour and canal', detail: 'Damper air means faster algae — biocide slows regrowth.' },
      { label: 'Houses towards the Wyre Forest side', detail: 'More leaf fall and shade; gutters checked at the roofline.' },
    ],
  },
  lichfield: {
    lead: 'Lichfield is a Staffordshire cathedral city with a historic centre of Georgian and period buildings, surrounded by large modern estates such as Boley Park and Darwin Park in WS13 and WS14.',
    why: [
      'Period homes in and around Lichfield\'s conservation areas often have clay tiles and older lime pointing, which must be cleaned gently. High-pressure washing can strip the surface of old tiles, so we only use controlled soft-wash methods.',
      'The newer estates have concrete tile roofs where moss gathers in the laps and sheds into gutters each autumn. Every clean includes biocide treatment and before & after photos.',
    ],
    propertyTypes: [
      { label: 'Period homes near the city centre', detail: 'Clay tiles and older pointing — gentle soft-wash only.' },
      { label: 'Boley Park and Darwin Park estates', detail: 'Concrete tile roofs with moss in the laps — the most common Lichfield job.' },
      { label: 'Detached homes on the city edge', detail: 'Larger roofs with valleys and dormers cleaned in one visit.' },
      { label: 'Bungalows and smaller homes', detail: 'Low roofs cleaned and treated, with gutters checked at the roofline.' },
    ],
  },
  oldbury: {
    lead: 'Oldbury is a Black Country town in Sandwell, close to junction 2 of the M5, with dense Victorian and interwar housing in the B68 and B69 postcodes.',
    why: [
      'Oldbury\'s terraces and semis sit close together, so rear roof slopes are often shaded by the next row of houses. Shade plus traffic grime from the motorway corridor gives moss and algae an easy start on the tiles.',
      'We clean with soft-wash methods rather than pressure washing, apply biocide to slow regrowth and photograph each slope before and after — useful for owners and landlords alike.',
    ],
    propertyTypes: [
      { label: 'Victorian and interwar terraces', detail: 'Shared rooflines with shaded rear slopes — moss cleared and treated.' },
      { label: '1930s semis (B68 / B69)', detail: 'Concrete tiles holding moss on the north side — full surface clean.' },
      { label: 'Homes near the M5 corridor', detail: 'Traffic grime and algae streaks lifted with low-pressure cleaning.' },
      { label: 'Rented properties', detail: 'Dated before & after photos for landlords\' records.' },
    ],
  },
  sandwell: {
    lead: 'Sandwell is the metropolitan borough that includes West Bromwich, Oldbury, Smethwick, Tipton, Wednesbury and Rowley Regis, with Sandwell Valley Country Park at its green north-east edge.',
    why: [
      'Across Sandwell the housing is dense — terraces and semis built close together — so rear roofs get little sun and stay damp. That is where moss and algae take hold, and where it washes into gutters first.',
      'We cover the whole borough (B64–B71 and nearby postcodes) with soft-wash roof cleaning, biocide treatment and photo proof on every job, so you can see the roof is clear without going up a ladder.',
    ],
    propertyTypes: [
      { label: 'Terraces in Smethwick, Tipton and Oldbury', detail: 'Closely packed roofs with shaded rear slopes — moss cleared and treated.' },
      { label: '1930s–50s semis', detail: 'Concrete interlocking tiles — the most common Sandwell roof we clean.' },
      { label: 'Homes near Sandwell Valley', detail: 'More trees and leaf fall; gutters checked at the roofline.' },
      { label: 'Landlord and housing-association stock', detail: 'Documented cleans with before & after photos.' },
    ],
  },
  solihull: {
    lead: 'Solihull is one of the greenest boroughs in the West Midlands, from the town centre and Shirley to the villages of Knowle and Dorridge, with large gardens, mature trees and many detached homes across B90–B94.',
    why: [
      'Big gardens and mature trees are lovely but they shade roofs and drop leaves, which is why Solihull roofs often carry thick moss on the rear slopes. That moss keeps tiles wet and sheds into gutters every autumn.',
      'Many Solihull homes are larger 1930s–70s semis and detached houses with complex roofs — valleys, dormers and extensions. We clean them in one visit with soft-wash methods, apply biocide and photograph every slope.',
    ],
    propertyTypes: [
      { label: 'Detached homes in Knowle and Dorridge', detail: 'Large, complex roofs with valleys and dormers — cleaned without scaffolding.' },
      { label: '1930s–70s semis around Shirley and Olton', detail: 'Concrete tiles shaded by mature trees — moss removed and biocide applied.' },
      { label: 'Homes near Brueton Park and Malvern Park', detail: 'Leaf fall and shade mean faster regrowth; gutters checked too.' },
      { label: 'Bungalows across the borough', detail: 'Low roofs cleaned and treated with photo proof.' },
    ],
  },
  'sutton-coldfield': {
    lead: 'Sutton Coldfield, the Royal Town to the north of Birmingham, surrounds Sutton Park — one of the largest urban parks in Europe — and is known for big detached homes in Four Oaks and Mere Green across B72–B76.',
    why: [
      'Oaks, birches and other mature trees in and around Sutton Park drop leaves and seeds onto roofs and keep them shaded, so moss grows thick on the north-facing slopes. Large roofs mean a lot of moss ends up in the gutters each autumn.',
      'Many Sutton Coldfield homes are large detached and semi-detached houses with clay or concrete tiles and complicated rooflines. We soft-wash them in one visit, apply biocide and send before & after photos of each elevation.',
    ],
    propertyTypes: [
      { label: 'Large detached homes in Four Oaks', detail: 'Big, complex roofs with valleys and dormers — cleaned without scaffolding.' },
      { label: 'Homes near Sutton Park', detail: 'Heavy tree shade and leaf fall — biocide applied to slow regrowth.' },
      { label: '1930s–60s semis around Wylde Green and Boldmere', detail: 'Concrete tile roofs with moss on the rear slopes.' },
      { label: 'Mere Green and Walmley estates', detail: 'Modern estate roofs cleaned and documented in one visit.' },
    ],
  },
  walsall: {
    lead: 'Walsall is a Black Country borough stretching from the town centre and its Arboretum out to Aldridge, Streetly and Bloxwich, covering the WS1–WS9 postcodes.',
    why: [
      'Near the centre, Walsall has rows of Victorian terraces with older roofs and shared valleys; further out, Aldridge and Streetly have larger semis and detached homes with more trees and more shade. Both styles collect moss on the shaded slopes.',
      'We clean Walsall roofs with low-pressure soft-wash methods, apply biocide afterwards and photograph the finished roof — so tiles and pointing are protected and you can see the result.',
    ],
    propertyTypes: [
      { label: 'Victorian terraces near the town centre', detail: 'Older roofs with shared valleys — moss removed without high pressure.' },
      { label: 'Semis and detached homes in Aldridge and Streetly', detail: 'More tree cover, more moss — biocide slows regrowth.' },
      { label: 'Bloxwich and Willenhall estates', detail: 'Concrete tile roofs with moss in the laps — full surface treatment.' },
      { label: 'Homes near the Arboretum', detail: 'Shade and leaf fall — gutters checked at the roofline too.' },
    ],
  },
  wolverhampton: {
    lead: 'Wolverhampton is a city with a wide housing mix — Victorian villas in Tettenhall and Penn, terraces around West Park, and large 1930s and post-war estates across WV1–WV11.',
    why: [
      'Older villas in areas like Tettenhall and Penn often have clay tiles, chimneys and complex valleys that hold moss and debris. The many 1930s semis across the city mostly have concrete tiles, where moss grows in every lap on the rear slope.',
      'Higher ground in places like Penn catches more wind and rain, which spreads moss and lichen across exposed ridges. We soft-wash, apply biocide and send before & after photos for every roof.',
    ],
    propertyTypes: [
      { label: 'Victorian villas in Tettenhall and Penn', detail: 'Clay tiles and complex valleys — gentle soft-wash cleaning.' },
      { label: 'Terraces around West Park', detail: 'Compact rooflines with moss in valleys and along party walls.' },
      { label: '1930s and post-war semis', detail: 'Concrete tiles — the most common Wolverhampton roof we treat.' },
      { label: 'Exposed homes on higher ground', detail: 'Wind-driven lichen on ridges removed and treated.' },
    ],
  },
};

export function roofTownLocal(slug: string): RoofTownLocal | undefined {
  return ROOF_TOWN_LOCAL[slug];
}
