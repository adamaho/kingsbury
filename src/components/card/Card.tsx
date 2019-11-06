import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  theme
} from '../../theme';

import {
  Header,
  HeaderProps
} from './Header';

import {
  Footer,
  FooterProps
} from './Footer';

interface CardFunctionComponent<T> extends React.FunctionComponent<T> {
  Header: React.FunctionComponent<HeaderProps>;
  Footer: React.FunctionComponent<FooterProps>;
}

interface CardProps {
  /** Content to show in the card */
  children?: React.ReactNode;

  /** classname for the card */
  className?: string;

  /** Function to handle click event */
  onClick?: () => void;

  /** Global theme in ThemeProvider */
  theme?: any; // eslint-disable-line
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

export const Card: CardFunctionComponent<CardProps> = (props) => {
  const {
    className,
    children,
    onClick,
    theme
  } = props;

  return (
    <Container
      className={className}
      onClick={onClick}
      theme={theme}
      {...props}
    >
      {children}
    </Container>
  )
};

Card.Header = Header;
Card.Footer = Footer;

Card.defaultProps = {
  children: '',
  className: '',
  onClick: undefined,
  theme,
};

