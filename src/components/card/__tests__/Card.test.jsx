import React from 'react';
import renderer from 'react-test-renderer';

import {
  css
} from 'styled-components';

import Card from '..';

describe('Card', () => {
  test('it renders without children', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders header', () => {
    const tree = renderer.create(
      <Card header={'header'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders footer', () => {
    const tree = renderer.create(
      <Card footer={'footer'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it calls onClick', () => {
    const tree = renderer.create(
      <Card onClick={() => undefined}>
        test
      </Card>
    ).toJSON();

    expect(tree).toMatchSnapshot();

    // clicking will cause rerender
    tree.props.onClick();

    expect(tree).toMatchSnapshot();
  });
});
