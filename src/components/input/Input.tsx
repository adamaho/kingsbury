import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  theme
} from '../../theme';
import {SyntheticEvent} from "react";

export interface InputProps {

  /** Type of border for the input */
  borderType?: 'full' | 'bottom' | 'none';

  /** classname for the input */
  className?: string;

  /** Disabled state of the input */
  disabled?: boolean;

  /** Formik validation error */
  error?: string;

  /** Function that provides the error to use in custom component */
  errorComponent?: (error: string) => React.ReactNode;

  /** HTML input type attribute */
  htmlType?: 'text' | 'number' | 'date' | 'password';

  /** id of the input to be used with Formik */
  id?: string;

  /** Label of the input */
  label?: React.ReactNode;

  /** Function to handle blur event */
  onBlur?: React.EventHandler<SyntheticEvent>;

  /** Function to handle change event */
  onChange?: React.EventHandler<SyntheticEvent>;

  /** Function to handle focus event */
  onFocus?: React.EventHandler<SyntheticEvent>;

  /** Placeholder for the input */
  placeholder?: string;

  /** name of the input to be used with Formik */
  name?: string;

  /** Size of input */
  inputSize?: 'small' | 'large';

  /** Ref to be passed to the input */
  ref?: React.Ref<HTMLInputElement> | null;

  /** Global theme in ThemeProvider */
  theme?: any; // eslint-disable-line

  /** value of the input */
  value?: string;
}

const Container = styled.div`
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
`;

// eslint-disable-next-line
const Error = styled.div<any>`
  color: ${(props) => props.theme.colors.danger};
`;

const StyledInput = styled.input<InputProps>`
  height: ${(props) => props.theme.input.heightSmall};
  font-size: ${(props) => props.theme.input.fontSizeSmall};

  ${(props) => props.inputSize === 'large' && css`
    height: ${props.theme.input.heightLarge};
    font-size: ${props.theme.input.fontSizeLarge};
  `};

  width: 100%;
  -webkit-appearance: none;

  font-family: inherit;

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

export const Input: React.FunctionComponent<InputProps> = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    disabled,
    error,
    errorComponent,
    htmlType,
    id,
    label,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputSize,
    borderType,
    theme: themeProp,
    value
  } = props;

  function onChangeHandler(e: SyntheticEvent) {
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <Container className={className}>
      <Label>
        {label && label}
        <StyledInput
          label={null}
          error={error}
          disabled={disabled}
          type={htmlType}
          id={id}
          name={name}
          onBlur={onBlur}
          onChange={onChangeHandler}
          onFocus={onFocus}
          placeholder={placeholder}
          borderType={borderType}
          inputSize={inputSize}
          ref={ref}
          theme={themeProp}
          value={value}
        />
      </Label>
      {(error && errorComponent) &&
        <Error theme={themeProp}>
          {errorComponent(error)}
        </Error>
      }
    </Container>
  );
});

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
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  placeholder: '',
  inputSize: 'small',
  theme,
  value: undefined
};
