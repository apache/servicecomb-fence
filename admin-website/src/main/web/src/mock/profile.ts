import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
import { successResponseWrap } from '@/utils/setup-mock';

const initData = Mock.mock({
  Project: [
    'baseForm.form.label.projectone',
    'baseForm.form.label.projecttwo',
    'baseForm.form.label.projectthree',
  ],
  tableData: [
    {
      id: '1',
      version: 'version1',
      operation: 'offline',
      updated: 'person1',
      time: '2022-10-11',
    },
    {
      id: '2',
      version: 'version2',
      operation: 'offline',
      updated: 'person2',
      time: '2022-10-12',
    },
    {
      id: '3',
      version: 'version3',
      operation: 'online',
      updated: 'person3',
      time: '2022-10-13',
    },
    {
      id: '4',
      version: 'version4',
      operation: 'online',
      updated: 'person4',
      time: '2022-10-14',
    },
    {
      id: '5',
      version: 'version5',
      operation: 'online',
      updated: 'person5',
      time: '2022-10-15',
    },
    {
      id: '6',
      version: 'version6',
      operation: 'online',
      updated: 'person6',
      time: '2022-10-16',
    },
  ],
});

export default [
  {
    url: '/api/detail/getdata',
    method: 'get',
    response: () => {
      return successResponseWrap(initData);
    },
  },
] as MockMethod[];
