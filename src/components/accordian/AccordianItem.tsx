import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Collapse from '../collapse';

import {
  AccordianContext
} from './context';

interface CollapseSpacerProps {
  itemGap: number;
}

/** asfdasfdsafd */
interface AccordianItem {
  /** Unique key used to identify each item */
  itemKey: string | number;
}

const CollapseSpacer = styled.div<CollapseSpacerProps>`
  height: ${(props) => `${props.itemGap}px`};
`;

/** Accordian.Item */
const AccordianItem: React.FunctionComponent<any> = (props) => (
  <AccordianContext.Consumer>
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
  </AccordianContext.Consumer>
);

export default AccordianItem;
