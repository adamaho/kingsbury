import * as React from 'react';

import {
  mount
} from "enzyme";

import {
  Button
} from '../Button';

describe('Button', () => {
  it('renders without children', () => {
    const wrapper = mount(
      <Button />
    );

    expect(wrapper.exists('Button__StyledButton')).toBe(true);
  });

  it('renders with children', () => {
    const wrapper = mount(
      <Button>Test Button</Button>
    );

    expect(wrapper.exists('Button__StyledButton')).toBe(true);
  });

  it('sets the buttonType prop', () => {
    const wrapper = mount(
      <Button buttonType={'success'}>Test Button</Button>
    );

    expect(wrapper.find('Button__StyledButton').prop('buttonType')).toBe('success');
  });

  it('sets the disabled prop', () => {
    const wrapper = mount(
      <Button disabled>Test Button</Button>
    );

    expect(wrapper.find('Button__StyledButton').prop('disabled')).toBe(true);
  });

  it('calls onClick handler', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(
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
