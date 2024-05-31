<template>
  <div class="container">
    <Breadcrumb :items="['menu.exception', 'menu.exception.404']" />
    <div class="content">
      <div class="content-main">
        <img src="@/assets/images/404.png" alt="404" class="image" />
        <h3 class="tip">{{ $t('exception.result.404.description') }}</h3>
        <span>{{ $t('exception.result.permissions.404') }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
  @import '@/assets/style/exception.less'; /* 引入公共样式 */
</style>
