import * as React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

import {
  MenuContext
} from './context';

import {
  theme
} from '../../theme';

const Container = styled.div`
  background: ${(props) => props.theme.menu.background};
  border: ${(props) => props.theme.menu.border};
  border-color: ${(props) => props.theme.menu.borderColor};
  border-radius: ${(props) => props.theme.menu.borderRadius};
  box-shadow: ${(props) => props.theme.menu.boxShadow};
  color: ${(props) => props.theme.menu.color};

  min-width: ${(props) => props.theme.menu.minWidth};
`;

class Menu extends React.PureComponent<any, any> {
  static Item = MenuItem;

  static defaultProps = {
    theme
  }

  render() {
    const {
      children,
      onClick,
      theme
    } = this.props;

    return (
      <MenuContext.Provider
        value={{
          onClick
        }}
      >
        <Container theme={theme}>
          {children}
        </Container>
      </MenuContext.Provider>
    );
  }
}

export default Menu;
