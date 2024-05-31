import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
import { successResponseWrap } from '@/utils/setup-mock';

const taskList = Mock.mock({
  'list|60': [
    {
      'id': '@id',
      'name': 'xiaoming',
      'rank': '初级',
      'description': '一段描述文字',
      'createTime': '@datetime',
      'status|1': ['0', '1', '2'],
      'type': 'Tiny Design',
      'roles': '前端',
      'employeeNo': '00022456',
      'department': '公共服务',
      'departmentLevel': '中级',
      'workbenchName': 'work',
      'project': 'TinyDesign',
      'address': '西安研究所',
      'lastUpdateUser': '张三',
    },
  ],
});

let treeData = [];

export default [
  // list
  {
    url: '/api/employee/getEmployee',
    method: 'post',
    response: (params) => {
      const { pageIndex = 1, pageSize = 10 } = JSON.parse(
        JSON.stringify(params.body)
      );
      const index = pageIndex as number;
      const size = pageSize as number;
      const offset = (index - 1) * size;
      const count = index * size;
      treeData = taskList.list.slice(offset, count);

      const data = Mock.mock({
        total: 60,
        data: treeData,
      });

      return successResponseWrap(data);
    },
  },
] as MockMethod[];
