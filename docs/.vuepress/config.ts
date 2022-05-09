import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'
import { localTheme } from './theme'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

// layout ref: https://github.com/gavinliu6/vuepress-theme-mix/

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'LinDB',
  description: 'A distributed time series database',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/font_1331329_he22yc3ekc6.css' }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
  ],
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-CN',
    },
  },
  markdown:{
    extractHeaders:{
      level:[2,3,4,5,6,7]
    },
  },
  theme: localTheme({
    logo: '/images/logo.png',
    logoDark:'/images/logo_dark.png',
    repo: 'lindb/lindb',
    docsRepo: 'lindb/lindb.github.io',
    docsBranch: 'dev',
    docsDir: 'docs',
    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: navbar.en,
        sidebar: sidebar.en,
        tocNavText: 'On this page',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        sidebar: sidebar.zh,
        navbar: navbar.zh,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        toggleDarkMode: '切换夜间模式',
        tocNavText: '本页导航',
      },
    },
  }),
  plugins: [
    searchPlugin({
    }),
    // mediumZoomPlugin({}),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
})