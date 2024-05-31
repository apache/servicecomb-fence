<template>
  <div class="falls">
    <img src="@/assets/images/map-background2.png" class="image" />
    <h3>{{ $t('home.falls.line') }}</h3>
    <div id="flow" ref="echartsDom"></div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, watch, inject, ref, nextTick } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLocale from '@/hooks/locale';

  const { t } = useI18n();
  const { currentLocale } = useLocale();
  let echarts = inject<any>('echarts');
  const echartsDom = ref();

  const list = [
    {
      label: 'Dns',
      value: 'Dns',
    },
    {
      label: t('home.falls.tcp'),
      value: 'TCP',
    },
    {
      label: t('home.falls.ssl'),
      value: 'SSL',
    },
    {
      label: 'Dns',
      value: 'Dns',
    },
    {
      label: t('home.falls.tcp'),
      value: 'TCP',
    },
    {
      label: t('home.falls.ssl'),
      value: 'SSL',
    },
    {
      label: 'Dns',
      value: 'Dns',
    },
    {
      label: t('home.falls.tcp'),
      value: 'TCP',
    },
    {
      label: t('home.falls.ssl'),
      value: 'SSL',
    },
    {
      label: 'Dns',
      value: 'Dns',
    },
    {
      label: t('home.falls.tcp'),
      value: 'TCP',
    },
    {
      label: t('home.falls.ssl'),
      value: 'SSL',
    },
  ];

  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter(params: any) {
        let tar;
        if (params[1].value !== '-') {
          // eslint-disable-next-line prefer-destructuring
          tar = params[1];
        } else {
          // eslint-disable-next-line prefer-destructuring
          tar = params[0];
        }
        // eslint-disable-next-line prefer-template
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: {
      type: 'category',
      axisLabel: {
        formatter(value: any, index: any) {
          return (
            // eslint-disable-next-line prefer-template
            list[index]?.label + '  ' + list[index]?.value + '  ' + value + 's'
          );
        },
        margin: 20,
      },
    },
    series: [
      {
        name: 'Placeholder',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent',
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent',
          },
        },
        data: [0, 900, 405, 250, 136, 236, 651, 169, 156, 195, 192],
      },
      {
        name: 'Income',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          color: '#4e85f4',
          barBorderRadius: [2, 2, 2, 2],
        },
        label: {
          show: false,
        },
        data: [500, '-', 593, '-', '-', 135, 178, 286, '-', '-', '-'],
      },
      {
        name: 'Expenses',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          color: '#5f45ff',
          barBorderRadius: [5, 5, 5, 5],
        },
        label: {
          show: false,
        },
        data: ['-', '-', '-', 408, 154, '-', '-', '-', 119, 361, '-'],
      },
      {
        name: 'test',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          color: '#e2b525 ',
          barBorderRadius: [5, 5, 5, 5],
        },
        label: {
          show: false,
        },
        data: ['-', 99, '-', '-', '-', '-', '-', '-', '-', '-', 32],
      },
    ],
  };

  onMounted(() => {
    const chartDom = echartsDom.value;
    const myChart = echarts.init(chartDom as any);
    option && myChart.setOption(option);
    window.addEventListener('resize', () => {
      myChart.resize();
    });
    nextTick(() => {
      myChart.resize()
    });
  });

  watch(currentLocale, (newValue, oldValue) => {
    const chartDom = echartsDom.value;
    const myChart = echarts.init(chartDom as any);
    myChart.setOption(option);
  });
</script>

<style scoped lang="less">
  .falls {
    width: 100%;
    height: 406px;
    margin-top: 2%;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 3px 10px 0 rgb(64 98 225 / 20%);
  }

  #flow {
    width: 100%;
    height: inherit;
  }

  .image {
    float: left;
    width: 25px;
    margin-top: 0.5%;
    margin-left: 0.5%;
    border-radius: 4px;
    opacity: 0.6;
  }

  h3 {
    float: left;
    width: 200px;
    margin-top: 0.5%;
    margin-left: 0.5%;
    color: #524343;
    font-weight: 700;
    font-size: 18px;
  }
</style>
