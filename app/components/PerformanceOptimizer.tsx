'use client';
import { useEffect } from 'react';

interface WebVitalsGlobal {
  getCLS: (callback: (metric: any) => void) => void;
  getFID: (callback: (metric: any) => void) => void;
  getLCP: (callback: (metric: any) => void) => void;
  getFCP: (callback: (metric: any) => void) => void;
  getTTFB: (callback: (metric: any) => void) => void;
}

declare global {
  interface Window {
    webVitalsLib?: WebVitalsGlobal;
    gtag?: (...args: any[]) => void;
  }
}

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Load web-vitals library dynamically
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getLCP, getFCP, getTTFB } = await import('web-vitals');
        
        const sendToAnalytics = (metric: any) => {
          // Send to analytics
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', metric.name, {
              value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
              event_category: 'Web Vitals',
              event_label: metric.id,
              non_interaction: true,
            });
          }
          
          // Log for development
          if (process.env.NODE_ENV === 'development') {
            console.log(`[Performance] ${metric.name}:`, metric.value, metric.rating);
          }
          
          // Performance budget alerts
          const thresholds = {
            LCP: 2500,
            FID: 100,
            CLS: 0.1,
            FCP: 1800,
            TTFB: 600
          };
          
          if (metric.value > thresholds[metric.name as keyof typeof thresholds]) {
            console.warn(`[Performance] ${metric.name} is above threshold:`, {
              value: metric.value,
              threshold: thresholds[metric.name as keyof typeof thresholds],
              rating: metric.rating
            });
            
            // Send performance alert to monitoring service
            if (navigator.sendBeacon) {
              navigator.sendBeacon('/api/performance-alert', JSON.stringify({
                metric: metric.name,
                value: metric.value,
                threshold: thresholds[metric.name as keyof typeof thresholds],
                url: window.location.href,
                userAgent: navigator.userAgent,
                timestamp: Date.now()
              }));
            }
          }
        };
        
        // Measure all core web vitals
        getCLS(sendToAnalytics);
        getFID(sendToAnalytics);
        getLCP(sendToAnalytics);
        getFCP(sendToAnalytics);
        getTTFB(sendToAnalytics);
        
        // Store for global access
        window.webVitalsLib = { getCLS, getFID, getLCP, getFCP, getTTFB };
        
      } catch (error) {
        console.error('[Performance] Failed to load web-vitals:', error);
      }
    };
    
    // Resource hints and optimizations
    const optimizeResources = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'asbestsanierung-cdn.b-cdn.net',
        'www.googletagmanager.com',
        'www.google-analytics.com'
      ];
      
      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });
      
      // Preconnect to critical origins
      const preconnectOrigins = [
        'https://asbestsanierung-cdn.b-cdn.net'
      ];
      
      preconnectOrigins.forEach(origin => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = origin;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };
    
    // Connection-aware loading
    const adaptToConnection = () => {
      if ('connection' in navigator) {
        const conn = (navigator as any).connection;
        
        // Reduce quality on slow connections
        if (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g') {
          document.documentElement.classList.add('slow-connection');
          
          // Disable autoplay videos
          const videos = document.querySelectorAll('video[autoplay]');
          videos.forEach(video => {
            (video as HTMLVideoElement).autoplay = false;
            (video as HTMLVideoElement).preload = 'none';
          });
          
          // Replace high-res images with low-res versions
          const images = document.querySelectorAll('img[data-low-res]');
          images.forEach(img => {
            const lowResSrc = (img as HTMLImageElement).dataset.lowRes;
            if (lowResSrc) {
              (img as HTMLImageElement).src = lowResSrc;
            }
          });
        }
        
        // Save data mode
        if (conn.saveData) {
          document.documentElement.classList.add('save-data');
          
          // Disable non-essential animations
          const style = document.createElement('style');
          style.textContent = `
            .save-data * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          `;
          document.head.appendChild(style);
        }
      }
    };
    
    // Image lazy loading optimization
    const optimizeImages = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
              }
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.01
        });
        
        // Observe all lazy images
        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };
    
    // Initialize optimizations
    optimizeResources();
    adaptToConnection();
    optimizeImages();
    
    // Load web vitals after a short delay to avoid blocking
    setTimeout(loadWebVitals, 100);
    
    // Performance monitoring for revenue tracking
    const trackRevenueMetrics = () => {
      const startTime = performance.now();
      
      // Track time to interactive for conversion elements
      const trackElement = (selector: string, metricName: string) => {
        const element = document.querySelector(selector);
        if (element) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const timeToVisible = performance.now() - startTime;
                
                if (typeof window.gtag !== 'undefined') {
                  window.gtag('event', 'timing_complete', {
                    name: metricName,
                    value: Math.round(timeToVisible)
                  });
                }
                
                console.log(`[Revenue Metric] ${metricName}:`, timeToVisible + 'ms');
                observer.disconnect();
              }
            });
          });
          
          observer.observe(element);
        }
      };
      
      // Track critical conversion elements
      trackElement('.contact-btn', 'contact_button_visible');
      trackElement('[href="tel:+49 174 8083023"]', 'phone_link_visible');
      trackElement('#calculator-section', 'calculator_visible');
    };
    
    // Wait for DOM content loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', trackRevenueMetrics);
    } else {
      trackRevenueMetrics();
    }
    
  }, []);
  
  return null; // This component only provides performance optimizations
}