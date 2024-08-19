<template>
  <div class="round">
    <div>
      <img src="@/assets/images/map-background3.png" class="image" />
      <h3>{{ $t('home.round.title') }}</h3>
      <div id="circled" ref="echartsDom"></div>
    </div>
    <div class="round-from">
      <RoundTable></RoundTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, watch, inject, ref, nextTick } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLocale from '@/hooks/locale';
  import RoundTable from './roundtable.vue';

  const { t } = useI18n();
  const { currentLocale } = useLocale();
  let echarts = inject<any>('echarts');
  const echartsDom = ref();

  let option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      y: 'center',
      x: 'right',
    },
    series: [
      {
        type: 'pie',
        selectedMode: 'single',
        radius: ['60%', '80%'],
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        avoidLabelOverlap: true,
        label: {
          show: false,
          position: 'center',
        },
        width: '100%',
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 300, name: '5G' },
          { value: 1048, name: '4G' },
          { value: 735, name: 'unknow' },
          { value: 580, name: '3G' },
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
    myChart.setOption(option);
  });
</script>

<style scoped lang="less">
  .round {
    display: flex;
    justify-content: space-between;
    margin-top: 2%;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 3px 10px 0 rgb(64 98 225 / 20%);
  }

  #circled {
    width: 32vw !important;
    height: 350px;
    margin-left: 2.3%;
  }

  .image {
    float: left;
    width: 25px;
    margin-top: 1.5%;
    margin-left: 1.5%;
    border-radius: 4px;
    opacity: 0.6;
  }

  .round-from {
    width: 46vw;
    margin-top: 2%;
    margin-left: 5%;
  }

  h3 {
    float: left;
    width: 300px;
    margin-top: 1.4%;
    margin-left: 1.5%;
    color: #524343;
    font-weight: 700;
    font-size: 18px;
  }
</style>
