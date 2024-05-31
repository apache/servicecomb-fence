<template>
  <div>
    <tiny-layout>
      <tiny-row :flex="true" justify="left" class="margin-bottom">
        <tiny-col :span="2">
          <div class="col">
            {{ $t('menu.plan.department') }}
            <span>:</span>
            {{ $t('menu.plan.resource') }}
          </div>
        </tiny-col>
        <tiny-col :span="2">
          <div class="col">
            {{ $t('menu.plan.job') }}
            <span>:</span>
            All
          </div>
        </tiny-col>
      </tiny-row>
      <tiny-row :flex="true" justify="left" class="margin-bottom">
        <tiny-col :span="2">
          <div class="col">
            {{ $t('menu.plan.person') }}
            <span>:</span>
            All
          </div>
        </tiny-col>
        <tiny-col :span="2">
          <div class="col">
            {{ $t('menu.plan.attribute') }}
            <span>:</span>IT
          </div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
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
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .col > span {
    padding: 0 10px;
  }
</style>
