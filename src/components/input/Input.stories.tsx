import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Input from '.';

const stories = storiesOf('Input', module);

stories.add(
  'Default',
  () => (
    <div>
      <Input />
    </div>
  )
);

stories.add(
  'Disabled',
  () => (
    <div>
      <Input disabled />
    </div>
  )
);

