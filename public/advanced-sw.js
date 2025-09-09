// ASBEST ADVANCED SERVICE WORKER - EMERGENCY READY
const VERSION = 'asbest-sw-v2.0.0';
const CRITICAL_CACHE = `asbest-critical-${VERSION}`;
const EMERGENCY_CACHE = `asbest-emergency-${VERSION}`;

// Emergency contact data - always available offline
const EMERGENCY_DATA = {
  phone: '+49-521-98765432',
  emergency: '+49-521-NOTFALL',
  email: 'notfall@asbestsanierung-bielefeld.de',
  address: 'Hauptstraße 123, 33602 Bielefeld',
  available24h: true
};

// Critical resources for emergency access
const EMERGENCY_RESOURCES = [
  '/',
  '/kontakt',
  '/notfall',
  '/bielefeld',
  '/css/critical.min.css',
  '/js/emergency.min.js',
  '/images/logo.webp',
  '/fonts/inter-var.woff2'
];

self.addEventListener('install', (event) => {
  console.log('🔧 Installing Asbest Service Worker');
  
  event.waitUntil(
    Promise.all([
      // Cache critical emergency resources
      caches.open(EMERGENCY_CACHE).then(cache => 
        cache.addAll(EMERGENCY_RESOURCES)
      ),
      
      // Cache emergency contact data
      caches.open(CRITICAL_CACHE).then(cache => 
        cache.put('/api/emergency-offline', 
          new Response(JSON.stringify(EMERGENCY_DATA), {
            headers: { 'Content-Type': 'application/json' }
          })
        )
      )
    ]).then(() => {
      console.log('✅ Emergency resources cached');
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('🚀 Activating Asbest Service Worker');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => 
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName.includes('asbest-') && !cacheName.includes(VERSION)) {
              return caches.delete(cacheName);
            }
          })
        )
      ),
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Emergency API - network first with offline fallback
  if (url.pathname.includes('/api/emergency')) {
    event.respondWith(
      fetch(request, { timeout: 2000 })
        .catch(() => caches.match('/api/emergency-offline'))
    );
    return;
  }

  // Static assets - cache first
  if (request.destination === 'style' || 
      request.destination === 'script' || 
      request.destination === 'font') {
    event.respondWith(
      caches.match(request).then(response => 
        response || fetch(request).then(fetchResponse => {
          const responseClone = fetchResponse.clone();
          caches.open(CRITICAL_CACHE).then(cache => 
            cache.put(request, responseClone)
          );
          return fetchResponse;
        })
      )
    );
    return;
  }

  // Navigation - network first with cache fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then(response => {
        const responseClone = response.clone();
        caches.open(CRITICAL_CACHE).then(cache => 
          cache.put(request, responseClone)
        );
        return response;
      }).catch(() => 
        caches.match(request).then(response => 
          response || caches.match('/')
        )
      )
    );
    return;
  }

  // Default: network first
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});

console.log('✅ Asbest Service Worker Ready - Emergency Contact Always Available');