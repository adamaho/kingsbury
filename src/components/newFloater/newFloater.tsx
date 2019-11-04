import * as React from 'react';
import styled from 'styled-components';

import {
  Portal
} from "..";

import {
  AnimatePresence,
  motion,
  MotionProps
} from "framer-motion";

interface NewFloaterProps {
  /** Content to show in the portal */
  anchorElement: HTMLDivElement | null;

  /** Content to show in the portal */
  animationProps?: MotionProps;

  /** Content to show in the portal */
  children: React.ReactNode;

  /** Portal node to mount against */
  container?: any;

  /** Disables portal behaviour and returns node to Parents DOM hierarchy */
  disablePortal?: boolean;

  /** Disables portal behaviour and returns node to Parents DOM hierarchy */
  matchAnchorWidth?: boolean;

  /** Whether or not to show portal */
  open?: boolean;
}

const Container = styled.div<any>`
  display: ${(props) => props.portalVisibility ?
    'inherit' :
    'none'
  };
`;

export const NewFloater: React.FunctionComponent<NewFloaterProps> = (props) => {
  const {
    anchorElement,
    animationProps,
    children,
    matchAnchorWidth,
    open
  } = props;

  const [portalElement, setPortalRef] = React.useState<HTMLDivElement | null>(null);
  const [anchorPoint, setAnchorPoint] = React.useState<any>({});

  const handleRef = React.useCallback((ref) => {
    setPortalRef(ref);
  },[setPortalRef]);

  React.useEffect(() => {
    const aPoint = getAnchorPoint();
    setAnchorPoint(aPoint);
  }, [portalElement]);

  function getAnchorPoint() {
    // for now just going to have it default to the middle and then we will sort out the math and such
    if (anchorElement && portalElement) {
      const portalDims = portalElement.getBoundingClientRect();
      return {
        top: anchorElement.offsetTop + anchorElement.offsetHeight,
        left: anchorElement.offsetLeft
      };
    }
  }

  console.log(anchorElement && anchorElement.offsetWidth);

  return (
    <AnimatePresence>
      {(open && anchorElement) &&
        <Portal>
          <motion.div
            {...animationProps}
          >
            <Container
              style={{
                position: 'absolute',
                width: matchAnchorWidth ?
                  `${anchorElement.offsetWidth}px` :
                  'auto',
                ...anchorPoint
              }}
              ref={handleRef}
              portalVisibility={portalElement}
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
    transition: { duration: 0.2 }
  },
  matchAnchorWidth: true,
  open: false
};


// anchorEl
// children
// open
// animationObject
// container
// position

