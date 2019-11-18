import * as React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
 font-size: 20px;
 margin-bottom: 10px;
`;

export const SectionTitle: React.FunctionComponent = ({
 children
}) => (
  <StyledTitle>{children}</StyledTitle>
);
