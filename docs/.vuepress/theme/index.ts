import { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export const localTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    },
    alias: {
      '@image': path.resolve(__dirname, '../../assets/images'),
    },
  }
}