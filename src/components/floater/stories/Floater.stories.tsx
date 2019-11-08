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
  background: white;
  margin-top: 5px;
  height: 100px;
  
  border-radius: 7px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.20);
`;

const stories = storiesOf('Floater', module);

stories.add(
  'Default',
  () => {
    const [hasMountedFloater, setHasMountedFloater] = React.useState(false);
    const [anchorElement, setAnchorElement] = React.useState(null);

    const handleButtonClick = (e: any) => {
      const element = e.target;

      if (element === anchorElement) {
        setAnchorElement(null);
        setHasMountedFloater(false);
      } else if (anchorElement) {
        setAnchorElement(element);
        setHasMountedFloater(true);
      } else {
        setAnchorElement(element);
      }
    };

    return (
      <div>
        <Button
          onClick={handleButtonClick}
        >
          Move to Me 1
        </Button>
        <span style={{ display: 'inline-block', width: '20px' }} />
        <Button
          onClick={handleButtonClick}
        >
          Move to Me 2
        </Button>
        <span style={{ display: 'inline-block', width: '20px' }} />
        <Button
          onClick={handleButtonClick}
        >
          Move to Me 3
        </Button>
        <Floater
          position={'bottom'}
          anchorElement={anchorElement}
          open={anchorElement !== null}
          animationProps={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            positionTransition: hasMountedFloater,
            transition: { duration: 0.3 }
          }}
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
