<template>
  <div class="layout">
    <tiny-container :aside-width="250" >
      <template #header>
        <tiny-layout>
          <div class="layout-navbar">
            <NavBar />
          </div>
        </tiny-layout>
      </template>
      <template #aside>
        <tiny-layout class="layout-sider">
          <div class="menu-wrapper">
            <Menu />
          </div>
        </tiny-layout>
      </template>
      <tiny-layout class="layout-content">
        <PageLayout />
      </tiny-layout>
      <template #footer>
        <tiny-layout>
          <div class="layout-footer">
            <Footer />
          </div>
        </tiny-layout>
      </template>
    </tiny-container>

  </div>
</template>

<script lang="ts" setup>
  import {
    Container as TinyContainer,
    Layout as TinyLayout,
  } from '@opentiny/vue';
  import NavBar from '@/components/navbar/index.vue';
  import Menu from '@/components/menu/index.vue';
  import PageLayout from './page-layout.vue';
</script>

<style scoped lang="less">
  .layout {
    width: 100%;
    height: 100%;
  }

  .layout-navbar {
    position: fixed;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  }

  .menu-wrapper {
    width: inherit;
    height: 92vh;
    margin-top: v-bind(top);
    overflow-x: hidden;
    overflow-y: auto;
  }

  .global-setting {
    position: fixed;
    top: 280px;
    right: 0;
    z-index: 99;
    width: 30px;
    height: 30px;
  }

  .layout :deep(.tiny-container .tiny-container__aside) {
    z-index: 100;
    background: #fff;
    border-left: 1px solid #ccc;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .layout :deep(.tiny-container .tiny-container__main) {
    background-color: #f5f6f7;
  }

  .layout :deep(.layout-content) {
    height: 100%;
    padding: 0 10px;
    overflow: hidden;
  }

  .layout :deep(.tiny-container .tiny-container__footer) {
    display: flex;
    padding-top: 15px;
    justify-content: center;
    background-color: #f5f6f7;
  }

  // 组件无法固定非message的modal类型距离顶部距离
  :deep(.tiny-modal__box) {
    top: 8px !important;
  }

  // 路由子菜单选中后的样式
  :deep(.tiny-tree-node__children .tiny-tree-node__content) {
    .tree-node-name {
      margin-left: 28px !important;
      padding-left: 6px !important;
    }
  }
   :deep(.tiny-tree-node__children > .tree-node-body) {
    padding-left: 50px;
   }
  .theme-box {
    position: fixed;
    top: 88%;
    right: 30px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background-color: #fff;
    border-radius: 100%;
    cursor: pointer;

    img {
      display: block;
      width: inherit;
      height: inherit;
    }
  }
</style>
