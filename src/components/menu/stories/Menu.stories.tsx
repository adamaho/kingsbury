import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  Menu
} from '../Menu';

const stories = storiesOf('Menu', module);

stories.add(
  'Default',
  () => {
    return (
      <Menu>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
        <Menu.Item>Item 4</Menu.Item>
        <Menu.Item>Item 5</Menu.Item>
      </Menu>
    );
  }
);
