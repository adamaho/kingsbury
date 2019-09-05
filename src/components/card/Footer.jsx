import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import {
  theme
} from '../../theme';

const StyledFooter = styled.div`
  background: ${(props) => props.theme.card.footerBackground};
  height: ${(props) => props.theme.card.footerHeight};
  min-height: ${(props) => props.theme.card.footerMinHeight};
  border-top: ${(props) => props.theme.card.innerBorder};
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.card.borderRadius};
`;

/** Card.Footer */
const Footer = (props) => {
  const {
    children
  } = props;

  return (
    <StyledFooter {...props}>
      {children}
    </StyledFooter>
  );
};

Footer.propTypes = {
  /** Content to show in the footer */
  children: PropTypes.node,

  /** classname for the footer */
  className: PropTypes.string,

  /** Global theme in ThemeProvider */
  theme: PropTypes.object
};

Footer.defaultProps = {
  children: '',
  className: '',
  theme
};

export default Footer;
