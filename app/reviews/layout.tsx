import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Reviews | 4.9★ Rating',
  description: 'Read 2,696+ verified Google reviews. Rated 4.9/5 stars. Birmingham & West Midlands gutter cleaning. See what customers say.',
  alternates: {
    canonical: 'https://wowgutters.co.uk/reviews/',
  },
  openGraph: {
    url: 'https://wowgutters.co.uk/reviews/',
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
