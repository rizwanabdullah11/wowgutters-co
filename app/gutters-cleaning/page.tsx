'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GuttersCleaningRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/help/unblock/');
  }, [router]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to gutter cleaning service...</p>
    </div>
  );
}
