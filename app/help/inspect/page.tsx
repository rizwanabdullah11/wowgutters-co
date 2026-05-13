'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InspectRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/inspection/');
  }, [router]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to inspection service...</p>
    </div>
  );
}
