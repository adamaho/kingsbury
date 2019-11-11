import * as React from 'react';

import {
  SelectedValue
} from "./types";

interface SelectContext {
  onChange?: (e: Event, value: SelectedValue) => void;
  onSelect?: React.MouseEventHandler<any>;
  selectedValue?: SelectedValue;
}

export const SelectContext = React.createContext<SelectContext>({});
