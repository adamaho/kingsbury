import React from 'react';
import renderer from 'react-test-renderer';

import {
  theme
} from '../../../theme';

import Button from '..';

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
  const tree = renderer.create(
    <Button onClick={() => undefined}>
      test
    </Button>
  ).toJSON();

  expect(tree).toMatchSnapshot();

  // clicking will cause rerender
  tree.props.onClick();

  expect(tree).toMatchSnapshot();
});

test('it renders primary', () => {
  const tree = renderer.create(
    <Button>
      test
    </Button>
  ).toJSON();

  expect(tree).toHaveStyleRule('background', theme.colors.primary);
  expect(tree).toHaveStyleRule('color', theme.colors.white);
  expect(tree).toHaveStyleRule('height', theme.button.height);
  expect(tree).toHaveStyleRule('border', theme.button.border);
  expect(tree).toHaveStyleRule('border-radius', theme.button.borderRadius);
  expect(tree).toHaveStyleRule('padding', theme.button.padding);
  expect(tree).toHaveStyleRule('transition', `${theme.animations.time.fast} cubic-bezier(.19,1,.4,1)`);
});

test('it renders success', () => {
  const tree = renderer.create(
    <Button buttonType="success">
      test
    </Button>
  ).toJSON();

  expect(tree).toHaveStyleRule('background', theme.colors.success);
  expect(tree).toHaveStyleRule('color', theme.colors.black);
});

test('it renders warning', () => {
  const tree = renderer.create(
    <Button buttonType="warning">
      test
    </Button>
  ).toJSON();

  expect(tree).toHaveStyleRule('background', theme.colors.warning);
  expect(tree).toHaveStyleRule('color', theme.colors.black);
});

test('it renders danger', () => {
  const tree = renderer.create(
    <Button buttonType="danger">
      test
    </Button>
  ).toJSON();

  expect(tree).toHaveStyleRule('background', theme.colors.danger);
  expect(tree).toHaveStyleRule('color', theme.colors.white);
});

test('it renders info', () => {
  const tree = renderer.create(
    <Button buttonType="info">
      test
    </Button>
  ).toJSON();

  expect(tree).toHaveStyleRule('background', theme.colors.info);
  expect(tree).toHaveStyleRule('color', theme.colors.white);
});

test('it renders disabled', () => {
  const tree = renderer.create(
    <Button disabled>
      test
    </Button>
  ).toJSON();

  expect(tree).toHaveStyleRule('background', theme.colors.disabled);
  expect(tree).toHaveStyleRule('color', theme.colors.white);
  expect(tree).toHaveStyleRule('cursor', 'not-allowed');
});
