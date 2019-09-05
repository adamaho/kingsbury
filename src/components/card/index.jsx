import React from 'react';
import PropTypes from 'prop-types';

import styled, {
  css
} from 'styled-components';

import {
  theme
} from '../../theme';

import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  height: ${(props) => props.theme.card.height};
  width: ${(props) => props.theme.card.width};

  background: ${(props) => props.theme.card.background};
  border: ${(props) => props.theme.card.outerBorder};
  box-shadow: ${(props) => props.theme.card.boxShadow};
  border-radius: ${(props) => props.theme.card.borderRadius};

  opacity: ${(props) => (props.onClick ? 0.8 : 1)};

  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};

  transition: ${(props) => props.theme.animations.time.fast} cubic-bezier(.19, 1, .4, 1);

  ${(props) => props.onClick && css`
    &:hover {
      opacity: 1;
      transform: translateY(-1%);
      box-shadow: 0 7px 21px 0 rgba(0,0,0,.07);
    }
  `}
`;

const Card = (props) => {
  const {
    className,
    onClick,
    children,
    theme: themeProp,
  } = props;

  return (
    <Container
      className={className}
      onClick={onClick}
      theme={themeProp}
      {...props}
    >
      {children}
    </Container>
  );
};

Card.defaultProps = {
  children: '',
  className: '',
  onClick: undefined,
  theme,
};

Card.propTypes = {
  /** Content to show in the card */
  children: PropTypes.node,

  /** classname for the card */
  className: PropTypes.string,

  /** Function to handle click event */
  onClick: PropTypes.func,

  /** Global theme in ThemeProvider */
  theme: PropTypes.object
};

Card.Header = Header;
Card.Footer = Footer;

export default Card;
