import localeLogin from '@/views/login/locale/en-US';
import localeTheme from '@/components/theme/locale/en-US';

import localeUserInfo from '@/views/user/info/locale/en-US';
import localeUserSetting from '@/views/user/setting/locale/en-US';

import localekanban from '@/views/board/locale/en-US';

import localeProblems from '@/views/cloud/problems/locale/en-US';

import localeSettings from './en-US/settings';

import localeHttpError from './en-US/httpError';

export default {
  'menu.board': 'Dashboard Page',
  'menu.home': 'Monitoring page',
  'menu.work': 'workbench',
  'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.profile.detail': 'Basic details page',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
  'messageBox.switchRoles': 'Switch Roles',
  'messageBox.userCenter': 'User Center',
  'messageBox.userSettings': 'User Settings',
  'messageBox.logout': 'Logout',
  'menu.cloud': 'Cloud service capability',
  ...localeTheme,
  ...localeSettings,
  ...localeLogin,
  ...localeUserInfo,
  ...localeUserSetting,
  ...localekanban,
  ...localeProblems,
  ...localeHttpError,
};
