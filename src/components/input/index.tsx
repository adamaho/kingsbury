import * as React from 'react';
import styled from '../../styles/theme';

import {
  ITheme,
  theme
} from '../../styles/theme';

interface IInputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  disabled: boolean;
  theme: ITheme;
}

class InputComponent extends React.Component<IInputProps> {

  static defaultProps = {
    disabled: false
  }

  onInputChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      onChange
    } = this.props;

    if (onChange) {
      onChange(e);
    }
  }

  render() {
    const {
      className,
      disabled,
      placeholder
    } = this.props;

    return (      
      <input
        className={className}
        placeholder={placeholder}
        onChange={this.onInputChange}
        disabled={disabled}
      />
    );
  }
}

const Input = styled(InputComponent)`
  height: ${(props: IInputProps) => props.theme.input.height};
  width: 100%;
  -webkit-appearance: none;
  font-size: 16px;
  background-color: ${(props: IInputProps) => props.theme.input.background};
  color: ${(props: IInputProps) => props.theme.input.color};

  border: ${(props: IInputProps) => props.theme.input.border};
  border-color: ${(props: IInputProps) => props.theme.input.borderColor};
  border-radius: ${(props: IInputProps) => props.theme.input.borderRadius};
  box-sizing: border-box;

  line-height: 38px;
  padding: 10px 0px 10px 10px;

  &::placeholder {
    color: ${(props: IInputProps) => props.theme.input.placeholderColor};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    border: ${(props: IInputProps) => `1px solid ${props.theme.colors.primary}`};
    outline: none;
  }
`;

Input.defaultProps = {
  theme: theme
}

export default Input;