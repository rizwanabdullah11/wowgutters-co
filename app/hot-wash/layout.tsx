import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import LocalCoverageSection from '@/components/seo/LocalCoverageSection';

/** Canonical targets the live service URL (301 from /hot-wash/ via .htaccess). */
export const metadata: Metadata = buildMetadata({
  title: 'Hot Wash Cleaning',
  description:
    'Professional hot wash and purified water cleaning for gutters, fascias and uPVC across Birmingham and the West Midlands. WOW Gutters Ltd.',
  canonicalPath: '/services/hot-wash-cleaning/',
});

export default function HotWashLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <LocalCoverageSection variant="hotwash" />
    </>
  );
}
