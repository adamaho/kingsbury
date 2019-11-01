import * as React from 'react';
import styled from 'styled-components';

import {
  theme
} from '../../theme';

interface SelectTriggerProps {
  /** Size of the select */
  selectSize?: 'small' | 'large';

  /** Global theme in ThemeProvider */
  theme?: any;
}

const Container = styled.div<any>`
  height: ${(props) => props.selectSize === 'small' ?
  props.theme.select.heightSmall :
  props.theme.select.heightLarge
};
  
  border: ${(props) => props.theme.select.border};
  border-color: ${(props) => props.theme.select.borderColor};
  border-radius: ${(props) => props.theme.select.borderRadius};
`;

export const SelectTrigger: React.FunctionComponent<any> = React.forwardRef<any, any>((props, ref) => {
  const {
    children,
    onClick,
    onFocus,
    selectSize,
    theme
  } = props;

  return (
     <Container
       onClick={onClick}
       onFocus={onFocus}
       selectSize={selectSize}
       theme={theme}
       ref={ref}
     >
       { children }
     </Container>
  );
});

SelectTrigger.defaultProps = {
  selectSize: 'small',
  theme
};
