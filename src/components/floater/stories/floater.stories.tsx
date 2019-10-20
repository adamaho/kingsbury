import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Button from '../../button';
import Floater from '..';

const stories = storiesOf('Floater', module);

stories.add(
  'Default',
  () => (
    <Floater
      triggerComponent={
        <Button>
          Trigger
        </Button>
      }
    >
      asdfasdf
    </Floater>
  )
);