import { NavbarConfig } from '@vuepress/theme-default';

export const en: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/introduction',
  },
  {
    text: 'API',
    link: '/api/',
  },
  {
    text: 'Design',
    link: '/design/architecture',
  },
  {
    text: 'Community',
    link: '/community/project-layout',
  },
  {
    text: 'Changelog',
    children: [
      {
        text: 'v0.x',
        link: 'https://github.com/lindb/lindb/blob/main/CHANGELOG/CHANGELOG-1.0.md',
      },
    ],
  },
]
