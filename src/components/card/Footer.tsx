import * as React from 'react';
import styled from 'styled-components';

import {
  theme
} from '../../theme';

export interface FooterProps {
  /** Content to show in the footer */
  children?: React.ReactNode;

  /** classname for the footer */
  className?: string;

  /** Global theme in ThemeProvider */
  theme?: any;
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

  return (
    <StyledFooter {...props}>
      {children}
    </StyledFooter>
  );
};

Footer.defaultProps = {
  children: '',
  className: '',
  theme
};

export default Footer;
