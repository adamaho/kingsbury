import * as React from 'react';

import {
  Floater
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
  /** Size of the select */
  selectSize?: 'small' | 'large';

  /** Global theme in ThemeProvider */
  theme?: any;
}

export const Select: SelectFuntionComponent<SelectProps> = (props) => {
  const {
    selectSize,
    theme
  } = props;

  return (
    <Floater
      triggerType={'click'}
      triggerComponent={<SelectTrigger />}
    >
      Stuff to render
    </Floater>
  );
};

Select.defaultProps = {
  selectSize: 'small',
  theme
};


/*
  types of select
  - filterable, not filterable
  - multi, not multi
 */
