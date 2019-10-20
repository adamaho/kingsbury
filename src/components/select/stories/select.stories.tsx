import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Select from '..';

const stories = storiesOf('Select', module);

stories.add(
  'Default',
  () => {
    return (
      <Select />
    );
  }
);