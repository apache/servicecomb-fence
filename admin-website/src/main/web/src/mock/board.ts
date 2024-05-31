import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
import { successResponseWrap } from '@/utils/setup-mock';

const initData = Mock.mock({
  options: [
    {
      value: '1',
      label: 'work.mock.employees',
    },
    {
      value: '2',
      label: 'work.mock.onboard',
    },
    {
      value: '3',
      label: 'work.mock.Test',
    },
  ],
});

const initData1 = Mock.mock({
  options: [
    {
      value: '1',
      label: 'work.mock.week1',
    },
    {
      value: '2',
      label: 'work.mock.week2',
    },
    {
      value: '3',
      label: 'work.mock.week3',
    },
  ],
});

const initData2 = Mock.mock({
  options: [
    {
      value: '1',
      label: 'work.mock.network',
    },
    {
      value: '2',
      label: 'work.mock.centralized',
    },
    {
      value: '3',
      label: 'work.mock.hardware',
    },
  ],
});

const changeDate = Mock.mock({
  options1: [101, 212, 122, 232],
  options2: [323, 555, 425, 2221],
  options3: [23234, 234, 989, 122],
});
export default [
  {
    url: '/api/user/getdata',
    method: 'get',
    response: () => {
      return successResponseWrap(initData);
    },
  },
  {
    url: '/api/user/getrpractic',
    method: 'get',
    response: () => {
      return successResponseWrap(initData1);
    },
  },
  {
    url: '/api/user/getrtrain',
    method: 'get',
    response: () => {
      return successResponseWrap(initData2);
    },
  },
  {
    url: '/api/user/getselect',
    method: 'post',
    response: (data: any) => {
      let result = null;
      if (data.body === 1) {
        result = successResponseWrap(changeDate.options1);
      } else if (data.body === 2) {
        result = successResponseWrap(changeDate.options2);
      } else {
        result = successResponseWrap(changeDate.options3);
      }
      return result;
    },
  },
] as MockMethod[];
