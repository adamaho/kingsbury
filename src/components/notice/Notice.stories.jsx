import React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Notice from '.';

import {
  SVGClose
} from '../icons';

const Avatar = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: hotpink;
`;

const stories = storiesOf('Notice', module).addParameters({
  info: {
    propTables: [Notice]
  }
});

stories.add(
  'Type',
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
  'With Avatar',
  () => (
    <Notice
      title="Default"
      description="Description of notice"
      avatar={<SVGClose />}
    />
  )
);

stories.add(
  'Hide Pill',
  () => (
    <Notice
      title="Default"
      description="Description of notice"
      type="success"
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
      avatar={<SVGClose />}
      rightContent={<div>Content</div>}
      type="success"
    />
  )
);

stories.add(
  'Avatar no pill',
  () => (
    <Notice
      title="Default"
      description="Description of notice"
      avatar={<SVGClose />}
      type="success"
      hidePill
    />
  )
);
