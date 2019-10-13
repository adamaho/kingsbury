import * as React from 'react';
import styled from 'styled-components';

import {
  theme
} from '../../theme';

export interface HeaderProps {
  /** Content to show in the header */
  children?: React.ReactNode;

  /** classname for the header */
  className?: string;

  /** Global theme in ThemeProvider */
  theme?: any;
}

const StyledHeader = styled.div`
  background: ${(props) => props.theme.card.headerBackground};
  border-bottom: ${(props) => props.theme.card.innerBorder};
  border-top-left-radius: ${(props) => props.theme.card.borderRadius};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};
  height: ${(props) => props.theme.card.headerHeight};
`;

/** Card.Header */
export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const {
    children
  } = props;

  return (
    <StyledHeader {...props}>
      {children}
    </StyledHeader>
  );
};

Header.defaultProps = {
  children: '',
  className: '',
  theme
};

export default Header;
