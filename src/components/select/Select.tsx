import * as React from 'react';

import {
  Popover
} from '..';

import {
  theme
} from '../../theme';

import {
  SelectTrigger
} from './SelectTrigger';

interface SelectFuntionComponent<T> extends React.FunctionComponent<T> {
  Option?: any;
}

interface SelectProps {

  /** Determines if options are filterable */
  filterable?: boolean;

  /** Size of the select */
  selectSize?: 'small' | 'large';

  /** Global theme in ThemeProvider */
  theme?: any;
}

export const Select: SelectFuntionComponent<SelectProps> = (props) => {
  const {
    filterable,
    selectSize
  } = props;

  return (
    <Popover
      matchTriggerWidth
      triggerType={'click'}
      triggerComponent={
        <SelectTrigger
          filterable={filterable}
          selectSize={selectSize}
        />
      }
    >
      Stuff to render
    </Popover>
  );
};

Select.defaultProps = {
  filterable: false,
  selectSize: 'small',
  theme
};


/*
  types of select
  - filterable, not filterable
  - multi, not multi
 */
