import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'LinDB',
  description: 'A distributed time series database',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/font_1331329_he22yc3ekc6.css' }],
  ],
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-CN',
    },
  },
  theme: defaultTheme({
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
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        sidebar: sidebar.zh,
        navbar: navbar.zh,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        toggleDarkMode: '切换夜间模式',
      },
    },
  }),
  plugins: [
    searchPlugin({
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
})