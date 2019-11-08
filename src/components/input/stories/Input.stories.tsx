import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  Input
} from '../Input';

import {
  Container,
  Spacer
} from './story.components';

import {
  SVGClose
} from '../../icons';

const stories = storiesOf('Input', module);

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
  'Disabled',
  () => (
    <Container>
      <Input onChange={(e) => console.log(e.target.value)} placeholder="placeholder" disabled/>
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
      <Input inputSize="large" />
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

stories.add(
  'Prefix and Suffix',
  () => (
    <Container>
      <Input placeholder="Input with border" inputPrefix={<SVGClose />} inputSuffix={<SVGClose />}/>
      <Spacer />
      <Input borderType="bottom" placeholder="Input with bottom border" inputPrefix={<SVGClose />} inputSuffix={<SVGClose />}/>
      <Spacer />
      <Input inputSize={'large'} borderType="none" placeholder="Input without border" inputPrefix={<SVGClose />} inputSuffix={<SVGClose />}/>
    </Container>
  ),
  { info: { propTablesExclude: [Container] } }
);

stories.add(
  'Read Only',
  () => (
    <Container>
      <Input placeholder="I am readonly" readOnly />
    </Container>
  ),
  { info: { propTablesExclude: [Container] } }
);

