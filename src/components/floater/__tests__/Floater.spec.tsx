import * as React from 'react';

import {
  mount,
  shallow
} from "enzyme";

import {
  act
} from "react-dom/test-utils";

import {
  Floater
} from '../Floater';

describe('Floater', () => {
  it('renders trigger', () => {
    const wrapper = shallow(
      <Floater
        triggerComponent={<div>Trigger</div>}
       >
        Content to show
      </Floater>
    );

    const trigger = wrapper.children().first().children();

    expect(trigger).toHaveLength(1);
  });

  it('renders portal on hover', () => {
    const wrapper = mount(
      <Floater
        triggerComponent={<div>Trigger</div>}
      >
        Portal
      </Floater>
    );

    const trigger = wrapper.children().first();

    trigger.simulate('mouseenter');
    expect(wrapper.exists('Floater__PortalContainer')).toBe(true);

    const portal = wrapper.find('Floater__PortalContainer');

    // confirm the portal remains open on mouseEnter
    portal.simulate('mouseenter');
    expect(portal.exists()).toBe(true);

    trigger.simulate('mouseleave');
    expect(wrapper.exists('Floater__PortalContainer')).toBe(false);
  });

  it('renders portal on click', () => {
    // create div to click
    const container = document.createElement('div');
    document.body.appendChild(container);

    // mock event listener
    const map: any = {};
    document.addEventListener = jest.fn((event: any, cb: any) => {
      map[event] = cb;
    });

    const wrapper = mount(
      <Floater
        triggerComponent={<div>Trigger</div>}
        triggerType={'click'}
      >
        Portal
      </Floater>
    );

    const trigger = wrapper.children().first();

    trigger.simulate('click');
    expect(wrapper.exists('Floater__PortalContainer')).toBe(true);

    trigger.simulate('focus');
    expect(wrapper.exists('Floater__PortalContainer')).toBe(true);

    // confirm portal is still open when it is clicked
    const portal = wrapper.find('Floater__PortalContainer');

    portal.simulate('click');
    expect(wrapper.exists('Floater__PortalContainer')).toBe(true);

    // confirm portal closes when clicked off
    act(() => {
      map.mousedown({ target: container });
    });

    // make sure the component re-renders
    wrapper.update();
    expect(wrapper.exists('Floater__PortalContainer')).toBe(false);

  });

  it('renders portal on contextMenu', () => {

    // create div to click
    const container = document.createElement('div');
    document.body.appendChild(container);

    // add mock event listener
    const map: any = {};
    document.addEventListener = jest.fn((event: any, cb: any) => {
      map[event] = cb;
    });

    const wrapper = mount(
      <Floater
        triggerComponent={<div>Trigger</div>}
        triggerType={'contextMenu'}
      >
        Portal
      </Floater>
    );

    const trigger = wrapper.children().first();

    trigger.simulate('click');
    expect(wrapper.exists('Floater__PortalContainer')).toBe(true);

    // confirm portal closes when clicked off
    act(() => {
      map.mousedown({ target: container });
    });

    // make sure the component re-renders
    wrapper.update();
    expect(wrapper.exists('Floater__PortalContainer')).toBe(false);

    trigger.simulate('focus');
    expect(wrapper.exists('Floater__PortalContainer')).toBe(true);

    // confirm portal is still open when it is clicked
    const portal = wrapper.find('Floater__PortalContainer');
    portal.simulate('click');
    expect(portal.exists()).toBe(true);

    // unmount to ensure the event listeners are removed
    wrapper.unmount();
  });
});
