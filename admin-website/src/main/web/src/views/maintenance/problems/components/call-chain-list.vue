<!-- eslint-disable vue/no-template-shadow -->
<template>
  <tiny-grid ref="listRef" resizable seq-serial :data="state.traceData">
    <template #toolbar>
      <tiny-grid-toolbar> <span>{{ listTypes === ListType.TYPE_LOGS ?
          $t('maintenance.problems.chain.logList') : $t('maintenance.problems.chain.callList') }}</span></tiny-grid-toolbar>
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
                {{ timesHandle(data.row.timestamp / 1000, false) }}
              </div>
            </template>
          </tiny-grid-column>
          <tiny-grid-column field="http.route" title="http.route">
            <template #default="data">
              <div>
                {{ data.row.tags['http.route'] }}
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
      <template #default="data">
        <div>
          <span class="list-operation" @click="downloadLog(data.row.serviceName, data.row.instanceId)">下载日志</span>
          &nbsp;|&nbsp;
          <span class="list-operation" @click="downloadMetrics(data.row.serviceName, data.row.instanceId)">下载指标</span>
        </div>
      </template>
    </tiny-grid-column>
  </tiny-grid>
</template>

<script lang="ts" setup>
import { reactive, defineProps, computed, ref } from 'vue';
import { Grid as TinyGrid, GridColumn as TinyGridColumn, GridToolbar as TinyGridToolbar } from '@opentiny/vue'
import { timesHandle } from '@/utils/time';
import { ListType } from '@/types/roleType';
import { getLogs, getMetrics } from '@/api/problems';


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
  timestamp: {
    type: String,
    default() {
      return '';
    },
  },
});
const listRef = ref()
const state = reactive({
  traceData: computed(() => props.traceData)
})

const clearExpand = () => {
  listRef.value.clearRowExpand()
}

const fileHandle = (data:any, type:string) => {
  const url = window.URL.createObjectURL(new Blob([data], {type: 'text/plain'}))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download',type)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
}

const downloadLog = (serviceName: string, instanceId: string) => {
  const params = {
    serviceName,
    timestamp: props.timestamp,
    instanceId,
  }
  getLogs(params).then((response) => {
    fileHandle(response,'Log.txt')
   })
}

const downloadMetrics = (serviceName: string, instanceId: string) => {

  const params = {
    serviceName,
    timestamp: props.timestamp,
    instanceId,
  }
  getMetrics(params).then((response) => { 
    fileHandle(response,'Metrics.txt')
  })
}

defineExpose({ clearExpand })
</script>

<style scoped>
.list-operation {
  color: #526ecc;
}

.list-operation:hover {
  cursor: pointer;
}

.logs-list {
  margin-bottom: 10px;
}
</style>