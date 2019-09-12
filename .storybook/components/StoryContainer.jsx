import React from 'react';
import styled from 'styled-components';

const StyledStoryContainer = styled.div`
  padding: 15px;
`;

export const StoryContainer = ({ children }) => (
  <StyledStoryContainer>
    {children}
  </StyledStoryContainer>
);