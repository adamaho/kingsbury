import * as React from 'react';
import styled from 'styled-components';

import {
  AnimatePresence,
  motion,
  MotionProps
} from 'framer-motion';

import {
  theme
} from '../../theme';

import {
  Floater
} from '..';

interface PopoverProps {

  /** Animation object for popover. See Framer motion.div. */
  animationObject?: MotionProps;

  /** Content to show in the Popover */
  children?: React.ReactNode;

  /** classname for the Popover */
  className?: string;

  /** Match with of Popover to the width of the Trigger */
  matchTriggerWidth?: boolean;

  /** Floater node to mount against */
  mountNode?: HTMLElement;

  /** Component used to trigger Popover.  */
  triggerComponent: React.ReactNode | null;

  /** Event to trigger Popover  */
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
    animationObject,
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
        key={"popover"}
        {...animationObject}
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
  animationObject: {
    initial: {y: -10, opacity: 0, rotateY: '-10deg'},
    animate: {y: 0, opacity: 1, rotateY: 0},
    exit: {y: -10},
    transition: {duration: 1}
  },
  children: '',
  className: '',
  matchTriggerWidth: false,
  triggerType: 'click',
  theme
};
