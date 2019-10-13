import {
  addDecorator,
  addParameters,
  configure
} from '@storybook/react';

import {
  withInfo
} from '@storybook/addon-info';

import yourTheme from './yourTheme';
import PropTable from '../src/storybook/PropTable';

addParameters({
  options: {
    theme: yourTheme,
    showPanel: false
  },
});

function loadStories() {
  const req = require.context('../src/components/typeography', true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo({
  inline: true,
  excludedPropTypes: ['theme', 'style'],
  source: false,
  styles: (stylesheet) => ({
    ...stylesheet,
    infoBody: {
      ...stylesheet.infoBody,
      fontFamily: 'unset',
    },
    propTableHead: {
      display: 'none'
    },
    source: {
      h1: {
        display: 'none'
      },
    },
  }),
  TableComponent: PropTable
}));

configure(loadStories, module);