import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from '..';

describe('Avatar', () => {
  test('it renders', () => {
    const tree = renderer.create(<Avatar src={<div>asdf</div>} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
