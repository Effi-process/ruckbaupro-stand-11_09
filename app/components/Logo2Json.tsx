'use client';

import Image from 'next/image';

export default function Logo2Json({ 
  width = 140, 
  height = 56 
}: { 
  width?: number; 
  height?: number; 
}) {
  return (
    <Image
      src="/images/logo-rueckbau-pro-transparent.png"
      alt="RÜCKBAU PRO Logo"
      width={width}
      height={height}
      className="object-contain"
      priority
    />
  );
}