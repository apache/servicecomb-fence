import { defineStore } from 'pinia';
import {
  login as userLogin,
  LoginData,
} from '@/api/user';
import { UserState} from './types';

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userId: '10000',
    username: 'admin',
    department: 'Tiny-Vue-Pro',
    employeeType: 'social recruitment',
    job: 'Front end',
    probationStart: '2021-04-19',
    probationEnd: '2021-10-15',
    probationDuration: '180',
    protocolStart: '2021-04-19',
    protocolEnd: '2024-04-19',
    address: '',
    status: '',
    role: '',
    sort: 1,
    startTime: '',
    endTime: '',
    filterStatus: [],
    filterType: [],
    submit: false,
    reset: false,
  }),

  getters: {
    userInfo(state: UserState): UserState {
      return state;
    },
  },

  actions: {
    switchRoles() {
      return new Promise((resolve) => {
        this.role = this.role === 'user' ? 'admin' : 'user';
        resolve(this.role);
      });
    },
    // Set user's information
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },

    // Reset user's information
    resetInfo() {
      this.$reset();
    },

    // Reset filter information
    resetFilterInfo() {
      this.startTime = '';
      this.endTime = '';
      this.filterStatus = [];
      this.filterType = [];
    },

    // Login
    async login(loginForm: LoginData) {
      // eslint-disable-next-line no-useless-catch
      try {
        const res = await userLogin(loginForm);
        const { token, userInfo } = res.data;
      
        this.setInfo(userInfo);
      } catch (err) {
        throw err;
      }
    },

  

    // Logout
    async logout() {
      this.resetInfo();
    },
  },
});

export default useUserStore;
