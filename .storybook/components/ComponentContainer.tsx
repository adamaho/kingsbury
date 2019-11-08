import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 350px;
`;

export const ComponentContainer: React.FunctionComponent = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
