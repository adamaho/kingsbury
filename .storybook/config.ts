import {
  addDecorator,
  addParameters,
  configure
} from '@storybook/react';

import themeDecorator from './themeDecorator';

import yourTheme from './yourTheme';

addParameters({
  options: {
    theme: yourTheme,
  },
});

const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach((filename: string) => req(filename));
}

addDecorator(themeDecorator);

configure(loadStories, module);