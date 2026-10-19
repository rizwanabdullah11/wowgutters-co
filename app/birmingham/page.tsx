import { normalizeMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = normalizeMetadata({
  title: 'Redirecting...',
});

export default function BirminghamPage() {
  redirect('/gutter-cleaning-birmingham/');
}

