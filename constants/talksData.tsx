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
    title: 'Essential Gutter Maintenance Tips for Homeowners',
    excerpt: 'Learn the key maintenance practices that will keep your gutters functioning properly and extend their lifespan.',
    author: 'Mike Johnson',
    date: 'March 8, 2026',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    category: 'Maintenance',
    readTime: '5 min read',
    content: `
      <p>Proper gutter maintenance is crucial for protecting your home from water damage. Here are the essential tips every homeowner should know:</p>
      
      <h3>1. Regular Cleaning Schedule</h3>
      <p>Clean your gutters at least twice a year - once in spring and once in fall. If you have many trees around your property, you may need to clean them more frequently.</p>
      
      <h3>2. Check for Proper Drainage</h3>
      <p>Ensure water flows freely through your gutters and downspouts. Look for standing water, which indicates blockages or improper slope.</p>
      
      <h3>3. Inspect for Damage</h3>
      <p>Regularly check for cracks, holes, rust spots, or loose joints. Early detection can prevent costly repairs later.</p>
      
      <h3>4. Trim Overhanging Branches</h3>
      <p>Keep tree branches trimmed back from your roof to reduce the amount of debris falling into your gutters.</p>
      
      <h3>5. Install Gutter Guards</h3>
      <p>Consider installing gutter guards to reduce the frequency of cleaning while still allowing proper water flow.</p>
      
      <p>Remember, if you're not comfortable working at heights or notice significant damage, it's always best to call professional gutter cleaning services.</p>
    `
  },
  {
    id: 'hot-wash-vs-traditional-cleaning',
    title: 'Hot Wash vs Traditional Cleaning: What\'s the Difference?',
    excerpt: 'Discover why hot wash cleaning is revolutionizing exterior cleaning and how it compares to traditional methods.',
    author: 'Sarah Williams',
    date: 'March 5, 2026',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
    category: 'Technology',
    readTime: '7 min read',
    content: `
      <p>Hot wash cleaning is transforming the way we approach exterior cleaning. But what makes it so different from traditional methods?</p>
      
      <h3>Temperature Makes the Difference</h3>
      <p>Hot wash systems heat water to optimal temperatures (typically 60-80°C) which significantly improves cleaning effectiveness. Hot water breaks down dirt, grime, and organic matter much more efficiently than cold water.</p>
      
      <h3>Purified Water Technology</h3>
      <p>Unlike traditional cleaning that uses tap water, hot wash systems use purified water that has had all minerals removed. This means no streaks, spots, or mineral deposits are left behind.</p>
      
      <h3>Chemical-Free Cleaning</h3>
      <p>The combination of hot temperature and purified water is so effective that harsh chemicals are rarely needed, making it environmentally friendly and safe for plants and pets.</p>
      
      <h3>Better Results, Longer Lasting</h3>
      <p>Hot wash cleaning removes more dirt and kills bacteria and algae at the source, meaning surfaces stay cleaner for longer periods compared to traditional cold water cleaning.</p>
      
      <h3>Versatile Applications</h3>
      <p>Hot wash is perfect for windows, conservatories, gutters, fascias, driveways, and even delicate surfaces that might be damaged by pressure washing.</p>
      
      <p>While traditional cleaning methods still have their place, hot wash technology represents the future of professional exterior cleaning.</p>
    `
  },
  {
    id: 'conservatory-care-guide',
    title: 'Complete Conservatory Care Guide',
    excerpt: 'Everything you need to know about maintaining your conservatory to keep it looking beautiful and functioning properly.',
    author: 'David Thompson',
    date: 'March 1, 2026',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
    category: 'Guides',
    readTime: '8 min read',
    content: `
      <p>A well-maintained conservatory can be the jewel of your home. Here's your complete guide to conservatory care:</p>
      
      <h3>Regular Cleaning Schedule</h3>
      <p>Clean your conservatory at least twice a year, ideally in spring and autumn. This includes both interior and exterior surfaces.</p>
      
      <h3>Roof Panel Maintenance</h3>
      <p>The roof is the most important part to maintain. Remove debris regularly and check for any cracked or loose panels. Algae and moss growth should be addressed immediately.</p>
      
      <h3>Frame Care</h3>
      <p>UPVC frames should be cleaned with appropriate cleaners to prevent discoloration. Timber frames may need regular treatment to prevent rot and maintain weather resistance.</p>
      
      <h3>Ventilation Management</h3>
      <p>Ensure roof vents and side vents are working properly. Good ventilation prevents condensation and maintains comfortable temperatures.</p>
      
      <h3>Heating and Cooling</h3>
      <p>Consider installing blinds or shading to control temperature. Proper insulation can make your conservatory usable year-round.</p>
      
      <h3>Professional Maintenance</h3>
      <p>Annual professional cleaning and inspection can identify potential problems early and keep your conservatory in perfect condition.</p>
      
      <p>With proper care, your conservatory will provide years of enjoyment and add significant value to your property.</p>
    `
  },
  {
    id: 'winter-gutter-protection',
    title: 'Protecting Your Gutters During Winter',
    excerpt: 'Essential steps to winterize your gutters and prevent ice damage during the cold months.',
    author: 'Mike Johnson',
    date: 'February 28, 2026',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    category: 'Seasonal',
    readTime: '6 min read'
  },
  {
    id: 'commercial-cleaning-benefits',
    title: 'Benefits of Professional Commercial Cleaning',
    excerpt: 'Why businesses should invest in professional exterior cleaning services for their commercial properties.',
    author: 'Sarah Williams',
    date: 'February 25, 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    category: 'Commercial',
    readTime: '5 min read'
  },
  {
    id: 'eco-friendly-cleaning-methods',
    title: 'Eco-Friendly Cleaning Methods for Your Home',
    excerpt: 'Sustainable and environmentally conscious approaches to keeping your home\'s exterior clean.',
    author: 'David Thompson',
    date: 'February 22, 2026',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
    category: 'Environment',
    readTime: '7 min read'
  }
];

export const categories = ['All', 'Maintenance', 'Technology', 'Guides', 'Seasonal', 'Commercial', 'Environment'];