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
        {...props}
      />
    )}
  </AccordianContext.Consumer>
);

class Accordian extends React.PureComponent {
  render() {
    const {
      accordianType
    } = this.props;

    return (
      <AccordianContext.Provider
        value={{
          accordianType
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
