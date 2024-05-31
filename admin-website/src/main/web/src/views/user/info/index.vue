<template>
  <div class="container">
    <Breadcrumb :items="['menu.user', 'menu.user.info']" />
    <div class="container-info">
      <div class="general-card">
        <div class="general-top">
          <headtop></headtop>
        </div>
        <div class="general-content">
          <infotab></infotab>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import infotab from './components/info-tab.vue';
  import headtop from '../../form/step/components/head.vue';
</script>

<style scoped lang="less">
  .container {
    width: 100%;
    height: 100%;
  }
  .container-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: calc(100% - 60px);
    margin: 0 auto;

    .general-card {
      flex: 1 1 auto;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      border-radius: 10px;

      .general-top {
        display: flex;
        min-height: 178px;
        margin-bottom: 20px;
        overflow: hidden;
        background-image: url('@/assets/images/blue-bg.png');
        background-size: 100% 100%;
        border-radius: 4px;
        box-shadow: 0 0 8px 8px rgba(169, 174, 184, 0.05);
      }

      .general-content {
        height: calc(100% - 198px);
        position: relative;
        color: black;
        font-size: medium;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 8px 8px rgba(169, 174, 184, 0.05);
        overflow-y: auto;
      }
    }
  }
</style>
