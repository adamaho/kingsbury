import React from 'react';
import enzyme from 'enzyme';
import renderer from 'react-test-renderer';

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


  test('it calls onChange', () => {
    const onChangeMock = jest.fn();
    const component = enzyme.mount(
      <Input onChange={onChangeMock} />
    );

    component.find('input').simulate('change');
    expect(onChangeMock).toHaveBeenCalled();
  });
});
