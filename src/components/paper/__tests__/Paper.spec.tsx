import * as React from 'react';

import {
  mount
} from "enzyme";

import {
  Paper
} from '../Paper';

describe('Paper', () => {
  it('renders', () => {
    const wrapper = mount(
      <Paper>
        <div id={"test1"}/>
      </Paper>
    );

    expect(wrapper.find('#test1').exists()).toBe(true);
  });
});
