import * as React from 'react';

import {
  mount,
  shallow
} from "enzyme";

import {
  Floater
} from '../Floater';
import {act} from "react-dom/test-utils";

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

  it('renders portal on click', () => {
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

    act(() => {
      map.mousedown({ target: null });
    });
    expect(wrapper.exists('Floater__PortalContainer')).toBe(false);

    trigger.simulate('focus');
    expect(wrapper.exists('Floater__PortalContainer')).toBe(true);
  });
});
