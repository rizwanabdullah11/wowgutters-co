/**
 * Gutter repair pages for the 15 main Leicestershire towns (Nov 2026): /gutter-repair-<town>/.
 * Own text per town — none of it is reused on that town's gutter or roof cleaning page.
 */
export type LeicsRepairCopy = {
  /** What usually goes wrong with gutters here, and why. */
  faults: string;
  /** How repairs here differ (materials, access, property types). */
  approach: string;
  /** A short local note used in an FAQ answer. */
  faq: string;
};

export const LEICS_REPAIR: Record<string, LeicsRepairCopy> = {
  leicester: {
    faults:
      'The most common repairs we see in Leicester are leaking joints on shared terrace gutters, cracked cast-iron sections on Victorian houses in Clarendon Park and Highfields, and downpipes knocked loose by bins in narrow back entries.',
    approach:
      'Where a terrace shares one gutter line, a leak above your neighbour can still soak your wall, so we look at the run either side of yours before quoting. Old cast iron is often replaced section by section with matching uPVC or a cast-iron-style profile, so the front of the house keeps its look.',
    faq:
      'Yes. Many city terraces still have original cast-iron gutters. We can reseal a joint, replace a cracked length, or swap the run for a heritage-style uPVC profile.',
  },
  loughborough: {
    faults:
      'In Loughborough we fix a lot of joints that have opened up on student houses, where gutters have sat full of moss for years, plus sagging runs on 1960s and 70s homes in Thorpe Acre and Shelthorpe where the brackets have rusted.',
    approach:
      'Landlords and letting agents often need a quick repair between tenancies, so we send a photo report showing the fault and the finished job. Where the fascia board behind the gutter has gone soft, we tell you before fixing new brackets to it.',
    faq:
      'Yes — we regularly repair gutters on rented houses near the university and send the photos straight to the landlord or agent.',
  },
  hinckley: {
    faults:
      'Hinckley repairs are often on older terraces near the town centre, where cast-iron joints crack in frost, and on 1970s estates where the original plastic gutters have become brittle and split at the brackets.',
    approach:
      'Many Hinckley homes have one downpipe taking the whole back gutter, so if the outlet or a joint leaks, all of that water ends up on the wall. We check the fall along the full run, reseal or replace the joint, and test it with water before we leave.',
    faq:
      'Very often. Brittle 1970s plastic gutters crack around the brackets, and replacing the damaged length with a matching section is usually cheaper than a whole new run.',
  },
  coalville: {
    faults:
      'Coalville\'s former miners\' terraces and semis often have gutters held by only a few brackets, so runs sag in the middle and water pools rather than reaching the downpipe. Cracked downpipe shoes and loose swan necks are common too.',
    approach:
      'We restore the fall by adding or moving brackets, replace split sections with the same profile, and refit loose downpipes. On older brickwork we use fixings suited to soft mortar so the brackets hold.',
    faq:
      'Yes. Sagging gutters on older Coalville houses can usually be fixed by re-hanging the run on new brackets rather than replacing it.',
  },
  'market-harborough': {
    faults:
      'In Market Harborough we see a lot of period and listed buildings with cast-iron or ogee gutters, where the joints rust through, plus deep parapet gutters in the town centre that leak behind the wall.',
    approach:
      'Repairs in the conservation area need care: we match the existing profile and colour wherever we can, and tell you if a repair is likely to need permission because of a listing. Newer estate homes have standard uPVC gutters that are quick to repair.',
    faq:
      'We can. On period homes we try to keep the original look — matching ogee or half-round profiles and black or cast-iron-effect finishes.',
  },
  'melton-mowbray': {
    faults:
      'Melton Mowbray repairs are often split joints and leaking corners on post-war homes, plus narrow downpipes on older town-centre buildings that crack when leaf mush freezes inside them.',
    approach:
      'We replace cracked downpipe sections and shoes, reseal corners and unions, and adjust brackets so water runs to the outlet. For shops and businesses in the town centre we can work early to avoid opening hours.',
    faq:
      'Yes. Cracked and split downpipes are one of the most common jobs we do in Melton, and most are replaced in the same visit.',
  },
  'ashby-de-la-zouch': {
    faults:
      'In Ashby-de-la-Zouch the common faults are leaking joints on new-build estates, gutters pulled away from fascias by the weight of National Forest leaf litter, and rusty cast iron on older homes around Market Street.',
    approach:
      'Where trees regularly fill the gutters, we often combine a repair with a clean so the new joint is not left under a pile of debris. On older and listed buildings we match the original profile.',
    faq:
      'Yes — we often clean and repair on the same visit, which saves a second call-out and lets us test the repair with clear water.',
  },
  lutterworth: {
    faults:
      'Lutterworth\'s newer estates have long, straight gutters, and when one bracket fails the run sags and water backs up. Older homes in the centre have cast-iron joints that rust and drip.',
    approach:
      'We re-align long runs so they fall evenly to each outlet and replace failed brackets. We also repair commercial and warehouse gutters around Magna Park, with a custom quote for each job.',
    faq:
      'Yes. Long gutters on new homes often just need one or two brackets replaced and the fall corrected.',
  },
  oadby: {
    faults:
      'Oadby\'s large inter-war and detached homes have long gutter runs with many corners, and the corners are where leaks usually start. Heavy leaf fall also pushes gutters off their brackets on the tree-lined roads.',
    approach:
      'Big homes often have gutters on garages, porches and extensions too, so we check all of them and point out anything else that is close to failing. Corner pieces and unions are resealed or replaced with matching parts.',
    faq:
      'Yes. Leaking corners are the most common repair on larger Oadby homes, and we can usually fix them with new seals or a replacement corner piece.',
  },
  wigston: {
    faults:
      'In South Wigston we repair a lot of shared terrace gutters where a joint between two houses has opened, and in Wigston Magna and Wigston Fields the usual problems are cracked plastic sections and loose downpipes on 1950s and 60s homes.',
    approach:
      'Small back yards in South Wigston mean we often work from the rear alley. Where a shared gutter is leaking, we explain whether the fault is on your side or your neighbour\'s before any work starts.',
    faq:
      'We can. With shared gutters we show you exactly where the fault is, so you and your neighbour know who the repair is for.',
  },
  'earl-shilton': {
    faults:
      'Earl Shilton sits on a hill, and driven rain finds every weak joint. We often repair leaking unions and stop-ends on older terraces, and downpipes that have come away from the wall on exposed houses.',
    approach:
      'We reseal or replace the joint, refit loose downpipes with new clips, and make sure water discharges into the drain rather than onto the path — a common problem on the steeper streets.',
    faq:
      'Yes. Downpipes that have come away from the wall are quick to refit with new clips, usually in the same visit.',
  },
  shepshed: {
    faults:
      'In Shepshed the most common repairs are leaking joints where gutters wrap around side extensions and garages, and sagging runs on post-war semis where the brackets have weakened.',
    approach:
      'Extensions often join the main gutter at an awkward angle, which is where leaks start. We reseal or replace the corner, add brackets where the run sags, and test the whole roofline with water.',
    faq:
      'Yes — the join between a house gutter and an extension or garage gutter is the most common leak we fix in Shepshed.',
  },
  mountsorrel: {
    faults:
      'Mountsorrel\'s low granite cottages have small gutters close to the ground that get knocked and cracked, while the newer estates have uPVC joints that leak once the rubber seals perish.',
    approach:
      'On older cottages we match the small gutter profiles and fix into stone or old brick carefully. On newer homes, replacing perished seals is often all that is needed to stop the drip.',
    faq:
      'Often, yes. A dripping joint on a newer house is usually a perished rubber seal, which is a quick and low-cost repair.',
  },
  'broughton-astley': {
    faults:
      'Broughton Astley has many bungalows and modern homes, and the repairs we see most are leaking joints on long rear gutters and stop-ends that have pushed out under the weight of debris.',
    approach:
      'Bungalow gutters are low and easy to reach, so most repairs here are quick. We replace stop-ends, unions and seals with matching parts and check the fall across the whole run.',
    faq:
      'Yes. Pushed-out stop-ends and leaking unions on bungalows are usually fixed in well under an hour.',
  },
  syston: {
    faults:
      'In Syston we repair cracked sections and leaking joints on Victorian terraces in the centre, short steep gutters on rear outriggers, and loose downpipes on the newer estates.',
    approach:
      'Outrigger gutters at the back of terraces are easy to overlook until the wall below goes green. We repair them with the main run and test the downpipe so water reaches the drain.',
    faq:
      'Yes — the short gutters on the back of Syston terraces are a common source of damp, and we repair them along with the main gutter.',
  },
};
