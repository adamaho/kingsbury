import {
  renderHook,
  act
} from '@testing-library/react-hooks'

import {
  useAfterMountEffect
} from './useAfterMountEffect';

describe('hooks:useAfterMountEffect', () => {
  it('should return the size of the window', () => {
    const mockCb = jest.fn();
    const {
      rerender
    } = renderHook(() => useAfterMountEffect(mockCb, []));

    expect(mockCb).toBeCalledTimes(0);
    rerender();
    expect(mockCb).toBeCalled();
  });
});
