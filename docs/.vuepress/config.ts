import { defineUserConfig } from '@vuepress/cli'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'
import {linTheme} from "./theme"

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
    headers:{
      level:[2,3,4]
    },
  },
  alias: {
    '@images': path.resolve(__dirname, '../assets/images'),
  },
  bundler: webpackBundler({}),
  theme: linTheme({
    logo: '/images/logo.png',
    logoDark:'/images/logo_dark.png',
    repo: 'lindb/lindb',
    docsRepo: 'lindb/lindb.github.io',
    docsBranch: 'main',
    docsDir: 'docs',
    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: navbar.en,
        sidebar: sidebar.en,
        tocNavText: 'On this page',
      },
      '/api/': {
        navbar: navbar.en,
      },
      '/zh/api/': {
        navbar: navbar.zh,
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
         // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        toggleColorMode: '切换夜间模式',
        tocNavText: '本页导航',
      },
    },
  }),
  plugins: [
    docsearchPlugin({
      appId: 'Z2Q2CCBG6Q',
      apiKey: 'a54e7b4183d11c7f6967d67dd9801ade',
      indexName: 'lindb',
      // searchParameters: {
      //   facetFilters: ['tags:v2'],
      // },
      // debug: true,
      locales: {
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
})
