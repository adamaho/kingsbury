import * as React from 'react';

import {
  ITheme,
  theme
} from '../../styles/theme';

interface IconProps {
  theme?: ITheme;
}

const Close: React.FunctionComponent<IconProps> = (props) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L17 17M1 17L17 1" stroke={props.theme && props.theme.icons.close.color} stroke-width="2"/>
  </svg>
);

Close.defaultProps = {
  theme
};

export {
  Close
};



