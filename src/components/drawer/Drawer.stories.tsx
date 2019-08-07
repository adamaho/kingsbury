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

  const [drawerState, setDrawerState] = React.useState<DrawerState>('CLOSED');

  return (
    <React.Fragment>
      <Button buttonType="primary" onClick={() => setDrawerState('OPEN')}>
        Open
      </Button>
      <Drawer
        drawerType={'vertical'}
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        drawerHeaderContent={<Button buttonType="primary">save</Button>}
      >
        <Button buttonType="warning" onClick={() => setDrawerState('CLOSED')}>
          Close
        </Button>
      </Drawer>
    </React.Fragment>
  );
};

stories.add(
  'Vertical',
  () => (
    <VerticalDrawer />
  )
);


