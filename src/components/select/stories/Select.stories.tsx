import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  theme
} from "../../../theme";

import {
  Select
} from "../Select";

import {
  StoryContainer,
  ComponentContainer
} from "../../../../.storybook/components";

import {
  SelectedValue
} from "../types";

const stories = storiesOf('Select', module);

const testTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#ff00ff',
    primaryRGB: '255,0,255'
  }
};


stories.add(
  'Default',
  () => {
    const foo = React.useRef(null);

    const getContainer = React.useCallback<any>(() => {
      return foo.current;
    }, [foo]);

    return (
      <StoryContainer>
       <ComponentContainer ref={foo}>
          <div style={{ marginTop: 100 }}/>
          <Select
            container={getContainer}
            defaultValue={{
              optionValue: '1',
              optionTitle: 'The value of 1',
              optionKey: '1'
            }}
            placeholder={'Select a value'}
          >
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

stories.add(
  'Border Type',
  () => {
    return (
      <StoryContainer>
        <ComponentContainer>
          <Select placeholder={'Select a value'}>
            <Select.Option optionKey={'1'} optionValue={'1'} optionTitle={' The value of 1'} />
            <Select.Option optionKey={'2'} optionValue={'2'} optionTitle={' The value of 2'} />
            <Select.Option optionKey={'3'} optionValue={'3'} optionTitle={' The value of 3'} />
            <Select.Option optionKey={'4'} optionValue={'4'} optionTitle={' The value of 4'} />
            <Select.Option optionKey={'5'} optionValue={'5'} optionTitle={' The value of 5'} />
          </Select>
          <div style={{ height: 20 }}/>
          <Select borderType={'bottom'} placeholder={'Select a value'}>
            <Select.Option optionKey={'1'} optionValue={'1'} optionTitle={' The value of 1'} />
            <Select.Option optionKey={'2'} optionValue={'2'} optionTitle={' The value of 2'} />
            <Select.Option optionKey={'3'} optionValue={'3'} optionTitle={' The value of 3'} />
            <Select.Option optionKey={'4'} optionValue={'4'} optionTitle={' The value of 4'} />
            <Select.Option optionKey={'5'} optionValue={'5'} optionTitle={' The value of 5'} />
          </Select>
          <div style={{ height: 20 }}/>
          <Select borderType={'none'} placeholder={'Select a value'}>
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

stories.add(
  'Size',
  () => {
    return (
      <StoryContainer>
        <ComponentContainer>
          <Select selectSize={'small'} placeholder={'Small'}>
            <Select.Option optionKey={'1'} optionValue={'1'} optionTitle={' The value of 1'} />
            <Select.Option optionKey={'2'} optionValue={'2'} optionTitle={' The value of 2'} />
            <Select.Option optionKey={'3'} optionValue={'3'} optionTitle={' The value of 3'} />
            <Select.Option optionKey={'4'} optionValue={'4'} optionTitle={' The value of 4'} />
            <Select.Option optionKey={'5'} optionValue={'5'} optionTitle={' The value of 5'} />
          </Select>
          <div style={{ height: 20 }}/>
          <Select selectSize={'large'} placeholder={'Large'}>
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

stories.add(
  'Custom Value Handling',
  () => {
    const [selectedValue, setSelectedValue] = React.useState<SelectedValue>({
      optionKey: '',
      optionTitle: '',
      optionValue: ''
    });

    const handleChange = React.useCallback((e, selectedValue) => {
      setSelectedValue(selectedValue);
    }, [setSelectedValue]);

    return (
      <StoryContainer>
        <ComponentContainer>
          <Select onChange={handleChange} value={selectedValue} selectSize={'small'} placeholder={'Custom Value Management'}>
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
