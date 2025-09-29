// Service Worker for RückbauPRO
// Enables offline contact access and performance optimization

const CACHE_NAME = 'rueckbaupro-v1.0.0';
const CACHE_VERSION = '1.0.0';

// Critical resources for offline functionality
const CRITICAL_CACHE = [
  '/',
  '/kontakt',
  '/preise',
  '/standorte',
  '/leistungen',
  '/ueber-uns',
  '/manifest.json',
  '/logo-new.svg',
  '/favicon.ico'
];

// Strategy: Cache First for static assets, Network First for dynamic content
const CACHE_STRATEGIES = {
  images: 'CacheFirst',
  videos: 'CacheFirst', 
  api: 'NetworkFirst',
  pages: 'StaleWhileRevalidate',
  static: 'CacheFirst'
};

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker version:', CACHE_VERSION);
  
  event.waitUntil(
    Promise.all([
      // Cache critical resources immediately
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(CRITICAL_CACHE);
      }),
      
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker version:', CACHE_VERSION);
  
  event.waitUntil(
    Promise.all([
      // Clean old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      
      // Claim all clients immediately
      self.clients.claim()
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-HTTP requests
  if (!request.url.startsWith('http')) return;
  
  // Handle different resource types
  if (request.destination === 'image') {
    event.respondWith(cacheFirstStrategy(request));
  } else if (request.url.includes('/videos/')) {
    event.respondWith(cacheFirstStrategy(request));
  } else if (request.url.includes('/api/')) {
    event.respondWith(networkFirstStrategy(request));
  } else if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request));
  } else {
    event.respondWith(staleWhileRevalidateStrategy(request));
  }
});

// Cache First Strategy - for static assets
async function cacheFirstStrategy(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Cache first failed:', error);
    return new Response('Offline - resource unavailable', { status: 503 });
  }
}

// Network First Strategy - for dynamic content
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request, {
      timeout: 3000 // 3 second timeout for mobile
    });
    
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network first falling back to cache:', error);
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline API response
    return new Response(JSON.stringify({
      error: 'Offline',
      message: 'Bitte versuchen Sie es später erneut oder rufen Sie an: +49 174 808 3023'
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Stale While Revalidate - for pages
async function staleWhileRevalidateStrategy(request) {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      const cache = caches.open(CACHE_NAME);
      cache.then(c => c.put(request, networkResponse.clone()));
    }
    return networkResponse;
  }).catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
}

// Handle navigation requests
async function handleNavigation(request) {
  try {
    // Try network first for navigation
    const networkResponse = await fetch(request, { timeout: 5000 });
    
    if (networkResponse.ok) {
      // Cache successful navigation responses
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
  } catch (error) {
    console.log('[SW] Navigation network failed, checking cache:', error);
  }
  
  // Try cache
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Try index page
  const indexResponse = await caches.match('/');
  if (indexResponse) {
    return indexResponse;
  }
  
  // Return offline page
  return new Response(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Offline - RückbauPRO</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body { 
          font-family: system-ui, sans-serif; 
          text-align: center; 
          padding: 50px; 
          background: #f9fafb;
        }
        .offline-container { 
          max-width: 500px; 
          margin: 0 auto;
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .phone-btn {
          display: inline-block;
          background: #0066CC;
          color: white;
          padding: 16px 32px;
          text-decoration: none;
          border-radius: 50px;
          font-weight: bold;
          margin-top: 20px;
          font-size: 18px;
        }
        .emergency {
          background: #dc2626;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
    </head>
    <body>
      <div class="offline-container">
        <h1>🔌 Keine Internetverbindung</h1>
        <p>Sie sind momentan offline, aber wir sind trotzdem für Sie da!</p>

        <h2>📞 Sofort-Kontakt:</h2>
        <a href="tel:+49174808302" class="phone-btn" aria-label="Telefonnummer anrufen: +49 174 808 3023">
          +49 174 808 3023
        </a>

        <h3>🚨 Notfall-Service:</h3>
        <a href="tel:+49174808302" class="phone-btn emergency" aria-label="24/7 Notfall-Hotline anrufen">
          24/7 Notfall-Hotline
        </a>
        
        <p style="margin-top: 30px; color: #666; font-size: 14px;">
          Kostenlose Beratung • Professioneller Rückbau • 24/7 Service
        </p>
        
        <button onclick="location.reload()" 
                style="margin-top: 20px; padding: 10px 20px; border: 1px solid #ccc; background: white; border-radius: 5px; cursor: pointer;">
          🔄 Erneut versuchen
        </button>
      </div>
    </body>
    </html>
  `, {
    status: 200,
    headers: { 'Content-Type': 'text/html' }
  });
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  try {
    // Retrieve pending form data from IndexedDB
    const pendingForms = await getPendingForms();
    
    for (const form of pendingForms) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form.data)
        });
        
        if (response.ok) {
          await removePendingForm(form.id);
          console.log('[SW] Synced form:', form.id);
        }
      } catch (error) {
        console.log('[SW] Form sync failed:', error);
      }
    }
  } catch (error) {
    console.log('[SW] Background sync failed:', error);
  }
}

// Push notifications for urgent updates
self.addEventListener('push', (event) => {
  const options = {
    body: 'Ihr Rückbau-Angebot ist bereit!',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    actions: [
      { action: 'view', title: 'Angebot ansehen' },
      { action: 'call', title: 'Anrufen' }
    ],
    data: {
      url: '/kontakt',
      phone: '+49174808302'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('RückbauPRO', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'call') {
    // Open phone dialer
    clients.openWindow('tel:+49174808302');
  } else {
    // Open website
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Utility functions for IndexedDB operations
async function getPendingForms() {
  // Simplified - would implement IndexedDB operations
  return [];
}

async function removePendingForm(id) {
  // Simplified - would implement IndexedDB operations
  return true;
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_REPORT') {
    console.log('[SW] Performance metrics:', event.data.metrics);
    
    // Report critical metrics
    if (event.data.metrics.lcp > 2500) {
      console.warn('[SW] LCP too slow:', event.data.metrics.lcp);
    }
    
    if (event.data.metrics.fid > 100) {
      console.warn('[SW] FID too slow:', event.data.metrics.fid);
    }
  }
});

console.log('[SW] Service Worker loaded successfully - RückbauPRO performance optimization active!');