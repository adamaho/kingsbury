import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Select from '..';

const Container = styled.div`
  width: 400px;
`;

const stories = storiesOf('Select', module);

stories.add(
  'Default',
  () => {
    return (
      <Container>
        <Select />
      </Container>
    );
  }
);