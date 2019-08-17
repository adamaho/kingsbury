import React from 'react';
import enzyme from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '..';

describe('Button', () => {
  test('it renders without children', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders with children', () => {
    const tree = renderer.create(
      <Button>
        test
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it calls onClick', () => {
    const onClickMock = jest.fn();
    const component = enzyme.mount(
      <Button onClick={onClickMock} />
    );

    component.find('button').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
