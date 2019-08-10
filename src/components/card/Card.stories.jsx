import React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Card from '.';

const stories = storiesOf('Card', module);

const TestContent = styled.div`
  height: 110px;
`;

stories.add(
  'Default',
  () => (
    <Card>
      asdfasdf
    </Card>
  )
);

stories.add(
  'With Click',
  () => (
    <Card style={{ borderLeft: '1px solid red' }} onClick={() => console.log('asdfasdf')}>
      <TestContent>
        adasd
      </TestContent>
    </Card>
  )
);

