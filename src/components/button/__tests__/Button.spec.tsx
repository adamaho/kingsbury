import * as React from 'react';

import {
  mount,
  shallow
} from "enzyme";

import {
  Button
} from '../Button';

describe('Button', () => {
  it('renders without children', () => {
    const wrapper = shallow(
      <Button />
    );

    expect(wrapper.find('Button__StyledButton').children()).toHaveLength(0);
  });

  it('renders with children', () => {
    const wrapper = shallow(
      <Button>Test Button</Button>
    );

    expect(wrapper.find('Button__StyledButton').children()).toHaveLength(1);
  });

  it('sets the buttonType', () => {
    const wrapper = shallow(
      <Button buttonType={'success'}>Test Button</Button>
    );

    expect(wrapper.find('Button__StyledButton').prop('buttonType')).toBe('success');
  });

  it('sets the disabled state', () => {
    const wrapper = shallow(
      <Button disabled>Test Button</Button>
    );

    expect(wrapper.find('Button__StyledButton').prop('disabled')).toBe(true);
  });

  it('calls onClick handler', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(
      <Button onClick={onClickMock}>Test Button</Button>
    );

    wrapper.find('Button__StyledButton').simulate('click');

    expect(onClickMock).toBeCalledTimes(1);
  });

  it('does not call onClick handler when button is disabled', () => {
    const onClickMock = jest.fn();

    // need to mount this one so that the pointer-events: none disables the clicking of the button
    const wrapper = mount(
      <Button disabled onClick={onClickMock}>Test Button</Button>
    );

    wrapper.find('Button__StyledButton').simulate('click');

    expect(onClickMock).toBeCalledTimes(0);
  });
});
