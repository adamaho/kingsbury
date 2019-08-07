import * as React from 'react';

import {
  ITheme,
  theme
} from '../../styles/theme';

interface ICloseProps extends React.SVGProps<SVGSVGElement> {
  theme: ITheme;
}

const SVGClose = (props: ICloseProps) => (
  <svg width={18} height={18} fill="none" viewBox="0 0 18 18" {...props}>
    <path d="M1 1l16 16M1 17L17 1" stroke={props.theme.icons.close.color} strokeWidth={2} />
  </svg>
);

SVGClose.defaultProps = {
  theme
};

export default SVGClose;
