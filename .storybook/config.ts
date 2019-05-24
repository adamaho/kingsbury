import {
  setOptions
} from '@storybook/addon-options';

import {
  addDecorator,
  addParameters,
  configure
} from '@storybook/react';

import themeDecorator from './themeDecorator';

import yourTheme from './yourTheme';

setOptions({
  addonPanelInRight: true,
  name: "Kingsbury",
});

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