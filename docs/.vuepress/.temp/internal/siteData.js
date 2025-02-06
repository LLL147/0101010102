export const siteData = JSON.parse("{\"base\":\"/VuePress/\",\"lang\":\"zh-CN\",\"title\":\"鹿耀站点\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"鹿耀站点\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"Deeryao's site\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
