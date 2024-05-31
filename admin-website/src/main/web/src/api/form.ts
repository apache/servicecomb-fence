import axios from 'axios';

export interface PersonalModel {
  name: string;
  sex: string;
  phone: string;
  birthDay: string;
  country: string;
  email: string;
  textarea: string;
}
export interface CompanyInfoModel {
  phone: string;
  email: string;
  textarea: string;
  sw: boolean;
  select: string;
  address: string;
}

export type UnitStepModel = PersonalModel & CompanyInfoModel;

// 获取base表单的初始数据选项
export function getBaseData() {
  return axios.get('/api/base/getdata');
}

// 表单的数据提交&&校验
export function submitStepForm(data: UnitStepModel) {
  return axios.post('/api/channel-form/submit', { data });
}

// 获取step表单的初始数据选项
export function getStepData() {
  return axios.get('/api/step/getdata');
}
