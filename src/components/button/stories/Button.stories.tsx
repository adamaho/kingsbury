import * as React from "react";

import {Button} from '../Button';

// @ts-ignore
import mdx from './Button.mdx';

export default {
  title: 'Components|Button',
  component: Button,
  parameters: {
    docs: {
      page: mdx
    },
  },
};

export const basic = () => (
  <>
    <Button>Basic</Button>
    <Button buttonType={'success'}>Basic</Button>
    <Button buttonType={'info'}>Basic</Button>
  </>
);

//
// import {
//   storiesOf
// } from '@storybook/react';
//
// import {
//   Button
// } from '../Button';
//
// const stories = storiesOf('Button', module);
//
// stories.add(
//   'Default',
//   () => (
//     <div>
//       <div style={{ marginRight: '5px', display: 'inline-block' }}>
//         <Button>
//           Primary
//         </Button>
//       </div>
//       <div style={{ marginRight: '5px', display: 'inline-block' }}>
//         <Button buttonType="success">
//           Success
//         </Button>
//       </div>
//       <div style={{ marginRight: '5px', display: 'inline-block' }}>
//         <Button buttonType="warning">
//           Warning
//         </Button>
//       </div>
//       <div style={{ marginRight: '5px', display: 'inline-block' }}>
//         <Button buttonType="danger">
//           Danger
//         </Button>
//       </div>
//       <div style={{ marginRight: '5px', display: 'inline-block' }}>
//         <Button buttonType="info">
//           Info
//         </Button>
//       </div>
//       <div style={{ marginRight: '5px', display: 'inline-block' }}>
//         <Button disabled onClick={() => console.log('afasfdasdf')}>
//           Disabled
//         </Button>
//       </div>
//     </div>
//   )
// );
//
// export const test = () => (
//   <div>
//     <div style={{ marginRight: '5px', display: 'inline-block' }}>
//       <Button>
//         Primary
//       </Button>
//     </div>
//     <div style={{ marginRight: '5px', display: 'inline-block' }}>
//       <Button buttonType="success">
//         Success
//       </Button>
//     </div>
//     <div style={{ marginRight: '5px', display: 'inline-block' }}>
//       <Button buttonType="warning">
//         Warning
//       </Button>
//     </div>
//     <div style={{ marginRight: '5px', display: 'inline-block' }}>
//       <Button buttonType="danger">
//         Danger
//       </Button>
//     </div>
//     <div style={{ marginRight: '5px', display: 'inline-block' }}>
//       <Button buttonType="info">
//         Info
//       </Button>
//     </div>
//     <div style={{ marginRight: '5px', display: 'inline-block' }}>
//       <Button disabled onClick={() => console.log('afasfdasdf')}>
//         Disabled
//       </Button>
//     </div>
//   </div>
// );
//
// export default {
//   title: 'Design System|Avatar',
//
//   parameters: {
//     component: Button,
//   },
// };
