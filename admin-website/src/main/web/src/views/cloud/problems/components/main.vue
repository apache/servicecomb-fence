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
                  type="datetime"
                ></tiny-date-picker>
              </tiny-form-item>
            </tiny-col>
          </tiny-row>
        </tiny-form>
        
      </div>
      <div class="main-content-search">
        <tiny-button
          type="primary"
          @click="searchCallChain"
          >搜索</tiny-button
        >
      </div>
     
    </div>
     <div class="main-list">
        <call-chain-list :trace-data="state.traceData"/>
      </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Button as TinyButton,
  Row as TinyRow,
  Col as TinyCol,
  DatePicker as TinyDatePicker,
} from '@opentiny/vue';
import { searchTrace } from '@/api/problems';
import { timesHandle } from '@/utils/time';


import callChainList from './call-chain-list.vue';
import mockstate from './mock.json'
 
  interface FilterType{
    startTime: string;
    traceId: string;
  }
  interface stateOptions {
    filterOptions: FilterType,
    traceData: any[];
  };

  const state :stateOptions = reactive({
    filterOptions : {
      startTime:'',
      traceId:'',
    },
    traceData: []
  });

  const searchCallChain = () => {
    const date = timesHandle(state.filterOptions.startTime)
    try {
        searchTrace({
        timestamp: date,
        traceId: state.filterOptions.traceId,
      }).then(response => {
                    state.traceData = response as any
                 });
    // eslint-disable-next-line no-empty
    } catch (err) {
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
