import { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/introduction.md',
        '/guide/get-started.md',
        '/guide/concept.md',
        {
          text: 'Admin Console',
          children: [
            '/guide/admin-ui/README.md',
            '/guide/admin-ui/overview.md',
            '/guide/admin-ui/search.md',
            '/guide/admin-ui/explore.md',
            '/guide/admin-ui/monitoring.md',
            '/guide/admin-ui/metadata.md',
          ],
        },
        '/guide/lin-ql.md',
        {
          text: 'Client',
          children: [
            '/guide/client/README.md',
            '/guide/client/go.md',
            '/guide/client/java.md',
          ],
        },
        '/guide/cli.md',
        '/guide/self-monitor.md',
        '/guide/configuration.md',
      ],
    },
  ],
  '/api/': [
    {
      text: 'API',
      children: [
        '/api/README.md',
        '/api/lin-ql.md',
        '/api/write.md',
        '/api/state.md',
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
