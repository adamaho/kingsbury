import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Select from '..';

const Container = styled.div`
  max-width: 400px;
`;

const stories = storiesOf('Select', module);

stories.add(
  'Default',
  () => (
    <Container>
      <Select />
    </Container>
  )
)