import React from 'react';
import PropTypes from 'prop-types';

import styled, {
  css
} from 'styled-components';

const StyledHeader = styled.div`
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

const Header = ({
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

Header.propTypes = {
  /** Content to show in the Header */
  children: PropTypes.node.isRequired,

  /** Will make header transparent */
  ghost: PropTypes.bool.isRequired,

  /** State of the collapse for custom handling */
  open: PropTypes.bool.isRequired,

  /** The type of collapse */
  collapseType: PropTypes.oneOf(['stack', 'panel']).isRequired,

  /** Function to handle when header is clicked */
  onClick: PropTypes.func.isRequired,

  /** Global theme in ThemeProvider */
  theme: PropTypes.object.isRequired
};

export default Header;
