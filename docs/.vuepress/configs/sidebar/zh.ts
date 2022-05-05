import { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '用户指南',
      children: [
        '/zh/guide/overview.md',
        '/zh/guide/installation.md',
        '/zh/guide/admin-ui.md',
        '/zh/guide/api.md',
        '/zh/guide/sql.md',
        '/zh/guide/cli.md',
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
        '/zh/design/storage.md',
        '/zh/design/replication.md',
        '/zh/design/memory.md',
      ],
    },
  ],
}