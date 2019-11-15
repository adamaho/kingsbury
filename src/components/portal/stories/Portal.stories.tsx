import * as React from 'react';

import {
  storiesOf
} from '@storybook/react';

import {
  motion,
  AnimatePresence
} from "framer-motion";

import {
  Button
} from '../..';

import {
  Portal
} from '../Portal';

const stories = storiesOf('Portal', module);

stories.add(
  'Default',
  () => {
    const [showPortal, setShowPortal] = React.useState(false);
    return (
      <React.Fragment>
        <Button onClick={() => setShowPortal(!showPortal)}>
          Show Portal
        </Button>
        <AnimatePresence>
          {showPortal &&
            <Portal>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>I am the portal</div>
              </motion.div>
            </Portal>
          }
        </AnimatePresence>
        <Portal>
          <div style={{ visibility: 'hidden' }}>
            <div>I am the portal</div>
          </div>
        </Portal>
      </React.Fragment>
    );
  },
  { info: { propTablesExclude: [Button] },
  }
);

// stories.add(
//   'Custom Mount Node',
//   () => {
//     const [showPortal, setShowPortal] = React.useState(false);
//     const container = React.useRef(null);
//
//     return (
//       <React.Fragment>
//         <Button onClick={() => setShowPortal(!showPortal)}>
//           Show Portal
//         </Button>
//         <AnimatePresence>
//           {showPortal &&
//           <Portal container={container.current}>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <div>I am the portal</div>
//             </motion.div>
//           </Portal>
//           }
//         </AnimatePresence>
//         <div className="container-to-mount-to" ref={container} />
//           <Portal>
//             <div style={{ visibility: 'hidden' }}>
//               <div>I am the portal</div>
//             </div>
//           </Portal>
//       </React.Fragment>
//     );
//   },
//   { info: { propTablesExclude: [Button] },
//   }
// );
