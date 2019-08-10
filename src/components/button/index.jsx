import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import {
  theme
} from '../../theme';

const REQUIRE_DARK_TEXT = new Set(['success', 'warning', 'disabled']);

const StyledButton = styled.button`
  background: ${(props) => (
    props.disabled ?
      props.theme.button.backgroundDisabled :
      props.theme.colors[props.buttonType]
  )};

  color: ${(props) => {
    if (REQUIRE_DARK_TEXT.has(props.buttonType) || props.disabled) {
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

  &:hover {
    opacity: 0.85;
  }

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
  /** type of the button */
  buttonType: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info']),

  /** content to show in the button */
  children: PropTypes.node,

  /** disabled state of the button */
  disabled: PropTypes.bool,

  /** Set the handler to handle click event */
  onClick: PropTypes.func,

  /** global theme in ThemeProvider */
  theme: PropTypes.object
};

export default Button;
