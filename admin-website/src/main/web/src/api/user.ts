import axios from 'axios';
import { UserInfo } from '@/store/modules/user/types';

export interface LoginData {
  grantType: string;
  username: string;
  password: string;
}

export interface LoginDataMail {
  mailname: string;
  mailpassword: string;
}

export interface LoginRes {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  idToken: string;
  expiresIn: integer;
  scope: string;
  additionalInformation: string;
}
export interface UserRes {
  chartData: [];
  tableData: [];
}
export interface UserData {
  sort?: number | undefined;
  startTime?: string;
  endTime?: string;
  filterStatus?: [];
  filterType?: [];
}

export function login(data: LoginData) {
  return axios.post<LoginRes>('/v1/token', data);
}
export function loginMail(data: LoginDataMail) {
  return axios.post<LoginRes>('/v1/token', data);
}

export function logout() {
  return axios.post<LoginRes>('/api/user/logout');
}

export function getUserInfo() {
  return axios.get<UserInfo>(`/api/user/userInfo`);
}

export function updateUserInfo(data: UserInfo) {
  return axios.put<UserInfo>(`/api/user/userInfo`, data);
}

export function getUserData(data?: UserData) {
  return axios.post<UserRes>('/api/user/data', data);
}

export function registerUser(data: LoginData) {
  return axios.post<UserInfo>('/api/user/register', data);
}
