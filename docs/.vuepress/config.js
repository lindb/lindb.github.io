module.exports = {
  title: 'LinDB',
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'LinDB',
      description: 'A distributed time series database'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'LinDB',
      description: '分布式时序数据库'
    }
  },
  head: [
    ['meta', { name: 'keywords', content: 'lindb tsdb' }],
    ['link', { rel: 'shortcut icon', href: '/images/logo.png' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/font_1331329_he22yc3ekc6.css' }],
  ],
  themeConfig: {
    logo: '/images/logo.png',
    repo: 'lindb/lindb',
    sideBar: 'auto',
    sidebarDepth: 3,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'Docs', link: '/docs/quick-start' }
        ],
        sidebar: {
          '/docs/': getGuideSidebar("User Guide","Design"),
        }
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: 'Docs', link: '/zh/docs/quick-start' }
        ],
        sidebar: {
          '/zh/docs/': getGuideSidebar("使用手册","设计文档"),
        }
      }
    }
  },
  serviceWorker: true,
  evergreen: true,
}

function getGuide() {
  return [
    'test',
  ]
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'quick-start',
        'example',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'index_',
      ]
    }
  ]
}
