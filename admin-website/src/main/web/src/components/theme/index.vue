<template>
  <div class="theme-content">
    <div class="theme-container">
      <div class="theme-recommend">
        <h1>{{ $t('theme-title-recommend') }}</h1>
        <template v-for="(item, index) in themeTitle" :key="index">
          <div class="theme-contain">
            <div :class="item.color" @click="change(item)">
              <h4>{{ $t(item.title) }}</h4>
              <span>{{ $t(item.content) }}</span>
              <div class="theme-tip">
                <Yes
                  :class="
                    item.color === appStore.themelist
                      ? 'theme-list-yes'
                      : 'theme-list-no'
                  "
                ></Yes>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="theme-person">
        <h1>{{ $t('theme.title.customization') }}</h1>
        <div>
          <span>{{ $t('theme.title.light') }}</span>
          <div class="theme-line">
            <div v-for="item in SwitchlightColor" :key="item.value" class="light">
              <div
                class="theme-block"
                :style="{ 'background-color': item.color }"
                @click="choose(item)"
              >
                <Yes
                  v-if="item.value === appStore.themeValue"
                  class="theme-yes"
                ></Yes>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span>{{ $t('theme.title.deep') }}</span>
          <div class="theme-line">
            <div v-for="item in SwitchdarkColor" :key="item.value" class="black">
              <div
                class="theme-block"
                :style="{ 'background-color': item.color }"
                @click="choose(item)"
              >
                <Yes
                  v-if="item.value === appStore.themeValue"
                  class="theme-yes"
                ></Yes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, watch } from 'vue';
  // eslint-disable-next-line import/extensions
  import TinyThemeTool from '@opentiny/vue-theme/theme-tool.js';
  import { IconYes } from '@opentiny/vue-icon';
  import { useAppStore } from '@/store';
  import {
    DefaultTheme,
    PeachesTheme,
    VioletTheme,
    DeepnessTheme,
    DarkTheme,
    SwitchdarkColor,
    SwitchlightColor,
  } from './type';

  // 默认循环颜色内容
  const themeTitle = [
    {
      val: '1',
      title: 'theme.title.default',
      content: 'theme-text-default',
      color: 'default',
    },
    {
      val: '2',
      title: 'theme.title.honey',
      content: 'theme-text-honey',
      color: 'peaches',
    },
    {
      val: '3',
      title: 'theme.title.violet',
      content: 'theme-text-violet',
      color: 'violet',
    },
    {
      val: '4',
      title: 'theme.title.deepness',
      content: 'theme-text-deepness',
      color: 'deepness',
    },
    {
      val: '5',
      title: 'theme.title.deep',
      content: 'theme-text-dark',
      color: 'dark',
    },
  ];
  const Yes = IconYes();
  const appStore = useAppStore();
  let divApp = document.documentElement;
  let theme = new TinyThemeTool();

  onMounted(() => {
    if (appStore.themelist === 'none') {
      theme.changeTheme(appStore.themeLightColors.theme);
      appStore.theme = appStore.themeLightColors.dark as string;
    }
  });

  // 选中默认主题
  const change = (item: any) => {
    appStore.updateSettings({ themeValue: 0 });
    switch (item.val) {
      case '2':
        appStore.updateSettings({ theme: 'light' });
        theme.changeTheme(PeachesTheme);
        appStore.updateSettings({ themelist: 'peaches' });
        break;
      case '3':
        appStore.updateSettings({ theme: 'light' });
        theme.changeTheme(VioletTheme);
        appStore.updateSettings({ themelist: 'violet' });
        break;
      case '4':
        appStore.updateSettings({ theme: 'light' });
        theme.changeTheme(DeepnessTheme);
        appStore.updateSettings({ themelist: 'deepness' });
        break;
      case '5':
        appStore.updateSettings({ theme: 'dark' });
        theme.changeTheme(DarkTheme);
        appStore.updateSettings({ themelist: 'dark' });
        break;
      default:
        appStore.updateSettings({ theme: 'light' });
        theme.changeTheme(DefaultTheme);
        appStore.updateSettings({ themelist: 'default' });
    }
  };

  // 暗黑监听
  watch(appStore.$state, (newValue, oldValue) => {
    if (newValue.theme === 'dark') {
      divApp!.style.filter = 'invert(0.9) hue-rotate(180deg)';
    } else {
      divApp!.style.filter = 'invert(0) hue-rotate(0deg)';
    }
  });

  // 选中自定义
  const choose = (item: {
    value?: number;
    color?: string;
    dark: any;
    theme: any;
  }) => {
    appStore.themelist = 'none';
    appStore.updateSettings({ themeValue: item.value });
    theme.changeTheme(item.theme);
    appStore.theme = item.dark as string;
    appStore.setthemeLightColors(item);
  };

  // 自定义监听
  watch(
    appStore.$state,
    (newValue, oldValue) => {

      // eslint-disable-next-line default-case
      switch (newValue.themelist) {
        case 'default':
          appStore.updateSettings({ theme: 'light' });
          theme.changeTheme(DefaultTheme);
          break;
        case 'peaches':
          appStore.updateSettings({ theme: 'light' });
          theme.changeTheme(PeachesTheme);
          break;
        case 'violet':
          appStore.updateSettings({ theme: 'light' });
          theme.changeTheme(VioletTheme);
          break;
        case 'deepness':
          appStore.updateSettings({ theme: 'light' });
          theme.changeTheme(DeepnessTheme);
          break;
        case 'dark':
          appStore.updateSettings({ theme: 'dark' });
          break;
      }
    },
    { immediate: true }
  );
