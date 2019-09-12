import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import AccordianItem from './AccordianItem';

import {
  AccordianContext
} from './context';

const Container = styled.div``;

class Accordian extends React.PureComponent {
  constructor(props) {
    super(props);

    const {
      defaultSelectedItems
    } = props;

    this.state = {
      selectedItems: [...defaultSelectedItems]
    };
  }

  getClassicItems = (key) => {
    const {
      selectedItems
    } = this.state;

    return _.includes(selectedItems, key) ?
      [] :
      [key];
  }

  getItems = (key) => {
    const {
      selectedItems
    } = this.state;

    return _.includes(selectedItems, key) ?
      selectedItems.filter((i) => i !== key) :
      selectedItems.concat(key);
  }

  onCollapseChange = (key) => {
    const {
      onChange,
      classic
    } = this.props;

    const newItems = classic ? this.getClassicItems(key) : this.getItems(key);

    this.setState({ selectedItems: newItems }, () => {
      const {
        selectedItems: openItems
      } = this.state;

      if (onChange) {
        onChange(openItems);
      }
    });
  }

  render() {
    const {
      accordianType,
      children,
      className,
      itemGap
    } = this.props;

    const {
      selectedItems
    } = this.state;

    return (
      <AccordianContext.Provider
        value={{
          accordianType,
          itemGap,
          selectedItems,
          onChange: this.onCollapseChange
        }}
      >
        <Container className={className}>
          {children}
        </Container>
      </AccordianContext.Provider>
    );
  }
}

Accordian.defaultProps = {
  accordianType: 'panel',
  children: '',
  classic: false,
  className: '',
  defaultSelectedItems: [],
  itemGap: 20,
  onChange: undefined
};

Accordian.propTypes = {
  /** Type of collapse. See Collapse. */
  accordianType: PropTypes.oneOf(['stack', 'panel']),

  /** Accordian Item. See Collpase for supported props. */
  children: PropTypes.node,

  /** classname for the collapse */
  className: PropTypes.string,

  /** Use classic accordian where a single item is open at a time */
  classic: PropTypes.bool,

  /** Determines which collpases should be active on intial render */
  defaultSelectedItems: PropTypes.array,

  /** Vertical gap between items */
  itemGap: PropTypes.number,

  /** Function to handle when collapse state changes */
  onChange: PropTypes.func,

};

Accordian.Item = AccordianItem;

export default Accordian;
