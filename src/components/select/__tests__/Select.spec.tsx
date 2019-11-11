import * as React from 'react';

import {
  mount
} from "enzyme";

import {
  Select
} from '../Select';

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

  // it('sets the borderType prop to none', () => {
  //   const wrapper = mount(
  //     <Input borderType={'none'} />
  //   );
  //
  //   expect(wrapper.find('Input__StyledInput').prop('borderType')).toBe('none');
  // });
  //
  // it('sets the borderType prop to bottom', () => {
  //   const wrapper = mount(
  //     <Input borderType={'bottom'} />
  //   );
  //
  //   expect(wrapper.find('Input__StyledInput').prop('borderType')).toBe('bottom');
  // });
  //
  // it('sets the disabled prop', () => {
  //   const wrapper = mount(
  //     <Input disabled />
  //   );
  //
  //   // @ts-ignore
  //   expect(wrapper.find('input').getDOMNode().disabled).toBe(true);
  // });
  //
  // it('sets the error prop', () => {
  //   const wrapper = mount(
  //     <Input error={'error'} />
  //   );
  //
  //   expect(wrapper.exists('Input__Error')).toBe(true);
  //   expect(wrapper.find('Input__Error').children().first().childAt(0).text()).toBe('error');
  // });
  //
  // it('sets the error prop with no border', () => {
  //   const wrapper = mount(
  //     <Input error={'error'} borderType={'none'} />
  //   );
  //
  //   expect(wrapper.exists('Input__Error')).toBe(true);
  //   expect(wrapper.find('Input__Error').children().first().childAt(0).text()).toBe('error');
  // });
  //
  // it('sets the error prop with bottom border', () => {
  //   const wrapper = mount(
  //     <Input error={'error'} borderType={'bottom'} />
  //   );
  //
  //   expect(wrapper.exists('Input__Error')).toBe(true);
  //   expect(wrapper.find('Input__Error').children().first().childAt(0).text()).toBe('error');
  // });
  //
  //
  // it('sets the label prop', () => {
  //   const wrapper = mount(
  //     <Input label={'label'} />
  //   );
  //
  //   expect(wrapper.find('Input__Label').children().first().text()).toBe('label');
  // });
  //
  // it('sets the htmlType prop', () => {
  //   const wrapper = mount(
  //     <Input htmlType={'password'} />
  //   );
  //
  //   // @ts-ignore
  //   expect(wrapper.find('input').getDOMNode().type).toBe('password');
  // });
  //
  // it('sets the inputSize prop', () => {
  //   const wrapper = mount(
  //     <Input inputSize={'large'} />
  //   );
  //
  //   expect(wrapper.find('Input__StyledInput').prop('inputSize')).toBe('large');
  // });
  //
  // it('sets the value prop', () => {
  //   const onChangeMock = jest.fn();
  //   const wrapper = mount(
  //     <Input value={'test'} onChange={onChangeMock} />
  //   );
  //
  //   // @ts-ignore
  //   expect(wrapper.find('input').getDOMNode().value).toBe('test');
  // });
  //
  // it('sets the defaultValue prop', () => {
  //   const wrapper = mount(
  //     <Input defaultValue={'test'} />
  //   );
  //
  //   // @ts-ignore
  //   expect(wrapper.find('input').getDOMNode().value).toBe('test');
  // });
  //
  // it('sets the inputPrefix prop', () => {
  //   const wrapper = mount(
  //     <Input inputPrefix={'A'}/>
  //   );
  //
  //   expect(wrapper.exists('Input__InputPrefix')).toBe(true);
  // });
  //
  // it('sets the inputSuffix prop', () => {
  //   const wrapper = mount(
  //     <Input inputSuffix={'A'} />
  //   );
  //
  //   expect(wrapper.exists('Input__InputSuffix')).toBe(true);
  // });
  //
  // it('sets the readOnly prop', () => {
  //   const wrapper = mount(
  //     <Input readOnly />
  //   );
  //
  //   // @ts-ignore
  //   expect(wrapper.find('input').getDOMNode().readOnly).toBe(true);
  // });
  //
  // it('calls onBlur handler', () => {
  //   const onBlurMock = jest.fn();
  //   const wrapper = mount(
  //     <Input onBlur={onBlurMock} />
  //   );
  //
  //   wrapper.find('input').simulate('blur');
  //   expect(onBlurMock).toBeCalled();
  // });
  //
  // it('calls onFocus handler', () => {
  //   const onFocusMock = jest.fn();
  //   const wrapper = mount(
  //     <Input onFocus={onFocusMock} />
  //   );
  //
  //   wrapper.find('input').simulate('focus');
  //   expect(onFocusMock).toBeCalled();
  // });
  //
  // it('calls onClick handler', () => {
  //   const onClickMock = jest.fn();
  //   const wrapper = mount(
  //     <Input onClick={onClickMock} />
  //   );
  //
  //   wrapper.find('input').simulate('click');
  //   expect(onClickMock).toBeCalled();
  // });
  //
  // it('calls onChange handler', () => {
  //   const onChangeMock = jest.fn((e) => e);
  //   const wrapper = mount(
  //     <Input onChange={onChangeMock} value={'value'}/>
  //   );
  //
  //   wrapper.find('input').simulate('change');
  //
  //   expect(onChangeMock.mock.results[0].value.target.value).toBe('value');
  // });
});
