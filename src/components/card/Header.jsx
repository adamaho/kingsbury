import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import {
  theme
} from '../../theme';

const StyledHeader = styled.div`
  background: ${(props) => props.theme.card.headerBackground};
  border-bottom: ${(props) => props.theme.card.innerBorder};
  border-top-left-radius: ${(props) => props.theme.card.borderRadius};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};
  height: ${(props) => props.theme.card.headerHeight};
`;

/** Card.Header */
const Header = (props) => {
  const {
    children
  } = props;

  return (
    <StyledHeader {...props}>
      {children}
    </StyledHeader>
  );
};


Header.propTypes = {
  /** Content to show in the header */
  children: PropTypes.node,

  /** classname for the header */
  className: PropTypes.string,

  /** Global theme in ThemeProvider */
  theme: PropTypes.object
};

Header.defaultProps = {
  children: '',
  className: '',
  theme
};

export default Header;
