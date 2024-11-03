<template>
  <div class="container">
    <div class="contain">
      <Breadcrumb :items="['menu.maintenance', 'menu.maintenance.restapi']" />
      <Main></Main>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Main from './components/main.vue';
</script>

<style scoped lang="less">
  .container {
    width: 98%;
    height: inherit;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>

<style lang="less" scoped>
  // responsive
  @media (max-width: @screen-xs) {
    .container {
      overflow-x: auto;
    }
  }
</style>
