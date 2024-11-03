<template>
  <div class="menu-router">
    <tiny-tree-menu
      ref="tree"
      :data="treeDataFilter"
      :show-filter="false"
      node-key="id"
      wrap
      :default-expanded-keys="expandeArr"
      @current-change="currentChange"
    >
      <template #default="slotScope">
        <template v-for="(item, index) in routerTitle" :key="index">
          <span v-if="slotScope.label === item.value" class="menu-title">
            <component :is="item.icon"></component>
            <span :class="item.bold">{{ $t(item.name) }}</span>
          </span>
        </template>
      </template>
    </tiny-tree-menu>
  </div>
</template>

<script lang="ts" setup>
  import { computed, watch, ref, onMounted } from 'vue';
  import { RouteRecordNormalized } from 'vue-router';
  import {
    IconMaintainInspectionRecords,
    IconFiles,
    IconSetting,
    IconSuccessful,
    IconCueL,
    IconUser,
    IconFiletext,
    IconApplication,
  } from '@opentiny/vue-icon';
  import { TreeMenu as tinyTreeMenu } from '@opentiny/vue';
  import router from '@/router';
  import { useUserStore } from '@/store';

  // icon图标
  const iconMaintainInspectionRecords = IconMaintainInspectionRecords();
  const iconFiles = IconFiles();
  const iconSetting = IconSetting();
  const iconSuccessful = IconSuccessful();
  const iconCueL = IconCueL();
  const iconUser = IconUser();
  const iconFiletext = IconFiletext();
  const iconApplication = IconApplication();
  const tree = ref();
  const expandeArr = ref();
  const routerTitle = [
    {
      value: 'Management',
      name: 'menu.management',
      icon: iconApplication,
      bold: 'main-title',
    },
    {
      value: 'Home',
      name: 'menu.management.home',
      icon: null,
      bold: 'title',
    },
    {
      value: 'Maintenance',
      name: 'menu.maintenance',
      icon: iconMaintainInspectionRecords,
      bold: 'main-title',
    },
   {
      value: 'Problems',
      name: 'menu.maintenance.locate.problems',
      icon: null,
      bold: 'title',
    },
   {
      value: 'RestApi',
      name: 'menu.maintenance.restapi',
      icon: null,
      bold: 'title',
    },
   {
      value: 'Examples',
      name: 'menu.examples',
      icon: iconFiletext,
      bold: 'main-title',
    },
   {
      value: 'TestMethodAuth',
      name: 'menu.examples.testMethodAuth',
      icon: null,
      bold: 'title',
    },
    {
      value: 'User',
      name: 'menu.user',
      icon: iconUser,
      bold: 'main-title',
    },
    {
      value: 'Info',
      name: 'menu.user.info',
      icon: null,
      bold: 'title',
    },
    {
      value: 'Setting',
      name: 'menu.user.setting',
      icon: null,
      bold: 'title',
    },
  ];

  // 获取路由数据
  const appRoute = computed(() => {
    return router
      .getRoutes()
      .find((el: { name: string; }) => el.name === 'root') as RouteRecordNormalized;
  });
  const copyRouter = JSON.parse(JSON.stringify(appRoute.value.children));
  copyRouter.sort((a: RouteRecordNormalized, b: RouteRecordNormalized) => {
    return (a.meta.order || 0) - (b.meta.order || 0);
  });

  const userStore = useUserStore();
  const role = computed(() => userStore.role);
  let treeData = ref(copyRouter);
  const treeDataForEach = (arr: any[]) => {
    return arr.filter((e: { children: any[]; meta: { hideInMenu: any } }) => {
      if (e.children) {
        e.children = e.children.filter((v: { meta: { hideInMenu: any } }) => {
          return !v.meta.hideInMenu;
        });
        treeDataForEach(e.children);
      }
      return !e.meta.hideInMenu;
    });
  };
  const treeDataFilter = treeDataForEach(treeData.value);

  watch(
    role,
    (newValue: string) => {
      if (newValue === 'admin') {
        treeData.value = copyRouter;
      } else {
        treeData.value = copyRouter.filter(
          (item: { name: string }) => item.name !== 'User'
        );
      }
    },
    { immediate: true }
  );

  /**
   * 监听路由变化高亮当前菜单
   */
  onMounted(() => {
    watch(
      () => router.currentRoute.value.path,
      (newValue: string) => {
        const menuKey = newValue
          .replace(/^.*\//, '')
          .replace(/^[a-z]/, (s: string) => s.toUpperCase());
        expandeArr.value = [menuKey];
        tree.value.setCurrentKey(menuKey);
      },
      { immediate: true },
    );
  });
  const currentChange = (data: any) => {
    const filter = [
      'Exception',
      'Form',
      'Board',
      'List',
      'Profile',
      'Result',
      'User',
      'Cloud',
    ];
    if (filter.indexOf(data.id) === -1) {
      router.push({ name: data.id });
    }
  };
</script>

<style lang="less" scoped>
  .main-title {
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    color: #000;
  }

  .title {
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
  }

  .menu-title {
    display: flex;
    gap: 10px;
    align-items: center;
    height: 20px;

    > svg {
      width: 1.3em;
      height: 1.3em;
    }
  }

  :deep(.tiny-tree-node__wrapper > .is-current > .tiny-tree-node__content) {
    color: #000 !important;
    background: none !important;
    margin-left: 0 !important;
    &:hover {
      background: #fff !important;
      color: #fff !important;
    }
  }

  :deep(.tiny-tree-node__wrapper > .is-expanded >  .tiny-tree-node__children
  > .tiny-tree-node__wrapper > .is-current > .tiny-tree-node__content
  ) {
    background-color: var(--ti-tree-menu-node-hover-bg-color) !important;
    margin-left: 0 !important;
    &:hover {
      background: var(--ti-tree-menu-node-hover-bg-color) !important;
    }
  }

  :deep(.tiny-tree-node__wrapper > .is-expanded > .tiny-tree-node__children
  .tiny-tree-node__wrapper .is-current .tiny-tree-node__content .tree-node-name) {
    border-left: 2px solid var(--ti-tree-menu-square-left-border-color, '#fff') !important;
  }

  :deep(.tiny-tree-node__wrapper > .is-expanded > .tiny-tree-node__children
  .tiny-tree-node__wrapper .is-current .tiny-tree-node__content .tiny-tree-node__content-right) {
    background-color: var(--ti-tree-menu-node-hover-bg-color) !important;
  }

  :deep(.tiny-tree-node__wrapper > .is-expanded > .tiny-tree-node__children
  .tiny-tree-node__wrapper .is-current .tiny-tree-node__content .tiny-tree-node__content-left
  .tiny-tree-node__content-box) {
    background-color: var(--ti-tree-menu-node-hover-bg-color) !important;
  }

  :deep(.tiny-tree-node__wrapper > .is-expanded > .tiny-tree-node__children
  .tiny-tree-node__wrapper .is-current .tiny-tree-node__content .tiny-tree-node__content-left
  .tiny-tree-node__content-box:before) {
    display: none !important;
  }

  :deep(.tiny-tree-node__wrapper > .is-expanded > .tiny-tree-node__children
  .tiny-tree-node__wrapper .is-current .tiny-tree-node__content .tiny-tree-node__content-left:before) {
    display: none !important;
  }

  :deep(.tiny-tree-node__wrapper > .is-current > .tiny-tree-node__content) {
    background-color: #fff !important;
  }

  :deep(.tiny-tree-node__wrapper > .is-current > .tiny-tree-node__content .tiny-tree-node__content-box) {
    background-color: #fff !important;
  }

  :deep(.tiny-tree-node__content:hover) {
    background-color: var(--ti-tree-node-content-hover-bg-color) !important;
  }

  :deep(.tiny-tree-menu__wrap > .tiny-tree-node__wrapper > .is-root > .tiny-tree-node__content
  > .tiny-tree-node__content-left .tiny-tree-node__content-box .tree-node-name) {
    padding: 0 8px !important;
  }

  :deep(.tiny-tree-node > .tiny-tree-node__content) {
    margin-left: 0 !important;
  }

  .tiny-tree-menu
    .tiny-tree
    .tiny-tree-node.is-current
    > .tiny-tree-node__content
    .tree-node-name
    .tiny-svg {
    fill: var(--ti-base-icon-color);
  }
</style>
