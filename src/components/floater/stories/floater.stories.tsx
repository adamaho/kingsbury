import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  Button
} from '../..';

import {
  Floater
} from '../Floater';

import {
  Input
} from '../..';

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
        triggerType="click"
        matchTriggerWidth
        triggerComponent={
          <Input placeholder={'Click to show floater'} />
        }
      >
        <FloaterContent />
      </Floater>
    </Container>
  ),
  { info: { propTablesExclude: [Container, Spacer, FloaterContent] } }
);
