import { createI18n } from 'vue-i18n';
import locale from '@opentiny/vue-locale'; // tiny-vue的国际化
import en from './en-US';
import cn from './zh-CN';

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zhCN' },
  { label: 'English', value: 'enUS' },
];

const i18nmode = (option: any) => {
  option.legacy = false;
  return createI18n(option);
};

export default (i18n: any) =>
  locale.initI18n({
    globalInjection: true,
    i18n,
    createI18n: i18nmode,
    messages: {
      enUS: en,
      zhCN: cn,
    },
  });
