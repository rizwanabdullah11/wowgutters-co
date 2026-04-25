'use client';

import { colors } from '@/constants/colors';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CommercialGutterPage() {
  return (
    <main className="bg-gray-50">
      <section 
        className="relative py-16 md:py-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888062594-8ceb2b3da3dc?w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: colors.white }}>
              Industrial & Commercial Solutions
            </p>
            <div className="h-1 w-40 mx-auto mb-4" style={{ backgroundColor: colors.accent }} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: colors.white }}>
              Commercial Gutter Cleaning
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto" style={{ color: colors.white }}>
              Professional commercial gutter cleaning using highly powered vacuum systems, perfect for warehouses, schools, retail units and office buildings up to 4 stories.
            </p>
            <Link href="/quote">
              <Button 
                className="px-8 py-4 text-lg font-semibold"
                style={{ backgroundColor: colors.white, color: colors.primary }}
              >
                Request Commercial Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
