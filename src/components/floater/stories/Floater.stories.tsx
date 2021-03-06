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
    const [floaterPosition, setFloaterPosition] = React.useState<string[]>(['bc', 'tc']);

    const handleButtonClick = (e: any, position: string[]) => {
      const element = e.target;

      if (element === anchorElement) {
        setAnchorElement(null);
        setHasMountedFloater(false);
      } else if (anchorElement) {
        setAnchorElement(element);
        setFloaterPosition(position);
        setHasMountedFloater(true);
      } else {
        setAnchorElement(element);
        setFloaterPosition(position);
      }
    };

    return (
      <div>
        <Button
          onClick={(e) => handleButtonClick(e, ['tc', 'bc'])}
        >
          Move to Top
        </Button>
        <span style={{ display: 'inline-block', width: '20px' }} />
        <Button
          onClick={(e) => handleButtonClick(e, ['bc', 'tc'])}
        >
          Move to Bottom
        </Button>
        <span style={{ display: 'inline-block', width: '20px' }} />
        <Button
          onClick={(e) => handleButtonClick(e, ['cl', 'br'])}
        >
          Move to Right
        </Button>
        <Floater
          position={floaterPosition}
          anchorElement={anchorElement}
          open={anchorElement !== null}
          animationProps={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            positionTransition: hasMountedFloater
          }}
          matchAnchorWidth
        >
          <Container />
        </Floater>
      </div>
    );
  },
  { info: { propTablesExclude: [Button] },
  }
);
