import * as React from 'react';

import styled, {
  ITheme,
  theme,
  css
} from '../../../styles/theme';

import {
  DrawerState
} from '../types';

interface IToggleItemProps {
  side: 'left' | 'right';
  open: boolean;
  theme?: ITheme
};

interface IToggleProps {
  drawerState: DrawerState;
  theme?: ITheme;
}

const ToggleItem = styled.div<IToggleItemProps>`
  height: 6px;
  width: 25px;
  border-radius: 3px;
  margin-top: ${(props) => props.open ? '15px' : '10px'};

  background-color: ${(props) => props.theme.drawer.toggleColor};

  ${(props) => props.open ? css`
      transform-origin: center;
      transform:
        ${() => props.side === 'left' && 'translateX(8px)'}
        rotate(${() => props.side === 'left' ? '35deg' : '-35deg'});
    ` : css`
      ${props.side === 'left' && `transform: translateX(5px)`};
    `
  };

  transition: all ${(props) => props.theme.animations.time.fast} ease-out;
  transition-delay: 0.05s;
`;

ToggleItem.defaultProps = {
  theme
};

const Toggle: React.FunctionComponent<IToggleProps> = ({
  drawerState
}) => (
  <React.Fragment>
    <ToggleItem side="left" open={drawerState === 'OPEN'} />
    <ToggleItem side="right" open={drawerState === 'OPEN'} />
  </React.Fragment>
);

Toggle.defaultProps = {
  theme
};

export default Toggle;


