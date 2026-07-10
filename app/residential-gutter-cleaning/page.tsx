import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import type { ServiceDetail } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Residential Gutter Cleaning Birmingham & West Midlands | WOW Gutters Ltd',
  description:
    'Residential gutter cleaning by WOW Gutters Ltd. Ground-level vacuum system, no ladders, before and after photos, downpipe testing included. From £50. Same-day appointments available across the West Midlands. Call 07421 433910.',
  canonicalPath: '/residential-gutter-cleaning/',
});

const service: ServiceDetail = {
  id: 'residential-gutter-cleaning',
  name: 'Residential Gutter Cleaning',
  icon: '🏠',
  heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920',
  heroTitle: 'Residential Gutter Cleaning for West Midlands Homes',
  heroDescription:
    'Professional residential gutter cleaning using a ground-level vacuum system. No ladders against your walls, no mess left behind, and no damage to fascias or brickwork. Before and after photos sent on every visit, including downpipe testing as standard. Covering all West Midlands residential properties from terraces to detached homes.',
  sections: [
    {
      title: 'Residential Gutter Cleaning — What We Do',
      content:
        'WOW Gutters Ltd specialises in residential gutter cleaning across the West Midlands. We use a commercial-grade vacuum system that reaches up to four storeys from ground level, meaning no ladders ever touch your property. We remove leaves, moss, silt, and compacted debris from the full gutter channel, clear every downpipe outlet, and flush each downpipe with water to confirm free flow. Every job is photographed and the images are sent to you the same day. Most domestic cleans are completed in 30–60 minutes.',
      image: '/gutter-cleaning.jpeg',
      imagePosition: 'right',
      bulletPoints: [
        'Ground-level operation — no ladders touch your property',
        'Full gutter run cleared including hard-to-reach sections',
        'Downpipe clearing and water flow testing on every visit',
        'Before and after photos sent to you the same day',
        'All waste collected into the vacuum — nothing left on paths or lawns',
        'Most domestic cleans completed in 30–60 minutes',
      ],
    },
    {
      title: 'Why Residential Gutter Cleaning Matters',
      content:
        'Blocked gutters are one of the most common causes of property damage in UK homes. When gutters fill with leaves, moss and debris, rainwater overflows the channel edge and runs down your walls. Over time this leads to damp inside the property, mould growth, rotting fascias, and even foundation damage. For homeowners across Birmingham, Wolverhampton, Coventry and the wider West Midlands, regular gutter cleaning is the simplest and most cost-effective way to protect your property.',
      image: '/files/12_gutter_overflow_water_damage.jpg',
      imagePosition: 'left',
      bulletPoints: [
        'Prevents damp patches and water staining on external walls',
        'Stops rotting fascia and soffit boards behind the gutter line',
        'Reduces mould and condensation in rooms near affected walls',
        'Prevents pooling water around foundations causing subsidence risk',
        'Removes nesting material that attracts birds, insects, and rodents',
        'Relieves bracket strain from the weight of wet, compacted debris',
      ],
    },
    {
      title: 'How Often Should Residential Gutters Be Cleaned?',
      content:
        'Most West Midlands homes benefit from gutter cleaning at least once a year. Properties under trees, with moss on the roof, or in exposed positions often need two visits — one in spring and one after autumn leaf fall. Our team can advise on the right schedule for your specific property when we visit.',
      bulletPoints: [
        'Once a year — the minimum for most UK homes, usually after autumn',
        'Twice a year — recommended near trees, fields, or wooded areas',
        'After storms — check for blockages from wind-blown debris',
        'Before winter — prevents freeze-thaw blockages and ice dams',
        'New home purchase — recommended to check the condition of your system',
      ],
    },
    {
      title: 'What\'s Included in Every Residential Gutter Clean',
      content:
        'Every residential gutter cleaning appointment follows a consistent process. We do not just scoop surface debris — we clear the full channel, check every outlet, and confirm that rainwater can flow away from your property. If we spot damage, we explain whether repairs are needed without pressure to book extra work.',
      bulletPoints: [
        'Full gutter vacuum clean — leaves, moss, silt, and compacted debris removed',
        'Downpipe clearing and flush testing on every visit',
        'Before and after photo documentation for your records',
        'Condition report with notes on joints, brackets, and alignment',
        'Free advice when we spot problems that may need attention',
        'Same-day or next-day slots available across the West Midlands',
      ],
    },
    {
      title: 'Residential Gutter Cleaning & Related Services',
      content:
        'A clean gutter system works best when the full roofline is maintained. Many homeowners book gutter cleaning alongside roof moss treatment, uPVC restoration, or a free gutter inspection. We cover all aspects of residential roofline care across the West Midlands.',
      image: '/gutter-cleaning-westmidlands.png',
      imagePosition: 'right',
      bulletPoints: [
        'Gutter inspection — check the condition of your full system',
        'Gutter repairs — fix leaking joints, loose brackets, or sagging runs',
        'Roof cleaning — remove moss that drops debris into gutters',
        'UPVC cleaning — restore fascias, soffits, and window frames',
        'Conservatory cleaning — keep your conservatory gutters and roof clear',
        'Hot wash cleaning — exterior surfaces cleaned alongside gutter work',
      ],
    },
  ],
  ctaSection: {
    title: 'Book Your Residential Gutter Clean Today',
    description: 'Get a free, no-obligation quote in 60 seconds. Same-day and next-day residential gutter cleaning available. Call 07421 433910.',
    phone: '07421 433910',
    buttonText: 'Get A Free Quote',
  },
};

export default function ResidentialGutterCleaningPage() {
  return <ServiceDetailPage service={service} />;
}