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
          { text: '计划', link: '/soft-exam/计划' },
          { text: '计算机系统', link: '/soft-exam/计算机系统' },
          { text: '程序设计语言', link: '/soft-exam/程序设计语言' },
          { text: '知识产权', link: '/soft-exam/知识产权' },
          { text: '数据库', link: '/soft-exam/数据库' },
          { text: '面向对象', link: '/soft-exam/面向对象' },
          { text: 'UML', link: '/soft-exam/UML' },
          { text: '设计模式', link: '/soft-exam/设计模式' },
          { text: '操作系统', link: '/soft-exam/操作系统' },
          { text: '结构化开发', link: '/soft-exam/结构化开发' },
          { text: '软件工程', link: '/soft-exam/软件工程' },
          { text: '信息安全', link: '/soft-exam/信息安全' },
        ]
      }]
    },
    outline: {
      level: [1, 6],
      label: '/* 本页目录 */'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bacuuu' }
    ],
    lastUpdated: {
      text: '最后更新于'
    }
  }
})
