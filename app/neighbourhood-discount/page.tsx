'use client';

import { useEffect, useRef } from 'react';
import { colors } from '@/constants/colors';
import { Users, Home, PoundSterling, CheckCircle, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function NeighbourhoodDiscount() {
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
            <Users className="w-5 h-5" style={{ color: colors.primary }} />
            <span className="text-white font-semibold text-sm">Community Savings</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Neighbourhood <span style={{ color: colors.primary }}>Discount</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Save more when your neighbours join in! Get exclusive discounts when multiple properties book together.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-[#19C58B] hover:bg-[#14B27D] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl">
              Get Group Quote
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
      {/* Detailed Street Coordination Guide */}
      <section className="py-20 px-4 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">Smart Community Savings</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-2">
              How Street-By-Street <span style={{ color: colors.primary }}>Coordination Works</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              When multiple neighbours on the same street or cul-de-sac book together, we pass travel and logistical savings directly back to you. Every property receives our full commercial-standard vacuum clean and condition report.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Terraced &amp; Semi-Detached Streets</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Shared gutter runs on semi-detached and terraced homes frequently overflow when one neighbour clears debris but the adjoining run remains clogged. Group bookings ensure continuous downpipe drainage from end to end.
              </p>
              <Link href="/services/gutter-cleaning/" className="text-emerald-700 font-bold text-sm hover:underline">
                Explore residential gutter cleaning →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Add-On Exterior Treatments</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Combine group gutter vacuuming with <Link href="/services/upvc-cleaning/" className="text-emerald-700 font-semibold hover:underline">fascia &amp; soffit washing</Link>, <Link href="/services/conservatory/" className="text-emerald-700 font-semibold hover:underline">conservatory roof cleaning</Link>, or low-pressure <Link href="/services/roof-cleaning/" className="text-emerald-700 font-semibold hover:underline">roof moss removal</Link> for additional street-wide discounts.
              </p>
              <Link href="/gutter-cleaning-prices/" className="text-emerald-700 font-bold text-sm hover:underline">
                View fixed pricing packages →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Before &amp; After Photo Reports</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Each participating homeowner receives individual photographic proof of cleared channels and flow-tested downpipes. If leaks or cracks are spotted, our technicians provide on-site <Link href="/services/gutter-repairs/" className="text-emerald-700 font-semibold hover:underline">minor gutter repairs</Link>.
              </p>
              <Link href="/the-gutter-gallery/" className="text-emerald-700 font-bold text-sm hover:underline">
                See real project gallery photos →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
