import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  Card
} from '..';

import {
  Container,
  CardContent
} from './story.components';

const stories = storiesOf('Card', module);

stories.add(
  'Default',
  () => (
    <Container>
      <Card>
        <Card.Header />
        <CardContent />
        <Card.Footer />
      </Card>
    </Container>
  ),
  { info: { propTablesExclude: [Container, CardContent] } }
);

stories.add(
  'Clickable',
  () => (
    <Container>
      <Card onClick={() => undefined}>
        <Card.Header />
        <CardContent />
        <Card.Footer />
      </Card>
    </Container>
  ),
  { info: { propTablesExclude: [Container, CardContent] } }
);
