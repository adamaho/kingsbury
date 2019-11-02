import * as React from 'react';

import {
  theme
} from '../../theme';

import {
  Input
} from "..";

interface SelectTriggerProps {
  /** Size of the select */
  selectSize?: 'small' | 'large';

  /** Global theme in ThemeProvider */
  theme?: any;
}

export const SelectTrigger: React.FunctionComponent<any> = React.forwardRef<any, any>((props, ref) => {
  const {
    onFocus,
    selectSize,
    theme
  } = props;

  return (
     <Input
       onFocus={onFocus}
       inputSize={selectSize}
       theme={theme}
       ref={ref}
     />
  );
});

SelectTrigger.defaultProps = {
  selectSize: 'small',
  theme
};
