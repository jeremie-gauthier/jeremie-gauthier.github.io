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
    "url": "app-4de156b068d56be09231.js"
  },
  {
    "url": "app-4de156b068d56be09231.js.map",
    "revision": "2a6ae0adcd61a6324e21d15e44459fb4"
  },
  {
    "url": "app-78e1e22606e582d6fce8.js"
  },
  {
    "url": "app-78e1e22606e582d6fce8.js.map",
    "revision": "2a74bd31aa4cadeb92f3080aac409538"
  },
  {
    "url": "app-e3274d3d92a3de553c01.js"
  },
  {
    "url": "app-e3274d3d92a3de553c01.js.map",
    "revision": "f4a64935c72da5395af199ffce30abf4"
  },
  {
    "url": "chunk-map.json",
    "revision": "ba64d9336ea05f3c6d996292b43ba821"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-2a242c05cade058abd28.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-2a242c05cade058abd28.js.map",
    "revision": "f349ca360356ecbe8c420c87af66fbae"
  },
  {
    "url": "component---src-pages-index-jsx-05ac5baf75adb17f3f53.js"
  },
  {
    "url": "component---src-pages-index-jsx-05ac5baf75adb17f3f53.js.map",
    "revision": "9d81939c29ccfff1e87dd76a0656df4c"
  },
  {
    "url": "component---src-pages-index-jsx-6f6f20eb2003c074ad25.js"
  },
  {
    "url": "component---src-pages-index-jsx-6f6f20eb2003c074ad25.js.map",
    "revision": "57400084d5dce1eefc3cdd7bd414edae"
  },
  {
    "url": "component---src-pages-index-jsx-c193fa561f2a5643d753.js"
  },
  {
    "url": "component---src-pages-index-jsx-c193fa561f2a5643d753.js.map",
    "revision": "9dae9a5a2e705716680af9cabba36b3e"
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
    "url": "framework-4d07bacc3808af3f4337.js"
  },
  {
    "url": "framework-4d07bacc3808af3f4337.js.map",
    "revision": "c32b27417e04f2e9325d67b18bfdeab7"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "f9e4e1fd45893cc541298a4f3cf3f401"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "8e9815d23c88791846ec7941222b1d76"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "fa0878d99e48a374cb18a436ddf878c5"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "eb4f257960348b8185083da708502fa6"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "4a23314b933db3272da84b0fe83c157a"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "d932b4279d483e8cd4bebc5066dca421"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "5525e5350da2b44fe774e767dc480d79"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "2dcfb5641908190c31c8589558d18055"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "1db5685c0fe6fed603db0e416f9f210e"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8d8131e5fb05bcf91f39c337b736b9c2"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "edc8920f873f1c062459b87e6902c495"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a12497805cb9cd81e26ccafaee776b5b"
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
    "url": "static/08578ba26f39f51e20b1e3c796882910/203d5/jergauth.png"
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
    "url": "static/08578ba26f39f51e20b1e3c796882910/a6761/jergauth.png"
  },
  {
    "url": "static/08578ba26f39f51e20b1e3c796882910/b3a76/jergauth.png"
  },
  {
    "url": "static/08578ba26f39f51e20b1e3c796882910/c1598/jergauth.png"
  },
  {
    "url": "static/d/1362215470.json"
  },
  {
    "url": "static/d/1538351464.json"
  },
  {
    "url": "static/d/2509477200.json"
  },
  {
    "url": "static/d/2931314059.json"
  },
  {
    "url": "static/mysql-eab0086c1fafb47fb569e4e5c79a9a94.svg"
  },
  {
    "url": "styles-dd3841a4888192e20843.js"
  },
  {
    "url": "styles-dd3841a4888192e20843.js.map",
    "revision": "a5fc730c68ada4ba92aa9930445e12f8"
  },
  {
    "url": "styles-faa02be05049b5d16183.js"
  },
  {
    "url": "styles-faa02be05049b5d16183.js.map",
    "revision": "406a3d648a660e734ededb3c832083ee"
  },
  {
    "url": "styles.999e9c91fed101248f24.css"
  },
  {
    "url": "webpack-runtime-0e5389702918c3498daf.js"
  },
  {
    "url": "webpack-runtime-0e5389702918c3498daf.js.map",
    "revision": "77d0507f455cf651c19ecb7bb8344554"
  },
  {
    "url": "webpack-runtime-0eb2f76655f7549985ac.js"
  },
  {
    "url": "webpack-runtime-0eb2f76655f7549985ac.js.map",
    "revision": "8acddc0feee1c0924cf6d3acaed671fe"
  },
  {
    "url": "webpack-runtime-6971c800c038f59aab21.js"
  },
  {
    "url": "webpack-runtime-6971c800c038f59aab21.js.map",
    "revision": "65d96da6753272d177b2d644068bd165"
  },
  {
    "url": "webpack.stats.json",
    "revision": "8b383c8fb646887207f26ea0a7410b8e"
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
  if (!resources || !(await caches.match(`/app-78e1e22606e582d6fce8.js`))) {
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
