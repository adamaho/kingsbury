import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  DrawerState
} from './types';

import Drawer from '.';
import Button from '../button';

const stories = storiesOf('Drawer', module);

const VerticalDrawer = () => {
  const [drawerState, setDrawerState] = React.useState<DrawerState>('PARTIAL');

  return (
    <Drawer
      drawerType={'vertical'}
      drawerState={drawerState}
    >
      <Button
        buttonType="primary"
        onClick={() => setDrawerState('PARTIAL')}
      >
        Partial
      </Button>
      <Button
        buttonType="primary"
        onClick={() => setDrawerState('OPEN')}
      >
        Open
      </Button>
    </Drawer>
  );
};

stories.add(
  'Vertical',
  () => (
    <VerticalDrawer />
  )
);


