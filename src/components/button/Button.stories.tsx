import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Button from '.';

const stories = storiesOf('Button', module);

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
          onClick={() => console.log('success')}
        >
          Success
        </Button>
      </span>
      <span style={{ marginRight: '10px' }}>
        <Button
          type="danger"
          onClick={() => console.log('danger')}
        >
          Danger
        </Button>
      </span>
      <span style={{ marginRight: '10px' }}>
        <Button
          type="warning"
          onClick={() => console.log('warning')}
        >
          Warning
        </Button>
      </span>
      <span>
        <Button
          type="primary"
          onClick={() => console.log('disabled')}
          disabled
        >
          Disabled
        </Button>
      </span>
    </div>
  )
);

