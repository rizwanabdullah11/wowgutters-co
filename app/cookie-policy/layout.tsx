import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { lowValuePageRobots } from '@/lib/lowValuePageSeo';

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Cookie Policy',
    description:
      'WOW Gutters Ltd cookie policy. Learn how we use cookies on wowgutters.co.uk including analytics and essential site functions.',
    canonicalPath: '/cookie-policy/',
  }),
  robots: lowValuePageRobots,
};

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
