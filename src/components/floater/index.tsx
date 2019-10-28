import * as React from 'react';

import Portal from '../portal';

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
  triggerType?: 'hover' | 'click' | 'contextMenu';
}

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
    if (triggerType === 'contextMenu') {
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
      const dimensions = current.getBoundingClientRect();
      return (
        <div
					className={className}
					style={{
						position: 'absolute',
						top: current.offsetTop + current.offsetHeight,
						left: current.offsetLeft,
						width: 'auto'
					}}
          {...getEventsForTrigger()}
					ref={floaterRef}
        >
          {children}
        </div>
      );
    }
  }

  function handleMouseDown(e: any) {
  	const {
  		current
		} = floaterRef;

  	if (current && current.contains(e.target)) {
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
        onFocus: handleOnFocus,
        onBlur: handleOnBlur
      },
      contextMenu: {
        onClick: handleOnClick,
        onFocus: handleOnFocus
      }
    };

    return TRIGGER_EVENT_MAP[triggerType || 'hover'];
  }

  // Enforce only a single child is passed
  const child = React.Children.only(triggerComponent) as React.ReactElement;

  // Clone the triggerComponent and attach a ref to it
  const triggerTest = React.cloneElement(child, {
    ...getEventsForTrigger(),
    ref: triggerRef
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
