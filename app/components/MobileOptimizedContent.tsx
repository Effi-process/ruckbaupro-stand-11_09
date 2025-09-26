'use client';
import React from 'react';

interface MobileOptimizedContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function MobileOptimizedContent({
  children,
  className = ''
}: MobileOptimizedContentProps) {
  return (
    <div className={`mobile-optimized-content ${className}`}>
      <style jsx global>{`
        .mobile-optimized-content {
          /* Mobile-first responsive text and spacing */
        }

        /* Mobile optimizations */
        @media (max-width: 1023px) {
          .mobile-optimized-content h1 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
            margin-bottom: 1rem !important;
          }

          .mobile-optimized-content h2 {
            font-size: 1.5rem !important;
            line-height: 1.3 !important;
            margin-top: 2rem !important;
            margin-bottom: 0.75rem !important;
          }

          .mobile-optimized-content h3 {
            font-size: 1.25rem !important;
            line-height: 1.3 !important;
            margin-top: 1.5rem !important;
            margin-bottom: 0.5rem !important;
          }

          .mobile-optimized-content p {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
            margin-bottom: 0.75rem !important;
          }

          .mobile-optimized-content .text-lg {
            font-size: 0.95rem !important;
          }

          .mobile-optimized-content .text-xl {
            font-size: 1.1rem !important;
          }

          /* Reduce excessive padding/margins on mobile */
          .mobile-optimized-content .py-16 {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }

          .mobile-optimized-content .py-20 {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }

          .mobile-optimized-content .mb-8 {
            margin-bottom: 1rem !important;
          }

          .mobile-optimized-content .mb-6 {
            margin-bottom: 0.75rem !important;
          }

          .mobile-optimized-content .mt-12 {
            margin-top: 2rem !important;
          }

          .mobile-optimized-content .mt-16 {
            margin-top: 2.5rem !important;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 768px) and (max-width: 1023px) {
          .mobile-optimized-content h1 {
            font-size: 2.25rem !important;
          }

          .mobile-optimized-content h2 {
            font-size: 1.75rem !important;
          }

          .mobile-optimized-content p {
            font-size: 1rem !important;
          }
        }

        /* Desktop - maintain original sizing */
        @media (min-width: 1024px) {
          .mobile-optimized-content {
            /* Original styles preserved on desktop */
          }
        }
      `}</style>
      {children}
    </div>
  );
}

// Utility component for better mobile paragraph handling
interface MobileParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileParagraph({ children, className = '' }: MobileParagraphProps) {
  return (
    <p className={`text-base lg:text-lg leading-relaxed mb-4 lg:mb-6 text-white/80 ${className}`}>
      {children}
    </p>
  );
}

// Utility component for better mobile heading handling
interface MobileHeadingProps {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

export function MobileHeading({ level, children, className = '' }: MobileHeadingProps) {
  const baseClasses = "font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white";

  const sizeClasses = {
    1: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-4 lg:mb-6",
    2: "text-xl sm:text-2xl lg:text-3xl mb-3 lg:mb-8 mt-6 lg:mt-12",
    3: "text-lg sm:text-xl lg:text-2xl mb-2 lg:mb-4 mt-4 lg:mt-8",
    4: "text-base sm:text-lg lg:text-xl mb-2 lg:mb-3 mt-3 lg:mt-6"
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${baseClasses} ${sizeClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
}

// Utility component for mobile-optimized sections
interface MobileSectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'small' | 'medium' | 'large';
}

export function MobileSection({
  children,
  className = '',
  padding = 'medium'
}: MobileSectionProps) {
  const paddingClasses = {
    small: 'py-6 lg:py-12',
    medium: 'py-8 lg:py-16',
    large: 'py-10 lg:py-20'
  };

  return (
    <section className={`${paddingClasses[padding]} ${className}`}>
      <div className="max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}