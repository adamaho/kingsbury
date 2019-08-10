import React from 'react';
import PropTypes from 'prop-types';

import styled, {
  css
} from 'styled-components';

import {
  theme
} from '../../theme';

const REQUIRE_DARK_TEXT = new Set(['success', 'warning', '']);

const StyledButton = styled.button`
  background: ${(props) => (
    props.disabled ?
      props.theme.colors.disabled :
      props.theme.colors[props.buttonType]
  )};

  color: ${(props) => {
    if (REQUIRE_DARK_TEXT.has(props.buttonType)) {
      return props.theme.colors.black;
    }
    return props.theme.colors.white;
  }};

  height: ${(props) => `${props.theme.button.height}px`};

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

const Button = (props) => {
  const {
    children
  } = props;

  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  buttonType: 'primary',
  children: '',
  disabled: false,
  onClick: () => undefined,
  theme,
};

Button.propTypes = {
  /** Type of the button */
  buttonType: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info']),

  /** Content to show in the button */
  children: PropTypes.node,

  /** Disabled state of the button */
  disabled: PropTypes.bool,

  /** Function to handle click event */
  onClick: PropTypes.func,

  /** Global theme in ThemeProvider */
  theme: PropTypes.object
};

export default Button;
