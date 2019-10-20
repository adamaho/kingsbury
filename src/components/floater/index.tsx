import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styled from 'styled-components';

import Portal from '../portal';

export interface FloaterProps {

  /** Content to show in the floater */
  children?: React.ReactNode;

  /** Floater node to mount against */
  floaterMountNode?: HTMLElement;

  /** Component used to trigger floater.  */
  triggerComponent?: React.ReactNode | null;
}

const Container = styled.div``;

const TriggerContainer = styled.div`
  display: inline-block;
`;

export const Floater: React.FunctionComponent<FloaterProps> = (props) => {
  const {
    children,
    triggerComponent
  } = props;

  const [showFloater, setShowFloater] = React.useState(false);
  const floaterRef = React.useRef(null);

  console.log(floaterRef);

  return (
    <Container>
      <TriggerContainer
        onMouseEnter={() => setShowFloater(true)}
        onMouseLeave={() => setShowFloater(false)}
        ref={floaterRef}
      >
        {triggerComponent}
      </TriggerContainer>
      <Portal
        visible={showFloater}
        portalMountNode={props.floaterMountNode}
      >
        {children}
      </Portal>
    </Container>
  );
};

Floater.defaultProps = {
  children: '',
  floaterMountNode: document.body,
  triggerComponent: null
};

export default Floater;
