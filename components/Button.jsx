import * as React from 'react';
import styled from '../styles/theme';
const ButtonComponent = (props) => {
    return (<button className={`kb-button ${props.className}`} {...props}>
      {props.children}
    </button>);
};
export const Button = styled(ButtonComponent) `
  background: ${(props) => props.theme.buttons[props.type].background};
  color: ${(props) => props.theme.buttons[props.type].color};
  height: ${(props) => `${props.theme.buttons.default.height}px`};

  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;

  border: ${(props) => props.theme.buttons[props.type].border};
  border-radius: 4px;

  padding: 5px 0px 0px 0px;
  box-shadow: ${(props) => props.theme.buttons[props.type].boxShadow};

  cursor: pointer;

  transition: border-radius 0.25s;

  &:hover {
    border-radius: ${(props) => `${props.theme.buttons.default.height / 2}px`};
  }

  &:active {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;
