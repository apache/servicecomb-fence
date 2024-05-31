import localeLogin from '@/views/login/locale/en-US';
import localeTheme from '@/components/theme/locale/en-US';

import localeSearchTable from '@/views/list/search-table/locale/en-US';

import localeStepForm from '@/views/form/step/locale/en-US';
import localeBaseForm from '@/views/form/base/locale/en-US';

import localeDetailForm from '@/views/profile/detail/locale/en-US';

import localeSuccess from '@/views/result/success/locale/en-US';
import localeError from '@/views/result/error/locale/en-US';

import locale403 from '@/views/exception/403/locale/en-US';
import locale404 from '@/views/exception/404/locale/en-US';
import locale500 from '@/views/exception/500/locale/en-US';

import localeUserInfo from '@/views/user/info/locale/en-US';
import localeUserSetting from '@/views/user/setting/locale/en-US';

import localekanban from '@/views/board/locale/en-US';

import localeHello from '@/views/cloud/hello/locale/en-US';

import localeContracts from '@/views/cloud/contracts/locale/en-US';

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
  ...localeSearchTable,
  ...localeStepForm,
  ...localeBaseForm,
  ...localeSuccess,
  ...localeError,
  ...locale403,
  ...locale404,
  ...locale500,
  ...localeUserInfo,
  ...localeUserSetting,
  ...localeDetailForm,
  ...localekanban,
  ...localeHello,
  ...localeContracts,
  ...localeHttpError,
};
