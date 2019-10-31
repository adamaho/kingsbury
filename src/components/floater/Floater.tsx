import * as React from 'react';
import styled from 'styled-components';

import {
  Portal
} from '../portal';

export interface FloaterProps {

  /** Content to show in the floater */
  children?: React.ReactNode;

  /** classname for the floater */
  className?: string;

  /** Floater node to mount against */
  floaterMountNode?: HTMLElement;

  /** Component used to trigger floater.  */
  triggerComponent?: React.ReactNode | null;

  /** Component trigger type  */
  triggerType?: 'hover' | 'click';
}

interface PortalContainerProps {
  top: string | number;
  left: string | number;
}

const PortalContainer = styled.div<PortalContainerProps>`
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  width: auto;
`;

export const Floater: React.FunctionComponent<FloaterProps> = (props) => {
  const {
    children,
    className,
    triggerType,
    triggerComponent
  } = props;

  const [showFloater, setShowFloater] = React.useState(false);
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const floaterRef = React.useRef<HTMLDivElement>(null);


  React.useEffect(() => {
    if (triggerType === 'click') {
      window.addEventListener<'blur'>('blur', handleOnBlur);
      document.addEventListener<'mousedown'>('mousedown', handleMouseDown);
    }

    return () => {
      window.removeEventListener<'blur'>('blur', handleOnBlur);
      document.removeEventListener<'mousedown'>('mousedown', handleMouseDown);
    }
  }, []);


  function renderPortal() {
    const {
      current
    } = triggerRef;

    if (current) {
      return (
        <PortalContainer
          className={className}
          position={'absolute'}
          top={current.offsetTop + current.offsetHeight}
          left={current.offsetLeft}
          ref={floaterRef}
          {...getEventsForTrigger()}
        >
          {children}
        </PortalContainer>
      );
    }
  }

  function handleMouseDown(e: Event) {
    const {
      current
    } = floaterRef;

    if (current && current.contains(e.target as Node)) {
      return;
    } else {
      setShowFloater(false);
    }
  }

  function handleMouseEnter() {
    setShowFloater(true);
  }

  function handleMouseLeave() {
    setShowFloater(false);
  }

  function handleOnClick() {
    setShowFloater(true);
  }

  function handleOnFocus() {
    setShowFloater(true);
  }

  function handleOnBlur() {
    setShowFloater(false);
  }

  function getEventsForTrigger(): any {
    const TRIGGER_EVENT_MAP = {
      hover: {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
      },
      click: {
        onClick: handleOnClick,
        onFocus: handleOnFocus
      }
    };

    return TRIGGER_EVENT_MAP[triggerType || 'hover'];
  }

  // Enforce only a single child is passed
  const child = React.Children.only(triggerComponent) as React.ReactElement;

  // Clone the triggerComponent and attach a ref to it
  const triggerClone = React.cloneElement(child, {
    ...getEventsForTrigger(),
    ref: triggerRef
  });

  return (
    <React.Fragment>
      {triggerClone}
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
