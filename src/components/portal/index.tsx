import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface PortalProps {
  /** Content to show in the portal */
  children?: React.ReactNode;

  /** Portal node to mount against */
  portalMountNode?: any;

  /** Determines if portal is visible */
  visible?: boolean;
}

export const Portal: React.FunctionComponent<PortalProps> = (props) => {
  const {
    children,
    portalMountNode,
    visible
  } = props;

  return visible ? ReactDOM.createPortal(children, portalMountNode): null;
}

Portal.defaultProps = {
  children: '',
  portalMountNode: document.body,
  visible: false
};
