<template>
  <div class="main">
  <div class="main-title">
    <span></span>
    <p>实例列表查询</p>
  </div>
  <div class="main-content">
    <div class="main-content-form">
      <tiny-form
         ref="searchForm"
         :model="state.filterOptions"
         label-width="100px"
         class="demo-form">
        <tiny-row>
          <tiny-col :span="6">
            <tiny-form-item label="环境">
              <tiny-input v-model="state.filterOptions.environment" disabled></tiny-input>
            </tiny-form-item>
          </tiny-col>
          <tiny-col :span="6">
            <tiny-form-item label="应用">
              <tiny-input v-model="state.filterOptions.application" disabled></tiny-input>
            </tiny-form-item>
          </tiny-col>
          <tiny-col :span="6">
            <tiny-form-item label="服务名称">
              <div>
              <tiny-select v-model="state.filterOptions.serviceName"
              :options="state.filterOptions.serviceLists" @change="handleFindServiceInstances"></tiny-select></div>
              <div><tiny-icon-refres @click="handleRefreshService"></tiny-icon-refres></div>
            </tiny-form-item>
          </tiny-col>
        </tiny-row>
      </tiny-form>
    </div>
  </div>

  <div>
    <tiny-grid :data="state.instanceLists" border :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="serviceName" title="微服务名称"></tiny-grid-column>
      <tiny-grid-column field="version" title="版本号"></tiny-grid-column>
      <tiny-grid-column field="endpoints" title="协议列表"></tiny-grid-column>
      <tiny-grid-column field="instanceId" title="实例ID"></tiny-grid-column>
      <tiny-grid-column field="registryName" title="注册中心"></tiny-grid-column>
      <tiny-grid-column field="status" title="状态"></tiny-grid-column>
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
  </div>
  </div>
</template>

<script setup lang="ts">
import { Grid as TinyGrid,
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Button as TinyButton,
  Row as TinyRow,
  Col as TinyCol,
  GridColumn as TinyGridColumn,
  Select as TinySelect, Option as TinyOption} from '@opentiny/vue';
import { iconRefres } from '@opentiny/vue-icon';
import { reactive } from 'vue';
import { findServices, findServiceInstances, getLogs, getMetrics } from '@/api/problems';
import { timesHandle } from '@/utils/time';

const TinyIconRefres = iconRefres();

const state = reactive({
  filterOptions: {
    environment: '',
    application: '',
    serviceLists: [],
    serviceName: ''
  },
  instanceLists: []
});

const handleRefreshService = ()  => {
  findServices().then((response) => {
    let serviceLists = [];
    response.services.forEach(item => {
       let temp = {value: '', label: ''};
       temp.value = item;
       temp.label = item;
       serviceLists.push(temp);
    });
    state.filterOptions.serviceLists = serviceLists;
    state.filterOptions.application = response.application;
    state.filterOptions.environment = response.environment;
    if(Array.isArray(serviceLists) && serviceLists.length) {
      state.filterOptions.serviceName = serviceLists[0].value;
    }
  })
};

const handleFindServiceInstances = ()  => {
  if(!state.filterOptions.serviceName) {
    return;
  }
  findServiceInstances(state.filterOptions.serviceName).then((response) => {
    state.instanceLists = response.instances;
  })
};

const firstInit = async () => {
  let response = await findServices();
  const serviceLists = [];
  response.services.forEach(item => {
     let temp = {value: '', label: ''};
     temp.value = item;
     temp.label = item;
     serviceLists.push(temp);
  });
  state.filterOptions.serviceLists = serviceLists;
  state.filterOptions.application = response.application;
  state.filterOptions.environment = response.environment;
  if(Array.isArray(serviceLists) && serviceLists.length) {
    state.filterOptions.serviceName = serviceLists[0].value;
  };
  if(!state.filterOptions.serviceName) {
    return;
  }
  response = await findServiceInstances(state.filterOptions.serviceName);
  state.instanceLists = response.instances;
}

firstInit();

const fileHandle = (data:any, type:string) => {
  const url = window.URL.createObjectURL(new Blob([data], {type: 'text/plain'}))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download',type)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
};

const downloadLog = (serviceName: string, instanceId: string) => {
  const dateStr = timesHandle(new Date(Date.now()), false);
  const params = {
    serviceName,
    timestamp: dateStr,
    instanceId,
  }
  getLogs(params).then((response) => {
    fileHandle(response,'Log.txt')
   })
};

const downloadMetrics = (serviceName: string, instanceId: string) => {
  const dateStr = timesHandle(new Date(Date.now()), false);
  const params = {
    serviceName,
    timestamp: dateStr,
    instanceId,
  }
  getMetrics(params).then((response) => {
    fileHandle(response,'Metrics.txt')
  })
};

</script>

<style scoped lang="less"></style>

<style lang="less" scoped>
.main {
  &-title {
    span {
      display: inline-block;
      position: relative;
      border-width: 0px;
      left: 0px;
      top: 4px;
      width: 6px;
      height: 20px;
      background: inherit;
      background-color: rgba(37, 97, 239, 1);
      border: none;
      border-radius: 8px;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;
    }

    p {
      margin-left: 10px;
      display: inline-block;
      font-weight: 500;
      font-style: normal;
      font-size: 18px;
      color: rgba(51, 51, 51, 0.898039215686275);
    }
  }

  &-content {
    display: flex;
    width: 70%;

    &-search {
      margin-left: 20px;
      width: 100px;
    }

    &-form {
      flex: 1;
    }
  }

  &-list {
    width: 95%;
    height: 80px;
    background-color: saddlebrown;
  }
}

.list-operation {
  color: #526ecc;
}

.list-operation:hover {
  cursor: pointer;
}
</style>

