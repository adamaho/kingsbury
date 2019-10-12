import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Button from '..';

const stories = storiesOf('Button', module);

stories.add(
  'Default',
  () => (
    <div>
      <div style={{ marginRight: '5px', display: 'inline-block' }}>
        <Button>
          Primary
        </Button>
      </div>
      <div style={{ marginRight: '5px', display: 'inline-block' }}>
        <Button buttonType="success">
          Success
        </Button>
      </div>
      <div style={{ marginRight: '5px', display: 'inline-block' }}>
        <Button buttonType="warning">
          Warning
        </Button>
      </div>
      <div style={{ marginRight: '5px', display: 'inline-block' }}>
        <Button buttonType="danger">
          Danger
        </Button>
      </div>
      <div style={{ marginRight: '5px', display: 'inline-block' }}>
        <Button buttonType="info">
          Info
        </Button>
      </div>
      <div style={{ marginRight: '5px', display: 'inline-block' }}>
        <Button disabled>
          Disabled
        </Button>
      </div>
    </div>
  )
);
