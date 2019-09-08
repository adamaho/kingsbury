import React from 'react';

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

    console.log(this.state);

    if (this.state.selectedItems.includes(key)) {
      const newItems = this.state.selectedItems.filter((i) => i !== key);
      this.setState({ selectedItems: newItems });
    } else {
      this.setState({ selectedItems: this.state.selectedItems.push(key) });
    }
  }

  render() {
    const {
      accordianType
    } = this.props;

    console.log(this.state.selectedItems);

    return (
      <AccordianContext.Provider
        value={{
          accordianType,
          onChange: () => this.onCollpaseChange()
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
