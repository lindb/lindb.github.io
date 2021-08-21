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
    docsRepo: 'lindb/lindb.github.io',
    docsBranch: 'dev',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'Docs', link: '/docs/introduction/overview' },
          { text: 'Community', link: '/docs/community/contributor-guide' }
        ],
        sidebar: {
          '/docs/community/':  getCommunity(),
          '/docs/': getGuideSidebar("Concept", "User Guide", "Design"),
        }
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最后更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '文档', link: '/zh/docs/introduction/overview' },
          { text: '社区', link: '/zh/docs/community/contributor-guide' }
        ],
        sidebar: {
          '/zh/docs/community/': getCommunity(),
          '/zh/docs/': getGuideSidebar("简介", "概念", "设计文档"),
        }
      }
    }
  },
  serviceWorker: true,
  evergreen: true,
  plugins: {
    '@vuepress/medium-zoom': true,
    '@vuepress/back-to-top': true,
  }
}

function getCommunity() {
  return [
    'contributor-guide',
  ]
}

function getGuideSidebar(groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'introduction/overview',
        'introduction/installation',
        'introduction/comparision',
        'introduction/roadmap',
     ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'concept/datamodel',
        'concept/dtomodel',
        'concept/fieldtype',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'design/architecture',
        'design/coordinator',
        'design/replication',
        'design/query',
        'design/memory',
        'design/index_',
        'design/storage',
      ]
    }
  ]
}
