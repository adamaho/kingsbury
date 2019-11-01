import * as React from 'react';
import styled from 'styled-components';

import {
  theme
} from '../../theme';

interface MenuItemProps {
  /** Content to show in the Menu Item */
  children?: React.ReactNode;

  /** Unique key to identify the menu item */
  itemKey: string | number ;

  /** Global theme in ThemeProvider */
  theme?: any;

}

const StyledMenuItem = styled.div`
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.menu.item.hoverBackgroundColor};
  }
`;

export const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  itemKey,
  children,
  theme
}) => {
  return (
    <StyledMenuItem
      key={itemKey}
      theme={theme}
    >
      {children}
    </StyledMenuItem>
  );
};

MenuItem.defaultProps = {
  children: '',
  theme
};
