export const redirects = JSON.parse("{\"/get-started.html\":\"/article/cmynrhgi/\"}")

export const routes = Object.fromEntries([
  ["/article/cmynrhgi/", { loader: () => import(/* webpackChunkName: "article_cmynrhgi_index.html" */"D:/010/VuePress/dev/docs/.vuepress/.temp/pages/article/cmynrhgi/index.html.js"), meta: {"title":"get-started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/010/VuePress/dev/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/010/VuePress/dev/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/010/VuePress/dev/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/010/VuePress/dev/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/010/VuePress/dev/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/010/VuePress/dev/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
  ["/en/blog/", { loader: () => import(/* webpackChunkName: "en_blog_index.html" */"D:/010/VuePress/dev/docs/.vuepress/.temp/pages/en/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/en/blog/tags/", { loader: () => import(/* webpackChunkName: "en_blog_tags_index.html" */"D:/010/VuePress/dev/docs/.vuepress/.temp/pages/en/blog/tags/index.html.js"), meta: {"title":"Tags"} }],
  ["/en/blog/archives/", { loader: () => import(/* webpackChunkName: "en_blog_archives_index.html" */"D:/010/VuePress/dev/docs/.vuepress/.temp/pages/en/blog/archives/index.html.js"), meta: {"title":"Archives"} }],
  ["/en/blog/categories/", { loader: () => import(/* webpackChunkName: "en_blog_categories_index.html" */"D:/010/VuePress/dev/docs/.vuepress/.temp/pages/en/blog/categories/index.html.js"), meta: {"title":"Categories"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
