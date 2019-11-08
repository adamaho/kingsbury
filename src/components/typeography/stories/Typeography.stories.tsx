import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  Text
} from '../Text';

const stories = storiesOf('Typeography', module);

stories.add(
  'H1',
  () => (
    <Text textStyle={'h1'}>This is an h1</Text>
  )
);
