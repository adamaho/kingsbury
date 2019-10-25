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

  /** Component trigger type  */
  triggerType?: 'hover' | 'click';
}

const Container = styled.div``;

export const Floater: React.FunctionComponent<FloaterProps> = (props) => {
  const {
    children,
    triggerComponent
  } = props;

  const [showFloater, setShowFloater] = React.useState(false);
  const floaterRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log('called once');
  }, []);

  function renderPortal() {
    const {
      current
    } = floaterRef;
   
    if (current) {
      return (
        <div style={{
          position: 'absolute',
          top: current.offsetTop + current.offsetHeight,
          left: current.offsetLeft
        }}
          {...getEventsForTrigger()}
        >
          {children}
        </div>
      );
    }
  }

  const handleMouseEnter = React.useCallback(() => {
    setShowFloater(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setShowFloater(false);
  }, []);

  const handleOnClick = React.useCallback(() => {
    setShowFloater(true);
  }, []);

  const handleOnBlur = React.useCallback(() => {
    setShowFloater(false);
  }, []);

  function getEventsForTrigger(): any {
    const {
      triggerType
    } = props;

    const TRIGGER_EVENT_MAP = {
      hover: {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
      },
      click: {
        onClick: handleOnClick,
        onBlur: handleOnBlur
      }
    }

    const trigger = triggerType || 'hover';

    return TRIGGER_EVENT_MAP[trigger];
  }

  const child = React.Children.only(triggerComponent) as React.ReactElement;
  const triggerTest = React.cloneElement(child, {
    ...getEventsForTrigger(),
    ref: floaterRef
  });

  return (
    <Container>
      {triggerTest}
      <Portal
        visible={showFloater}
        portalMountNode={props.floaterMountNode}
      >
        {renderPortal()}
      </Portal>
    </Container>
  );
};

Floater.defaultProps = {
  children: '',
  floaterMountNode: document.body,
  triggerComponent: null,
  triggerType: 'hover'
};

export default Floater;
