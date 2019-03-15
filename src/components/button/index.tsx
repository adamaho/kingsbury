import * as React from 'react';
import styled from '../../styles/theme';

import {
  ITheme,
  theme
} from '../../styles/theme';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'primary' | 'ghost';
  disabled: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  theme: ITheme;
}

class ButtonComponent extends React.Component<IButtonProps> {

  static defaultProps = {
    disabled: false
  }

  render() {
    return (
      <button
        className={this.props.className}
        {...this.props}
      >
        {this.props.children}
      </button>
    );
  }
}

const Button = styled(ButtonComponent)`
  background: ${(props: IButtonProps) => (
    props.disabled ?
      props.theme.buttons[props.type].backgroundDisabled :
      props.theme.buttons[props.type].background
  )};

  color: ${(props: IButtonProps) => props.theme.buttons[props.type].color};
  height: ${(props: IButtonProps) => `${props.theme.buttons.default.height}px`};

  font-family: ${(props: IButtonProps) => props.theme.fontFamily};
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;

  border: ${(props: IButtonProps) => (
    props.disabled ?
      props.theme.buttons[props.type].borderDisabled :
      props.theme.buttons[props.type].border
  )};

  border-radius: ${(props: IButtonProps) => props.theme.buttons.default.borderRadius};

  padding: ${(props: IButtonProps) => props.theme.buttons.default.padding};
  box-shadow: ${(props: IButtonProps) => props.theme.buttons[props.type].boxShadow};

  cursor: ${(props: IButtonProps) => (
    props.disabled ? 'not-allowed' : 'pointer'
  )};

  transition: border-radius ${(props: IButtonProps) => props.theme.animations.time.fast};

  &:hover {
    border-radius: ${(props: IButtonProps) => (
      props.disabled ?
        props.theme.buttons.default.borderRadius :
        `${props.theme.buttons.default.height / 2}px`
    )};
  }

  &:active {
    opacity: ${(props: IButtonProps) => (
      props.disabled ? 1 : 0.7
    )};
  }

  &:focus {
    outline: none;
  }
`

Button.defaultProps = {
  theme: theme,
  type: 'primary'
}

export default Button;
