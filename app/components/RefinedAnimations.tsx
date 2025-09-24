'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'fadeInUp' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = ''
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className = ''
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const scrolled = window.pageYOffset;
      const rect = ref.current.getBoundingClientRect();
      const yPos = -(scrolled - rect.top) * speed;

      ref.current.style.transform = `translateY(${yPos}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`parallax-element ${className}`}>
      {children}
    </div>
  );
}

interface RevealTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
}

export function RevealText({
  text,
  className = '',
  staggerDelay = 50
}: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chars = entry.target.querySelectorAll('.char');
            chars.forEach((char, index) => {
              setTimeout(() => {
                (char as HTMLElement).style.opacity = '1';
                (char as HTMLElement).style.transform = 'translateY(0)';
              }, index * staggerDelay);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [staggerDelay]);

  return (
    <span ref={ref} className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="char inline-block transition-all duration-500"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}