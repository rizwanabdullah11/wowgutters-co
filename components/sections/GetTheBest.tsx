import { colors } from '@/constants/colors';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const guarantees = [
  'Price match guarantee',
  'Professional service',
  'Fully insured team',
  'No hidden costs',
];

export default function GetTheBest() {
  return (
    <section className="py-20" style={{ backgroundColor: colors.lightGray }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: colors.primary }}>
            Best Value Promise
          </span>
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-4">

          {/* Left — Image */}
          <div className="lg:w-1/2 w-full">
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ borderTop: `3px solid ${colors.primary}` }}
            >
              <div className="relative">
                <img
                  src="/get-info.png"
                  alt="Professional Gutter Cleaning Service"
                  className="w-full object-cover"
                  style={{ maxHeight: '480px' }}
                />
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full shadow-lg text-white text-sm font-bold" style={{ backgroundColor: colors.cta }}>
                  Professional Service
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:w-1/2 w-full">
            <div
              className="bg-white rounded-2xl p-8 shadow-sm"
              style={{ borderTop: `3px solid #F97316` }}
            >
              <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: '#F97316' }}>
                GET THE BEST FOR LESS
              </p>
              <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: colors.text }}>
                Get The Best For Less!
              </h2>
              <p className="text-base italic mb-5" style={{ color: colors.textLight }}>
                Our professional service is cheaper than you might think.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: colors.textLight }}>
                Our price guarantee ensures you get the best value. Find a comparable quote for less? We'll beat it — guaranteed.
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                {guarantees.map((g, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.primary }} />
                    <span className="text-sm font-medium" style={{ color: colors.text }}>{g}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quote">
                  <button
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
                    style={{ background: colors.primaryGradient }}
                  >
                    Get A Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border-2 transition-opacity hover:opacity-80"
                    style={{ borderColor: colors.primary, color: colors.primary, backgroundColor: 'transparent' }}
                  >
                    Learn More
                  </button>
                </Link>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-sm font-medium" style={{ color: colors.textLight }}>
                  Trusted by 450+ satisfied customers across the region
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
