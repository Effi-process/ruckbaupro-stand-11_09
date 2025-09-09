// ASBEST ADAPTIVE LOADING - CONSTRUCTION SITE OPTIMIZED
class AsbestAdaptiveLoader {
  constructor() {
    this.connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    this.isSlowConnection = this.connection && ['2g', 'slow-2g'].includes(this.connection.effectiveType);
    this.dataSaverEnabled = this.connection && this.connection.saveData;
    
    this.init();
  }
  
  init() {
    console.log('📱 Initializing Asbest Adaptive Loading');
    console.log(`Connection: ${this.connection?.effectiveType || 'unknown'}`);
    console.log(`Data Saver: ${this.dataSaverEnabled}`);
    
    if (this.isSlowConnection || this.dataSaverEnabled) {
      this.enableSlowConnectionMode();
    } else {
      this.enableFastConnectionMode();
    }
  }
  
  enableSlowConnectionMode() {
    console.log('🐌 Enabling slow connection optimizations');
    
    // Reduce image quality
    document.querySelectorAll('img[data-adaptive]').forEach(img => {
      const lowQualitySrc = img.dataset.lowQuality || 
                           img.src.replace(/quality=\\d+/, 'quality=50');
      if (lowQualitySrc !== img.src) {
        img.src = lowQualitySrc;
      }
    });
    
    // Disable non-critical features
    document.querySelectorAll('video[data-background]').forEach(video => {
      video.style.display = 'none';
    });
    
    // Defer heavy scripts
    document.querySelectorAll('[data-heavy-script]').forEach(script => {
      script.setAttribute('defer', 'true');
    });
  }
  
  enableFastConnectionMode() {
    console.log('🚀 Enabling fast connection optimizations');
    
    // Preload likely resources
    const likelyResources = ['/kontakt', '/preise', '/api/calculator-data'];
    likelyResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new AsbestAdaptiveLoader();
  });
} else {
  new AsbestAdaptiveLoader();
}

console.log('✅ Asbest Adaptive Loading Ready');