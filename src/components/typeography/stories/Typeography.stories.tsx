import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  Text
} from '..';

const stories = storiesOf('Typeography', module);

stories.add(
  'H1',
  () => (
    <Text>This is an h1</Text>
  )
);