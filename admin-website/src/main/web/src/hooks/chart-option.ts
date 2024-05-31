import { computed } from 'vue';
import { EChartsOption } from 'echarts';
import { useAppStore } from '@/store';

interface optionsFn {
  (isDark: boolean): any;
}

export default function useChartOption(sourceOption: optionsFn) {
  const appStore = useAppStore();
  const isDark = computed(() => {
    return appStore.theme === 'dark';
  });

  const chartOption = computed<EChartsOption>(() => {
    return sourceOption(isDark.value);
  });
  return {
    chartOption,
  };
}
