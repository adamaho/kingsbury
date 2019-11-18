import * as React from "react";
import styled from 'styled-components';

import {
  Button
} from '../Button';

// @ts-ignore
import mdx from './Button.mdx';

const Spacer = styled.span`
  height: 1px;
  padding: 5px;
`;

export default {
  title: 'Components|Button',
  component: Button,
  parameters: {
    docs: {
      page: mdx
    },
  },
};

export const types = () => (
  <React.Fragment>
    <Button buttonType="primary">Primary</Button>
    <Spacer />
    <Button buttonType="success">Success</Button>
    <Spacer />
    <Button buttonType="info">Info</Button>
    <Spacer />
    <Button buttonType="danger">Danger</Button>
    <Spacer />
    <Button buttonType="warning">Warning</Button>
    <Spacer />
    <Button disabled>Disabled</Button>
  </React.Fragment>
);
