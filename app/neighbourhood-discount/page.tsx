'use client';

import Head from 'next/head';
import { colors } from '@/constants/colors';
import { Users, Home, PoundSterling, CheckCircle, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function NeighbourhoodDiscount() {
  const benefits = [
    'Reduced costs for everyone involved',
    'Convenient scheduling for the whole street',
    'Build stronger community connections',
    'Same-day service for multiple properties',
    'Guaranteed quality across all homes',
    'Flexible payment options available'
  ];

  const discountTiers = [
    { properties: '2-3', discount: '10%', savings: 'Up to £15' },
    { properties: '4-5', discount: '15%', savings: 'Up to £25' },
    { properties: '6+', discount: '20%', savings: 'Up to £40+' }
  ];

  return (
    <main className="bg-white">
      <Head>
        <title>Neighbourhood Discount - Save on Gutter Cleaning | WowGutters</title>
        <meta name="description" content="Save money with our neighbourhood discount! Get your neighbours together and enjoy reduced rates on professional gutter cleaning services across West Midlands." />
        <meta name="keywords" content="neighbourhood discount, gutter cleaning discount, group discount gutters, west midlands gutter deals, save on gutter cleaning" />
        <meta property="og:title" content="Neighbourhood Discount - Save on Gutter Cleaning" />
        <meta property="og:description" content="Save money with our neighbourhood discount on professional gutter cleaning services." />
        <link rel="canonical" href="https://wowgutters.co.uk/neighbourhood-discount" />
      </Head>
      {/* Hero Section */}
      <section className="relative py-20 px-4" style={{ background: colors.primaryGradient }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm">Community Savings</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Neighbourhood <br className="md:hidden" />Discount
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Save more when your neighbours join in! Get exclusive discounts when multiple properties book together.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl" style={{ color: colors.primary }}>
              Get Group Quote
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

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              How It <span style={{ color: colors.primary }}>Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to save money with your neighbours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-black" style={{ background: colors.primaryGradient }}>
                1
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Gather Neighbours</h3>
              <p className="text-gray-600">
                Talk to your neighbours and see who's interested in getting their gutters cleaned
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-black" style={{ background: colors.primaryGradient }}>
                2
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Contact Us</h3>
              <p className="text-gray-600">
                Get in touch with the number of properties interested and we'll provide a group quote
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-black" style={{ background: colors.primaryGradient }}>
                3
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Save Together</h3>
              <p className="text-gray-600">
                We'll schedule a convenient time and everyone saves money on professional service
              </p>
            </div>
          </div>

          {/* Discount Tiers */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-3xl font-black text-center mb-12 text-gray-900">
              Discount <span style={{ color: colors.primary }}>Tiers</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {discountTiers.map((tier, index) => (
                <div 
                  key={index}
                  className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ borderColor: index === 2 ? colors.primary : '#e5e7eb' }}
                >
                  {index === 2 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: colors.primary }}>
                        BEST VALUE
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <Home className="w-12 h-12 mx-auto mb-4" style={{ color: colors.primary }} />
                    <div className="text-4xl font-black mb-2 text-gray-900">{tier.properties}</div>
                    <div className="text-sm text-gray-600 mb-4">Properties</div>
                    <div className="text-5xl font-black mb-2" style={{ color: colors.primary }}>{tier.discount}</div>
                    <div className="text-sm font-semibold text-gray-600">OFF</div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600">Save</div>
                      <div className="text-2xl font-bold text-gray-900">{tier.savings}</div>
                      <div className="text-xs text-gray-500">per property</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900">
                Why Choose <br />Group <span style={{ color: colors.primary }}>Booking?</span>
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <CheckCircle className="w-6 h-6 mt-0.5 shrink-0" style={{ color: colors.primary }} />
                    <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <div className="text-center mb-8">
                <PoundSterling className="w-16 h-16 mx-auto mb-4" style={{ color: colors.primary }} />
                <h3 className="text-3xl font-black text-gray-900 mb-3">
                  Ready to Save?
                </h3>
                <p className="text-gray-600 text-lg">
                  Contact us today to organize your neighbourhood discount
                </p>
              </div>

              <div className="space-y-4">
                <Link href="/quote" className="block">
                  <button className="w-full py-4 rounded-full text-white font-bold text-lg transition-all hover:scale-105 shadow-lg" style={{ background: colors.primaryGradient }}>
                    Get Group Quote
                  </button>
                </Link>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Or call us directly</p>
                  <a 
                    href="tel:07421433910"
                    className="text-2xl font-black hover:underline"
                    style={{ color: colors.primary }}
                  >
                    07421 433910
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="text-sm">Available in all service areas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
