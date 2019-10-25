/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = ({ children }: any) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

const StyledSpacer = styled.div`
  width: 20px;
`;

export const Spacer = ({ children }: any) => (
  <StyledSpacer>
    {children}
  </StyledSpacer>
);