import * as React from 'react';
import styled from 'styled-components';

import {
  useTheme
} from "../../hooks/useTheme";

export interface HeaderProps {
  /** Content to show in the header */
  children?: React.ReactNode;

  /** classname for the header */
  className?: string;
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

  const theme = useTheme();

  return (
    <StyledHeader {...props} theme={theme}>
      {children}
    </StyledHeader>
  );
};

Header.defaultProps = {
  children: '',
  className: ''
};
