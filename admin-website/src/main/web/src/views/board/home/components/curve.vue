<template>
  <div class="curve">
    <img src="@/assets/images/map-background3.png" class="image" />
    <h3>{{ $t('home.curve.trend') }}</h3>
    <div id="line" ref="echartsDom"></div>
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

  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    legend: {
      data: [t('home.main.down'), t('home.curve.play'), t('home.curve.page')],
      top: '10',
    },
    dataZoom: [
      {
        type: 'inside',
        start: 10,
      },
      {
        type: 'slider',
      },
    ],
    xAxis: [
      {
        type: 'category',
        data: new Array(20).fill('16:00'),
        axisPointer: {
          type: 'shadow',
        },
        axisLabel: {
          // eslint-disable-line
          formatter(value: any, index: any) {
            if (index % 2 !== 0) {
              return value;
            }
            return value;
          },
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 50,
        interval: 5,
        axisLabel: {
          formatter: '{value} s',
        },
      },
      {
        type: 'value',
        min: 0,
        max: 30,
        interval: 5,
        axisLabel: {
          formatter: '{value}',
        },
      },
    ],
    series: [
      {
        name: t('home.main.down'),
        type: 'bar',
        barWidth: 12,
        itemStyle: {
          color: '#4e85f4',
          barBorderRadius: [5, 5, 0, 0],
        },
        tooltip: {
          valueFormatter(value: any) {
            return `${value} s`;
          },
        },
        data: [
          22, 4.9, 7.0, 23.2, 25.6, 16.7, 15.6, 22.2, 12.6, 22.0, 6.4, 33.3, 22,
          4.9, 7.0, 23.2, 25.6, 16.7, 15.6, 22.2, 12.6, 22.0, 6.4, 33.3, 22,
          4.9, 7.0, 23.2, 25.6, 16.7, 15.6, 22.2, 12.6, 22.0, 6.4, 33.3,
        ],
      },
      {
        name: t('home.curve.play'),
        type: 'line',
        smooth: true,
        showSymbol: false,
        yAxisIndex: 1,
        lineStyle: {
          normal: {
            color: '#5f45ff',
          },
        },
        // 区域填充样式
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(163, 156, 211,0.2)',
              },
              {
                offset: 1,
                color: 'rgba(58,132,255, 0)',
              },
            ],
            global: false,
          },
        },
        tooltip: {
          valueFormatter(value: any) {
            return value;
          },
        },
        data: [
          22, 4.9, 7.0, 23.2, 25.6, 16.7, 15.6, 22.2, 12.6, 22.0, 6.4, 3.3, 22,
          4.9, 7.0, 23.2, 25.6, 16.7, 15.6, 22.2, 12.6, 22.0, 6.4, 3.3, 22, 4.9,
          7.0, 23.2, 25.6, 16.7, 15.6, 22.2, 12.6, 22.0, 6.4, 33.3,
        ],
      },
      {
        name: t('home.curve.page'),
        type: 'line',
        smooth: true,
        showSymbol: false,
        yAxisIndex: 1,
        lineStyle: {
          normal: {
            color: '#ff9e03',
          },
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(226, 210, 66,0.2)',
              },
              {
                offset: 1,
                color: 'rgba(58,132,255, 0)',
              },
            ],
            global: false,
          },
        },
        tooltip: {
          valueFormatter(value: any) {
            return value;
          },
        },
        data: [
          22, 9, 17.0, 27.2, 15.6, 26.7, 25.6, 22.2, 12.6, 22.0, 26.4, 13.3, 22,
          24.9, 12.0, 23.2, 25.6, 26.7, 25.6, 22.2, 22.6, 22.0, 26.4, 23.3, 22,
          24, 27.0, 13.2, 15.6, 16.7, 11.6, 22.2, 22.6, 32.0, 16.4, 13.3,
        ],
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
    if (newValue === 'zhCN') {
      option.legend.data = ['采样PV', '首屏可见', '页面Onload'];
      option.series[0].name = '采样PV';
      option.series[1].name = '首屏可见';
      option.series[2].name = '页面Onload';
    } else {
      option.legend.data = [
        'Sampling PV',
        'Visible on the first screen',
        'Page Onload',
      ];
      option.series[0].name = 'Sampling PV';
      option.series[1].name = 'Visible on the first screen';
      option.series[2].name = 'Page Onload';
    }
    myChart.setOption(option);
  });
</script>

<style scoped lang="less">
  .curve {
    width: 100%;
    height: 491px;
    margin-top: 2%;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 3px 10px 0 rgb(64 98 225 / 20%);
  }

  #line {
    width: 100%;
    height: inherit;
  }

  .image {
    float: left;
    width: 25px;
    margin-top: 0.5%;
    margin-left: 0.5%;
    background-color: #a125ff;
    border-radius: 4px;
    opacity: 0.6;
  }

  h3 {
    float: left;
    width: 200px;
    margin-top: 0.4%;
    margin-left: 0.5%;
    color: #524343;
    font-weight: 700;
    font-size: 18px;
  }
</style>
