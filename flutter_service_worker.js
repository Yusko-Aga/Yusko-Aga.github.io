'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0a953420468e089c1da370ad07a0ac05",
"assets/AssetManifest.bin.json": "56f1204dff3b8e1eab7c38ac244b4352",
"assets/AssetManifest.json": "cdbc8cf5b8087637517d15b9f6b3c81f",
"assets/assets/empty_paper.svg": "0bd7e23bb136b59020ab387e62c23441",
"assets/assets/icons/12638.png": "a4416e024d691af3a2971e4114a6da7f",
"assets/assets/icons/star.png": "2cf6849dbba135ba5f73fde5701185ad",
"assets/assets/icons/sticker_1.png": "ae496d8f8024af96c5723f2098291a65",
"assets/assets/icons/sticker_1_1.png": "e6ae4837d60f4f2f08e94b111aff864c",
"assets/assets/icons/sticker_2.png": "708277051928794167cccba54956535f",
"assets/assets/icons/sticker_2_1.png": "caa0e3df9e88301d1ff8210745dbfc92",
"assets/assets/icons/sticker_3.png": "8f3f49dfc1d577e150df78711a537133",
"assets/assets/icons/stika_02.png": "92a6dabc587f6f92f5bb4a260f9826e0",
"assets/assets/JSONtemplates/cover_project(16).json": "a5eb2dc7457932c737bc4bec86a05a4d",
"assets/assets/logo_watermark.svg": "bc62a4a8fee292ab233422576cd83db6",
"assets/assets/math_paper.svg": "6624ae4b71e3f23ea86bf02c42b76139",
"assets/assets/pozadine/kocke.png": "09dc78411d1cbc496d2766ced1630968",
"assets/assets/pozadine/matematika.jpg": "de936cee87a69ceba224061789a98ec4",
"assets/assets/pozadine/sladoled.png": "8e8461e1ba61f7c584fa59b26aef0699",
"assets/assets/pozadine/zvezde.png": "d5754db15ea0a3edc58c844be9332902",
"assets/assets/preview/custom_dizajn.png": "5e5b0639fda6277f90d8e8e42ef5a32e",
"assets/assets/preview/landscape.jpg": "e72a3c489af1babb843119ed73278e1c",
"assets/assets/preview/template1.jpg": "41f6fb365b60414d0a4e850eeac2950d",
"assets/assets/preview/template1.jpg~": "f026367ef37c129a3043f8cae188e173",
"assets/assets/preview/template1.png": "15bd6ac36340d63fe2b3cd3bf2a80353",
"assets/assets/preview/test-01.png": "b6debd67c4ad648d4b6a6be1a3bbbb40",
"assets/assets/pricing.csv": "ed13b821d145ecc24781bcbfa59a9986",
"assets/assets/rezne_linije/A4_format-rezne_linije.png": "7e44710ae712c392aaf5ad664bdb6d80",
"assets/assets/rezne_linije/A5_format-rezne_linije.png": "2b9425fdc12958b8e10e87b7d7fbf583",
"assets/assets/templates/custom_dizajn.png": "5e5b0639fda6277f90d8e8e42ef5a32e",
"assets/assets/templates/kockice.json": "b6e9fd9b715c715378642c35850738f6",
"assets/assets/templates/kockice_test.json": "003ca1b696a49773788dff4b24f42cbb",
"assets/assets/templates/landscape.jpg": "e8f6cce24fcc9509c3d9beea20e044a2",
"assets/assets/templates/mm.json": "63e0c5e5cb577070e3a543d2465ff5b5",
"assets/assets/templates/project_template4.json": "939d2a0593858283c84d989f5b549f33",
"assets/assets/templates/project_template8.json": "215c64821e742d8b47252a15b08dd7aa",
"assets/assets/templates/sladoled.json": "2a339d5ca323df4e2b2073ac2474979d",
"assets/assets/templates/template1.jpg": "f026367ef37c129a3043f8cae188e173",
"assets/assets/templates/template_json_file.json": "5fb9d6dcc3bc2a2989583ec207c0a759",
"assets/assets/templates/template_json_file.png": "41c68030a7494b45b2eccfee436fdaa0",
"assets/assets/templates/template_json_file2.json": "077d2d81b48bddb1c136426a060d7197",
"assets/assets/templates/template_json_file2.png": "37c2cc64d9917a925e3eeaadc3d47e79",
"assets/assets/templates/template_json_file3.json": "a58a04c40cb93e5d3b9493d577b348e7",
"assets/assets/templates/template_json_file3.png": "4aab030275003076bbcffeaa7e3ef9bb",
"assets/assets/templates/test_01.png": "b6debd67c4ad648d4b6a6be1a3bbbb40",
"assets/assets/templates/zvezde.json": "e39070e3754f773e8ce3d56972524253",
"assets/assets/templates/zvezde_template.png": "de921a72432456e835b4e953fbee9d13",
"assets/assets/write_paper.svg": "456093e58cbcfb7fdbf642d624cd4fe0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "533b71ec342ff898fff963e2549a6124",
"assets/NOTICES": "4dceec755578ce8103fd74481dd1bc6a",
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
"flutter_bootstrap.js": "f9117850aa82741d318aedcdd768bba1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51d7821637ba59aeebdb2490e21fd0f0",
"/": "51d7821637ba59aeebdb2490e21fd0f0",
"main.dart.js": "a2f8668cc37f21e4e15c3f8aa8e6608e",
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
