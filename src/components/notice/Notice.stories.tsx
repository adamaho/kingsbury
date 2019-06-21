import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Notice from '.';

const stories = storiesOf('Components/Notice', module);

stories.add(
  'Type',
  () => (
    <div>
      <div>
        <Notice
          title="Default"
          description="Description of notice"
          type="default"
        />
      </div>
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
  'With Avatar',
  () => (
    <Notice
      title="Default"
      description="Description of notice"
      avatar={<div>A</div>}
      type="default"
    />
  )
);

stories.add(
  'Hide Pill',
  () => (
    <Notice
      title="Default"
      description="Description of notice"
      type="default"
      hidePill
    />
  )
);

stories.add(
  'With Content',
  () => (
    <Notice
      title="Default"
      description="Description of notice"
      avatar={<div>A</div>}
      contentRight={<div>Content</div>}
      type="default"
    />
  )
);