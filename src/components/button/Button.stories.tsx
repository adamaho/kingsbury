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
        <Button buttonType="primary">
          Primary
        </Button>
      </span>
      <span style={{ marginRight: '10px' }}>
        <Button
          buttonType="success"
          onClick={() => console.log('success')}
        >
          Success
        </Button>
      </span>
      <span style={{ marginRight: '10px' }}>
        <Button
          buttonType="danger"
          onClick={() => console.log('danger')}
        >
          Danger
        </Button>
      </span>
      <span style={{ marginRight: '10px' }}>
        <Button
          buttonType="warning"
          onClick={() => console.log('warning')}
        >
          Warning
        </Button>
      </span>
      <span>
        <Button
          buttonType="primary"
          onClick={() => console.log('disabled')}
          disabled
        >
          Disabled
        </Button>
      </span>
    </div>
  )
);

