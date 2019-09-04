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

  background: red;

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
      open
    } = props;

    this.state = {
      open
    };
  }

  onHeaderClick = () => {
    const {
      onChange
    } = this.props;

    const {
      open
    } = this.state;

    this.setState((props, state) => {
      if (open) {
        return {
          ...state,
          open: false
        };
      }

      return {
        ...state,
        open: true
      };
    }, () => onChange());
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
      open
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
          open={open}
          onClick={this.onHeaderClick}
          collapseType={collapseType}
          theme={themeProp}
        >
          {header}
        </Header>
        <ContentContainer
          pose={open ? 'open' : 'closed'}
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
  children: '',
  className: '',
  ghost: false,
  header: undefined,
  onChange: undefined,
  open: false,
  collapseType: 'panel',
  theme
};

Collapse.propTypes = {
  /** Content to show in the collapse */
  children: PropTypes.node,

  /** classname for the collapse */
  className: PropTypes.string,

  /** Will make collapse transparent */
  ghost: PropTypes.bool,

  /** Content to render in the header */
  header: PropTypes.node,

  /** State of the collapse for custom handling */
  open: PropTypes.bool,

  /** The type of collapse */
  collapseType: PropTypes.oneOf(['stack', 'panel']),

  /** Function to handle when collapse state changes */
  onChange: PropTypes.func,

  /** Global theme in ThemeProvider */
  theme: PropTypes.object
};

export default Collapse;
