import { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/overview.md',
        '/guide/installation.md',
        {
          text: 'Admin Console',
          collapsible: true,
          children: [
            '/guide/admin-ui/README.md',
            '/guide/admin-ui/overview.md',
            '/guide/admin-ui/search.md',
            '/guide/admin-ui/explore.md',
            '/guide/admin-ui/monitoring.md',
            '/guide/admin-ui/metadata.md',
          ],
        },
        '/guide/admin-ui.md',
        '/guide/api.md',
        '/guide/sql.md',
        '/guide/configuration.md',
      ],
    },
  ],
  '/design/': [
    {
      text: 'Design',
      children: [
        '/design/architecture.md',
        '/design/coordinator.md',
        '/design/query.md',
        '/design/replication.md',
        '/design/storage.md',
        '/design/memory.md',
        '/design/index_.md',
      ],
    },
  ],
  '/community/': [
    {
      text: 'Community',
      children: [
        '/community/project-layout.md',
      ],
    },
  ],
}