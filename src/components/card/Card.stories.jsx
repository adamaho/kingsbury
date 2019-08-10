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

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  padding: 0px 20px;
`;

const CardMockContent = styled.div`
  height: 100px;
`;

stories.add(
  'Default',
  () => (
    <Container>
      <Card style={{ height: '100px' }}>
        aasdfasdf
      </Card>
      <Card>
        asdfasdf
      </Card>
      <Card>
        asdfasdf
      </Card>
      <Card>
        asdfasdf
      </Card>
      <Card>
        asdfasdf
      </Card>
      <Card>
        asdfasdf
      </Card>
    </Container>
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

