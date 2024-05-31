<template>
  <div class="login-form-container">
    <div class="login-form-language">
      <LoginLang />
    </div>
    <div v-if="display">
      <LoginRegister />
    </div>
    <div v-if="!display">
      <LoginMail />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { provide, ref } from 'vue';
  import { Tabs as TinyTabs, TabItem as TinyTabItem } from '@opentiny/vue';
  import LoginInfo from './login-info.vue';
  import LoginMail from './login-mail.vue';
  import LoginRegister from './login-register.vue';
  import LoginLang from './login-lang.vue';

  // 登录
  const activeName = ref('first');

  //  切换开关
  let display = ref(false);

  const handle = (value: any) => {
    display.value = value;
  };
  provide('handle', handle);
</script>

<style lang="less" scoped>
  .login-form-container {
    margin-top: 5%;
  }

  .login-form-language {
    position: absolute;
    top: 10%;
    left: 93%;
  }

  :deep(.tiny-tabs__content) {
    margin-left: -6%;
  }

  // 修复组件默认tab的点击横线偏右超出
  :deep(.tiny-tabs__nav.is-show-active-bar .tiny-tabs__item) {
    margin-right: 0;
  }
  // responsive
  @media (max-width: @screen-lg) {
    .login-form-language {
      position: absolute;
      top: 10%;
      left: 90%;
    }
  }
  @media (max-width: @screen-ms) {
    .login-form-language {
      position: absolute;
      top: 1%;
      left: 72%;
    }
  }
  @media (min-width: @screen-mm) {
    .login-form-language {
      position: absolute;
      top: 3%;
      left: 86%;
    }
  }
</style>
