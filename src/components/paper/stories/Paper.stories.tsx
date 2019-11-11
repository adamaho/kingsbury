import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import {
  Paper
} from '../..';

import {
  StoryContainer,
  ComponentContainer
} from "../../../../.storybook/components";

const stories = storiesOf('Paper', module);

const Container = styled.div`
  height: 300px;
  width: 100%;
`;

stories.add(
  'Default',
  () => {
    return (
      <StoryContainer>
        <ComponentContainer>
          <Paper>
            <Container />
          </Paper>
        </ComponentContainer>
      </StoryContainer>
    );
  },
);
