import React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Notice from '.';

import {
  SVGClose
} from '../icons';

const stories = storiesOf('Notice', module);

stories.add(
  'Default',
  () => (
    <div>
      <div>
        <Notice
          title="Info"
          description="Description of notice"
          type="info"
        />
      </div>
      <div>
        <Notice
          title="Success"
          description="Description of notice"
          type="success"
        />
      </div>
      <div>
        <Notice
          title="Warning"
          description="Description of notice"
          type="warning"
        />
      </div>
      <div>
        <Notice
          title="Danger"
          description="Description of notice"
          type="danger"
        />
      </div>
    </div>
  )
);

stories.add(
  'Full',
  () => (
    <Notice
      title="Default"
      description="Description of notice"
      avatar={<SVGClose />}
      rightContent={<div>Content</div>}
      type="success"
    />
  )
);

stories.add(
  'Hide Pill',
  () => (
    <Notice
      title="Default"
      description="Description of notice"
      avatar={<SVGClose />}
      rightContent={<div>Content</div>}
      hidePill
      type="success"
    />
  )
);
