import { NavbarConfig } from '@vuepress/theme-default';

export const zh: NavbarConfig = [
  {
    text: '用户指南',
    link: '/zh/guide/introduction',
  },
  {
    text: 'API',
    link: '/zh/api/openapi',
  },
  {
    text: '设计',
    link: '/zh/design/architecture',
  },
  {
    text: '社区',
    link: '/zh/community/project-layout',
  },
  {
    text: '更新日志',
    children: [
      {
        text: 'v0.x',
        link: 'https://github.com/lindb/lindb/blob/main/CHANGELOG/CHANGELOG-1.0.md',
      },
    ],
  },
]
