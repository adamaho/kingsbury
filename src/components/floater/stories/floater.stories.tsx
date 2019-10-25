import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Button from '../../button';
import Floater from '..';

import {
  Container,
  Spacer
} from './story.components';

const stories = storiesOf('Floater', module);

stories.add(
  'Default',
  () => (
    <Container>
      <Floater
        triggerComponent={
          <Button>
            Trigger
          </Button>
        }
      >
        asdfasdf
      </Floater>
      <Spacer />
      <Floater
        triggerComponent={
          <Button>
            Trigger
          </Button>
        }
        triggerType={'click'}
      >
        asdfasdf
      </Floater>
    </Container>
  ),
  { info: { propTablesExclude: [Container, Spacer] } }
);