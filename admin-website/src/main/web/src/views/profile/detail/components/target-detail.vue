<template>
  <div>
    <tiny-layout>
      <tiny-row :flex="true" justify="left" class="margin-bottom">
        <tiny-col :span="9">
          <div class="col">
            {{ $t('menu.plan.develop') }}
            <span>:</span>
            {{ $t('menu.plan.yes') }}
          </div>
        </tiny-col>
      </tiny-row>
      <tiny-row :flex="true" justify="left" class="margin-bottom">
        <tiny-col :span="9">
          <div class="col">
            {{ $t('menu.plan.role') }}
            <span>:</span>
            {{ $t('menu.plan.mentor') }}
          </div>
        </tiny-col>
      </tiny-row>
      <tiny-row :flex="true" justify="left" class="margin-bottom">
        <tiny-col :span="9">
          <div class="col">
            {{ $t('menu.plan.condition') }}
            <span>:</span>
            {{ $t('menu.plan.approval') }}
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
