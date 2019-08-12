import React from 'react';
import renderer from 'react-test-renderer';

import {
  theme
} from '../../../theme';

import Card from '..';

describe('Button', () => {
  test('it renders without children', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});