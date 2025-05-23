'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ef1a27de28ed85f232e264ae2c4d80a8",
".git/config": "6fd60847d7118dec4c74757a85e1853f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5bb8bd2e36d2ae304607b5914474cc4c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4608b2bf8976b0d952ef89a373646c10",
".git/logs/refs/heads/main": "b36617a96680c503ba0369b4f7577646",
".git/logs/refs/remotes/origin/main": "92e66612091dfc22c9aaac74919234fb",
".git/objects/05/5bf4a5fd117843f31bcae7f705415496982c94": "a8c714f63c0c554d245b4f8109bd55cc",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/acbb085a79147af37d1a8b057f3b1d3a0b2c3c": "489ce2172d101f2f8ce32f5ec89bed31",
".git/objects/08/4ced355cac00db6320fd9d25534ce278fdba1d": "27ebe5110d4e9ad46ae40d1f970b731c",
".git/objects/0c/93c1b8cbd0f2bd8208e9a214df02b0b08d8a16": "ecfc694b6859257d5d8593d4cab1ea6b",
".git/objects/0c/bf08bda408e723b0db7df4d63cb845c4378b4d": "d35455c52b2b47b2a693cb29b58aaf74",
".git/objects/0e/433ccd152195a7744baf46f123567db4d55ba7": "4aea20392881a85d99de5ec562afccfc",
".git/objects/15/939aee59b05b3080e5c59a327cca8a3c4972e3": "7ae23b182904750a99d49eaf7926d841",
".git/objects/19/36e159305c5ad5b5351d0d7fda4f76abce146f": "88cc7dfbe9514ba6f9310d16361ece39",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/e1d74e68d9997ef2b13717cdbe9727b76103c7": "7062084a06f879384a650a83582e4067",
".git/objects/34/95e8c3149d67de50761554afae91f1248793e2": "40954126765ed58e1bf80975af2a1c4a",
".git/objects/37/26ab67dd999f6eb8651bb8d3e7a74dee0bd062": "2a10bdaaf2fc5ae7e80e10a4a36c48fd",
".git/objects/37/b953c93bcc5e90ead94d9bf9a6655e8c2f5d87": "f811479298a013f817233e7c4b4ba7a8",
".git/objects/3a/715b5c352982dbf9ce44a9a3ffbebdd61abb7d": "8952a24cf06b408c40c6a8e860756038",
".git/objects/3a/e61cd0d89725a3c3b4dbcd93701e77b7b7a1c3": "f201d73e48a0e1474b3babe09a77f8eb",
".git/objects/3f/111098db05414a5c2e06de32cf7db07d9ca9e4": "1b6546ba295465aa5206e8ebd2ef2fef",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/b31568bab0ba7c434185f16a9e5d59653cfc10": "3d9d242b9f3edcf35168939cfda5cbcc",
".git/objects/4e/f2f93686deb9694d46147aeede391bedb6a4fa": "6127ef65637ae52bb0917616b3d49c0c",
".git/objects/59/8c7c4634f16aa0750cc64d689a90ee37f63812": "bc449217a3cb5adb5cc1827120d3104e",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6b/171c11618c2fd9bd56512d67d7788a5acc38f0": "4eb75e4661ffc82f495c7e7ff263630f",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/77/c4e7d0f7bb709e65b1361823d60efec6bc3bb7": "4c7df1f339c456f7fff26c7d0337f7c4",
".git/objects/79/ffd9602dff6831681998db462cf6ac826e98af": "2fe008bfb63262b39e7f439f2003a626",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7ecc7e20b41aaf07eed3c104c22ba61ec67a68": "b9552e90c0dbc15268b4b213d723b83a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2e917e20a44e79469a4b22855920567be1ce67": "6fa92e0c31eb32af94e5fcfd1b56836c",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/120a526d346c59acddfd7606315a8c82d0c8a9": "50b0ba5f39650e3c81c15ae1b5221761",
".git/objects/9a/4ba7d08184ac7f621e995b5669461306dcdb96": "df61158715777e0e389ca5eec09e6cb2",
".git/objects/9a/79420a3c32f78f4796bdaf8ae634a9b3f256a1": "ef8c2098dce78b3aa7c011c333ec3b82",
".git/objects/9b/3f7d6d022d91a3be4b23380f1ac099daf5d671": "bfa69c79dffca96972f45fa66d3546be",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/bc1f2de5e648eaa51ce8276eb70d5c73a5e418": "87c625c53f80a25242337ea929c106a8",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/482f66aab98b201558eb1fa829e900a195f9bb": "4f7165be26d021c231c241f7bc07052a",
".git/objects/b5/95206cfa8424c18b32a6656b94915beeb56fc7": "682df445910b85d1b1cb1b2c3c7d686c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/ebd5acb41bd76e62f4ad32587894376cebca22": "58b5d7314256e1ad2911290d22aecfa0",
".git/objects/be/74eb424154bae40f2af170f7a9b4dd46ce4ab5": "cd8e0c32c385dd1bb6f4b0a8cf2b8bc6",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cd/58c480837f1c4cb3e68e94bcceed728f8b5425": "a7838caae48f5e6dae100e36fd13f89e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/0e3bdd0cb6d0843db1c8b18059565dc90e720e": "fd82d9d1f189b993ac51dd568b017c05",
".git/objects/de/7b9d289d33b8690408bd4bb0f502e9ef1a3401": "5b3c43fe475be68c9584da6113f163f3",
".git/objects/e1/7b09924a879e2e756031cec828b0795a8237f8": "41ed49215ba4bf5f906c1b4f87e4d0cc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/25f4b933a8fdc8a8fa2cb2bca9a834af0002e8": "63abe7c9fecae41cc7bd429f3bb8fe8e",
".git/objects/f9/5083e153440b697cb9d3bf4df5eb779567c953": "aa4449454d2d8ef40e5d9fc42c463072",
".git/objects/fa/65a36a8271f2b7aec9e6825ddfd6083b47c1f6": "25e4fe110d603885638d0ca36ca92f4c",
".git/refs/heads/main": "3ed73d8a144c036d24f297990c324970",
".git/refs/remotes/origin/main": "3ed73d8a144c036d24f297990c324970",
"assets/AssetManifest.bin": "84c2a3c7d7ca18b9932a5941aea45dd5",
"assets/AssetManifest.bin.json": "b9aa0a5dfb1ab88f4018994e37e654a7",
"assets/AssetManifest.json": "f8ebafe7aa531a2b0734433dac348286",
"assets/assets/assets/empty_paper.svg": "0bd7e23bb136b59020ab387e62c23441",
"assets/assets/assets/icons/12638.png": "a4416e024d691af3a2971e4114a6da7f",
"assets/assets/assets/icons/star.png": "2cf6849dbba135ba5f73fde5701185ad",
"assets/assets/assets/logo.png": "22eb9e44c25a39a7a099075843d6555c",
"assets/assets/assets/logo_watermark.svg": "bc62a4a8fee292ab233422576cd83db6",
"assets/assets/assets/math_paper.svg": "6624ae4b71e3f23ea86bf02c42b76139",
"assets/assets/assets/templates/landscape.jpg": "e72a3c489af1babb843119ed73278e1c",
"assets/assets/assets/templates/template1.jpg": "41f6fb365b60414d0a4e850eeac2950d",
"assets/assets/assets/templates/template1.jpg~": "f026367ef37c129a3043f8cae188e173",
"assets/assets/assets/templates/template1.png": "15bd6ac36340d63fe2b3cd3bf2a80353",
"assets/assets/assets/write_paper.svg": "456093e58cbcfb7fdbf642d624cd4fe0",
"assets/assets/empty_paper.svg": "0bd7e23bb136b59020ab387e62c23441",
"assets/assets/icons/12638.png": "a4416e024d691af3a2971e4114a6da7f",
"assets/assets/icons/star.png": "2cf6849dbba135ba5f73fde5701185ad",
"assets/assets/math_paper.svg": "6624ae4b71e3f23ea86bf02c42b76139",
"assets/assets/preview/landscape.jpg": "e72a3c489af1babb843119ed73278e1c",
"assets/assets/preview/template1.jpg": "41f6fb365b60414d0a4e850eeac2950d",
"assets/assets/preview/template1.jpg~": "f026367ef37c129a3043f8cae188e173",
"assets/assets/preview/template1.png": "15bd6ac36340d63fe2b3cd3bf2a80353",
"assets/assets/templates/landscape.jpg": "e8f6cce24fcc9509c3d9beea20e044a2",
"assets/assets/templates/template1.jpg": "f026367ef37c129a3043f8cae188e173",
"assets/assets/write_paper.svg": "456093e58cbcfb7fdbf642d624cd4fe0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b1123fefcd69d165c94eb3fdeca24ebd",
"assets/NOTICES": "87e252b3970b38de59668274b03b7a39",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "bec5bdf161ee7af8cbc623d88b23624b",
"favicon.png~": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "37d099acc3b4bd27201ea07c6c8b46cf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2488997a291ae38a191fb0d499c832f4",
"/": "2488997a291ae38a191fb0d499c832f4",
"main.dart.js": "a84151be4fbbacfe928c5292ff44d77f",
"manifest.json": "208d4bb31ce35364f988f10e8fe63626",
"version.json": "99b70e0abb9b63a84f94486ba2dd236c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
