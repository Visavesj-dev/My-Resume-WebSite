const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/apple/Downloads/themeforest-uQARUGji-reton-react-personal-portfolio-resume/gatsby/without-strapi/src/pages/404.js"))),
  "component---src-pages-blog-details-js": hot(preferDefault(require("/Users/apple/Downloads/themeforest-uQARUGji-reton-react-personal-portfolio-resume/gatsby/without-strapi/src/pages/blog-details.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/apple/Downloads/themeforest-uQARUGji-reton-react-personal-portfolio-resume/gatsby/without-strapi/src/pages/blog.js"))),
  "component---src-pages-case-study-details-js": hot(preferDefault(require("/Users/apple/Downloads/themeforest-uQARUGji-reton-react-personal-portfolio-resume/gatsby/without-strapi/src/pages/case-study-details.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/apple/Downloads/themeforest-uQARUGji-reton-react-personal-portfolio-resume/gatsby/without-strapi/src/pages/index.js"))),
  "component---src-pages-service-details-js": hot(preferDefault(require("/Users/apple/Downloads/themeforest-uQARUGji-reton-react-personal-portfolio-resume/gatsby/without-strapi/src/pages/service-details.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/apple/Downloads/themeforest-uQARUGji-reton-react-personal-portfolio-resume/gatsby/without-strapi/src/pages/using-typescript.tsx")))
}

