import type { Metadata } from 'next';
import { lowValuePageRobots } from '@/lib/lowValuePageSeo';

export const metadata: Metadata = {
  robots: lowValuePageRobots,
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
