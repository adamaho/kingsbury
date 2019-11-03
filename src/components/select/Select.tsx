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

interface SelectFunctionComponent<T> extends React.FunctionComponent<T> {
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

export const Select: SelectFunctionComponent<SelectProps> = (props) => {
  const {
    filterable,
    selectSize
  } = props;

  return (
    <Popover
      matchTriggerWidth
      animationObject={{
        initial: {y: -10, opacity: 0, rotateY: '-10deg'},
        animate: {y: 0, opacity: 1, rotateY: 0},
        transition: {duration: 0.1}
      }}
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
