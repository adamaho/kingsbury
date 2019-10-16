import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface PortalProps {

  /** DOM node to mount the portal to */
  getPortalMountNode: any;

}

class Portal extends React.Component<PortalProps, any> {

  render() {
    const {
      children,
      getPortalMountNode
    } = this.props;

    return ReactDOM.createPortal(
      <div>
        {children}
      </div>,
      getPortalMountNode()
    );
  }
};

export default Portal;
