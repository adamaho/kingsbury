import React from 'react';
import PropTypes from 'prop-types';

import styled, {
  css
} from 'styled-components';

import {
  theme
} from '../../theme';

import Header from './Header';

import {
  ContentContainer,
  Content
} from './Content';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${(props) => props.ghost && css`
    background: transparent;
  `};

  ${(props) => props.collapseType === 'panel' && css`
    border-radius: ${props.theme.collapse.borderRadius};
    box-shadow: ${props.theme.collapse.boxShadow};
  `}
`;

class Collapse extends React.PureComponent {
  constructor(props) {
    super(props);

    const {
      defaultActive
    } = props;

    this.state = {
      active: defaultActive
    };
  }

  static getDerivedStateFromProps(props) {
    if (props.active !== undefined) {
      return {
        active: props.active
      };
    }

    return null;
  }

  onHeaderClick = () => {
    const {
      active,
      onChange,
      itemKey
    } = this.props;

    if (active !== undefined) {
      onChange(itemKey);
    } else {
      this.setState((state) => {
        if (state.active) {
          return {
            active: false
          };
        }

        return {
          active: true
        };
      }, () => {
        if (onChange) {
          onChange(itemKey);
        }
      });
    }
  }

  render() {
    const {
      className,
      children,
      collapseType,
      header,
      ghost,
      theme: themeProp
    } = this.props;

    const {
      active
    } = this.state;

    return (
      <Container
        className={className}
        ghost={ghost}
        collapseType={collapseType}
        theme={themeProp}
      >
        <Header
          ghost={ghost}
          open={active}
          onClick={this.onHeaderClick}
          collapseType={collapseType}
          theme={themeProp}
        >
          {header}
        </Header>
        <ContentContainer
          pose={active ? 'open' : 'closed'}
          collapseType={collapseType}
          theme={themeProp}
        >
          <Content
            ghost={ghost}
            theme={themeProp}
            collapseType={collapseType}
          >
            {children}
          </Content>
        </ContentContainer>
      </Container>
    );
  }
}

Collapse.defaultProps = {
  active: undefined,
  children: '',
  className: '',
  defaultActive: false,
  ghost: false,
  header: '',
  onChange: undefined,
  itemKey: '',
  collapseType: 'panel',
  theme
};

Collapse.propTypes = {
  /** Option to handle if collapse is active */
  active: PropTypes.bool,

  /** Content to show in the collapse */
  children: PropTypes.node,

  /** classname for the collapse */
  className: PropTypes.string,

  /** Determines if collapse should default to open */
  defaultActive: PropTypes.bool,

  /** Will make collapse transparent */
  ghost: PropTypes.bool,

  /** Content to render in the header */
  header: PropTypes.node,

  /** Unique key to identify collpase. Used for Accordian */
  itemKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** The type of collapse */
  collapseType: PropTypes.oneOf(['stack', 'panel']),

  /** Function to handle when collapse state changes */
  onChange: PropTypes.func,

  /** Global theme in ThemeProvider */
  theme: PropTypes.object
};

export default Collapse;
