import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Card from '.';

const stories = storiesOf('Card', module);

stories.add(
  'Default',
  () => (
    <Card>
      asdfasdf
    </Card>
  )
);
