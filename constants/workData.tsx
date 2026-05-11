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
    title: 'Downpipe Shoe Installation Prevents Repeat Blockages in Birmingham Home',
    excerpt: 'A Birmingham homeowner was experiencing repeated downpipe blockages every few months. We installed a downpipe shoe with leaf guard, which has completely eliminated the problem. The customer reported no blockages in the 8 months since installation.',
    image: '/gutter-repair-after.jpeg',
    date: 'February 23rd, 2026',
    views: '21',
    location: 'Birmingham',
    client: 'Residential Property Owner',
    services: ['Downpipe Shoe Installation', 'Leaf Guard Fitting', 'Gutter Maintenance'],
    content: `
      <h3>The Problem</h3>
      <p>The customer contacted us after experiencing their third downpipe blockage in 6 months. Each time, water was overflowing and causing damp patches on the external wall. They were frustrated with the recurring issue and wanted a permanent solution.</p>
      
      <h3>Our Assessment</h3>
      <p>During our inspection, we found that leaves and debris were entering the downpipe from the gutter and accumulating at the bottom bend. The property had several large trees nearby, making this a recurring problem. A simple clear wouldn't solve the long-term issue.</p>
      
      <h3>The Solution</h3>
      <p>We recommended and installed a downpipe shoe with an integrated leaf guard at the top of the downpipe. This allows water to flow freely while preventing leaves and large debris from entering. We also cleared the existing blockage and checked the entire gutter system for proper fall.</p>
      
      <h3>Results</h3>
      <p>The customer has reported no blockages in the 8 months since installation. The downpipe shoe has completely eliminated the problem, saving them from repeated callouts and potential water damage. They've recommended our service to three neighbors who had similar issues.</p>
      
      <h3>Customer Feedback</h3>
      <p>"Finally, a proper fix instead of just clearing the same blockage over and over. The WOW Gutters team explained everything clearly and the installation was quick and professional. Haven't had a single problem since." - Birmingham Homeowner</p>
    `
  },
  {
    id: 'rugby-club-gutter-cleaning',
    title: 'Commercial Gutter Cleaning for Local Sports Club in Birmingham',
    excerpt: 'A Birmingham sports club contacted us about severely blocked gutters on their clubhouse. We cleared 15 bags of compacted leaves and moss, repaired two leaking joints, and set up a maintenance schedule to prevent future issues.',
    image: '/gutter-cleaning.jpeg',
    date: 'November 29th, 2024',
    views: '522',
    location: 'Birmingham',
    client: 'Community Sports Club',
    services: ['Commercial Gutter Cleaning', 'Joint Repairs', 'Maintenance Contract'],
    content: `
      <h3>The Challenge</h3>
      <p>The sports club had neglected their gutters for several years. Water was overflowing during rain, creating puddles near the entrance and causing concern about potential structural damage. They needed a thorough clean and assessment.</p>
      
      <h3>What We Found</h3>
      <p>The gutters were completely packed with compacted leaves, moss, and silt. We removed 15 large bags of debris. Two joints were leaking due to failed seals, and several brackets had loosened from the weight of the debris.</p>
      
      <h3>Our Work</h3>
      <p>We used our ground-level vacuum system to clear all gutters and downpipes. We resealed the leaking joints with proper gutter sealant and tightened all loose brackets. We also adjusted the fall on one section where water was pooling.</p>
      
      <h3>Ongoing Maintenance</h3>
      <p>We set up a twice-yearly maintenance contract to keep the gutters clear. This prevents the buildup from returning and ensures any small issues are caught early before they become expensive repairs.</p>
      
      <h3>Impact</h3>
      <p>The club now has fully functioning gutters with no overflow. The entrance area stays dry, and they have peace of mind knowing the building is protected from water damage. The maintenance contract has proven cost-effective compared to emergency callouts.</p>
    `
  },
  {
    id: 'gutter-jungle-weeds',
    title: 'Extreme Gutter Cleaning: Removing 1-Meter Weeds from Birmingham Property',
    excerpt: 'A Birmingham homeowner called us about plants growing from their gutters. We found weeds over 1 meter tall with roots penetrating the gutter seams. We cleared everything, repaired the damage, and the gutters are now functioning perfectly.',
    image: '/gutter-repair-before.png',
    date: 'June 12th, 2024',
    views: '1322',
    location: 'Birmingham',
    client: 'Residential Homeowner',
    services: ['Extreme Gutter Cleaning', 'Vegetation Removal', 'Gutter Repairs'],
    content: `
      <h3>The Discovery</h3>
      <p>When we arrived, we were genuinely surprised by what we found. Multiple weeds and small plants had grown over 1 meter tall directly from the gutters. The roots had penetrated through the gutter seams and were causing leaks.</p>
      
      <h3>The Problem</h3>
      <p>Years of neglect had allowed soil to build up in the gutters. Seeds had germinated and established root systems. The roots were forcing apart the gutter joints and creating multiple leak points. Water was running down the walls instead of through the downpipes.</p>
      
      <h3>Our Approach</h3>
      <p>We carefully removed all vegetation and roots, then cleared out the compacted soil and debris. We repaired all damaged joints and resealed the seams. We also checked and adjusted the gutter alignment to ensure proper water flow.</p>
      
      <h3>Prevention Advice</h3>
      <p>We recommended annual gutter cleaning to prevent this happening again. We also suggested trimming back overhanging branches to reduce the amount of organic matter falling into the gutters.</p>
      
      <h3>Outcome</h3>
      <p>The gutters are now completely clear and functioning as they should. All leaks have been repaired, and the customer has signed up for our annual maintenance service to ensure this never happens again.</p>
    `
  },
  {
    id: 'aluminium-gutters-birmingham',
    title: 'Aluminium Gutter Repair and Bracket Replacement in Birmingham',
    excerpt: 'A Birmingham homeowner had sagging aluminium gutters causing water to pool and overflow. We removed the gutters, installed new rise and fall brackets, and reinstalled the system with proper alignment. No more sagging or overflow.',
    image: '/gutter-final-video.mp4',
    date: 'May 17th, 2024',
    views: '1250',
    location: 'Birmingham',
    client: 'Residential Property',
    services: ['Gutter Repair', 'Bracket Replacement', 'System Realignment'],
    content: `
      <h3>The Issue</h3>
      <p>The customer's aluminium gutters were sagging in multiple places, causing water to pool instead of flowing to the downpipes. During heavy rain, water would overflow and run down the walls. The original brackets had failed due to age and the weight of debris.</p>
      
      <h3>Our Solution</h3>
      <p>We carefully removed the existing gutters and assessed the fascia board condition. We installed new rise and fall brackets at the correct spacing to support the aluminium gutters properly. We then reinstalled the gutters with the correct fall to ensure water flows efficiently to the downpipes.</p>
      
      <h3>Technical Details</h3>
      <p>Aluminium gutters require specific bracket spacing to prevent sagging. We installed brackets every 800mm and ensured a consistent fall of 1:600 along the entire run. We also checked all joints and corners for proper sealing.</p>
      
      <h3>Results</h3>
      <p>The gutters now sit level with no sagging. Water flows smoothly to the downpipes with no pooling or overflow. The customer was impressed with the attention to detail and the professional finish.</p>
      
      <h3>Customer Satisfaction</h3>
      <p>"The difference is night and day. The gutters look straight and work perfectly. WOW Gutters explained everything they were doing and the work was completed in one day. Very professional service." - Birmingham Homeowner</p>
    `
  }
];