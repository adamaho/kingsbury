import React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Card from '.';

const stories = storiesOf('Card', module);

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  padding: 0px 20px;
`;

const CardContent = styled.div`
  height: 110px;
`;

const CardHeader = styled.div`
`;

const CardFooter = styled.div`
  height: 50px;
`;

stories.add(
  'Default',
  () => (
    <Container>
      <Card>
        <CardContent />
      </Card>
    </Container>
  ),
  { info: { propTablesExclude: [Container, CardContent]} } 
);

stories.add(
  'Clickable',
  () => (
    <Container>
      <Card onClick={() => undefined}>
        <CardContent />
      </Card>
    </Container>
  ),
  { info: { propTablesExclude: [Container, CardContent]} } 
);

stories.add(
  'Header and Footer',
  () => (
    <Container>
      <Card
        header={<CardHeader />}
        footer={<CardFooter />}
      >
        <CardContent />
      </Card>
    </Container>
  ),
  { info: { propTablesExclude: [Container, CardContent, CardHeader, CardFooter]} } 
);
