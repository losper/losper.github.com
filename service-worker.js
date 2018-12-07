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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "70fa031dd0220256f7fdd7d549af0d32"
  },
  {
    "url": "about/index.html",
    "revision": "9533a415e94478fb058277eb2f87af4e"
  },
  {
    "url": "assets/css/0.styles.32ec5580.css",
    "revision": "d10bfae563c33c4de8969346c0610374"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.77f06cbc.js",
    "revision": "d49900dbdf018e1b73f8422031d6ee84"
  },
  {
    "url": "assets/js/11.412ef3a7.js",
    "revision": "9ef1b69c0b7f5fa42e24814fccdd6142"
  },
  {
    "url": "assets/js/12.2cb93a05.js",
    "revision": "704da169beeaaf49a60a5be5dab3bc79"
  },
  {
    "url": "assets/js/13.6a711609.js",
    "revision": "0d5c21f5c8b09078df3e9481b875f10f"
  },
  {
    "url": "assets/js/14.34102619.js",
    "revision": "f81abbd0fff339571fc8a40de93a2edf"
  },
  {
    "url": "assets/js/2.2a1d5c6c.js",
    "revision": "871c3c27d5f482085bfb857953cb540b"
  },
  {
    "url": "assets/js/3.c2946946.js",
    "revision": "3d8a859623bfa9516fdca1dcb1be3678"
  },
  {
    "url": "assets/js/4.be4c049f.js",
    "revision": "e31690b4762db9be4245607a2b0c68e4"
  },
  {
    "url": "assets/js/5.0f26de18.js",
    "revision": "547782537e58db8c3a6b13593834f1a8"
  },
  {
    "url": "assets/js/6.a6fca171.js",
    "revision": "71a10e637ca770059912c04ba82cd99c"
  },
  {
    "url": "assets/js/7.c9624dcc.js",
    "revision": "b5412ff2a606e8004063d6619d910987"
  },
  {
    "url": "assets/js/8.ad866951.js",
    "revision": "65386ef73f2fac4e8b197997f2ed6463"
  },
  {
    "url": "assets/js/9.bed7eb85.js",
    "revision": "9caf45467566a5a0d0ebbfe38c5d1e38"
  },
  {
    "url": "assets/js/app.89ef60ff.js",
    "revision": "70bf6b3384856c2e26863104e2e9e9a4"
  },
  {
    "url": "blog/Cactus/index.html",
    "revision": "cb5a032c7992178772ef9430ef186ba9"
  },
  {
    "url": "blog/Mura/index.html",
    "revision": "4a77fe898cead612f0771d5daab9ded6"
  },
  {
    "url": "blog/Poseidon/index.html",
    "revision": "5c0194092948afaf61c71e17eb751ba3"
  },
  {
    "url": "download/index.html",
    "revision": "09113e768e6f2c297358308ef7c1f79d"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/favicon-16x161.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/favicon-32x321.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "33c4cd1217991bea802f347cd02ad7ce"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.jpg",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "passoa.png",
    "revision": "4a06b40738f687ffaf1ef8f09fd60597"
  },
  {
    "url": "project/index.html",
    "revision": "df69f49933427febfb484946d1e50902"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
