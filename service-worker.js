// Service Worker for SLSS PWA
const CACHE_NAME = 'slss-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/classroom_statistics.html',
  '/manifest.json',
  '/bjbz.png',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
];

// 安装Service Worker，缓存静态资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('打开缓存');
        return cache.addAll(STATIC_ASSETS);
      })
  );
  self.skipWaiting();
});

// 激活Service Worker，清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('删除旧缓存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 拦截请求，实现离线优先策略
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果在缓存中找到响应，直接返回
        if (response) {
          return response;
        }

        // 否则尝试从网络获取
        return fetch(event.request)
          .then((networkResponse) => {
            // 如果响应有效，将其添加到缓存中
            if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
            }
            return networkResponse;
          })
          .catch(() => {
            // 如果网络请求失败，返回离线页面或默认内容
            if (event.request.mode === 'navigate') {
              return caches.match('/');
            }
            return new Response('网络不可用', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' }
            });
          });
      })
  );
});

// 后台同步功能，用于在网络恢复时同步数据
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-homework-data') {
    event.waitUntil(syncHomeworkData());
  }
});

// 推送通知功能
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: 'bjbz.png',
      badge: 'bjbz.png',
      data: {
        url: data.url
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// 点击通知打开相应页面
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.notification.data && event.notification.data.url) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});

// 同步作业数据的辅助函数
async function syncHomeworkData() {
  // 这里可以实现与服务器同步数据的逻辑
  // 目前项目是纯前端的，所以这个函数主要是作为示例
  console.log('尝试同步作业数据');
}