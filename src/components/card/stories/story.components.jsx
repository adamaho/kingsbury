/* eslint-disable */

import React from 'react';
import styled from 'styled-components';


const StyledContent = styled.div`
  height: 200px;
`;

export const CardContent = () => (
  <StyledContent />
);

const StyledContainer = styled.div`
  width: 400px;
  padding: 20px;
`;

export const Container = ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);
