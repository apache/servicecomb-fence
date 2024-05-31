<template>
  <div class="container">
    <Breadcrumb :items="['menu.result', 'menu.result.success']" />
    <div class="content">
      <div class="content-main">
        <div v-if="active === 4" class="result-alert">
          <img src="@/assets/images/success.png" alt="success" />
          <div>
            <div>{{ $t('menu.result.messageSuccess') }}</div>
            <div>{{ $t('success.result.title') }}</div>
          </div>
        </div>
        <div class="result-btn">
          <tiny-button
            type="primary"
            native-type="submit"
            @click="handleSubmit"
            >{{ $t('menu.btn.submit') }}</tiny-button
          >
          <tiny-button @click="handleFormReset">
            {{ $t('menu.btn.cancel') }}
          </tiny-button>
        </div>
        <div class="result-line">
          <div>{{ $t('menu.line.process') }}</div>
          <div>
            <tiny-time-line
              :data="[
                { name: t('stepForm.start.coaching') },
                { name: t('stepForm.immediate.supervisor') },
                { name: t('stepForm.overall.goals') },
                { name: t('stepForm.overall.summary') },
                { name: t('stepForm.overall.end') },
              ]"
              :active="active"
              type="normal"
            ></tiny-time-line>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import {
    Button as TinyButton,
    TimeLine as TinyTimeLine,
    Modal,
  } from '@opentiny/vue';

  const { t } = useI18n();
  const active = ref(4);

  function handleSubmit() {
    if (active.value < 4) {
      active.value += 1;
      Modal.message({
        message: t('menu.result.messageSuccess'),
        status: 'success',
      });
    } else {
      active.value = 4;
      Modal.message({
        message: t('menu.result.messageEnd'),
        status: 'success',
      });
    }
  }

  function handleFormReset() {
    if (active.value === 4) {
      active.value = 0;
    }
  }
</script>

<style scoped lang="less">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 98%;
    height: inherit;
    margin: 0 auto;
    overflow: hidden;

    :deep(.tiny-steps) {
      margin-top: 10px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    overflow: auto;
    background: #fff;
    border-radius: 10px;
  }

  .content-main {
    padding: 75px 0;
  }

  .result-alert {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    color: black;
    text-align: center;

    img {
      width: 68px;
      height: 68px;
      margin: 0 auto;
    }

    div:first-child {
      padding-top: 50px;
      font-weight: 900;
      font-size: 20px;
    }

    div:last-child {
      padding-top: 20px;
      font-size: 14px;
    }
  }

  .result-line {
    width: 75%;
    height: 200px;
    margin: 0 auto;
    margin-top: 50px;
    color: black;
    background-color: #f5f6f7;

    div:first-child {
      padding: 20px;
    }
  }

  .result-btn {
    display: flex;
    justify-content: center;
    padding: 50px 0;

    button {
      width: 120px;
      height: 36px;
      border-radius: 4px;
    }
  }
</style>
