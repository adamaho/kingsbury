import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import {
	Collapse
} from '..';

const stories = storiesOf('Collapse', module);

const Container = styled.div`
  max-width: 400px;
  padding: 10px;
`;

const StyledCollapseContent = styled.div`
  height: 200px;
`;

export const CollapseContent = ({ children }: any) => (
  <StyledCollapseContent>
    {children}
  </StyledCollapseContent>
);

stories.add(
  'Default',
  () => (
    <Container>
      <Collapse
        header="Header"
        onChange={() => console.log('change')}
				itemKey={"test"}
      >
        <CollapseContent />
      </Collapse>
    </Container>
  )
);
