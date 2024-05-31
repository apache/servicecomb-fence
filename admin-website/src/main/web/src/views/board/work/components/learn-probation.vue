<template>
  <tiny-layout>
    <tiny-row :flex="true" justify="center" class="margin-bottom">
      <tiny-col :span="3">
        <div class="col">
          <div>
            <span class="font-pass">6</span>
            <span>&nbsp;/ {{ $t('work.index.Person') }}</span>
          </div>
          <span>{{ $t('work.index.unpark') }}</span>
        </div>
      </tiny-col>
      <div class="divider"></div>
      <tiny-col :span="3">
        <div class="col">
          <div>
            <span class="font-pass">186</span>
            <span>&nbsp;/ {{ $t('work.index.Person') }}</span>
          </div>
          <span>{{ $t('work.index.entered') }}</span>
        </div>
      </tiny-col>
      <div class="divider"></div>
      <tiny-col :span="3">
        <div class="col">
          <div>
            <span class="font-pass">324</span>
            <span>&nbsp;/ {{ $t('work.index.Person') }}</span>
          </div>
          <span>{{ $t('work.index.approved') }}</span>
        </div>
      </tiny-col>
      <div class="divider"></div>
      <tiny-col :span="3">
        <div class="col">
          <div>
            <span class="font-pass">736</span>
            <span>&nbsp;/ {{ $t('work.index.Person') }}</span>
          </div>
          <span>{{ $t('work.index.put') }}</span>
        </div>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script lang="ts" setup>
  import {
    Layout as TinyLayout,
    Row as TinyRow,
    Col as TinyCol,
  } from '@opentiny/vue';
</script>

<style scoped lang="less">
  .margin-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 98.5%;
    height: 150px;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  }

  .margin-bottom:hover {
    box-shadow: 0 3px 10px 0 rgb(64 98 225 / 45%);
  }

  .col {
    text-align: center;
  }

  .col > span {
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    text-align: center;
  }

  .col > span:last-child {
    color: #4e5969;
    font-weight: normal;
    font-size: 18px;
    line-height: 14px;
  }

  .divider {
    width: 1px;
    height: 41px;
    margin: 0 20px;
    background: #7b7e84;
    opacity: 0.3;
  }

  .font {
    color: #575d6c;
    font-weight: 600;
    font-size: 30px;
    font-family: PingFang SC, PingFang SC-PingFang SC;
    line-height: 36px;
    text-align: left;
  }

  .font-pass {
    .font();
  }

  .font-fail {
    .font();

    color: #2f5bea;
  }

  @media (max-width: @screen-md) {
    .font-pass {
      font-size: 24px;
    }

    .col > span:last-child {
      font-size: 10px;
    }
  }
</style>
