import { number } from 'fp-ts';

export interface AppState {
  theme: string;
  colorWeek: boolean;
  navbar: boolean;
  menu: boolean;
  hideMenu: boolean;
  menuCollapse: boolean;
  footer: boolean;
  themelist: string;
  themeColor: string;
  themeValue: number;
  themeContent: any;
  menuWidth: number;
  Settings: boolean;
  device: string;
  tabBar: boolean;
  [key: string]: unknown;
  step: number;
  themeLightColors: any
}
