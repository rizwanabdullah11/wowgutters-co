export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Gutter Cleaning' | 'Roof Cleaning' | 'Gutter Installation' | 'General' | 'Maintenance';
  icon: string;
}

export const allFAQs: FAQItem[] = [
  // Gutter Cleaning Questions (20)
  {
    id: 'how-often-clean-gutters',
    question: 'How often should I clean my gutters?',
    answer: 'We recommend cleaning your gutters at least twice a year - typically in spring and autumn. However, if you have overhanging trees or live in an area with heavy rainfall, quarterly cleaning may be beneficial. Our team can assess your property and recommend the best maintenance schedule for your specific situation.',
    category: 'Gutter Cleaning',
    icon: '🗓️'
  },
  {
    id: 'gutter-cleaning-cost',
    question: 'How much does gutter cleaning cost?',
    answer: 'Gutter cleaning costs vary depending on property size, gutter length, and accessibility. On average, residential properties range from £60-£150. We offer free quotes and transparent pricing with no hidden fees. Contact us for an accurate estimate for your property.',
    category: 'Gutter Cleaning',
    icon: '💷'
  },
  {
    id: 'gutter-cleaning-messy',
    question: 'Is gutter cleaning messy?',
    answer: 'No mess guaranteed! We use professional vacuum equipment that collects all debris directly into sealed bags. We also lay protective sheets where needed and thoroughly clean up after ourselves. You won\'t even know we\'ve been there - except for your sparkling clean gutters!',
    category: 'Gutter Cleaning',
    icon: '✨'
  },
  {
    id: 'wait-all-day',
    question: 'Do I need to wait in all day?',
    answer: 'Not at all! We offer flexible appointment windows and can work around your schedule. Most jobs are completed within 1-3 hours, and we\'ll give you a more accurate time estimate when booking. We can also work while you\'re away if you prefer.',
    category: 'Gutter Cleaning',
    icon: '⏰'
  },
  {
    id: 'gutter-cleaning-methods',
    question: 'What methods do you use for gutter cleaning?',
    answer: 'We use advanced vacuum systems that work from the ground up to 4 stories high - safer and more efficient! For hard-to-reach areas, we have professional ladder equipment. All our technicians are fully trained and insured.',
    category: 'Gutter Cleaning',
    icon: '🔧'
  },
  {
    id: 'clean-blocked-downpipes',
    question: 'Can you clean blocked downpipes?',
    answer: 'Yes! Blocked downpipes are a common issue we handle regularly. We use specialized equipment to clear blockages and ensure proper water flow. If the blockage is severe, we may need to dismantle sections of the downpipe.',
    category: 'Gutter Cleaning',
    icon: '🚰'
  },
  {
    id: 'gutter-cleaning-winter',
    question: 'Do you clean gutters in winter?',
    answer: 'Yes, we operate year-round including winter months. Winter gutter cleaning is actually very important to prevent ice dams and ensure proper drainage during heavy rainfall and snow melt.',
    category: 'Gutter Cleaning',
    icon: '❄️'
  },
  {
    id: 'gutter-guards-still-clean',
    question: 'I have gutter guards, do I still need cleaning?',
    answer: 'Yes, even with gutter guards, some debris can accumulate and guards themselves need maintenance. We can clean both the guards and any debris that has bypassed them to ensure optimal performance.',
    category: 'Gutter Cleaning',
    icon: '🛡️'
  },
  {
    id: 'signs-gutters-need-cleaning',
    question: 'What are signs my gutters need cleaning?',
    answer: 'Common signs include: water overflowing during rain, sagging gutters, plants growing in gutters, staining on exterior walls, pest activity, and visible debris. If you notice any of these, it\'s time for a professional clean.',
    category: 'Gutter Cleaning',
    icon: '⚠️'
  },
  {
    id: 'gutter-cleaning-duration',
    question: 'How long does gutter cleaning take?',
    answer: 'Most residential properties take 1-3 hours depending on size and condition. Larger properties or those with significant blockages may take longer. We\'ll provide an estimated timeframe when we quote.',
    category: 'Gutter Cleaning',
    icon: '⏱️'
  },
  {
    id: 'clean-conservatory-gutters',
    question: 'Can you clean conservatory gutters?',
    answer: 'Absolutely! Conservatory gutters are a specialty of ours. We have the equipment and expertise to safely clean gutters between your house and conservatory, as well as over conservatory roofs.',
    category: 'Gutter Cleaning',
    icon: '🏠'
  },
  {
    id: 'gutter-cleaning-equipment',
    question: 'What equipment do you use?',
    answer: 'We use industrial-grade vacuum systems, high-reach poles (up to 40ft), professional ladders, safety harnesses, and inspection cameras. All equipment is regularly maintained and meets safety standards.',
    category: 'Gutter Cleaning',
    icon: '🔨'
  },
  {
    id: 'gutter-cleaning-insurance',
    question: 'Are you insured for gutter cleaning?',
    answer: 'Yes, we carry full public liability insurance and all our technicians are trained and certified. Your property and our team are fully protected during all work.',
    category: 'Gutter Cleaning',
    icon: '🛡️'
  },
  {
    id: 'payment-methods',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit/debit cards (Visa, Mastercard, Amex), bank transfers, and contactless payments. Payment is due upon completion of work.',
    category: 'General',
    icon: '💳'
  },
  {
    id: 'emergency-gutter-cleaning',
    question: 'Do you offer emergency gutter cleaning?',
    answer: 'Yes! We offer same-day and emergency booking for urgent situations like severe blockages causing flooding. Contact us immediately and we\'ll prioritize your job.',
    category: 'Gutter Cleaning',
    icon: '🚨'
  },
  {
    id: 'gutter-cleaning-commercial',
    question: 'Do you clean commercial gutters?',
    answer: 'Yes, we provide commercial gutter cleaning services for offices, retail units, warehouses, and industrial buildings. We can work outside business hours to minimize disruption.',
    category: 'Gutter Cleaning',
    icon: '🏢'
  },
  {
    id: 'gutter-cleaning-guarantee',
    question: 'Do you offer a guarantee?',
    answer: 'Yes! We offer a 100% satisfaction guarantee. If you\'re not happy with our work, we\'ll return and make it right at no extra cost.',
    category: 'General',
    icon: '✅'
  },
  {
    id: 'gutter-cleaning-high-reach',
    question: 'Can you reach high gutters?',
    answer: 'Yes, our vacuum systems can reach up to 40 feet (4 stories) from the ground. For higher buildings, we have specialized access equipment and trained technicians.',
    category: 'Gutter Cleaning',
    icon: '📏'
  },
  {
    id: 'gutter-cleaning-photos',
    question: 'Do you provide before/after photos?',
    answer: 'Yes! We can provide photographic evidence of the work completed, showing before and after conditions. This is especially useful for landlords and property managers.',
    category: 'Gutter Cleaning',
    icon: '📸'
  },
  {
    id: 'gutter-cleaning-weekend',
    question: 'Do you work weekends?',
    answer: 'Yes! We\'re open 7 days a week including weekends and bank holidays. We understand weekends are often more convenient, so we make sure our team is available when you need us.',
    category: 'General',
    icon: '📅'
  },

  // Roof Cleaning Questions (15)
  {
    id: 'roof-cleaning-necessary',
    question: 'Is roof cleaning necessary?',
    answer: 'Yes! Regular roof cleaning prevents moss and algae buildup that can damage tiles, reduce lifespan, and cause leaks. It also maintains your property\'s appearance and value.',
    category: 'Roof Cleaning',
    icon: '🏠'
  },
  {
    id: 'roof-cleaning-cost',
    question: 'How much does roof cleaning cost?',
    answer: 'Roof cleaning costs depend on roof size, pitch, and condition. Typical residential properties range from £200-£600. We provide free quotes after assessing your roof.',
    category: 'Roof Cleaning',
    icon: '💷'
  },
  {
    id: 'roof-cleaning-damage-tiles',
    question: 'Will roof cleaning damage my tiles?',
    answer: 'No! We use gentle, low-pressure cleaning methods specifically designed for roofs. Our techniques remove moss and algae without damaging tiles, slates, or other roofing materials.',
    category: 'Roof Cleaning',
    icon: '🛡️'
  },
  {
    id: 'roof-cleaning-frequency',
    question: 'How often should I clean my roof?',
    answer: 'We recommend roof cleaning every 2-3 years, or more frequently if you have significant tree coverage. Regular cleaning prevents buildup and extends your roof\'s lifespan.',
    category: 'Roof Cleaning',
    icon: '🗓️'
  },
  {
    id: 'roof-moss-removal',
    question: 'How do you remove moss from roofs?',
    answer: 'We use a combination of manual removal, soft washing with biocides, and preventative treatments. The moss is carefully removed without damaging tiles, and treatments prevent regrowth.',
    category: 'Roof Cleaning',
    icon: '🌿'
  },
  {
    id: 'roof-cleaning-methods',
    question: 'What roof cleaning methods do you use?',
    answer: 'We use soft washing (low-pressure cleaning), manual moss removal, biocide treatments, and preventative coatings. The method depends on your roof type and condition.',
    category: 'Roof Cleaning',
    icon: '🔧'
  },
  {
    id: 'roof-cleaning-duration',
    question: 'How long does roof cleaning take?',
    answer: 'Most residential roofs take 4-8 hours depending on size and condition. Larger or heavily soiled roofs may take longer. We\'ll provide an estimated timeframe with your quote.',
    category: 'Roof Cleaning',
    icon: '⏱️'
  },
  {
    id: 'roof-cleaning-weather',
    question: 'What weather conditions do you need for roof cleaning?',
    answer: 'We need dry conditions for roof cleaning. We monitor weather forecasts and will reschedule if rain is expected. This ensures treatments are effective and safety is maintained.',
    category: 'Roof Cleaning',
    icon: '☀️'
  },
  {
    id: 'roof-cleaning-safety',
    question: 'Is roof cleaning safe?',
    answer: 'Yes, when done by professionals. Our team uses proper safety equipment, harnesses, and follows strict safety protocols. We\'re fully insured and trained for working at height.',
    category: 'Roof Cleaning',
    icon: '⚠️'
  },
  {
    id: 'roof-cleaning-types',
    question: 'What types of roofs can you clean?',
    answer: 'We clean all roof types including tiles, slates, concrete, metal, flat roofs, and conservatory roofs. Each material requires specific techniques which our team is trained in.',
    category: 'Roof Cleaning',
    icon: '🏘️'
  },
  {
    id: 'roof-coating-after-cleaning',
    question: 'Do you apply protective coatings after cleaning?',
    answer: 'Yes! We offer protective coatings that prevent moss regrowth and extend the time between cleanings. These treatments are optional but highly recommended.',
    category: 'Roof Cleaning',
    icon: '🎨'
  },
  {
    id: 'roof-cleaning-gutters-included',
    question: 'Does roof cleaning include gutter cleaning?',
    answer: 'Roof and gutter cleaning are separate services, but we offer discounted packages when both are done together. This is the most cost-effective approach.',
    category: 'Roof Cleaning',
    icon: '📦'
  },
  {
    id: 'roof-inspection-included',
    question: 'Do you inspect the roof during cleaning?',
    answer: 'Yes! We perform a visual inspection and report any issues like damaged tiles, loose flashing, or potential leak points. This helps you address problems early.',
    category: 'Roof Cleaning',
    icon: '🔍'
  },
  {
    id: 'roof-cleaning-flat-roofs',
    question: 'Can you clean flat roofs?',
    answer: 'Absolutely! Flat roofs require special attention as they\'re prone to standing water and debris buildup. We clean, clear drains, and can apply protective coatings.',
    category: 'Roof Cleaning',
    icon: '📐'
  },
  {
    id: 'roof-cleaning-conservatory',
    question: 'Do you clean conservatory roofs?',
    answer: 'Yes! Conservatory roofs are a specialty. We clean glass, polycarbonate, and solid conservatory roofs, removing algae, moss, and restoring clarity.',
    category: 'Roof Cleaning',
    icon: '🏡'
  },

  // Gutter Installation Questions (15)
  {
    id: 'gutter-installation-cost',
    question: 'How much does gutter installation cost?',
    answer: 'Gutter installation costs vary based on property size, gutter type, and materials. Typical residential installations range from £400-£1,500. We provide detailed quotes after surveying your property.',
    category: 'Gutter Installation',
    icon: '💷'
  },
  {
    id: 'gutter-types-available',
    question: 'What types of gutters do you install?',
    answer: 'We install UPVC, aluminum, cast iron, and copper gutters in various profiles including half-round, square, and ogee. We\'ll recommend the best option for your property.',
    category: 'Gutter Installation',
    icon: '🔧'
  },
  {
    id: 'gutter-installation-duration',
    question: 'How long does gutter installation take?',
    answer: 'Most residential gutter installations take 1-2 days depending on property size and complexity. We\'ll provide a specific timeframe with your quote.',
    category: 'Gutter Installation',
    icon: '⏱️'
  },
  {
    id: 'gutter-color-options',
    question: 'What colors are available for gutters?',
    answer: 'We offer gutters in white, black, brown, grey, and anthracite grey. Custom colors may be available upon request. We\'ll help you choose a color that complements your property.',
    category: 'Gutter Installation',
    icon: '🎨'
  },
  {
    id: 'gutter-warranty',
    question: 'Do you offer a warranty on gutter installation?',
    answer: 'Yes! We provide a 10-year guarantee on workmanship and materials carry manufacturer warranties (typically 10-20 years). You\'re fully protected.',
    category: 'Gutter Installation',
    icon: '✅'
  },
  {
    id: 'replace-or-repair-gutters',
    question: 'Should I repair or replace my gutters?',
    answer: 'It depends on the extent of damage and gutter age. Minor issues can be repaired, but if gutters are old, extensively damaged, or constantly leaking, replacement is more cost-effective long-term.',
    category: 'Gutter Installation',
    icon: '🤔'
  },
  {
    id: 'gutter-size-needed',
    question: 'What size gutters do I need?',
    answer: 'Gutter size depends on roof area and rainfall in your region. Standard residential gutters are 100mm or 150mm. We\'ll calculate the correct size during our survey.',
    category: 'Gutter Installation',
    icon: '📏'
  },
  {
    id: 'gutter-installation-planning',
    question: 'Do I need planning permission for new gutters?',
    answer: 'Generally no, gutter replacement doesn\'t require planning permission. However, listed buildings or conservation areas may have restrictions. We can advise on your specific situation.',
    category: 'Gutter Installation',
    icon: '📋'
  },
  {
    id: 'seamless-gutters',
    question: 'Do you install seamless gutters?',
    answer: 'Yes! Seamless gutters reduce leak points and look cleaner. They\'re custom-made on-site to fit your property perfectly. They\'re more expensive but offer superior performance.',
    category: 'Gutter Installation',
    icon: '✨'
  },
  {
    id: 'gutter-guards-installation',
    question: 'Can you install gutter guards?',
    answer: 'Yes! We install various gutter guard systems including mesh guards, brush guards, and foam inserts. These reduce maintenance frequency by preventing debris buildup.',
    category: 'Gutter Installation',
    icon: '🛡️'
  },
  {
    id: 'downpipe-installation',
    question: 'Do you install downpipes too?',
    answer: 'Yes, downpipe installation is included with gutter installation. We ensure proper sizing, positioning, and connection to drainage systems.',
    category: 'Gutter Installation',
    icon: '🚰'
  },
  {
    id: 'gutter-installation-winter',
    question: 'Can gutters be installed in winter?',
    answer: 'Yes, we can install gutters year-round in most weather conditions. However, extreme cold or heavy rain may cause delays. We\'ll schedule appropriately.',
    category: 'Gutter Installation',
    icon: '❄️'
  },
  {
    id: 'old-gutter-disposal',
    question: 'Do you dispose of old gutters?',
    answer: 'Yes! We remove and dispose of old gutters responsibly, recycling materials where possible. This is included in our installation service.',
    category: 'Gutter Installation',
    icon: '♻️'
  },
  {
    id: 'gutter-installation-fascia',
    question: 'Do you repair fascia boards during installation?',
    answer: 'Yes, if fascia boards are damaged, we can repair or replace them before installing new gutters. This ensures a solid, long-lasting installation.',
    category: 'Gutter Installation',
    icon: '🔨'
  },
  {
    id: 'gutter-installation-quote',
    question: 'How do I get a quote for gutter installation?',
    answer: 'Contact us for a free, no-obligation quote. We\'ll survey your property, discuss options, and provide a detailed written estimate. No pressure, just honest advice.',
    category: 'Gutter Installation',
    icon: '📝'
  },

  // Maintenance Questions (5)
  {
    id: 'gutter-maintenance-plan',
    question: 'Do you offer maintenance plans?',
    answer: 'Yes! We offer annual and bi-annual maintenance plans with discounted rates. Regular maintenance prevents costly repairs and extends gutter lifespan.',
    category: 'Maintenance',
    icon: '📋'
  },
  {
    id: 'prevent-gutter-blockages',
    question: 'How can I prevent gutter blockages?',
    answer: 'Regular cleaning (twice yearly), installing gutter guards, trimming overhanging trees, and annual inspections are the best prevention methods. We can set up a maintenance schedule.',
    category: 'Maintenance',
    icon: '🛡️'
  },
  {
    id: 'gutter-inspection-free',
    question: 'Do you offer free gutter inspections?',
    answer: 'Yes! We provide free inspections to assess your gutter condition and recommend necessary work. No obligation - just honest, professional advice.',
    category: 'Maintenance',
    icon: '🔍'
  },
  {
    id: 'signs-gutter-damage',
    question: 'What are signs of gutter damage?',
    answer: 'Look for: sagging sections, rust/corrosion, cracks, leaks at joints, water staining on walls, separated joints, and loose brackets. If you notice any, contact us for an inspection.',
    category: 'Maintenance',
    icon: '⚠️'
  },
  {
    id: 'gutter-lifespan',
    question: 'How long do gutters last?',
    answer: 'UPVC gutters last 20-30 years, aluminum 20-25 years, and copper 50+ years with proper maintenance. Regular cleaning and repairs extend lifespan significantly.',
    category: 'Maintenance',
    icon: '⏳'
  }
];

export function getFAQsByCategory(category: string): FAQItem[] {
  if (category === 'All') return allFAQs;
  return allFAQs.filter(faq => faq.category === category);
}

export function getFAQById(id: string): FAQItem | undefined {
  return allFAQs.find(faq => faq.id === id);
}

export const categories = ['All', 'Gutter Cleaning', 'Roof Cleaning', 'Gutter Installation', 'Maintenance', 'General'];
