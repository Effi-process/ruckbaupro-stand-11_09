import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import { PerformanceMonitor } from './components/PerformanceMonitor'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import EmergencyHotline from './components/EmergencyHotline'
import MobileOptimizer from './components/MobileOptimizer'
import FloatingMenuButton from './components/FloatingMenuButton'
import Script from 'next/script'

// Optimized font loading for faster LCP
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter'
})

import { generateHomepageMetadata } from './lib/metadata-utils';

export const metadata: Metadata = generateHomepageMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon-new.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1282a2" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "RückbauPRO GmbH",
              "description": "Professioneller Rückbau & Abbruch. Ihr neuer, zertifizierter Partner mit modernster Ausrüstung und fairen Preisen.",
              "url": "https://www.rueckbaupro.de",
              "telephone": "+49-800-RUECKBAU",
              "priceRange": "€€€",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "52.520008",
                "longitude": "13.404954"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Rückbau & Abbruch Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rückbau",
                      "description": "Professionelle Rückbauarbeiten und Entkernung"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gebäudeabbruch",
                      "description": "Fachgerechter Abbruch von Gebäuden und Bauwerken"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/rueckbaupro",
                "https://www.instagram.com/rueckbaupro",
                "https://www.linkedin.com/company/rueckbaupro"
              ]
            })
          }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Was kostet ein Rückbau?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Die Kosten für einen Rückbau hängen von verschiedenen Faktoren ab, wie der Größe des Gebäudes, den verwendeten Materialien und der Komplexität der Arbeiten. Wir erstellen Ihnen gerne einen kostenlosen Kostenvoranschlag."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wie lange dauert ein Gebäudeabbruch?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Die Dauer eines Abbruchprojekts variiert je nach Umfang und Komplexität. Kleinere Gebäude können in wenigen Tagen abgebrochen werden, während größere Projekte mehrere Wochen dauern können."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ist eine Genehmigung für den Abbruch erforderlich?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, für die meisten Abbrucharbeiten ist eine Genehmigung erforderlich. Wir kümmern uns um alle erforderlichen Genehmigungen und Formalitäten für Sie."
                  }
                }
              ]
            })
          }}
        />
        {/* Critical CSS moved to external file */}
        <link rel="stylesheet" href="/critical.css" />
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://asbestsanierung-cdn.b-cdn.net" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Critical performance script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Performance optimizations
                if ('connection' in navigator) {
                  const conn = navigator.connection;
                  if (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g') {
                    document.documentElement.classList.add('slow-connection');
                  }
                }
                
                // Preload only on fast connections
                if (!document.documentElement.classList.contains('slow-connection')) {
                  // Preload only actually used resources
                  var preloadResources = [
                    { url: '/logo-new.svg', as: 'image', type: 'image/svg+xml' }
                  ];
                  
                  preloadResources.forEach(function(resource) {
                    var link = document.createElement('link');
                    link.rel = 'preload';
                    link.href = resource.url;
                    link.as = resource.as;
                    if (resource.type) {
                      link.type = resource.type;
                    }
                    document.head.appendChild(link);
                  });
                }
                
                // Button removed - using EmergencyHotline component instead
                
                // Defer non-critical scripts
                window.addEventListener('load', function() {
                  // Load video only after page load
                  if (!document.documentElement.classList.contains('slow-connection')) {
                    setTimeout(function() {
                      var videoLink = document.createElement('link');
                      videoLink.rel = 'prefetch';
                      videoLink.href = '/videos/demolition-professional.mp4';
                      document.head.appendChild(videoLink);
                    }, 2000);
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-oxford-blue`} suppressHydrationWarning={true}>
        <PerformanceMonitor />
        <PerformanceOptimizer />
        <MobileOptimizer />
        {children}
        
        {/* Performance monitoring and analytics */}
        <Script
          id="performance-monitor"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Core Web Vitals monitoring
              function sendToAnalytics(metric) {
                if (typeof gtag !== 'undefined') {
                  gtag('event', metric.name, {
                    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                    event_category: 'Web Vitals',
                    event_label: metric.id,
                    non_interaction: true,
                  });
                }
              }
              
              // Track revenue-critical metrics
              window.addEventListener('load', function() {
                if ('web-vital' in window) {
                  getCLS(sendToAnalytics);
                  getFID(sendToAnalytics);
                  getLCP(sendToAnalytics);
                }
              });
            `,
          }}
        />
        
        {/* Service Worker for offline functionality */}
        <Script
          id="service-worker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('SW registered: ', registration);
                  }, function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
                });
              }
            `,
          }}
        />
        
        {/* Prefetch critical pages */}
        <Script
          id="prefetch-critical"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Prefetch critical pages for faster navigation
              const criticalPages = ['/kontakt', '/preise', '/standorte'];
              criticalPages.forEach(page => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = page;
                document.head.appendChild(link);
              });
            `,
          }}
        />
      </body>
    </html>
  )
}