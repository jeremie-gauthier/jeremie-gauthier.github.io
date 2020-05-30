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
    "revision": "234a59f210ce27d483d4763e2627f6b4"
  },
  {
    "url": "404/index.html",
    "revision": "441668b31a7bd680e36c80a973bf6131"
  },
  {
    "url": "app-744abaf4dd366ceeadd0.js"
  },
  {
    "url": "app-744abaf4dd366ceeadd0.js.map",
    "revision": "fdd84e3c1a63b8fdd865e27bcffb65d6"
  },
  {
    "url": "chunk-map.json",
    "revision": "056355bb8ad06f39a206a5bccf5e9d7a"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-235e751eb037707e5d1a.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-235e751eb037707e5d1a.js.map",
    "revision": "916f682476dd993162282a2582b4ccfd"
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
    "revision": "c01c86ed3f90043ddf219ddab0936038"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8d8131e5fb05bcf91f39c337b736b9c2"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "994f1f0f98c4ce040e3afa73a2fa2536"
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
    "revision": "09d6814d0a5adde9e9a3dcd5c3538e99"
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
    "url": "static/d/2709607644.json"
  },
  {
    "url": "static/d/2931314059.json"
  },
  {
    "url": "static/mysql-eab0086c1fafb47fb569e4e5c79a9a94.svg"
  },
  {
    "url": "styles-9b6f388623a2ec93d35f.js"
  },
  {
    "url": "styles-9b6f388623a2ec93d35f.js.map",
    "revision": "e4e962ddde29b9c4050c1bb15762662b"
  },
  {
    "url": "styles.c1e687aa900cb9932ef3.css"
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
    "url": "webpack.stats.json",
    "revision": "73d939f0cc1b7e1ee84336b1dc6d235a"
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
  if (!resources || !(await caches.match(`/app-744abaf4dd366ceeadd0.js`))) {
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
