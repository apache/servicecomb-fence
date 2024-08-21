import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Modal } from '@opentiny/vue';
import locale from '@opentiny/vue-locale';
import router from '@/router';
import { getToken, clearToken } from '@/utils/auth';

export interface HttpResponse<T = unknown> {
  errMsg: string;
  code: string | number;
  data: T;
}

const { VITE_API_BASE_URL } =
  import.meta.env || {};

if (VITE_API_BASE_URL) {
  axios.defaults.baseURL = VITE_API_BASE_URL;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${JSON.parse(token).id_token}`;
      config.headers['Authorization-TYPE'] = 'ID_TOKEN';
    }

    config.headers = { ...config.headers };

    return config;
  },
  (error) => {
    // do something
    return Promise.reject(error);
  }
);
// add response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    const res = response.data;
    if (response.status !== 200) {
        Modal.alert({
          message: `status code=${response.status}, trace id=${response.headers['x-b3-traceid']}`,
          status: 'error',
        });
      return Promise.reject(new Error('Error'));
    }
    return res;
  },
  (error) => {
    const { status, data } = error.response;
    if (status === 401) {
      clearToken();
      router.replace({ name: 'login' });
      Modal.message({
        message: `status code=${error.response.status}, trace id=${error.response.headers['x-b3-traceid']}`,
        status: info,
      });
    } else {
      Modal.alert({
        message: `status code=${error.response.status}, trace id=${error.response.headers['x-b3-traceid']}`,
        status: 'error',
      });
    }
    return Promise.reject(error);
  }
);
