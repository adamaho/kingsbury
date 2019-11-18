/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import {
  Accordion
} from '../Accordion';

// @ts-ignore
import mdx from './Accordion.mdx';

export default {
  title: 'Components|Accordion',
  component: Accordion,
  parameters: {
    docs: {
      page: mdx
    },
  },
};


const StyledCollapseContent = styled.div`
  height: 200px;
`;

const CollapseContent = ({ children }: any) => (
  <StyledCollapseContent>
    {children}
  </StyledCollapseContent>
);

const AccordionContainer = styled.div`
  width: 400px;
  padding: 10px;
`;

export const standard = () => (
  <AccordionContainer>
    <Accordion
      defaultSelectedItems={[]}
      classic={false}
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
);

export const classic = () => (
  <AccordionContainer>
    <Accordion
      itemGap={20}
      classic
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
);

