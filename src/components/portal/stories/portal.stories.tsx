import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import Portal from '..';

const stories = storiesOf('Portal', module);

const Test = () => {
  let testRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={testRef}>
      <Portal
        getPortalMountNode={test}
      >
        <div>asdfasdf</div>
      </Portal>
    </div>
  );
};

stories.add(
  'Default',
  () => <Test />
);