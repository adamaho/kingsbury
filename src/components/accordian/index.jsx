import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import Collapse from '../collapse';

const AccordianContext = React.createContext({
  accordianType: 'stack'
});

const CollapseSpacer = styled.div`
  height: 30px;
`;

const AccordianItem = (props) => (
  <AccordianContext.Consumer>
    {(value) => {
      return (
        <React.Fragment>
          <Collapse
            {...props}
            collapseType={value.accordianType}
            onChange={value.onChange}
          />
          <CollapseSpacer />
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
      selectedItems: [defaultSelectedKey]
    };
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

    const {
      selectedItems
    } = this.state;

    return (
      <AccordianContext.Provider
        value={{
          accordianType,
          selectedItems,
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
  accordianType: 'panel',
  defaultSelectedKey: ''
};

export default Accordian;
