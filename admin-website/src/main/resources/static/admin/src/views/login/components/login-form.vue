<template>
  <div class="login-form-container">
    <div >
      <LoginMail />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import LoginMail from './login-mail.vue';

</script>

<style lang="less" scoped>
  .login-form-container {
    margin-top: 5%;
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
