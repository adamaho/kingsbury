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

const Container = styled.div<any>`
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
  const [portalPosition, setPortalPosition] = React.useState<any>(null);

  const handleRef = React.useCallback((ref) => {
    setPortalElement(ref);
  },[setPortalElement]);

  function onWindowResize() {
    if (open) {
      updatePortalPosition();
    }
  }

  React.useEffect(() => {
    window.addEventListener<'resize'>('resize', onWindowResize);

    return () => {
      window.removeEventListener<'resize'>('resize', onWindowResize);
    }
  }, [onWindowResize]);

  React.useEffect(() => {
    if (open) {
      updatePortalPosition()
    }
  },[open, portalElement, position, updatePortalPosition]);

  React.useEffect(() => {
    if (!open) {
      setPortalPosition(null);
    }
  }, [open]);

  function updatePortalPosition() {
    if (portalElement && anchorElement) {
      const portalPosition = getRelativePosition(position, anchorElement, portalElement);
      setPortalPosition(portalPosition);
      console.log(portalPosition);
    }
  }

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
              portalVisibility={portalElement && portalPosition}
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


