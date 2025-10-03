'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  src: string;
  poster: string;
  className?: string;
}

export default function VideoBackground({ src, poster, className = '' }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(() => {
        // Autoplay failed, video will show poster
      });
    };

    video.addEventListener('canplay', handleCanPlay);
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={`absolute -top-20 left-0 right-0 bottom-0 w-full h-[calc(100%+5rem)] object-cover ${className}`}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      preload="metadata"
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}