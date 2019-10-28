import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
	Button
} from '../../button';

import {
	Floater
} from '..';

import {
	Input
} from '../../input';

import {
  Container,
  Spacer,
  FloaterContent
} from './story.components';

const stories = storiesOf('Floater', module);

stories.add(
  'With Button',
  () => (
    <Container>
      <Floater
        triggerComponent={
          <Button>
            Hover Me
          </Button>
        }
      >
        <FloaterContent />
      </Floater>
      <Spacer />
      <Floater
        triggerComponent={
          <Button>
            Click Me
          </Button>
        }
        triggerType={'click'}
      >
        <FloaterContent />
      </Floater>
    </Container>
  ),
  { info: { propTablesExclude: [Container, Spacer, FloaterContent] } }
);

stories.add(
  'With Input',
  () => (
    <Container>
      <Floater
        triggerComponent={
          <Input placeholder={'Click to show floater'} />
        }
        triggerType="contextMenu"
      >
        <FloaterContent />
      </Floater>
    </Container>
  ),
  { info: { propTablesExclude: [Container, Spacer, FloaterContent] } }
);
