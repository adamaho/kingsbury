import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  Select
} from "../Select";

import {
  StoryContainer,
  ComponentContainer
} from "../../../../.storybook/components";

const stories = storiesOf('Select', module);

stories.add(
  'Default',
  () => {
    return (
      <StoryContainer>
       <ComponentContainer>
        <Select />
       </ComponentContainer>
      </StoryContainer>
    );
  },
);
