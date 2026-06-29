import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { lowValuePageRobots } from '@/lib/lowValuePageSeo';

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Privacy Policy',
    description:
      'WOW Gutters Ltd privacy policy. How we collect, use and protect your personal data when you book gutter cleaning in Birmingham and the West Midlands.',
    canonicalPath: '/privacy-policy/',
  }),
  robots: lowValuePageRobots,
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
