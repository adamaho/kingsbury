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
    const div = document.createElement('div');
    document.body.appendChild(div);

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

    trigger.simulate('blur');
    expect(wrapper.exists('Floater__PortalContainer')).toBe(false);

    trigger.simulate('focus');
    expect(wrapper.exists('Floater__PortalContainer')).toBe(true);
  });

  it('renders portal on contextMenu', () => {

    const container = document.createElement('div');
    document.body.appendChild(container);

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

    // simulate clicking off
    act(() => {
      map.mousedown({ target: container });
    });

    // make sure the component re-renders
    wrapper.update();
    expect(wrapper.exists('Floater__PortalContainer')).toBe(false);

    trigger.simulate('focus');
    expect(wrapper.exists('Floater__PortalContainer')).toBe(true);
  });
});
