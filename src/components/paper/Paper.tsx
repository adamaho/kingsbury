import * as React from 'react';
import styled from 'styled-components';

import {
  theme
} from '../../theme';

interface PaperProps {
  /** Content to show in the paper */
  children?: React.ReactNode;

  /** classname for the paper */
  className?: string;

  /** Global theme in ThemeProvider */
  theme?: any;
}

const Container = styled.div`
  background: ${(props) => props.theme.paper.background};
  border: ${(props) => props.theme.paper.border};
  border-color: ${(props) => props.theme.paper.borderColor};
  border-radius: ${(props) => props.theme.paper.borderRadius};
  box-shadow: ${(props) => props.theme.paper.boxShadow};
`;

export const Paper: React.FunctionComponent<PaperProps> = ({ children, theme, className }) => {
  return (
    <Container className={className} theme={theme}>
      {children}
    </Container>
  );
};

Paper.defaultProps = {
  theme
};


