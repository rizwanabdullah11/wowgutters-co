'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RepairRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/gutter-repairs/');
  }, [router]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to gutter repairs service...</p>
    </div>
  );
}
