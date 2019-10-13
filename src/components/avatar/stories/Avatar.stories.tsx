import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Avatar from '..';

const stories = storiesOf('Avatar', module);

stories.add(
  'Default',
  () => (
    <div>
      <Avatar src={<div>A</div>} />
    </div>
  )
);
