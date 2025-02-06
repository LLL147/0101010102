import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
export default defineUserConfig({                            
  //base: '/VuePress/',
  lang: 'zh-CN',
  title: '鹿耀站点',
  locales: {
    '/': { lang: 'zh-CN', title: '鹿耀站点' }, // 简体中文
    '/en/': { lang: 'en-US', title: "Deeryao's site" }, // English
  },
  theme: plumeTheme({
    locales: {
      '/': {
        navbar: [
          { text: '首页', link: '/' },
          { text: '文档', link: '/blog/' },
          { text: '标签', link: '/blog/tags/' },
          { text: '归档', link: '/blog/archives/' }
        ]
      },
      '/en/': {
        navbar: [
          { text: '首页', link: '/en/' },
          { text: '文档', link: '/en/blog/' },
          { text: '标签', link: '/en/blog/tags/' },
          { text: '归档', link: '/en/blog/archives/' }
        ]
      }
    }
  }),
  bundler: viteBundler(),
})
