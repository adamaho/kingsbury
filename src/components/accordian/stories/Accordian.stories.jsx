import React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import {
  StoryContainer
} from '../../../../.storybook/components/StoryContainer';

import Accordian from '..';

const StyledCollapseContent = styled.div`
  height: 200px;
  background: blue;
`;

export const CollapseContent = ({ children }) => (
  <StyledCollapseContent>
    {children}
  </StyledCollapseContent>
);

const stories = storiesOf('Accordian', module);

stories.add(
  'Default',
  () => (
    <StoryContainer>
      <Accordian
        // defaultSelectedKey="1"
        onChange={(selectedKeys) => console.log(selectedKeys)}
        itemGap={20}
      >
        <Accordian.Item itemKey="1">
          <CollapseContent />
        </Accordian.Item>
        <Accordian.Item itemKey="2">
          <CollapseContent />
        </Accordian.Item>
        <Accordian.Item itemKey="3">
          <CollapseContent />
        </Accordian.Item>
      </Accordian>
    </StoryContainer>
  )
);
