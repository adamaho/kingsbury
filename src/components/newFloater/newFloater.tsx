import * as React from 'react';
import styled from 'styled-components';

import {
  Portal
} from "..";

import {
  AnimatePresence,
  motion
} from "framer-motion";

interface NewFloaterProps {
  /** Content to show in the portal */
  anchorElement: HTMLDivElement | null;

  /** Content to show in the portal */
  children: React.ReactNode;

  /** Portal node to mount against */
  container?: any;

  /** Disables portal behaviour and returns node to Parents DOM hierarchy */
  disablePortal?: boolean;

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
    children,
    open
  } = props;

  const [portalRef, setPortalRef] = React.useState(null);

  const handleRef = React.useCallback((ref) => {
    setPortalRef(ref);
  },[setPortalRef]);

  // if (!open || !anchorElement) {
  //   return null;
  // }

  // const dims = portalRef.getBoundingClientRect();

  console.log(portalRef);
  return (
    <AnimatePresence>
      {(open && anchorElement) &&
        <Portal>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Container
              style={{
                position: 'absolute',
                top: anchorElement.offsetTop + anchorElement.offsetHeight,
                left: anchorElement.offsetLeft
              }}
              ref={handleRef}
              portalVisibility={portalRef}
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
  open: false
};


// anchorEl
// children
// open
// animationObject
// container
// position

