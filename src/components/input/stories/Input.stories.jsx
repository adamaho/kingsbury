import React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Input from '..';

import {
  Container,
  Spacer
} from './story.components';

const stories = storiesOf('Input', module);

stories.add(
  'Default',
  () => (
    <Container>
      <Input placeholder="placeholder" />
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
      <Input placeholder="Input with border" />
      <Spacer />
      <Input borderType="bottom" placeholder="Input with bottom border" />
      <Spacer />
      <Input borderType="none" placeholder="Input without border" />
    </Container>
  ),
  { info: { propTablesExclude: [Container, Spacer] } }
);

stories.add(
  'Label',
  () => (
    <Container>
      <Input label="This is a label" value="This is the value of the input" />
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
