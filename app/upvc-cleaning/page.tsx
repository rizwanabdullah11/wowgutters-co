import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import type { ServiceDetail } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Professional uPVC Cleaning | Fascias, Soffits & Window Frames | WOW Gutters Ltd',
  description:
    'uPVC cleaning and restoration across Birmingham. Hot purified water system cleans fascias, soffits, window frames, and conservatories. Streak-free, chemical-free. Call 07421 433910.',
  canonicalPath: '/upvc-cleaning/',
});

const service: ServiceDetail = {
  id: 'upvc-cleaning',
  name: 'UPVC Cleaning',
  icon: '🧼',
  heroImage: '/upvc-cleaning.jpg',
  heroTitle: 'Expert uPVC Cleaning & Restoration',
  heroDescription:
    'Hot purified water cleaning for fascias, soffits, window frames, door frames, and conservatories. Removes green algae, black mould, dirt, and oxidation without harsh chemicals. Streak-free results that restore the bright white finish of your uPVC.',
  sections: [
    {
      title: 'Why Clean uPVC?',
      content:
        'uPVC is low maintenance but not no-maintenance. Over time, algae, mould, road dust, and general grime build up on fascias, soffits, window frames, and doors. This not only looks shabby — the organic growth can etch into the surface if left too long. WOW Gutters Ltd uses a hot purified water system that cleans thoroughly without damaging the uPVC surface.',
      image: '/upvc-cleaning.jpg',
      imagePosition: 'right',
      bulletPoints: [
        'Removes green algae, black mould, and lichen from all uPVC surfaces',
        'Hot purified water lifts dirt without detergents or chemicals',
        'Streak-free finish — no smears, no residue, no runoff onto walls',
        'Safe for all uPVC colours, including white, cream, and grey',
        'Extends the life of fascias, soffits, and window frames',
        'Improves kerb appeal and property presentation instantly',
      ],
    },
    {
      title: 'What We Clean',
      content:
        'WOW Gutters Ltd cleans all external uPVC surfaces as part of a single visit. Our pole-fed water-fed system reaches first and second storey fascias and soffits from ground level, and we hand-clean lower sections for a consistent finish. Conservatories, porches, and garage doors are cleaned to the same standard.',
      image: '/upvc-cleaning.jpg',
      imagePosition: 'left',
      bulletPoints: [
        'Fascias and soffits — full cleaning of front, rear, and side elevations',
        'Window frames and sills — interior and exterior where accessible',
        'Door frames and composite door panels',
        'Conservatory frames, gutters, and roof bars',
        'Porches, canopies, and garage door frames',
        'Cladding and decorative uPVC panels',
      ],
    },
    {
      title: 'Signs Your uPVC Needs Cleaning',
      content:
        'uPVC gradually loses its bright appearance as dirt and biological growth accumulate. Once algae or mould takes hold, it spreads across the surface and can become stubborn to remove. Regular cleaning keeps your uPVC looking like new and prevents long-term surface damage.',
      bulletPoints: [
        'Green or black streaks on fascias and soffits',
        'Mould spots around window frames and sills',
        'Dull, grey appearance on previously white uPVC',
        'Algae growth on north-facing or shaded elevations',
        'Dirt build-up on conservatory frames and roof bars',
      ],
    },
    {
      title: 'What\'s Included in Every uPVC Clean',
      content:
        'Every uPVC cleaning appointment follows the same thorough process. We pre-rinse the surfaces, apply hot purified water through our pole system, hand-clean stubborn areas, and finish with a pure-water rinse that dries streak-free. The result is bright, clean uPVC without chemical runoff or damage to plants and patios.',
      bulletPoints: [
        'Pre-rinse to remove loose dirt and identify stubborn areas',
        'Hot purified water cleaning on all accessible uPVC surfaces',
        'Hand cleaning of stubborn algae and bird mess where needed',
        'Pure-water final rinse for a streak-free finish',
        'All windows, doors, fascias, and soffits cleaned',
        'Before and after results photographed on request',
      ],
    },
    {
      title: 'uPVC Cleaning & Related Services',
      content:
        'A full exterior clean makes a noticeable difference to your property. Many customers combine uPVC cleaning with gutter cleaning, roof moss treatment, or conservatory cleaning for a complete roofline refresh.',
      image: '/upvc-cleaning.jpg',
      imagePosition: 'right',
      bulletPoints: [
        'Gutter cleaning — clear debris before cleaning fascias',
        'Gutter repairs — fix any issues spotted during cleaning',
        'Roof cleaning — moss removal from roof tiles and ridges',
        'Conservatory cleaning — frames, gutters, and glass panels',
        'Hot wash cleaning — deeper clean for stubborn exteriors',
        'Gutter inspection — full check of the roofline condition',
      ],
    },
  ],
  ctaSection: {
    title: 'Book Your uPVC Clean Today',
    description: 'Free quotes in 60 seconds. Same-week appointments available. Call 07421 433910 or book online.',
    phone: '07421 433910',
    buttonText: 'Get A Free Quote',
  },
};

export default function UpvcCleaningPage() {
  return <ServiceDetailPage service={service} />;
}
