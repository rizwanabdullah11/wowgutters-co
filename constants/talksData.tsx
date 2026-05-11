export interface TalkPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
  content?: string;
}

export const talksData: TalkPost[] = [
  {
    id: 'gutter-maintenance-tips',
    title: 'Essential Gutter Maintenance Tips for Birmingham Homeowners',
    excerpt: 'Practical gutter maintenance advice from WOW Gutters. Learn when to clean, what to check, and how to spot problems early to avoid costly repairs.',
    author: 'WOW Gutters Team',
    date: 'March 8, 2026',
    image: '/gutter-cleaning.jpeg',
    category: 'Maintenance',
    readTime: '5 min read',
    content: `
      <p>Based on our experience cleaning thousands of gutters across Birmingham and the West Midlands, here are the maintenance practices that actually make a difference:</p>
      
      <h3>1. Clean Twice a Year Minimum</h3>
      <p>In Birmingham, we recommend cleaning in late spring (May) and late autumn (November). If you have oak, sycamore, or other heavy-shedding trees nearby, you may need a third clean in early autumn. These trees drop more debris than most homeowners expect.</p>
      
      <h3>2. Check After Heavy Storms</h3>
      <p>Birmingham gets its share of storms. After heavy wind and rain, do a quick visual check from ground level. Look for water overflowing, gutters pulling away from the fascia, or visible sagging. These are signs of blockages or bracket failure.</p>
      
      <h3>3. Watch for These Warning Signs</h3>
      <p>Standing water in gutters (visible from upstairs windows), water staining on external walls, damp patches near the roofline, or plants growing from gutters. Any of these mean you need professional attention soon.</p>
      
      <h3>4. Don't Ignore Small Leaks</h3>
      <p>A dripping joint might seem minor, but it's soaking the same spot repeatedly. This causes the most damage over time - damp patches, rotten fascia boards, and even internal moisture problems. Small leaks are quick and cheap to fix if caught early.</p>
      
      <h3>5. Ground-Level Vacuum vs Ladders</h3>
      <p>If you're considering DIY cleaning, be aware that working at height is the biggest risk. Our ground-level vacuum system is safer and more thorough than ladder work. We can also inspect while we clean and spot problems you might miss.</p>
      
      <h3>Birmingham-Specific Advice</h3>
      <p>Properties in areas with mature trees (Moseley, Harborne, Edgbaston) need more frequent cleaning. Victorian and Edwardian properties often have cast iron gutters that need different care than modern uPVC systems.</p>
      
      <p>If you're not comfortable working at heights, or if you spot any damage during your checks, contact WOW Gutters for a free inspection and quote.</p>
    `
  },
  {
    id: 'hot-wash-vs-traditional-cleaning',
    title: 'Hot Wash Cleaning: Why Temperature Matters for Birmingham Properties',
    excerpt: 'Our hot wash system cleans conservatories, fascias, and gutters more effectively than cold water. Here\'s the science behind why it works better.',
    author: 'WOW Gutters Team',
    date: 'March 5, 2026',
    image: '/gutter-repair-after.jpeg',
    category: 'Technology',
    readTime: '7 min read',
    content: `
      <p>We invested in hot wash technology because we saw the difference it makes on Birmingham properties. Here's what actually happens when you use hot water instead of cold:</p>
      
      <h3>Temperature Breaks Down Organic Matter</h3>
      <p>Birmingham's climate means algae, moss, and lichen grow quickly on conservatory roofs, fascias, and gutters. Hot water (60-80°C) breaks down these organic materials at a molecular level. Cold water just moves them around.</p>
      
      <h3>Kills Spores and Bacteria</h3>
      <p>Hot water kills algae spores and bacteria, so surfaces stay cleaner for longer. With cold water cleaning, spores survive and regrow within weeks. Our customers report their conservatories stay clear for 12-18 months instead of 3-6 months.</p>
      
      <h3>No Harsh Chemicals Needed</h3>
      <p>The combination of heat and purified water is so effective that we rarely need chemicals. This is safer for your plants, pets, and the environment. It also means no chemical residue or streaking on glass.</p>
      
      <h3>Purified Water = No Streaks</h3>
      <p>We use deionized water that has had all minerals removed. When it dries, it leaves no spots or streaks. This is especially important for conservatory glass and windows where streaking is obvious.</p>
      
      <h3>Safe for Delicate Surfaces</h3>
      <p>Unlike pressure washing, hot wash uses lower pressure. This makes it safe for polycarbonate conservatory roofs, painted fascias, and older uPVC that might be damaged by high-pressure jets.</p>
      
      <h3>Real Results on Birmingham Properties</h3>
      <p>We've cleaned hundreds of conservatories across Birmingham using hot wash. The difference is visible immediately - green algae disappears, black spots vanish, and the glass is crystal clear. Customers consistently tell us it looks better than when it was new.</p>
      
      <h3>When to Use Hot Wash</h3>
      <p>Hot wash is ideal for conservatory roofs, fascias, soffits, gutters (external), uPVC windows, and cladding. It's particularly effective on north-facing surfaces where algae growth is worst.</p>
      
      <p>If your conservatory has turned green, or your fascias have black streaks, hot wash cleaning will restore them properly. Contact WOW Gutters for a free assessment.</p>
    `
  },
  {
    id: 'conservatory-care-guide',
    title: 'Conservatory Maintenance Guide for Birmingham Homeowners',
    excerpt: 'Keep your conservatory in perfect condition with this practical maintenance guide. Based on our experience with hundreds of Birmingham conservatories.',
    author: 'WOW Gutters Team',
    date: 'March 1, 2026',
    image: '/gutter-repair-before.png',
    category: 'Guides',
    readTime: '8 min read',
    content: `
      <p>We clean and maintain conservatories across Birmingham every week. Here's what we've learned about keeping them in perfect condition:</p>
      
      <h3>The Roof is Everything</h3>
      <p>Your conservatory roof takes the most punishment. In Birmingham's climate, algae and moss grow quickly, especially on north-facing panels. Green algae blocks light and holds moisture against the panels. Get the roof professionally cleaned every 12-18 months.</p>
      
      <h3>Check Gutters and Valleys</h3>
      <p>Conservatory gutters are smaller than house gutters and block faster. Leaves and moss from the roof wash into them. Check them every few months and clear any debris. Blocked conservatory gutters can cause leaks into the conservatory structure.</p>
      
      <h3>Seal and Gasket Inspection</h3>
      <p>The rubber seals around roof panels perish over time. Check them annually for cracks or gaps. Failed seals cause leaks that damage the internal structure. Replacing seals is much cheaper than repairing water damage.</p>
      
      <h3>Frame and Fascia Care</h3>
      <p>uPVC frames need cleaning to prevent discoloration. Use appropriate uPVC cleaner, not household bleach which can damage the surface. Check for any cracks or damage, especially around the base where water can collect.</p>
      
      <h3>Ventilation is Critical</h3>
      <p>Birmingham's weather means condensation is a real problem. Ensure roof vents open and close properly. Good ventilation prevents condensation, mould, and that musty smell. If vents are stuck, get them fixed - they're essential.</p>
      
      <h3>Internal Cleaning</h3>
      <p>Clean internal glass regularly to maintain light levels. Condensation can leave mineral deposits that are hard to remove if left too long. A squeegee and clean water work well for regular maintenance.</p>
      
      <h3>Professional Maintenance</h3>
      <p>Annual professional cleaning catches problems early. We inspect seals, check for cracks, clear gutters, and clean the roof properly. This prevents expensive repairs and keeps your conservatory usable year-round.</p>
      
      <h3>Common Birmingham Issues</h3>
      <p>Algae growth on north-facing roofs, moss in roof valleys, blocked gutters from nearby trees, and condensation in autumn/winter. All of these are manageable with proper maintenance.</p>
      
      <p>If your conservatory roof has turned green, or you're seeing leaks or condensation problems, contact WOW Gutters for a free inspection and quote.</p>
    `
  },
  {
    id: 'winter-gutter-protection',
    title: 'Preparing Your Gutters for Birmingham Winters',
    excerpt: 'Winter puts extra strain on your gutters. Here\'s how to prepare them for cold weather and prevent ice damage, blockages, and overflow.',
    author: 'WOW Gutters Team',
    date: 'February 28, 2026',
    image: '/Blog.png',
    category: 'Seasonal',
    readTime: '6 min read',
    content: `
      <p>Birmingham winters might not be extreme, but they still cause gutter problems. Here's how to prepare:</p>
      
      <h3>Clear Before Winter Arrives</h3>
      <p>Get gutters cleared in late October or early November, after most leaves have fallen but before the first hard frost. Wet leaves freeze solid and become much harder to remove. They also block water flow completely.</p>
      
      <h3>Check Downpipes</h3>
      <p>Frozen blockages in downpipes cause water to back up and overflow. Make sure downpipes are completely clear. We use cameras to check for hidden blockages that aren't visible from the top.</p>
      
      <h3>Inspect Brackets and Joints</h3>
      <p>Cold weather makes plastic brittle. Brackets and joints that are already loose will fail faster in winter. Check for any sagging or movement and get repairs done before temperatures drop.</p>
      
      <h3>Trim Overhanging Branches</h3>
      <p>Winter storms bring down branches and twigs. Trim back any branches hanging over your roof. This reduces debris and prevents damage from falling branches during storms.</p>
      
      <h3>Check for Ice Dams</h3>
      <p>If you see icicles hanging from gutters, it often means the gutter is blocked and water is freezing as it overflows. This needs clearing urgently as ice can damage gutter seams and brackets.</p>
      
      <h3>After Heavy Snow</h3>
      <p>If we get snow, check gutters once it melts. Snow melt can overwhelm blocked gutters. Look for overflow or water running down walls. This indicates blockages that need clearing.</p>
      
      <p>Book your pre-winter gutter clear with WOW Gutters in October or November. We'll make sure your gutters are ready for whatever winter brings.</p>
    `
  },
  {
    id: 'commercial-cleaning-benefits',
    title: 'Commercial Gutter Cleaning: Why Birmingham Businesses Need Regular Maintenance',
    excerpt: 'Commercial properties need professional gutter maintenance to prevent water damage, maintain appearance, and avoid costly emergency repairs.',
    author: 'WOW Gutters Team',
    date: 'February 25, 2026',
    image: '/blog1.png',
    category: 'Commercial',
    readTime: '5 min read',
    content: `
      <p>We maintain gutters for shops, offices, warehouses, and community buildings across Birmingham. Here's why commercial properties need regular professional gutter cleaning:</p>
      
      <h3>Prevent Water Damage</h3>
      <p>Commercial properties often have flat roofs or complex drainage systems. Blocked gutters can cause water to pool on roofs, leading to leaks and structural damage. Regular maintenance prevents expensive repairs.</p>
      
      <h3>Maintain Professional Appearance</h3>
      <p>Overflowing gutters, water staining on walls, and algae growth look unprofessional. First impressions matter for retail and office properties. Clean, functioning gutters are part of maintaining your property's appearance.</p>
      
      <h3>Avoid Emergency Callouts</h3>
      <p>Emergency gutter repairs cost more and cause disruption. Regular maintenance catches problems early when they're quick and cheap to fix. A maintenance contract is more cost-effective than reactive repairs.</p>
      
      <h3>Protect Stock and Equipment</h3>
      <p>Water damage from failed gutters can affect stock, equipment, and interior finishes. This is especially critical for retail units and warehouses. Prevention is much cheaper than replacement.</p>
      
      <h3>Meet Insurance Requirements</h3>
      <p>Some commercial insurance policies require regular maintenance records. Professional gutter cleaning provides documentation that maintenance has been carried out properly.</p>
      
      <h3>Maintenance Contracts</h3>
      <p>We offer commercial maintenance contracts with scheduled visits. This ensures gutters are cleared before problems develop, and you have one less thing to manage. We work outside business hours if needed.</p>
      
      <p>Contact WOW Gutters for a free commercial property assessment and maintenance quote. We work with businesses across Birmingham and the West Midlands.</p>
    `
  },
  {
    id: 'eco-friendly-cleaning-methods',
    title: 'Eco-Friendly Gutter Cleaning: How WOW Gutters Protects Your Garden',
    excerpt: 'Our cleaning methods are safe for your plants, pets, and the environment. Here\'s how we clean effectively without harsh chemicals.',
    author: 'WOW Gutters Team',
    date: 'February 22, 2026',
    image: '/Professional-experience.png',
    category: 'Environment',
    readTime: '7 min read',
    content: `
      <p>Many Birmingham homeowners ask about the environmental impact of gutter cleaning. Here's how we keep your property clean while protecting your garden:</p>
      
      <h3>No Harsh Chemicals</h3>
      <p>Our hot wash system uses heat and purified water instead of chemicals. This is effective for removing algae, moss, and dirt without any chemical runoff into your garden or drains.</p>
      
      <h3>Vacuum Collection System</h3>
      <p>Our ground-level vacuum system collects all debris into sealed bags. Nothing falls onto your garden or patio. We remove all waste responsibly - it doesn't end up in your flower beds or drains.</p>
      
      <h3>Safe for Plants and Pets</h3>
      <p>Because we don't use chemicals, there's no risk to plants below gutters or pets in the garden. The water that does run off is just rainwater and organic debris - nothing harmful.</p>
      
      <h3>Proper Waste Disposal</h3>
      <p>We dispose of gutter waste properly at licensed facilities. Gutter debris contains organic matter that can be composted rather than going to landfill. We don't just dump it in your green bin.</p>
      
      <h3>Water Conservation</h3>
      <p>Our system uses less water than traditional pressure washing. The hot wash is more efficient, so we achieve better results with less water consumption.</p>
      
      <h3>Protecting Birmingham's Environment</h3>
      <p>We're conscious that what goes down drains ends up in Birmingham's waterways. By avoiding chemicals and collecting debris properly, we're doing our part to protect local water quality.</p>
      
      <h3>Garden-Friendly Scheduling</h3>
      <p>We can work around your garden. If you have delicate plants or areas you want protected, just let us know. We'll take extra care around those areas.</p>
      
      <p>If you're concerned about the environmental impact of gutter cleaning, contact WOW Gutters. We'll explain exactly what we do and how we protect your garden.</p>
    `
  }
];

export const categories = ['All', 'Maintenance', 'Technology', 'Guides', 'Seasonal', 'Commercial', 'Environment'];