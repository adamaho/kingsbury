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
  type?: 'password' | undefined;
  size?: 'small' | 'large';
  showBorder?: boolean;
  theme: ITheme;
}

class InputComponent extends React.Component<IInputProps> {

  static defaultProps = {
    disabled: false,
    type: undefined,
    size: 'small',
    showBorder: true,
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
      type,
      placeholder
    } = this.props;

    return (
      <div className={`kingsbury-input ${className}`}>
        {label &&
          <label>{label}</label>
        }
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={this.onInputChange}
          disabled={disabled}
        />
        {(error && errorComponent) &&
          errorComponent(error)
        }
      </div>
    );
  }
}

const Input = styled(InputComponent)`
  input {
    height: ${(props: IInputProps) => props.size === 'small' ?
      props.theme.input.heightSmall :
      props.theme.input.heightLarge
    };
    width: 100%;
    -webkit-appearance: none;

    font-family: inherit;
    font-size: ${(props: IInputProps) => props.size === 'small' ?
      props.theme.input.fontSizeSmall :
      props.theme.input.fontSizeLarge
    };

    background-color: ${(props: IInputProps) => props.theme.input.background};
    color: ${(props: IInputProps) => props.theme.input.color};

    border: ${(props: IInputProps) => props.showBorder ?
      props.theme.input.border :
      'none'
    };

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
      border: ${(props: IInputProps) => props.showBorder ?
        `1px solid ${props.theme.colors.primary}` :
        'none'
      };
      outline: none;
    }
  }

  label {
    font-size: 12px;
  }
`;

Input.defaultProps = {
  theme: theme,
  size: 'small',
  showBorder: true
}

export default Input;