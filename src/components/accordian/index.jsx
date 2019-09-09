import React from 'react';
import _ from 'lodash';

import Collapse from '../collapse';

const AccordianContext = React.createContext({
  accordianType: 'stack'
});

const AccordianItem = (props) => (
  <AccordianContext.Consumer>
    {(value) => (
      <Collapse
        collapseType={value.accordianType}
        onChange={value.onChange}
        {...props}
      />
    )}
  </AccordianContext.Consumer>
);

class Accordian extends React.PureComponent {
  state = {
    selectedItems: []
  }

  onCollpaseChange = (key) => {
    const {
      onChange
    } = this.props;

    const {
      selectedItems
    } = this.state;

    let newItems;
    if (_.includes(selectedItems, key)) {
      newItems = selectedItems.filter((i) => i !== key);
    } else {
      newItems = selectedItems.concat(key);
    }

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
      accordianType
    } = this.props;

    return (
      <AccordianContext.Provider
        value={{
          accordianType,
          onChange: this.onCollpaseChange
        }}
      >
        {this.props.children}
      </AccordianContext.Provider>
    );
  }
}

Accordian.Item = AccordianItem;

Accordian.defaultProps = {
  accordianType: 'panel'
};

export default Accordian;
