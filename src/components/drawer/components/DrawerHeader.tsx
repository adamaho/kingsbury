import * as React from 'react';

import styled from '../../../styles/theme';

import {
  SVGClose
} from '../../icons';

interface IDrawerHeaderProps {
  onClose: () => void;
};

const Container = styled.div`
  height: 60px;
  padding: 0px 15px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseContainer = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

const DrawerHeader: React.FunctionComponent<IDrawerHeaderProps> = ({
  children,
  onClose
}) => {
  return (
    <Container>
      <CloseContainer onClick={onClose}>
        <SVGClose />
      </CloseContainer>
      {children}
    </Container>
  );
}


export default DrawerHeader;