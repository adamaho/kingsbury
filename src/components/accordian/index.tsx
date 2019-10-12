import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as _ from 'lodash';

import AccordianItem from './AccordianItem';

import {
  AccordianContext
} from './context';

interface AccordianProps {
  /** Type of collapse. See Collapse. */
  accordianType: 'stack' | 'panel';

  /** Accordian Item. See Collpase for supported props. */
  children: React.ReactNode;

  /** classname for the collapse */
  className: string;

  /** Use classic accordian where a single item is open at a time */
  classic: boolean;

  /** Determines which collpases should be active on intial render */
  defaultSelectedItems: string[];

  /** Vertical gap between items */
  itemGap: number;

  /** Function to handle when collapse state changes */
  onChange: () => void;
}

const Container = styled.div``;

class Accordian extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);

    const {
      defaultSelectedItems
    } = props;

    this.state = {
      selectedItems: [...defaultSelectedItems]
    };
  }

  static defaultProps = {
    accordianType: 'panel',
    children: '',
    classic: false,
    className: '',
    defaultSelectedItems: [],
    itemGap: 20,
    onChange: undefined
  }

  getClassicItems = (key: any) => {
    const {
      selectedItems
    } = this.state;

    return _.includes(selectedItems, key) ?
      [] :
      [key];
  }

  getItems = (key: any) => {
    const {
      selectedItems
    } = this.state;

    return _.includes(selectedItems, key) ?
      selectedItems.filter((i) => i !== key) :
      selectedItems.concat(key);
  }

  onCollapseChange = (key: any) => {
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

Accordian.Item = AccordianItem;

export default Accordian;
