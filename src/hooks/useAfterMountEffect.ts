import * as React from 'react';

/**
 * Will ensure that affect is not called until at least the second render
 * of the component
 */
export const useAfterMountEffect = (cb: () => void, deps: any[]) => {
  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (didMount.current) {
      cb();
    } else {
      didMount.current = true;
    }
  }, [cb, ...deps]); // eslint-disable-line
};
