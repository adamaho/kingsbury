import * as React from 'react';
import styled from 'styled-components';

import {
  motion
} from 'framer-motion';

import {
  theme
} from '../../theme';

import {
  Floater
} from '..';

interface PopoverProps {

  /** Content to show in the floater */
  children?: React.ReactNode;

  /** classname for the floater */
  className?: string;

  /** Match with of Popover to the width of the Trigger */
  matchTriggerWidth?: boolean;

  /** Floater node to mount against */
  mountNode?: HTMLElement;

  /** Component used to trigger floater.  */
  triggerComponent?: React.ReactNode | null;

  /** Component trigger type  */
  triggerType?: 'hover' | 'click';

  /** Global theme in ThemeProvider */
  theme?: any;

}

const Container = styled.div`
  background: ${(props) => props.theme.popover.background};
  border: ${(props) => props.theme.popover.border};
  border-color: ${(props) => props.theme.popover.borderColor};
  border-radius: ${(props) => props.theme.popover.borderRadius};
  box-shadow: ${(props) => props.theme.popover.boxShadow};
  margin: ${(props) => props.theme.popover.margin};
  
  height: 200px;
`;

export const Popover: React.FunctionComponent<PopoverProps> = (props) => {
  const {
    children,
    className,
    matchTriggerWidth,
    mountNode,
    theme,
    triggerComponent,
    triggerType
  } = props;

  return (
    <Floater
      floaterMountNode={mountNode}
      matchTriggerWidth={matchTriggerWidth}
      triggerType={triggerType}
      triggerComponent={triggerComponent}
    >
      <motion.div
        initial={{ y: -10, opacity: 0, skewX: '-10deg' }}
        animate={{ y: 0, opacity: 1, skewX: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Container
          className={className}
          theme={theme}
        >
          { children }
        </Container>
      </motion.div>
    </Floater>
  );
};

Popover.defaultProps = {
  theme
};
