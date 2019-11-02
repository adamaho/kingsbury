import * as React from 'react';

import {
  theme
} from '../../theme';

import {
  Input
} from "..";

interface SelectTriggerProps {

  /** Determines if options are filterable */
  filterable?: boolean;

  /** Size of the select */
  selectSize?: 'small' | 'large';

  /** Global theme in ThemeProvider */
  theme?: any;
}

export const SelectTrigger: React.FunctionComponent<any> = React.forwardRef<any, any>((props, ref) => {
  const {
    filterable,
    selectSize,
    theme
  } = props;

  return (
    <Input
      htmlType={filterable ? 'text' : 'button'}
      inputSize={selectSize}
      theme={theme}
      {...props}
      ref={ref}
    />
  );
});

SelectTrigger.defaultProps = {
  selectSize: 'small',
  theme
};
