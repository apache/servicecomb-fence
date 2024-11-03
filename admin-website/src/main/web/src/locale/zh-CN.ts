import localeLogin from '@/views/login/locale/zh-CN';
import localeTheme from '@/components/theme/locale/zh-CN';

import localeUserInfo from '@/views/user/info/locale/zh-CN';
import localeUserSetting from '@/views/user/setting/locale/zh-CN';

import localeManagement from '@/views/management/locale/zh-CN';

import localeProblems from '@/views/maintenance/problems/locale/zh-CN';

import localeRestApi from '@/views/maintenance/restapi/locale/zh-CN';

import localeExamples from '@/views/examples/locale/zh-CN';

import localeSettings from './zh-CN/settings';

import localeHttpError from './zh-CN/httpError';

export default {
  'menu.management': '服务管理',
  'menu.management.home': '注册发现',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  'messageBox.switchRoles': '切换角色',
  'messageBox.userCenter': '用户中心',
  'messageBox.userSettings': '用户设置',
  'messageBox.logout': '退出登录',
  'menu.maintenance': '系统运维',
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
