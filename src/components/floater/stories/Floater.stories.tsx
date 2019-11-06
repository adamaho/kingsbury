import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import {
  Button
} from '../..';

import {
  Floater
} from '../Floater';

const Container = styled.div`
  background: red;
  height: 100px;
  width: 100px;
`;

const stories = storiesOf('Floater', module);

stories.add(
  'Default',
  () => {
    const [showPortal, setShowPortal] = React.useState(false);
    const anchorRef = React.useRef(null);

    return (
      <div style={{ paddingLeft: 1000 }}>
        <Button
          ref={anchorRef}
          onClick={() => setShowPortal(!showPortal)}
        >
          Show Portal
        </Button>
        <Floater
          position={'right'}
          anchorElement={anchorRef.current}
          open={showPortal}
          disablePortal
        >
          <Container />
        </Floater>
      </div>
    );
  },
  { info: { propTablesExclude: [Button] },
  }
);
