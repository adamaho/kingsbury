import * as React from 'react';
import styled from 'styled-components';

import {
  theme
} from '../../theme';

interface TextProps {
  /** Text to render */
  children?: string | number;

  /** Text to render */
  textStyle?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';

  /** Global theme in ThemeProvider */
  theme?: any;
}

const StyledText = styled.span<TextProps>`
  font-size: ${(props) => props.theme.typeography[props.textStyle || 'h1'].fontSize};
`;

export const Text: React.FunctionComponent<TextProps> = (props) => {
  const {
    children
  } = props;

  return (
    <StyledText {...props}>
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  children: '',
  textStyle: 'h1',
  theme
};
