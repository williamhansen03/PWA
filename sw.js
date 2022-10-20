self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return caches.addAll(["manifest.json", "index.html", "spel.html", "gameover.html", "css/style.css", "css/style.scss", "css/style.css.map", "index.js", "sw.js", "js/script.js", "image/icon.png", "image/icon72x72.png", "image/icon144x144.png", "image/icon192x192.png"]);
        })
    );
    console.log("install dcode");
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
    console.log("Intercepting fetch request for: ${e.request.url}");
});

