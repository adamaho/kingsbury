import * as React from 'react';
import styled from 'styled-components';

import {
  Input,
  Floater,
  Paper
} from "..";

import {
  motion
} from 'framer-motion';

import {
  SVGChevronBottom
} from '../icons';

const Container = styled.div``;

const FloaterContainer = styled(Paper)`
  padding: 10px;
  margin-top: 5px;
`;

const chevronVariants = {
  closed: {
    rotate: 0
  },
  open: {
    rotate: 180
  },
};

export const Select: React.FunctionComponent = (props) => {
  const [anchorElement, setAnchorElement] = React.useState(null);

  const onInputFocus = React.useCallback((e) => {
    setAnchorElement(e.target);
  }, []);

  const onInputBlur = React.useCallback((e) => {
    setAnchorElement(null);
  }, []);

  return (
    <Container>
      <Input
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        readOnly
        inputSuffix={
          <motion.span
            style={{ height: '24px', width: '24px'}}
            initial={"closed"}
            exit={"closed"}
            animate={anchorElement == null ? 'closed' : 'open'}
            variants={chevronVariants}
          >
            <SVGChevronBottom />
          </motion.span>
        }
      />
      <Floater
        position={'bottom'}
        anchorElement={anchorElement}
        open={anchorElement !== null}
        matchAnchorWidth
      >
        <FloaterContainer>
          <div>Hey what is going on</div>
        </FloaterContainer>
      </Floater>
    </Container>
  );
};


