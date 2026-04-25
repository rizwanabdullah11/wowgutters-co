export interface WorkPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  views: string;
  content?: string;
  location?: string;
  client?: string;
  services?: string[];
}

export const workPosts: WorkPost[] = [
  {
    id: 'downpipe-shoe-project',
    title: 'Why Adding A Downpipe Shoe Prevents Repeat Blockages (Not Just A Quick Fix)',
    excerpt: 'Dealing With a Blocked Downpipe in the UK? A blocked downpipe is one of the most common exterior maintenance problems for UK homeowners - especially during autumn and winter. Most people assume the solution is simple: Clear the blockage. Flush [...]',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    date: 'February 23rd, 2026',
    views: '21',
    location: 'Sheffield',
    client: 'Private Homeowner',
    services: ['Downpipe Repair', 'Gutter Maintenance']
  },
  {
    id: 'rugby-club-gutter-cleaning',
    title: 'Local Rugby Club Gutter Cleaning: How Sudell Took on Burton Rugby Club\'s Blocked Gutters',
    excerpt: 'When Burton Rugby Club reached out to Sudell, they weren\'t looking for just a regular gutter clean. This was a sports complex with gutters full of surprises—chief among them, [...]',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
    date: 'November 29th, 2024',
    views: '522',
    location: 'Burton',
    client: 'Burton Rugby Club',
    services: ['Commercial Gutter Cleaning', 'Debris Removal']
  },
  {
    id: 'gutter-jungle-weeds',
    title: 'Battling the Gutter Jungle: How We Tamed the 1.2 Metre Tall Gutter Behemoths',
    excerpt: 'And the Winner for Largest Weeds Grown in a House Gutter Goes To... Welcome to another thrilling episode of \'Adventures in Gutter Cleaning\' brought to you by Sudell! Today, [...]',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800',
    date: 'June 12th, 2024',
    views: '1322',
    location: 'Derby',
    client: 'Private Homeowner',
    services: ['Extreme Gutter Cleaning', 'Vegetation Removal']
  },
  {
    id: 'aluminium-gutters-sheffield',
    title: 'Fixing Damaged Aluminium Gutters in Sheffield',
    excerpt: 'Project Overview Client: Private Homeowner Location: Sheffield Property Type: Detached Home Services Rendered: Gutter Removal, Installation of New Rise and Fall Brackets, and Gutter Reinstallation At Sudell Gutter Services, [...]',
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800',
    date: 'May 17th, 2024',
    views: '1250',
    location: 'Sheffield',
    client: 'Private Homeowner',
    services: ['Gutter Repair', 'Bracket Installation', 'Gutter Replacement']
  },
  {
    id: 'st-clements-church-derby',
    title: 'St Clements Church: Gutter Maintenance in Derby',
    excerpt: 'Our Sudell Derby team were called out to St Clements Church to carry out church gutter maintenance, including a full gutter clear and the unblocking of multiple cast iron [...]',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e7?w=800',
    date: 'January 15th, 2026',
    views: '117',
    location: 'Derby',
    client: 'St Clements Church',
    services: ['Church Gutter Maintenance', 'Cast Iron Unblocking']
  },
  {
    id: 'commercial-roof-moss-castle-donington',
    title: 'Commercial Roof Moss Mayhem: How Sudell Transformed This Castle Donington Industrial Roof',
    excerpt: 'The moment we stepped onto the site in Castle Donington, it was obvious this roof had crossed the line from \'dirty\' to \'problematic.\' Moss hadn\'t just appeared — it [...]',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800',
    date: 'November 25th, 2025',
    views: '118',
    location: 'Castle Donington',
    client: 'Industrial Complex',
    services: ['Commercial Roof Cleaning', 'Moss Removal']
  },
  {
    id: 'not-standard-gutter-cleaning',
    title: 'NOT Your Standard Gutter Cleaning service!',
    excerpt: 'Not Your Standard Gutter Cleaning Company Gutter cleaning is easy, right? Just climb a ladder, scoop some muck out, and call it a day. If only it were [...]',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    date: 'February 14th, 2025',
    views: '412',
    location: 'Various',
    client: 'Multiple Clients',
    services: ['Specialized Gutter Cleaning', 'Problem Solving']
  }
];