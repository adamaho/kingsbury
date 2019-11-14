import * as React from 'react';

import {
  mount
} from "enzyme";

import {
  Portal
} from '../Portal';

describe('Portal', () => {
  it('renders when visible', () => {
    const wrapper = mount(
      <Portal>
        <div id={"test1"} />
      </Portal>
    );

    expect(wrapper.find('#test1').exists()).toBe(true);
  });

  it('renders under parent when disabled', () => {
    const wrapper = mount(
      <div id={"parent"}>
        <Portal disablePortal={true}>
          <div id={"test1"} />
        </Portal>
      </div>
    );

    expect(wrapper.find('Portal').length).toBe(1);
  });

  it('renders to custom mount node', () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'mount-point');
    document.body.appendChild(element);

    const wrapper = mount(
      <Portal container={() => element}>
        <div id={"test1"} />
      </Portal>
    );

    expect(wrapper.find('#test1').exists()).toBe(true);
  });

  it('should unmount when parent unmounts', () => {
    function Parent(props: any) {
      const { show = true } = props;
      return <div>{show ? <Child /> : null}</div>;
    }

    function Child() {
      return (
        <div>
          <Portal>
            <div id="test1" />
          </Portal>
        </div>
      );
    }
    const wrapper = mount(
      <Parent />
    );

    expect(wrapper.find('#test1').exists()).toBe(true);
    wrapper.setProps({ show: false });
    expect(wrapper.find('#test1').exists()).toBe(false);
  });
});
