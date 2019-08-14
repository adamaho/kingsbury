import React from 'react';
import PropTypes from 'prop-types';

import styled, {
  css
} from 'styled-components';

import {
  theme
} from '../../theme';

const Container = styled.div``;

const Label = styled.label`
  font-size: 16px;
`;

const Error = styled.div`
  color: ${(props) => props.theme.colors.danger};
`;

const StyledInput = styled.input`
  height: ${(props) => (props.size === 'small' ? props.theme.input.heightSmall : props.theme.input.heightLarge)};
  width: 100%;
  -webkit-appearance: none;

  font-family: inherit;
  font-size: ${(props) => (props.size === 'small' ? props.theme.input.fontSizeSmall : props.theme.input.fontSizeLarge)};

  background-color: ${(props) => props.theme.input.background};
  color: ${(props) => props.theme.input.color};

  ${(props) => props.error && css`
    border-color: ${props.theme.colors.danger};
  `};

  ${(props) => props.borderType === 'full' && css`
    padding: 10px 0px 10px 10px;
    border: ${props.theme.input.border};
    border-color: ${props.theme.input.borderColor};
    border-radius: ${props.theme.input.borderRadius};
    border-color: ${props.error ? props.theme.colors.danger : props.theme.input.borderColor};
  `};

  ${(props) => props.borderType === 'bottom' && css`
    padding: 10px 0px;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid;
    border-color: ${props.error ? props.theme.colors.danger : props.theme.input.borderColor};
  `};

  ${(props) => props.borderType === 'none' && css`
    padding: 10px 0px;
    border: none;
    color: ${props.error ? props.theme.colors.danger : props.theme.input.color};
  `};

  box-sizing: border-box;

  line-height: 38px;

  &::placeholder {
    color: ${(props) => props.theme.input.placeholderColor};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    border: ${(props) => `1px solid ${props.theme.colors.primary}`};
    ${(props) => props.borderType === 'bottom' && css`
      border: none;
      border-bottom: 1px solid ${props.theme.colors.primary};
      border-radius: 0px;
    `};

    ${(props) => props.borderType === 'none' && css`
      border: none;
    `};

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
    placeholder,
    size,
    borderType,
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
          placeholder={placeholder}
          borderType={borderType}
          size={size}
          theme={themeProp}
        />
      </Label>
      {(error && errorComponent) &&
        <Error theme={themeProp}>
          {errorComponent(error)}
        </Error>
      }
    </Container>
  );
};

Input.defaultProps = {
  borderType: 'full',
  className: '',
  disabled: false,
  error: '',
  errorComponent: (error) => <div>{error}</div>, // eslint-disable-line
  htmlType: undefined,
  id: undefined,
  name: undefined,
  label: '',
  onChange: () => undefined,
  placeholder: '',
  size: 'small',
  theme
};

Input.propTypes = {

  /** Type of border for the input */
  borderType: PropTypes.oneOf(['full', 'bottom', 'none']),

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

  /** Function to handle change event */
  onChange: PropTypes.func,

  /** Placeholder for the input */
  placeholder: PropTypes.string,

  /** name of the input to be used with Formik */
  name: PropTypes.string,

  /** Size of input */
  size: PropTypes.oneOf(['small', 'large']),

  /** Global theme in ThemeProvider */
  theme: PropTypes.object
};

export default Input;
