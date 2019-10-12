/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Accordian from '..';

const StyledCollapseContent = styled.div`
  height: 200px;
  background: blue;
`;

export const CollapseContent = ({ children }: any) => (
  <StyledCollapseContent>
    {children}
  </StyledCollapseContent>
);

const AccordianContainer = styled.div`
  width: 400px;

  padding: 10px;
`;

const stories = storiesOf('Accordian', module);

stories.add(
  'Default',
  () => (
    <AccordianContainer>
      <Accordian
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
    </AccordianContainer>
  )
);

stories.add(
  'Classic',
  () => (
    <AccordianContainer>
      <Accordian
        classic
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
    </AccordianContainer>
  )
);
