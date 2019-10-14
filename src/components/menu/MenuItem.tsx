import * as React from 'react';
import styled from 'styled-components';

import {
  MenuContext
} from './context';

import {
  theme
} from '../../theme';

const Container = styled.div`
  padding: ${(props) => props.theme.menu.itemPadding};
  border-bottom: ${(props) => props.theme.menu.itemBorder};
  border-color: ${(props) => props.theme.menu.itemBorderColor};

  :last-child {
    border: none;
  }
`;

/** Menu.Item */
export const MenuItem: React.FunctionComponent<any> = (props) => (
  <MenuContext.Consumer>
    {({ onClick }) => {
      const {
        children,
        itemKey,
        theme
      } = props;

      return (
        <Container
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
