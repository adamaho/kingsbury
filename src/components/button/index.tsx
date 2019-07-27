import * as React from 'react';
import * as _ from 'lodash';

import styled, {
  ITheme,
  theme,
} from '../../styles/theme';

export interface IButtonProps {
  type?: undefined | 'button' | 'submit'
  buttonType: 'primary' | 'ghost' | 'success' | 'danger' | 'warning';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  theme: ITheme;
}

const ButtonComponent: React.FunctionComponent<IButtonProps> = ({
  type,
  className,
  children,
  onClick,
  disabled
}) => (
  <button
    type={type}
    className={`king-button ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

ButtonComponent.defaultProps = {
  disabled: false,
  type: undefined,
  buttonType: 'primary',
  onClick: () => _.noop(),
  theme,
};

const Button = styled(ButtonComponent)`
  background: ${(props: IButtonProps) => (
    props.disabled ?
      props.theme.buttons.backgroundDisabled :
      props.theme.colors[props.buttonType]
  )};

  color: ${(props: IButtonProps) => props.theme.buttons[props.buttonType].color};
  height: ${(props: IButtonProps) => `${props.theme.buttons.height}px`};

  font-weight: 400;
  font-size: 16px;
  font-family: inherit;
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
  disabled: false,
  buttonType: 'primary',
  theme,
}

export default Button;
