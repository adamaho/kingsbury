import * as React from 'react';
import styled from 'styled-components';

import {
  MenuContext
} from './context';

import {
  theme
} from '../../theme';

export interface MenuItemProps {

  /** Items to render in the Menu */
  children?: React.ReactNode;

  /** Items to render in the Menu */
  itemKey?: string | number;

  /** Global theme in ThemeProvider */
  theme?: any;
}

const Container = styled.div`
  padding: ${(props) => props.theme.menu.itemPadding};
  border-bottom: ${(props) => props.theme.menu.itemBorder};
  border-color: ${(props) => props.theme.menu.itemBorderColor};

  :last-child {
    border: none;
  }
`;

/** Menu.Item */
export const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => (
  <MenuContext.Consumer>
    {({ onClick }) => {
      const {
        children,
        itemKey,
        theme
      } = props;

      return (
        <Container
          key={itemKey}
          theme={theme}
          onClick={() => onClick(itemKey)}
        >
          {children}
        </Container>
      )
    }}
  </MenuContext.Consumer>
);

MenuItem.defaultProps = {
  theme
};

export default MenuItem;
