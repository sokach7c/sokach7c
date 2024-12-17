import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人杂货铺",
  description: "个人博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      } 
    ],

    footer: {
      message: '备案号：<a href="https://beian.miit.gov.cn/">渝ICP备2024044428号-1</a> | 公安备案号：<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50010602000001">备案中....</a>',
      copyright: 'Copyright © 2024'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
