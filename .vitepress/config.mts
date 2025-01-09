import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "记录",
  description: "前端知识",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/soft-exam': [{
        text: '软考笔记',
        items: [
          { text: '计算机系统', link: '/soft-exam/计算机系统' },
          { text: '程序设计语言', link: '/soft-exam/程序设计语言' },
          { text: '知识产权', link: '/soft-exam/知识产权' },
        ]
      }]
    },
    outline: [1, 6],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
