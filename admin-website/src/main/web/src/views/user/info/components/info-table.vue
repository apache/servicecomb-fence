<template>
  <div class="table">
    <tiny-grid ref="expandGrid" :data="tableData" :auto-resize="true">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="expand" width="60">
        <template #default="data">
          <ul>
            <li>
              <span>{{ $t('userInfo.table.columnA') }}：</span>
              <span>{{ data.row.name }}</span>
            </li>
            <li>
              <span>{{ $t('userInfo.table.columnB') }}：</span>
              <span>{{ data.row.time }}</span>
            </li>
            <li>
              <span>{{ $t('userInfo.table.columnC') }}：</span>
              <span>{{ $t(`${data.row.type}`) }}</span>
            </li>
            <li>
              <span>{{ $t('userInfo.table.columnD') }}：</span>
              <span>{{ $t(`${data.row.status}`) }}</span>
            </li>
          </ul>
        </template>
      </tiny-grid-column>
      <tiny-grid-column
        field="name"
        :title="$t('userInfo.table.columnA')"
      ></tiny-grid-column>
      <tiny-grid-column
        field="time"
        :title="$t('userInfo.table.columnB')"
      ></tiny-grid-column>
      <tiny-grid-column field="type" :title="$t('userInfo.table.columnC')">
        <template #default="data">
          <span>{{ $t(`${data.row.type}`) }}</span>
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="status" :title="$t('userInfo.table.columnD')">
        <template #default="data">
          <span>{{ $t(`${data.row.status}`) }}</span>
        </template>
      </tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue';
  import {
    GridColumn as TinyGridColumn,
    Grid as TinyGrid,
  } from '@opentiny/vue';

  const props = defineProps({
    // eslint-disable-next-line vue/require-prop-types
    tableData: [] as any,
  });
</script>

<style scoped lang="less">
  .table {
    padding-bottom: 20px;
    background-color: #fff;
  }
</style>