</script>

<style scoped lang="less">
  .theme-content {
    height: calc(100vh - 15px);
    overflow-y: auto;
  }

  .theme-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 820px;
    margin: 2px;

    .theme-recommend {
      height: 60%;
      padding-left: 40px;

      .theme-tip {
        position: relative;
        top: -63%;
        left: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        background: #fff;
        border-radius: 50%;
      }

      .theme-list-yes {
        fill: rgb(124, 231, 169);
      }

      .theme-list-no {
        fill: #ccc;
      }

      .theme-contain {
        width: 69%;
        cursor: pointer;
      }
    }

    .theme-person {
      height: 40%;
      padding-left: 40px;

      span {
        height: 20px;
        color: #202e54;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
      }
    }

    h1 {
      height: 22px;
      color: #202e54;
      font-weight: bolder;
      font-size: 16px;
      line-height: 22px;
      text-align: left;
    }
  }

  .theme-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;

    .theme-block {
      display: flex;
      justify-content: center;
      width: 30px;
      height: 30px;
      margin: 0 auto;
      border-radius: 50%;
    }

    .theme-yes {
      margin: auto 0;
      fill: #fff;
    }
  }

  .background {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 8px;
    box-shadow: 2px 2px 15px 3px rgba(85, 105, 173, 0.06);
  }

  .light {
    .background();

    background: #fff;
    cursor: pointer;
  }

  .black {
    .background();

    background: #676868;
    cursor: pointer;
  }

  .card {
    width: 436px;
    height: 64px;
    border-radius: 8px;
    box-shadow: 2px 2px 15px 3px rgba(85, 105, 173, 0.06);

    h4 {
      height: 20px;
      padding-top: 10px;
      padding-left: 20px;
      color: #fff;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
    }

    span {
      position: relative;
      bottom: 5px;
      padding-left: 20px;
      color: #fff;
      font-size: 14px;
      text-align: left;
    }
  }

  .default {
    .card();

    background: linear-gradient(225deg, #97b3f2 1%, #5e7ce0);
  }

  .peaches {
    .card();

    background: linear-gradient(229deg, #f79fd5, #ed66ab 94%);
  }

  .violet {
    .card();

    background: linear-gradient(225deg, #b3a3f8, #7c6aee);
  }

  .deepness {
    .card();

    background: linear-gradient(228deg, #4a566c, #242b3a 96%);
  }

  .dark {
    .card();

    background: linear-gradient(228deg, #464747 5%, #000);
  }
</style>
