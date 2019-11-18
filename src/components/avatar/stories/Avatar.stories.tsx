import * as React from "react";

import {
  Avatar
} from '../Avatar';

// @ts-ignore
import mdx from './Avatar.mdx';

export default {
  title: 'Components|Avatar',
  component: Avatar,
  parameters: {
    docs: {
      page: mdx
    },
  },
};

export const source = () => (
  <Avatar src={'A'} />
);
