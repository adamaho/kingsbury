/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 350px;
`;

export const Container = ({ children }: any) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

const StyledSpacer = styled.div`
  height: 20px;
`;

export const Spacer = () => (
  <StyledSpacer />
);