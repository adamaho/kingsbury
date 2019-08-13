import React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  StoryContainer
} from '../../../../.storybook/components/StoryContainer';

import Drawer from '..';

const stories = storiesOf('Card', module);

stories.add(
  'Default',
  () => (
    <StoryContainer>
      <Drawer>
        asdf
      </Drawer>
    </StoryContainer>
  )
  // { info: { propTablesExclude: [Container, CardContent] } }
);
