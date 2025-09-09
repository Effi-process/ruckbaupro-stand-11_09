'use client';
import { useState, useEffect } from 'react';
import Icon from './Icon';

interface HeroVideoSectionProps {
  videoSrc: string;
  title: React.ReactNode;
  subtitle?: string;
  ctaButtons?: React.ReactNode;
  overlay?: boolean;
}

export default function HeroVideoSection({ 
  videoSrc, 
  title, 
  subtitle, 
  ctaButtons,
  overlay = true 
}: HeroVideoSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[800px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        )}
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-custom min-h-[800px] flex items-center">
        <div className={`max-w-4xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            {title}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
              {subtitle}
            </p>
          )}
          
          {/* CTA Buttons */}
          {ctaButtons && (
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaButtons}
            </div>
          )}
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Icon name="chevron-down" size={32} className="text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
}