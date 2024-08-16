<template>
  <div class="footer">
    <div>{{ $t('setting.foot.title') }}</div>
    <div class="divider"></div>
    <a href="https://opentiny.design/" target="_blank" rel="noopener noreferrer">
      <img src="@/assets/images/github.png" alt="github" />
    </a>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ti-default-font-color);
    font-size: var(--ti-default-font-size);
    font-family: var(--ti-default-font-family);
    text-align: center;

    .divider {
      width: 2px;
      height: 18px;
      margin: 0 10px;
      margin-top: 1px;
      background: #7b7e84;
      opacity: 0.3;
    }

    .foot-link {
      color: #8a8e99;
      text-decoration: none;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #8a8e99;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      text-decoration: none;

      img {
        width: 18px;
        height: 19px;
      }
    }
  }
</style>
