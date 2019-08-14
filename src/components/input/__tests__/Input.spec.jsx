import React from 'react';
import enzyme from 'enzyme';
import renderer from 'react-test-renderer';

import {
  theme
} from '../../../theme';

import Input from '..';

describe('Input', () => {
  test('it renders without children', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders with placeholder', () => {
    const tree = renderer.create(<Input placeholder="placeholder" />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  test.skip('it calls onChange', () => {
    const onChangeMock = jest.fn();
    const component = enzyme.mount(
      <Input onChange={onChangeMock} value="custom_value" />
    );
    component.find('input').simulate('change', event);

    console.log(onChangeMock.mock);
    expect(onChangeMock.mock.results[0].value).toEqual('custom_value');
  });
});
