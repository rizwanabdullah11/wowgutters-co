'use client';

import { colors } from '@/constants/colors';
import PricingCard from '@/components/pricing/PricingCard';
import { PoundSterling, CheckCircle, Phone, TrendingDown, Shield } from 'lucide-react';
import Link from 'next/link';

export default function GutterCleaningPrices() {
  const handleGetQuote = () => {
    const opener = (window as Window & { wowOpenCtaDialog?: () => void }).wowOpenCtaDialog;
    if (typeof opener === 'function') opener();
    else window.location.href = '/quote/embed/';
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4" style={{ background: colors.primaryGradient }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <PoundSterling className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm">Transparent Pricing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Gutter Cleaning Prices
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Transparent pricing for professional gutter cleaning services. No hidden fees, just honest quotes.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl" style={{ color: colors.primary }}>
              Get Free Quote
            </Link>
            <a href="tel:07421433910" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-white hover:text-[#19C58B]">
              <Phone className="w-5 h-5" /> Call Us
            </a>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Choose Your <span style={{ color: colors.primary }}>Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional gutter cleaning packages tailored to your needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <PricingCard
              title="Basic Service"
              price="£45"
              priceSubtext="Starting from"
              color="blue"
              features={[
                'Standard gutter cleaning',
                'Debris removal',
                'Basic inspection',
                'Up to 3 bedrooms',
                'Ground floor access'
              ]}
              onButtonClick={handleGetQuote}
            />

            <PricingCard
              title="Premium Service"
              price="£75"
              priceSubtext="Starting from"
              color="green"
              popular={true}
              features={[
                'Complete gutter cleaning',
                'Downpipe clearing',
                'Full inspection report',
                'Before/after photos',
                'All property sizes',
                'Up to 2 stories'
              ]}
              onButtonClick={handleGetQuote}
            />

            <PricingCard
              title="Commercial"
              price="Custom"
              priceSubtext="Contact for quote"
              color="purple"
              features={[
                'Tailored solutions',
                'Regular maintenance plans',
                'Priority service',
                'Dedicated account manager',
                'Multi-property discounts',
                'Flexible scheduling'
              ]}
              buttonText="Contact Us"
              onButtonClick={handleGetQuote}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Additional <span style={{ color: colors.primary }}>Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for all your gutter needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" style={{ borderColor: colors.cta }}>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Gutter Repairs</h3>
              <p className="text-3xl font-black mb-2" style={{ color: colors.primary }}>From £30</p>
              <p className="text-gray-600 mb-4">Minor repairs and replacements</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Leak repairs
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Joint sealing
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Bracket replacement
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" style={{ borderColor: colors.cta }}>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Conservatory Cleaning</h3>
              <p className="text-3xl font-black mb-2" style={{ color: colors.primary }}>From £50</p>
              <p className="text-gray-600 mb-4">Roof and gutter cleaning</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Roof cleaning
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Gutter clearance
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Frame cleaning
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" style={{ borderColor: colors.cta }}>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Fascia & Soffit Cleaning</h3>
              <p className="text-3xl font-black mb-2" style={{ color: colors.primary }}>From £40</p>
              <p className="text-gray-600 mb-4">Complete exterior cleaning</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Deep cleaning
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Stain removal
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Protective treatment
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" style={{ borderColor: colors.cta }}>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Gutter Guard Installation</h3>
              <p className="text-3xl font-black mb-2" style={{ color: colors.primary }}>From £100</p>
              <p className="text-gray-600 mb-4">Prevent future blockages</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Professional installation
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Quality materials
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  Long-term protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Price */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <h3 className="text-4xl font-black text-center mb-12 text-gray-900">
              Factors Affecting <span style={{ color: colors.primary }}>Price</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white font-black text-xl" style={{ background: colors.primaryGradient }}>
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Property Size & Height</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Larger properties and multi-story buildings require more time and specialized equipment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white font-black text-xl" style={{ background: colors.primaryGradient }}>
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Gutter Length & Accessibility</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Hard-to-reach areas may require specialized equipment and additional safety measures
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white font-black text-xl" style={{ background: colors.primaryGradient }}>
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Level of Blockage</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Heavily blocked gutters require additional cleaning time and may need repairs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white font-black text-xl" style={{ background: colors.primaryGradient }}>
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Additional Services</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Repairs, gutter guards, or extra cleaning services will affect the final price
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/15 blur-[100px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <TrendingDown className="w-16 h-16 mx-auto mb-6" style={{ color: colors.primary }} />
          <h3 className="text-4xl md:text-5xl font-black mb-4">
            Special Offers <span style={{ color: colors.primary }}>Available</span>
          </h3>
          <p className="text-xl text-white/80 mb-8">
            Ask about our OAP and Neighbourhood Discounts to save even more
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="/quote" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl text-white" style={{ background: colors.primaryGradient }}>
              Get Free Quote
            </Link>
            <Link href="/oap-discount" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-white hover:text-[#19C58B]">
              View Discounts
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/80">
            <Shield className="w-5 h-5" />
            <span>6-month guarantee on all qualifying repairs</span>
          </div>
        </div>
      </section>
    </main>
  );
}
