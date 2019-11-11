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
        <Select borderType={'bottom'} placeholder={'Select a value'} onChange={(e, value) => console.log(value)}>
          <Select.Option optionKey={'1'} optionValue={'1'} optionTitle={' The value of 1'} />
          <Select.Option optionKey={'2'} optionValue={'2'} optionTitle={' The value of 2'} />
          <Select.Option optionKey={'3'} optionValue={'3'} optionTitle={' The value of 3'} />
          <Select.Option optionKey={'4'} optionValue={'4'} optionTitle={' The value of 4'} />
          <Select.Option optionKey={'5'} optionValue={'5'} optionTitle={' The value of 5'} />
        </Select>
       </ComponentContainer>
      </StoryContainer>
    );
  },
);
