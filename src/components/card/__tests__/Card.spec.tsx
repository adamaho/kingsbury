import * as React from 'react';
import * as enzyme from 'enzyme';
import * as renderer from 'react-test-renderer';

import {
	Card
} from '..';

describe('Card', () => {
  test('it renders without children', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders header', () => {
    const tree = renderer.create(
      <Card>
        <Card.Header />
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders footer', () => {
    const tree = renderer.create(
      <Card>
        <Card.Footer />
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders with header and footer', () => {
    const tree = renderer.create(
      <Card>
        <Card.Header />
        <Card.Footer />
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it calls onClick', () => {
    const onClickMock = jest.fn();
    const component = enzyme.mount(
      <Card onClick={onClickMock} />
    );

    component.find(Card).simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
