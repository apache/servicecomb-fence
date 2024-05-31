<template>
  <div class="container">
    <tiny-grid ref="grid" :fetch-data="fetchDataOption" :pager="pagerConfig">
      <tiny-grid-column
        field="id"
        :title="$t('home.roundtable.index')"
        width="100"
      ></tiny-grid-column>
      <tiny-grid-column
        field="space"
        :title="$t('home.roundtable.space')"
        width="200"
      ></tiny-grid-column>
      <tiny-grid-column
        field="pv"
        :title="$t('home.roundtable.pv')"
        width="220"
      ></tiny-grid-column>
      <tiny-grid-column
        field="play"
        :title="$t('home.roundtable.play')"
        width="200"
      ></tiny-grid-column>
      <tiny-grid-column
        field="page"
        :title="$t('home.roundtable.page')"
      ></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  import {
    Pager,
    Grid as TinyGrid,
    GridColumn as TinyGridColumn,
  } from '@opentiny/vue';

  const { t } = useI18n();

  const pagerConfig = reactive({
    component: Pager,
    attrs: {
      currentPage: 1,
      pageSize: 10,
      pageSizes: [5, 10],
      total: 0,
      layout: 'total, prev, pager, next, jumper, sizes',
    },
  });

  // 请求数据接口方法
  async function fetchData(
    params = {
      pageIndex: 1,
      pageSize: 10,
    }
  ) {
    let offset = (params.pageIndex - 1) * params.pageSize;
    const total = tableData.length;
    return {
      result: tableData.slice(offset, offset + params.pageSize),
      page: { total },
    };
  }

  const fetchDataOption = reactive({
    api: ({ page }: any) => {
      const { currentPage, pageSize } = page;

      return fetchData({
        pageIndex: currentPage,
        pageSize,
      });
    },
  });

  const tableData = [
    {
      id: '1',
      space: '4G',
      pv: '1767(97.77%)',
      play: '0.44s',
      page: '2.7s',
    },
    {
      id: '2',
      space: '2G',
      pv: '22(1.77%)',
      play: '0.43s',
      page: '1.1s',
    },
    {
      id: '3',
      space: t('home.round.unknow'),
      pv: '32(1.77%)',
      play: '0.44s',
      page: '1.7s',
    },
    {
      id: '4',
      space: t('home.round.unknow'),
      pv: '32(1.77%)',
      play: '0.44s',
      page: '1.7s',
    },
    {
      id: '5',
      space: '3G',
      pv: '16(0.88%)',
      play: '0.66s',
      page: '3.12s',
    },
    {
      id: '6',
      space: '5G',
      pv: '1765(97.35%)',
      play: '0.44s',
      page: '1.7s',
    },
    {
      id: '7',
      space: '2G',
      pv: '32(1.77%)',
      play: '0.65s',
      page: '2.92s',
    },
  ];
</script>

<style scoped lang="less">
  .container {
    width: inherit;
  }
</style>
