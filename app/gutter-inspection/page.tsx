import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import type { ServiceDetail } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Free Gutter Inspection | WOW Gutters Ltd',
  description:
    'Free, no-obligation gutter inspection across Birmingham and the West Midlands. Full condition report on channels, downpipes, joints, brackets, and fascias. Honest advice, no pressure. Call 07421 433910.',
  canonicalPath: '/gutter-inspection/',
});

const service: ServiceDetail = {
  id: 'gutter-inspection',
  name: 'Gutter Inspection',
  icon: '🔍',
  heroImage: '/gutter-inspection.png',
  heroTitle: 'Free Gutter Inspection & Condition Report',
  heroDescription:
    'A free, no-obligation gutter inspection that checks the full system — channels, downpipes, joints, brackets, and fascia condition. You get a clear report with honest recommendations. No charge, no commitment, and no pressure to book further work.',
  sections: [
    {
      title: 'Why Book a Gutter Inspection?',
      content:
        'Most gutter problems develop slowly. A joint that drips occasionally, a bracket that is slightly loose, a downpipe that drains a little slower than it should — small issues that become expensive repairs if left unnoticed. A professional gutter inspection catches these problems early and gives you a clear picture of your roofline condition.',
      image: '/gutter-inspection.png',
      imagePosition: 'right',
      bulletPoints: [
        'Catches small problems before they become costly repairs',
        'Gives you a written record of your gutter system condition',
        'Helps you plan maintenance and budget for any work needed',
        'Useful before buying or selling a property',
        'Identifies safety hazards like loose brackets or sagging sections',
        'Free and no-obligation — you decide what to do with the findings',
      ],
    },
    {
      title: 'What We Check During an Inspection',
      content:
        'WOW Gutters Ltd inspects every part of the gutter system that is accessible from ground level or ladder. We look at the condition of the channel, the alignment of the brackets, the seals at joints, and the flow from downpipes. We also check the fascia condition where visible and note any roof-edge issues.',
      image: '/gutter-inspection.png',
      imagePosition: 'left',
      bulletPoints: [
        'Gutter channels — checked for cracks, splits, and standing water',
        'Joints and connectors — inspected for leaks, gaps, or failed seals',
        'Brackets and fixings — checked for looseness, rust, or misalignment',
        'Downpipes — tested for blockages and secure fixings',
        'Fascia condition — inspected where visible behind the gutter',
        'Roof edge — checked for lifted tiles or moss overhang',
      ],
    },
    {
      title: 'Signs You Need a Gutter Inspection',
      content:
        'You do not need to wait for a visible problem to book an inspection. If your property has mature trees nearby, an older gutter system, or a history of blockages, an annual inspection gives you peace of mind and helps you plan ahead.',
      bulletPoints: [
        'You have not had gutters checked in over a year',
        'You noticed water dripping from joints during heavy rain',
        'Gutters overflow occasionally even after cleaning',
        'You are planning to buy or sell a property',
        'You want a professional opinion before spending on repairs',
      ],
    },
    {
      title: 'What\'s Included in Every Gutter Inspection',
      content:
        'Every inspection follows a consistent checklist. We photograph problem areas, test downpipe flow, and provide a clear verbal or written summary of findings. If work is needed we explain the options and give a fixed price — no obligation to proceed.',
      bulletPoints: [
        'Visual inspection of all accessible gutter sections',
        'Downpipe flow test to check for hidden blockages',
        'Photographs of any issues found during the inspection',
        'Clear verbal or written summary of findings',
        'Fixed-price quote for any recommended work',
        'No obligation — you decide whether to proceed',
      ],
    },
    {
      title: 'Gutter Inspection & Related Services',
      content:
        'An inspection often leads to a small repair, a gutter clean, or peace of mind that everything is fine. WOW Gutters Ltd can carry out any recommended work immediately or schedule it for a convenient time.',
      image: '/gutter-cleaning-westmidlands.png',
      imagePosition: 'right',
      bulletPoints: [
        'Gutter cleaning — if blockages are found during inspection',
        'Gutter repairs — fix any leaks, loose brackets, or damage identified',
        'Roof inspection — check tile and ridge condition if needed',
        'UPVC cleaning — clean fascias and soffits if required',
        'Roof cleaning — if moss overhang is contributing to problems',
        'Commercial gutter inspection — retail, offices, and schools',
      ],
    },
  ],
  ctaSection: {
    title: 'Book Your Free Gutter Inspection Today',
    description: 'Free, no-obligation inspection. No call-out charge. Call 07421 433910 or book online.',
    phone: '07421 433910',
    buttonText: 'Get A Free Quote',
  },
};

export default function GutterInspectionPage() {
  return <ServiceDetailPage service={service} />;
}
