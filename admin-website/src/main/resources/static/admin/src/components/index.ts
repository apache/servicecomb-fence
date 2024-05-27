import { App } from 'vue';
import Breadcrumb from './breadcrumb/index.vue';

export default {
  install(Vue: App) {
    Vue.component('Breadcrumb', Breadcrumb);
  },
};
