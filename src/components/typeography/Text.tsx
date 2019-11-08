import * as React from 'react';
import styled from 'styled-components';

import {
  theme
} from '../../theme';

type TextStyle = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

interface TextProps {
  /** Text to render */
  children?: string | number;

  /** Text to render */
  textStyle: TextStyle;

  /** Global theme in ThemeProvider */
  theme?: any;
}

interface StyledTextProps {
  textStyle: TextStyle;
  theme: any;
}

const StyledText = styled.span<StyledTextProps>`
  font-size: ${(props) => props.theme.typeography[props.textStyle].fontSize};
`;

export const Text: React.FunctionComponent<TextProps> = (props) => {
  const {
    children,
    theme,
    textStyle
  } = props;

  return (
    <StyledText
      theme={theme}
      textStyle={textStyle}
    >
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  children: '',
  theme
};
