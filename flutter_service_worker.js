'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "161593f5727b4934be63f3ec84edc1d1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "eb8568b810de52f8a99129c2d7127504",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/alligator.svg": "c6fedcc69f6bfe3a21628fbd36c910f7",
"assets/assets/images/ant.svg": "776b78dce3cf44a1a66231ec2ce29996",
"assets/assets/images/bat.svg": "83d67dd9b43ad02a821ac7b78483fb01",
"assets/assets/images/bear.svg": "5b871c2f15bd6d09bea43a22edb3520f",
"assets/assets/images/bee.svg": "78cb4bb68ba14db1e2d17825fc27cd9d",
"assets/assets/images/bird.svg": "37d51a7011d9897418c8e4ca514a31de",
"assets/assets/images/buffalo.svg": "38f97c077d896c01c78aa990e927157a",
"assets/assets/images/bug.svg": "0860060c1d3c11fef7e00bdb2229f71d",
"assets/assets/images/bull.svg": "8e6e6508b9109d96bff1580420201731",
"assets/assets/images/butterfly.svg": "90b1dea24edd414a316eb98dd74467f1",
"assets/assets/images/camel.svg": "46e99276a0f2d70a07a58167a531caa0",
"assets/assets/images/cat.svg": "ecf3c33015a2428657e4b2b7026d0d19",
"assets/assets/images/caterpiller.svg": "e3767855a4cb478f7f2d96363e46a12a",
"assets/assets/images/cheetah.svg": "dfc0b355ec69ccca8aed77b499d20060",
"assets/assets/images/chicken.svg": "c5cdbeb18a9e236f49dafa56739cce2a",
"assets/assets/images/cockroach.svg": "fd7b0ad0488f7ec7780e6bee8ad9d6e4",
"assets/assets/images/cow.svg": "bc236869b2804654da7460014b8e8b26",
"assets/assets/images/cuccoon.svg": "9eb4636b3a14efcd80ee8a79fe7fb63b",
"assets/assets/images/dinosaur.svg": "a937c8240a2b2889a5ba0695d55e4122",
"assets/assets/images/dog.svg": "90042f474341b09bae464c587164cf54",
"assets/assets/images/dolphin-XQGKTHY45Z.svg": "4a137736694ad66d5e4a81bdb048bcd5",
"assets/assets/images/dolphin.svg": "9afdf51b78371df05207eca8a5ffd8fc",
"assets/assets/images/dove.svg": "19ac2aad019c9c3afe9bdb2f2ca36a7a",
"assets/assets/images/duck.svg": "acafc6a713c5a979a501ee1c9b72ddcb",
"assets/assets/images/eagle.svg": "8cf4e939e4d9e499a7e65eb6e8783cc0",
"assets/assets/images/elephant.svg": "eb6fd163ffc1ed224749806627116576",
"assets/assets/images/firefly.svg": "614d1606c1dd1380f297007360263ec1",
"assets/assets/images/fish.svg": "a0b47fdbb2c39adf09f1dda38ea96e30",
"assets/assets/images/flamingo.svg": "32cba5de2904967169c3a9ad0fa5692a",
"assets/assets/images/fly-X8HSN3CEKB.svg": "c283ed72168d06dbe61cb4385f37278f",
"assets/assets/images/fly.svg": "d5dc020f29afe27f06816831551ac6a4",
"assets/assets/images/fox.svg": "38d5e19e5067d13a841de6e460b45b99",
"assets/assets/images/frog.svg": "bcf9f9c5f2c0acb73ecfd2dc459ab2cd",
"assets/assets/images/giraffe.svg": "e3f8483ae3a7a8d467008324b0faafdb",
"assets/assets/images/kangaroo.svg": "d346055ad5ea9a11015d65d673ad8228",
"assets/assets/images/koala.svg": "357fad322a092085a504479174fdf413",
"assets/assets/images/gorilla.svg": "1ce5f680db65191c7754e34f3e3fe325",
"assets/assets/images/ladybug.svg": "073bd2854ca624d0dc81ecbe61353d48",
"assets/assets/images/grasshopper.svg": "cc7f4d67e90088fd8df040ec8612496a",
"assets/assets/images/leopard.svg": "b041d2164f48a57041a522c5b504f3c3",
"assets/assets/images/lion.svg": "63a7f0a400e84aacda758c4808a3b37b",
"assets/assets/images/monkey.svg": "5cd74c2f5fe94793d8b77dad8de7c922",
"assets/assets/images/mouse.svg": "95b01016071cdc97c41b76b1b7e71062",
"assets/assets/images/panda.svg": "a42df819a3a9d39062b5ae12d0f44cec",
"assets/assets/images/panther.svg": "1be1c8cc350aa0926e589969bc4322e4",
"assets/assets/images/parrot.svg": "a556265c1c424342378dcc77c14fb360",
"assets/assets/images/penguin.svg": "e2420170b140030570a00a91117c4e9d",
"assets/assets/images/sea-dog.svg": "d68f4be2c566aaccd47544976fee6026",
"assets/assets/images/shark.svg": "0fd5aedb664000c9dc237eeeac7b8147",
"assets/assets/images/sheep.svg": "d5e44a2b378b73e57505bfc3e419a930",
"assets/assets/images/snake.svg": "261b399a3364b60cb1d2c57bf53811f9",
"assets/assets/images/spider-insect.svg": "dc5bfb1efd1349de9783c1e4c40407de",
"assets/assets/images/spider.svg": "8001be5fa9770317134ab3de1bbc5923",
"assets/assets/images/squirrel.svg": "bea200bbc11a016032d558569b2473e5",
"assets/assets/images/starfish.svg": "7467bf2c851f0974c40fc81412c733c5",
"assets/assets/images/swan.svg": "f076a7ffb3b3292f775187a237a4097d",
"assets/assets/images/tiger.svg": "22e991a8370e90e3a7b1b1930d5b14b0",
"assets/assets/images/turtle.svg": "891cc3cee7e20e7438a424c38ddbb91b",
"assets/assets/images/white-tiger.svg": "ad3ddea5f5d897a773a51eb350c17982",
"assets/assets/images/wolf.svg": "3547ffb8c763025b0980c64032a76bb8",
"assets/assets/images/zebra.svg": "27b6913ba1292b3c733d4bdf96c15366",
"assets/assets/images/hippo.svg": "42e27004c89c9170cb65c50134565da2",
"assets/assets/images/horse-RQC45VEM8D.svg": "dd0d67fe6bfb8ac937368c654e2bdb43",
"assets/assets/images/horse.svg": "925149fd4afd67061722560bcff18127",
"assets/assets/images/insect.svg": "4ef85351d3a302558fd65bd94a5404b6",
"assets/assets/sounds/Gorilla.mp3": "d110af4bf245bb02febd4c4ba4f33f02",
"assets/assets/sounds/Leopard.mp3": "0f980c22480b3bef818464d7adb5306e",
"assets/assets/sounds/Rhinozerus.mp3": "adf74e4313021f69bf55c262fa50093e",
"assets/assets/sounds/cock.mp3": "55f92657c5e6470df0cc927bb345de27",
"assets/assets/sounds/alligator.mp3": "751da05dd2482c2f5f77e23c7e09c75a",
"assets/assets/sounds/cat.mp3": "017029bab78fc6449e603d39176c9f87",
"assets/assets/sounds/cow.mp3": "1123d73a55e762220ec2ba9e8a18d2ba",
"assets/assets/sounds/chimpanzee.mp3": "6477792b8b8255c0a5167e7e54ccea7f",
"assets/assets/sounds/dog.mp3": "ccb6bca4ad3d8d221565e7d1c76efbb3",
"assets/assets/sounds/chicken.mp3": "b1d55445ef753b11160718424b337d12",
"assets/assets/sounds/duck.mp3": "c3d6ad6699ef874ac4649f59882e1e0d",
"assets/assets/sounds/elephant.mp3": "4f399bb14dd4336695b39d49ec4efc50",
"assets/assets/sounds/fox.mp3": "cb73bb2ef00e9d3200a80d46d5347ce4",
"assets/assets/sounds/horse.mp3": "8318b4393d2d2cb23d7cc3414e8d5735",
"assets/assets/sounds/lion.mp3": "fe0997408ba067572f687a2080c5442d",
"assets/assets/sounds/pig.mp3": "70f242f104e50295173e43fff5668547",
"assets/assets/sounds/schaf.mp3": "54beb27ba5730fea38e83fc8f98d5ca0",
"assets/assets/sounds/sheep.mp3": "478665854181d16e35638beb8b067b23",
"assets/assets/sounds/tiger.mp3": "4cc129fd2316de339db32379cee84f42",
"assets/assets/sounds/vulture.mp3": "78c74a9f84f8167ce5258b304f97b277",
"assets/assets/sounds/wolf.mp3": "bbed0e871d6e93292fb45f0cc90f9892",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "21b4107b97aa461f7d5bb8aa2ecb242b",
"/": "21b4107b97aa461f7d5bb8aa2ecb242b",
"main.dart.js": "06b02864a04a51aad516310a4ad95aef",
"manifest.json": "ae320b627e605726fe62d0c194b84ba9",
"version.json": "0cb428ca95ffa86b9579a557ef44e4e3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
