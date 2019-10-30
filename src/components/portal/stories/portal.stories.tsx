import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  Button
} from '../../button/Button';

import {
  Portal
} from '..';

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
        <Portal
          visible={showPortal}
        >
          <div>I am the portal</div>
        </Portal>
      </React.Fragment>
    );
  },
  { info:
    {
      propTablesExclude: [Button]
    },
  }
);

stories.add(
  'Custom Mount Node',
  () => {
    const [showPortal, setPortalVisibilty] = React.useState(false);
    const container = React.useRef(null);

    return (
      <React.Fragment>
        <Button onClick={() => setPortalVisibilty(!showPortal)}>
          Show Portal
        </Button>
        <Portal
          visible={showPortal}
          portalMountNode={container.current}
        >
          <div>I am the portal</div>
        </Portal>
        <div className="container-to-mount-to" ref={container} />
      </React.Fragment>
    );
  },
  { info:
    {
      propTablesExclude: [Button]
    },
  }
);
