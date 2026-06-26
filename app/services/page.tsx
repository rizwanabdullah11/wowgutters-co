import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import TopPageAreaLinks from '@/components/seo/TopPageAreaLinks';
import { servicesData } from '@/constants/servicesData';
import { colors } from '@/constants/colors';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Our Services | WOW Gutters Ltd',
  description:
    'Gutter cleaning, repairs, roof cleaning, uPVC and fascia care, inspections, and commercial maintenance across Birmingham and the West Midlands. Browse all WOW Gutters Ltd services.',
  canonicalPath: '/services/',
});

const SERVICE_CARD_IMAGES: Record<string, string> = {
  'gutter-cleaning': '/gutter-cleaning.jpeg',
  'gutter-repairs': '/gutter-repair.png',
  'upvc-cleaning': '/upvc-cleaning.jpg',
  'roof-cleaning': '/roof-cleaning.JPG',
  'gutter-inspection': '/gutter-inspection.png',
  'roof-inspection': '/roof-cleaning.JPG',
  'conservatory': '/gutter-cleaning.jpeg',
  'water-butt': '/gutter-cleaning.jpeg',
  'commercial-gutter-cleaning': '/gutter-cleaning-westmidlands.png',
  'commercial-roof-cleaning': '/roof-cleaning.JPG',
  'gutter-installation': '/gutter-installation.png',
};

const RESIDENTIAL_IDS = new Set([
  'gutter-cleaning',
  'gutter-repairs',
  'upvc-cleaning',
  'roof-cleaning',
  'gutter-inspection',
  'roof-inspection',
  'conservatory',
  'water-butt',
  'gutter-installation',
]);

function serviceImage(id: string, fallback: string) {
  return SERVICE_CARD_IMAGES[id] ?? fallback;
}

function ServiceCard({
  id,
  name,
  description,
  image,
}: {
  id: string;
  name: string;
  description: string;
  image: string;
}) {
  return (
    <Link
      href={`/services/${id}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all hover:-translate-y-1 hover:border-[#19C58B]/40 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0f172a]/80 to-transparent"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#0f766e] transition-colors">
          {name}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1 mb-4">
          {description}
        </p>
        <span
          className="inline-flex items-center gap-1.5 text-sm font-bold"
          style={{ color: colors.primary }}
        >
          View service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export default function Services() {
  const residential = servicesData.filter((s) => RESIDENTIAL_IDS.has(s.id));
  const commercial = servicesData.filter((s) => !RESIDENTIAL_IDS.has(s.id));

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/gutter-cleaning.jpeg')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.75) 50%, rgba(15,23,42,0.92) 100%)',
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" style={{ color: colors.primary }} />
            <span className="text-sm font-bold text-white tracking-wide">
              WOW Gutters Ltd • Birmingham &amp; West Midlands
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed mb-8">
            Professional gutter cleaning, repairs, roof care, and exterior maintenance — one trusted local team
            for homes and businesses across Birmingham and the West Midlands.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-bold text-white shadow-lg transition-opacity hover:opacity-95"
              style={{ background: colors.primaryGradient }}
            >
              Get a FREE quote
            </Link>
            <a
              href="tel:07421433910"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              07421 433910
            </a>
          </div>
        </div>
        <div className="relative z-10 leading-[0]">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="block w-full h-10" aria-hidden>
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Need local pricing and postcodes? See our dedicated{' '}
            <Link
              href="/gutter-cleaning-birmingham/"
              className="font-semibold underline underline-offset-2"
              style={{ color: colors.primary }}
            >
              gutter cleaning in Birmingham
            </Link>{' '}
            page, or choose a service below to learn what is included and book online.
          </p>
        </div>
      </section>

      {/* Residential services */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Home &amp; residential</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">
            Gutter cleaning, repairs, roof care, and exterior maintenance for houses, flats, and rental properties.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {residential.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                name={service.name}
                description={service.heroDescription}
                image={serviceImage(service.id, service.heroImage)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial services */}
      {commercial.length > 0 && (
        <section className="pb-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 pt-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Commercial</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">
              Planned gutter and roof maintenance for offices, retail units, schools, and industrial sites.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercial.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.heroDescription}
                  image={serviceImage(service.id, service.heroImage)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <TopPageAreaLinks intro="Gutter cleaning, repairs, and roof care booked across these Birmingham and West Midlands locations." />

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: colors.primaryGradient }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Ready to book?</h2>
          <p className="text-white/90 text-base sm:text-lg mb-8">
            Free quotes in 60 seconds. Same-day and next-day appointments where available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-[#0f172a] px-8 py-3.5 text-base font-bold text-white shadow-lg transition-colors hover:bg-[#1e293b]"
            >
              Request a free quote
            </Link>
            <a
              href="tel:07421433910"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call 07421 433910
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
