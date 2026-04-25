'use client';

import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FreeInspectionPage() {
  return (
    <main className="bg-gray-50">
      <section 
        className="relative py-16 md:py-20"
        style={{
          backgroundImage: 'url("/gutter-inspection-hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: colors.white }}>
              Professional Gutter Survey
            </p>
            <div className="h-1 w-40 mx-auto mb-4" style={{ backgroundColor: colors.accent }} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: colors.white }}>
              Free Gutter Inspection
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto" style={{ color: colors.white }}>
              Wondering if your gutters are blocked? Book our completely free, no-obligation gutter inspection using high-reaching pole cameras to see exactly what's up there.
            </p>
            <Link href="/quote">
              <Button 
                className="px-8 py-4 text-lg font-semibold"
                style={{ backgroundColor: colors.white, color: colors.primary }}
              >
                Book Your Free Inspection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Content */}
      <section className="py-16" style={{ backgroundColor: colors.white }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.text }}>
                Why get a Free Inspection?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                    <div className="text-4xl mb-4">📸</div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary }}>See the Evidence</h3>
                    <p style={{ color: colors.textLight }}>We provide photo and video evidence of the condition of your gutters before proceeding with any work.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                    <div className="text-4xl mb-4">🪜</div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary }}>Safety First</h3>
                    <p style={{ color: colors.textLight }}>No need for you to climb dangerous ladders. Our high-reach carbon fiber poles check up to 4 stories safely from the ground.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                    <div className="text-4xl mb-4">💷</div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary }}>Zero Obligation</h3>
                    <p style={{ color: colors.textLight }}>If your gutters are clean, we will tell you! There is absolutely zero obligation to purchase cleaning services after the check.</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
