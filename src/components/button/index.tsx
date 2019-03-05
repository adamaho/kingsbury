import * as React from 'react';
import styled from '../../styles/theme';

import {
  ITheme
} from '../../styles/theme';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'disabled' | 'primary' | 'ghost';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  theme: ITheme;
}

const ButtonComponent: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <button
      className={'kb-button'}
      {...props}
    >
      {props.children}
    </button>
  );
}

const Button = styled(ButtonComponent)`
  background-color: red;

  padding: 100px;
  &:active {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`

export default Button;
