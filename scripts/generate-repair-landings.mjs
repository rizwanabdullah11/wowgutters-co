/**
 * One-shot generator: unique gutter-repair landings for the requested area list.
 * Run: node scripts/generate-repair-landings.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

/** @type {Record<string, { name: string; postcodes: string[]; nearby: string[]; hub: string; geo: {latitude:number;longitude:number}; streets: string[]; character: string; repairFocus: string; housing: string; treesOrWeather: string; props: [string, string][]; faqExtra?: {q:string;a:string} }>} */
const AREAS = {
  'selly-park': {
    name: 'Selly Park',
    postcodes: ['B29'],
    nearby: ['Selly Oak', 'Bournbrook', 'Moseley', 'Harborne', 'Edgbaston'],
    hub: 'birmingham',
    geo: { latitude: 52.445, longitude: -1.91 },
    streets: ['Lonsdale Road', 'Elmfield Road', 'Bournbrook Road', 'Frankland Road'],
    character: 'leafy south-west Birmingham suburb beside the Bourn Brook valley and the University of Birmingham campus',
    repairFocus: 'period cast-iron joints and long villa runs that sag under wet leaf weight',
    housing: 'Victorian and Edwardian terraces plus large Pershore Road villas',
    treesOrWeather: 'mature garden trees and parkland leaf fall from September through December',
    props: [
      ['Victorian terraces (Lonsdale Road, Elmfield Road)', 'Leaking cast-iron and early uPVC joints resealed and flow-tested without ladders against ornate brickwork.'],
      ['Pershore Road villas', 'Long multi-valley gutter runs rehung where brackets have pulled away from the fascia.'],
      ['Edwardian semis near the park', 'Sagging sections behind Bourn Brook tree cover — brackets replaced and fall restored.'],
      ['Converted flats & HMOs', 'Joint reseals and section swaps with photo reports suitable for landlord records.'],
    ],
  },
  bromford: {
    name: 'Bromford',
    postcodes: ['B36'],
    nearby: ['Castle Bromwich', 'Hodge Hill', 'Stechford', 'Washwood Heath', 'Chelmsley Wood'],
    hub: 'birmingham',
    geo: { latitude: 52.5, longitude: -1.79 },
    streets: ['Bromford Lane', 'Henhurst Road', 'Hall Road', 'Newstead Road'],
    character: 'east Birmingham neighbourhood between Castle Bromwich and Hodge Hill along the Bromford Lane corridor',
    repairFocus: 'post-war uPVC runs with tired brackets and open joints after years of estate-tree debris',
    housing: 'post-war semis, terraces and later infill homes',
    treesOrWeather: 'street-tree silt and moss that load gutters until brackets snap',
    props: [
      ['Post-war semis (Bromford Lane, Henhurst Road)', 'Sagging uPVC rehung with new brackets and joints resealed.'],
      ['Terraces near Hodge Hill border', 'Cracked sections replaced and outlets realigned for proper fall.'],
      ['Later estate homes', 'Loose fascia fixings and dripping stop-ends repaired in a single visit.'],
      ['Flats & managed blocks', 'Documented repairs for managing agents across B36.'],
    ],
  },
  duddeston: {
    name: 'Duddeston',
    postcodes: ['B7'],
    nearby: ['Nechells', 'Saltley', 'Aston', 'Vauxhall', 'Highgate'],
    hub: 'birmingham',
    geo: { latitude: 52.492, longitude: -1.875 },
    streets: ['Duddeston Manor Road', 'George Arthur Road', 'Cato Street', 'Nechells Park Road'],
    character: 'inner-east Birmingham district next to Nechells and the Aston Expressway approaches',
    repairFocus: 'ageing estate guttering and mixed commercial/residential rooflines with failed seals',
    housing: 'post-war estates, terraces and mixed-use buildings',
    treesOrWeather: 'urban dust, moss and overflow from short, heavily used gutter runs',
    props: [
      ['Estate terraces (Duddeston Manor Road)', 'Joint reseals and cracked section swaps on compact terrace runs.'],
      ['Mixed-use & shop fronts', 'Downpipe and outlet repairs scheduled around trading hours.'],
      ['Newer infill homes', 'Bracket replacements where fixings have pulled from lightweight fascias.'],
      ['Landlord portfolios', 'Batch repairs with before & after photos for tenancy files.'],
    ],
  },
  'lea-hall': {
    name: 'Lea Hall',
    postcodes: ['B33'],
    nearby: ['Stechford', 'Kitts Green', 'Sheldon', 'Yardley', 'Bordesley Green'],
    hub: 'birmingham',
    geo: { latitude: 52.485, longitude: -1.78 },
    streets: ['Lea Hall Road', 'Flaxley Road', 'Yew Tree Road', 'Old Lea Hall Road'],
    character: 'established east Birmingham suburb on the Stechford–Sheldon corridor',
    repairFocus: '1930s–60s semis with sagging mid-run brackets and leaking union joints',
    housing: 'interwar semis, post-war terraces and family homes',
    treesOrWeather: 'garden trees along Lea Hall Road and Flaxley Road that overload autumn gutters',
    props: [
      ['Interwar semis (Lea Hall Road)', 'Sagging mid-runs rehung; joints resealed and flow-tested.'],
      ['Post-war terraces', 'Cracked uPVC sections replaced to stop wall staining.'],
      ['Larger family homes near Sheldon', 'Multi-downpipe systems inspected and repaired in one visit.'],
      ['Rental properties', 'Honest advice where full replacement beats repeated patch repairs.'],
    ],
  },
  'south-yardley': {
    name: 'South Yardley',
    postcodes: ['B25', 'B26'],
    nearby: ['Yardley', 'Acocks Green', 'Sheldon', 'Bordesley Green', 'Hay Mills'],
    hub: 'birmingham',
    geo: { latitude: 52.456, longitude: -1.816 },
    streets: ['Westley Road', 'Church Road', 'Stoney Lane', 'Kineton Road'],
    character: 'south-east Birmingham area between Yardley village and the Acocks Green border',
    repairFocus: 'Victorian and Edwardian joints failing on solid-wall terraces plus tired uPVC on later semis',
    housing: 'period terraces, interwar semis and Coventry Road corridor properties',
    treesOrWeather: 'heavy leaf fall on Westley Road and Church Road plus traffic film on fascias',
    props: [
      ['Victorian terraces (Westley Road, Church Road)', 'Cast-iron and early uPVC leaks resealed; overflow staining addressed at source.'],
      ['1930s semis', 'Bracket fatigue and open joints repaired with proper fall restored.'],
      ['Coventry Road corridor homes', 'Stop-ends, outlets and downpipe junctions fixed after storm damage.'],
      ['Commercial units with flats above', 'Quiet, documented repairs suitable for landlords and agents.'],
    ],
  },
  'tile-cross': {
    name: 'Tile Cross',
    postcodes: ['B33'],
    nearby: ['Stechford', 'Marston Green', 'Chelmsley Wood', 'Kitts Green', 'Hodge Hill'],
    hub: 'birmingham',
    geo: { latitude: 52.479, longitude: -1.79 },
    streets: ['Tile Cross Road', 'Bosworth Drive', 'Gilson Way', 'Lyttelton Road'],
    character: 'east Birmingham neighbourhood bordering Marston Green and the Chelmsley Wood estates',
    repairFocus: 'estate-era uPVC with brittle joints and brackets that fail under wet debris weight',
    housing: 'post-war semis, terraces and later housing association stock',
    treesOrWeather: 'open estate planting that sheds into long continuous gutter runs',
    props: [
      ['Post-war semis (Tile Cross Road)', 'Sagging runs rehung; cracked unions replaced.'],
      ['Terraces near Kitts Green', 'Outlet blockages cleared and leaking junctions resealed.'],
      ['Later estate homes', 'Fascia bracket replacements where fixings have pulled through.'],
      ['Managed housing', 'Photo packs for agents after every repair visit.'],
    ],
  },
  kingshurst: {
    name: 'Kingshurst',
    postcodes: ['B37'],
    nearby: ['Chelmsley Wood', 'Fordbridge', 'Marston Green', 'Smiths Wood', 'Castle Bromwich'],
    hub: 'birmingham',
    geo: { latitude: 52.488, longitude: -1.752 },
    streets: ['Kingshurst Way', 'Bosworth Drive', 'Marlene Croft', 'Helmswood Drive'],
    character: 'north Solihull / east Birmingham estate neighbourhood beside Chelmsley Wood',
    repairFocus: 'long estate gutter runs with repeated joint failure and loose brackets',
    housing: '1960s–80s semis, terraces and maisonettes',
    treesOrWeather: 'estate trees and moss that pack outlets until water backs up over the fascia',
    props: [
      ['1960s–80s semis (Kingshurst Way)', 'Joint reseals and section replacements on brittle uPVC.'],
      ['Maisonettes & flats', 'Safe access repairs with written condition notes for freeholders.'],
      ['Corner plots with long runs', 'Fall corrected where water ponds mid-run.'],
      ['Landlord blocks', 'Priority slots for overflowing or storm-damaged gutters.'],
    ],
  },
  fordbridge: {
    name: 'Fordbridge',
    postcodes: ['B37'],
    nearby: ['Kingshurst', 'Chelmsley Wood', 'Marston Green', 'Smiths Wood', 'Bickenhill'],
    hub: 'birmingham',
    geo: { latitude: 52.492, longitude: -1.753 },
    streets: ['Fordbridge Road', 'Bosworth Drive', 'Marlene Croft', 'Pennine Way'],
    character: 'Chelmsley Wood-edge community on the Birmingham–Solihull border',
    repairFocus: 'storm-loosened brackets and cracked downpipe junctions on estate housing',
    housing: 'post-war family homes and terraces',
    treesOrWeather: 'exposed estate roofs that take the full force of West Midlands wind and rain',
    props: [
      ['Family semis (Fordbridge Road)', 'Storm-damaged sections replaced and flow-tested.'],
      ['Terraces near Chelmsley Wood', 'Leaking unions and stop-ends resealed.'],
      ['Corner and end-terrace plots', 'Extra bracket support where long runs pull away.'],
      ['Rental stock', 'Fixed quotes before work — no surprise extras.'],
    ],
  },
  bordesley: {
    name: 'Bordesley',
    postcodes: ['B9'],
    nearby: ['Small Heath', 'Bordesley Green', 'Digbeth', 'Saltley', 'Nechells'],
    hub: 'birmingham',
    geo: { latitude: 52.475, longitude: -1.865 },
    streets: ['Bordesley Street', 'Coventry Road', 'Derby Road', 'Arthur Street'],
    character: 'inner-city Birmingham district on the Coventry Road approach to Digbeth and Small Heath',
    repairFocus: 'compact terrace gutters with failed seals and mixed commercial rooflines',
    housing: 'Victorian terraces, workshops and flats above shops',
    treesOrWeather: 'urban debris and overflow that stains solid brick walls within weeks',
    props: [
      ['Victorian terraces (Derby Road, Arthur Street)', 'Joint reseals and cracked cast-iron / uPVC sections replaced.'],
      ['Coventry Road shops with flats above', 'Quiet repairs around business hours with photo evidence.'],
      ['Small Heath border homes', 'Downpipe junctions unblocked and resealed after overflow.'],
      ['HMO & landlord stock', 'Condition reports included with every repair.'],
    ],
  },
  'rotton-park': {
    name: 'Rotton Park',
    postcodes: ['B16'],
    nearby: ['Ladywood', 'Edgbaston', 'Jewellery Quarter', 'Winson Green', 'Hockley'],
    hub: 'birmingham',
    geo: { latitude: 52.475, longitude: -1.918 },
    streets: ['Rotton Park Road', 'City Road', 'Icknield Street', 'Monument Road'],
    character: 'west Birmingham suburb between Edgbaston, Ladywood and the Jewellery Quarter',
    repairFocus: 'period property gutters where brackets pull from painted fascias and joints weep onto bay windows',
    housing: 'Victorian / Edwardian semis, terraces and converted houses',
    treesOrWeather: 'city-centre edge weather plus mature street trees along Rotton Park Road',
    props: [
      ['Victorian semis (Rotton Park Road)', 'Leaking unions resealed; bay-window overflow stopped at source.'],
      ['Converted townhouses', 'Multi-level runs repaired with photographic documentation.'],
      ['Edgbaston border homes', 'Cast-iron care and uPVC section swaps as needed.'],
      ['Managed conversions', 'Agent-friendly reports after every visit.'],
    ],
  },
  summerfield: {
    name: 'Summerfield',
    postcodes: ['B19'],
    nearby: ['Winson Green', 'Ladywood', 'Jewellery Quarter', 'Hockley', 'Newtown'],
    hub: 'birmingham',
    geo: { latitude: 52.493, longitude: -1.918 },
    streets: ['Summerfield Crescent', 'City Road', 'Icknield Street', 'Dudley Road'],
    character: 'inner-west Birmingham neighbourhood around Summerfield Park and the Dudley Road corridor',
    repairFocus: 'compact terrace joints and park-edge homes where leaf weight opens unions',
    housing: 'terraces, semis and park-facing family homes',
    treesOrWeather: 'Summerfield Park leaf fall plus Dudley Road traffic dust on fascias',
    props: [
      ['Park-facing homes (Summerfield Crescent)', 'Debris-loaded sagging runs rehung and resealed.'],
      ['Dudley Road terraces', 'Cracked sections and leaking stop-ends replaced.'],
      ['Converted flats', 'Quiet access repairs with landlord photo packs.'],
      ['Corner plots', 'Extra brackets where wind funnels along open park edges.'],
    ],
  },
  oscott: {
    name: 'Oscott',
    postcodes: ['B44'],
    nearby: ['Kingstanding', 'Perry Barr', 'Great Barr', 'Perry Common', 'Hamstead'],
    hub: 'birmingham',
    geo: { latitude: 52.535, longitude: -1.868 },
    streets: ['Oscott Road', 'Aldridge Road', 'Walsall Road', 'Birchdale Road'],
    character: 'north Birmingham suburb on the Kingstanding–Great Barr corridor near Oscott College',
    repairFocus: '1930s–60s uPVC with joint fatigue and brackets loosened by Aldridge Road tree cover',
    housing: 'interwar and post-war semis and family homes',
    treesOrWeather: 'mature trees along Oscott Road and Walsall Road that pack gutters twice a year',
    props: [
      ['Interwar semis (Oscott Road)', 'Sagging mid-runs rehung; joints resealed.'],
      ['Post-war family homes', 'Outlet and downpipe junction repairs after overflow.'],
      ['Great Barr border properties', 'Long runs regraded for correct fall.'],
      ['Landlord portfolios in B44', 'Scheduled repairs with fixed quotes.'],
    ],
  },
  warstock: {
    name: 'Warstock',
    postcodes: ['B14'],
    nearby: ['Kings Heath', 'Maypole', 'Yardley Wood', 'Shirley', 'Tidbury Green'],
    hub: 'birmingham',
    geo: { latitude: 52.411, longitude: -1.864 },
    streets: ['Warstock Road', 'Alcester Road', 'School Road', 'Yardley Wood Road'],
    character: 'south Birmingham suburb between Kings Heath, Maypole and Yardley Wood',
    repairFocus: 'leaf-loaded interwar gutters that pull brackets and open joints each autumn',
    housing: '1930s semis, bungalows and later infill',
    treesOrWeather: 'dense garden and street trees along Warstock Road and Yardley Wood Road',
    props: [
      ['1930s semis (Warstock Road)', 'Bracket replacements and joint reseals after autumn loading.'],
      ['Bungalows', 'Low-level cracked sections and stop-ends replaced quickly.'],
      ['Alcester Road corridor homes', 'Storm-damaged runs repaired and flow-tested.'],
      ['Maypole border properties', 'Honest advice if full replacement is better value.'],
    ],
  },
  maypole: {
    name: 'Maypole',
    postcodes: ['B14'],
    nearby: ['Kings Heath', 'Warstock', 'Yardley Wood', 'Shirley', 'Dickens Heath'],
    hub: 'birmingham',
    geo: { latitude: 52.4, longitude: -1.844 },
    streets: ['Alcester Road', 'Maypole Lane', 'Billesley Lane', 'School Road'],
    character: 'southern Birmingham gateway on the Alcester Road towards Shirley and Dickens Heath',
    repairFocus: 'busy-corridor homes with tired fascia fixings and leaking unions on long front runs',
    housing: 'interwar semis, later estates and retail-corridor properties',
    treesOrWeather: 'exposed Alcester Road wind plus leaf fall from Billesley Lane gardens',
    props: [
      ['Alcester Road semis', 'Front-run joints resealed; brackets resecured to fascia.'],
      ['Maypole Lane family homes', 'Sagging sections rehung and outlets cleared of moss.'],
      ['Billesley Lane border', 'Cracked uPVC replaced after freeze–thaw damage.'],
      ['Shops with flats above', 'Documented repairs around trading hours.'],
    ],
  },
  vauxhall: {
    name: 'Vauxhall',
    postcodes: ['B7'],
    nearby: ['Aston', 'Nechells', 'Duddeston', 'Saltley', 'Birmingham city centre'],
    hub: 'birmingham',
    geo: { latitude: 52.488, longitude: -1.862 },
    streets: ['Vauxhall Road', 'Thimble Mill Lane', 'Miller Street', 'Lichfield Road'],
    character: 'inner Birmingham area between Aston, Nechells and the city-centre approaches',
    repairFocus: 'short industrial-edge and terrace gutters with failed seals and damaged downpipes',
    housing: 'terraces, workshops and regenerated residential stock',
    treesOrWeather: 'urban dust and sudden storm overflow on compact rooflines',
    props: [
      ['Terraces (Vauxhall Road, Miller Street)', 'Joint reseals and cracked section swaps.'],
      ['Workshop & mixed-use units', 'Downpipe repairs scheduled outside peak hours.'],
      ['Regenerated homes', 'Modern uPVC brackets and unions corrected where poorly installed.'],
      ['Landlord stock near Aston', 'Photo evidence for every repair.'],
    ],
  },
  bickenhill: {
    name: 'Bickenhill',
    postcodes: ['B92'],
    nearby: ['NEC', 'Birmingham Airport', 'Solihull', 'Marston Green', 'Hampton-in-Arden'],
    hub: 'solihull',
    geo: { latitude: 52.448, longitude: -1.745 },
    streets: ['Bickenhill Road', 'Birmingham Road', 'Catherine-de-Barnes Lane', 'Shadowbrook Lane'],
    character: 'Solihull parish beside Birmingham Airport, the NEC and Catherine-de-Barnes',
    repairFocus: 'rural-edge and village gutters stressed by jet-wash wind and long exposed runs',
    housing: 'village cottages, detached homes and airport-corridor properties',
    treesOrWeather: 'open countryside wind plus jet-blast turbulence near airport approaches',
    props: [
      ['Village cottages (Bickenhill Road)', 'Cast-iron and uPVC leaks resealed with care for period fascias.'],
      ['Detached homes near Catherine-de-Barnes', 'Long runs rehung where wind has loosened brackets.'],
      ['Airport-corridor properties', 'Storm clips and joints checked after high-wind events.'],
      ['Rural outbuildings with gutters', 'Section replacements and outlet realignment.'],
    ],
  },
  cranmore: {
    name: 'Cranmore',
    postcodes: ['B90'],
    nearby: ['Shirley', 'Solihull', 'Monkspath', 'Widney Manor', 'Haslucks Green'],
    hub: 'solihull',
    geo: { latitude: 52.41, longitude: -1.808 },
    streets: ['Cranmore Avenue', 'Stratford Road', 'Haslucks Green Road', 'Monkspath Hall Road'],
    character: 'Shirley-side Solihull neighbourhood near Cranmore Industrial Estate and Haslucks Green',
    repairFocus: '1970s–90s uPVC with joint fatigue on family semis and estate homes',
    housing: 'modern semis, detached homes and Stratford Road corridor properties',
    treesOrWeather: 'estate planting and Stratford Road exposure that ages fascia fixings',
    props: [
      ['Family semis (Cranmore Avenue)', 'Sagging uPVC rehung; unions resealed.'],
      ['Detached homes near Monkspath', 'Multi-downpipe systems repaired in one visit.'],
      ['Stratford Road corridor', 'Storm-damaged stop-ends and outlets replaced.'],
      ['Newer builds', 'Warranty-friendly repairs where brackets were under-fixed.'],
    ],
  },
  'dickens-heath': {
    name: 'Dickens Heath',
    postcodes: ['B90'],
    nearby: ['Shirley', 'Solihull', 'Blythe Valley', 'Cheswick Green', 'Monkspath'],
    hub: 'solihull',
    geo: { latitude: 52.396, longitude: -1.79 },
    streets: ['Dickens Heath Road', 'Blythe Way', 'School Lane', 'Stratford Road'],
    character: 'planned Solihull village with canalside homes, apartments and Blythe Valley business park nearby',
    repairFocus: 'modern uPVC and shared rooflines where poorly seated joints weep onto render',
    housing: 'new-build houses, apartments and townhouses',
    treesOrWeather: 'village planting and canal-edge moisture that accelerate moss in outlets',
    props: [
      ['New-build houses (Dickens Heath Road)', 'Under-fixed brackets and weeping joints corrected.'],
      ['Apartment blocks', 'Shared gutter repairs with freeholder photo reports.'],
      ['Canalside townhouses', 'Outlet and downpipe junctions cleared and resealed.'],
      ['Blythe Valley border homes', 'Storm checks after high-wind events.'],
    ],
  },
  elmdon: {
    name: 'Elmdon',
    postcodes: ['B26'],
    nearby: ['Birmingham Airport', 'Solihull', 'Sheldon', 'Marston Green', 'Bickenhill'],
    hub: 'solihull',
    geo: { latitude: 52.445, longitude: -1.76 },
    streets: ['Elmdon Lane', 'Bickenhill Road', 'Damson Parkway', 'Birmingham Road'],
    character: 'Solihull / Sheldon border area near Elmdon Park, Damson Parkway and the airport approaches',
    repairFocus: 'park-edge leaf loading and airport-corridor wind stress on brackets',
    housing: 'family semis, detached homes and Sheldon-border terraces',
    treesOrWeather: 'Elmdon Park leaf fall plus open Damson Parkway exposure',
    props: [
      ['Park-edge homes (Elmdon Lane)', 'Sagging runs rehung after heavy autumn loading.'],
      ['Sheldon border semis', 'Joint reseals and cracked section swaps.'],
      ['Damson Parkway corridor', 'Wind-loosened brackets resecured.'],
      ['Larger detached plots', 'Full-run inspections with flow testing.'],
    ],
  },
  hillfield: {
    name: 'Hillfield',
    postcodes: ['B91'],
    nearby: ['Solihull', 'Olton', 'Shirley', 'Monkspath', 'Widney Manor'],
    hub: 'solihull',
    geo: { latitude: 52.417, longitude: -1.773 },
    streets: ['Hillfield Road', 'Solihull High Street', 'Marsh Lane', 'Lode Lane'],
    character: 'central Solihull neighbourhood near the town centre, Marsh Lane and Lode Lane',
    repairFocus: 'mature suburban gutters on larger homes where mid-run brackets fail first',
    housing: 'detached and semi-detached family homes',
    treesOrWeather: 'established gardens that drop heavy leaf loads onto long gutter runs',
    props: [
      ['Detached homes (Hillfield Road)', 'Long runs rehung; joints resealed and flow-tested.'],
      ['Semis near Marsh Lane', 'Cracked sections replaced after freeze–thaw.'],
      ['Town-centre edge properties', 'Quiet repairs with kerb-appeal photo packs.'],
      ['Olton border homes', 'Downpipe junctions repaired where water backs up.'],
    ],
  },
  monkspath: {
    name: 'Monkspath',
    postcodes: ['B90'],
    nearby: ['Solihull', 'Shirley', 'Olton', 'Widney Manor', 'Dickens Heath'],
    hub: 'solihull',
    geo: { latitude: 52.395, longitude: -1.795 },
    streets: ['Monkspath Hall Road', 'Haslucks Green Road', 'Stratford Road', 'Widney Road'],
    character: 'south Solihull suburb of family estates around Monkspath Hall Road and Widney Manor',
    repairFocus: '1980s–2000s uPVC with ageing seals on large detached and semi plots',
    housing: 'modern detached homes, semis and executive estates',
    treesOrWeather: 'estate trees and open Stratford Road wind that age fascia fixings',
    props: [
      ['Detached estates (Monkspath Hall Road)', 'Multi-elevation repairs in a single visit.'],
      ['Semis near Widney Manor', 'Joint reseals and bracket upgrades.'],
      ['Haslucks Green border', 'Storm-damaged stop-ends replaced.'],
      ['Newer plots', 'Installation defects corrected under honest advice.'],
    ],
  },
  silhill: {
    name: 'Silhill',
    postcodes: ['B91'],
    nearby: ['Solihull town centre', 'Olton', 'Shirley', 'Hillfield', 'Monkspath'],
    hub: 'solihull',
    geo: { latitude: 52.41, longitude: -1.77 },
    streets: ['Solihull High Street', 'Station Road', 'Poplar Road', 'Lode Lane'],
    character: 'historic Solihull town ward around the High Street, station and Poplar Road',
    repairFocus: 'period and town-centre gutters where appearance matters as much as watertight seals',
    housing: 'period townhouses, semis and flats above the high street',
    treesOrWeather: 'compact town plots with sudden overflow staining pale render and brick',
    props: [
      ['Townhouses near High Street', 'Discrete joint reseals and section swaps.'],
      ['Station Road semis', 'Sagging runs rehung for correct fall.'],
      ['Flats above retail', 'Documented repairs for freeholders and agents.'],
      ['Poplar Road family homes', 'Outlet and downpipe junctions flow-tested after repair.'],
    ],
  },
  'smiths-wood': {
    name: 'Smiths Wood',
    postcodes: ['B36'],
    nearby: ['Chelmsley Wood', 'Kingshurst', 'Fordbridge', 'Marston Green', 'Castle Vale'],
    hub: 'solihull',
    geo: { latitude: 52.495, longitude: -1.75 },
    streets: ['Smiths Wood Road', 'Church Way', 'Woodlands Way', 'Kingshurst Way'],
    character: 'north Solihull estate community beside Chelmsley Wood and Kingshurst',
    repairFocus: 'estate guttering with brittle joints and repeated overflow at shared outlets',
    housing: '1960s–80s semis, terraces and maisonettes',
    treesOrWeather: 'estate planting that packs outlets until water sheets over fascias',
    props: [
      ['Estate semis (Smiths Wood Road)', 'Joint reseals and cracked section replacements.'],
      ['Maisonettes', 'Shared-run repairs with photo packs for freeholders.'],
      ['Kingshurst border homes', 'Brackets upgraded where runs pull away.'],
      ['Housing association stock', 'Fixed quotes and scheduled access.'],
    ],
  },
  'solihull-lodge': {
    name: 'Solihull Lodge',
    postcodes: ['B90'],
    nearby: ['Shirley', 'Monkspath', 'Cheswick Green', 'Solihull', 'Hall Green'],
    hub: 'solihull',
    geo: { latitude: 52.385, longitude: -1.825 },
    streets: ['Solihull Lodge Road', 'Stratford Road', 'Lodge Road', 'Widney Road'],
    character: 'southern Shirley / Solihull fringe towards Cheswick Green and Hall Green',
    repairFocus: 'leaf-heavy suburban runs and Stratford Road corridor wind damage',
    housing: 'family semis, bungalows and detached homes',
    treesOrWeather: 'mature gardens and open southern approaches that load gutters each autumn',
    props: [
      ['Family semis (Solihull Lodge Road)', 'Sagging mid-runs rehung and resealed.'],
      ['Bungalows', 'Fast section and stop-end replacements.'],
      ['Stratford Road corridor', 'Storm clips and outlets checked after high winds.'],
      ['Hall Green border homes', 'Honest repair-vs-replace advice.'],
    ],
  },
  'tidbury-green': {
    name: 'Tidbury Green',
    postcodes: ['B90'],
    nearby: ['Shirley', 'Dickens Heath', 'Cheswick Green', 'Monkspath', 'Earlswood'],
    hub: 'solihull',
    geo: { latitude: 52.375, longitude: -1.815 },
    streets: ['Tidbury Green Road', 'Dickens Heath Road', 'Pilgrims Way', 'Blythe Road'],
    character: 'semi-rural Solihull village south of Shirley towards Earlswood and Dickens Heath',
    repairFocus: 'exposed village gutters on larger plots where brackets fail under wet leaf weight',
    housing: 'detached homes, bungalows and village cottages',
    treesOrWeather: 'open countryside wind and dense garden trees along Tidbury Green Road',
    props: [
      ['Detached village homes', 'Long runs rehung; joints resealed after autumn loading.'],
      ['Bungalows & cottages', 'Cracked sections and cast-iron care as needed.'],
      ['Dickens Heath border new-builds', 'Installation defects corrected.'],
      ['Larger plots with outbuildings', 'Gutter repairs across house and garage runs.'],
    ],
  },
  bearwood: {
    name: 'Bearwood',
    postcodes: ['B66'],
    nearby: ['Smethwick', 'Warley', 'Oldbury', 'Harborne', 'Cape Hill'],
    hub: 'sandwell',
    geo: { latitude: 52.478, longitude: -1.969 },
    streets: ['Bearwood Road', 'Londonderry Lane', 'Sandwell Road', 'Regent Street'],
    character: 'busy Sandwell high-street suburb between Smethwick, Warley and the Harborne border',
    repairFocus: 'terrace and shop-front gutters with failed seals above busy Bearwood Road',
    housing: 'Victorian / Edwardian terraces, semis and flats above retail',
    treesOrWeather: 'compact plots where overflow stains frontages highly visible from the high street',
    props: [
      ['Terraces (Bearwood Road, Regent Street)', 'Joint reseals and cracked section swaps.'],
      ['Flats above shops', 'Quiet repairs with landlord documentation.'],
      ['Londonderry Lane semis', 'Sagging runs rehung for correct fall.'],
      ['Harborne border homes', 'Period fascia-friendly bracket work.'],
    ],
  },
  warley: {
    name: 'Warley',
    postcodes: ['B68'],
    nearby: ['Oldbury', 'Langley Green', 'Bearwood', 'Smethwick', 'Quinton'],
    hub: 'sandwell',
    geo: { latitude: 52.488, longitude: -1.998 },
    streets: ['Warley Road', 'St James\'s Road', 'Moat Road', 'Claypit Lane'],
    character: 'Sandwell suburb around Warley Woods and the Oldbury–Bearwood corridor',
    repairFocus: 'woods-edge leaf loading that opens joints and pulls brackets on family homes',
    housing: 'interwar semis, terraces and larger plots near Warley Woods',
    treesOrWeather: 'Warley Woods leaf fall and damp microclimate along Moat Road',
    props: [
      ['Woods-edge homes (Warley Road, Moat Road)', 'Autumn-damaged runs rehung and resealed.'],
      ['Interwar semis', 'Union leaks and cracked sections replaced.'],
      ['Langley Green border', 'Downpipe junctions repaired after overflow.'],
      ['Larger family plots', 'Full-system flow test after every repair.'],
    ],
  },
  tividale: {
    name: 'Tividale',
    postcodes: ['DY4'],
    nearby: ['Tipton', 'Dudley', 'Great Bridge', 'West Bromwich', 'Oldbury'],
    hub: 'sandwell',
    geo: { latitude: 52.519, longitude: -2.048 },
    streets: ['Tividale Road', 'Sedgley Road', 'Castle Gate', 'New Birmingham Road'],
    character: 'Sandwell / Dudley border suburb on the Tividale Road and New Birmingham Road corridors',
    repairFocus: 'post-war uPVC with joint fatigue and industrial-edge dust accelerating wear',
    housing: 'post-war semis, terraces and later estates',
    treesOrWeather: 'exposed corridor wind plus moss in shaded rear runs',
    props: [
      ['Post-war semis (Tividale Road)', 'Sagging runs rehung; joints resealed.'],
      ['Terraces near Great Bridge', 'Cracked sections and stop-ends replaced.'],
      ['Sedgley Road corridor', 'Storm-damaged brackets resecured.'],
      ['Landlord stock in DY4', 'Fixed quotes and photo packs.'],
    ],
  },
  'great-bridge': {
    name: 'Great Bridge',
    postcodes: ['DY4'],
    nearby: ['West Bromwich', 'Tipton', 'Dudley', 'Oldbury', 'Wednesbury'],
    hub: 'sandwell',
    geo: { latitude: 52.528, longitude: -2.038 },
    streets: ['Great Bridge Street', 'Horseley Road', 'Sheepwash Lane', 'Tame Road'],
    character: 'historic Sandwell market and canal-side community between Tipton and West Bromwich',
    repairFocus: 'compact terrace and retail gutters with failed seals above busy frontages',
    housing: 'terraces, semis and commercial properties with flats above',
    treesOrWeather: 'canal-edge moisture and urban overflow staining brick quickly',
    props: [
      ['Terraces (Great Bridge Street, Horseley Road)', 'Joint reseals and section replacements.'],
      ['Shops with flats above', 'Repairs scheduled around trading hours.'],
      ['Canal-side homes', 'Outlet moss cleared; leaking unions resealed.'],
      ['Tipton border estates', 'Bracket upgrades on long runs.'],
    ],
  },
  wollaston: {
    name: 'Wollaston',
    postcodes: ['DY8'],
    nearby: ['Stourbridge', 'Amblecote', 'Norton', 'Wordsley', 'Kingswinford'],
    hub: 'dudley',
    geo: { latitude: 52.462, longitude: -2.137 },
    streets: ['Wollaston Road', 'Bridgnorth Road', 'Ismere Road', 'Cheltenham Road'],
    character: 'Stourbridge suburb towards Bridgnorth Road and the Wordsley border',
    repairFocus: 'family-home uPVC with sagging mid-runs on sloping Bridgnorth Road plots',
    housing: 'semis, detached homes and interwar stock',
    treesOrWeather: 'garden trees and hillside drainage that stress gutter fall',
    props: [
      ['Semis (Wollaston Road, Cheltenham Road)', 'Fall corrected; joints resealed.'],
      ['Detached homes near Bridgnorth Road', 'Long runs rehung with extra brackets.'],
      ['Wordsley border properties', 'Storm-damaged sections replaced.'],
      ['Bungalows', 'Fast cracked-section and stop-end repairs.'],
    ],
  },
  pensnett: {
    name: 'Pensnett',
    postcodes: ['DY5'],
    nearby: ['Dudley', 'Kingswinford', 'Brierley Hill', 'Stourbridge', 'Sedgley'],
    hub: 'dudley',
    geo: { latitude: 52.498, longitude: -2.127 },
    streets: ['Pensnett Road', 'Himley Road', 'Brown Bear Lane', 'Summer Hill'],
    character: 'Dudley borough community between Kingswinford, Brierley Hill and Himley Road',
    repairFocus: 'estate and semi gutters with brittle joints after decades of Black Country weather',
    housing: 'post-war semis, terraces and later estates',
    treesOrWeather: 'Himley Road tree cover and industrial-edge moss growth',
    props: [
      ['Post-war semis (Pensnett Road)', 'Joint reseals and sagging runs rehung.'],
      ['Himley Road corridor homes', 'Leaf-loaded brackets replaced.'],
      ['Terraces near Brierley Hill', 'Cracked sections swapped; outlets realigned.'],
      ['Landlord portfolios', 'Batch repairs with documentation.'],
    ],
  },
  'quarry-bank': {
    name: 'Quarry Bank',
    postcodes: ['DY5'],
    nearby: ['Brierley Hill', 'Kingswinford', 'Dudley', 'Stourbridge', 'Halesowen'],
    hub: 'dudley',
    geo: { latitude: 52.478, longitude: -2.102 },
    streets: ['Cakemore Road', 'Quarry Bank Road', 'Saltwells Lane', 'Dudley Road'],
    character: 'historic Dudley industrial village between Brierley Hill and Saltwells nature reserve',
    repairFocus: 'period and post-war gutters where moss from Saltwells woodland packs outlets',
    housing: 'terraces, semis and village cottages',
    treesOrWeather: 'Saltwells woodland moisture and steep-street drainage stress',
    props: [
      ['Village terraces (Quarry Bank Road)', 'Leaking unions resealed; cracked sections replaced.'],
      ['Semis near Saltwells', 'Moss-packed outlets cleared; brackets upgraded.'],
      ['Cakemore Road homes', 'Storm damage repaired and flow-tested.'],
      ['Cottage stock', 'Cast-iron care alongside modern uPVC repairs.'],
    ],
  },
  wordsley: {
    name: 'Wordsley',
    postcodes: ['DY8'],
    nearby: ['Stourbridge', 'Kingswinford', 'Wollaston', 'Brierley Hill', 'Amblecote'],
    hub: 'dudley',
    geo: { latitude: 52.472, longitude: -2.113 },
    streets: ['Wordsley Road', 'Glasshouse Hill', 'Kingswinford Road', 'Bridgnorth Road'],
    character: 'Stourbridge-edge community known for glassmaking heritage around Glasshouse Hill',
    repairFocus: 'family-home gutters on sloping streets where fall fails and joints weep',
    housing: 'semis, terraces and detached homes',
    treesOrWeather: 'hillside exposure along Glasshouse Hill and Kingswinford Road',
    props: [
      ['Semis (Wordsley Road, Glasshouse Hill)', 'Fall restored; sagging mid-runs rehung.'],
      ['Terraces near Amblecote', 'Joint reseals and section swaps.'],
      ['Detached homes on Bridgnorth Road', 'Long-run bracket upgrades.'],
      ['Landlord stock', 'Fixed quotes before any work starts.'],
    ],
  },
  bentley: {
    name: 'Bentley',
    postcodes: ['WS2'],
    nearby: ['Walsall', 'Bloxwich', 'Birchills', 'Leamore', 'Willenhall'],
    hub: 'walsall',
    geo: { latitude: 52.578, longitude: -2.008 },
    streets: ['Bentley Lane', 'School Street', 'Little Station Street', 'Bentley Road'],
    character: 'Walsall neighbourhood between Birchills, Willenhall and the Bentley Lane corridor',
    repairFocus: 'compact terrace and semi gutters with failed seals after Black Country winters',
    housing: 'terraces, semis and post-war stock',
    treesOrWeather: 'urban leaf fall and freeze–thaw that cracks brittle uPVC',
    props: [
      ['Terraces (Bentley Lane, School Street)', 'Joint reseals and cracked sections replaced.'],
      ['Post-war semis', 'Sagging runs rehung with new brackets.'],
      ['Willenhall border homes', 'Downpipe junctions repaired after overflow.'],
      ['Landlord portfolios in WS2', 'Photo packs with every visit.'],
    ],
  },
  pleck: {
    name: 'Pleck',
    postcodes: ['WS2'],
    nearby: ['Walsall', 'Caldmore', 'Alumwell', 'Bentley', 'Birchills'],
    hub: 'walsall',
    geo: { latitude: 52.583, longitude: -1.987 },
    streets: ['Pleck Road', 'Sandwell Street', 'Trent Road', 'Weston Street'],
    character: 'inner Walsall district on the Pleck Road corridor towards Caldmore and Alumwell',
    repairFocus: 'terrace gutters and retail-corridor overflows that stain frontages quickly',
    housing: 'terraces, semis and mixed-use properties',
    treesOrWeather: 'compact streets where small leaks become visible damp patches fast',
    props: [
      ['Terraces (Pleck Road, Sandwell Street)', 'Union reseals and section replacements.'],
      ['Mixed-use & shops with flats', 'Repairs timed around trading hours.'],
      ['Alumwell border semis', 'Brackets upgraded on tired fascia fixings.'],
      ['HMO & rental stock', 'Condition reports included as standard.'],
    ],
  },
};

