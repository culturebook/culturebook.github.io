// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Web/culturebook.github.io/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Web/culturebook.github.io/src/pages/404.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Web/culturebook.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Web/culturebook.github.io/.cache/json/dev-404-page.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Web/culturebook.github.io/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Web/culturebook.github.io/.cache/layouts/index.js")
}