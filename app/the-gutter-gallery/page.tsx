'use client';

import Head from 'next/head';
import { colors } from '@/constants/colors';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { Camera, CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function GutterGallery() {
  const features = [
    'Before & after transformations',
    'Residential & commercial projects',
    'Various property types',
    'Professional equipment in action',
    'Quality workmanship showcase',
    'Real customer projects'
  ];

  return (
    <main className="bg-white">
      <Head>
        <title>Gutter Gallery - Before & After Photos | WowGutters West Midlands</title>
        <meta name="description" content="View our gutter cleaning before and after photos. See the quality of our professional gutter services across Birmingham, Coventry & West Midlands." />
        <meta name="keywords" content="gutter cleaning photos, before after gutters, gutter gallery, west midlands gutter work, professional gutter cleaning results" />
        <meta property="og:title" content="Gutter Gallery - Before & After Photos" />
        <meta property="og:description" content="View our professional gutter cleaning before and after photos from across the West Midlands." />
        <link rel="canonical" href="https://wowgutters.pro/the-gutter-gallery" />
      </Head>
      {/* Hero Section */}
      <section className="relative py-20 px-4" style={{ background: colors.primaryGradient }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Camera className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm">Our Work Portfolio</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            The Gutter Gallery
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Browse through our collection of completed projects and see the quality of our work. 
            From residential properties to commercial buildings, we deliver exceptional results every time.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl" style={{ color: colors.primary }}>
              Get Your Free Quote
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

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our <span style={{ color: colors.primary }}>Work</span> Speaks for Itself
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful gutter cleaning and repair projects
            </p>
          </div>

          <GalleryGrid />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" style={{ backgroundColor: colors.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900">
                What You'll <span style={{ color: colors.primary }}>See</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <CheckCircle className="w-6 h-6 mt-0.5 shrink-0" style={{ color: colors.primary }} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Every project in our gallery represents our commitment to excellence. 
                  We take pride in transforming neglected gutters into clean, functional systems 
                  that protect your property for years to come.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: colors.primaryGradient }}>
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-3">
                  Ready to Transform Your Gutters?
                </h3>
                <p className="text-gray-600 text-lg">
                  Join hundreds of satisfied customers who trust us with their gutter cleaning needs
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <Link href="/quote" className="block">
                  <button className="w-full py-4 rounded-full text-white font-bold text-lg transition-all hover:scale-105 shadow-lg" style={{ background: colors.primaryGradient }}>
                    Get Your Free Quote
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

              <div className="pt-8 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="text-sm font-medium">Free, no-obligation quotes</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="text-sm font-medium">Before & after photos included</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="text-sm font-medium">Satisfaction guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/15 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Proven <span style={{ color: colors.primary }}>Results</span>
            </h2>
            <p className="text-xl text-white/80">Numbers that speak to our quality and reliability</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: colors.primary }}>450+</div>
              <div className="text-white/80 font-semibold">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: colors.primary }}>4.9/5</div>
              <div className="text-white/80 font-semibold">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: colors.primary }}>98%</div>
              <div className="text-white/80 font-semibold">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: colors.primary }}>2+</div>
              <div className="text-white/80 font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
