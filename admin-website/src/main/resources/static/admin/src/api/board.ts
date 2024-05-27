import axios from 'axios';

// 获取select的option
export function getUserData() {
  return axios.get('/api/user/getdata');
}

export function getUserPractic() {
  return axios.get('/api/user/getrpractic');
}

export function getUserTrain() {
  return axios.get('/api/user/getrtrain');
}

// 切换数据源
export function getUserChange(data: string) {
  return axios.post('/api/user/getselect', data as any);
}
