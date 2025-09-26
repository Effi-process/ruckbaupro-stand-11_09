'use client';
import { useEffect } from 'react';

export default function MobileOptimizationWrapper() {
  useEffect(() => {
    // Detect if user is on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Add mobile class to body for specific styling
      document.body.classList.add('is-mobile');

      // Optimize viewport for mobile
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
      }

      // Improve touch responsiveness
      document.addEventListener('touchstart', () => {}, { passive: true });

      // Add smooth scrolling for iOS
      (document.documentElement.style as any).webkitOverflowScrolling = 'touch';

      // Handle orientation changes
      const handleOrientationChange = () => {
        // Force recalculation of viewport units
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // Adjust font sizes based on orientation
        const isLandscape = window.innerWidth > window.innerHeight;
        if (isLandscape) {
          document.body.classList.add('landscape-mode');
        } else {
          document.body.classList.remove('landscape-mode');
        }
      };

      window.addEventListener('orientationchange', handleOrientationChange);
      window.addEventListener('resize', handleOrientationChange);
      handleOrientationChange(); // Initial call

      // Improve input field behavior on mobile
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        // Prevent zoom on focus for iOS
        input.addEventListener('focus', (e) => {
          const target = e.target as HTMLElement;
          target.style.fontSize = '16px';
        });

        // Scroll input into view when focused
        input.addEventListener('focus', (e) => {
          setTimeout(() => {
            const target = e.target as HTMLElement;
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 300);
        });
      });

      // Handle mobile keyboard
      const handleKeyboard = () => {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
          document.body.classList.add('keyboard-open');
        } else {
          document.body.classList.remove('keyboard-open');
        }
      };

      document.addEventListener('focusin', handleKeyboard);
      document.addEventListener('focusout', handleKeyboard);

      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading lazy by default
        if (!img.loading) {
          img.loading = 'lazy';
        }

        // Ensure images don't exceed viewport width
        const computedStyle = window.getComputedStyle(img);
        if (parseInt(computedStyle.width) > window.innerWidth) {
          img.style.maxWidth = '100%';
          img.style.height = 'auto';
        }
      });

      // Handle mobile-specific click improvements
      let touchStartTime: number;
      let touchStartX: number;
      let touchStartY: number;

      document.addEventListener('touchstart', (e) => {
        touchStartTime = Date.now();
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }, { passive: true });

      document.addEventListener('touchend', (e) => {
        const touchEndTime = Date.now();
        const touchDuration = touchEndTime - touchStartTime;

        // If touch was quick (less than 200ms) and didn't move much, treat as click
        if (touchDuration < 200) {
          const touch = e.changedTouches[0];
          const moveX = Math.abs(touch.clientX - touchStartX);
          const moveY = Math.abs(touch.clientY - touchStartY);

          if (moveX < 10 && moveY < 10) {
            // This was a tap, not a swipe
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON') {
              target.style.transform = 'scale(0.95)';
              setTimeout(() => {
                target.style.transform = '';
              }, 100);
            }
          }
        }
      }, { passive: true });

      // Optimize scroll performance
      let scrollTimeout: NodeJS.Timeout;
      const handleScroll = () => {
        document.body.classList.add('is-scrolling');

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          document.body.classList.remove('is-scrolling');
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Add pull-to-refresh hint
      let startY = 0;
      let currentY = 0;
      const pullToRefreshThreshold = 100;

      document.addEventListener('touchstart', (e) => {
        startY = e.touches[0].pageY;
      }, { passive: true });

      document.addEventListener('touchmove', (e) => {
        currentY = e.touches[0].pageY;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop === 0 && currentY > startY) {
          const pullDistance = currentY - startY;
          if (pullDistance > pullToRefreshThreshold) {
            // Could trigger a refresh here if needed
            document.body.style.transform = `translateY(${Math.min(pullDistance * 0.3, 50)}px)`;
          }
        }
      }, { passive: true });

      document.addEventListener('touchend', () => {
        document.body.style.transform = '';
      }, { passive: true });

      // Cleanup function
      return () => {
        document.body.classList.remove('is-mobile');
        document.body.classList.remove('landscape-mode');
        document.body.classList.remove('keyboard-open');
        document.body.classList.remove('is-scrolling');
        window.removeEventListener('orientationchange', handleOrientationChange);
        window.removeEventListener('resize', handleOrientationChange);
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('focusin', handleKeyboard);
        document.removeEventListener('focusout', handleKeyboard);
      };
    }
  }, []);

  return null;
}