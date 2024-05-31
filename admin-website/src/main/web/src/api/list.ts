import axios from 'axios';

export interface QueryTaskParmas {
  pageIndex: number;
  pageSize: number;
  [key: string]: any;
}

export function queryEmployeeList(params: QueryTaskParmas) {
  return axios.post('/api/employee/getEmployee', params);
}
export function deleteEmployee(id: string) {
  return axios.delete(`/api/employee/delete?id=${id}`);
}
