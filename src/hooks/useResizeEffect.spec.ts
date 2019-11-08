import {
  renderHook,
  act
} from '@testing-library/react-hooks'

import {
  useResizeEffect
} from './useResizeEffect';

describe('hooks:useResizeEffect', () => {

  let map: any = {};
  beforeEach(() => {
    window.addEventListener = jest.fn((event: any, cb: any) => {
      map[event] = cb;
    });
  });

  it('should return the size of the window', () => {
    const {
      result
    } = renderHook(() => useResizeEffect());

    act(() => {
      map.resize();
    });

    expect(result.current).toStrictEqual({ width: 1024, height: 768 });
  });

  it('should unsubscribe from resize', () => {
    const {
      unmount
    } = renderHook(() => useResizeEffect());

    // force the unmount logic
    unmount();
  });
});
