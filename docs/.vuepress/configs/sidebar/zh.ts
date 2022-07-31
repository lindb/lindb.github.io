import { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '用户指南',
      children: [
        '/zh/guide/introduction.md',
        '/zh/guide/get-started.md',
        '/zh/guide/concept.md',
        {
          text: 'Admin Console',
          collapsible: true,
          children: [
            '/zh/guide/admin-ui/README.md',
            '/zh/guide/admin-ui/overview.md',
            '/zh/guide/admin-ui/search.md',
            '/zh/guide/admin-ui/explore.md',
            '/zh/guide/admin-ui/monitoring.md',
            '/zh/guide/admin-ui/metadata.md',
          ],
        },
        '/zh/guide/lin-ql.md',
        {
          text: 'Client',
          collapsible: true,
          children: [
            '/zh/guide/client/README.md',
            '/zh/guide/client/go.md',
          ],
        },
        '/zh/guide/cli.md',
        '/zh/guide/api.md',
        '/zh/guide/self-monitor.md',
        '/zh/guide/configuration.md',
      ],
    },
  ],
  '/zh/design/': [
    {
      text: '设计',
      children: [
        '/zh/design/architecture.md',
        '/zh/design/coordinator.md',
        '/zh/design/query.md',
        '/zh/design/replication.md',
        '/zh/design/storage.md',
        '/zh/design/memory.md',
        '/zh/design/index_.md',
      ],
    },
  ],
  '/zh/community/': [
    {
      text: '社区',
      children: [
        '/zh/community/project-layout.md',
      ],
    },
  ],
}