// ASBEST TOUCH OPTIMIZER - CONSTRUCTION SITE READY
class AsbestTouchOptimizer {
  constructor() {
    this.init();
  }
  
  init() {
    console.log('👆 Initializing Asbest Touch Optimizer');
    
    this.optimizeTouchTargets();
    this.setupFastClick();
    this.improveScrolling();
  }
  
  optimizeTouchTargets() {
    // Ensure minimum 44px touch targets
    const touchTargets = document.querySelectorAll('button, a, input, select');
    
    touchTargets.forEach(target => {
      const computedStyle = getComputedStyle(target);
      const width = parseInt(computedStyle.width);
      const height = parseInt(computedStyle.height);
      
      if (width < 44 || height < 44) {
        target.style.minWidth = '44px';
        target.style.minHeight = '44px';
        target.classList.add('touch-optimized');
      }
      
      // Special handling for emergency contact
      if (target.matches('.emergency-contact')) {
        target.style.minWidth = '60px';
        target.style.minHeight = '60px';
        target.style.padding = '12px';
      }
    });
  }
  
  setupFastClick() {
    // Eliminate 300ms click delay
    let touchStartX, touchStartY;
    
    document.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = Math.abs(touchEndX - touchStartX);
      const deltaY = Math.abs(touchEndY - touchStartY);
      
      // If it's a tap (not a swipe)
      if (deltaX < 10 && deltaY < 10) {
        const target = document.elementFromPoint(touchEndX, touchEndY);
        if (target && target.matches('button, a, [role="button"]')) {
          e.preventDefault();
          target.click();
        }
      }
    }, { passive: false });
  }
  
  improveScrolling() {
    // Enable momentum scrolling on iOS
    document.body.style.webkitOverflowScrolling = 'touch';
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Initialize touch optimizer
new AsbestTouchOptimizer();

console.log('✅ Asbest Touch Optimizer Ready - 44px minimum targets');