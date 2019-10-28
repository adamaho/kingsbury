/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import Accordion from '..';

const StyledCollapseContent = styled.div`
  height: 200px;
`;

export const CollapseContent = ({ children }: any) => (
  <StyledCollapseContent>
    {children}
  </StyledCollapseContent>
);

const AccordionContainer = styled.div`
  width: 400px;
  padding: 10px;
`;

const stories = storiesOf('Accordion', module);

stories.add(
  'Default',
  () => (
    <AccordionContainer>
      <Accordion
        onChange={(selectedKeys) => console.log(selectedKeys)}
        itemGap={20}
      >
        <Accordion.Item itemKey="1">
          <CollapseContent />
        </Accordion.Item>
        <Accordion.Item itemKey="2">
          <CollapseContent />
        </Accordion.Item>
        <Accordion.Item itemKey="3">
          <CollapseContent />
        </Accordion.Item>
      </Accordion>
    </AccordionContainer>
  )
);

stories.add(
  'Classic',
  () => (
    <AccordionContainer>
      <Accordion
        classic
        onChange={(selectedKeys) => console.log(selectedKeys)}
        itemGap={20}
      >
        <Accordion.Item itemKey="1">
          <CollapseContent />
        </Accordion.Item>
        <Accordion.Item itemKey="2">
          <CollapseContent />
        </Accordion.Item>
        <Accordion.Item itemKey="3">
          <CollapseContent />
        </Accordion.Item>
      </Accordion>
    </AccordionContainer>
  )
);
