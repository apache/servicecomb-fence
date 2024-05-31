<template>
  <div>
    <tiny-grid :data="tableData" auto-resize>
      <tiny-grid-column type="index"></tiny-grid-column>
      <tiny-grid-column
        field="version"
        :title="$t('menu.plan.version')"
      ></tiny-grid-column>
      <tiny-grid-column
        field="operation"
        :title="$t('menu.plan.operation')"
      ></tiny-grid-column>
      <tiny-grid-column
        field="updated"
        :title="$t('menu.plan.updated')"
      ></tiny-grid-column>
      <tiny-grid-column
        field="time"
        :title="$t('menu.plan.time')"
        show-overflow
      ></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue';
  import {
    Grid as TinyGrid,
    GridColumn as TinyGridColumn,
  } from '@opentiny/vue';

  // 父组件传值
  const props = defineProps({
    // eslint-disable-next-line vue/require-prop-types
    tableData: [],
  });
</script>
