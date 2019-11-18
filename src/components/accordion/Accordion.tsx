import * as React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

import {
  AccordionItem,
  AccordionItemProps
} from './AccordionItem';

import {
  AccordionContext
} from './context';

import {
  AccordionType,
  ItemGapType,
  ItemKeyType
} from "./types";

import {
  useAfterMountEffect
} from "../../hooks";
import {ThemeContext} from "../../styled";


export interface AccordionFunctionComponent<T = {}> extends React.FunctionComponent<T> {
  Item: React.FunctionComponent<AccordionItemProps>;
}

export interface AccordionProps {
  /** Type of collapse. See Collapse. */
  accordionType?: AccordionType;

  /** Accordion Item. See Collapse for supported props. */
  children: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** Use classic accordion where a single item is open at a time */
  classic?: boolean;

  /** Determines which collapses should be active on initial render */
  defaultSelectedItems?: (string|number)[];

  /** Vertical gap between items */
  itemGap?: ItemGapType;

  /** Function to handle when collapse state changes */
  onChange?: (selectedItems: ItemKeyType[]) => void;
}

const Container = styled.div``;

export const Accordion: AccordionFunctionComponent<AccordionProps> = ({
  accordionType,
  children,
  classic,
  className,
  defaultSelectedItems,
  itemGap,
  onChange
}) => {
  const [selectedItems, setSelectedItems] = React.useState<(string|number)[]>(defaultSelectedItems || []);

  const onSelectedItemsChange = React.useCallback(() => {
    if (onChange) {
      onChange(selectedItems);
    }
  }, [onChange, selectedItems]);

  function getClassicItems(key: ItemKeyType) {
    return _.includes(selectedItems, key) ?
      [] :
      [key];
  }

  function getItems(key: ItemKeyType) {
    return _.includes(selectedItems, key) ?
      selectedItems.filter((i: ItemKeyType) => i !== key) :
      selectedItems.concat(key);
  }

  function onCollapseChange(key: ItemKeyType): void {
    const newItems = classic ? getClassicItems(key) : getItems(key);
    setSelectedItems(newItems);
  }

  // Only called when the selectedItems change.
  useAfterMountEffect(onSelectedItemsChange, [selectedItems]);

  return (
    <AccordionContext.Provider
      value={{
        accordionType,
        itemGap,
        selectedItems,
        onChange: onCollapseChange
      }}
    >
      <Container className={className}>
        {children}
      </Container>
    </AccordionContext.Provider>
  );
};

Accordion.defaultProps = {
    accordionType: 'panel',
    children: '',
    classic: false,
    className: '',
    defaultSelectedItems: [],
    itemGap: 20,
    onChange: undefined
};

Accordion.Item = AccordionItem;

export default Accordion;
