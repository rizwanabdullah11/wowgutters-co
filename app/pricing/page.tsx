import Link from 'next/link';
import { colors } from '@/constants/colors';
import LocalCoverageSection from '@/components/seo/LocalCoverageSection';
import { GUTTER_PRICING, GUTTER_PRICING_PACKAGES, formatGbp } from '@/constants/gutterPricing';
import { CheckCircle, Phone, Shield, Sparkles, Home, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const packages = GUTTER_PRICING_PACKAGES.map((pkg) => ({
    name: pkg.title,
    price: formatGbp(pkg.price),
    features: [...pkg.features],
    popular: 'popular' in pkg && pkg.popular === true,
  }));

  const addons = [
    {
      name: 'Conservatory Gutter Cleaning',
      price: formatGbp(GUTTER_PRICING.conservatoryGutterCleaning),
      description: 'Specialist conservatory roofline and gutter clearance',
    },
    {
      name: 'Fascia & Soffit Cleaning',
      price: formatGbp(GUTTER_PRICING.fasciaAndSoffit),
      description: 'Deep exterior wash and stain removal',
    },
    {
      name: 'Gutter Repairs & Sealing',
      price: 'From £30',
      description: 'Joint sealing, union repairs, and bracket fixes',
    },
    {
      name: 'Gutter Installation',
      price: formatGbp(GUTTER_PRICING.installation),
      description: 'Full supply and installation of new uPVC gutters',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Brand Hero Header */}
      <section className="bg-slate-900 text-white py-14 sm:py-18 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Upfront &amp; Transparent Rates
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight">
            Simple, Transparent <span style={{ color: colors.primary }}>Pricing</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Fixed prices with no hidden charges across Birmingham and the West Midlands. Every service includes downpipe flow testing and photo proof.
          </p>
        </div>
      </section>

      {/* Main Gutter Cleaning Pricing Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-700">
            Vacuum Gutter Clearance
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mt-1">
            Standard Gutter Cleaning Packages
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Ground-based high-reach industrial vacuum cleaning up to 4 storeys. No scaffolding or ladder damage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                pkg.popular
                  ? 'border-emerald-500 ring-2 ring-emerald-500/30 sm:transform sm:-translate-y-1'
                  : 'border-gray-100 hover:shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div
                  className="text-white text-center py-2 font-bold text-xs sm:text-sm uppercase tracking-wider"
                  style={{ background: colors.cta }}
                >
                  Most Popular
                </div>
              )}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">{pkg.price}</span>
                  <span className="text-xs sm:text-sm text-gray-500 font-medium">/ fixed rate</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm sm:text-base text-gray-600">
                      <CheckCircle
                        className="w-5 h-5 mr-2.5 shrink-0"
                        style={{ color: colors.primary }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-white transition-all shadow-md hover:shadow-lg hover:scale-[1.01]"
                  style={{
                    background: pkg.popular ? colors.primaryGradient : '#0f172a',
                  }}
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Roof Cleaning Section */}
        <div className="mt-14 sm:mt-20">
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6 sm:p-10 lg:p-14 border border-emerald-500/20 shadow-2xl overflow-hidden">
            {/* Ambient emerald blur accent */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px]" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px]" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Roof Cleaning Details */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Full Roof Restoration &amp; Protection</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
                  Professional Roof Cleaning &amp; Moss Removal
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Roof moss lifts tiles, traps moisture against surfaces, and constantly sheds into gutter channels. Our gentle soft-wash system treats moss, algae, and lichen at the root without damaging high-pressure water jets — protecting tile coatings and keeping gutters clear for years.
                </p>

                {/* 6 Key Benefits */}
                <div className="grid sm:grid-cols-2 gap-3.5 mb-8 text-xs sm:text-sm text-gray-200">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                    <span>Low-pressure scrape &amp; soft wash (no tile damage)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                    <span>Deep biocide treatment halts moss &amp; algae regrowth</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                    <span>Complete gutter clearance included on every roof job</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                    <span>Full downpipe flow test &amp; outlet clearing</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                    <span>Before &amp; after photographic condition report</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                    <span>Fully insured (£5M public liability) technicians</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>No pressure washing · Safe on clay, concrete &amp; slate tiles</span>
                </div>
              </div>

              {/* Right Column: Pricing & Call to Action Box */}
              <div className="lg:col-span-5">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8 text-center flex flex-col items-center">
                  <span className="text-xs sm:text-sm uppercase tracking-wider text-emerald-400 font-bold mb-1">
                    Roof Cleaning Packages
                  </span>
                  <div className="text-xs text-gray-300 mb-3">Starting price for residential roofs</div>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-gray-300">From</span>
                    <span className="text-4xl sm:text-5xl font-black text-white">
                      {formatGbp(GUTTER_PRICING.roofCleaningStarting)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 max-w-xs mb-6">
                    Bespoke fixed quote tailored to roof size, pitch, access, and moss accumulation. Free assessment.
                  </p>

                  <div className="w-full space-y-3">
                    <Link
                      href="/quote"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-white transition-all shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02]"
                      style={{ background: colors.primaryGradient }}
                    >
                      <span>Request Free Roof Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="tel:07421433910"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>Call 07421 433910</span>
                    </a>
                  </div>

                  <Link
                    href="/roof-cleaning/"
                    className="mt-4 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                  >
                    View detailed roof cleaning service guide →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Grid */}
        <div className="mt-14 sm:mt-20 bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-10 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-700">
              Complete Exterior Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Additional Services &amp; Add-ons
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Combine additional services with your gutter cleaning for complete roofline care and maximum savings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-gray-100 bg-gray-50/70 p-6 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-4">{item.description}</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black" style={{ color: colors.primary }}>
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              Need a bespoke package or commercial multi-site quote?{' '}
              <Link href="/contact" className="font-bold underline text-gray-800 hover:text-emerald-700">
                Contact our technical team
              </Link>{' '}
              or use our{' '}
              <Link href="/gutter-cleaning-calculator/" className="font-bold underline text-gray-800 hover:text-emerald-700">
                instant price calculator
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <LocalCoverageSection variant="pricing" />
    </div>
  );
}
