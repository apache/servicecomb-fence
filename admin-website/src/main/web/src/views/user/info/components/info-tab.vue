<template>
  <div id="contain">
    <tiny-tabs v-model="activeName">
      <tiny-tab-item :title="$t('userInfo.tab.one')" name="1">
        <infocard></infocard>
        <infotable :table-data="state.tableData"></infotable>
      </tiny-tab-item>
      <tiny-tab-item :title="$t('userInfo.tab.two')" name="2">
        <infoTasksTip></infoTasksTip>
        <div class="chartLength">
          <infochart :chart-data="state.chartData"></infochart>
        </div>
      </tiny-tab-item>
    </tiny-tabs>
  </div>
  <div class="contentFilter">
    <div class="left" @click="changeSort">
      {{ $t('userInfo.filter.sort') }}
      <ChevronDown></ChevronDown>
    </div>
    <div class="right" @click="changeFilter">
      <img src="@/assets/images/filter.png" />
    </div>
  </div>
  <div v-show="Sort" class="sort">
    <li
      v-for="(item, index) in timeList"
      :key="index"
      :value="item.value"
      @click="changeTime(timeList[index].value)"
      >{{ $t(item.label) }}</li
    >
  </div>
  <div v-show="Filter" class="filter">
    <infofilter ref="filterInfo" :active-name="activeName"></infofilter>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, onMounted, watch } from 'vue';
  import {
    Tabs as TinyTabs,
    TabItem as TinyTabItem,
    Loading,
  } from '@opentiny/vue';
  import { IconChevronDown } from '@opentiny/vue-icon';
  import { useUserStore } from '@/store';
  import { getUserData } from '@/api/user';
  import infofilter from './info-filter.vue';
  import infocard from './info-card.vue';
  import infotable from './info-table.vue';
  import infochart from './info-chart.vue';
  import infoTasksTip from './info-tasksTip.vue';

  // 加载效果
  const state = reactive<{
    loading: any;
    chartData: any;
    tableData: any;
  }>({
    loading: null,
    chartData: [] as any,
    tableData: [] as any,
  });

  // 变量设置
  const userStore = useUserStore();
  const ChevronDown = IconChevronDown();
  const activeName = ref('1');
  const Filter = ref(false);
  const Sort = ref(false);
  const timeList = [
    { label: 'userInfo.end.positiveOrder', value: 1 },
    { label: 'userInfo.end.reverseOrder', value: 2 },
    { label: 'userInfo.start.positiveOrder', value: 3 },
    { label: 'userInfo.start.reverseOrder', value: 4 },
  ];
  const filterInfo = ref();

  // 请求数据接口方法
  const fetchData = async () => {
    userStore.setInfo({ reset: false, submit: false });
    state.loading = Loading.service({
      text: 'loading...',
      target: document.getElementById('contain'),
      background: 'rgba(0, 0, 0, 0.7)',
    });
    try {
      const { data } = await getUserData(userStore.$state as any);
      state.chartData = data.chartData;
      state.tableData = data.tableData;
    } finally {
      state.loading.close();
    }
  };

  // 初始化请求数据
  onMounted(() => {
    fetchData();
  });

  // 筛选函数
  const changeTime = (value: number) => {
    userStore.setInfo({ sort: value });
    fetchData();
  };
  const changeFilter = () => {
    Sort.value = false;
    Filter.value = !Filter.value;
  };

  const changeSort = () => {
    Filter.value = false;
    Sort.value = !Sort.value;
  };

  watch(userStore.$state, (newValue, oldValue) => {
    if (newValue.reset || newValue.submit) {
      fetchData();
      Filter.value = false;
    }
  });

  watch(activeName, () => {
    filterInfo.value.reset();
  });
</script>

<style scoped lang="less">
  #contain {
    height: 100%;
    padding: 15px;
    overflow: hidden;
  }

  .contentFilter {
    position: absolute;
    top: 10px;
    right: 24px;
    z-index: 99;
    display: flex;
    height: 30px;
    cursor: pointer;
  }

  .filter {
    z-index: 99;
  }

  .contentFilter {
    .left {
      width: 122px;
      height: 34px;
      font-size: 14px;
      line-height: 32px;
      text-align: center;
      background: #eff1f7;
      border-radius: 17px;
    }

    .right {
      width: 60px;
      height: 34px;
      margin: 0 15px;
      line-height: 34px;
      text-align: center;
      background: #eff1f7;
      border-radius: 17px;
    }

    img {
      width: 14px;
      height: 14px;
    }
  }

  .sort {
    position: absolute;
    top: 44px;
    right: 100px;
    z-index: 99;
    width: 150px;
    margin-top: 10px;
    margin-left: -7px;
    color: #606266;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);

    li {
      position: relative;
      padding: 0 12px;
      color: #333;
      font-size: 14px;
      line-height: 36px;
      text-align: center;
      list-style-type: none;
      background-color: #fff;
      border-radius: 6px;
      cursor: pointer;
    }

    li:hover {
      color: #2f5bea;
      background-color: #f5f6f7;
    }
  }

  .filter {
    position: absolute;
    top: 55px;
    right: 1%;
    z-index: 99;
    width: 522px;
    padding: 30px;
    color: #606266;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-shadow: 0 0 2px 2px var(--ti-common-color-bg-normal);

    div {
      padding-top: 3px;
    }
  }
</style>