const GUARANTEES = [
  '6-month guarantee on qualifying repairs — peace of mind included',
  'Leaking joints, sagging runs and cracked sections all fixed',
  'Water flow test after every repair to confirm proper drainage',
  'Honest advice if replacement is more cost-effective than repair',
  'Before & after photos provided on every repair job',
  'Fully insured — comprehensive public liability cover on every visit',
];

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function buildEntry(slug, a) {
  const pc = a.postcodes.join(', ');
  const streets = a.streets.slice(0, 3).join(', ');
  const nearbyInline = [a.name, ...a.nearby.slice(0, 8)].join(' | ');
  const hubLabel =
    a.hub === 'birmingham'
      ? 'Birmingham'
      : a.hub === 'solihull'
        ? 'Solihull'
        : a.hub === 'sandwell'
          ? 'Sandwell'
          : a.hub === 'dudley'
            ? 'Dudley'
            : a.hub === 'walsall'
              ? 'Walsall'
              : 'the West Midlands';

  const placeTitle = `${a.name} ${hubLabel}`;
  const titleTag = `Gutter Repairs ${placeTitle} | Leaks, Sagging & Broken Gutters Fixed | WOW Gutters Ltd`;
  const metaDescription = `Expert gutter repairs in ${a.name}, ${hubLabel} (${pc}). Leaking joints, sagging runs and cracked sections fixed with a 6-month guarantee. Call WOW Gutters Ltd: 07421 433910.`;
  const h1 = `Gutter Repairs ${placeTitle} — Leaks, Sagging & Broken Gutters Fixed`;
  const heroIntro = `WOW Gutters Ltd provides professional gutter repairs across ${a.name} (${pc}), a ${a.character}. We specialise in ${a.repairFocus}. From ${streets} to neighbouring ${a.nearby[0]}, every repair is flow-tested before we leave and qualifying work carries a 6-month guarantee.`;
  const whyTitle = `Why ${a.name} Homes Need Professional Gutter Repairs`;
  const why1 = `${a.name}'s ${housingPhrase(a)} sit under ${a.treesOrWeather}. When debris weight builds up, brackets loosen, joints open and water sheets down external walls — one of the fastest routes to damp we see across ${hubLabel}.`;
  const why2 = `Most ${a.name} homeowners call us after noticing a drip, a sagging mid-run or stained brickwork. We inspect the full system, repair with quality materials, and water-test every fix so you know the problem is solved — not just patched.`;
  const localSpotlight = `Local focus: ${a.name} (${pc}) — ${a.character}. Common call-outs include ${a.repairFocus}. We regularly work on ${streets} and cover ${a.nearby.slice(0, 3).join(', ')}.`;
  const propertyTypesTitle = `Gutter Repairs for Every ${a.name} Property Type`;
  const areasTitle = `Areas We Cover Around ${a.name}`;
  const faqsTitle = `FAQs — Gutter Repairs ${a.name}`;
  const ctaHeading = `Book Your Gutter Repair in ${a.name} — Free Quote in 60 Seconds`;

  const faqs = [
    {
      q: `What gutter repair services do you offer in ${a.name}?`,
      a: `We repair leaking joints, sagging gutter runs, cracked sections, loose brackets, damaged downpipes and poor fall across ${a.name} (${pc}). Every repair is flow-tested before we leave, and qualifying work carries a 6-month guarantee.`,
    },
    {
      q: `How much does gutter repair cost in ${a.name}?`,
      a: `A leaking joint reseal in ${a.name} typically starts from around £80, while section replacement or bracket upgrades cost more depending on access and materials. We provide a free, fixed quote before any work starts — call 07421 433910.`,
    },
    {
      q: `Do you guarantee gutter repairs in ${a.name}?`,
      a: `Yes. Qualifying repair work in ${a.name} carries a 6-month guarantee. If the same issue returns on the section we repaired, we come back and put it right at no extra labour charge.`,
    },
    {
      q: `Can you repair gutters near ${a.nearby[0]} and ${a.nearby[1]}?`,
      a: `Yes — as well as ${a.name} we cover ${a.nearby.join(', ')}. Same-day and next-day slots are often available on existing ${hubLabel} routes.`,
    },
  ];

  const links = [
    ...a.nearby.slice(0, 3).map((n) => ({
      label: `Gutter Repairs ${n}`,
      href: `/gutter-repair-${slugify(n)}/`,
    })),
    { label: `Gutter cleaning ${a.name}`, href: `/gutter-cleaning-${slug}/` },
    { label: 'Gutter inspection', href: '/services/gutter-inspection/' },
    { label: 'Gutter repairs guide', href: '/help/repair/' },
  ].slice(0, 6);

  const propsTs = a.props
    .map(([label, detail]) => `      { label: '${esc(label)}', detail: '${esc(detail)}' },`)
    .join('\n');

  const faqsTs = faqs
    .map((f) => `      { question: '${esc(f.q)}', answer: '${esc(f.a)}' },`)
    .join('\n');

  const linksTs = links
    .map((l) => `      { label: '${esc(l.label)}', href: '${esc(l.href)}' },`)
    .join('\n');

  const guaranteesTs = GUARANTEES.map((g) => `      '${esc(g)}',`).join('\n');
  const nearbyTs = a.nearby.map((n) => `'${esc(n)}'`).join(', ');
  const postcodesTs = a.postcodes.map((p) => `'${p}'`).join(', ');

  return `  '${slug}': {
    slug: '${slug}',
    city: '${esc(a.name)}',
    titleTag: '${esc(titleTag)}',
    metaDescription: '${esc(metaDescription)}',
    h1: '${esc(h1)}',
    heroIntro: '${esc(heroIntro)}',
    whyTitle: '${esc(whyTitle)}',
    whyBody: [
      '${esc(why1)}',
      '${esc(why2)}',
    ],
    localSpotlight: '${esc(localSpotlight)}',
    guarantees: [
${guaranteesTs}
    ],
    propertyTypesTitle: '${esc(propertyTypesTitle)}',
    propertyTypes: [
${propsTs}
    ],
    areasTitle: '${esc(areasTitle)}',
    areasInline: '${esc(nearbyInline)}',
    faqsTitle: '${esc(faqsTitle)}',
    faqs: [
${faqsTs}
    ],
    geo: { latitude: ${a.geo.latitude}, longitude: ${a.geo.longitude} },
    internalLinks: [
${linksTs}
    ],
    nearbyAreas: [${nearbyTs}],
    postcodes: [${postcodesTs}],
    ctaHeading: '${esc(ctaHeading)}',
    priceTo: 180,
  }`;
}

function housingPhrase(a) {
  return a.housing;
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const entries = Object.entries(AREAS).map(([slug, a]) => buildEntry(slug, a));

const out = `import type { CityGutterLandingData } from '@/constants/cityGutterLandingData';

/**
 * Unique gutter-repair landings for priority area pages.
 * Takes precedence over suburb cleaning→repair transforms.
 */
export const REPAIR_AREA_LANDINGS: Record<string, CityGutterLandingData> = {
${entries.join(',\n')},
};

export function getDedicatedRepairLanding(slug: string): CityGutterLandingData | null {
  return REPAIR_AREA_LANDINGS[slug] ?? null;
}
`;

const dest = path.join(root, 'constants', 'repairAreaLandings.ts');
fs.writeFileSync(dest, out, 'utf8');
console.log(`Wrote ${Object.keys(AREAS).length} landings → ${dest}`);
