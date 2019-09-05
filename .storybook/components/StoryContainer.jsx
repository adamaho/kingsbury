import React from 'react';
import styled from 'styled-components';

const StyledStoryContainer = styled.div`
  min-height: 700px;
  width: 100%;
`;

export const StoryContainer = ({ children }) => (
  <StyledStoryContainer>
    {children}
  </StyledStoryContainer>
);