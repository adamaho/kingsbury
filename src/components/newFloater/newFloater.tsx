import * as React from 'react';
import styled from 'styled-components';

import {
  AnimatePresence,
  motion,
  MotionProps
} from "framer-motion";

import {
  Portal
} from "..";

import {
  Position,
  PositionValue,
  getRelativePosition
} from "../utils/getRelativePosition";

interface NewFloaterProps {
  /** Content to show in the portal */
  anchorElement: HTMLDivElement | null;

  /** Content to show in the portal */
  animationProps?: MotionProps;

  /** Content to show in the portal */
  children: React.ReactNode;

  /** Portal node to mount against */
  container?: HTMLElement | null;

  /** Disables portal behaviour and returns node to Parents DOM hierarchy */
  disablePortal?: boolean;

  /** Portal will match the anchor element width when true */
  matchAnchorWidth?: boolean;

  /** Whether or not to show portal */
  open?: boolean;

  /** Position of the floater with respect the the anchor element */
  position: Position;
}

const Container = styled.div<{ portalVisibility: boolean }>`
  visibility: ${(props) => props.portalVisibility ?
    'visible' :
    'hidden'
  };
`;

export const NewFloater: React.FunctionComponent<NewFloaterProps> = (props) => {
  const {
    anchorElement,
    animationProps,
    children,
    container,
    disablePortal,
    matchAnchorWidth,
    open,
    position
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


  // subscribe to window resize and clean up on unmount
  React.useEffect(() => {
    function onWindowResize() {
      if (open) {
        updatePortalPosition();
      }
    }

    window.addEventListener<'resize'>('resize', onWindowResize);

    return () => {
      window.removeEventListener<'resize'>('resize', onWindowResize);
    }
  }, [open, updatePortalPosition]);


  // on open changes, update the portal position
  React.useEffect(() => {
    if (open) {
      updatePortalPosition()
    } else {
      setPortalPosition(null);
    }
  },[open, updatePortalPosition]);

  const portalVisibility: boolean = (portalElement !== null && portalPosition !== null);

  return (
    <AnimatePresence>
      {(open && anchorElement) &&
        <Portal
          container={container}
          disablePortal={disablePortal}
        >
          <motion.div
            {...animationProps}
          >
            <Container
              role={"tooltip"}
              style={{
                position: 'absolute',
                width: matchAnchorWidth ?
                  `${anchorElement.offsetWidth}px` :
                  'auto',
                ...portalPosition
              }}
              ref={handleRef}
              portalVisibility={portalVisibility}
            >
              {children}
            </Container>
          </motion.div>
        </Portal>
      }
    </AnimatePresence>
  )
};

NewFloater.defaultProps = {
  animationProps: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },
  disablePortal: false,
  container: undefined,
  matchAnchorWidth: false,
  open: false,
  position: 'left'
};


