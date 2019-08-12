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
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      gridGap: '10px',
      padding: '0px 20px'
    }}
    >
      <Card style={{ height: '100px' }}>
        aasdfasdf
      </Card>
      <Card style={{ height: '100px' }}>
        asdfasdf
      </Card>
      <Card style={{ height: '100px' }}>
        asdfasdf
      </Card>
      <Card style={{ height: '100px' }}>
        asdfasdf
      </Card>
      <Card style={{ height: '100px' }}>
        asdfasdf
      </Card>
      <Card style={{ height: '100px' }}>
        asdfasdf
      </Card>
    </div>
  )
);

stories.add(
  'Clickable',
  () => (
    <Card style={{ borderLeft: '1px solid red' }} onClick={() => console.log('asdfasdf')}>
      <TestContent>
        adasd
      </TestContent>
    </Card>
  )
);
