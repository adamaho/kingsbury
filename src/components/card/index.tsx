import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  theme
} from '../../theme';

import Header from './Header';
import Footer from './Footer';

interface CardProps {
  /** Content to show in the card */
  children?: React.ReactNode;

  /** classname for the card */
  className?: string;

  /** Function to handle click event */
  onClick?: () => void;

  /** Global theme in ThemeProvider */
  theme: any;
}

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

class Card extends React.PureComponent<CardProps, any> {
  static Header = Header;
  static Footer = Footer;

  static defaultProps = {
    children: '',
    className: '',
    onClick: undefined,
    theme,
  }

  render() {
    const {
      className,
      onClick,
      children,
      theme: themeProp,
    } = this.props;
  
    return (
      <Container
        className={className}
        onClick={onClick}
        theme={themeProp}
        {...this.props}
      >
        {children}
      </Container>
    );
  }
};

export default Card;
