import type { Metadata } from 'next';
import FreeInspectionRedirect from './FreeInspectionRedirect';

const CANONICAL = 'https://wowgutters.co.uk/help/inspect/';

export const metadata: Metadata = {
  title: 'Free Gutter Inspection',
  description:
    'Free roof and gutter inspection — expert assessment, honest advice, no obligation. This page redirects to our main inspection service.',
  alternates: {
    canonical: CANONICAL,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function FreeGutterInspectionAliasPage() {
  return <FreeInspectionRedirect />;
}
