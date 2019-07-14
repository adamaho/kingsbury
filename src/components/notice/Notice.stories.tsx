import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import styled from '../../styles/theme';

import Notice from '.';

const Avatar = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: hotpink;
`;

const stories = storiesOf('Notice', module);

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
      avatar={<Avatar />}
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
      avatar={<Avatar />}
      contentRight={<div>Content</div>}
      type="default"
    />
  )
);

stories.add(
  'Avatar no pill',
  () => (
    <Notice
      title="Default"
      description="Description of notice"
      avatar={<Avatar />}
      type="default"
      hidePill
    />
  )
);