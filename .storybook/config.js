import {
  addDecorator,
  addParameters,
  configure
} from '@storybook/react';

import PropTable from './components/PropTable';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import ThemeDecorator from './components/ThemeDecorator';
import yourTheme from './yourTheme';

addParameters({
  options: {
    theme: yourTheme,
    showPanel: false
  },
});

addParameters({
  docs: {
    // container: DocsContainer,
    // page: DocsPage,
    components: {
      table: PropTable
    }
  },
});

addDecorator(ThemeDecorator);

configure(require.context('../src', true, /\.stories\.(tsx|mdx)$/), module);
