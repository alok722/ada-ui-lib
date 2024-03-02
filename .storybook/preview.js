import { defineCustomElements } from '../dist/esm/loader';
import '!style-loader!css-loader!../src/assets/reset.css';
import '!style-loader!css-loader!../src/assets/fonts.css';
import '!style-loader!css-loader!../src/assets/theme.css';
import '!style-loader!css-loader!../src/assets/styles.css';
import '!style-loader!css-loader!../src/assets/icon-font.css';

defineCustomElements();

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
};

export default preview;
