/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/html-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
};
export default config;
