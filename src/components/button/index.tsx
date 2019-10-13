import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  theme
} from '../../theme';

export interface ButtonProps {
  /** Type of the button */
  buttonType?: 'primary' | 'success' | 'danger' | 'warning' | 'info';

  /** Content to show in the button */
  children?: React.ReactNode;

  /** classname for the button */
  className?: string;

  /** Disabled state of the button */
  disabled?: boolean;

  /** Function to handle click event */
  onClick?: () => void;

  /** Global theme in ThemeProvider */
  theme?: any;
}

const defaultButtonType = 'primary';

const REQUIRE_DARK_TEXT = new Set(['success', 'warning']);

const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => (
    props.disabled ?
      props.theme.colors.disabled :
      props.theme.colors[props.buttonType || defaultButtonType]
  )};

  color: ${(props) => {
    if (REQUIRE_DARK_TEXT.has(props.buttonType || defaultButtonType)) {
      return props.theme.colors.black;
    }
    return props.theme.colors.white;
  }};

  height: ${(props) => `${props.theme.button.height}`};

  font-weight: 400;
  font-size: 16px;
  font-family: inherit;
  text-decoration: none;

  border: ${(props) => props.theme.button.border};
  border-radius: ${(props) => props.theme.button.borderRadius};

  padding: ${(props) => props.theme.button.padding};

  cursor: ${(props) => (
    props.disabled ? 'not-allowed' : 'pointer'
  )};

  transition: ${(props) => props.theme.animations.time.fast} cubic-bezier(.19, 1, .4, 1);

  ${(props) => !props.disabled && css`
    &:hover {
      opacity: 0.85;
    }
  `}

  &:active {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    buttonType
  } = props;

  return (
    <StyledButton buttonType={buttonType} {...props}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  buttonType: 'primary',
  children: '',
  className: '',
  disabled: false,
  onClick: undefined,
  theme,
};

export default Button;
