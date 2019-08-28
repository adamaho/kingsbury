import React from 'react';
import posed from 'react-pose';

import styled, {
  css
} from 'styled-components';

import {
  theme
} from '../../theme';

import Header from './Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background: red;

  ${(props) => props.ghost && css`
    background: transparent;
  `};

  border-radius: ${(props) => props.theme.collapse.borderRadius};

  box-shadow: ${(props) => props.theme.collapse.boxShadow};
`;

const AnimateContentContainer = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
});

const ContentContainer = styled(AnimateContentContainer)`
  overflow: hidden;
`;

const Content = styled.div`
  padding: ${(props) => props.theme.collapse.contentPadding};

  background: ${(props) => props.theme.collapse.contentBackground};

  border-bottom-left-radius: ${(props) => props.theme.collapse.borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.collapse.borderRadius};

  ${(props) => props.ghost && css`
    background: transparent;
  `};
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
      children,
      theme: themeProp,
      ghost
    } = this.props;

    const {
      open
    } = this.state;

    return (
      <Container
        theme={themeProp}
        ghost
      >
        <Header
          ghost={ghost}
          open={open}
          onClick={this.onHeaderClick}
          theme={themeProp}
        >
          <div>asdads</div>
        </Header>
        <ContentContainer pose={open ? 'open' : 'closed'}>
          <Content
            ghost={ghost}
            theme={themeProp}
          >
            {children}
          </Content>
        </ContentContainer>
      </Container>
    );
  }
}

Collapse.defaultProps = {
  ghost: true,
  open: false,
  theme
};

export default Collapse;
