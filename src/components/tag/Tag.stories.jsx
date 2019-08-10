import React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Tag from '.';

const stories = storiesOf('Tag', module);

const MarginRight = styled.span`
  margin-right: 10px;
`;

stories.add(
  'All',
  () => (
    <React.Fragment>
      <MarginRight>
        <Tag
          text={'aaho'}
          tagType="default"
        />
      </MarginRight>
      <MarginRight>
        <Tag
          text={'aaho'}
          tagType="primary"
        />
      </MarginRight>
      <MarginRight>
        <Tag
          text={'aaho'}
          tagType="warning"
        />
      </MarginRight>
      <MarginRight>
        <Tag
          text={'aaho'}
          tagType="danger"
        />
      </MarginRight>
      <MarginRight>
        <Tag
          text={'aaho'}
          tagType="success"
        />
      </MarginRight>
      <Tag
        text={'aaho'}
        tagType="info"
      />
    </React.Fragment>
  )
);

stories.add(
  'Click',
  () => (
    <Tag
      text={'aaho'}
      onClick={() => console.log('clicking')}
      tagType="default"
    />
  )
);


