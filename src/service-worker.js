/* eslint-disable no-restricted-globals */

// src/service-worker.js

const CACHE_NAME = 'my-app-cache';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json', // Include the manifest file
          // Add other assets as needed
          '/static/js/bundle.js', // Example path to your main JavaScript bundle
          '/static/css/main.css', // Example path to your main CSS file
          // Add paths to other assets included in the manifest
        ]);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
