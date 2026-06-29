import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { lowValuePageRobots } from '@/lib/lowValuePageSeo';

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Terms & Conditions',
    description:
      'Terms and conditions for WOW Gutters Ltd gutter cleaning, repairs, roof cleaning and inspection services across Birmingham and the West Midlands.',
    canonicalPath: '/terms-and-conditions/',
  }),
  robots: lowValuePageRobots,
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
