import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  H1,
  H2,
  H3,
  H4,
  P
} from '..';

const stories = storiesOf('Typeography', module);

stories.add(
  'H1',
  () => (
    <H1>Header</H1>
  )
);

stories.add(
  'H2',
  () => (
    <H2>Header 2</H2>
  )
);

stories.add(
  'H3',
  () => (
    <H3>Header 3</H3>
  )
);

stories.add(
  'H4',
  () => (
    <H4>Header 4</H4>
  )
);

stories.add(
  'P',
  () => (
    <P>This is a paragraph</P>
  )
);
