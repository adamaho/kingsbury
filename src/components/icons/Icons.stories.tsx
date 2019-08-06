import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  Icon
} from '../index';

const stories = storiesOf('Icons', module);

stories.add(
  'Close',
  () => (
    <Icon.Close />
  )
);