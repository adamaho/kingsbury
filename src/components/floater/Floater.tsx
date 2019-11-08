import * as React from 'react';
import styled from 'styled-components';

import {
  AnimatePresence,
  motion,
  MotionProps
} from 'framer-motion';

import {
  Portal
} from '..';

import {
  Position,
  PositionValue,
  getRelativePosition
} from '../utils/getRelativePosition';

import {
  useResizeEffect
} from "../../hooks/useResizeEffect";

import {
  CSSProperties
} from "react";

interface FloaterProps {
  /** Element to anchor portal to */
  anchorElement: HTMLDivElement | null;

  /** Animation props for motion.div */
  animationProps?: MotionProps;

  /** Content to show in the portal */
  children: React.ReactNode;

  /** Portal node to mount against (defaults to document.body) */
  container?: HTMLElement | null;

  /** Disables portal behaviour and returns node to Parents DOM hierarchy */
  disablePortal?: boolean;

  /** unique key used for motion to know when the floater is unmounting */
  floaterKey?: string | number;

  /** Portal will match the anchor element width when true */
  matchAnchorWidth?: boolean;

  /** Whether or not to show portal */
  open?: boolean;

  /** Position of the floater with respect the the anchor element */
  position: Position;

  /** style of the motion div. Typically used for height/width transitions */
  style?: CSSProperties;
}

const Container = styled.div<{ portalVisibility: boolean }>`
  visibility: ${(props) => props.portalVisibility ?
    'visible' :
    'hidden'
  };
`;

export const Floater: React.FunctionComponent<FloaterProps> = (props) => {
  const {
    anchorElement,
    animationProps,
    children,
    container,
    disablePortal,
    floaterKey,
    matchAnchorWidth,
    open,
    position,
    style
  } = props;

  const [portalElement, setPortalElement] = React.useState<HTMLDivElement | null>(null);
  const [portalPosition, setPortalPosition] = React.useState<PositionValue | null>(null);

  // set the ref when react calls it back
  const handleRef = React.useCallback((ref) => {
    setPortalElement(ref);
  },[setPortalElement]);

  // update the portal position
  const updatePortalPosition = React.useCallback(() => {
    if (portalElement && anchorElement) {
      const portalPosition = getRelativePosition(position, anchorElement, portalElement);
      setPortalPosition(portalPosition);
    }
  }, [portalElement, anchorElement, position]);

  // subscribe to window size
  const windowSize = useResizeEffect();

  // on open changes, update the portal position
  React.useEffect(() => {
    if (open) {
      updatePortalPosition()
    }
  },[open, windowSize, updatePortalPosition]);

  const portalVisibility: boolean = (portalElement !== null && portalPosition !== null);

  return (
    <AnimatePresence>
      {(open && anchorElement) && (
        <Portal
          container={container}
          disablePortal={disablePortal}
        >
          <motion.div
            key={floaterKey}
            style={{
              position: 'absolute',
              width: matchAnchorWidth ?
                `${anchorElement.offsetWidth}px` :
                'auto',
              ...portalPosition,
              ...style
            }}
            {...animationProps}
          >
            <Container
              ref={handleRef}
              portalVisibility={portalVisibility}
            >
              {children}
            </Container>
          </motion.div>
        </Portal>
        )
      }
    </AnimatePresence>
  )
};

Floater.defaultProps = {
  animationProps: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },
  disablePortal: false,
  container: undefined,
  floaterKey: 'floater',
  matchAnchorWidth: false,
  open: false,
  position: 'left'
};


