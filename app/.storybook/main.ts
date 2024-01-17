// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs

module.exports = {
  core: { builder: 'webpack5' },

  stories: ['../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  staticDirs: ['../src/assets'],

  framework: '@storybook/react-webpack5',

  addons: ['@storybook/addon-essentials', '@nx/react/plugins/storybook'],

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpackFinal: async (config: any, { configType }: any) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js

    // add your own webpack tweaks if needed

    return config;
  },
};
