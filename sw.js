/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3d31e1934c9cf73c1e2c81cd19d9f575"
  },
  {
    "url": "404/index.html",
    "revision": "da688c9b851b571197c15e96860e644a"
  },
  {
    "url": "app-386ecf1845a2d8f4535f.js"
  },
  {
    "url": "app-386ecf1845a2d8f4535f.js.map",
    "revision": "199543475366ee3f606d3add338321f5"
  },
  {
    "url": "app-744abaf4dd366ceeadd0.js"
  },
  {
    "url": "app-744abaf4dd366ceeadd0.js.map",
    "revision": "fdd84e3c1a63b8fdd865e27bcffb65d6"
  },
  {
    "url": "app-b0a5fd7ac6e468a054ab.js"
  },
  {
    "url": "app-b0a5fd7ac6e468a054ab.js.map",
    "revision": "80543847020118e2a95c9054fa971015"
  },
  {
    "url": "app-e7fb624a0ffc6db6d240.js"
  },
  {
    "url": "app-e7fb624a0ffc6db6d240.js.map",
    "revision": "708bea17df163d7c2a0c43e31be0f31d"
  },
  {
    "url": "chunk-map.json",
    "revision": "4f5dac7c53b00fbb213d68ca28be0dde"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-235e751eb037707e5d1a.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-235e751eb037707e5d1a.js.map",
    "revision": "916f682476dd993162282a2582b4ccfd"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-2a242c05cade058abd28.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-2a242c05cade058abd28.js.map",
    "revision": "f349ca360356ecbe8c420c87af66fbae"
  },
  {
    "url": "component---src-pages-404-jsx-697470d34cbe7bbc02ad.js"
  },
  {
    "url": "component---src-pages-404-jsx-697470d34cbe7bbc02ad.js.map",
    "revision": "27df5e1eb5e27415a814bccba53da7d9"
  },
  {
    "url": "component---src-pages-404-jsx-825aba0ffbd305769f73.js"
  },
  {
    "url": "component---src-pages-404-jsx-825aba0ffbd305769f73.js.map",
    "revision": "7a2f51cdf9405a67afe916fe331f593a"
  },
  {
    "url": "component---src-pages-404-jsx-8b1d751202eb16c6e3ba.js"
  },
  {
    "url": "component---src-pages-404-jsx-8b1d751202eb16c6e3ba.js.map",
    "revision": "ddc0a08307786fe36043fe2fe67080f8"
  },
  {
    "url": "component---src-pages-index-jsx-060cf1312eb789ca03af.js"
  },
  {
    "url": "component---src-pages-index-jsx-060cf1312eb789ca03af.js.map",
    "revision": "b266a5105ba318d62e46fe76aa5ed9fe"
  },
  {
    "url": "component---src-pages-index-jsx-0e205aa87c40ab2df73b.js"
  },
  {
    "url": "component---src-pages-index-jsx-0e205aa87c40ab2df73b.js.map",
    "revision": "0279495fbb6861bb893cdb43be9d506c"
  },
  {
    "url": "component---src-pages-index-jsx-312077cc003454ee057b.js"
  },
  {
    "url": "component---src-pages-index-jsx-312077cc003454ee057b.js.map",
    "revision": "cd1841f0c800cb9780867272fd37bcc2"
  },
  {
    "url": "component---src-pages-index-jsx-a5572015e0b2e8a1e6eb.js"
  },
  {
    "url": "component---src-pages-index-jsx-a5572015e0b2e8a1e6eb.js.map",
    "revision": "a2291b3f28e9bdb7973005d4a1bd8666"
  },
  {
    "url": "component---src-pages-index-jsx-dab0a3f609a6d190b4b2.js"
  },
  {
    "url": "component---src-pages-index-jsx-dab0a3f609a6d190b4b2.js.map",
    "revision": "8840129b76cb785a20513ff4cb6ba2de"
  },
  {
    "url": "component---src-pages-index-jsx-e2e6a6568bf5c6d455ee.js"
  },
  {
    "url": "component---src-pages-index-jsx-e2e6a6568bf5c6d455ee.js.map",
    "revision": "f6317ed44cc56fea0c9e0972a5f5aebf"
  },
  {
    "url": "component---src-pages-index-jsx-f9b85d1f50a62a65918c.js"
  },
  {
    "url": "component---src-pages-index-jsx-f9b85d1f50a62a65918c.js.map",
    "revision": "d0313745d624159dc6cc93326dd1d75d"
  },
  {
    "url": "component---src-pages-index-jsx-faf8ad5010e00904e918.js"
  },
  {
    "url": "component---src-pages-index-jsx-faf8ad5010e00904e918.js.map",
    "revision": "023aa8dd55c0a98beaa58e7aa7794e83"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "303ef7f66cba383bfbeb5631f4eba929"
  },
  {
    "url": "favicons/android-chrome-192x192.png",
    "revision": "398db29cd90b062f753890b6cc31a7ff"
  },
  {
    "url": "favicons/android-chrome-512x512.png",
    "revision": "9e0c682aa336707af9f37b8ba4ea2169"
  },
  {
    "url": "framework-16534ddc5a576711dd15.js"
  },
  {
    "url": "framework-16534ddc5a576711dd15.js.map",
    "revision": "9b7b7c851931cb054d2de23213182cae"
  },
  {
    "url": "framework-dd95e8b3d258d85252e9.js"
  },
  {
    "url": "framework-dd95e8b3d258d85252e9.js.map",
    "revision": "dc018e62b3b01ec872b1a8ee8f5883f5"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "bc06dc29d835f849f098424026a6d681"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ebe54279b5e9b10d109f9eb2df55013b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4594b14e5a87eacf27fa104f809362c7"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2956e8129a28d1ca1b63ec8374ee3b4f"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "b3e7121ad8ab5b516db5e90df2370fe2"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "12bf3a3694bbc3f1f3755aafe27fa7f7"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "ab935f94fe76bebdaa856ee7a3b135f1"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "9f2dffc24f153b4a9e58915c1b2a5777"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "static/08578ba26f39f51e20b1e3c796882910/0a8d8/jergauth.png"
  },
  {
    "url": "static/08578ba26f39f51e20b1e3c796882910/56e34/jergauth.png"
  },
  {
    "url": "static/08578ba26f39f51e20b1e3c796882910/69a04/jergauth.png"
  },
  {
    "url": "static/08578ba26f39f51e20b1e3c796882910/71eb7/jergauth.png"
  },
  {
    "url": "static/08578ba26f39f51e20b1e3c796882910/8ba1e/jergauth.png"
  },
  {
    "url": "static/08578ba26f39f51e20b1e3c796882910/b3a76/jergauth.png"
  },
  {
    "url": "static/d/1496736039.json"
  },
  {
    "url": "static/d/2709607644.json"
  },
  {
    "url": "static/d/2931314059.json"
  },
  {
    "url": "static/mysql-eab0086c1fafb47fb569e4e5c79a9a94.svg"
  },
  {
    "url": "static/orange-d8e94bc2436ebb1c6012481a94f7f44b.svg"
  },
  {
    "url": "static/php-cdf5b5e1a8dd51c1130b4d4a86048b8a.svg"
  },
  {
    "url": "static/python-7d9fccaffda0db8340fe3e803fee9c83.svg"
  },
  {
    "url": "static/renault-e63db75a6f11f8f51d540cb46cd868dc.svg"
  },
  {
    "url": "styles-2c8cc638826070126d54.js"
  },
  {
    "url": "styles-2c8cc638826070126d54.js.map",
    "revision": "f53a943ef296b42ad4378b56ae11154d"
  },
  {
    "url": "styles-9b6f388623a2ec93d35f.js"
  },
  {
    "url": "styles-9b6f388623a2ec93d35f.js.map",
    "revision": "e4e962ddde29b9c4050c1bb15762662b"
  },
  {
    "url": "styles.52210d0dce00db0c3946.css"
  },
  {
    "url": "webpack-runtime-24a5b5faf4f14ec28b3a.js"
  },
  {
    "url": "webpack-runtime-24a5b5faf4f14ec28b3a.js.map",
    "revision": "23914b069c6f9442f88a3f316669c307"
  },
  {
    "url": "webpack-runtime-69c2971946aa59c25f3d.js"
  },
  {
    "url": "webpack-runtime-69c2971946aa59c25f3d.js.map",
    "revision": "a9929fa2af6d14a89df9a8288f4ff325"
  },
  {
    "url": "webpack-runtime-6b0f88545e1ef91a16f4.js"
  },
  {
    "url": "webpack-runtime-6b0f88545e1ef91a16f4.js.map",
    "revision": "d0524505b1c6787bf240739350248f61"
  },
  {
    "url": "webpack-runtime-6b1df0ec8115bb95ddb4.js"
  },
  {
    "url": "webpack-runtime-6b1df0ec8115bb95ddb4.js.map",
    "revision": "c5b5f5be3e28714fb028b52900831b04"
  },
  {
    "url": "webpack-runtime-6c92add8ea29acb6dfc3.js"
  },
  {
    "url": "webpack-runtime-6c92add8ea29acb6dfc3.js.map",
    "revision": "1802157e14735296aa61c8437482598d"
  },
  {
    "url": "webpack-runtime-a3c31ad462818a6cedf7.js"
  },
  {
    "url": "webpack-runtime-a3c31ad462818a6cedf7.js.map",
    "revision": "cf7eeea662428ed8e443a9757b3d5b66"
  },
  {
    "url": "webpack-runtime-c02d9bc0ee62a2bcefff.js"
  },
  {
    "url": "webpack-runtime-c02d9bc0ee62a2bcefff.js.map",
    "revision": "63a1880e5bc46e0cf38a9d2a5ca4e653"
  },
  {
    "url": "webpack-runtime-e717d974fbf78fabf590.js"
  },
  {
    "url": "webpack-runtime-e717d974fbf78fabf590.js.map",
    "revision": "6a441ab5219c488b76c135392a1135ac"
  },
  {
    "url": "webpack-runtime-ff4d662f09d0c9d09e4b.js"
  },
  {
    "url": "webpack-runtime-ff4d662f09d0c9d09e4b.js.map",
    "revision": "116ed66565c0d057b435df61b79423e2"
  },
  {
    "url": "webpack.stats.json",
    "revision": "e0b63672ce46869561444b34b80918b4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-b0a5fd7ac6e468a054ab.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
