// ASBEST REAL-USER MONITORING - CONSTRUCTION SITE ANALYTICS
class AsbestRUMSystem {
  constructor() {
    this.metrics = {};
    this.sessionId = 'asbest-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    this.collectionEndpoint = '/api/rum-metrics';
    
    this.init();
  }
  
  init() {
    console.log('📊 Initializing Asbest RUM System');
    
    this.observeWebVitals();
    this.observeBusinessMetrics();
    this.setupBeacons();
  }
  
  observeWebVitals() {
    // LCP observation
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      this.recordMetric('lcp', lastEntry.startTime, {
        element: lastEntry.element?.tagName || 'unknown'
      });
      
      if (lastEntry.startTime > 2500) {
        console.warn('⚠️ LCP exceeds 2.5s - emergency contact may be delayed');
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    
    // FID observation
    new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const delay = entry.processingStart - entry.startTime;
        
        this.recordMetric('fid', delay, {
          inputType: entry.name,
          target: entry.target?.tagName || 'unknown'
        });
        
        if (delay > 100) {
          console.warn(`⚠️ FID exceeds 100ms (${delay.toFixed(2)}ms)`);
        }
      });
    }).observe({ entryTypes: ['first-input'] });
    
    // CLS observation
    let clsValue = 0;
    new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          this.recordMetric('cls', clsValue);
        }
      });
    }).observe({ entryTypes: ['layout-shift'] });
  }
  
  observeBusinessMetrics() {
    // Emergency contact clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('.emergency-contact, a[href^="tel:"]')) {
        this.recordMetric('emergency-contact-click', {
          element: e.target.className,
          page: location.pathname,
          time: Date.now()
        });
      }
    });
    
    // Calculator usage
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-component="calculator"] button')) {
        this.recordMetric('calculator-usage', {
          action: e.target.textContent,
          page: location.pathname
        });
      }
    });
    
    // Contact form submissions
    document.addEventListener('submit', (e) => {
      if (e.target.matches('form[name="contact"]')) {
        this.recordMetric('contact-form-submit', {
          page: location.pathname
        });
      }
    });
  }
  
  recordMetric(name, value, metadata = {}) {
    this.metrics[name] = {
      value,
      metadata,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      page: location.pathname
    };
    
    console.log(`📊 RUM Metric: ${name} = ${JSON.stringify(value)}`);
  }
  
  setupBeacons() {
    // Send metrics on page unload
    window.addEventListener('beforeunload', () => {
      this.sendMetrics(true);
    });
    
    // Send metrics periodically
    setInterval(() => {
      this.sendMetrics();
    }, 30000);
  }
  
  sendMetrics(isBeacon = false) {
    if (Object.keys(this.metrics).length === 0) return;
    
    const payload = {
      sessionId: this.sessionId,
      url: location.href,
      timestamp: Date.now(),
      metrics: this.metrics
    };
    
    if (isBeacon && navigator.sendBeacon) {
      navigator.sendBeacon(this.collectionEndpoint, JSON.stringify(payload));
    } else {
      fetch(this.collectionEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true
      }).catch(console.error);
    }
    
    // Clear sent metrics
    this.metrics = {};
  }
}

// Initialize RUM system
const rumSystem = new AsbestRUMSystem();
window.AsbestRUM = rumSystem;

console.log('✅ Asbest RUM System Ready - Tracking performance & business metrics');