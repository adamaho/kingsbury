import * as React from 'react';
import styled from 'styled-components';

import Input from '../input';
import Menu from '../menu';

const Container = styled.div``;

export const Select: React.FunctionComponent<any> = (props) => {
  const [{ isOpen }, open] = React.useState({ isOpen: false });

  return (
    <Container>
      <Input
        onFocus={() => open({ isOpen: true })}
      />
      {isOpen &&
        <Menu
          visible={isOpen}
          onClick={() => open({ isOpen: false })}
        >
          <Menu.Item>item 1</Menu.Item>
          <Menu.Item>item 2</Menu.Item>
          <Menu.Item>item 3</Menu.Item>
        </Menu>
      }
    </Container>
  );
}

export default Select;
