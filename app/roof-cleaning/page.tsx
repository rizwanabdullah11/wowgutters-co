import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import type { ServiceDetail } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Roof Cleaning West Midlands & Birmingham | From £500 | WOW Gutters Ltd',
  description:
    'Roof cleaning and moss removal across the West Midlands and Birmingham from £500. Soft-wash method, biocide treatment, gutters cleared after, real before & after photos. Call 07421 433910.',
  canonicalPath: '/roof-cleaning/',
});

const service: ServiceDetail = {
  id: 'roof-cleaning',
  name: 'Roof Cleaning',
  icon: '🏠',
  heroImage: '/roof-cleaning.JPG',
  heroTitle: 'Roof Cleaning West Midlands & Birmingham',
  heroDescription:
    'WOW Gutters Ltd uses a soft-wash roof cleaning system that removes moss, algae, lichen, and dirt without high-pressure damage. Biocide treatment prevents regrowth, extending the life of your tiles and keeping gutters clearer for longer.',
  sections: [
    {
      title: 'Why Remove Moss from Your Roof?',
      content:
        'Moss on roof tiles is more than a cosmetic issue. Moss roots lift tiles and allow water to penetrate the roof structure. Moss holds moisture against the tile surface, accelerating frost damage and weathering. And moss debris drops into gutters, causing blockages and overflow. Professional roof cleaning removes the moss and treats the surface to prevent rapid regrowth.',
      image: '/dudley-roof-cleaning-before.webp',
      imageAlt: 'Real WOW Gutters job: roof in Dudley before cleaning, with moss and algae on the tiles',
      imagePosition: 'right',
      bulletPoints: [
        'Moss roots can lift and loosen roof tiles over time',
        'Moisture trapped by moss accelerates tile weathering and cracking',
        'Moss debris blocks gutters and downpipes, causing overflow',
        'Algae and lichen growth makes roofs look neglected and dirty',
        'Biocide treatment prevents rapid regrowth after cleaning',
        'Soft-wash method avoids the damage caused by pressure washing',
      ],
    },
    {
      title: 'Our Roof Cleaning Process',
      content:
        'WOW Gutters Ltd follows a careful process to clean your roof safely and effectively. We use a soft-wash system that applies cleaning solution at low pressure — enough to kill moss and algae but not enough to force water under tiles. After treatment the moss dies off naturally and is gently removed.',
      image: '/dudley-roof-cleaning-after.webp',
      imageAlt: 'Real WOW Gutters job: the same Dudley roof after moss removal and soft-wash cleaning',
      imagePosition: 'left',
      bulletPoints: [
        'Low-pressure biocide application — no risk of driving water under tiles',
        'Moss, algae, and lichen killed at the root for thorough removal',
        'Dead debris gently cleared from the roof surface',
        'Biocide treatment applied to slow regrowth for months',
        'Gutters cleaned after roof treatment to remove fallen debris',
        'Before and after photos provided on every roof cleaning job',
      ],
    },
    {
      title: 'Signs Your Roof Needs Cleaning',
      content:
        'Moss growth becomes visible long before it causes serious problems. If you can see moss patches from ground level, the root systems are already established under the tiles. Roof cleaning at this stage is straightforward — waiting until tiles are loose or lifted means more expensive repairs.',
      bulletPoints: [
        'Visible moss patches on roof slopes, especially north-facing',
        'Moss debris accumulating in gutters after wind or rain',
        'Black algae streaks running down tiles from the ridge',
        'Lichen growth on tiles, ridges, and around chimney stacks',
        'Green staining on walls below the roof line from runoff',
      ],
    },
    {
      title: 'What\'s Included in Every Roof Clean',
      content:
        'Every roof cleaning appointment includes a pre-treatment inspection, soft-wash application, moss removal, biocide treatment, and gutter clearance afterwards. We photograph the roof before and after so you can see the difference.',
      bulletPoints: [
        'Pre-treatment inspection to assess moss coverage and tile condition',
        'Soft-wash biocide treatment applied across all affected areas',
        'Moss, algae, and lichen killed and gently cleared from tiles',
        'Biocide application to slow regrowth',
        'Gutter clearance after roof work to remove fallen debris',
        'Before and after photos on every job',
      ],
    },
    {
      title: 'Roof Cleaning Prices – What Affects the Cost',
      content:
        'Roof cleaning starts from £500. Every roof is different, so we give you a fixed price before any work starts — no call-out fee and no surprises on the day. These are the things that change the price:',
      bulletPoints: [
        'Roof size and number of slopes — a bungalow is quicker than a large detached house',
        'How thick the moss is — light algae or years of heavy moss build-up',
        'Height and access — two-storey, three-storey, or tight access at the rear',
        'Valleys, dormers, chimneys and extensions that need extra hand work',
        'Whether you add a gutter clean, fascia & soffit clean (£90) or conservatory clean (from £50)',
        'Commercial roofs (warehouses, schools, offices) are quoted individually',
      ],
    },
    {
      title: 'Roof Types We Clean',
      content:
        'Different tiles need different handling. Our controlled soft-wash method is safe for the common roof types across the West Midlands, and we never use high-pressure washing on tiles.',
      bulletPoints: [
        'Concrete interlocking tiles — the most common roof on 1930s–80s semis and estates',
        'Clay tiles — older and period homes, cleaned gently to protect the surface',
        'Slate — Victorian terraces and villas, cleaned without lifting or cracking slates',
        'Ridges, hips and valleys — moss cleared from the joints where it builds up most',
        'Conservatory roofs — glass and polycarbonate cleaned as an add-on',
      ],
    },
    {
      title: 'Roof Cleaning & Related Services',
      content:
        'Roof cleaning pairs naturally with gutter cleaning, uPVC restoration, and roof inspection. A clean roof means less debris falling into gutters, and the roofline as a whole looks well-maintained and professional.',
      image: '/roof-cleaning-before-after.jpeg',
      imageAlt: 'Roof cleaning before and after – WOW Gutters Ltd',
      imagePosition: 'right',
      bulletPoints: [
        'Gutter cleaning — clear moss debris that falls after treatment',
        'Gutter repairs — fix any issues spotted during the visit',
        'UPVC cleaning — clean fascias and soffits alongside roof work',
        'Roof inspection — check tile condition and identify any damage',
        'Gutter inspection — full overview of the roofline condition',
        'Commercial roof cleaning — flats, offices, and schools',
      ],
    },
  ],
  ctaSection: {
    title: 'Book Your Roof Clean Today',
    description: 'Free quotes in 60 seconds. Same-week roof cleaning available. Call 07421 433910 or book online.',
    phone: '07421 433910',
    buttonText: 'Get A Free Quote',
  },
};

export default function RoofCleaningPage() {
  return <ServiceDetailPage service={service} />;
}
