import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Collapse from '../collapse';

import {
  AccordianContext
} from './context';

const CollapseSpacer = styled.div`
  height: ${(props) => `${props.itemGap}px`};
`;

/** Accordian.Item */
const AccordianItem = (props) => (
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

/** asfdasfdsafd */
AccordianItem.propTypes = {
  /** Unique key used to identify each item */
  itemKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default AccordianItem;
