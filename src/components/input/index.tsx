import * as React from 'react';

import styled, {
  ITheme,
  theme
} from '../../styles/theme';

interface IInputProps {
  className?: string;
  disabled: boolean;
  error?: string;
  errorComponent?: (error: string) => React.ReactNode;
  id?: string; // to be used with formik
  label?: React.ReactNode;
  name?: string // to be used with formik
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  theme: ITheme;
}

class InputComponent extends React.Component<IInputProps> {

  static defaultProps = {
    disabled: false,
    errorComponent: (error: string) => <div>{error}</div> 
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
      id,
      name,
      label,
      error,
      errorComponent,
      className,
      disabled,
      placeholder
    } = this.props;

    return (
      <React.Fragment>
        {label &&
          <label>{label}</label>
        }
        <input
          id={id}
          name={name}
          className={className}
          placeholder={placeholder}
          onChange={this.onInputChange}
          disabled={disabled}
        />
        {(error && errorComponent) &&
          errorComponent(error)
        }
      </React.Fragment>
    );
  }
}

const Input = styled(InputComponent)`
  height: ${(props: IInputProps) => props.theme.input.height};
  width: 100%;
  -webkit-appearance: none;

  font-family: inherit;
  font-size: ${(props: IInputProps) => props.theme.input.fontSize};

  background-color: ${(props: IInputProps) => props.theme.input.background};
  color: ${(props: IInputProps) => props.theme.input.color};

  border: ${(props: IInputProps) => props.theme.input.border};
  border-color: ${(props: IInputProps) => props.error ?
    props.theme.colors.danger :
    props.theme.input.borderColor
  };

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