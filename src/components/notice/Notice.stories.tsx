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

import Notice from '.';

const stories = storiesOf('Components/Notice', module);
stories.addDecorator(withKnobs);

stories.add(
  'success',
  wInfo()(() => (
    <Notice
      title="This is the title"
      description="this is the description of this succeessss"
      type="success"
    >
      <div>asdfasdfasdf</div>
    </Notice>
  ))
);