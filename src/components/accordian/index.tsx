import * as React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

import AccordionItem from './AccordionItem';

import {
  AccordionContext
} from './context';

type ItemKey = string | number;
type AccordionState = ItemKey[];

interface AccordionFunctionComponent<T = {}> extends React.FunctionComponent<T> {
	Item: any;
}

interface AccordionProps {
  /** Type of collapse. See Collapse. */
  accordionType?: 'stack' | 'panel';

  /** Accordion Item. See Collapse for supported props. */
  children: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** Use classic accordion where a single item is open at a time */
  classic?: boolean;

  /** Determines which collapses should be active on initial render */
  defaultSelectedItems?: string[];

  /** Vertical gap between items */
  itemGap?: number;

  /** Function to handle when collapse state changes */
  onChange?: (selectedItems: ItemKey[]) => void;
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
	const [selectedItems, setSelectedItems] = React.useState<any>(defaultSelectedItems);

	function getClassicItems(key: ItemKey) {
		return _.includes(selectedItems, key) ?
			[] :
			[key];
	}

	function getItems(key: ItemKey) {
		return _.includes(selectedItems, key) ?
			selectedItems.filter((i: ItemKey) => i !== key) :
			selectedItems.concat(key);
	}

	function onCollapseChange(key: ItemKey) {
		const newItems = classic ? getClassicItems(key) : getItems(key);
		setSelectedItems(newItems);
	}

	// Only called when the selectedItems change.
	React.useEffect(() => {
		if (onChange) {
			onChange(selectedItems);
		}
	}, [selectedItems]);

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
