import * as React from 'react';
import styled from 'styled-components';

import {
  Collapse
} from '..';

import {
  AccordionContext
} from './context';

interface CollapseSpacerProps {
  itemGap?: number;
}

export interface AccordionItemProps {
  /** Unique key used to identify each item */
  itemKey: string | number;
}

const CollapseSpacer = styled.div<CollapseSpacerProps>`
  height: ${(props) => `${props.itemGap}px`};
`;

/** Accordion.Item */
export const AccordionItem: React.FunctionComponent<AccordionItemProps> = (props) => (
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
            collapseType={value.accordionType}
            onChange={value.onChange}
          />
          <CollapseSpacer itemGap={value.itemGap} />
        </React.Fragment>
      );
    }}
  </AccordionContext.Consumer>
);
