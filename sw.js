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
    "revision": "67ec91783d2c09e8a40c013183878dd9"
  },
  {
    "url": "404/index.html",
    "revision": "90c31f92c089b97a19bc6b48e0066493"
  },
  {
    "url": "app-b0a5fd7ac6e468a054ab.js"
  },
  {
    "url": "app-b0a5fd7ac6e468a054ab.js.map",
    "revision": "80543847020118e2a95c9054fa971015"
  },
  {
    "url": "chunk-map.json",
    "revision": "2238954655b0571e6611c5ac99dad709"
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
    "url": "component---src-pages-index-jsx-f5310efad54303e32131.js"
  },
  {
    "url": "component---src-pages-index-jsx-f5310efad54303e32131.js.map",
    "revision": "326cc2f88e98eb44d17ec80074e35fc0"
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
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "03f6973d303078ef16510eeb1e02fd1c"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ebe54279b5e9b10d109f9eb2df55013b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3009399e18a2e844cab20594a789d4e7"
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
    "revision": "147870e58d7e7f4a3a7e569740cfa793"
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
    "url": "styles.d3f39ce907d8cf20678f.css"
  },
  {
    "url": "webpack-runtime-524eb3653ac6cd7497d2.js"
  },
  {
    "url": "webpack-runtime-524eb3653ac6cd7497d2.js.map",
    "revision": "f226792b4b2ebb67ebe07622a48e24d5"
  },
  {
    "url": "webpack.stats.json",
    "revision": "9a7a06ab2a425811ad3d252ae9a9afb4"
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
