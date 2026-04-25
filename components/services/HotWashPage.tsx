'use client';

import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HotWashPage() {
  return (
    <main className="bg-gray-50">
      <section 
        className="relative py-16 md:py-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: colors.white }}>
              Deep Cleaning Technology
            </p>
            <div className="h-1 w-40 mx-auto mb-4" style={{ backgroundColor: colors.accent }} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: colors.white }}>
              Hot Wash Cleaning
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto" style={{ color: colors.white }}>
              When regular cold water pressure washing isn't enough, our industrial Hot Wash systems melt through stubborn dirt, grease, and biological growth.
            </p>
            <Link href="/quote">
              <Button 
                className="px-8 py-4 text-lg font-semibold"
                style={{ backgroundColor: colors.white, color: colors.primary }}
              >
                Get a Hot Wash Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16" style={{ backgroundColor: colors.white }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.text }}>
                 Hot Water Pressure Cleaning Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm border-l-4" style={{ borderColor: colors.primary}}>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: colors.primary }}>Melts Tough Stains</h3>
                    <p style={{ color: colors.textLight }}>Hot water effectively dissolves oil and grease. Just as you wouldn't wash greasy pans in cold water, hot water is infinitely superior for tough outdoor stains.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm border-l-4" style={{ borderColor: colors.primary}}>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: colors.primary }}>Kills Bacteria & Spores</h3>
                    <p style={{ color: colors.textLight }}>Temperatures exceeding 90°C efficiently sanitize surfaces, destroying algae, lichen, and moss spores, slowing down regrowth drastically.</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
