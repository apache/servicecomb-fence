import { createApp } from 'vue';
import * as echarts4 from 'echarts4';
import globalComponents from '@/components';
import router from './router';
import store from './store';
import i18n from './locale';
import directive from './directive';
import App from './App.vue';
import '@/api/interceptor';
import '@/assets/style/global.less';
import 'echarts4/map/js/china.js';
import chinaMap from './assets/chaina.json';

echarts4.registerMap('china', chinaMap);
const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n({ locale: 'zhCN' }));
app.use(globalComponents);
app.use(directive);

app.mount('#app');
