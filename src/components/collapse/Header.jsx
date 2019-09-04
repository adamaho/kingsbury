import React from 'react';

import styled, {
  css
} from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;

  background: ${(props) => props.theme.collapse.headerBackground};

  ${(props) => props.collapseType === 'panel' && css`
    border-radius: ${props.theme.collapse.borderRadius};
  `}

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

const Header = ({
  children,
  ghost,
  onClick,
  open,
  theme
}) => (
  <StyledHeader
    ghost={ghost}
    theme={theme}
    onClick={onClick}
    open={open}
  >
    {children}
  </StyledHeader>
);

export default Header;
