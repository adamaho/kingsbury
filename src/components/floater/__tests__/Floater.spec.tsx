import * as React from 'react';

import {
  mount
} from "enzyme";

import {
  act
} from "react-dom/test-utils";

import {
  Floater
} from '../Floater';

describe('Floater', () => {
  it('renders trigger', () => {
    const wrapper = mount(
      <Floater
        triggerComponent={<div>Trigger</div>}
       >
        Content to show
      </Floater>
    );

    expect(wrapper.find('Floater').children().first().exists()).toBe(true);
  });

  describe('Trigger Hover', () => {
    let wrapper: any;
    let trigger: any;

    beforeEach(() => {
      wrapper = mount(
        <Floater
          triggerComponent={<div>Trigger</div>}
        >
          Portal
        </Floater>
      );

      trigger = wrapper.children().first();
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('opens portal', () => {
      trigger.simulate('mouseenter');
      expect(wrapper.exists('Floater__PortalContainer')).toBe(true);

    });

    it('stays open on mouseenter', () => {
      // open the portal
      trigger.simulate('mouseenter');

      const portal = wrapper.find('Floater__PortalContainer');

      portal.simulate('mouseenter');
      expect(portal.exists()).toBe(true);
    });

    it('stays open on click', () => {
      // open the portal
       trigger.simulate('mouseenter');

      const portal = wrapper.find('Floater__PortalContainer');

      portal.simulate('click');
      expect(portal.exists()).toBe(true);
    });

    it('closes on mouseleave', () => {
      // open the portal
      trigger.simulate('mouseenter');

      trigger.simulate('mouseleave');
      expect(wrapper.exists('Floater__PortalContainer')).toBe(false);
    });
  });

  describe('Trigger Click', () => {

    let wrapper: any;
    let trigger: any;
    let map: any = {};
    let windowMap: any = {};
    const container = document.createElement('div');

    beforeEach(() => {
      // create div to click
      document.body.appendChild(container);

      // add mock event listener
      document.addEventListener = jest.fn((event: any, cb: any) => {
        map[event] = cb;
      });

      window.addEventListener = jest.fn((windowEvent: any, windowCb: any) => {
        windowMap[windowEvent] = windowCb;
      });

      wrapper = mount(
        <Floater
          triggerComponent={<div>Trigger</div>}
          triggerType={'click'}
        >
          Portal
        </Floater>
      );

      trigger = wrapper.children().first();
    });

    afterEach(() => {
       wrapper.unmount();
    });

    it('opens portal', () => {
      trigger.simulate('click');
      expect(wrapper.exists('Floater__PortalContainer')).toBe(true);
    });

    it('opens portal on focus', () => {
      trigger.simulate('focus');
      expect(wrapper.exists('Floater__PortalContainer')).toBe(true);
    });

    it('stays open on click', () => {
      // open the portal
      trigger.simulate('click');

      const portal = wrapper.find('Floater__PortalContainer');
      act(() => {
        map.mousedown({ target: portal.getDOMNode() });
      });
      expect(portal.exists()).toBe(true);
    });

    it('closes on document click', () => {
      // open the portal
      trigger.simulate('click');

      act(() => {
        map.mousedown({ target: container });
      });

      // make sure the component re-renders
      wrapper.update();
      expect(wrapper.exists('Floater__PortalContainer')).toBe(false);
    });

    it('closes on window blur', () => {
      // open the portal
      trigger.simulate('click');

      act(() => {
        windowMap.blur();
      });

      // make sure the component re-renders
      wrapper.update();
      expect(wrapper.exists('Floater__PortalContainer')).toBe(false);
    });
  });
});
