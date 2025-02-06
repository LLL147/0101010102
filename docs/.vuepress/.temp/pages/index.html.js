import comp from "D:/010/VuePress/dev/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"config\":[{\"type\":\"banner\",\"banner\":\"https://api.pengzhanbo.cn/wallpaper/bing\",\"bannerMask\":{\"light\":0.1,\"dark\":0.3},\"hero\":{\"name\":\"鹿耀\",\"tagline\":\"The harder you work, the luckier you will be\",\"text\":\"即使慢，驰而不息，纵会落后，纵会失败，但必须能够到达他所向的目标。\",\"actions\":[{\"text\":\"我的文档\",\"link\":\"/blog/\",\"theme\":\"brand\"},{\"text\":\"Github\",\"link\":\"https://github.com/LLL147?tab=repositories\",\"theme\":\"alt\"},{\"text\":\"我的博客\",\"link\":\"https://xn--9krq6q3oxqvijn2b.luyao.us.kg\",\"theme\":\"brand\"}]}}],\"gitInclude\":[],\"pageLayout\":\"home\"},\"headers\":[],\"readingTime\":{\"minutes\":0.29,\"words\":86},\"filePathRelative\":\"README.md\",\"categoryList\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
