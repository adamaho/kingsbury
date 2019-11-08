import * as React from 'react';
import * as _ from 'lodash';

interface WindowSize {
  height?: number;
  width?: number;
}

/**
 * This Effect will provide resize listening capabilities for a component
 */
export const useResizeEffect = () => {
  function getWindowSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  const [windowSize, setWindowSize] = React.useState<WindowSize>(getWindowSize());

  React.useEffect(() => {
    const handleEvent = _.debounce(() => {
      setWindowSize(getWindowSize());
    },
    100,
    {
      leading: true,
      trailing: true
    }
    );

    window.addEventListener<'resize'>('resize', handleEvent);

    return () => {
      window.removeEventListener<'resize'>('resize', handleEvent);
    }
  }, []);

  return windowSize;
};
