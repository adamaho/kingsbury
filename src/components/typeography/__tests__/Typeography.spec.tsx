import * as React from "react";

import {
  mount
} from "enzyme";

import {
  Text
} from '../Text';

describe('Typeography', () => {
  it('renders without children', () => {
    const wrapper = mount(
      <Text />
    );

    expect(wrapper.exists('Text__StyledText')).toBe(true);
  });

  it('renders with children', () => {
    const wrapper = mount(
      <Text>text</Text>
    );

    expect(wrapper.exists('Text__StyledText')).toBe(true);
  });

  it('sets textStyle prop', () => {
    const wrapper = mount(
      <Text textStyle={'h1'}>text</Text>
    );

    expect(wrapper.find('Text__StyledText').prop('textStyle')).toBe('h1');
  });
});
