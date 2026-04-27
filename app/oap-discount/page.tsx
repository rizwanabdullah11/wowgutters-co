'use client';

import Head from 'next/head';
import { colors } from '@/constants/colors';
import { Heart, Shield, CheckCircle, Phone, Gift, Users } from 'lucide-react';
import Link from 'next/link';

export default function OAPDiscount() {
  const benefits = [
    'Discounted rates on all gutter cleaning services',
    'Priority scheduling options',
    'Flexible payment terms available',
    'Free safety inspection included',
    'No hidden fees or charges',
    'Friendly, respectful service'
  ];

  return (
    <main className="bg-white">
      <Head>
        <title>OAP Discount - Senior Citizen Gutter Cleaning Savings | WowGutters</title>
        <meta name="description" content="Special discounts for senior citizens on professional gutter cleaning services. Affordable, reliable gutter maintenance for OAPs across West Midlands." />
        <meta name="keywords" content="oap discount, senior citizen discount, pensioner gutter cleaning, elderly discount gutters, west midlands oap services" />
        <meta property="og:title" content="OAP Discount - Senior Citizen Gutter Cleaning" />
        <meta property="og:description" content="Special discounts for senior citizens on professional gutter cleaning services." />
        <link rel="canonical" href="https://wowgutters.co.uk/oap-discount" />
      </Head>
      {/* Hero Section */}
      <section className="relative py-20 px-4" style={{ background: colors.primaryGradient }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm">Senior Citizen Discount</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            OAP Discount
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            We value our senior community members and offer exclusive discounts for pensioners
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl" style={{ color: colors.primary }}>
              Claim Your Discount
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

      {/* Main Content */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Info Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4" style={{ borderColor: colors.primary }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${colors.primary}20` }}>
                    <Users className="w-6 h-6" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Who Qualifies?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      This discount is available to all senior citizens receiving their state pension. 
                      We're proud to support our older community members with affordable, reliable service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4" style={{ borderColor: colors.accent }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${colors.accent}20` }}>
                    <Gift className="w-6 h-6" style={{ color: colors.accent }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">What's Included?</h3>
                    <div className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: colors.primary }} />
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4" style={{ borderColor: colors.cta }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${colors.cta}20` }}>
                    <Shield className="w-6 h-6" style={{ color: colors.cta }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">How to Claim</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Simply mention this discount when booking and provide proof of eligibility. 
                      It's that easy! Our friendly team will take care of the rest.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - CTA Card */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: colors.primaryGradient }}>
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-3">
                    Special Discount for Seniors
                  </h3>
                  <div className="inline-block px-6 py-3 rounded-full text-white font-bold text-2xl mb-4" style={{ background: colors.primaryGradient }}>
                    Save Up to 15%
                  </div>
                  <p className="text-gray-600 text-lg">
                    On all gutter cleaning and maintenance services
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <Link href="/quote" className="block">
                    <button className="w-full py-4 rounded-full text-white font-bold text-lg transition-all hover:scale-105 shadow-lg" style={{ background: colors.primaryGradient }}>
                      Get Your Free Quote
                    </button>
                  </Link>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Or speak to our team</p>
                    <a 
                      href="tel:07421433910"
                      className="text-2xl font-black hover:underline"
                      style={{ color: colors.primary }}
                    >
                      07421 433910
                    </a>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                    <span className="text-sm font-medium">No obligation quote</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                    <span className="text-sm font-medium">Friendly, professional service</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                    <span className="text-sm font-medium">Fully insured & certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100">
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              Trusted by <span style={{ color: colors.primary }}>Thousands</span> of Seniors
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We understand the importance of reliable, trustworthy service. That's why we're committed 
              to providing exceptional care and value to our senior customers.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-black mb-2" style={{ color: colors.primary }}>5,000+</div>
                <div className="text-gray-600 font-semibold">Senior Customers</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2" style={{ color: colors.primary }}>4.9/5</div>
                <div className="text-gray-600 font-semibold">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2" style={{ color: colors.primary }}>2+</div>
                <div className="text-gray-600 font-semibold">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
