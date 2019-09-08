import React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Accordian from '..';

const stories = storiesOf('Accordian', module);

stories.add(
  'Default',
  () => (
    <div>
      <Accordian>
        <Accordian.Item />
        <Accordian.Item />
        <Accordian.Item />
        <Accordian.Item />
        <Accordian.Item />
        <Accordian.Item />
        <Accordian.Item />
        <Accordian.Item />
        <Accordian.Item />
      </Accordian>
    </div>
  )
);
