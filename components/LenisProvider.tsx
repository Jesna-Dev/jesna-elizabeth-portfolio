'use me';
'use client';

import React, { useEffect, useState } from 'react';
import ReactLenis from 'lenis/react';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
