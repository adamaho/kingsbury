import * as React from 'react';
import styled from 'styled-components';

import Input from '../input';

const Container = styled.div``;

const Menu = styled.div`
  height: 200px;
  background: red;
`;

export const Select: React.FunctionComponent<any> = () => {

  const [{ isOpen }, open] = React.useState({ isOpen: false });

  return (
    <Container>
      <Input
        onBlur={() => open({ isOpen: false })}
        onFocus={() => open({ isOpen: true })}
      />
      {isOpen &&
        <Menu />
      }
    </Container>
  );
}

export default Select;
