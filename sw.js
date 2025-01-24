const cacheName = "spiderman-game";
const filesToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/game.js",
  "/C:\Users\LENOVO\Downloads\Spiderman-Game-main\Spiderman-Game-main\hero.png",
  "/C:\Users\LENOVO\Downloads\Spiderman-Game-main\Spiderman-Game-main\villen.png",
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
