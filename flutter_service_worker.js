'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9e77df12d5c471e9c512dbb792533528",
"assets/AssetManifest.bin.json": "ee71420703bdcea55e2bf60c06820d63",
"assets/AssetManifest.json": "5773de17b68db7a441748f51e9b5db22",
"assets/assets/empty_paper.svg": "0bd7e23bb136b59020ab387e62c23441",
"assets/assets/icons/12638.png": "a4416e024d691af3a2971e4114a6da7f",
"assets/assets/icons/gljiva.png": "373fc07017f5bd1667c4321d4b1c4acf",
"assets/assets/icons/liayum.png": "5653523281d1d07a3345a506b8e3344e",
"assets/assets/icons/likovni1.png": "52a1394e954d324ecfe82c083bba3a76",
"assets/assets/icons/likovni2.png": "48062e6f2fb7e6a52a86ad9df8a8361b",
"assets/assets/icons/likovni3.png": "fad145343da62fe17f999af57808f4bb",
"assets/assets/icons/pcela.png": "7fa8d96119c99c71d37208f9df13b5d9",
"assets/assets/icons/puz.png": "d1b292ecd0b0332c5cce95f4885f194f",
"assets/assets/icons/star.png": "2cf6849dbba135ba5f73fde5701185ad",
"assets/assets/icons/sticker_1.png": "ae496d8f8024af96c5723f2098291a65",
"assets/assets/icons/sticker_1_1.png": "e6ae4837d60f4f2f08e94b111aff864c",
"assets/assets/icons/sticker_2.png": "708277051928794167cccba54956535f",
"assets/assets/icons/sticker_2_1.png": "caa0e3df9e88301d1ff8210745dbfc92",
"assets/assets/icons/sticker_3.png": "8f3f49dfc1d577e150df78711a537133",
"assets/assets/icons/sticker_fish_1.png": "86679e5c673a49710a8b6d2108f8ef66",
"assets/assets/icons/sticker_fish_2.png": "de7f42277b4bdaff6cf93ac498d2f4b1",
"assets/assets/icons/sticker_fish_3.png": "0b6e2f119ed9fcdffc2db0db7eea5b53",
"assets/assets/icons/sticker_fish_4.png": "753a5119c267cf61ea5824b832d6134b",
"assets/assets/icons/sticker_fish_5.png": "c94cbb53c249a0792c77a90d46fbe6f8",
"assets/assets/icons/sticker_fish_6.png": "4556650161243bb9c20b37443514db27",
"assets/assets/icons/sticker_fish_7.png": "9c59cd2baacc020232ee8aeee3eea340",
"assets/assets/icons/sticker_fish_8.png": "d5ea8512e28aa871d3169c20cfe80161",
"assets/assets/icons/stika_02.png": "92a6dabc587f6f92f5bb4a260f9826e0",
"assets/assets/icons/waitingb.png": "ecb7c861e7bdfea56c25ef2fbfe0e5cd",
"assets/assets/JSONtemplates/cover_project(16).json": "a5eb2dc7457932c737bc4bec86a05a4d",
"assets/assets/logo_watermark.svg": "bc62a4a8fee292ab233422576cd83db6",
"assets/assets/math_paper.svg": "6624ae4b71e3f23ea86bf02c42b76139",
"assets/assets/pozadine/biljeznica.png": "04945d263933ae648c5abb11242b157f",
"assets/assets/pozadine/DOHAS_temp1_tag2.png": "a7f105f39080c19b39e1a46d0a4bd51c",
"assets/assets/pozadine/DOHAS_temp22.png": "d64bea4f9fceeb5a7e70cc05c0aa9695",
"assets/assets/pozadine/irish.png": "82525539010e89ebe940c8b18786aa05",
"assets/assets/pozadine/kocke.png": "09dc78411d1cbc496d2766ced1630968",
"assets/assets/pozadine/likovni.png": "2b1aacd616d1a86b020d3c8c45743d71",
"assets/assets/pozadine/matematika.jpg": "de936cee87a69ceba224061789a98ec4",
"assets/assets/pozadine/pozadina_fish_1.jpg": "e200281a3838c1013a083de7a7a97f3d",
"assets/assets/pozadine/sladoled.png": "8e8461e1ba61f7c584fa59b26aef0699",
"assets/assets/pozadine/vranicee.jpg": "780056d1d7b693febeafacaf3fdd30f7",
"assets/assets/pozadine/zvezde.png": "d5754db15ea0a3edc58c844be9332902",
"assets/assets/preview/custom_dizajn.png": "5e5b0639fda6277f90d8e8e42ef5a32e",
"assets/assets/preview/landscape.jpg": "e72a3c489af1babb843119ed73278e1c",
"assets/assets/preview/template1.jpg": "41f6fb365b60414d0a4e850eeac2950d",
"assets/assets/preview/template1.jpg~": "f026367ef37c129a3043f8cae188e173",
"assets/assets/preview/template1.png": "15bd6ac36340d63fe2b3cd3bf2a80353",
"assets/assets/preview/test-01.png": "b6debd67c4ad648d4b6a6be1a3bbbb40",
"assets/assets/pricing.csv": "ed13b821d145ecc24781bcbfa59a9986",
"assets/assets/rezne_linije/A4_format-rezne_linije.png": "096c43e9f52614ef565e50103b81eca5",
"assets/assets/rezne_linije/A5_format-rezne_linije.png": "b1456c195336cf96359664d333686089",
"assets/assets/templates/custom_dizajn.png": "5e5b0639fda6277f90d8e8e42ef5a32e",
"assets/assets/templates/DOHAS2_front_inner.png": "8b58d4b4c9cc6d8fff23d2506ebbeb9b",
"assets/assets/templates/DOHAS2_predlozak.json": "8a3a2a0b1967caf6f0efe7f4158853f6",
"assets/assets/templates/ds_front_inner.png": "2a336cec0ccbe7e43719b282c98bce6c",
"assets/assets/templates/fishy_fish.json": "91ae98fb8ba026ee84ab57d0d90603cc",
"assets/assets/templates/fishy_fish.png": "2add26c963d088d55a21f7823b594e79",
"assets/assets/templates/irish.json": "bad2facbcae5c160418822e83fc3f295",
"assets/assets/templates/kockice.json": "b6e9fd9b715c715378642c35850738f6",
"assets/assets/templates/kockice_test.json": "003ca1b696a49773788dff4b24f42cbb",
"assets/assets/templates/landscape.jpg": "e8f6cce24fcc9509c3d9beea20e044a2",
"assets/assets/templates/likovni.json": "5ef49112f8f3a49f04f9b8a6a7c1a369",
"assets/assets/templates/Mara_front_inner.png": "ad2522e5080f01d75e5e98baddb0dce2",
"assets/assets/templates/Mara_predlozak.json": "13c14953e88596f4a8b9b3522c0d1614",
"assets/assets/templates/Marija_front_inner.png": "179270257471b867133d58e0c8a494d0",
"assets/assets/templates/Marija_predlozak.json": "f56ca598a5e5528bd34ec917d724c608",
"assets/assets/templates/mm.json": "63e0c5e5cb577070e3a543d2465ff5b5",
"assets/assets/templates/project_template4.json": "939d2a0593858283c84d989f5b549f33",
"assets/assets/templates/project_template8.json": "215c64821e742d8b47252a15b08dd7aa",
"assets/assets/templates/sfs_front_inner.png": "933ac8ae97bec30814772f49977ae171",
"assets/assets/templates/sladoled.json": "2a339d5ca323df4e2b2073ac2474979d",
"assets/assets/templates/temp11_predlozak.json": "9574fe2bcc66bf89b648a34fa69d60d5",
"assets/assets/templates/temp11_predlozak.png": "e687b2ff9f74bbbe90f88a1fa227d8ac",
"assets/assets/templates/temp1_front_inner.png": "e0d9ff892d8e6c1071b93cf45ebe5c1b",
"assets/assets/templates/temp1_predlozak.json": "bbf47590b2115f19d9359ba9bbccc2f4",
"assets/assets/templates/template1.jpg": "f026367ef37c129a3043f8cae188e173",
"assets/assets/templates/template1.jpg~": "f026367ef37c129a3043f8cae188e173",
"assets/assets/templates/template1.png": "15bd6ac36340d63fe2b3cd3bf2a80353",
"assets/assets/templates/template_json_file.json": "5fb9d6dcc3bc2a2989583ec207c0a759",
"assets/assets/templates/template_json_file.png": "41c68030a7494b45b2eccfee436fdaa0",
"assets/assets/templates/template_json_file2.json": "077d2d81b48bddb1c136426a060d7197",
"assets/assets/templates/template_json_file2.png": "37c2cc64d9917a925e3eeaadc3d47e79",
"assets/assets/templates/template_json_file3.json": "a58a04c40cb93e5d3b9493d577b348e7",
"assets/assets/templates/template_json_file3.png": "4aab030275003076bbcffeaa7e3ef9bb",
"assets/assets/templates/test_01.png": "b6debd67c4ad648d4b6a6be1a3bbbb40",
"assets/assets/templates/vranicee.jpg": "780056d1d7b693febeafacaf3fdd30f7",
"assets/assets/templates/zvezde.json": "e39070e3754f773e8ce3d56972524253",
"assets/assets/templates/zvezde_template.png": "de921a72432456e835b4e953fbee9d13",
"assets/assets/write_paper.svg": "456093e58cbcfb7fdbf642d624cd4fe0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ebea0afd3abcec1aae1aba8b35fe04a3",
"assets/NOTICES": "5070631635265ed6028476310131064b",
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
"flutter_bootstrap.js": "a4e8b8cbccb1fc2eef9e32f6dfb87ff4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51d7821637ba59aeebdb2490e21fd0f0",
"/": "51d7821637ba59aeebdb2490e21fd0f0",
"main.dart.js": "0567631c6ef2816806560501d6e49cd7",
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
