import * as React from 'react';
import styled from 'styled-components';

import Portal from '../portal';
import Input from '../input';

const Container = styled.div``;

const Menu = styled.div`
  background: white;
  box-shadow: 0px 0px 7px rgba(0, 0, 0 ,0.20);
  height: 200px;
`;

export const Select: React.FunctionComponent<any> = (props) => {
  const [showPortal, setPortalVisibilty] = React.useState(false);
  const container = React.useRef<HTMLDivElement>(null);

  const {
    current
  } = container;

  console.log(container);

  const menuStyle: React.CSSProperties = current == null ? {} : {
    position: 'absolute',
    top: `${current.offsetTop}px`,
    left: `${current.offsetLeft}px`,
    width: `${current.offsetWidth}px`
  };

  return (
    <Container>
      <Input
        borderType={"bottom"}
        onFocus={() => setPortalVisibilty(true)}
      />
      <div style={{ height: '8px' }} ref={container} />
      <Portal
        visible={showPortal}
      >
        <Menu
          style={menuStyle}
        >
          Menu to Show
        </Menu>
      </Portal>
    </Container>
  );
}

export default Select;
