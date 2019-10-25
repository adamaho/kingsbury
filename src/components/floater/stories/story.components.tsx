/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  width: 400px;
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

const StyledFloaterContent = styled.div`
  height: 50px;

  background-color: red;
`;

export const FloaterContent = ({ children }: any) => (
  <StyledFloaterContent>
    {children}
  </StyledFloaterContent>
);
