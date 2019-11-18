import * as React from 'react';

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

import {
  useAfterMountEffect
} from "../../hooks";

export interface CollapseProps {
  /** Option to handle if collapse is active */
  active?: boolean;

  /** Content to show in the collapse */
  children?: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** Determines if collapse should default to open */
  defaultActive?: boolean;

  /** Will make collapse transparent */
  ghost?: boolean;

  /** Content to render in the header */
  header?: React.ReactNode;

  /** Unique key to identify collapse. Used for Accordion */
  itemKey: string | number ;

  /** The type of collapse */
  collapseType?: 'stack' | 'panel';

  /** Function to handle when collapse state changes */
  onChange?: (itemKey: string | number) => void;

  /** Global theme in ThemeProvider */
  theme?: any;
}

interface CollapseState {
  active?: boolean;
}

interface ContainerProps {
  collapseType?: 'panel' | 'stack';
  ghost?: boolean;
}

const Container = styled.div<ContainerProps>`
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

export const Collapse: React.FunctionComponent<CollapseProps> = ({
  active,
  className,
  children,
  collapseType,
  defaultActive,
  ghost,
  header,
  itemKey,
  onChange,
  theme
}) => {
  const [isActive, setActive] = React.useState(defaultActive);

  function onHeaderClick() {
    if (active === undefined) {
      setActive(!isActive);

      if (onChange) {
        onChange(itemKey);
      }

    } else if (onChange) {
      onChange(itemKey);
    }
  }

  const handleSetActive = React.useCallback(() => {
    setActive(active);
  }, [active]);

  useAfterMountEffect(handleSetActive, [active]);
  //
  // useAfterMountEffect(() => {
  //   setActive(active);
  // }, [active]);
  return (
    <Container
      className={className}
      ghost={ghost}
      collapseType={collapseType}
      theme={theme}
      key={itemKey}
    >
      <Header
        ghost={ghost}
        open={isActive}
        onClick={onHeaderClick}
        collapseType={collapseType}
        theme={theme}
      >
        {header}
      </Header>
      <ContentContainer
        animate={isActive ? 'open' : 'closed'}
      >
        <Content
          ghost={ghost}
          theme={theme}
          collapseType={collapseType}
        >
          {children}
        </Content>
      </ContentContainer>
    </Container>
  );
};

Collapse.defaultProps = {
  active: undefined,
  children: '',
  className: '',
  defaultActive: undefined,
  ghost: false,
  header: '',
  onChange: undefined,
  itemKey: '',
  collapseType: 'panel',
  theme
};
