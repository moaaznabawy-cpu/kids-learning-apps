const C='klhome-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png'])));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('klhome-')&&x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.pathname.split('/').length>3&&!u.pathname.endsWith('.png')&&!u.pathname.endsWith('.webmanifest')&&u.pathname!==new URL('./',self.location).pathname)return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
