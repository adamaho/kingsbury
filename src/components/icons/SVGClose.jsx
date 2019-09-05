import * as React from 'react';

import {
  theme
} from '../../theme';

const SVGClose = (props) => (
  <svg width={18} height={18} fill="none" viewBox="0 0 18 18" {...props}>
    <path d="M1 1l16 16M1 17L17 1" stroke={props.theme.icons.close.color} strokeWidth={2} />
  </svg>
);

SVGClose.defaultProps = {
  theme
};

export default SVGClose;
