import * as React from 'react';
import styled from 'styled-components';

import {
  motion
} from 'framer-motion';

import MenuItem from './MenuItem';

import {
  MenuContext
} from './context';

import {
  theme
} from '../../theme';

const variants = {
  closed: {
    height: 0,
    overflow: 'hidden'
  },
  open: {
    height: 'auto',
    overflow: 'unset'
  },
}

export interface MenuProps {

  /** Items to render in the Menu */
  children: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** Function to handle when collapse state changes */
  onClick?: (itemKey: string | number) => void;

  /** Determines if menu is visible or not */
  visible?: boolean;

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
      visible,
      theme
    } = this.props;

    const animate = visible ? 'open' : 'closed'

    return (
      <MenuContext.Provider
        value={{
          onClick
        }}
      >
        <motion.div
          initial="closed"
          exit="closed"
          animate={animate}
          variants={variants}
        >
          <Container
            className={className}
            theme={theme}
          >
            {children}
          </Container>
        </motion.div>
      </MenuContext.Provider>
    );
  }
}

export default Menu;
