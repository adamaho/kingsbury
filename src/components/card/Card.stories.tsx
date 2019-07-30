import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import styled from '../../styles/theme';

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

