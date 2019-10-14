import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Menu from '..';

const Container = styled.div`
  max-width: 400px;
`;

const stories = storiesOf('Menu', module);

stories.add(
  'Default',
  () => (
    <Container>
      <Menu onClick={(key: any) => console.log(key)}>
        <Menu.Item itemKey="asdfasdf">asdf</Menu.Item>
        <Menu.Item itemKey="asdfb">asdf</Menu.Item>
        <Menu.Item itemKey="asdfc">asdf</Menu.Item>
        <Menu.Item itemKey="asdfs">asdf</Menu.Item>
      </Menu>
    </Container>
  )
);