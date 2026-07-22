import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';
import type { ServiceDetail } from '@/constants/servicesData';
import { buildMetadata } from '@/lib/seo';
import { FOOTER_HUB_SLUGS } from '@/lib/crawlHub';
import { areaLinkLabel } from '@/lib/crawlHub';
import { areaPath } from '@/lib/areaSlugs';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Professional Gutter Cleaning Birmingham & West Midlands | WOW Gutters Ltd',
  description:
    'Gutter cleaning by WOW Gutters Ltd. Industrial vacuum system, no ladders, before and after photos, downpipe testing included. From £50. Same-day appointments available. Call 07421 433910.',
  canonicalPath: '/gutter-cleaning/',
});

const service: ServiceDetail = {
  id: 'gutter-cleaning',
  name: 'Gutter Cleaning',
  icon: '🌧️',
  heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920',
  heroTitle: 'Gutter Cleaning Done Right',
  heroDescription:
    'Professional gutter cleaning using a ground-level vacuum system. No ladders against your walls, no mess left behind, and no damage to fascias or brickwork. Before and after photos sent on every visit, including downpipe testing as standard.',
  sections: [
    {
      title: 'How Our Gutter Cleaning Works',
      content:
        'WOW Gutters Ltd uses a commercial-grade vacuum system that reaches up to four storeys from ground level. We remove leaves, moss, silt, and compacted debris from the full gutter channel, clear every downpipe outlet, and flush each downpipe with water to confirm free flow. The entire job is photographed and the images are sent to you the same day.',
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
      title: 'What Happens If Gutters Are Not Cleaned',
      content:
        'Blocked gutters force rainwater over the channel edge instead of into the downpipe. That overflow runs down walls, soaks into fascia boards, and pools around foundations. Over time this leads to damp inside the property, mould growth, and costly structural repairs. Regular gutter cleaning is the simplest way to avoid this damage.',
      image: '/files/12_gutter_overflow_water_damage.jpg',
      imagePosition: 'left',
      bulletPoints: [
        'Damp patches and water staining on external walls',
        'Rotting fascia and soffit boards behind the gutter line',
        'Mould and condensation inside rooms near affected walls',
        'Pooling water around foundations causing subsidence risk',
        'Nesting material attracting birds, insects, and rodents',
        'Bracket strain from the weight of wet, compacted debris',
      ],
    },
    {
      title: 'How Often Should Gutters Be Cleaned?',
      content:
        'Most Birmingham homes benefit from gutter cleaning at least once a year. Properties under trees, with moss on the roof, or in exposed positions often need two visits — one in spring and one after autumn leaf fall. Commercial properties with flat roofs and multiple downpipes may need quarterly maintenance.',
      bulletPoints: [
        'Once a year — the minimum for most UK homes, usually after autumn',
        'Twice a year — recommended near trees, fields, or wooded areas',
        'After storms — check for blockages from wind-blown debris',
        'Before winter — prevents freeze-thaw blockages and ice dams',
        'Commercial properties — quarterly cleaning for planned maintenance',
      ],
    },
    {
      title: 'What\'s Included in Every Gutter Clean',
      content:
        'Every gutter cleaning appointment follows a consistent process. We do not just scoop surface debris — we clear the full channel, check every outlet, and confirm that rainwater can flow away from your property. If we spot damage, we explain whether repairs are needed without pressure to book extra work.',
      bulletPoints: [
        'Full gutter vacuum clean — leaves, moss, silt, and compacted debris removed',
        'Downpipe clearing and flush testing on every visit',
        'Before and after photo documentation for your records',
        'Condition report with notes on joints, brackets, and alignment',
        'Free advice when we spot problems that may need attention',
        'Same-day or next-day slots available',
      ],
    },
    {
      title: 'Gutter Cleaning & Related Services',
      content:
        'A clean gutter system works best when the full roofline is maintained. Many customers book gutter cleaning alongside roof moss treatment, uPVC restoration, or a free gutter inspection. WOW Gutters Ltd covers all aspects of roofline care.',
      image: '/gutter-cleaning-westmidlands.png',
      imagePosition: 'right',
      bulletPoints: [
        'Gutter inspection — check the condition of your full system',
        'Gutter repairs — fix leaking joints, loose brackets, or sagging runs',
        'Roof cleaning — remove moss that drops debris into gutters',
        'UPVC cleaning — restore fascias, soffits, and window frames',
        'Commercial gutter cleaning — retail units, offices, and schools',
        'Hot wash cleaning — exterior surfaces cleaned alongside gutter work',
      ],
    },
  ],
  ctaSection: {
    title: 'Book Your Gutter Clean Today',
    description: 'Get a free, no-obligation quote in 60 seconds. Same-day and next-day gutter cleaning available. Call 07421 433910.',
    phone: '07421 433910',
    buttonText: 'Get A Free Quote',
  },
};

function ServiceAreasList() {
  const cities = FOOTER_HUB_SLUGS
    .filter((slug) => slug !== 'birmingham')
    .map((slug) => ({
      slug,
      href: areaPath(slug),
      label: areaLinkLabel(slug),
    }));
  return (
    <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          Gutter Cleaning Across the West Midlands
        </h2>
        <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
          We cover every major town and city in the West Midlands. Click your area below for local prices, availability, and booking.
        </p>
        <ul className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={city.href}
                className="inline-block px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-[#19C58B] hover:text-[#0f766e] transition-colors shadow-sm"
              >
                {city.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-slate-500 text-sm mt-8">
          Also covering{' '}
          <Link href="/gutter-cleaning-birmingham/" className="font-bold underline text-slate-700 hover:text-[#0f766e]">
            Gutter Cleaning Birmingham
          </Link>{' '}
          and surrounding suburbs.
        </p>
      </div>
    </section>
  );
}

export default function GutterCleaningPage() {
  return (
    <>
      <ServiceDetailPage service={service} />
      <ServiceAreasList />
    </>
  );
}
