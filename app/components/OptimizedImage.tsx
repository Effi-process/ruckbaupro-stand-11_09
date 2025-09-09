'use client';
import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

// Generate optimized blur placeholder
const generateBlurDataURL = (width = 8, height = 8) => {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f0f0f0;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient)" />
    </svg>`
  ).toString('base64')}`;
};

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  className,
  style,
  placeholder = 'blur',
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageError, setImageError] = useState(false);

  // Generate WebP source if not already WebP
  const webpSrc = src.endsWith('.webp') ? src : src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  const handleError = () => {
    setImageError(true);
    // Fallback to original format if WebP fails
    if (imageSrc.includes('.webp')) {
      setImageSrc(src);
    }
  };

  const optimizedBlurDataURL = blurDataURL || generateBlurDataURL();

  return (
    <picture>
      {/* WebP source for modern browsers */}
      {!imageError && imageSrc !== src && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={className}
        style={style}
        placeholder={placeholder}
        blurDataURL={optimizedBlurDataURL}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        quality={85} // Optimal quality/size balance
        {...props}
      />
    </picture>
  );
}