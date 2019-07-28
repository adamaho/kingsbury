import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Input from '.';

const stories = storiesOf('Input', module);

stories.add(
  'Default',
  () => (
    <div>
      <Input />
    </div>
  )
);

stories.add(
  'Disabled',
  () => (
    <div>
      <Input disabled placeholder="this is a test"/>
    </div>
  )
);

stories.add(
  'With Label',
  () => (
    <div>
      <Input
        placeholder="this is a test"
        label={<div>This is a label</div>}
      />
    </div>
  )
);


stories.add(
  'With Label and Error',
  () => (
    <div>
      <Input
        placeholder="this is a test"
        label={<div>This is a label</div>}
        error={'im errored'}
      />
    </div>
  )
);

stories.add(
  'With Label and Error and Error Component',
  () => (
    <div>
      <Input
        placeholder="this is a test"
        label={<div>This is a label</div>}
        error={'This is the error'}
        errorComponent={(error) => <div style={{ color: 'red' }}>{error}</div>}
      />
    </div>
  )
);


