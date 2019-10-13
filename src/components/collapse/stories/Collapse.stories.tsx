import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Collapse from '..';

const stories = storiesOf('Collapse', module);

const Container = styled.div`
  max-width: 400px;
`;

const CollapseContent = styled.div`
  height: 200px;
`;

stories.add(
  'Default',
  () => (
    <Container>
      <Collapse
        header="Header"
        onChange={() => console.log('change')}
      >
        <CollapseContent />
      </Collapse>
    </Container>
  )
);
