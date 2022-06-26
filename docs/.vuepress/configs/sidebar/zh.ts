import { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '用户指南',
      children: [
        '/zh/guide/introduction.md',
        '/zh/guide/get-started.md',
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
        '/zh/guide/lql.md',
        '/zh/guide/cli.md',
        '/zh/guide/api.md',
        '/zh/guide/configuration.md',
        '/zh/guide/glossary.md',
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