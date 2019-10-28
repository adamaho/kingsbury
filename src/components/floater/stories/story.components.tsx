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
  height: 100px;
  width: 100px;

  background-color: white;
  margin-top: 5px;
  border-radius: 7px;
  box-shadow: 0 0 7px rgba(0, 0, 0,0.20)
`;

export const FloaterContent = ({ children }: any) => (
  <StyledFloaterContent>
    {children}
  </StyledFloaterContent>
);
