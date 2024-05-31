<template>
  <div class="container-step">
    <Breadcrumb :items="['menu.form', 'menu.form.step']" />
    <div class="general-card">
      <div class="general-top">
        <headtop></headtop>
      </div>
      <div class="general-contain">
        <div>{{ $t('stepForm.coaching.process') }}</div>
        <div>
          <tiny-time-line
            :data="[
              { name: t('stepForm.start.coaching') },
              { name: t('stepForm.immediate.supervisor') },
              { name: t('stepForm.overall.goals') },
              { name: t('stepForm.overall.summary') },
              { name: t('stepForm.overall.end') },
            ]"
            :active="normalActive"
            type="normal"
          ></tiny-time-line>
        </div>
      </div>
      <div class="general-foot">
        <collapsefrom ref="collapseRef"></collapsefrom>
        <div class="general-btn">
          <tiny-button
            v-if="normalActive !== 4"
            type="primary"
            native-type="submit"
            @click="handleSubmit"
            >{{ $t('stepForm.button.submit') }}</tiny-button
          >
          <tiny-button v-if="normalActive !== 4" @click="handleFormReset">{{
            $t('stepForm.button.cancel')
          }}</tiny-button>
          <tiny-button v-if="normalActive === 4" @click="handleFormRestore">{{
            $t('stepForm.button.restore')
          }}</tiny-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import {
    TimeLine as TinyTimeLine,
    Button as TinyButton,
  } from '@opentiny/vue';
  import { useAppStore } from '@/store';
  import collapsefrom from './components/collapse-from.vue';
  import headtop from './components/head.vue';

  const { t } = useI18n();
  const appStore = useAppStore();
  const collapseRef = ref();
  const normalActive = computed(() => appStore.step);

  // btn操作
  function handleFormReset() {
    collapseRef.value.collapseReset();
  }

  function handleSubmit() {
    collapseRef.value.collapseSubmit();
  }

  function handleFormRestore() {
    collapseRef.value.collapseRestore();
  }
</script>

<style scoped lang="less">
  .container-step {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 98%;
    height: inherit;
    margin: 0 auto;
    overflow: auto;
    word-break: break-all;

    .general-card {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: flex-start;
      margin: 0 10px;
      overflow-x: hidden;
      overflow-y: auto;

      .general-top {
        display: flex;
        justify-content: space-around;
        margin: 10px -10px;
        background-image: url('@/assets/images/step-head.png');
        background-size: cover;
      }

      .general-contain {
        height: 180px;
        margin-bottom: 20px;
        color: #252b3a;
        font-weight: 600;
        font-size: 15px;
        background-color: #fff;
        border-radius: 8px;

        div:first-child {
          margin: 25px 55px;
          font-size: 15px;
        }

        :deep(.tiny-steps-normal) {
          width: 1200px;
          margin-left: -80px;
        }
      }

      .general-foot {
        background-color: #fff;
        border-radius: 8px;
      }
    }

    .general-btn {
      display: flex;
      justify-content: start;
      min-width: 180px;
      margin-left: 210px;
      padding-bottom: 20px;

      :deep(.tiny-button) {
        width: 100px;
        height: 36px;
        border-radius: 4px;
      }
    }
  }
  @media (max-width: @screen-xs) {
    .general-top {
      height: 250px !important;
    }
  }
</style>
