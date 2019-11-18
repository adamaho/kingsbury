import * as React from 'react';
import styled from 'styled-components';

import {
  useTheme
} from "../../hooks/useTheme";

export interface FooterProps {
  /** Content to show in the footer */
  children?: React.ReactNode;

  /** classname for the footer */
  className?: string;
}

const StyledFooter = styled.div`
  background: ${(props) => props.theme.card.footerBackground};
  height: ${(props) => props.theme.card.footerHeight};
  min-height: ${(props) => props.theme.card.footerMinHeight};
  border-top: ${(props) => props.theme.card.innerBorder};
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.card.borderRadius};
`;

/** Card.Footer */
export const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const {
    children
  } = props;

  const theme = useTheme();

  return (
    <StyledFooter {...props} theme={theme}>
      {children}
    </StyledFooter>
  );
};

Footer.defaultProps = {
  children: '',
  className: ''
};
