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
  Spacer
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
        asdfasdf
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
        asdfasdf
      </Floater>
    </Container>
  ),
  { info: { propTablesExclude: [Container, Spacer, Button] } }
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
        triggerType="click"
      >
        asdfasdf
      </Floater>
    </Container>
  ),
  { info: { propTablesExclude: [Container, Spacer] } }
);