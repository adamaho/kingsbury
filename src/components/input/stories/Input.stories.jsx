import React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Input from '..';

const stories = storiesOf('Input', module);

const Container = styled.div`
  max-width: 350px;
`;

const Spacer = styled.div`
  height: 20px;
`;

stories.add(
  'Default',
  () => (
    <Container>
      <Input />
    </Container>
  ),
  { info: { propTablesExclude: [Container] } }
);

stories.add(
  'Size',
  () => (
    <Container>
      <Input />
      <Spacer />
      <Input size="large" />
    </Container>
  ),
  { info: { propTablesExclude: [Container, Spacer] } }
);

stories.add(
  'Border',
  () => (
    <Container>
      <Input />
      <Spacer />
      <Input showBorder={false} />
    </Container>
  ),
  { info: { propTablesExclude: [Container, Spacer] } }
);

stories.add(
  'Label',
  () => (
    <Container>
      <Input label="This is a label" />
    </Container>
  ),
  { info: { propTablesExclude: [Container] } }
);

stories.add(
  'Error',
  () => (
    <Container>
      <Input
        label="This is a label"
        error="This is an error"
      />
    </Container>
  ),
  { info: { propTablesExclude: [Container] } }
);
