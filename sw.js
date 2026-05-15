const CACHE_NAME = 'ic3-exam-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// THIS IS THE KEY: The 'fetch' event makes it installable
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
