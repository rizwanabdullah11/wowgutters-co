'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CleanRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/roof-cleaning/');
  }, [router]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to roof cleaning service...</p>
    </div>
  );
}
