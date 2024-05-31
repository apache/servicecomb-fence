<template>
  <div class="container">
    <Breadcrumb :items="['menu.exception', 'menu.exception.500']" />
    <div class="content">
      <div class="content-main">
        <img src="@/assets/images/500.png" alt="404" class="image" />
        <h3 class="tip">{{ $t('exception.result.500.description') }}</h3>
        <span>{{ $t('exception.result.permissions.500') }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
  @import '@/assets/style/exception.less'; /* 引入公共样式 */
</style>
