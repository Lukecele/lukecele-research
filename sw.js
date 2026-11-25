const CACHE = "lukecele-research-v53";
const CORE = [
  "/",
  "/index.html",
  "/privacy.html",
  "/cookie-policy.html",
  "/styles.css?v=20",
  "/app.bundle.js?v=7",
  "/manifest.webmanifest",
  "/icon-192.png",
  "/icon-512.png",
  "/social-preview.jpg",
  "/social-preview.png",
  "/og-card-luca.png",
  "/profile-photo.png",
  "/reel-3d-poster.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("message", (event) => {
  if (event.data) {
    if (event.data.action === "skipWaiting") {
      self.skipWaiting();
    }
    if (event.data.action === "clearCache") {
      event.waitUntil(
        caches.keys().then((keys) =>
          Promise.all(keys.map((key) => caches.delete(key)))
        )
      );
    }
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  // Navigazione / Documenti HTML: Network First con fallback offline
  if (event.request.mode === "navigate" || event.request.destination === "document") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match("/index.html")))
    );
    return;
  }

  // Risorse statiche: Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
