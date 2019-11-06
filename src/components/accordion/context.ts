import * as React from 'react';

import {
  AccordionType,
  ItemGapType,
  SelectedItemsType,
  ItemKeyType
} from "./types";

interface AccordionContext {
  accordionType?: AccordionType;
  itemGap?: ItemGapType;
  selectedItems: SelectedItemsType;
  onChange?: (itemKey: ItemKeyType) => void;
}

export const AccordionContext = React.createContext<AccordionContext>({
  accordionType: 'stack',
  selectedItems: [],
});
