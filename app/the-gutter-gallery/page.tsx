'use client';

import { useEffect, useRef } from 'react';
import { colors } from '@/constants/colors';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { Camera, CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function GutterGallery() {
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
            <Camera className="w-5 h-5" style={{ color: colors.primary }} />
            <span className="text-white font-semibold text-sm">Our Work Portfolio</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            The <span style={{ color: colors.primary }}>Gutter Gallery</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Browse through our collection of completed projects and see the quality of our work. 
            From residential properties to commercial buildings, we deliver exceptional results every time.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-[#19C58B] hover:bg-[#14B27D] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl">
              Get Your Free Quote
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

      {/* Technical Standards & Equipment Section */}
      <section className="py-20 px-4 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">Precision Workmanship</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-2">
              How We Achieve <span style={{ color: colors.primary }}>Flawless Results</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Every photo in our gallery represents a real property across Birmingham and the West Midlands. Here is how our certified technicians tackle even the most stubborn debris, moss, and blockages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6 text-emerald-700 font-black text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">High-Reach Vacuum Suction</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Our commercial-grade wet/dry vacuum system reaches up to 4 storeys from ground level, extracting compacted silt, weeds, and fallen leaves without resting ladders against fragile gutter brackets or tiles. Learn more about our specialized <Link href="/services/gutter-cleaning/" className="text-emerald-700 font-semibold hover:underline">gutter cleaning service</Link>.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-6 text-teal-700 font-black text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Downpipe Unblocking &amp; Flow Test</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Clearing horizontal gutter runs is only half the job. We dislodge underground downpipe swan-necks and execute high-volume water flow tests to guarantee water runs freely. If damaged unions are found, our team provides instant <Link href="/services/gutter-repairs/" className="text-emerald-700 font-semibold hover:underline">gutter repairs</Link> and seal replacements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-6 text-cyan-700 font-black text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Purified Hot-Wash Finish</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                For complete curb appeal transformations, we combine gutter vacuuming with purified <Link href="/services/upvc-cleaning/" className="text-emerald-700 font-semibold hover:underline">exterior UPVC cleaning</Link> and low-pressure <Link href="/services/roof-cleaning/" className="text-emerald-700 font-semibold hover:underline">roof moss removal</Link> to prevent immediate re-soiling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0b1634] via-[#0f2347] to-[#0b1f3f] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 -bottom-12 h-72 w-[68%] -rotate-6 rounded-[40%] bg-[#16c784]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-[45%] rotate-6 rounded-[35%] bg-[#2dd4bf]/15 blur-[100px]" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">
            Have Questions About Your <span style={{ color: colors.primary }}>Roofline Drainage?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our local technicians are ready to assess your gutters from the ground with precision camera inspection and powerful vacuum extraction.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              href="/quote"
              className="px-8 py-4 rounded-full font-bold text-white shadow-xl transition hover:scale-105"
              style={{ background: colors.primaryGradient }}
            >
              Get A Fast Free Quote
            </Link>
            <Link
              href="/reviews"
              className="px-8 py-4 rounded-full font-bold text-slate-800 bg-white hover:bg-slate-100 transition shadow-md"
            >
              Read Customer Reviews
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
