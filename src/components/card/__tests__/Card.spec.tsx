import * as React from 'react';

import {
  mount,
  shallow
} from "enzyme";

import {
  Card
} from '../Card';

describe('Card', () => {
  it('renders without children', () => {
    const wrapper = shallow(
      <Card />
    );

    expect(wrapper.find('Card__Container').children()).toHaveLength(0);
  });

  it('renders header', () => {
    const wrapper = shallow(
      <Card>
        <Card.Header>Header</Card.Header>
      </Card>
    );

    expect(wrapper.find('Card__Container').children()).toHaveLength(1);
    expect(wrapper.find('Header').children().text()).toBe('Header');
  });

  it('renders footer', () => {
    const wrapper = shallow(
      <Card>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );

    expect(wrapper.find('Card__Container').children()).toHaveLength(1);
    expect(wrapper.find('Footer').children().text()).toBe('Footer');
  });

  it('renders header and footer', () => {
    const wrapper = shallow(
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );

    expect(wrapper.find('Card__Container').children()).toHaveLength(2);
    expect(wrapper.find('Header').children().text()).toBe('Header');
    expect(wrapper.find('Footer').children().text()).toBe('Footer');
  });

  it('calls onClick handler', () => {
    const onClickMock = jest.fn();

    const wrapper = shallow(
      <Card onClick={onClickMock}>
        <Card.Header>Header</Card.Header>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );

    wrapper.find('Card__Container').simulate('click');

    expect(onClickMock).toBeCalledTimes(1);
  });
});
