'use client';
import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
}

// Revenue-Critical Performance Monitoring
export default function PerformanceMonitor() {
  const metricsRef = useRef<Partial<PerformanceMetrics>>({});
  const isMonitoringRef = useRef(false);

  useEffect(() => {
    if (isMonitoringRef.current) return;
    isMonitoringRef.current = true;

    // Core Web Vitals monitoring for revenue impact
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP) - Critical for first impression
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        
        if (metricsRef.current) {
          metricsRef.current.lcp = lastEntry.startTime;
        }
        
        // Alert if LCP is too slow (impacts conversions)
        if (lastEntry.startTime > 2500) {
          console.warn('🐌 LCP too slow:', lastEntry.startTime, 'ms - May impact conversion rates');
          reportSlowPerformance('lcp', lastEntry.startTime);
        }
        
        reportMetric('lcp', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID) - Critical for interaction
      new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (metricsRef.current) {
            metricsRef.current.fid = entry.processingStart - entry.startTime;
          }
          
          if (entry.processingStart - entry.startTime > 100) {
            console.warn('🐌 FID too slow:', entry.processingStart - entry.startTime, 'ms');
            reportSlowPerformance('fid', entry.processingStart - entry.startTime);
          }
          
          reportMetric('fid', entry.processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS) - Critical for user experience
      new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        if (metricsRef.current) {
          metricsRef.current.cls = clsValue;
        }
        
        if (clsValue > 0.1) {
          console.warn('🐌 CLS too high:', clsValue);
          reportSlowPerformance('cls', clsValue);
        }
        
        reportMetric('cls', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte (TTFB)
      new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (entry.name === location.href) {
            const ttfb = entry.responseStart - entry.requestStart;
            if (metricsRef.current) {
              metricsRef.current.ttfb = ttfb;
            }
            
            if (ttfb > 800) {
              console.warn('🐌 TTFB too slow:', ttfb, 'ms');
              reportSlowPerformance('ttfb', ttfb);
            }
            
            reportMetric('ttfb', ttfb);
          }
        });
      }).observe({ entryTypes: ['navigation'] });

      // First Contentful Paint (FCP)
      new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (metricsRef.current) {
            metricsRef.current.fcp = entry.startTime;
          }
          
          if (entry.startTime > 1800) {
            console.warn('🐌 FCP too slow:', entry.startTime, 'ms');
            reportSlowPerformance('fcp', entry.startTime);
          }
          
          reportMetric('fcp', entry.startTime);
        });
      }).observe({ entryTypes: ['paint'] });
    };

    // Revenue-critical resource timing
    const observeResourceTiming = () => {
      new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          const duration = entry.responseEnd - entry.startTime;
          
          // Monitor critical resources
          if (entry.name.includes('calculator') && duration > 500) {
            console.warn('🐌 Calculator loading slowly:', duration, 'ms');
            reportSlowPerformance('calculator_load', duration);
          }
          
          if (entry.name.includes('video') && duration > 2000) {
            console.warn('🐌 Video loading slowly:', duration, 'ms');
            reportSlowPerformance('video_load', duration);
          }
          
          if (entry.name.includes('font') && duration > 300) {
            console.warn('🐌 Font loading slowly:', duration, 'ms');
            reportSlowPerformance('font_load', duration);
          }
        });
      }).observe({ entryTypes: ['resource'] });
    };

    // Monitor long tasks that could impact interaction
    const observeLongTasks = () => {
      new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (entry.duration > 50) {
            console.warn('🐌 Long task detected:', entry.duration, 'ms');
            reportSlowPerformance('long_task', entry.duration);
          }
        });
      }).observe({ entryTypes: ['longtask'] });
    };

    // Memory usage monitoring
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
        
        if (memoryUsage > 0.8) {
          console.warn('🧠 High memory usage:', Math.round(memoryUsage * 100), '%');
          reportSlowPerformance('memory_usage', memoryUsage);
        }
      }
    };

    // Connection quality monitoring for mobile optimization
    const monitorConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        
        const connectionData = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        };
        
        console.log('📡 Connection quality:', connectionData);
        
        // Optimize for slow connections
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          console.warn('🐌 Slow connection detected');
          document.body.classList.add('slow-connection');
          reportSlowPerformance('slow_connection', connection.downlink);
        }
        
        if (connection.saveData) {
          console.log('💾 Data saver mode enabled');
          document.body.classList.add('data-saver');
        }
      }
    };

    // Start monitoring
    observeWebVitals();
    observeResourceTiming();
    observeLongTasks();
    
    // Periodic monitoring
    const memoryInterval = setInterval(monitorMemory, 30000);
    const connectionInterval = setInterval(monitorConnection, 10000);
    
    // Initial connection check
    monitorConnection();
    
    // Page visibility change monitoring
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page became hidden - good time to send analytics
        sendPerformanceReport();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Send report when user leaves
    const handleBeforeUnload = () => {
      sendPerformanceReport();
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Send periodic reports
    const reportInterval = setInterval(sendPerformanceReport, 60000); // Every minute
    
    return () => {
      clearInterval(memoryInterval);
      clearInterval(connectionInterval);
      clearInterval(reportInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Report individual metrics
  const reportMetric = (name: string, value: number) => {
    // Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        event_category: 'Core Web Vitals',
        event_label: name,
        value: Math.round(name === 'cls' ? value * 1000 : value),
        non_interaction: true
      });
    }
    
    // Send to performance API if available
    if ('sendBeacon' in navigator) {
      const data = JSON.stringify({
        metric: name,
        value: value,
        timestamp: Date.now(),
        url: location.href,
        userAgent: navigator.userAgent
      });
      
      navigator.sendBeacon('/api/performance', data);
    }
  };

  // Report slow performance issues
  const reportSlowPerformance = (issue: string, value: number) => {
    console.error(`🚨 Performance Issue: ${issue} = ${value}`);
    
    // Track performance issues that could impact revenue
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_issue', {
        event_category: 'Performance Problems',
        event_label: issue,
        value: Math.round(value),
        custom_map: {
          'metric_1': value
        }
      });
    }
    
    // Send alert for critical issues
    if (
      (issue === 'lcp' && value > 4000) ||
      (issue === 'fid' && value > 300) ||
      (issue === 'cls' && value > 0.25)
    ) {
      // Critical performance issue - could impact conversions
      fetch('/api/performance-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          issue,
          value,
          critical: true,
          timestamp: Date.now(),
          url: location.href
        })
      }).catch(() => {
        console.error('Failed to send performance alert');
      });
    }
  };

  // Send comprehensive performance report
  const sendPerformanceReport = () => {
    const report = {
      metrics: { ...metricsRef.current },
      timestamp: Date.now(),
      url: location.href,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      connection: 'connection' in navigator ? {
        effectiveType: (navigator as any).connection.effectiveType,
        downlink: (navigator as any).connection.downlink,
        rtt: (navigator as any).connection.rtt
      } : null,
      memory: 'memory' in performance ? {
        used: (performance as any).memory.usedJSHeapSize,
        total: (performance as any).memory.totalJSHeapSize,
        limit: (performance as any).memory.jsHeapSizeLimit
      } : null
    };
    
    // Send to service worker for offline queueing
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'PERFORMANCE_REPORT',
        metrics: report
      });
    }
    
    // Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_report', {
        event_category: 'Performance Monitoring',
        event_label: 'comprehensive_report',
        value: report.metrics.lcp || 0,
        custom_map: {
          'metric_1': report.metrics.lcp,
          'metric_2': report.metrics.fid,
          'metric_3': report.metrics.cls
        }
      });
    }
  };

  // This component doesn't render anything visible
  return null;
}

// Export for use in layout
export { PerformanceMonitor };