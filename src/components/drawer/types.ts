import {
  ITheme
} from '../../styles/theme';

export type DrawerState = 'CLOSED' | 'OPEN' | 'PARTIAL';

export interface IModeConfigObject {
  top: string | number;
  borderRadius: string;
};

export interface IModeConfig {
  CLOSED: IModeConfigObject;
  PARTIAL: IModeConfigObject;
  OPEN: IModeConfigObject;
};

export interface IContainerProps {
  drawerState: DrawerState;
}

export interface IDrawerProps {
  drawerType: 'vertical'
  drawerState: DrawerState;
  setDrawerState?: (drawerState: DrawerState) => void;
  drawerHeaderContent?: React.ReactNode;
  showToggle?: boolean;
  className?: string;
  children?: React.ReactNode;
  theme?: ITheme;
};