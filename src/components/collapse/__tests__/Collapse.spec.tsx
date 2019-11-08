import * as React from 'react';

import {
  mount,
  shallow
} from "enzyme";

import {
  Collapse
} from '../Collapse';

describe('Collapse', () => {
  it('renders without children', () => {
    const wrapper = shallow(
      <Collapse itemKey={'test'} />
    );

    expect(wrapper.find('Content').children()).toHaveLength(0);
  });

  it('renders with children', () => {
    const wrapper = shallow(
      <Collapse itemKey={'test'}>
        Content
      </Collapse>
    );

    expect(wrapper.find('Content').children()).toHaveLength(1);
  });

  it('renders header content', () => {
    const wrapper = shallow(
      <Collapse
        itemKey={'test'}
        header={'Header'}
      >
        Content
      </Collapse>
    );

    expect(wrapper.find('Header').children()).toHaveLength(1);
  });

  it('sets the defaultActive prop', () => {
    const onChangeMock = jest.fn();

    const wrapper = shallow(
      <Collapse
        onChange={onChangeMock}
        itemKey={'test'}
        header={'Header'}
        defaultActive
      >
        Content
      </Collapse>
    );

    expect(wrapper.find('Header').prop('open')).toBe(true);
  });

  it('sets the ghost prop', () => {
    const onChangeMock = jest.fn();

    const wrapper = shallow(
      <Collapse
        onChange={onChangeMock}
        itemKey={'test'}
        header={'Header'}
        ghost
      >
        Content
      </Collapse>
    );

    expect(wrapper.find('Collapse__Container').prop('ghost')).toBe(true);
  });

  it('sets the collapseType prop', () => {
    const onChangeMock = jest.fn();

    // need to mount to the DOM in order for event to propagate
    const wrapper = shallow(
      <Collapse
        onChange={onChangeMock}
        itemKey={'test'}
        header={'Header'}
        collapseType={'stack'}
      >
        Content
      </Collapse>
    );

    expect(wrapper.find('Collapse__Container').prop('collapseType')).toBe('stack');
  });

  it('calls onChange handler', () => {
    const onChangeMock = jest.fn();

    // need to mount to the DOM in order for event to propagate
    const wrapper = mount(
      <Collapse
        onChange={onChangeMock}
        itemKey={'test'}
        header={'Header'}
      >
        Content
      </Collapse>
    );

    wrapper.find('Header__StyledHeader').simulate('click');
    expect(onChangeMock).toBeCalledWith('test');
    expect(wrapper.find('Header').prop('open')).toBe(true);
  });

});
