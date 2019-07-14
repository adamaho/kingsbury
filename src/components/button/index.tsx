import * as React from 'react';

import styled, {
  ITheme,
  theme,
} from '../../styles/theme';

export interface IButtonProps {
  type: 'primary' | 'ghost' | 'success' | 'danger' | 'warning';
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
      >
        {this.props.children}
      </button>
    );
  }
}

const Button = styled(ButtonComponent)`
  background: ${(props: IButtonProps) => (
    props.disabled ?
      props.theme.buttons.backgroundDisabled :
      props.theme.colors[props.type]
  )};

  color: ${(props: IButtonProps) => props.theme.buttons[props.type].color};
  height: ${(props: IButtonProps) => `${props.theme.buttons.height}px`};

  font-weight: 400;
  font-family: ${(props: IButtonProps) => props.theme.fontFamily};
  font-size: 16px;
  text-decoration: none;

  border: ${(props: IButtonProps) => props.theme.buttons.border};
  border-radius: ${(props: IButtonProps) => props.theme.buttons.borderRadius};

  padding: ${(props: IButtonProps) => props.theme.buttons.padding};
  box-shadow: ${(props: IButtonProps) => props.theme.buttons.boxShadow};

  cursor: ${(props: IButtonProps) => (
    props.disabled ? 'not-allowed' : 'pointer'
  )};

  transition: border-radius ${(props: IButtonProps) => props.theme.animations.time.fast};

  &:hover {
    border-radius: ${(props: IButtonProps) => (
      props.disabled ?
        props.theme.buttons.borderRadius :
        `${props.theme.buttons.height / 2}px`
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
