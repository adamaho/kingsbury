import * as React from 'react';

import {
  IDrawerProps
} from './types';

import {
  theme
} from '../../styles/theme';

import VertDrawer from './components/VerticalDrawer';

const Drawer: React.FunctionComponent<IDrawerProps> = (props) => {
  return (
    <VertDrawer
      {...props}
    >
      {props.children}
    </VertDrawer>
  );
}

Drawer.defaultProps = {
  theme,
  showToggle: true
};

export default Drawer;
