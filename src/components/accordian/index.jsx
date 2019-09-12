import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import Collapse from '../collapse';

const AccordianContext = React.createContext({
  accordianType: 'stack'
});

const CollapseSpacer = styled.div`
  height: ${(props) => `${props.itemGap}px`};
`;

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

class Accordian extends React.PureComponent {
  constructor(props) {
    super(props);

    const {
      defaultSelectedKey
    } = props;

    this.state = {
      selectedItems: defaultSelectedKey ? [defaultSelectedKey] : []
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
        {this.props.children}
      </AccordianContext.Provider>
    );
  }
}

Accordian.Item = AccordianItem;

Accordian.defaultProps = {
  accordianType: 'panel',
  classic: false,
  defaultSelectedKey: undefined,
  itemGap: 20
};

export default Accordian;
