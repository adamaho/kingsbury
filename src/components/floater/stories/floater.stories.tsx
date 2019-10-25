import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Button from '../../button';
import Input from '../../input';
import Floater from '..';

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
  { info: { propTablesExclude: [Container, Spacer, Button, FloaterContent] } }
);

stories.add(
  'With Input',
  () => (
    <Container>
      <Floater
        triggerComponent={
          <Input>
            Trigger
          </Input>
        }
        triggerType="contextMenu"
      >
        <FloaterContent />
      </Floater>
    </Container>
  ),
  { info: { propTablesExclude: [Container, Spacer, FloaterContent] } }
);