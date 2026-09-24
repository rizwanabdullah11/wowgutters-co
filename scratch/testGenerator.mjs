import fs from 'fs';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[,.'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function titleCase(text) {
  return text
    .split(/[\s-]+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

// Let's create the comprehensive generator function
const smartGeneratorCode = `
function generateSmartContent(keyword: string, slug: string): { heroTitle: string; heroDescription: string; sections: { heading: string; content: string; bullets: string[] }[]; faqs: { question: string; answer: string }[] } {
  const title = titleCase(keyword.replace(/[,.'"]/g, ' ').replace(/\\s+/g, ' ').trim());

  // 1. WASPS / PEST NESTS IN GUTTERS
  if (slug.includes('wasp') || slug.includes('hornet') || slug.includes('nest')) {
    return {
      heroTitle: title,
      heroDescription: \`Specialist removal of wasp nests, debris, and blockages from gutters and rooflines across Birmingham and the West Midlands. WOW Gutters Ltd safely clears nests and restores full rainwater flow. Call 07421 433910.\`,
      sections: [
        {
          heading: \`Safe Clearing of Wasps and Nests in Gutters\`,
          content: \`Wasps and hornets frequently choose the sheltered underside of roof tiles, fascia overhangs, and dry, debris-filled gutter troughs to build their nests. When a nest expands inside a gutter or leaf guard, it causes severe drainage blockages, trapping standing water and rotting fascias. WOW Gutters Ltd uses ground-level vacuum systems and long-reach equipment to safely extract nest remnants, mud structures, and compacted debris without damaging your guttering or roofline.\`,
          bullets: [
            'Safe extraction of inactive wasp, hornet, and bird nests from gutters',
            'Clearing compacted mud, comb material, and organic debris from channel floors',
            'Unblocking downpipes and outlets obstructed by nest debris',
            'Ground-level high-reach vacuum system — safe, ladder-free operation',
            'Thorough water flow testing to verify free rainwater evacuation',
            'Full photographic confirmation before and after clearing',
          ],
        },
        {
          heading: \`Why Wasps Target Gutters and How to Prevent Them\`,
          content: \`Gutters accumulated with autumn leaves and standing sludge create ideal moist nesting spots for insects during spring and summer. Once a nest blocks the channel, subsequent rain causes water to overflow behind the fascia board into roof voids. Regular annual vacuum clearing removes the nesting matter and eliminates standing water, stopping wasps from returning.\`,
          bullets: [
            'Eliminates standing water and organic matter that attract nesting insects',
            'Prevents overflow water from penetrating fascia boards and cavity walls',
            'Mesh leaf guard inspection and cleaning where wasps have nested beneath guards',
            'Inspection of joints and seals for damage caused by trapped moisture',
            'Fully insured with £10 million public liability coverage',
            'Same-week appointments available across Birmingham and the West Midlands',
          ],
        },
      ],
      faqs: [
        {
          question: 'Do wasps build nests inside gutters and leaf guards?',
          answer: 'Yes. Wasps frequently build nests in dry leaf accumulations inside gutters or beneath mesh gutter guards where they are sheltered from wind and rain. Over time, the nest blocks water flow and causes chronic overflows.',
        },
        {
          question: 'How do you safely clear a wasp nest from gutters?',
          answer: 'We use industrial-strength ground-level vacuum systems with high-reach carbon fiber poles to extract the nest structure and surrounding silt completely to the channel floor without disturbing roof tiles.',
        },
        {
          question: 'Will clearing my gutters prevent wasps from nesting again?',
          answer: 'Yes. Keeping gutters clean and free of stagnant sludge and leaf litter removes the primary shelter and moisture sources that attract nesting wasps in late spring and summer.',
        },
        {
          question: 'How much does it cost to clear nest blockages from gutters?',
          answer: 'Standard residential gutter clearing with nest extraction starts from £50 to £120 depending on property size and roof height. We provide fixed upfront quotes before commencing work.',
        },
      ],
    };
  }

  // 2. SHARED GUTTERING & SEMI-DETACHED LAWS
  if (slug.includes('shared-gutter') || slug.includes('separating-shared') || slug.includes('semi-detached') || slug.includes('pareado')) {
    return {
      heroTitle: title,
      heroDescription: \`Specialist shared guttering maintenance, repair, and boundary separation for semi-detached and terraced homes across Birmingham and the West Midlands. Expert advice and installation. Call 07421 433910.\`,
      sections: [
        {
          heading: \`Understanding Shared Guttering on Semi-Detached Homes\`,
          content: \`On UK semi-detached and terraced properties, gutters are often built as a single continuous trough across the party wall boundary with a shared downpipe. If one neighbour neglects gutter maintenance or has a dropped bracket, water backs up and overflows onto both properties. WOW Gutters Ltd provides comprehensive joint maintenance, boundary assessment, and specialist installation of separation joints and stop-ends so your half functions independently.\`,
          bullets: [
            'Expert inspection of shared gutter runs and boundary downpipe configurations',
            'Installation of union separation joints and internal stop-ends at party walls',
            'Dedicated downpipe retrofitting to give your property independent drainage',
            'High-reach vacuum clearing of both halves with neighbour group discounts',
            'Camera surveys to document boundary joint condition for landlord/homeowner clarity',
            'Clear fixed pricing with £10m public liability insurance',
          ],
        },
        {
          heading: \`UK Law and Best Practice for Shared Gutter Maintenance\`,
          content: \`Under UK property law, shared guttering is typically a mutual responsibility. Neither party may cause damage to the neighbour's side through neglect. The most effective long-term solution is either booking coordinated maintenance together (taking advantage of our multi-property discount) or installing a boundary divider with a dedicated downpipe so each homeowner controls their own drainage.\`,
          bullets: [
            'Prevents water ingress caused by neighbour\\'s blocked or leaking gutter section',
            'Eliminates boundary disputes through clear photographic condition reports',
            'Group discounts available when neighbouring properties are cleared together',
            'Quality uPVC fittings matched to existing gutter profiles (square, half-round, deep-flow)',
            'Ground-based vacuum cleaning — no damage to shared boundary walls or fascias',
            'Fast response across Birmingham, Solihull, Sutton Coldfield, and the West Midlands',
          ],
        },
      ],
      faqs: [
        {
          question: 'Who is legally responsible for shared gutters on a semi-detached house?',
          answer: 'Generally, both homeowners share responsibility for maintaining continuous gutter runs that cross the property boundary. If a blockage on one side causes damp damage to the other, the negligent party may be held liable.',
        },
        {
          question: 'Can you separate shared gutters so my drainage is independent?',
          answer: 'Yes. We can install an internal stop-end or union joint at the boundary line and fit an independent outlet and downpipe to ensure your rainwater discharges exclusively through your own drain.',
        },
        {
          question: 'Do you offer discounts if both neighbours book together?',
          answer: 'Yes. Our neighbourhood group discount offers up to 20% off when adjoining semi-detached or terraced properties are cleaned or serviced during the same visit.',
        },
        {
          question: 'How do you clean gutters without upsetting the neighbour?',
          answer: 'Our ground-based vacuum system operates safely from ground level without ladders touching either property\\'s walls, providing before-and-after photographs for complete transparency.',
        },
      ],
    };
  }

  // 3. COMMERCIAL & INDUSTRIAL GUTTER / ROOF CLEANING
  if (slug.includes('industrial') || slug.includes('commercial') || slug.includes('warehouse') || slug.includes('factory') || slug.includes('retail') || slug.includes('shopping-centre') || slug.includes('business')) {
    const isRoof = slug.includes('roof');
    const serviceName = isRoof ? 'Commercial Roof Cleaning' : 'Commercial Gutter Cleaning';
    return {
      heroTitle: title,
      heroDescription: \`Professional \${serviceName.toLowerCase()} and planned maintenance for industrial units, warehouses, retail parks, and commercial properties across Birmingham and the West Midlands. Fully insured (£10m) with RAMS. Call 07421 433910.\`,
      sections: [
        {
          heading: \`Specialist \${serviceName} for West Midlands Businesses\`,
          content: \`Industrial units, retail facilities, and commercial buildings feature high-capacity valley gutters, box troughs, and expansive roof surfaces that accumulate massive volumes of silt, moss, and windblown debris. Failure to maintain these systems leads to internal water damage, stock destruction, and insurance non-compliance. WOW Gutters Ltd provides industrial-grade vacuum extraction, high-pressure washing, and condition surveys tailored to commercial facilities.\`,
          bullets: [
            'Industrial vacuum systems reaching up to 4 storeys from ground level',
            'High-capacity box gutter and valley gutter deep clearance',
            'Full downpipe flushing and siphon drainage system unblocking',
            'Out-of-hours, weekend, and shutdown scheduling for zero operational disruption',
            'Site-specific Risk Assessments and Method Statements (RAMS) provided as standard',
            'Detailed before, during, and after HD camera condition reports for compliance',
          ],
        },
        {
          heading: \`Insurance Compliance and Preventative Maintenance Contracts\`,
          content: \`Commercial property leases and building insurance policies routinely require documented annual gutter and roof inspections. WOW Gutters Ltd offers scheduled maintenance contracts across Birmingham, Wolverhampton, Coventry, Dudley, and the Black Country, preventing emergency roof leaks and extending roofline asset life.\`,
          bullets: [
            'Protects commercial assets, inventory, and electrical infrastructure from water ingress',
            'Prevents costly emergency callouts and structural roofline decay',
            'Compliant with Health and Safety Executive (HSE) working at height regulations',
            'Flexible invoicing and dedicated account management for facility managers',
            'Covering factories, distribution hubs, business parks, and public sector sites',
            'Fully insured with £10 million public liability and employer liability cover',
          ],
        },
      ],
      faqs: [
        {
          question: \`How often should commercial \${isRoof ? 'roofs' : 'gutters'} be serviced?\`,
          answer: 'Commercial properties should be cleared at least twice a year—late spring to clear seed pods and autumn to extract fallen leaves and roof moss before heavy winter rains.',
        },
        {
          question: 'Do you provide RAMS and health and safety documentation?',
          answer: 'Yes. We provide full site-specific Risk Assessments and Method Statements (RAMS), COSHH data sheets, and insurance certificates before any commercial work begins.',
        },
        {
          question: 'Can you work outside of our normal operating hours?',
          answer: 'Yes. We routinely schedule commercial and industrial cleans during early mornings, evenings, or weekends to prevent any disruption to your staff, customers, or logistics.',
        },
        {
          question: 'How do you access high-level commercial gutters safely?',
          answer: 'We utilize high-reach industrial vacuum systems from ground level up to 15 meters, combined with MEWPs (cherry pickers) and scaffold access where complex internal box gutters require hands-on maintenance.',
        },
      ],
    };
  }

  // 4. SPRAY REPAIRS & NON-REPLACEMENT GUTTER FIXES
  if (slug.includes('spray') || slug.includes('sealant') || slug.includes('standing-water') || slug.includes('without-replacement') || slug.includes('fail-repeatedly')) {
    return {
      heroTitle: title,
      heroDescription: \`Expert evaluation of gutter spray repairs, standing water fixes, and long-lasting joint sealing across Birmingham and the West Midlands. WOW Gutters Ltd provides permanent repairs with full flow testing. Call 07421 433910.\`,
      sections: [
        {
          heading: \`Is Spray Gutter Repair Effective or Just a Temporary Patch?\`,
          content: \`Rubberized aerosol spray sealants are heavily marketed for quick DIY leak fixes, but in professional drainage applications, they routinely fail within 3 to 12 months. Standing water, thermal expansion, and UV radiation cause topical sprays to peel and crack. WOW Gutters Ltd provides genuine structural repairs—re-aligning dropped brackets, replacing perished rubber union gaskets, or installing continuous Plygene liners that solve leaks permanently without replacing the entire roofline.\`,
          bullets: [
            'Honest assessment of whether a joint can be resealed or requires mechanical union replacement',
            'Fixing standing water pooling by resetting bracket gradients to the correct fall angle',
            'Industrial EPDM and silicone gasket replacements that accommodate thermal expansion',
            'Seamless gutter lining options for corroded cast iron, valley, or concrete gutters',
            'Full water flow testing following every repair to guarantee watertight performance',
            'Free photographic condition survey before and after every repair',
          ],
        },
        {
          heading: \`Why Gutter Repairs Fail Repeatedly and How to Fix Them Permanently\`,
          content: \`Repairs fail repeatedly when the root cause—such as a dropped bracket creating a low point, or rotted timber behind the fascia—is ignored in favour of slapping sealant over a dirty seam. Our technicians thoroughly clean the channel floor to bare uPVC, inspect the fascia board, and install British Standard replacement parts designed to last for decades.\`,
          bullets: [
            'Eliminates recurring leaks that cause stained external masonry and internal damp',
            'Restores optimal rainwater pitch so gutters drain completely with zero standing sludge',
            'Mobile service vans fully stocked with all standard uPVC, cast iron, and aluminium fittings',
            'Cost-effective alternative to complete gutter and roofline replacement',
            'Backed by written workmanship guarantees and £10m public liability insurance',
            'Same-week repair appointments across Birmingham, Solihull, and the West Midlands',
          ],
        },
      ],
      faqs: [
        {
          question: 'How long does spray gutter repair actually last?',
          answer: 'Topical aerosol sprays typically last 3 to 6 months before peeling under standing water and temperature swings. For long-term reliability, mechanical gasket replacement or seamless lining is required.',
        },
        {
          question: 'Can you fix standing water in gutters without replacing everything?',
          answer: 'Yes. Standing water is caused by improper fall angles. We re-align or replace the supporting brackets to restore the correct slope towards the downpipe outlet, allowing water to drain fully.',
        },
        {
          question: 'Does gutter sealant go hard over time?',
          answer: 'Low-grade mastics harden, turn brittle, and crack as gutters expand in summer heat. We use UV-stable, high-elasticity polymer sealants and genuine rubber union seals that flex with seasonal temperature changes.',
        },
        {
          question: 'How much does a professional gutter repair cost?',
          answer: 'Minor joint resealing and bracket repairs start from £45 to £95 when completed alongside a clean. We provide transparent, upfront fixed quotes before starting any work.',
        },
      ],
    };
  }

  // 5. LEAK DETECTION & DRAINAGE / BURST PIPES
  if (slug.includes('leak-detection') || slug.includes('burst-pipe') || slug.includes('drainpipe')) {
    return {
      heroTitle: title,
      heroDescription: \`Specialist roofline leak detection and rainwater drainage diagnostics across Birmingham and the West Midlands. Pinpoint hidden gutter leaks, cracked downpipes, and water ingress. Call 07421 433910.\`,
      sections: [
        {
          heading: \`Precision Leak Detection for Rooflines and Rainwater Systems\`,
          content: \`Hidden leaks along rooflines, soffits, and rainwater downpipes are leading causes of severe interior damp, timber decay, and foundation erosion. Water often travels along rafters or behind cavity brickwork before manifesting as a damp ceiling patch far from the actual entry point. WOW Gutters Ltd uses wireless high-resolution camera probes, dye-testing, and pressure inspections to pinpoint exact failure points quickly.\`,
          bullets: [
            'Non-invasive camera inspections of hidden valley gutters, box troughs, and roofline junctions',
            'Water flow and dye tracing to identify hairline fractures in concealed downpipes',
            'Inspection of fascia joints, soffit vents, and flashing seals for water ingress',
            'Pinpointing failed union seals, warped joints, and subterranean drainage blockages',
            'Immediate on-site repair capabilities from our fully stocked mobile vans',
            'Comprehensive photographic condition reports for homeowners and insurance claims',
          ],
        },
        {
          heading: \`Why Early Leak Detection Saves Thousands in Repairs\`,
          content: \`Left unresolved, a minor gutter drip or fractured downpipe elbow can saturate exterior brickwork, cause toxic black mould indoors, and rot structural roof joists. Our rapid diagnostic service identifies the exact failure source and provides an immediate, guaranteed fix before structural damage spreads.\`,
          bullets: [
            'Prevents expensive internal plaster damage, ceiling collapse, and timber dry rot',
            'Eliminates damp patches and salt efflorescence on exterior walls',
            'Transparent fixed-price diagnostics with no hidden callout charges',
            'Experienced drainage and roofline technicians with £10m public liability cover',
            'Serving all Birmingham postcodes, Solihull, Sutton Coldfield, and the West Midlands',
            'Same-day and emergency inspection slots available',
          ],
        },
      ],
      faqs: [
        {
          question: 'How do you find hidden leaks in gutters and downpipes?',
          answer: 'We combine real-time wireless camera probes inside high-level channels with controlled water flow testing to track moisture penetration directly to failed joints, cracked unions, or blocked outlets.',
        },
        {
          question: 'Can a leaking gutter cause damp inside my home?',
          answer: 'Yes. Constant rainwater overflow saturates exterior brickwork, penetrates cavity insulation, and causes damp patches, peeling wallpaper, and mould growth on interior upstairs walls.',
        },
        {
          question: 'Can you repair the leak immediately once detected?',
          answer: 'Yes. Our vans carry a comprehensive inventory of replacement unions, brackets, downpipes, and high-performance sealants, allowing us to fix most leaks during the same visit.',
        },
        {
          question: 'How much does roofline leak detection cost?',
          answer: 'Basic camera surveys and leak detection start from £40 to £75, with costs often integrated directly into the repair service. Call 07421 433910 for an instant quote.',
        },
      ],
    };
  }

  // 6. GULLY / DOWNPIPE BLOCKAGES & CLEANING
  if (slug.includes('downpipe') || slug.includes('gully') || slug.includes('blocked') || slug.includes('blockage') || slug.includes('flushers')) {
    return {
      heroTitle: title,
      heroDescription: \`Professional downpipe unblocking, gully clearing, and gutter flow restoration across Birmingham and the West Midlands. WOW Gutters Ltd removes compacted blockages with flow testing. Call 07421 433910.\`,
      sections: [
        {
          heading: \`Complete Downpipe & Gully Clearance Services\`,
          content: \`When downpipes or ground gullies clog with compacted leaves, moss, and roof grit, entire gutter runs overflow within minutes of rainfall. Downpipe obstructions typically form at sharp swan-neck bends or bottom shoes where standard rods cannot reach. WOW Gutters Ltd employs high-pressure flushing nozzles, flexible mechanical rodding, and powerful vacuum suction to clear the entire rainwater run down to the underground soakaway or drain.\`,
          bullets: [
            'Clearing stubborn downpipe blockages at swan-necks, elbows, and shoe fittings',
            'Ground-level rainwater gully silt extraction and leaf trap clearance',
            'High-pressure water flushing to ensure 100% unobstructed drainage flow',
            'Installation of balloon leaf guards and downpipe mesh strainers to prevent recurrence',
            'Camera verification to ensure no internal obstructions remain inside pipes',
            'Combined gutter vacuuming and downpipe service in a single visit',
          ],
        },
        {
          heading: \`Signs Your Downpipe or Gully Is Blocked\`,
          content: \`Water pouring over gutter edges near downpipe outlets, gurgling sounds during rainfall, or water pooling around ground gullies are clear indicators of a restricted downpipe. Clearing the blockage promptly prevents cracked pipes in freezing winter weather and protects wall foundations.\`,
          bullets: [
            'Eliminates foundation water pooling and brickwork saturation',
            'Prevents winter freeze-thaw damage that splits plastic and cast iron downpipes',
            'Ground-level operation — safe, fast, and completely mess-free',
            'Fixed upfront pricing with before-and-after photo documentation',
            'Fully insured local technicians covering all Birmingham and West Midlands areas',
            'Urgent same-day appointments available for severe rainwater overflows',
          ],
        },
      ],
      faqs: [
        {
          question: 'How do you clear a blocked downpipe without taking it apart?',
          answer: 'We use industrial vacuum suction from the top outlet combined with specialized high-pressure clearing nozzles that break up compacted plugs of silt and moss without dismantling pipework.',
        },
        {
          question: 'What causes downpipes to block repeatedly?',
          answer: 'Debris concentrates at swan-neck bends and elbow joints. If moss from the roof is not cleared or downpipe balloon guards are missing, fresh debris quickly forms another plug.',
        },
        {
          question: 'Is downpipe unblocking included in standard gutter cleaning?',
          answer: 'Yes. At WOW Gutters Ltd, outlet clearing and full downpipe flow testing are included as standard on every gutter cleaning visit.',
        },
        {
          question: 'How much does downpipe and gully clearance cost?',
          answer: 'Downpipe and gully unblocking typically costs between £40 and £80 depending on blockage severity, with fixed quotes provided before work starts.',
        },
      ],
    };
  }

  // 7. AREA-SPECIFIC GUTTERING & REPAIRS (e.g. Worcester, Wolverhampton, Stoke, Malvern, Redditch, Bromsgrove, etc.)
  const areaMatch = slug.match(/(worcester|wolverhampton|stoke|malvern|redditch|bromsgrove|droitwich|solihull|sutton-coldfield|quinton|harborne|northfield|halesowen|cannock|coleshill|bell-green|kings-heath|edgbaston|erdington|kidderminster|tamworth|coventry|dudley|walsall|shirley|blackwood|pelsall|meriden)/i);
  if (areaMatch || slug.includes('guttering-') || slug.includes('gutters-') || slug.includes('gutter-repairs-')) {
    const areaName = areaMatch ? titleCase(areaMatch[1].replace(/-/g, ' ')) : 'the West Midlands';
    const isRepair = slug.includes('repair') || slug.includes('replacement') || slug.includes('install');
    const isClean = slug.includes('clean') || slug.includes('clear') || !isRepair;

    return {
      heroTitle: title,
      heroDescription: \`Professional \${isRepair ? 'gutter repairs, replacement and installation' : 'gutter cleaning and maintenance'} in \${areaName}. WOW Gutters Ltd provides ground-level vacuum clearing, camera surveys, and guaranteed workmanship. Call 07421 433910.\`,
      sections: [
        {
          heading: \`Trusted Gutter Services Across \${areaName}\`,
          content: \`WOW Gutters Ltd provides homeowners and businesses across \${areaName} with dependable, professional gutter maintenance. From traditional Victorian terraces and 1930s semi-detached homes to modern detached estates and commercial properties, our experienced local technicians keep your rainwater systems in peak condition.\`,
          bullets: [
            \`Complete gutter clearance and structural inspection across \${areaName}\`,
            'Ground-level industrial vacuum system reaching up to 4 storeys without ladders',
            'Full downpipe flushing, outlet unblocking, and free-flow water testing',
            'Fixing leaking joints, union clips, sagging runs, and broken support brackets',
            'Before and after HD photographic proof provided with every visit',
            'Fully insured with £10 million public liability coverage',
          ],
        },
        {
          heading: \`Why \${areaName} Properties Benefit From Regular Gutter Care\`,
          content: \`\${areaName} experiences heavy seasonal rainfall and substantial tree cover, leading to rapid accumulation of autumn leaves, pine needles, and roof moss in gutter channels. Our comprehensive service extracts all debris to the channel floor, tests every downpipe, and ensures your property is 100% protected from water ingress.\`,
          bullets: [
            'Protects brickwork, fascia timbers, and foundations from water damage and damp',
            'Fixed upfront pricing with no hidden charges or travel fees',
            'Same-week appointments and rapid response across all local postcodes',
            'Quality British Standard uPVC and cast iron replacement components',
            'Combined roof moss removal, fascia cleaning, and gutter packages available',
            'Highly rated by local customers across Google and Checkatrade',
          ],
        },
      ],
      faqs: [
        {
          question: \`Do you provide gutter services in \${areaName}?\`,
          answer: \`Yes. WOW Gutters Ltd operates dedicated mobile service vans across \${areaName} and all surrounding postcodes, offering same-week appointments.\`,
        },
        {
          question: \`How much does gutter cleaning cost in \${areaName}?\`,
          answer: \`Standard residential gutter cleaning in \${areaName} costs between £50 and £120 depending on property size, height, and accessibility. Fixed quotes are provided before work begins.\`,
        },
        {
          question: 'Do you use ladders or vacuum systems?',
          answer: 'We use advanced high-reach vacuum systems from ground level, eliminating ladder damage to your lawns, driveways, and roofline while reaching up to 4 storeys safely.',
        },
        {
          question: 'Can you repair gutters as well as clean them?',
          answer: 'Yes. Our vans carry comprehensive stocks of brackets, union joints, sealants, and downpipe fittings to complete repairs during the same visit.',
        },
      ],
    };
  }

  // 8. EXTERIOR CLEANING / RENDER / CLADDING / DRIVEWAYS
  if (slug.includes('cladding') || slug.includes('render') || slug.includes('brickwork') || slug.includes('driveway') || slug.includes('patio') || slug.includes('pressure-wash') || slug.includes('jetwash')) {
    return {
      heroTitle: title,
      heroDescription: \`Professional exterior cleaning, soft washing, and pressure washing across Birmingham and the West Midlands. Restore render, cladding, driveways, and brickwork to pristine condition. Call 07421 433910.\`,
      sections: [
        {
          heading: \`Professional Exterior Surface & Render Cleaning\`,
          content: \`Algae, lichen, atmospheric pollution, and moss can severely discolour exterior render, commercial cladding, brickwork, and block paving. WOW Gutters Ltd provides specialized soft-washing and commercial hot-water pressure washing that dissolves biological staining at the root without damaging delicate monocouche render, K-Rend, or brick mortar.\`,
          bullets: [
            'Low-pressure soft-wash chemical treatments safe for K-Rend, Weber, and acrylic render',
            'Commercial hot-water rotary cleaning for driveways, patios, and block paving',
            'Algae, red streak, and black mould eradication with biocide treatments',
            'Cladding washing for industrial units, retail premises, and residential rooflines',
            'Restores bright, clean appearance and dramatically enhances kerb appeal',
            'Eco-friendly, HSE-approved cleaning solutions safe for gardens and pets',
          ],
        },
        {
          heading: \`Long-Lasting Results with Biocide Protection\`,
          content: \`High-pressure jet washing alone merely shears off surface growth, allowing algae and moss to return within months. Our biocide sanitisation penetrates deep into porous masonry and cladding seams, killing fungal spores and keeping surfaces visibly clean for up to 24 to 36 months.\`,
          bullets: [
            'Prevents rapid biological regrowth for 2 to 3 years',
            'Safe, controlled application without high-pressure surface scarring',
            'Full photographic documentation before and after treatment',
            'Fully insured with £10 million public liability coverage',
            'Free on-site patch test and fixed quotation',
            'Competitive rates across Birmingham, Solihull, and the West Midlands',
          ],
        },
      ],
      faqs: [
        {
          question: 'Is soft washing safe for modern render (K-Rend / Monocouche)?',
          answer: 'Yes. Soft washing uses low pressure and specialized biocide detergents specifically designed for delicate render, removing red and green algae without blasting away the render surface.',
        },
        {
          question: 'How long do exterior cleaning results last?',
          answer: 'With our residual biocide treatment, treated render, cladding, and paving stay free of algae and biological growth for 2 to 3 years depending on tree shade and damp exposure.',
        },
        {
          question: 'How much does exterior render or cladding cleaning cost?',
          answer: 'Pricing depends on total square meterage and access. Standard residential elevations start from £120 to £280. We provide free site surveys and fixed quotes.',
        },
        {
          question: 'Do you provide commercial cladding cleaning?',
          answer: 'Yes. We clean industrial warehouse cladding, retail fascias, and commercial facades throughout the West Midlands with full RAMS provided.',
        },
      ],
    };
  }

  // 9. GENERAL GUTTER CLEANING / SERVICES (Fallback)
  return {
    heroTitle: title,
    heroDescription: \`Professional gutter cleaning, repairs, and roofline maintenance across Birmingham and the West Midlands. WOW Gutters Ltd provides ground-level vacuum cleaning, camera inspections, and free quotes. Call 07421 433910.\`,
    sections: [
      {
        heading: \`Comprehensive Gutter Cleaning & Maintenance\`,
        content: \`Clean, free-flowing gutters are vital for protecting your property from water ingress, damp walls, and roofline rot. WOW Gutters Ltd provides thorough gutter clearance using ground-level industrial vacuum systems that extract all leaves, moss, and compacted silt to the channel floor without placing ladders against your walls.\`,
        bullets: [
          'Ground-level vacuum system reaching up to 4 storeys safely',
          'Complete extraction of leaves, moss, silt, and standing debris',
          'Downpipe outlet unblocking and comprehensive flow testing included',
          'Before and after HD photographic records provided with every visit',
          'Minor repairs, union joint resealing, and bracket adjustments available',
          'Fully insured with £10 million public liability cover',
        ],
      },
      {
        heading: \`Why Choose WOW Gutters Ltd for Your Property\`,
        content: \`Our local technicians are equipped with advanced camera inspection tools and industrial vacuums, ensuring every gutter run is completely clear and structurally sound. We offer fixed pricing with no hidden charges and same-week availability across the West Midlands.\`,
        bullets: [
          'Local, experienced team with hundreds of 5-star customer reviews',
          'Prevents costly water damage, internal damp, and timber decay',
          'Free 60-second online quote with same-day and next-day booking',
          'Combined gutter, roof cleaning, and uPVC washing packages available',
          'Serving residential homeowners, landlords, and commercial facilities',
          'Honest advice and transparent pricing on every visit',
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should gutters be cleaned?',
        answer: 'Most UK properties should have their gutters cleaned at least once a year in late autumn. Homes under mature trees or with heavy roof moss benefit from twice-yearly clearance.',
      },
      {
        question: 'How much does professional gutter cleaning cost?',
        answer: 'Standard residential gutter cleaning costs between £50 and £120 depending on property size, height, and access. We provide fixed quotes before commencing work.',
      },
      {
        question: 'Do you check downpipes as part of the clean?',
        answer: 'Yes. Every gutter cleaning visit includes downpipe outlet clearing and flow testing to ensure rainwater drains freely to ground drains.',
      },
      {
        question: 'How do you clean gutters without ladders?',
        answer: 'We use high-reach carbon fiber vacuum systems powered by industrial suction units from ground level, eliminating ladder damage to walls and rooflines.',
      },
    ],
  };
}
`;

console.log('Smart generator code prepared.');
