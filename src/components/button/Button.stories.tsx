import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Button from '.';

const stories = storiesOf('Components/Button', module);

stories.add(
  'Type',
  () => (
    <div>
      <span style={{ marginRight: '10px' }}>
        <Button
          type="primary"
        >
          Primary
        </Button>
      </span>
      <span style={{ marginRight: '10px' }}>
        <Button
          type="success"
        >
          Success
        </Button>
      </span>
      <span style={{ marginRight: '10px' }}>
        <Button
          type="danger"
        >
          Danger
        </Button>
      </span>
      <span style={{ marginRight: '10px' }}>
        <Button
          type="warning"
        >
          Warning
        </Button>
      </span>
      <span>
        <Button
          type="primary"
          disabled
        >
          Disabled
        </Button>
      </span>
    </div>
  )
);

