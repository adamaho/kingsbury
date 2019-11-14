import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  overflow: scroll;
  height: 300px;
  //position:relative;
`;

export const StoryContainer: React.FunctionComponent = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
