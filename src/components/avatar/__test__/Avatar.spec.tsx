import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Avatar from '..';

describe('Avatar', () => {
  test('it renders', () => {
    const tree = renderer.create(<Avatar src={<div>avatar</div>} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
