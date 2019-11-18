import * as React from "react";

import {
  Card
} from '../Card';

import {
  Container,
  CardContent
} from './story.components';

// @ts-ignore
import mdx from './Card.mdx';

export default {
  title: 'Components|Card',
  component: Card,
  parameters: {
    docs: {
      page: mdx
    },
  },
};

export const simple = () => (
  <Container>
    <Card>
      <CardContent />
    </Card>
  </Container>
);

export const complex = () => (
  <Container>
    <Card>
      <Card.Header />
      <CardContent />
      <Card.Footer />
    </Card>
  </Container>
);

export const clickable = () => (
  <Container>
    <Card onClick={() => console.log('clicked')}>
      <CardContent />
    </Card>
  </Container>
);
