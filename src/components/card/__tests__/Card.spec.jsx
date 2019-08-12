import React from 'react';
import renderer from 'react-test-renderer';

import Card from '..';

import {
  theme
} from '../../../theme';

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


  test('it styles base', () => {
    const tree = renderer.create(
      <Card />
    ).toJSON();

    expect(tree).toHaveStyleRule('background', theme.card.background);
    expect(tree).toHaveStyleRule('border', theme.card.outerBorder);
    expect(tree).toHaveStyleRule('border-radius', theme.card.borderRadius);
    expect(tree).toHaveStyleRule('height', theme.card.height);
    expect(tree).toHaveStyleRule('width', theme.card.width);
    expect(tree).toHaveStyleRule('box-shadow', theme.card.boxShadow);
    expect(tree).toHaveStyleRule('transition', `${theme.animations.time.fast} cubic-bezier(.19,1,.4,1)`);
  });

  test('it styles base with onClick', () => {
    const tree = renderer.create(
      <Card onClick={() => undefined} />
    ).toJSON();

    expect(tree).toHaveStyleRule('cursor', 'pointer');
    expect(tree).toHaveStyleRule('opacity', '0.8');
    expect(tree).toHaveStyleRule('opacity', '1', {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('transform', 'translateY(-1%)', {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('box-shadow', '0 7px 21px 0 rgba(0,0,0,.07)', {
      modifier: ':hover',
    });
  });


  test('it styles header', () => {
    const tree = renderer.create(
      <Card.Header />
    ).toJSON();

    expect(tree).toHaveStyleRule('background', theme.card.headerBackground);
    expect(tree).toHaveStyleRule('border-bottom', theme.card.innerBorder);
    expect(tree).toHaveStyleRule('border-top-left-radius', theme.card.borderRadius);
    expect(tree).toHaveStyleRule('border-top-right-radius', theme.card.borderRadius);
    expect(tree).toHaveStyleRule('height', theme.card.headerHeight);
  });

  test('it styles footer', () => {
    const tree = renderer.create(
      <Card.Footer />
    ).toJSON();

    expect(tree).toHaveStyleRule('background', theme.card.footerBackground);
    expect(tree).toHaveStyleRule('border-top', theme.card.innerBorder);
    expect(tree).toHaveStyleRule('border-bottom-left-radius', theme.card.borderRadius);
    expect(tree).toHaveStyleRule('border-bottom-right-radius', theme.card.borderRadius);
    expect(tree).toHaveStyleRule('height', theme.card.footerHeight);
    expect(tree).toHaveStyleRule('min-height', theme.card.footerMinHeight);
  });
});
