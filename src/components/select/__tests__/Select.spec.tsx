import * as React from 'react';

import {
  mount, ReactWrapper
} from "enzyme";

import {
  Select
} from '../Select';
import {act} from "react-dom/test-utils";

describe('Select', () => {
  it('renders select', () => {
    const wrapper = mount(
      <Select>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    expect(wrapper.exists('Select__Container')).toBe(true);
  });

  it('renders select with options when clicked', () => {
    const wrapper = mount(
      <Select>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    wrapper.find('Input__StyledInput').simulate('click');
    expect(wrapper.exists('SelectOption')).toBe(true);
  });

  it('sets the placeholder', () => {
    const wrapper = mount(
      <Select placeholder={'test'}>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().placeholder).toBe('test');
  });

  it('sets the name and id for formik', () => {
    const wrapper = mount(
      <Select name={'test'} id={'test-id'}>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().name).toBe('test');

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().id).toBe('test-id');
  });

  it('sets the borderType prop to none', () => {
    const wrapper = mount(
      <Select borderType={'none'}>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    expect(wrapper.find('Input__StyledInput').prop('borderType')).toBe('none');
  });

  it('sets the borderType prop to bottom', () => {
    const wrapper = mount(
      <Select borderType={'bottom'}>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    expect(wrapper.find('Input__StyledInput').prop('borderType')).toBe('bottom');
  });

  it('sets the disabled prop', () => {
    const wrapper = mount(
      <Select disabled>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().disabled).toBe(true);
  });

  it('sets the error prop', () => {
    const wrapper = mount(
      <Select error={'error'}>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    expect(wrapper.exists('Input__Error')).toBe(true);
    expect(wrapper.find('Input__Error').children().first().childAt(0).text()).toBe('error');
  });

  it('sets the error prop with no border', () => {
    const wrapper = mount(
      <Select error={'error'} borderType={'none'}>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    expect(wrapper.exists('Input__Error')).toBe(true);
    expect(wrapper.find('Input__Error').children().first().childAt(0).text()).toBe('error');
  });

  it('sets the error prop with bottom border', () => {
    const wrapper = mount(
      <Select error={'error'} borderType={'bottom'}>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );


    expect(wrapper.exists('Input__Error')).toBe(true);
    expect(wrapper.find('Input__Error').children().first().childAt(0).text()).toBe('error');
  });


  it('sets the label prop', () => {
    const wrapper = mount(
      <Select label={'label'}>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    expect(wrapper.find('Input__Label').children().first().text()).toBe('label');
  });

  it('sets the select prop', () => {
    const wrapper = mount(
      <Select selectSize={'large'}>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    expect(wrapper.find('Input__StyledInput').prop('inputSize')).toBe('large');
  });

  it('sets the defaultValue prop', () => {
    const wrapper = mount(
      <Select
        defaultValue={{
          optionTitle: 'test',
          optionValue: 'test',
          optionKey: 'test'
        }}
      >
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().value).toBe('test');
  });

  it('sets the value prop', () => {
    const wrapper = mount(
      <Select
        value={{
          optionTitle: 'test',
          optionValue: 'test',
          optionKey: 'test'
        }}
      >
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().value).toBe('test');
  });

  it('closes when the input is blurred', async () => {
    const wrapper = mount(
      <Select>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    // open the options
    wrapper.find('Input__StyledInput').simulate('click');
    expect(wrapper.exists('SelectOption')).toBe(true);

    const promise = new Promise<ReactWrapper<any>>((resolve) => {
      wrapper.find('Input__StyledInput').simulate('blur');
      wrapper.update();

      // wait for the animation to finish
      setTimeout(() => {
        wrapper.update();
        resolve(wrapper.find('Select'));
      }, 400)
    });

    let select: ReactWrapper;
    await act(async () => {
      select = await promise;
    });

    // @ts-ignore
    expect(select.exists('SelectOption')).toBe(false);
  });

  it('closes when the input is clicked twice', async () => {
    const wrapper = mount(
      <Select>
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    // open the options
    wrapper.find('Input__StyledInput').simulate('click');
    expect(wrapper.exists('SelectOption')).toBe(true);

    const promise = new Promise<ReactWrapper<any>>((resolve) => {
      wrapper.find('Input__StyledInput').simulate('click');
      wrapper.update();

      // wait for the animation to finish
      setTimeout(() => {
        wrapper.update();
        resolve(wrapper.find('Select'));
      }, 400)
    });

    let select: ReactWrapper;
    await act(async () => {
      select = await promise;
    });

    // @ts-ignore
    expect(select.exists('SelectOption')).toBe(false);
  });

  it('calls onChange handler', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(
      <Select
        onChange={onChangeMock}
        value={{
          optionTitle: 'test',
          optionValue: 'test',
          optionKey: 'test'
        }}
      >
        <Select.Option optionTitle={'test'} optionKey={'test'} optionValue={'test'} />
      </Select>
    );

    // open the options
    wrapper.find('Input__StyledInput').simulate('click');

    // click an option
    wrapper.find('SelectOption__Option').simulate('click');

    expect(onChangeMock).toBeCalled();
  });
});
