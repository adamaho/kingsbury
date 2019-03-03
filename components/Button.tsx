import * as React from 'react';
import * as classNames from 'classnames';
import styled from '../styles/theme';

import {
  ITheme
} from '../styles/theme';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'disabled' | 'primary' | 'ghost';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  theme: ITheme;
}

const ButtonComponent: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <button
      className={classNames('kb-button', props.className)}
      {...props}
    >
      {props.children}
    </button>
  );
}

export const Button = styled(ButtonComponent)`
  background: ${(props: IButtonProps) => props.theme.buttons[props.type].background};
  color: ${(props: IButtonProps) => props.theme.buttons[props.type].color};
  height: ${(props: IButtonProps) => `${props.theme.buttons.default.height}px`};

  font-family: ${(props: IButtonProps) => props.theme.fontFamily};
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;

  border: ${(props: IButtonProps) => props.theme.buttons[props.type].border};
  border-radius: 4px;

  padding: 5px 0px 0px 0px;
  box-shadow: ${(props: IButtonProps) => props.theme.buttons[props.type].boxShadow};

  cursor: pointer;

  transition: border-radius 0.25s;

  &:hover {
    border-radius: ${(props: IButtonProps) => `${props.theme.buttons.default.height / 2}px`};
  }

  &:active {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`
