import localeLogin from '@/views/login/locale/zh-CN';
import localeTheme from '@/components/theme/locale/zh-CN';

import localeSearchTable from '@/views/list/search-table/locale/zh-CN';

import localeStepForm from '@/views/form/step/locale/zh-CN';
import localeBaseForm from '@/views/form/base/locale/zh-CN';

import localeDetailForm from '@/views/profile/detail/locale/zh-CN';

import localeSuccess from '@/views/result/success/locale/zh-CN';
import localeError from '@/views/result/error/locale/zh-CN';

import locale403 from '@/views/exception/403/locale/zh-CN';
import locale404 from '@/views/exception/404/locale/zh-CN';
import locale500 from '@/views/exception/500/locale/zh-CN';

import localeUserInfo from '@/views/user/info/locale/zh-CN';
import localeUserSetting from '@/views/user/setting/locale/zh-CN';

import localekanban from '@/views/board/locale/zh-CN';

import localeHello from '@/views/cloud/hello/locale/zh-CN';

import localeContracts from '@/views/cloud/contracts/locale/zh-CN';

import localeSettings from './zh-CN/settings';

import localeHttpError from './zh-CN/httpError';

export default {
  'menu.board': '看板',
  'menu.home': '监控页',
  'menu.work': '工作台',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.profile.detail': '基础详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  'messageBox.switchRoles': '切换角色',
  'messageBox.userCenter': '用户中心',
  'messageBox.userSettings': '用户设置',
  'messageBox.logout': '退出登录',
  'menu.cloud': '云服务能力展示',
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
