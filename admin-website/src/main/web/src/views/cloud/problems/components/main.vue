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
           :model="state.filterOptions" 
           :validate-type="state.validType" 
           :rules="rules"
           label-width="100px" 
           class="demo-form">
          <tiny-row>
            <tiny-col :span="6">
              <tiny-form-item label="Trace-Id:" prop="traceId">
                <tiny-input v-model="state.filterOptions.traceId" clearable></tiny-input>
              </tiny-form-item>
            </tiny-col>
            <tiny-col :span="6">
              <tiny-form-item label="大概时间:" prop="startTime">
                <tiny-date-picker v-model="state.filterOptions.startTime" type="datetime"></tiny-date-picker>
              </tiny-form-item>
            </tiny-col>
          </tiny-row>
        </tiny-form>

      </div>
      <div class="main-content-search">
        <tiny-button type="primary" @click="searchCallChain">搜索</tiny-button>
      </div>
    </div>
    <div class="clear-expand">
      <tiny-button @click="clearExpand">手动清空展开行状态</tiny-button>
    </div>
    <div class="main-list">
      <call-chain-list ref="chainRef" :timestamp="state.timestamp" :trace-data="state.traceData" />
      <call-chain-list ref="logsRef" :timestamp="state.timestamp" :trace-data="state.listData" :list-types="ListType.TYPE_LOGS" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Button as TinyButton,
  Row as TinyRow,
  Col as TinyCol,
  DatePicker as TinyDatePicker,
} from '@opentiny/vue';
import { searchTrace, searchLog } from '@/api/problems';
import { ListType } from '@/types/roleType';
import { timesHandle } from '@/utils/time';
import callChainList from './call-chain-list.vue';

interface FilterType {
  startTime: string;
  traceId: string;
}
interface stateOptions {
  filterOptions: FilterType,
  traceData: any[],
  listData: any[],
  validType: string,
  timestamp:string
};
const rules = {
  traceId: [
    { required: true, message: '必填', trigger: 'blur' }],
  startTime:
    [{ required: true, message: '请选择时间' }]
}

const searchForm = ref()
const chainRef = ref()
const logsRef = ref()
const state: stateOptions = reactive({
  filterOptions: {
    startTime: '',
    traceId: '',
  },
  timestamp:'',
  traceData: [],
  listData: [],
  validType: 'text',
  rules: {
    traceId: [
      { required: true, message: '必填', trigger: 'blur' }],
    startTime:
      [{ required: true, message: '请选择时间' }]
  }
});

const searchCallChain = () => {
  searchForm.value.validate((valid: any) => {
    if (valid) {
      const date = new Date(state.filterOptions.startTime)
      state.timestamp = timesHandle(date,true);
      // 获取调用链列表
      searchTrace({
        timestamp: state.timestamp,
        traceId: state.filterOptions.traceId,
      }).then(response => {
        state.traceData = response as any
      });
    // 获取日志列表
      searchLog({
        timestamp: timesHandle(date,true),
        traceId: state.filterOptions.traceId,
      }).then(response => {
        state.listData = response as any
      });
    }
  })




};
const clearExpand = () => {

  chainRef.value.clearExpand()
  logsRef.value.clearExpand()
}
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
</style>
