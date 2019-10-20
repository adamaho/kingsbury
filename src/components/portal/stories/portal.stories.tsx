import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Button from '../../button';
import Portal from '..';

const stories = storiesOf('Portal', module);

stories.add(
  'Default',
  () => {
    const [showPortal, setPortalVisibilty] = React.useState(false);

    return (
      <React.Fragment>
        <Button onClick={() => setPortalVisibilty(!showPortal)}>
          Show Portal
        </Button>
        <Portal visible={showPortal}><div>asdfasdf</div></Portal>
      </React.Fragment>
    );
  },
  { info: { propTablesExclude: [Button] } }
);