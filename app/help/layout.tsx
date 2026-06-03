import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { SERVICE_AREAS_HUB } from '@/lib/crawlHub';
import { colors } from '@/constants/colors';

export const metadata: Metadata = buildMetadata({
  title: 'Help Centre | Gutter Cleaning FAQs',
  description:
    'Gutter cleaning FAQs, how-to guides and service help from WOW Gutters. Birmingham and West Midlands.',
  canonicalPath: '/help/',
});

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <nav
        aria-label="Site sections"
        className="border-t border-slate-100 bg-slate-50 py-8 px-4 text-center text-sm"
      >
        <Link href="/services/" className="font-semibold text-slate-600 hover:text-[#0f766e] mx-2">
          Services
        </Link>
        <span className="text-slate-300">|</span>
        <Link href={SERVICE_AREAS_HUB} className="font-semibold mx-2" style={{ color: colors.primary }}>
          All service areas
        </Link>
        <span className="text-slate-300">|</span>
        <Link href="/contact/" className="font-semibold text-slate-600 hover:text-[#0f766e] mx-2">
          Contact
        </Link>
      </nav>
    </>
  );
}
