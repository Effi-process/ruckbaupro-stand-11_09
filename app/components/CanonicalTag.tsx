'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function CanonicalTag() {
  const pathname = usePathname();

  useEffect(() => {
    // Remove any existing canonical tags
    const existing = document.querySelector('link[rel="canonical"]');
    if (existing) {
      existing.remove();
    }

    // Add new canonical tag with current URL
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = `https://www.rueckbaupro.de${pathname}`;
    document.head.appendChild(canonical);

    return () => {
      // Cleanup on unmount
      const current = document.querySelector('link[rel="canonical"]');
      if (current && current.getAttribute('href') === `https://www.rueckbaupro.de${pathname}`) {
        current.remove();
      }
    };
  }, [pathname]);

  return null;
}
