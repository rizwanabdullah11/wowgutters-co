'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UnblockRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/gutter-cleaning/');
  }, [router]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to gutter cleaning service...</p>
    </div>
  );
}
