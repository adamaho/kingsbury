import * as React from 'react';
import styled from 'styled-components';

import {
	Collapse
} from '../collapse';

import {
  AccordionContext
} from './context';

interface CollapseSpacerProps {
  itemGap: number;
}

export interface AccordianItemProps {
  /** Unique key used to identify each item */
  itemKey: string | number;
}

const CollapseSpacer = styled.div<CollapseSpacerProps>`
  height: ${(props) => `${props.itemGap}px`};
`;

/** Accordion.Item */
export const AccordionItem: React.FunctionComponent<AccordianItemProps> = (props) => (
  <AccordionContext.Consumer>
    {(value) => {
      const {
        itemKey
      } = props;

      return (
        <React.Fragment>
          <Collapse
            {...props}
            active={value.selectedItems.includes(itemKey)}
            collapseType={value.accordianType}
            onChange={value.onChange}
          />
          <CollapseSpacer itemGap={value.itemGap} />
        </React.Fragment>
      );
    }}
  </AccordionContext.Consumer>
);

export default AccordionItem;
