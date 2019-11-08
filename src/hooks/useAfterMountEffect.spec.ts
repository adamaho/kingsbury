import * as React from 'react';

import {
  renderHook,
  act
} from '@testing-library/react-hooks'

import {
  useAfterMountEffect
} from './useAfterMountEffect';

describe('hooks:useAfterMountEffect', () => {
  it('should call the callback on the second render', () => {
    const mockCb = jest.fn();

    const {
      rerender
    } = renderHook(({ testValue }) => {
      useAfterMountEffect(mockCb, [testValue]);
    }, { initialProps: { testValue: false }});

    expect(mockCb).toBeCalledTimes(0);
    rerender({ testValue: true });
    expect(mockCb).toBeCalled();
  });
});
