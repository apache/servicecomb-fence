<template>
  <tiny-grid ref="listRef" resizable seq-serial :data="state.traceData" >
    <template #toolbar>
      <tiny-grid-toolbar > <span>{{listTypes === ListType.TYPE_LOGS ?'日志': '调用链'}}列表</span></tiny-grid-toolbar> 
    </template>
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column width="60"></tiny-grid-column>
    <tiny-grid-column type="expand" title="data" width="60">
      <template #default="data">
        <tiny-grid v-if="listTypes === ListType.TYPE_LIST" :data="data.row.data">
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
        <div v-else>
            <div v-for="(item, index) in data.row.data" :key="index" class="logs-list">{{ item }}</div>
        </div>
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
import { reactive, defineProps, computed,ref } from 'vue';
import { Grid as TinyGrid, GridColumn as TinyGridColumn, GridToolbar as TinyGridToolbar } from '@opentiny/vue'
import { timesHandle } from '@/utils/time';
import { ListType } from '@/types/roleType';

const props = defineProps({
    traceData: {
      type: Array,
      default() {
        return [];
      },
    },
    listTypes: {
      type: String,
      default() {
        return ListType.TYPE_LIST;
      },
    },
  });
const listRef=ref()
const state = reactive({
  traceData:computed(() => props.traceData),
})

const clearExpand = () => {
  listRef.value.clearRowExpand()
}
defineExpose({clearExpand})
</script>

<style scoped>
.list-operation {
  color: #526ecc;
}

.list-operation:hover {
  cursor: pointer;
}
.logs-list{
  margin-bottom: 10px;
}
</style>
