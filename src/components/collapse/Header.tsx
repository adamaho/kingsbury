import * as React from 'react';

import styled, {
  css
} from 'styled-components';

interface HeaderProps {
  /** Content to show in the Header */
  children: React.ReactNode;

  /** The type of collapse */
  collapseType?: 'stack' | 'panel';

  /** Will make header transparent */
  ghost?: boolean;

  /** State of the collapse for custom handling */
  open?: boolean;

  /** Function to handle when header is clicked */
  onClick: () => void;

  /** Global theme in ThemeProvider */
  theme: any;
}

interface StyleHeaderProps {
  collapseType?: 'stack' | 'panel';
  open?: boolean;
  ghost?: boolean;
}

const StyledHeader = styled.div<HeaderProps>`
  display: flex;
  align-items: center;

  background: ${(props) => props.theme.collapse.headerBackground};

  border-radius: ${(props) => props.collapseType === 'panel' && props.theme.collapse.borderRadius};

  ${(props) => props.open && css`
    border-bottom: 1px solid ${props.theme.colors.borderColor};
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  `}

  ${(props) => props.ghost && css`
    background: transparent;
    border-bottom: none;
  `};

  padding: ${(props) => props.theme.collapse.headerPadding};
  height: ${(props) => props.theme.collapse.headerHeight};

  cursor: pointer;
`;

const Header: React.FunctionComponent<HeaderProps> = ({
  children,
  collapseType,
  ghost,
  onClick,
  open,
  theme
}) => (
  <StyledHeader
    ghost={ghost}
    theme={theme}
    collapseType={collapseType}
    onClick={onClick}
    open={open}
  >
    {children}
  </StyledHeader>
);

export default Header;
