import localeLogin from '@/views/login/locale/en-US';
import localeTheme from '@/components/theme/locale/en-US';

import localeUserInfo from '@/views/user/info/locale/en-US';
import localeUserSetting from '@/views/user/setting/locale/en-US';

import localeKanban from '@/views/board/locale/en-US';

import localeProblems from '@/views/maintenance/problems/locale/en-US';

import localeSettings from './en-US/settings';

import localeHttpError from './en-US/httpError';

export default {
  'menu.board': 'Dashboard Page',
  'menu.home': 'Monitoring page',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
  'messageBox.switchRoles': 'Switch Roles',
  'messageBox.userCenter': 'User Center',
  'messageBox.userSettings': 'User Settings',
  'messageBox.logout': 'Logout',
  'menu.maintenance': 'System Maintenance',
  ...localeTheme,
  ...localeSettings,
  ...localeLogin,
  ...localeUserInfo,
  ...localeUserSetting,
  ...localeKanban,
  ...localeProblems,
  ...localeHttpError,
};
