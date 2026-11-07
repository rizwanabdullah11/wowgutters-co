import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { colors } from '@/constants/colors';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { AreaServiceQuoteCard } from '@/components/areas/AreaServiceBlock';
import { buildMetadata } from '@/lib/seo';
import { LEICS_DISTRICTS, LEICS_TOWNS } from '@/lib/leicestershireTowns';
import { leicsHasPage, leicsPath } from '@/lib/leicestershirePages';

export const metadata: Metadata = buildMetadata({
  absoluteTitle: 'Gutter & Roof Cleaning Leicestershire | WOW Gutters Ltd',
  description:
    'Gutter cleaning from £100, repairs from £30 and roof cleaning from £500 across Leicester, Loughborough, Hinckley, Coalville and 55 more Leicestershire towns. Call 07421 433910.',
  canonicalPath: '/leicestershire/',
});

const HUB_FAQS = [
  {
    question: 'Do you cover all of Leicestershire?',
    answer:
      'We cover Leicester and 58 towns and villages across Charnwood, Blaby, Harborough, Hinckley and Bosworth, North West Leicestershire, Oadby and Wigston and Melton. If your village is not listed, message us your postcode and we will tell you straight away.',
  },
  {
    question: 'Are your Leicestershire prices the same as in the West Midlands?',
    answer:
      'Yes. Gutter cleaning is £100 for a 2-bed home and £110 for a 3-bed home, with our Premium Service from £200. Roof cleaning starts from £500. There is no call-out fee.',
  },
  {
    question: 'How do you clean gutters without ladders?',
    answer:
      'We use a high-reach vacuum on carbon-fibre poles from the ground, with a camera to see inside the gutter. Every downpipe is flushed and you get before & after photos.',
  },
  {
    question: 'Do you pressure wash roofs?',
    answer:
      'No. We remove moss by hand, soft-wash the tiles at low pressure and apply a biocide to slow regrowth. The gutters are cleared at the end of every roof clean.',
  },
];

export default function LeicestershirePage() {
  const main = LEICS_TOWNS.filter((t) => t.main);
  const url = 'https://wowgutters.co.uk/leicestershire/';

  return (
    <>
      <LocalBusinessSchema
        city="Leicestershire"
        url={url}
        priceFrom={100}
        priceTo={200}
        nearbyAreas={main.map((t) => t.name)}
        geo={{ latitude: 52.6369, longitude: -1.1398 }}
        postcodes={['LE1', 'LE2', 'LE3', 'LE4', 'LE5', 'LE7', 'LE8', 'LE9', 'LE10', 'LE11', 'LE12', 'LE13', 'LE16', 'LE17', 'LE18', 'LE65', 'LE67']}
        faqs={HUB_FAQS}
      />
      <main className="bg-white">
        <section className="bg-gradient-to-b from-[#0b1634] to-[#0f2347] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-[#34e3b6] mb-3">Now covering Leicestershire</p>
            <h1 className="text-4xl md:text-5xl font-black mb-5">Gutter &amp; Roof Cleaning in Leicestershire</h1>
            <p className="text-lg text-[#dbe7ff] leading-relaxed mb-8">
              Our Leicestershire team cleans gutters from the ground with a high-reach vacuum and removes roof moss
              without pressure washing — from Leicester and Loughborough to Hinckley, Coalville, Market Harborough and
              the villages in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/quote/" className="px-8 py-4 rounded-full font-bold text-white" style={{ background: colors.primaryGradient }}>
                Get a free quote
              </Link>
              <a href="tel:07421433910" className="px-8 py-4 rounded-full font-bold border-2 border-white/40 inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" aria-hidden /> 07421 433910
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 border-b border-slate-100">
          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-3">Gutter cleaning prices</h2>
              <ul className="space-y-2 text-slate-700">
                <li><strong>£100</strong> — 2-bed home</li>
                <li><strong>£110</strong> — 3-bed home</li>
                <li><strong>From £200</strong> — Premium Service for larger homes</li>
                <li><strong>From £30</strong> — gutter repairs (15 main towns)</li>
                <li><strong>£50</strong> — conservatory gutters · <strong>£90</strong> — fascia &amp; soffit clean</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-3">Roof cleaning prices</h2>
              <ul className="space-y-2 text-slate-700">
                <li><strong>From £500</strong> — moss removal, soft-wash and biocide</li>
                <li>Gutters cleared after every roof clean</li>
                <li>Commercial roofs and gutters — custom quote</li>
                <li>No call-out fee anywhere in Leicestershire</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 text-center">Towns and villages we cover</h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">
              Choose your town for local gutter cleaning, roof cleaning or gutter repair details, prices and the nearby villages we visit.
            </p>
            <div className="space-y-10">
              {LEICS_DISTRICTS.map((district) => {
                const towns = LEICS_TOWNS.filter((t) => t.district === district);
                if (!towns.length) return null;
                return (
                  <div key={district}>
                    <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5" style={{ color: colors.primary }} aria-hidden /> {district}
                    </h3>
                    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {towns.map((t) => (
                        <li key={t.slug} className="rounded-xl border border-slate-200 bg-white p-4">
                          <p className="font-bold text-slate-900">
                            {t.name} <span className="text-slate-500 font-normal text-sm">{t.postcodes.join(', ')}</span>
                          </p>
                          <p className="mt-1 text-sm">
                            <Link href={leicsPath('gutter', t.slug)} className="font-semibold underline" style={{ color: colors.primary }}>
                              Gutter cleaning
                            </Link>
                            {' · '}
                            <Link href={leicsPath('roof', t.slug)} className="font-semibold underline" style={{ color: colors.primary }}>
                              Roof cleaning
                            </Link>
                            {leicsHasPage('repair', t) ? (
                              <>
                                {' · '}
                                <Link href={leicsPath('repair', t.slug)} className="font-semibold underline" style={{ color: colors.primary }}>
                                  Gutter repairs
                                </Link>
                              </>
                            ) : null}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Leicestershire questions</h2>
            <div className="space-y-4">
              {HUB_FAQS.map((f) => (
                <div key={f.question} className="rounded-2xl bg-white border border-slate-200 p-6">
                  <h3 className="font-black text-slate-900 mb-2">{f.question}</h3>
                  <p className="text-slate-600">{f.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <AreaServiceQuoteCard />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
