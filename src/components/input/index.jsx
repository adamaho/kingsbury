import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  theme
} from '../../theme';

const Container = styled.div``;

const Label = styled.label`
  font-size: 16px;
`;

const StyledInput = styled.input`
  height: ${(props) => (props.size === 'small' ? props.theme.input.heightSmall : props.theme.input.heightLarge)};
  width: 100%;
  -webkit-appearance: none;

  font-family: inherit;
  font-size: ${(props) => (props.size === 'small' ? props.theme.input.fontSizeSmall : props.theme.input.fontSizeLarge)};

  background-color: ${(props) => props.theme.input.background};
  color: ${(props) => props.theme.input.color};

  border: ${(props) => (props.showBorder ? props.theme.input.border : 'none')};

  border-color: ${(props) => (props.error ? props.theme.colors.danger : props.theme.input.borderColor)};

  border-radius: ${(props) => props.theme.input.borderRadius};
  box-sizing: border-box;

  line-height: 38px;
  padding: ${(props) => (props.showBorder ? '10px 0px 10px 10px' : '10px 0px')};

  &::placeholder {
    color: ${(props) => props.theme.input.placeholderColor};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    border: ${(props) => (props.showBorder ? `1px solid ${props.theme.colors.primary}` : 'none')};
    outline: none;
  }
`;

const Input = (props) => {
  const {
    className,
    disabled,
    error,
    errorComponent,
    htmlType,
    id,
    label,
    name,
    onChange,
    size,
    showBorder,
    theme: themeProp
  } = props;

  return (
    <Container className={className}>
      <Label>
        {label && label}
        <StyledInput
          error={error}
          disabled={disabled}
          htmlType={htmlType}
          id={id}
          name={name}
          onChange={onChange}
          showBorder={showBorder}
          size={size}
          theme={themeProp}
        />
      </Label>
      {(error && errorComponent) &&
        errorComponent(error)
      }
    </Container>
  );
};

Input.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  errorComponent: (error) => <div>{error}</div>, // eslint-disable-line
  htmlType: undefined,
  id: '',
  name: '',
  label: '',
  onChange: () => undefined,
  size: 'small',
  showBorder: true,
  theme
};

Input.propTypes = {

  /** classname for the input */
  className: PropTypes.string,

  /** Disabled state of the input */
  disabled: PropTypes.bool,

  /** Formik validation error */
  error: PropTypes.string,

  /** Function that provides the error to use in custom component */
  errorComponent: PropTypes.func,

  /** HTML input type attribute */
  htmlType: PropTypes.oneOf([undefined, 'text', 'number']),

  /** id of the input to be used with Formik */
  id: PropTypes.string,

  /** Label of the input */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** name of the input to be used with Formik */
  name: PropTypes.string,

  /** Size of input */
  size: PropTypes.oneOf(['small', 'large']),

  /** Show input with border */
  showBorder: PropTypes.bool,

  /** Function to handle change event */
  onChange: PropTypes.func,

  /** Global theme in ThemeProvider */
  theme: PropTypes.object
};

export default Input;
