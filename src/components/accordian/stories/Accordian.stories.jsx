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
      <Accordian onChange={(selectedKeys) => console.log(selectedKeys)}>
        <Accordian.Item itemKey="1" />
        <Accordian.Item itemKey="2" />
        <Accordian.Item itemKey="3" />
      </Accordian>
    </div>
  )
);
