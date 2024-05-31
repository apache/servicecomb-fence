import { MockMethod } from 'vite-plugin-mock';
import {
  successResponseWrap,
  failResponseWrap,
  initData,
} from '@/utils/setup-mock';
import { isLogin } from '@/utils/auth';

const positive = JSON.parse(JSON.stringify(initData.tableData));
const negative = JSON.parse(JSON.stringify(initData.tableData.reverse()));
const initlist = JSON.parse(JSON.stringify(initData.chartData[0].list));
const userInfo = JSON.parse(JSON.stringify(initData.userInfo));
export default [
  // 注册
  {
    url: '/api/user/register',
    method: 'post',
    response: (params) => {
      localStorage.setItem('registerUser', JSON.stringify(params.body));
      return successResponseWrap({ ...userInfo, role: 'admin' });
    },
  },

  // 用户信息
  {
    url: '/api/user/userInfo',
    method: 'get',
    response: () => {
      if (isLogin()) {
        const role = window.localStorage.getItem('userRole') || 'admin';
        return successResponseWrap({
          ...userInfo,
          role,
        });
      }
      return successResponseWrap(null);
    },
  },

  // 修改用户信息
  {
    url: '/api/user/userInfo',
    method: 'put',
    response: () => {
      if (isLogin()) {
        const role = window.localStorage.getItem('userRole') || 'admin';
        return successResponseWrap({
          ...userInfo,
          role,
        });
      }
      return successResponseWrap(null);
    },
  },

  // 登录
  {
    url: '/api/user/login',
    method: 'post',
    response: (params) => {
      const registerUser = JSON.parse(
        localStorage.getItem('registerUser') || '{}'
      );
      const { username, password } = JSON.parse(JSON.stringify(params.body));
      if (!username) {
        return failResponseWrap(null, '邮箱名不能为空', 'InvalidParameter');
      }
      if (!password) {
        return failResponseWrap(null, '密码不能为空', 'InvalidParameter');
      }
      if (
        (username === 'admin@example.com' && password === 'admin') ||
        (username === registerUser.username &&
          password === registerUser.password)
      ) {
        window.localStorage.setItem('userRole', 'admin');
        return successResponseWrap({
          token: '12345',
          userInfo: {
            ...userInfo,
          },
        });
      }
      return failResponseWrap(null, '账号或者密码错误', 'InvalidParameter');
    },
  },

  // 登出
  {
    url: '/api/user/logout',
    method: 'post',
    response: () => {
      return successResponseWrap(null);
    },
  },

  // 用户中心数据
  {
    url: '/api/user/data',
    method: 'post',
    response: (params: any) => {
      const { sort, startTime, endTime, filterStatus, filterType } = JSON.parse(
        JSON.stringify(params.body)
      );
      initData.tableData = positive;
      initData.chartData[0].list = initlist;
      if (sort === 1 || sort === 3) {
        initData.chartData[0].list.reverse();
        initData.tableData = positive;
        return successResponseWrap(initData);
      }
      if (sort === 2 || sort === 4) {
        initData.chartData[0].list.reverse();
        initData.tableData = negative;
        return successResponseWrap(initData);
      }
      if (
        startTime !== '' ||
        endTime !== '' ||
        filterStatus.length !== 0 ||
        (filterType.length !== 0 && sort === undefined)
      ) {
        const start = new Date(JSON.parse(JSON.stringify(startTime))).getTime();
        const end = new Date(JSON.parse(JSON.stringify(endTime))).getTime();
        // eslint-disable-next-line func-names
        const table = initData.tableData.filter(function (item: any) {
          return (
            filterType.includes(item.bid) &&
            filterStatus.includes(item.pid) &&
            new Date(JSON.parse(JSON.stringify(item.time))).getTime() - start >
              0 &&
            new Date(JSON.parse(JSON.stringify(item.time))).getTime() - end < 0
          );
        });
        // eslint-disable-next-line func-names
        const chart = initData.chartData[0].list.filter(function (item: any) {
          return (
            filterType.includes(item.bid) && filterStatus.includes(item.pid)
          );
        });
        initData.tableData = table;
        initData.chartData[0].list = chart;
        return successResponseWrap(initData);
      }
      return successResponseWrap(initData);
    },
  },
] as MockMethod[];
