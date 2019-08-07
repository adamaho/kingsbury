import * as React from 'react';

import styled, {
  theme
} from '../../../styles/theme';

import {
  IDrawerProps,
  IContainerProps,
  DrawerState
} from '../types';

import {
  VERT_DRAWER_CONFIG_MAP
} from '../common';

import DrawerToggle from './DrawerToggle';
import DrawerHeader from './DrawerHeader';

const Container = styled.div<IContainerProps>`
  position: fixed;
  top: ${(props) => VERT_DRAWER_CONFIG_MAP[props.drawerState].top};
  left: 0px;
  background-color: ${(props) => props.theme.colors.white};

  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: ${(props) => VERT_DRAWER_CONFIG_MAP[props.drawerState].borderRadius};

  box-shadow: ${(props) => `0px 0px 7px rgba(${props.theme.colors.blackRGB}, 0.20)`};

  transition: all ${(props) => props.theme.animations.time.fast} cubic-bezier(0,1.04,.47,.98);
`;

const VertDrawer: React.FunctionComponent<IDrawerProps> = (props) => {

  function setDrawerState(drawerState: DrawerState) {
    if (props.setDrawerState) {
      props.setDrawerState(drawerState);
    }
  }

  return (
    <Container
      drawerState={props.drawerState}
    >
      {props.showToggle &&
        <DrawerToggle
          onClick={
            (props.drawerState === 'OPEN') ?
              () => setDrawerState('PARTIAL') :
              () => setDrawerState('OPEN')
          }
          drawerState={props.drawerState}
        />
      }
      <DrawerHeader onClose={() => setDrawerState('CLOSED')}>
        {props.drawerHeaderContent}
      </DrawerHeader>
      {props.children}
    </Container>
  );
}

VertDrawer.defaultProps = {
  theme: theme,
  showToggle: true
};

export default VertDrawer;
