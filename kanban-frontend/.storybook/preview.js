import { create } from '@storybook/theming';
import '../src/assets/main.css'

const light = create({
  base: "light",
  appBg: '#F4F7FD',
  appContentBg: '#F4F7FD'
})

const dark = create({
  base: "dark",
  appBg: '#20212C',
  appContentBg: '#20212C'

})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark,
    light,
    stylePreview: true
  }
}
