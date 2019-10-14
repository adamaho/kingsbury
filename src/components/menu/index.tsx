import * as React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

import {
  MenuContext
} from './context';

import {
  theme
} from '../../theme';

export interface MenuProps {

  /** Items to render in the Menu */
  children: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** Function to handle when collapse state changes */
  onClick?: (itemKey: string | number) => void;

  /** Global theme in ThemeProvider */
  theme: any;
}

const Container = styled.div`
  background: ${(props) => props.theme.menu.background};
  border: ${(props) => props.theme.menu.border};
  border-color: ${(props) => props.theme.menu.borderColor};
  border-radius: ${(props) => props.theme.menu.borderRadius};
  box-shadow: ${(props) => props.theme.menu.boxShadow};
  color: ${(props) => props.theme.menu.color};

  min-width: ${(props) => props.theme.menu.minWidth};
`;

class Menu extends React.PureComponent<MenuProps, any> {
  static Item = MenuItem;

  static defaultProps = {
    children: '',
    className: '',
    onClick: undefined,
    theme
  }

  render() {
    const {
      className,
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
        <Container
          className={className}
          theme={theme}
        >
          {children}
        </Container>
      </MenuContext.Provider>
    );
  }
}

export default Menu;
