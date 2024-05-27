import { createApp } from 'vue';
import { HwcClient } from '@opentiny/hwc-client';
import globalComponents from '@/components';
import router from './router';
import store from './store';
import App from './App.vue';
import '@/assets/style/global.less';
import config from '../hwc-exports.json';
// eslint-disable-next-line import/extensions
import 'echarts4/map/js/china.js';

const app = createApp(App);

// 增加华为云相关配置
HwcClient.configure({
  ...config.hwcConfig,
  accessKey: '',
  secretKey: '',
});

app.use(router);
app.use(store);
app.use(globalComponents);

app.mount('#app');
