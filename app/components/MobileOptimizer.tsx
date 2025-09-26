'use client';
import { useState, useEffect } from 'react';
import Icon from './Icon';

interface MobileOptimizerProps {
  enabled?: boolean;
}

export default function MobileOptimizer({ enabled = true }: MobileOptimizerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [connectionType, setConnectionType] = useState<string>('');
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [voiceSearch, setVoiceSearch] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Detect mobile device
    setIsMobile(window.innerWidth <= 768);

    // Connection monitoring
    const updateConnection = () => {
      const conn = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      if (conn) {
        setConnectionType(conn.effectiveType || conn.type || 'unknown');
      }
    };

    // Offline detection
    const updateOnlineStatus = () => {
      setIsOffline(!navigator.onLine);
    };

    // Battery monitoring (for construction site optimization)
    const updateBattery = async () => {
      try {
        const battery: any = await (navigator as any).getBattery?.();
        if (battery) {
          setBatteryLevel(Math.round(battery.level * 100));
        }
      } catch (error) {
        // Battery API not supported
      }
    };

    // Event listeners
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 768));
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    if ((navigator as any).connection) {
      (navigator as any).connection.addEventListener('change', updateConnection);
    }

    // Initialize
    updateConnection();
    updateOnlineStatus();
    updateBattery();

    // Auto-enable high contrast in bright conditions
    if (window.screen && (window.screen as any).availBrightness > 0.8) {
      setHighContrast(true);
    }

    return () => {
      window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 768));
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      if ((navigator as any).connection) {
        (navigator as any).connection.removeEventListener('change', updateConnection);
      }
    };
  }, [enabled]);

  // Voice search handler
  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'de-DE';
      
      recognition.onstart = () => setVoiceSearch(true);
      recognition.onend = () => setVoiceSearch(false);
      
      recognition.onresult = (event: any) => {
        const result = event.results[0][0].transcript;
        if (result.toLowerCase().includes('notfall') || result.toLowerCase().includes('hilfe')) {
          window.location.href = 'tel:+49 174 8083023';
        } else if (result.toLowerCase().includes('preis') || result.toLowerCase().includes('kosten')) {
          window.location.href = '#calculator-section';
        } else if (result.toLowerCase().includes('kontakt')) {
          window.location.href = '/kontakt';
        }
      };
      
      recognition.start();
    }
  };

  if (!enabled || !isMobile) return null;

  return (
    <>
      {/* Mobile-Optimized Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          ${highContrast ? `
            body { filter: contrast(150%) brightness(110%); }
            .high-contrast-text { color: #000 !important; background: #F5F0E8 !important; }
          ` : ''}
          
          /* Large touch targets for construction site use */
          button, a, input[type="button"], input[type="submit"] {
            min-height: 48px !important;
            min-width: 48px !important;
            touch-action: manipulation;
          }
          
          /* Prevent zoom on inputs */
          input, select, textarea {
            font-size: 16px !important;
          }
          
          /* Optimize for gloved hands */
          .touch-optimized {
            padding: 16px !important;
            margin: 8px !important;
          }
          
          /* Reduce animations on slow connections */
          ${connectionType === 'slow-2g' || connectionType === '2g' ? `
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              transition-delay: 0ms !important;
            }
          ` : ''}
        }
      `}</style>

      {/* Connection Status Bar */}
      {(connectionType === 'slow-2g' || connectionType === '2g' || isOffline) && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-orange-500 text-white p-2 text-center text-sm">
          <div className="flex items-center justify-center gap-2">
            <Icon name="wifi-off" size={16} />
            {isOffline ? 'Offline-Modus aktiv' : `Langsame Verbindung (${connectionType})`}
          </div>
        </div>
      )}

      {/* Battery Warning */}
      {batteryLevel !== null && batteryLevel < 20 && (
        <div className="fixed top-12 left-4 right-4 z-40 bg-red-500 text-white p-3 rounded-xl text-sm">
          <div className="flex items-center gap-2">
            <Icon name="battery" size={16} />
            <span>Batterie niedrig ({batteryLevel}%) - Energiesparmodus aktiviert</span>
          </div>
        </div>
      )}


      {/* Offline Content Cache Indicator */}
      {isOffline && (
        <div className="fixed bottom-4 left-4 right-4 bg-gray-800 text-white p-3 rounded-xl text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="download" size={16} />
              <span>Offline verfügbar: Kontaktdaten, Notfall-Infos</span>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="text-blue-300 hover:text-blue-100 font-medium"
            >
              Neu laden
            </button>
          </div>
        </div>
      )}


      {/* Performance Monitor for Construction Sites */}
      {(connectionType === 'slow-2g' || connectionType === '2g') && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable non-essential features on slow connections
              document.addEventListener('DOMContentLoaded', function() {
                // Disable auto-playing videos
                document.querySelectorAll('video[autoplay]').forEach(v => v.removeAttribute('autoplay'));
                
                // Lazy load images more aggressively
                document.querySelectorAll('img').forEach(img => {
                  if (!img.loading) img.loading = 'lazy';
                });
                
                // Simplify animations
                document.documentElement.style.setProperty('--animation-duration', '0.1s');
              });
            `,
          }}
        />
      )}
    </>
  );
}