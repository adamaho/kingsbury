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
  onClick: () => void;
  theme?: ITheme;
}

const ToggleContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const ToggleItemContainer = styled.div`
  height: 20px;
  cursor: pointer;
`;

const ToggleItem = styled.div<IToggleItemProps>`
  display: inline-block;
  height: 6px;
  width: 25px;
  border-radius: 3px;

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
  drawerState,
  onClick
}) => (
  <ToggleContainer>
    <ToggleItemContainer onClick={onClick}>
      <ToggleItem side="left" open={drawerState === 'OPEN'} />
      <ToggleItem side="right" open={drawerState === 'OPEN'} />
    </ToggleItemContainer>
  </ToggleContainer>
);

Toggle.defaultProps = {
  theme
};

export default Toggle;


