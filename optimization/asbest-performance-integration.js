/**
 * ASBEST PERFORMANCE INTEGRATION SCRIPT
 * 
 * Complete performance optimization suite for the Asbest removal website.
 * Optimized for construction site mobile access and emergency response.
 */

(function() {
  'use strict';
  
  console.log('🚀 Asbest Performance Suite Loading...');
  
  // Performance timing
  const performanceStart = performance.now();
  
  // Device and connection detection
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const isSlowConnection = connection && ['2g', 'slow-2g'].includes(connection.effectiveType);
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isConstructionSite = isSlowConnection || (connection && connection.saveData);
  
  console.log(`📱 Device: ${isMobile ? 'Mobile' : 'Desktop'}`);
  console.log(`📶 Connection: ${connection?.effectiveType || 'Unknown'}`);
  console.log(`🏗️ Construction Site Mode: ${isConstructionSite}`);
  
  // Emergency contact visibility assurance
  function ensureEmergencyContact() {
    const existingContact = document.querySelector('.emergency-contact');
    if (!existingContact) {
      const emergencyContact = document.createElement('a');
      emergencyContact.className = 'emergency-contact';
      emergencyContact.href = 'tel:+49-521-98765432';
      emergencyContact.innerHTML = '🚨';
      emergencyContact.setAttribute('aria-label', 'Notfallkontakt anrufen');
      emergencyContact.setAttribute('title', 'Sofortiger Notfallkontakt');
      document.body.appendChild(emergencyContact);
      
      console.log('🚨 Emergency contact ensured');
    }
  }
  
  // Ensure emergency contact is available immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureEmergencyContact);
  } else {
    ensureEmergencyContact();
  }
  
  // Load optimization modules based on conditions
  function loadOptimizationModules() {
    const modules = [];
    
    // Always load core monitoring
    modules.push('/optimization/monitoring/rum-system.js');
    modules.push('/optimization/monitoring/core-web-vitals.js');
    
    // Load mobile optimizations for mobile devices
    if (isMobile) {
      modules.push('/optimization/mobile/adaptive-loading.js');
      modules.push('/optimization/mobile/touch-optimizer.js');
    }
    
    // Load construction site optimizations for slow connections
    if (isConstructionSite) {
      modules.push('/optimization/mobile/battery-saving.js');
    }
    
    // Load modules with intelligent timing
    let loadIndex = 0;
    const loadNext = () => {
      if (loadIndex < modules.length) {
        const script = document.createElement('script');
        script.src = modules[loadIndex];
        script.async = true;
        script.onload = () => {
          console.log(`✅ Loaded: ${modules[loadIndex]}`);
          loadIndex++;
          setTimeout(loadNext, isSlowConnection ? 500 : 100);
        };
        script.onerror = () => {
          console.warn(`⚠️ Failed to load: ${modules[loadIndex]}`);
          loadIndex++;
          loadNext();
        };
        document.head.appendChild(script);
      }
    };
    
    // Start loading after interaction or 2 seconds
    let hasInteracted = false;
    const interactionEvents = ['click', 'scroll', 'keydown', 'touchstart'];
    const handleInteraction = () => {
      if (!hasInteracted) {
        hasInteracted = true;
        interactionEvents.forEach(event => {
          document.removeEventListener(event, handleInteraction, { passive: true });
        });
        loadNext();
      }
    };
    
    interactionEvents.forEach(event => {
      document.addEventListener(event, handleInteraction, { passive: true });
    });
    
    // Fallback: load after 2 seconds
    setTimeout(() => {
      if (!hasInteracted) {
        loadNext();
      }
    }, 2000);
  }
  
  // Register service worker for offline functionality
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/advanced-sw.js')
        .then(registration => {
          console.log('✅ Service Worker registered for offline emergency access');
        })
        .catch(error => {
          console.warn('⚠️ Service Worker registration failed:', error);
        });
    }
  }
  
  // Performance monitoring
  function initPerformanceMonitoring() {
    const performanceEnd = performance.now();
    const initTime = performanceEnd - performanceStart;
    
    console.log(`⚡ Performance suite initialized in ${initTime.toFixed(2)}ms`);
  }
  
  // Initialize everything
  loadOptimizationModules();
  registerServiceWorker();
  initPerformanceMonitoring();
  
  // Make utilities globally available
  window.AsbestPerformance = {
    isSlowConnection,
    isMobile,
    isConstructionSite,
    ensureEmergencyContact,
    performanceStart
  };
  
  console.log('✅ Asbest Performance Suite Ready');
  
})();