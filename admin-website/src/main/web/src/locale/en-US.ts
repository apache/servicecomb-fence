import localeLogin from '@/views/login/locale/en-US';
import localeTheme from '@/components/theme/locale/en-US';

import localeUserInfo from '@/views/user/info/locale/en-US';
import localeUserSetting from '@/views/user/setting/locale/en-US';

import localeManagement from '@/views/management/locale/en-US';

import localeProblems from '@/views/maintenance/problems/locale/en-US';

import localeRestApi from '@/views/maintenance/restapi/locale/en-US';

import localeExamples from '@/views/examples/locale/en-US';

import localeSettings from './en-US/settings';

import localeHttpError from './en-US/httpError';

export default {
  'menu.management': 'System Management',
  'menu.management.home': 'Service Discovery and Registration',
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
  ...localeManagement,
  ...localeExamples,
  ...localeProblems,
  ...localeRestApi,
  ...localeHttpError,
};
