<template>
  <div class="container">
    <Breadcrumb :items="['menu.exception', 'menu.exception.403']" />
    <div class="content">
      <div class="content-main">
        <img src="@/assets/images/403.png" alt="403" class="image" />
        <h3 class="tip">{{ $t('exception.result.403.description') }}</h3>
        <span>{{ $t('exception.result.permissions.403') }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
  @import '@/assets/style/exception.less'; /* 引入公共样式 */
</style>
