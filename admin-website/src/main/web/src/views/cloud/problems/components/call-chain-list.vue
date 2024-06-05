<template>
  <tiny-grid resizable seq-serial :data="state.traceData" @toolbar-button-click="toolbarButtonClickEvent">
    <template #toolbar>
      <tiny-grid-toolbar :buttons="state.toolbarButtons"> </tiny-grid-toolbar>
    </template>
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column width="60"></tiny-grid-column>
    <tiny-grid-column type="expand" title="data" width="60">
      <template #default="data">
        <tiny-grid :data="data.row.data">
          <tiny-grid-column field="name" title="name" show-overflow></tiny-grid-column>
          <tiny-grid-column field="duration" title="duration"></tiny-grid-column>
          <tiny-grid-column field="traceId" title="http.status_code">
            <template #default="data">
              <div>
                {{ data.row.tags['http.status_code'] }}
              </div>
            </template>
          </tiny-grid-column>
          <tiny-grid-column field="timestamp" title="timestamp">
            <template #default="data">
              <div>
                {{ timesHandle(data.row.timestamp/1000) }}
              </div>
            </template>
          </tiny-grid-column>
          <tiny-grid-column field="http.route" title="http.route">
            <template #default="data">
              <div>
                {{ data.row.tags['http.route']  }}
              </div>
            </template>
          </tiny-grid-column>
        </tiny-grid>
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="application" title="application"></tiny-grid-column>
    <tiny-grid-column field="instanceId" title="instanceId"></tiny-grid-column>
    <tiny-grid-column field="localhost" title="localhost"></tiny-grid-column>
    <tiny-grid-column field="serviceName" title="serviceName"></tiny-grid-column>
    <tiny-grid-column title="操作" width="150">
      <template #default>
        <div>
          <span class="list-operation">查看日志</span>&nbsp;|&nbsp;<span class="list-operation">查看Metrics</span>
        </div>
      </template>
    </tiny-grid-column>
  </tiny-grid>
</template>

<script lang="ts" setup>
import { reactive, defineProps, computed } from 'vue';
import { Grid as TinyGrid, GridColumn as TinyGridColumn, GridToolbar as TinyGridToolbar } from '@opentiny/vue'
import { timesHandle } from '@/utils/time';

const props = defineProps({
    traceData: {
      type: Array,
      default() {
        return [];
      },
    },
  });

const state = reactive({
  traceData:computed(() => props.traceData) ,
  toolbarButtons: [
    {
      code: 'clearRowExpand',
      name: '手动清空展开行状态'
    }
  ],
})

const toolbarButtonClickEvent = ({ code, $grid }:any) => {
  
  switch (code) {
    case 'clearRowExpand': {
      $grid.clearRowExpand()
      break
    }
    default: break;
  }
}
</script>

<style scoped>
.list-operation {
  color: #526ecc;
}

.list-operation:hover {
  cursor: pointer;
}
</style>
