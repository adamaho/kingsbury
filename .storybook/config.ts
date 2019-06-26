import {
  addDecorator,
  addParameters,
  configure
} from '@storybook/react';

import {
  withInfo
} from '@storybook/addon-info';

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

addDecorator(withInfo({
  inline: true, // where the components are inlined
  source: false,
  excludedPropTypes: ['theme'],
  styles: {
    header: {
      h1: {
        fontFamily: '"Nunito" sans-serif'
      },
    },
  }, 
}));

addDecorator(themeDecorator);

configure(loadStories, module);