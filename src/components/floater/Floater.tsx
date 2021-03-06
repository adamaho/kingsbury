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
  getRelativePosition
} from '../../utils/getRelativePosition';

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

  /** Content to show in the floater */
  children: React.ReactNode;

  /** Floater node to mount against (defaults to document.body) */
  container?: () => HTMLElement | undefined;

  /** Disables floater behaviour and returns node to Parents DOM hierarchy */
  disableFloater?: boolean;

  /** Unique key used for motion to know when the floater is unmounting */
  floaterKey?: string | number;

  /** Floater will match the anchor element width when true */
  matchAnchorWidth?: boolean;

  /** Whether or not to show floater */
  open?: boolean;

  /** Position of the floater with respect the the anchor element */
  position: string[];

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
    disableFloater,
    floaterKey,
    matchAnchorWidth,
    open,
    position,
    style
  } = props;

  const [portalElement, setPortalElement] = React.useState<HTMLDivElement | null>(null);
  const [portalPosition, setPortalPosition] = React.useState<Position| null>(null);

  // set the ref when react calls it back
  const handleRef = React.useCallback((ref) => {
    setPortalElement(ref);
  },[setPortalElement]);

  // get the container for floater to mount to
  const getContainer = React.useCallback<() => HTMLElement | undefined>(() => {
    if (typeof container === 'function') {
      return container();
    }
  }, [container]);

  // update the portal position
  const updatePortalPosition = React.useCallback(() => {
    if (portalElement && anchorElement) {
      const portalPosition = getRelativePosition(anchorElement, portalElement, position, getContainer());
      setPortalPosition(portalPosition);
    }
  }, [getContainer, position, portalElement, anchorElement]);

  // subscribe to window size
  // const windowSize = useResizeEffect();

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
      {(open && anchorElement) && (
        <Portal
          container={getContainer}
          disablePortal={disableFloater}
        >
          <motion.div
            key={floaterKey}
            ref={handleRef}
            style={{
              position: 'absolute',
              width: matchAnchorWidth ?
                `${anchorElement.offsetWidth}px` :
                'auto',
              top: -999, // default position before calc
              left: -999, // default position before calc
              ...portalPosition,
              ...style
            }}
            {...animationProps}
          >
            <Container
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
  disableFloater: false,
  container: undefined,
  floaterKey: 'floater',
  matchAnchorWidth: false,
  open: false,
  position: ['bc', 'tc']
};


