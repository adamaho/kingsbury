import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 400px;
  background: red;
`;

const Drawer = (props) => {
  return (
    <Container {...props}>
      asdf
    </Container>
  );
};

export default Drawer;
