<template>
  <div class="main">
    <div class="main-title">
      <span></span>
      <p>调用链展示</p>
    </div>
    <div class="main-content">
      <div class="main-content-form">
        <tiny-form label-width="100px" class="demo-form">
          <tiny-row>
            <tiny-col :span="6">
              <tiny-form-item label="trace-id：" >
                <tiny-input placeholder="请输入trace-id"></tiny-input>
              </tiny-form-item>
            </tiny-col>
            <tiny-col :span="6">
              <tiny-form-item label="时间：" >
                <tiny-input placeholder="请输入时间"></tiny-input>
              </tiny-form-item>
            </tiny-col>
          </tiny-row>
        </tiny-form>
      </div>
      <div class="main-content-search">
        <tiny-button
          type="primary"
          >搜索</tiny-button
        >
      </div>
     
    </div>
     <div class="main-list">
        <call-chain-list/>
      </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Button as TinyButton,
  Row as TinyRow,
  Col as TinyCol
} from '@opentiny/vue';
import callChainList from './call-chain-list.vue';
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
    max-width: 90%;
    height: 80px;
    background-color: saddlebrown;
  }
}
</style>
