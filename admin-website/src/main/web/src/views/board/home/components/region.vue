<template>
  <div class="region">
    <div>
      <div class="region-title">
        <img src="@/assets/images/map-background3.png" class="image" />
        <h3>{{ $t('home.region.title') }}</h3>
      </div>
      <div id="earth" ref="echartsDom"></div>
    </div>
    <div class="region-from">
      <RegionTable></RegionTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, inject, ref, nextTick } from 'vue';
  import RegionTable from './regiontable.vue';

  const data = [
    { name: '北京', value: 350000 },
    { name: '天津', value: 120000 },
    { name: '上海', value: 300000 },
    { name: '重庆', value: 92000 },
    { name: '河北', value: 25000 },
    { name: '河南', value: 20000 },
    { name: '云南', value: 500 },
    { name: '辽宁', value: 3050 },
    { name: '黑龙江', value: 80000 },
    { name: '湖南', value: 2000 },
    { name: '安徽', value: 24580 },
    { name: '山东', value: 40629 },
    { name: '新疆', value: 36981 },
    { name: '江苏', value: 13569 },
    { name: '浙江', value: 24956 },
    { name: '江西', value: 15194 },
    { name: '湖北', value: 41398 },
    { name: '广西', value: 41150 },
    { name: '甘肃', value: 17630 },
    { name: '山西', value: 27370 },
    { name: '内蒙古', value: 27370 },
    { name: '陕西', value: 97208 },
    { name: '吉林', value: 88290 },
    { name: '福建', value: 19978 },
    { name: '贵州', value: 94485 },
    { name: '广东', value: 89426 },
    { name: '青海', value: 35484 },
    { name: '西藏', value: 97413 },
    { name: '四川', value: 54161 },
    { name: '宁夏', value: 56515 },
    { name: '海南', value: 54871 },
    { name: '台湾', value: 48544 },
    { name: '香港', value: 49474 },
    { name: '澳门', value: 34594 },
  ];

  let echarts = inject<any>('echarts');
  const echartsDom = ref();
  let options = {
    tooltip: {
      trigger: 'item',
    },
    visualMap: {
      show: true,
      top: '-5px',
      x: 'left',
      y: 'bottom',
      realtime: false,
      splitList: [
        { start: 5000, end: 500000 },
        { start: 4000, end: 5000 },
        { start: 3000, end: 4000 },
        { start: 2000, end: 3000 },
        { start: 1000, end: 2000 },
        { start: 0, end: 1000 },
      ],
      color: ['#9feaa5', '#5475f5', '#85daef', '#74e2ca', '#e6ac53', '#9fb5ea'],
    },

    series: [
      {
        name: 'china',
        type: 'map',
        mapType: 'china',
        roam: false,
        zoom: 1.2,
        top: '30px',
        itemStyle: {
          normal: {
            areaColor: '#000',
            borderColor: 'skyblue',
            borderWidth: 1,
            shadowColor: '#ccc',
            shadowBlur: 30,
            opacity: 1,
          },
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 5,
            },
          },
        },
        data,
      },
    ],
  };

  onMounted(() => {
    const chartDom = echartsDom.value;
    const myChart = echarts.init(chartDom as any);
    window.addEventListener('resize', () => {
      myChart.resize();
    });
    options && myChart.setOption(options);
    nextTick(() => {
      myChart.resize()
    });
  });
</script>

<style scoped lang="less">
  .region {
    display: flex;
    justify-content: space-between;
    margin-top: 2%;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 3px 10px 0 rgb(64 98 225 / 20%);

    .region-title {
      display: flex;
    }

    h3 {
      width: 300px;
      margin-top: 1.5%;
      margin-left: 10px;
      color: #524343;
      font-weight: 700;
      font-size: 18px;
    }
  }

  #earth {
    width: 32vw;
    height: 358px;
    margin-left: 15%;
  }

  .image {
    width: 25px;
    height: 25px;
    margin-top: 1.5%;
    margin-left: 1.5%;
    background: tomato;
    border-radius: 4px;
    opacity: 0.6;
  }

  .region-from {
    width: 46vw;
    margin-top: 2%;
    margin-left: 5%;
  }
</style>
