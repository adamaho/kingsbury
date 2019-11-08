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
`;

const stories = storiesOf('Floater', module);

stories.add(
  'Default',
  () => {
    const [showPortal, setShowPortal] = React.useState(false);
    const [anchorElement, setAnchorElement] = React.useState(null);

    const handleButtonClick = (e: any) => {
      const element = e.target;

      if (element === anchorElement) {
        setAnchorElement(null);
        setShowPortal(false);
      } else {
        setAnchorElement(element);
        setShowPortal(true);
      }
    };

    return (
      <div>
        <Button
          onClick={handleButtonClick}
        >
          Left
        </Button>
        <Button
          onClick={handleButtonClick}
        >
          Right
        </Button>
        <Floater
          position={'bottom'}
          anchorElement={anchorElement}
          open={showPortal}
          matchAnchorWidth
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
