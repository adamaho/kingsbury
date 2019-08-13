import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const StyledDrawer = styled.div`
  /* position: fixed;
  top: 0;
  left: 0; */
  height: 100%;
  width: 400px;
  background: red;
`;

const StyledEmptyState = styled.div`
  background: blue;
  height: 100%;
  width: 100%;

  pointer-events: none;
`;

const Drawer = (props) => {
  return (
    <Container>
      <StyledDrawer {...props}>
        asdf
      </StyledDrawer>
      <StyledEmptyState />
    </Container>
  );
};

export default Drawer;
