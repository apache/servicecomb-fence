<template>
  <div class="main">
    <div class="main-title">
      <span></span>
      <p>调用链搜索</p>
    </div>
    <div class="main-content">
      <div class="main-content-form">
        <tiny-form
          ref="searchForm"
          label-width="100px"
          class="demo-form">
          <tiny-row>
            <tiny-col :span="6">
              <tiny-form-item label="Trace-Id:" >
                <tiny-input v-model="state.filterOptions.traceId"></tiny-input>
              </tiny-form-item>
            </tiny-col>
            <tiny-col :span="6">
              <tiny-form-item label="大概时间:" >
                <tiny-date-picker
                  v-model="state.filterOptions.startTime"
                ></tiny-date-picker>
              </tiny-form-item>
            </tiny-col>
          </tiny-row>
        </tiny-form>
      </div>
      <div class="main-content-search">
        <tiny-button
          type="primary" @click="handleSubmit"
          >搜索</tiny-button
        >
      </div>
     
    </div>
     <div class="main-list">
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
                      {{ timesHandle(data.row.timestamp) }}
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
      </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive,ref } from 'vue';

  import {
    Grid as TinyGrid, GridColumn as TinyGridColumn, GridToolbar as TinyGridToolbar,
    Form as TinyForm,
    FormItem as TinyFormItem,
    Input as TinyInput,
    Button as TinyButton,
    Row as TinyRow,
    Col as TinyCol,
    DatePicker as TinyDatePicker,
    Notify,
    Modal,
  } from '@opentiny/vue';

  import { searchTrace } from '@/api/problems';

  import useLoading from '@/hooks/loading';

  import callChainList from './call-chain-list.vue';

  interface FilterOptions {
    sector: string;
    position: Array<object>;
    hr: string;
    traceId: string;
    startTime: string;
    endTime: string;
  };

  const searchForm = ref();
  const { loading, setLoading } = useLoading();

    const toolbarButtonClickEvent = ({ code, $grid }) => {
      switch (code) {
        case 'clearRowExpand': {
          $grid.clearRowExpand()
          break
        }
        default: break;
      }
    }
    const timesHandle = (times:number) => {
      const date = new Date(times/1000)

      const year = date.getFullYear();
      const month = String(date.getMonth() +1)
      const day = String(date.getDate())
      const hours = String(date.getHours())
      const minutes = String(date.getMinutes())
      const seconds = String(date.getSeconds())

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }

  const state = reactive({
    filterOptions: {},
    traceData: [],
    toolbarButtons: [
      {
        code: 'clearRowExpand',
        name: '手动清空展开行状态'
      }
    ],
  });

  const handleSubmit = () => {
    setLoading(true);

    try {
        searchTrace({
        timestamp: state.filterOptions.startTime,
        traceId: state.filterOptions.traceId,
      }).then(response => {
                    state.traceData = response
                    console.log('', state.traceData);
                 }, error => {
                    console.log('错误', error.message)
                 });
    } catch (err) {
      Notify({
        type: 'error',
        title: 'search error',
        message: 'search error',
        position: 'top-right',
        duration: 2000,
        customClass: 'my-custom-cls',
      });
    } finally {
      setLoading(false);
    }
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
  &-list{
    width: 95%;
    height: 80px;
    background-color: saddlebrown;
  }
}
</style>
