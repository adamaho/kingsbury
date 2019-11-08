import * as React from 'react';

import {
  mount
} from "enzyme";

import {
  Card
} from '../Card';

describe('Card', () => {
  it('renders without children', () => {
    const wrapper = mount(
      <Card />
    );

    expect(wrapper.exists('Card__Container')).toBe(true);
  });

  it('renders header and footer', () => {
    const wrapper = mount(
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );

    expect(wrapper.exists('Header')).toBe(true);
    expect(wrapper.exists('Footer')).toBe(true);
  });

  it('calls onClick handler', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(
      <Card onClick={onClickMock}>
        <Card.Header>Header</Card.Header>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );

    wrapper.find('Card__Container').simulate('click');

    expect(onClickMock).toBeCalledTimes(1);
  });
});
