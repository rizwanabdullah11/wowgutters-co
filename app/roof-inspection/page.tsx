import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import type { ServiceDetail } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Free Roof Inspection | WOW Gutters Ltd',
  description:
    'Free, no-obligation roof inspection across Birmingham and the West Midlands. We check tiles, ridges, flashing, moss coverage, and ventilation. Honest advice, no pressure. Call 07421 433910.',
  canonicalPath: '/roof-inspection/',
});

const service: ServiceDetail = {
  id: 'roof-inspection',
  name: 'Roof Inspection',
  icon: '🔍',
  heroImage: '/roof-cleaning.JPG',
  heroTitle: 'Free Roof Inspection & Condition Check',
  heroDescription:
    'A free roof inspection that assesses tile condition, ridge stability, flashing integrity, moss coverage, and ventilation. Clear findings with honest recommendations — no charge and no obligation to book work.',
  sections: [
    {
      title: 'Why Book a Roof Inspection?',
      content:
        'Your roof is your property\'s primary defence against the weather. Small issues — a cracked tile, lifted flashing, moss lifting tiles — can allow water into the roof structure, leading to damp, rot, and expensive internal repairs. A professional roof inspection identifies problems early, before they escalate.',
      image: '/roof-cleaning.JPG',
      imagePosition: 'right',
      bulletPoints: [
        'Identifies cracked, slipped, or missing roof tiles',
        'Checks ridge tiles for movement or deterioration',
        'Inspects flashing around chimneys, vents, and valleys',
        'Assesses moss coverage and its effect on tile positioning',
        'Reviews ventilation and soffit condition at the roof edge',
        'Free and no-obligation — you decide what to do with the findings',
      ],
    },
    {
      title: 'What We Check During a Roof Inspection',
      content:
        'WOW Gutters Ltd carries out a thorough visual inspection of your roof from ground level and, where safe, from a ladder. We look at every aspect of the roof covering and report on condition, estimated remaining life, and any urgent or recommended work.',
      image: '/roof-cleaning.JPG',
      imagePosition: 'left',
      bulletPoints: [
        'Tile condition — cracked, slipped, or missing tiles noted',
        'Ridge tiles — checked for movement, cracks, or mortar deterioration',
        'Flashing — inspected around chimneys, soil vents, and roof valleys',
        'Moss and algae coverage — assessed for lifting risk and retention',
        'Fascia and soffit condition — checked where visible at eaves level',
        'Ventilation — reviewed at eaves and ridge for adequate airflow',
      ],
    },
    {
      title: 'Signs You Need a Roof Inspection',
      content:
        'Like gutters, roofs deteriorate gradually. You might not notice a slipped tile or cracked flashing until water has already caused internal damage. A roof inspection is worthwhile if your roof is over ten years old, has visible moss, or has not been checked by a professional in several years.',
      bulletPoints: [
        'Your roof has not been inspected in over two years',
        'You can see moss growth covering a significant area of tiles',
        'You noticed a slipped or misaligned tile after strong wind',
        'Water stains appeared on ceiling or walls of an upper floor',
        'You are planning to buy or sell a property',
      ],
    },
    {
      title: 'What\'s Included in Every Roof Inspection',
      content:
        'Every roof inspection follows a consistent checklist. We photograph issues, assess the severity, and explain the options. If work is required we provide a fixed price — no obligation to proceed.',
      bulletPoints: [
        'Visual inspection of roof covering from ground and ladder level',
        'Ridge tile, flashing, and valley condition checked',
        'Moss coverage assessed and impact on tile condition noted',
        'Photographs of any significant issues found',
        'Clear verbal or written summary of findings',
        'Fixed-price quote for any recommended work',
      ],
    },
    {
      title: 'Roof Inspection & Related Services',
      content:
        'A roof inspection often identifies maintenance needs that pair with other services. WOW Gutters Ltd can schedule any recommended work for a convenient time.',
      image: '/roof-cleaning.JPG',
      imagePosition: 'right',
      bulletPoints: [
        'Roof cleaning — remove moss and treat tiles after inspection',
        'Gutter cleaning — clear debris that may have accumulated',
        'Gutter repairs — fix issues seen from roof level',
        'Gutter inspection — full condition report on the gutter system',
        'UPVC cleaning — clean fascias and soffits at the same time',
        'Commercial roof inspection — retail units, offices, and schools',
      ],
    },
  ],
  ctaSection: {
    title: 'Book Your Free Roof Inspection Today',
    description: 'Free, no-obligation inspection. No call-out charge. Call 07421 433910 or book online.',
    phone: '07421 433910',
    buttonText: 'Get A Free Quote',
  },
};

export default function RoofInspectionPage() {
  return <ServiceDetailPage service={service} />;
}
