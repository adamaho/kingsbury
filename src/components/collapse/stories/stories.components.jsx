/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0px 20px;
`;

export const Container = ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

const StyledCollapseContainer = styled.div`
  max-width: 400px;
`;

export const CollapseContainer = ({ children }) => (
  <StyledCollapseContainer>
    {children}
  </StyledCollapseContainer>
);

const StyledCollapseContent = styled.div`
  background: blue;
`;

export const CollapseContent = ({ children }) => (
  <StyledCollapseContent>
    {children}
  </StyledCollapseContent>
);
