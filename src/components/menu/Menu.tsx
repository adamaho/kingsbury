import * as React from 'react';
import styled from 'styled-components';

import {
  MenuItem
} from "./MenuItem";

interface MenuFunctionComponent<T> extends React.FunctionComponent<T> {
  Item: any;
}

interface MenuProps {
  /** Content to show in the Menu */
  children?: React.ReactNode;
}

const Container =  styled.div``;

export const Menu: MenuFunctionComponent<MenuProps> = (props) => {
  const {
    children
  } = props;

  return (
    <Container>
      {children}
    </Container>
  );
};

Menu.Item = MenuItem;

Menu.defaultProps = {
  children: ''
};
