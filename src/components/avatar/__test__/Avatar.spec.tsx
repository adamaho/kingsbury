import * as React from 'react';

import {
  shallow
} from "enzyme";

import {
  Avatar
} from '../Avatar';

describe('Avatar', () => {
  it('renders all children', () => {
    const wrapper = shallow(
      <Avatar src={<div>A</div>}/>
    );

    expect(wrapper.find('Avatar__Container').children()).toHaveLength(1);
  });
});
