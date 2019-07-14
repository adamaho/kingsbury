import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import styled from '../../styles/theme';

import Card from '.';

const stories = storiesOf('Card', module);

const CardContainer = styled.div`
  height: 200px;
  width: 200px;
`

stories.add(
  'Empty',
  () => (
    <CardContainer>
      <Card />
    </CardContainer>
  )
);

stories.add(
  'Header',
  () => (
    <CardContainer>
      <Card
        header={<div>hello</div>}
      />
    </CardContainer>
  )
);

stories.add(
  'Header and Footer',
  () => (
    <CardContainer>
      <Card
        header={<div>hello</div>}
        footer={<div>world</div>}
      />
    </CardContainer>
  )
);

stories.add(
  'Footer',
  () => (
    <CardContainer>
      <Card
        footer={<div>world</div>}
      />
    </CardContainer>
  )
);

stories.add(
  'All',
  () => (
    <CardContainer>
      <Card
        header={<div>hello</div>}
        footer={<div>world</div>}
      >
        to the
      </Card>
    </CardContainer>
  )
);
