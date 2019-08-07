import {
  IModeConfig
} from './types';

import {
  theme
} from '../../styles/theme';

export const VERT_DRAWER_CONFIG_MAP: IModeConfig = {
  CLOSED: {
    top: '100%',
    borderRadius: '0px'
  },
  PARTIAL: {
    top: '65%',
    borderRadius: theme.drawer.borderRadius
  },
  OPEN: {
    top: '0',
    borderRadius: '0px'
  }
}