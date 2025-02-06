export const blogPostData = [{"path":"/article/cmynrhgi/","title":"get-started","categoryList":[],"createTime":"2025/02/02 21:40:27","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
