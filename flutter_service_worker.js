'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f41381a8fdcf2c29829bc4504fbbac49",
"assets/AssetManifest.bin.json": "717be740f1d818eb23746b09007347ae",
"assets/AssetManifest.json": "e56a3105ed7c890305b05b35ab84aa53",
"assets/assets/images/1b.png": "45ef124ae9e9010e0d2ee48dd02f11f2",
"assets/assets/images/1f.png": "fb553ddbe7b8f96266af7858b08a2884",
"assets/assets/images/2b.png": "be76a05e03c1c2b0fcb66739b69e0186",
"assets/assets/images/2f.png": "9bb8fca6ad174d2486c5af8e023f18e5",
"assets/assets/images/3b.png": "9e455adeba31dffdca63e313ccf57c11",
"assets/assets/images/3f.png": "0fa070f014fb0d1fcf4ace72c84df76b",
"assets/assets/images/analytics.png": "e14fa71bf6d6fcc719325da0ae1d2ca9",
"assets/assets/images/awsimage.png": "1ebfb4e10c9f2196ca9def1f50892773",
"assets/assets/images/awsmob.png": "1e7be50e12313b5bd53e305eb6ae5b88",
"assets/assets/images/azure.png": "f3f85624a3a295331848b6109b2cade2",
"assets/assets/images/basket.png": "e2fd941fb3d137d0e46b7e3c321d1069",
"assets/assets/images/bgimage.png": "540e5bd24750ad0c036eb6db817c48cf",
"assets/assets/images/blueimage.png": "a9ebf2931bc016e9ddd1e725675c060e",
"assets/assets/images/blurimage.png": "8426d7e7db2160d52ef931415f617b7e",
"assets/assets/images/boywithcamera.png": "dbe7ce0b2465838c5319e5254be62958",
"assets/assets/images/boywithvr.png": "6efd5e2d91b9aafbd4eded1fecacdf55",
"assets/assets/images/cloudimage.png": "847103dad1403cceaaf36be89c1f3dd5",
"assets/assets/images/colmartimage.png": "4aaad0e1dbf4b3450272821f6f1189e0",
"assets/assets/images/colmarttext.png": "3517262853e34428f8b2ea76092f6ad4",
"assets/assets/images/com.png": "82c898a326a9fc4790d2299a4d614522",
"assets/assets/images/compute.png": "b1eba4689dd41a3e9debaeb1caee939e",
"assets/assets/images/computeimage.png": "8cbe07a6de3911008c5eb7347b0a63ab",
"assets/assets/images/continentimage.png": "a08a4a2872665b8b86102efb3700a3d8",
"assets/assets/images/continent_letter.png": "88c4e1b5729a0bbfa57fd6879ea023ce",
"assets/assets/images/corllel.png": "a017f2bc24e194a6e1306aeca3c6ccff",
"assets/assets/images/corllelani.gif": "95a842a310e6cd423d28f6fa3b94c48a",
"assets/assets/images/corlmart_letter.png": "d14ca0de25aec1a5c10aa53c4291f252",
"assets/assets/images/d%25201.png": "3e4e7b3078336e5c75a41914fa82626a",
"assets/assets/images/d.png": "3e4e7b3078336e5c75a41914fa82626a",
"assets/assets/images/dad.png": "13122ddf6b0c6f63dd425e6fdfd6cb4c",
"assets/assets/images/dad_logo.png": "e471885f608f7a6ff98d338d14153c26",
"assets/assets/images/dataimage.png": "c924938eb1ba84a46294af0b0d85cb8b",
"assets/assets/images/earthimage.png": "a1c086e9dc2183a2c3005da0d8b0fa69",
"assets/assets/images/ellipse%2520rivw.png": "4190190774e7a963b2cf741a525ff6ba",
"assets/assets/images/Ellipse.png": "9f36875f26f5a6fbe9ce4e38cd224a12",
"assets/assets/images/ellipse_basket.png": "f0af89a3a241b8f0f524e248e86f8338",
"assets/assets/images/ellipse_left.png": "55aa3d5eec563a5dda3e980c80c48161",
"assets/assets/images/ellipse_map.png": "a5e4990fa72653fb65673e858070bf85",
"assets/assets/images/fi.png": "f1f0ef977c05307ebbe8adfaa712b9e7",
"assets/assets/images/fins.png": "ec9581818b5a135cef0cffaf0c09a68e",
"assets/assets/images/ft.png": "65939c9b24dbfd2024853e5819bb67e1",
"assets/assets/images/full.png": "9adea2b5df4283c5615e8309c62b9357",
"assets/assets/images/fullstackimage.png": "d3f1287ddda21e8d8114ccbf1d83f947",
"assets/assets/images/fyt.png": "78bd04a762325e2084f93a9e0644627b",
"assets/assets/images/Gaming.png": "29dceac7f28b09f88461ed24b517dbdf",
"assets/assets/images/Gaming1.png": "73c9b14ef8b35cf5d5e00f5581997c38",
"assets/assets/images/gamingimage.png": "43fb99a097672ec27623d947393c588a",
"assets/assets/images/gamingimage2.png": "cb01ee0ff87c17ba5b94c5ef5f1c4e91",
"assets/assets/images/gamingmob.png": "40e7db5761f3e98bb5b0553950962347",
"assets/assets/images/gif11.gif": "95a842a310e6cd423d28f6fa3b94c48a",
"assets/assets/images/gif6.gif": "1988178aa7ef5e6de35bd99852f6496d",
"assets/assets/images/girlimage.png": "e03a1275e5d1523c5ba99a52a05c03c2",
"assets/assets/images/got.png": "6b10b7454c90ea6aba8f8db2ab0ede62",
"assets/assets/images/half_circle.png": "9f36875f26f5a6fbe9ce4e38cd224a12",
"assets/assets/images/Immersive%2520shawdow.png": "a9123c782b9d30442315fbb25a26f5bc",
"assets/assets/images/Immersive.png": "5f59e6716cf8475d3efc089abb13e3ca",
"assets/assets/images/Immersive1.png": "58c36b772033dafca297d7d8f8fc4c73",
"assets/assets/images/ins%25201.png": "594f18e057d542d4a9dc7bdbbd9bd7dd",
"assets/assets/images/ins.png": "594f18e057d542d4a9dc7bdbbd9bd7dd",
"assets/assets/images/lightimage.png": "9dfd34b2dde1f36c83c1a3d005ede7ae",
"assets/assets/images/lin%25201.png": "76fc86d8b49068f349db5d08337f44ee",
"assets/assets/images/lin.png": "76fc86d8b49068f349db5d08337f44ee",
"assets/assets/images/lostcontinent.png": "987c8103327a9fd62a3a77fa09adbc27",
"assets/assets/images/manVR.png": "1e4d29c180e376889b2504f10e6c51be",
"assets/assets/images/manVR1.png": "cb1d94433a0e0f06b5ce70b159f62907",
"assets/assets/images/map.png": "9173a5610a149517ce3a42a1d60fa8c1",
"assets/assets/images/market.png": "20167cafd43b4f6b6bab65d62afc89b9",
"assets/assets/images/marketimage.png": "e1f3d6ec7554ea6ece2cbe264dc5c3e0",
"assets/assets/images/mission_left.png": "e03a1275e5d1523c5ba99a52a05c03c2",
"assets/assets/images/mission_right.png": "3591cbeaa332df9a161e308c7b1ef101",
"assets/assets/images/networkimage.png": "ea146ba7f92b358f77eb2187a4a8c9fd",
"assets/assets/images/networking.png": "579b055bd8cc7f63dd11d2b415f7b243",
"assets/assets/images/oneimage.png": "05ea99d6c64a7d48b7012ae5ef9fa84d",
"assets/assets/images/pardigm.png": "540e5bd24750ad0c036eb6db817c48cf",
"assets/assets/images/Property1image.png": "2c8809e7b530142dcbda044aeba3f85f",
"assets/assets/images/Property2image.png": "bec409156db72c003bfc47834467c59c",
"assets/assets/images/Property3image.png": "354c8aecfbab82d449258fb3c8919135",
"assets/assets/images/question_bg.png": "802987d5df3040a509964f7c5db771c9",
"assets/assets/images/req.png": "f32d0153c560efebfcc6651422aadac6",
"assets/assets/images/reqimage.png": "26145660e4d660b452ed83ca6514217e",
"assets/assets/images/rivw%2520letter.png": "7029ace63c88082d3d51d6cb7c8a93fc",
"assets/assets/images/rivw.png": "97a739606f75f7318d1576c21d8bb31c",
"assets/assets/images/RIVWimage.png": "7029ace63c88082d3d51d6cb7c8a93fc",
"assets/assets/images/robotimage.png": "f8f8044d55091cd17d4580964a86c7b6",
"assets/assets/images/screenimage.png": "e6766dfd72402352c74cc52cf353f0af",
"assets/assets/images/searchimage.png": "e1f3d6ec7554ea6ece2cbe264dc5c3e0",
"assets/assets/images/threeimage.png": "09f12b6d12695d5ec3611faf1bfedfae",
"assets/assets/images/twi%25201.png": "90a39742c4a2bb8b9d45866a9e19565d",
"assets/assets/images/twi.png": "90a39742c4a2bb8b9d45866a9e19565d",
"assets/assets/images/twoimage.png": "d4fae37fe00bd5a0f73bbdff2c683912",
"assets/assets/images/uxuiimage.png": "34ea116c78eea91f790288049fbaf9aa",
"assets/assets/images/uxuimob.png": "1be70523a00ae8bfcbf48e1483d2a2d9",
"assets/assets/images/vrarimage.png": "d01c7ffca76d99ad237fee4fc3221419",
"assets/assets/images/vrarmob.png": "e71cc733ad5e0059ba61d11996c75933",
"assets/assets/images/vrimage.png": "1d5d5aead498494cf89750a23b10c6e5",
"assets/assets/images/y%25201.png": "e070460406e937987db84babfe1e8689",
"assets/assets/images/y.png": "e070460406e937987db84babfe1e8689",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "8c6eadd3ab630a312e2da36d17e80b1c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-192x192.png": "75e73a1239d78bd7ba1f90f7e8ecc46d",
"icons/android-chrome-512x512.png": "6d74cb34f7f8d0f8ee7081c247336c5d",
"icons/apple-touch-icon.png": "80da48efffd277ab69bd4a6b9a601b4e",
"index.html": "97bb4409b7ab0180e271b5c34ee9db30",
"/": "97bb4409b7ab0180e271b5c34ee9db30",
"logo.png": "75e73a1239d78bd7ba1f90f7e8ecc46d",
"main.dart.js": "19f62d2ce3232d6a4bfa6e110e338c57",
"manifest.json": "279b3b58fa6c156041cc547f41eb805e",
"version.json": "a0b9341a12539418193e56b6e5e5796c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
