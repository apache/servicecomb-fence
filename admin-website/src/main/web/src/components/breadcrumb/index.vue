<template>
  <tiny-breadcrumb class="container-breadcrumb">
    <tiny-breadcrumb-item v-for="item in items" :key="item">
      {{ $t(item) }}
    </tiny-breadcrumb-item>
  </tiny-breadcrumb>
</template>

<script lang="ts" setup>
  import { PropType, defineProps } from 'vue';
  import {
    Breadcrumb as TinyBreadcrumb,
    BreadcrumbItem as TinyBreadcrumbItem,
  } from '@opentiny/vue';

  defineProps({
    items: {
      type: Array as PropType<string[]>,
      default() {
        return [];
      },
    },
  });
</script>

<style scoped lang="less">
  .container-breadcrumb {
    margin: 15px 10px;
  }
</style>
