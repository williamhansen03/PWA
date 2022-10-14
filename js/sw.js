ServiceWorkerContainer.register("https://williamhansen03.github.io");

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["../index.html", "../css/style.css", "../image/icon.png"]);
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

