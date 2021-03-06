// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-details-js": () => import("./../../../src/pages/blog-details.js" /* webpackChunkName: "component---src-pages-blog-details-js" */),
  "component---src-pages-blog-js": () => import("./../../../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-case-study-details-js": () => import("./../../../src/pages/case-study-details.js" /* webpackChunkName: "component---src-pages-case-study-details-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-service-details-js": () => import("./../../../src/pages/service-details.js" /* webpackChunkName: "component---src-pages-service-details-js" */),
  "component---src-pages-using-typescript-tsx": () => import("./../../../src/pages/using-typescript.tsx" /* webpackChunkName: "component---src-pages-using-typescript-tsx" */)
}

