import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import type { ServiceDetail } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Professional Gutter Repairs | Leaks, Sagging & Broken Gutters Fixed | WOW Gutters Ltd',
  description:
    'Expert gutter repairs across Birmingham and the West Midlands. Leaking joints, sagging runs, cracked sections, broken brackets — diagnosed and fixed with a 6-month guarantee. Call 07421 433910.',
  canonicalPath: '/gutter-repairs/',
});

const service: ServiceDetail = {
  id: 'gutter-repairs',
  name: 'Gutter Repairs',
  icon: '🔧',
  heroImage: '/gutter-repair-before.png',
  heroTitle: 'Gutter Repairs You Can Rely On',
  heroDescription:
    'WOW Gutters Ltd repairs all types of gutter problems — leaking joints, sagging sections, loose brackets, cracked downpipes, and poor fall. Every repair is flow-tested before we leave, and qualifying work carries a 6-month guarantee.',
  sections: [
    {
      title: 'Why Choose WOW Gutters Ltd for Gutter Repairs?',
      content:
        'A leaking gutter rarely fixes itself. Water that misses the downpipe ends up against your walls, saturating brickwork, rotting fascias, and finding its way into your home. WOW Gutters Ltd treats every repair as a permanent solution — not a temporary patch. Our technicians carry a full stock of seals, brackets, connectors, and pipe sections so most repairs are completed in a single visit.',
      image: '/gutter-repair-after.jpeg',
      imagePosition: 'right',
      bulletPoints: [
        'Leaks diagnosed at the source — not just silicone over the symptom',
        'Quality uPVC seals, brackets, and connectors used on every repair',
        '6-month guarantee on qualifying repair work for peace of mind',
        'Water flow test after every repair to confirm proper drainage',
        'Fully insured with £10 million public liability cover',
        'Honest advice if replacement is more cost-effective than repair',
      ],
    },
    {
      title: 'What We Fix',
      content:
        'Gutters take a lot of punishment — sun, frost, wind, and the weight of wet debris. Over time joints open up, brackets snap, and sections sag. WOW Gutters Ltd covers the full range of repairs, from a single leaking union to a full gutter run re-hung with new brackets.',
      image: '/gutter-repair-before.png',
      imagePosition: 'left',
      bulletPoints: [
        'Leaking joints — corner pieces, unions, and stop-ends resealed',
        'Sagging gutter runs — brackets adjusted or replaced to restore fall',
        'Cracked or split sections — cut out and replaced with matching profile',
        'Loose or missing fascia brackets — re-secured with correct fixings',
        'Damaged downpipes — shoes, swan necks, and connectors replaced',
        'Poor fall corrected so water flows freely to the outlet',
      ],
    },
    {
      title: 'Signs Your Gutters Need Repair',
      content:
        'Most gutter damage starts small. A joint that weeps in heavy rain becomes a steady leak after winter frost. Catching problems early saves you from damp walls, mould growth, and rotten fascia boards. If you are unsure, our free gutter inspection will tell you exactly what is needed — no pressure, no sales pitch.',
      bulletPoints: [
        'Water dripping from joints or corners long after rain stops',
        'Gutter overflowing in light rain despite appearing clean',
      ],
    },
    {
      title: 'What\'s Included in Every Repair Visit',
      content:
        'Every repair appointment follows a consistent process. We inspect the full gutter system, carry out the repair, test that water flows correctly, and explain what was done. If we spot additional issues during the visit we tell you before doing any extra work.',
      bulletPoints: [
        'Full inspection of the gutter run before any repair work starts',
        'Permanent repair using quality materials — not temporary patches',
        'Water flow test after every repair to confirm it is working',
        'Before and after photos of the repaired section',
        'Written explanation of what was found and what was fixed',
        'Follow-up advice on preventing future gutter damage',
      ],
    },
    {
      title: 'Gutter Repairs & Related Services',
      content:
        'A repair visit is a good opportunity to check the rest of your roofline. Many customers combine repairs with a gutter clean, roof moss removal, or a full exterior uPVC clean. WOW Gutters Ltd can handle everything in one visit.',
      image: '/gutter-cleaning-westmidlands.png',
      imagePosition: 'right',
      bulletPoints: [
        'Gutter cleaning — remove debris that may be hiding further damage',
        'Roof cleaning — moss and algae that trap moisture against the roof edge',
        'UPVC cleaning — restore fascias, soffits, and frames to bright white',
        'Gutter inspection — full condition report with honest recommendations',
        'Gutter installation — when repair is no longer the right option',
        'Commercial gutter repairs — shops, offices, schools, and warehouses',
      ],
    },
  ],
  ctaSection: {
    title: 'Book Your Gutter Repair Today',
    description: 'Free quotes in 60 seconds. Same-day repairs where availability allows. Call 07421 433910 or book online.',
    phone: '07421 433910',
    buttonText: 'Get A Free Quote',
  },
};

export default function GutterRepairsPage() {
  return <ServiceDetailPage service={service} />;
}
