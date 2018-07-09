// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Web/culturebook.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Web/culturebook.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Web/culturebook.github.io/src/pages/404.js"))
}

exports.json = {
  "layout-index.json": require("/Web/culturebook.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Web/culturebook.github.io/.cache/json/dev-404-page.json"),
  "404-html.json": require("/Web/culturebook.github.io/.cache/json/404-html.json")
}