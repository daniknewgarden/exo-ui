import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

const isDark =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

addons.setConfig({
  theme: isDark ? themes.dark : themes.light
})
