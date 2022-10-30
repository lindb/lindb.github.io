import { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils' 

export const linTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-lin',
    extends: defaultTheme(options),
    clientConfigFile:  path.resolve(__dirname, './client.js'),
    alias: {
      '@image': path.resolve(__dirname, '../../assets/images'),
    },
  }
}
