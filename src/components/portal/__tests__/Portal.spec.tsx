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
      <Portal visible={true}>
        <div id={"test1"} />
      </Portal>
    );

    expect(wrapper.find('#test1').exists()).toBe(true);
  });

  it('does not render when not visible', () => {
    const wrapper = mount(
      <Portal visible={false}>
        <div id={"test1"} />
      </Portal>
    );

    expect(wrapper.find('#test1').exists()).toBe(false);
  });

  it('renders to custom mount node', () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'mount-point');
    document.body.appendChild(element);

    const wrapper = mount(
      <Portal visible={true} portalMountNode={element}>
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
          <Portal visible={true}>
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
