import React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Collapse from '..';

import {
  Container,
  CollapseContainer,
  CollapseContent
} from './stories.components';

const stories = storiesOf('Collapse', module);

stories.add(
  'Default',
  () => (
    <Container>
      <CollapseContainer>
        <Collapse
          header={<div>header</div>}
          onChange={() => console.log('change')}
        >
          <CollapseContent />
        </Collapse>
      </CollapseContainer>
    </Container>
  ),
  { info: { propTablesExclude: [Container, CollapseContainer, CollapseContent] } }
);
