import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div<any>`
  max-width: 350px;
  height: 1000px;
  position: relative;
`;

export const ComponentContainer: React.FunctionComponent = React.forwardRef(({ children }, ref) => {
  return (
    <Container id={'scroller'} ref={ref}>
      {children}
    </Container>
  );
});
