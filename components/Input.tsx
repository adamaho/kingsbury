import * as React from 'react';
import * as classNames from 'classnames';
import styled from '../styles/theme';

import {
  ITheme
} from '../styles/theme';

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
        className={classNames('kb-input', className, {
          disabled
        })}
        placeholder={placeholder}
        onChange={this.onInputChange}
      />
    );
  }
}

export const Input = styled(InputComponent)`
  height: ${(props: IInputProps) => props.theme.input.height};
  width: 100%;
  font-family: ${(props: IInputProps) => props.theme.fontFamily};
  font-size: 16px;
  background-color: ${(props: IInputProps) => props.theme.input.background};
  color: ${(props: IInputProps) => props.theme.colors.white};

  border: ${(props: IInputProps) => props.theme.input.border};
  border-color: ${(props: IInputProps) => props.theme.input.borderColor};
  border-radius: ${(props: IInputProps) => props.theme.input.borderRadius};
  box-sizing: border-box;

  line-height: 38px;
  padding: 10px 0px 5px 10px;

  &::placeholder {
    color: ${(props: IInputProps) => props.theme.input.placeholderColor};
  }

  &.disabled {
    cursor: not-allowed;
  }

  &:focus {
    border: ${(props: IInputProps) => `1px solid ${props.theme.colors.primary}`};
    outline: none;
  }
`;