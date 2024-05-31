<template>
  <div v-if="visible" class="global-set-contain">
    <div class="global-hide-from" @click="cancel"></div>
    <div class="global-set-from">
      <div class="global-set-head">
        <h3>{{ $t('settings.title') }}</h3>
        <iconClose @click="cancel"></iconClose>
      </div>
      <div class="global-set-tip">
        <img src="@/assets/images/setTip.png" class="image" />
        <div>{{ $t('settings.alertContent') }}</div>
      </div>
      <div class="global-set-content">
        <h4>{{ $t('settings.content') }}</h4>
        <div>
          <span>
            <div>{{ $t('settings.navbar') }}</div>
            <div>{{ $t('setting.mode.navbar') }}</div>
          </span>
          <tiny-switch
            v-model="appStore.navbar"
            @change="changenavbar"
          ></tiny-switch>
        </div>

        <div>
          <span>
            <div>{{ $t('settings.menu') }}</div>
            <div>{{ $t('setting.mode.menu') }}</div>
          </span>
          <tiny-switch
            v-model="appStore.menu"
            @change="changemenu"
          ></tiny-switch>
        </div>

        <div>
          <span>
            <div>{{ $t('settings.footer') }}</div>
            <div>{{ $t('setting.mode.footer') }}</div>
          </span>
          <tiny-switch
            v-model="appStore.footer"
            @change="changefooter"
          ></tiny-switch>
        </div>
      </div>

      <div class="global-set-foot">
        <div>
          <tiny-button type="primary" @click="copySettings">{{
            $t('settings.copySettings')
          }}</tiny-button>
          <tiny-button @click="cancel">{{ $t('settings.close') }}</tiny-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useClipboard } from '@vueuse/core';
  import {
    Button as TinyButton,
    Switch as TinySwitch,
    Modal,
  } from '@opentiny/vue';
  import { IconClose } from '@opentiny/vue-icon';
  import { useAppStore } from '@/store';

  const iconClose = IconClose();
  const { copy } = useClipboard();
  const appStore = useAppStore();
  const visible = computed(() => appStore.Settings);
  const { t } = useI18n();

  const cancel = () => {
    appStore.updateSettings({ Settings: false });
  };

  const copySettings = () => {
    const text = JSON.stringify(`const tinyTestTheme = {
  id: 'tiny-test-theme', // 主题的唯一id，每个主题必须唯一
  name: 'testTheme', // 主题的英文名称
  cnName: '测试主题', // 主题的中文名称
  data: { 'ti-base-color': '#f2f2f3' } //  主题数据
}`);
    copy(text);
    Modal.message({
      message: t('setting.copy'),
      status: 'success',
    });
  };

  const changenavbar = (item: boolean) => {
    if (!item) {
      appStore.updateSettings({ menu: true, footer: true });
    }
  };
  const changemenu = (item: boolean) => {
    if (!item) {
      appStore.updateSettings({ navbar: true, footer: true });
    }
  };
  const changefooter = (item: boolean) => {
    if (!item) {
      appStore.updateSettings({ navbar: true, menu: true });
    }
  };
</script>

<style scoped lang="less">
  .global-set-contain {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: start;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: #0000004d;

    .global-hide-from {
      width: calc(100% - 290px);
      height: 100%;
      overflow: auto;
      background-color: #0000004d;
    }

    .global-set-from {
      position: fixed;
      right: 0;
      display: flex;
      flex-direction: column;
      width: 290px;
      height: 100%;
      background-color: #fff;

      h3 {
        height: 25px;
        color: #202e54;
        font-weight: bolder;
        font-size: 18px;
        line-height: 25px;
        text-align: left;
      }

      .global-set-head {
        display: flex;
        justify-content: space-between;
        padding: 10px;
      }
    }

    .global-set-tip {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: 90%;
      margin: 15px;
      padding: 8px;
      overflow: hidden;
      color: #e35349;
      font-size: 14px;
      line-height: 1.5715;
      text-align: left;
      text-indent: 2em;
      word-break: break-all;
      background-color: rgba(227, 83, 73, 0.06);

      .image {
        position: absolute;
        top: 108px;
        left: 27px;
        width: 15px;
      }
    }

    .global-set-content {
      flex: 1;
      padding: 10px;
      overflow-y: auto;

      div {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
      }

      span {
        display: flex;
        flex-direction: column;

        & div:first-child {
          height: 20px;
          padding-bottom: 18px;
          color: #202e54;
          font-size: 14px;
          line-height: 20px;
          text-align: left;
        }

        & div:nth-child(2) {
          height: 20px;
          color: #86909c;
          font-size: 14px;
          line-height: 20px;
          text-align: left;
        }
      }
    }

    .global-set-foot {
      justify-self: flex-end;

      div {
        display: flex;
        justify-content: space-between;
        padding: 30px;

        button {
          width: 100px;
          height: 36px;
          border-radius: 4px;
        }
      }
    }
  }
</style>
