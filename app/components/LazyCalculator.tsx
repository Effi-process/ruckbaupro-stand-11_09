'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Use Next.js dynamic import for SSR compatibility
const PremiumCalculator = dynamic(() => import('./PremiumCalculator'), {
  ssr: false,
  loading: () => <CalculatorSkeleton />
});

// Lightweight calculator placeholder
function CalculatorSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-morphism-ultra rounded-3xl shadow-2xl p-8 md:p-12 relative animate-pulse">
        <div className="space-y-6">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
          <div className="flex justify-between">
            <div className="h-12 bg-gray-200 rounded w-24"></div>
            <div className="h-12 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Call-to-action calculator teaser
function CalculatorTeaser({ onLoadCalculator }: { onLoadCalculator: () => void }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-morphism-ultra rounded-3xl shadow-2xl p-8 md:p-12 relative">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">💰</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Kostenrechner
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Erhalten Sie in 60 Sekunden eine präzise Kostenschätzung 
            mit 15% Sofort-Rabatt für heute
          </p>
          
          {/* Social proof */}
          <div className="bg-blue-50 rounded-xl p-4 mb-8">
            <p className="text-sm text-blue-800">
              📊 247 Berechnungen heute • ⭐⭐⭐⭐⭐ 4.9/5 Kundenbewertung
            </p>
          </div>
          
          <button
            onClick={onLoadCalculator}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all duration-300 mb-4"
          >
            🚀 Kosten berechnen - 15% RABATT
          </button>
          
          <div className="text-sm text-gray-500">
            Kostenlos • Unverbindlich • In 60 Sekunden
          </div>
          
          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="text-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600">✓</span>
              </div>
              <p className="text-xs text-gray-600">100% Festpreis</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600">⚡</span>
              </div>
              <p className="text-xs text-gray-600">60 Sekunden</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-yellow-600">🏆</span>
              </div>
              <p className="text-xs text-gray-600">5★ Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LazyCalculator() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '50px 0px' // Start loading before fully in view
      }
    );

    if (typeof window !== 'undefined') {
      const calculatorSection = document.querySelector('#calculator-section');
      if (calculatorSection) {
        observer.observe(calculatorSection);
      }
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadCalculator = () => {
    setShouldLoad(true);
  };

  // Auto-load when in view (for non-interactive loading)
  useEffect(() => {
    if (isInView && !shouldLoad) {
      const timer = setTimeout(() => {
        setShouldLoad(true);
      }, 500); // Small delay to ensure smooth scroll
      
      return () => clearTimeout(timer);
    }
  }, [isInView, shouldLoad]);

  if (shouldLoad) {
    return <PremiumCalculator />;
  }

  return <CalculatorTeaser onLoadCalculator={handleLoadCalculator} />;
}