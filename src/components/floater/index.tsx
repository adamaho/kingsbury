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
  triggerType?: 'hover' | 'click' | 'contextMenu';
}

const Container = styled.div`
  width: 100%;
`;

export const Floater: React.FunctionComponent<FloaterProps> = (props) => {
  const {
    children,
    triggerType,
    triggerComponent
  } = props;

  const [showFloater, setShowFloater] = React.useState(false);
  const floaterRef = React.useRef<HTMLDivElement>(null);


  React.useEffect(() => {
    if (triggerType === 'contextMenu') {
      window.addEventListener<'blur'>('blur', handleOnBlur);
    }

    return () => {
      window.removeEventListener<'blur'>('blur', handleOnBlur);
    }
  }, []);




  function renderPortal() {
    const {
      current
    } = floaterRef;

    if (current) {
      const dimensions = current.getBoundingClientRect();
      return (
        <div style={{
          position: 'absolute',
          top: current.offsetTop + current.offsetHeight,
          left: current.offsetLeft,
          width: dimensions.width
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

  const handleOnFocus = React.useCallback(() => {
    setShowFloater(true);
  }, []);

  const handleOnBlur = React.useCallback(() => {
    setShowFloater(false);
  }, []);

  function getEventsForTrigger(): any {
    const TRIGGER_EVENT_MAP = {
      hover: {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
      },
      click: {
        onClick: handleOnClick,
        onFocus: handleOnFocus,
        onBlur: handleOnBlur
      },
      contextMenu: {
        onClick: handleOnClick,
        onFocus: handleOnFocus,
      }
    }

    return TRIGGER_EVENT_MAP[triggerType || 'hover'];
  }

  // Enforce only a single child is passed
  const child = React.Children.only(triggerComponent) as React.ReactElement;

  // Clone the triggerComponent and attach a ref to it
  const triggerTest = React.cloneElement(child, {
    ...getEventsForTrigger(),
    ref: floaterRef
  });

  return (
    <React.Fragment>
      {triggerTest}
      <Portal
        visible={showFloater}
        portalMountNode={props.floaterMountNode}
      >
        {renderPortal()}
      </Portal>
    </React.Fragment>
  );
};

Floater.defaultProps = {
  children: '',
  floaterMountNode: document.body,
  triggerComponent: null,
  triggerType: 'hover'
};

export default Floater;
