import React from 'react';
import PropTypes from 'prop-types';

import styled, {
  css
} from 'styled-components';

import {
  theme
} from '../../theme';

const Container = styled.div`
  height: ${(props) => props.theme.card.height};
  width: ${(props) => props.theme.card.width};

  background: ${(props) => props.theme.card.background};
  border: ${(props) => props.theme.card.outerBorder};
  box-shadow: ${(props) => props.theme.card.boxShadow};
  border-radius: ${(props) => props.theme.card.borderRadius};

  opacity: ${(props) => (props.onClick ? 0.8 : 1)};

  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};

  transition: .35s cubic-bezier(.19, 1, .4, 1);

  ${(props) => props.onClick && css`
    &:hover {
      opacity: 1;
      transform: translateY(-1%);
      box-shadow: 0 7px 21px 0 rgba(0,0,0,.07);
    }
  `}
`;

const Header = styled.div`
  background: ${(props) => props.theme.card.headerBackground};
  height: ${(props) => props.theme.card.headerHeight};
  border-bottom: ${(props) => props.theme.card.innerBorder};
  border-top-left-radius: ${(props) => props.theme.card.borderRadius};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};
`;

const Footer = styled.div`
  background: ${(props) => props.theme.card.footerBackground};
  height: ${(props) => props.theme.card.footerHeight};
  border-top: ${(props) => props.theme.card.innerBorder};
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.card.borderRadius};
`;

const Content = styled.div``;

const Card = ({
  className,
  header,
  footer,
  onClick,
  children,
  theme: themeProp
}) => (
  <Container
    className={className}
    onClick={onClick}
    theme={themeProp}
  >
    {header &&
      <Header theme={theme}>
        {header}
      </Header>
    }
    <Content>
      {children}
    </Content>
    {footer &&
      <Footer theme={theme}>
        {footer}
      </Footer>
    }
  </Container>
);

Card.defaultProps = {
  children: '',
  className: '',
  footer: '',
  header: '',
  onClick: undefined,
  theme,
};

Card.propTypes = {
  /** Content to show in the card */
  children: PropTypes.node,

  /** classname for the card */
  className: PropTypes.string,

  /** Content to show in the footer */
  footer: PropTypes.node,

  /** Content to show in the header */
  header: PropTypes.node,

  /** Function to handle click event */
  onClick: PropTypes.func,

  /** Global theme in ThemeProvider */
  theme: PropTypes.object
};

export default Card;
