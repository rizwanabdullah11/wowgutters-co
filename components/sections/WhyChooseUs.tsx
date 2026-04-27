import { colors } from '@/constants/colors';
import { CheckCircle, Award, Shield, Wrench } from 'lucide-react';
import Link from 'next/link';

const ACCENTS = ['#3B82F6', '#F97316', '#19C58B', '#8B5CF6'];

const reasons = [
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: 'Local Technicians',
    subtitle: 'BIRMINGHAM COVERAGE',
    description:
      'Our team covers Birmingham and nearby towns with practical knowledge of local homes and rooflines.',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Honest Service',
    subtitle: 'CLEAR ADVICE',
    description:
      'We explain what your gutters need before work starts, with straightforward pricing and no pressure.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Fully Insured',
    subtitle: 'PEACE OF MIND',
    description:
      'Your home or business is protected by an insured team using safe, professional working methods.',
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: 'Premium Equipment',
    subtitle: 'PROFESSIONAL GRADE',
    description:
      'We use high-reach professional equipment to clean safely, efficiently and thoroughly from ground level.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20" style={{ backgroundColor: colors.lightGray }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: colors.primary }}>
            Why Choose WOW Gutters
          </span>
          <span className="h-px w-10" style={{ backgroundColor: colors.primary }} />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4" style={{ color: colors.text }}>
          Why Choose Our Gutter Cleaning Service?
        </h2>
        <p className="text-center text-base sm:text-lg mb-12 max-w-2xl mx-auto" style={{ color: colors.textLight }}>
          Built around careful cleaning, safe access, reliable drainage and helpful local support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ borderTop: `3px solid ${ACCENTS[i]}` }}
            >
              <div className="p-6 flex flex-col flex-1 items-center text-center">
                <div className="mb-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center border-2 bg-white"
                    style={{ borderColor: ACCENTS[i], color: ACCENTS[i] }}
                  >
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-lg font-black mb-1" style={{ color: colors.text }}>
                  {reason.title}
                </h3>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: ACCENTS[i] }}>
                  {reason.subtitle}
                </p>
                <p className="text-sm leading-relaxed flex-1 max-w-[260px]" style={{ color: colors.textLight }}>
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base sm:text-lg transition-opacity duration-200 hover:opacity-90 shadow-lg"
            style={{ background: colors.primaryGradient }}
          >
            Get Your Free Gutter Cleaning Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
