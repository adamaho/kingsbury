import * as React from 'react';
import * as _ from 'lodash';

import styled, {
  ITheme,
  theme,
} from '../../styles/theme';

import {
  ItemType
} from '../../types';

const REQUIRE_DARK_TEXT = new Set(['success', 'warning', 'disabled']);

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ItemType;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
    className={`kingsbury-button ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

const Button = styled(ButtonComponent)`
  background: ${(props: IButtonProps) => (
    props.disabled ?
      props.theme.buttons.backgroundDisabled :
      props.theme.colors[props.buttonType]
  )};

  color: ${(props: IButtonProps) => {
    if (REQUIRE_DARK_TEXT.has(props.buttonType) || props.disabled) {
      return props.theme.colors.black
    }
    return props.theme.colors.white;
  }};

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
  type: undefined,
  onClick: () => _.noop(),
  theme,
}

export default Button;
