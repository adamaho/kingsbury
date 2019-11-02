import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  Popover
} from '../Popover';

import {
  Button
} from "../..";

const stories = storiesOf('Popover', module);

stories.add(
  'Default',
  () => (
    <Popover
      triggerComponent={
        <Button>
          Trigger
        </Button>
      }
    >
      content to render
    </Popover>
  )
);
