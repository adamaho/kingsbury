import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  Avatar
} from '../Avatar';

const stories = storiesOf('Avatar', module);

stories.add(
  'Default',
  () => (
  	<Avatar src={<div>A</div>} />
  )
);
