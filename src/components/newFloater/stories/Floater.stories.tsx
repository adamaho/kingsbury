import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import {
  Button
} from '../..';

import {
  NewFloater
} from '../newFloater';

const Container = styled.div`
  background: red;
  height: 200px;
  width: 200px;
`;

const stories = storiesOf('New Floater', module);

stories.add(
  'Default',
  () => {
    const [showPortal, setShowPortal] = React.useState(false);
    const anchorRef = React.useRef(null);

    return (
      <React.Fragment>
        <Button ref={anchorRef} onClick={() => setShowPortal(!showPortal)}>
          Show Portal
        </Button>
        <NewFloater anchorElement={anchorRef.current} open={showPortal}>
          <Container>ssdf</Container>
        </NewFloater>
      </React.Fragment>
    );
  },
  { info: { propTablesExclude: [Button] },
  }
);
