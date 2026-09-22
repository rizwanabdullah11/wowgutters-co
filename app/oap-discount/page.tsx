'use client';

import { useEffect, useRef } from 'react';
import { colors } from '@/constants/colors';
import { Heart, Shield, CheckCircle, Phone, Gift, Users } from 'lucide-react';
import Link from 'next/link';

export default function OAPDiscount() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

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
      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-4 min-h-[460px] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/gutter-cleaning.jpeg"
            className="w-full h-full object-cover"
          >
            <source src="/gutter-final-video.mp4" type="video/mp4" />
            <source src="/gutter-cleaning-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5" style={{ color: colors.primary }} />
            <span className="text-white font-semibold text-sm">Senior Citizen Discount</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            OAP <span style={{ color: colors.primary }}>Discount</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            We value our senior community members and offer exclusive discounts for pensioners.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-[#19C58B] hover:bg-[#14B27D] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl">
              Claim Your Discount
            </Link>
            <a href="tel:07421433910" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-white hover:text-slate-900">
              <Phone className="w-5 h-5 text-emerald-400" /> Call Us: 07421 433910
            </a>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 line-height-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 block">
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
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
                    <span className="text-sm font-medium">Same Day Booking & certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Genuine Trust & Senior Safety Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 text-center border border-gray-100">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Safe, Reliable &amp; <span style={{ color: colors.primary }}>Ladder-Free Service</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We understand the importance of trustworthy, considerate service for senior homeowners and their families. Our ground-level high-reach vacuum technology clears high-elevation gutters without placing heavy ladders against brickwork or roof tiles.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-slate-900 text-lg mb-1">Ground-Level Safety</div>
                <p className="text-xs text-slate-600">No ladders against walls or fragile gutters</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-slate-900 text-lg mb-1">Photo Verification</div>
                <p className="text-xs text-slate-600">Clear before &amp; after photographic proof</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-slate-900 text-lg mb-1">£5M Fully Insured</div>
                <p className="text-xs text-slate-600">Complete public liability insurance</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-slate-900 text-lg mb-1">Same-Day Bookings</div>
                <p className="text-xs text-slate-600">Fast quotes and transparent fixed prices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Maintenance Advice & Services Section */}
      <section className="py-20 px-4 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">Home Protection</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-2">
              Essential Roofline Services for <span style={{ color: colors.primary }}>Senior Homeowners</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Blocked gutters are the leading cause of exterior damp, mould, and masonry erosion. Family members can book directly on behalf of senior relatives across the West Midlands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Residential Gutter Clearance</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Full removal of pine needles, leaves, and roofing silt from gutters and downpipe outlets. Check our <Link href="/services/gutter-cleaning/" className="text-emerald-700 font-semibold hover:underline">residential gutter cleaning</Link> for full details.
              </p>
              <Link href="/gutter-cleaning-calculator/" className="text-emerald-700 font-bold text-sm hover:underline">
                Calculate estimated pricing →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Downpipe Testing &amp; Repairs</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Prevent rainwater overflows before winter freezes cause cracked pipes. If leaks are identified, our technicians carry replacement gaskets for quick <Link href="/services/gutter-repairs/" className="text-emerald-700 font-semibold hover:underline">gutter repairs</Link>.
              </p>
              <Link href="/the-gutter-gallery/" className="text-emerald-700 font-bold text-sm hover:underline">
                View before &amp; after project gallery →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">UPVC &amp; Conservatory Wash</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Keep fascias, soffits, and glass bright with low-pressure <Link href="/services/upvc-cleaning/" className="text-emerald-700 font-semibold hover:underline">UPVC wash</Link> and specialist <Link href="/services/conservatory/" className="text-emerald-700 font-semibold hover:underline">conservatory roof cleaning</Link>.
              </p>
              <Link href="/gutter-cleaning-prices/" className="text-emerald-700 font-bold text-sm hover:underline">
                Review fixed price packages →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
