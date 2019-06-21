import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Notice from '.';

const stories = storiesOf('Components/Notice', module);

stories.add(
  'success',
  () => (
    <Notice
      title="This is the title"
      description="this is the description of this succeessss"
      type="success"
    >
      <div>asdfasdfasdf</div>
    </Notice>
  )
);