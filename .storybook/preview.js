/** @type { import('@storybook/react').Preview } */
// .storybook/preview.js

export const parameters = {
  actions: {},
  controls: {
    matchers: {
      color: /(background|color)$/i,
    },
  },
};
