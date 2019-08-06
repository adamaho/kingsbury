import * as React from 'react';

import {
  IDrawerProps
} from './types';

import {
  theme
} from '../../styles/theme';

import VertDrawer from './VerticalDrawer';

const Drawer: React.FunctionComponent<IDrawerProps> = (props) => (
  <VertDrawer {...props}>
    {props.children}
  </VertDrawer>
);

Drawer.defaultProps = {
  theme
};

export default Drawer;
