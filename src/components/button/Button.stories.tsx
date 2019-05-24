import * as React from 'react';

import {
  action
} from '@storybook/addon-actions';

import {
  boolean,
  text,
  withKnobs
} from '@storybook/addon-knobs';

import {
  storiesOf
} from '@storybook/react';

import {
  wInfo
} from '../../utils/wInfo'

import Button from '.';

const stories = storiesOf('Components/Button', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  wInfo()(() => (
    <Button
      disabled={boolean('Disabled', false)}
      onClick={action('onClick')}
    >
      {text('Label', 'Default')}
    </Button>
  ))
);

stories.add(
  'ghost',
  wInfo()(() => (
    <Button
      type={'ghost'}
      disabled={boolean('Disabled', false)}
      onClick={action('onClick')}
    >
      {text('Label', 'Default')}
    </Button>
  ))
);