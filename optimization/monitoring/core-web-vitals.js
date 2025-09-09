// ASBEST CORE WEB VITALS TRACKER - GOOGLE PERFORMANCE METRICS
class AsbestCoreWebVitalsTracker {
  constructor() {
    this.vitals = {};
    this.thresholds = {
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 }
    };
    
    this.init();
  }
  
  init() {
    console.log('🎯 Initializing Asbest Core Web Vitals Tracker');
    
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.setupReporting();
  }
  
  observeLCP() {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      this.vitals.lcp = {
        value: lastEntry.startTime,
        element: lastEntry.element?.tagName || 'unknown',
        rating: this.getRating('lcp', lastEntry.startTime),
        timestamp: Date.now()
      };
      
      console.log(`🎯 LCP: ${lastEntry.startTime.toFixed(2)}ms - ${this.vitals.lcp.rating}`);
      
      if (this.vitals.lcp.rating === 'poor') {
        console.warn('🚨 LCP performance issue - emergency contact may be delayed');
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
  }
  
  observeFID() {
    new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const delay = entry.processingStart - entry.startTime;
        
        this.vitals.fid = {
          value: delay,
          inputType: entry.name,
          target: entry.target?.tagName || 'unknown',
          rating: this.getRating('fid', delay),
          timestamp: Date.now()
        };
        
        console.log(`🎯 FID: ${delay.toFixed(2)}ms - ${this.vitals.fid.rating}`);
        
        if (this.vitals.fid.rating === 'poor') {
          console.warn('🚨 FID performance issue - user interactions delayed');
        }
      });
    }).observe({ entryTypes: ['first-input'] });
  }
  
  observeCLS() {
    let clsValue = 0;
    
    new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          
          this.vitals.cls = {
            value: clsValue,
            rating: this.getRating('cls', clsValue),
            timestamp: Date.now()
          };
          
          console.log(`🎯 CLS: ${clsValue.toFixed(4)} - ${this.vitals.cls.rating}`);
          
          if (this.vitals.cls.rating === 'poor') {
            console.warn('🚨 CLS performance issue - layout instability detected');
          }
        }
      });
    }).observe({ entryTypes: ['layout-shift'] });
  }
  
  getRating(metric, value) {
    const threshold = this.thresholds[metric];
    if (!threshold) return 'unknown';
    
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }
  
  setupReporting() {
    // Report vitals when page becomes hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.reportVitals();
      }
    });
    
    // Report vitals on page unload
    window.addEventListener('beforeunload', () => {
      this.reportVitals();
    });
  }
  
  reportVitals() {
    if (Object.keys(this.vitals).length === 0) return;
    
    const report = {
      timestamp: Date.now(),
      url: location.href,
      vitals: this.vitals,
      summary: this.generateSummary()
    };
    
    console.log('🎯 Core Web Vitals Report:', report.summary);
    
    // Send to RUM system if available
    if (window.AsbestRUM) {
      window.AsbestRUM.recordMetric('core-web-vitals-report', report);
    }
  }
  
  generateSummary() {
    const summary = {
      overallRating: 'good',
      goodMetrics: 0,
      needsImprovementMetrics: 0,
      poorMetrics: 0
    };
    
    Object.entries(this.vitals).forEach(([metric, data]) => {
      switch (data.rating) {
        case 'good':
          summary.goodMetrics++;
          break;
        case 'needs-improvement':
          summary.needsImprovementMetrics++;
          if (summary.overallRating === 'good') {
            summary.overallRating = 'needs-improvement';
          }
          break;
        case 'poor':
          summary.poorMetrics++;
          summary.overallRating = 'poor';
          break;
      }
    });
    
    return summary;
  }
  
  // Public API
  getCurrentVitals() {
    return { ...this.vitals };
  }
  
  isPerformanceGood() {
    const summary = this.generateSummary();
    return summary.overallRating === 'good' && summary.poorMetrics === 0;
  }
}

// Initialize Core Web Vitals tracker
const coreWebVitalsTracker = new AsbestCoreWebVitalsTracker();
window.AsbestCWV = coreWebVitalsTracker;

console.log('✅ Asbest Core Web Vitals Tracker Ready - Monitoring Google performance metrics');