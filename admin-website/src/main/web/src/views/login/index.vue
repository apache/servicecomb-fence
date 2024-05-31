<template>
  <div class="container-login">
    <div class="content">
      <div class="login">
        <div class="login-header">
          <div class="login-logo">
            <img
              class="login-logo-img"
              alt="Tiny Design"
              src="@/assets/images/pro.png"
            />
            <span class="login-logo-text">TinyPro of Vue</span>
          </div>
          <div class="login-desc">{{ $t('login.main.text') }}</div>
        </div>
        <LoginForm />
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Footer from '@/components/footer/index.vue';
  import LoginForm from './components/login-form.vue';
</script>

<style lang="less" scoped>
  .container-login {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url('@/assets/images/img_log.png');
    background-size: 100% 100%;
  }

  .content {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
  }

  .login {
    width: 450px;
    height: 550px;
    padding: 60px 40px;
    font-size: var(--ti-common-font-size-1);
    background: #fff;
    box-shadow: 0 0 2px 2px var(--ti-common-color-bg-normal);

    &-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &-logo {
      margin-right: 20px;

      &-img {
        margin-right: 10px;
        vertical-align: middle;
      }

      &-text {
        display: inline-block;
        color: rgba(0, 0, 0, 0.7);
        font-weight: bold;
        font-size: 30px;
        vertical-align: middle;
      }
    }

    &-desc {
      margin-top: 12px;
      margin-bottom: 40px;
      color: rgba(0, 0, 0, 0.5);
      font-size: 14px;
    }
  }

  // 登录页面的tiny-link不保留hover后的下划线展示
  :deep(.tiny-link.is-underline:hover::after) {
    border-bottom: none;
  }
</style>

<style lang="less" scoped>
  // responsive
  @media (max-width: @screen-ms) {
    .login {
      width: 350px;
      height: 550px;

      &-logo {
        &-text {
          font-size: 15px;
        }
      }
    }
  }
</style>
