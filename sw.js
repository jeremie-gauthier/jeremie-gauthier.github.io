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
    "url": "app-b882c9b118648b6d715e.js"
  },
  {
    "url": "app-b882c9b118648b6d715e.js.map",
    "revision": "3ae74316a811ad1a39ead5407d404af0"
  },
  {
    "url": "chunk-map.json",
    "revision": "93feb6cd30546de0c4f0dd41c1396160"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-2a242c05cade058abd28.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-2a242c05cade058abd28.js.map",
    "revision": "f349ca360356ecbe8c420c87af66fbae"
  },
  {
    "url": "component---src-pages-index-jsx-556051cd4120bcfcee11.js"
  },
  {
    "url": "component---src-pages-index-jsx-556051cd4120bcfcee11.js.map",
    "revision": "9e275e4b58066cb5b6cad9dd5cd7c564"
  },
  {
    "url": "component---src-pages-index-jsx-cf16dae3d45a7aaf6f73.js"
  },
  {
    "url": "component---src-pages-index-jsx-cf16dae3d45a7aaf6f73.js.map",
    "revision": "89d1afc8b2816a8cc826ba0ac9ec94ae"
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
    "url": "framework-43898561dafbdf32aefd.js"
  },
  {
    "url": "framework-43898561dafbdf32aefd.js.map",
    "revision": "2218f80eaf3faddfa530f220cbfbd9e5"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "e2612d4b3adbf76b0a07f3895c48eccf"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8d8131e5fb05bcf91f39c337b736b9c2"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2a3c63c0fc405657e1e33634f872fbe8"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "5c6caa43b554ea78dd2cf39040f238ba"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "83566cfa5334a06679b331cb46933637"
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
    "url": "styles-faa02be05049b5d16183.js"
  },
  {
    "url": "styles-faa02be05049b5d16183.js.map",
    "revision": "406a3d648a660e734ededb3c832083ee"
  },
  {
    "url": "styles.6618547e3f48db51def8.css"
  },
  {
    "url": "webpack-runtime-5efa978b724c53a509d7.js"
  },
  {
    "url": "webpack-runtime-5efa978b724c53a509d7.js.map",
    "revision": "6f8be8fef8d74d57701aba9cc3361802"
  },
  {
    "url": "webpack-runtime-d317a7a5cc97acc17aae.js"
  },
  {
    "url": "webpack-runtime-d317a7a5cc97acc17aae.js.map",
    "revision": "4ac64e4e26842587e71b5c424c1e94eb"
  },
  {
    "url": "webpack.stats.json",
    "revision": "4b165417b3f3dfd6e4242d99f34b6d61"
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
  if (!resources || !(await caches.match(`/app-b882c9b118648b6d715e.js`))) {
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
