<template>
  <Breadcrumb :items="['menu.cloud', 'menu.cloud.contracts']" />
  <div class="container-contracts">
    <div class="contracts-card">
      <tiny-grid
        v-if="update"
        :ref="taskGrid"
        :fetch-data="fetchDataOption"
        :auto-load="true"
        :pager="pagerConfig"
        :loading="loading"
        size="medium"
        :auto-resize="true"
      >
        <template #toolbar>
          <tiny-grid-toolbar>
            <template #buttons="slotScope">
              <div class="btn">
                <span>{{ $t('menu.cloud.contracts') }}</span>
                <tiny-button
                  type="primary"
                  @click="disTheme('create', slotScope.row)"
                  >{{ $t('menu.cloud.create') }}</tiny-button
                >
              </div>
            </template>
          </tiny-grid-toolbar>
        </template>

        <tiny-grid-column type="index" width="40"></tiny-grid-column>
        <tiny-grid-column
          field="name"
          :title="$t('menu.cloud.name')"
          align="center"
          sortable
        ></tiny-grid-column>
        <tiny-grid-column
          field="id"
          :title="$t('menu.cloud.id')"
          align="center"
        ></tiny-grid-column>
        <tiny-grid-column
          field="customer"
          :title="$t('menu.cloud.customer')"
          align="center"
        ></tiny-grid-column>
        <tiny-grid-column
          field="description"
          :title="$t('menu.cloud.description')"
          align="center"
        ></tiny-grid-column>
        <tiny-grid-column
          field="updatedAt"
          :title="$t('menu.cloud.updatedAt')"
          align="center"
          sortable
        ></tiny-grid-column>
        <tiny-grid-column
          :title="$t('searchTable.columns.operations')"
          align="center"
        >
          <template #default="slotScope">
            <span class="operation">
              <a @click="disTheme('edit', slotScope.row)">
                {{ $t('menu.cloud.editOpa') }}
              </a>
              &nbsp;
              <a @click="disTheme('deletes', slotScope.row)">
                {{ $t('menu.cloud.editDel') }}
              </a>
            </span>
          </template>
        </tiny-grid-column>
      </tiny-grid>
    </div>
  </div>
  <div v-if="display">
    <tiny-modal
      v-model="display"
      :lock-scroll="false"
      :show-header="false"
      :show-footer="false"
      type="confirm"
      mask-closable="true"
      :height="modalHeight"
      width="589"
      @confirm="confirmClick"
      @close="closeClick"
    >
      <template #default>
        <component
          :is="title"
          ref="content"
          :init="init"
          @myclick="confirmClick"
          @mycancel="closeClick"
        ></component>
      </template>
    </tiny-modal>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, toRefs } from 'vue';
  import {
    Grid as TinyGrid,
    GridColumn as TinyGridColumn,
    GridToolbar as TinyGridToolbar,
    Button as TinyButton,
    Pager as TinyPager,
    Modal as tinyModal,
  } from '@opentiny/vue';
  import { sortTime } from '@/utils/time';
  import { ApigInfo } from '@/types/global';
  import { HwcClientService } from '@/utils/hwcClient.service';
  import edit from './components/edit/index.vue';
  import create from './components/create/index.vue';
  import deletes from './components/delete/index.vue';

  // 初始化请求数据
  interface FilterOptions {
    id: string;
    name: string;
    description: string;
    customer: string;
    updatedAt: string;
  }

  // 加载效果
  const state = reactive<{
    loading: boolean;
    filterOptions: FilterOptions;
  }>({
    loading: false,
    filterOptions: {} as FilterOptions,
  });

  const pagerConfig = reactive({
    component: TinyPager,
    attrs: {
      currentPage: 1,
      pageSize: 10,
      pageSizes: [10, 20],
      total: 10,
      layout: 'total, prev, pager, next, jumper, sizes',
    },
  });

  const update = ref(true);
  const { loading } = toRefs(state);
  const display = ref(false);
  const title = ref();
  const choose = ref('');
  const content = ref();
  const init = ref();
  const taskGrid = ref();
  const table = ref();
  const modalHeight = ref('536');

  const contractApigInfo: ApigInfo = {
    apigName: 'apig_contract',
    apigGroupName: 'group_contract',
  };

  // 获取初始数据
  async function getContractsData(params: { query: string; field: string }) {
    const result = await HwcClientService.apiRequest(
      'getContracts',
      params,
      contractApigInfo
    );

    return result?.data;
  }

  // 请求数据接口方法
  async function fetchData(params: {
    pageIndex: number;
    pageSize: number;
    query: string;
    field: string;
  }) {
    state.loading = true;
    try {
      table.value = await getContractsData(params);
      let offset = (params.pageIndex - 1) * params.pageSize;
      const data = table.value.sort(sortTime('updatedAt') as any);
      return {
        result: data.slice(offset, offset + params.pageSize),
        page: {
          total: table.value.length,
        },
      };
    } finally {
      update.value = true;
      state.loading = false;
    }
  }

  // 删除合同
  async function delContracts(params: { id: string }) {
    return HwcClientService.apiRequest('delContract', params, contractApigInfo);
  }

  // 编辑合同
  async function editContracts(params: {
    id: string;
    name: string;
    customer: string;
    description: string;
  }) {
    return HwcClientService.apiRequest(
      'editContract',
      params,
      contractApigInfo
    );
  }

  // 创建合同
  async function createContracts(params: {
    name: string;
    customer: string;
    description: string;
  }) {
    return HwcClientService.apiRequest('addContract', params, contractApigInfo);
  }

  const fetchDataOption = reactive({
    api: ({ page }: any) => {
      const { currentPage, pageSize } = page;
      return fetchData({
        pageIndex: currentPage,
        pageSize,
        query: '',
        field: 'name',
      });
    },
  });

  const disTheme = (item: string, data: any) => {
    init.value = data;
    choose.value = item;
    display.value = !display.value;
    if (item === 'edit') {
      title.value = edit;
      modalHeight.value = '536';
    } else if (item === 'deletes') {
      title.value = deletes;
      modalHeight.value = '369';
    } else {
      title.value = create;
      modalHeight.value = '536';
    }
  };

  // 确认提交
  async function confirmClick() {
    display.value = false;
    update.value = false;
    if (choose.value === 'edit') {
      const data = content.value.resultData();
      const params = {
        id: init.value.id,
        name: data.name,
        customer: data.customer,
        description: data.description,
      };
      await editContracts(params);
      fetchData({
        pageIndex: 1,
        pageSize: 10,
        query: '',
        field: 'name',
      });
    }
    if (choose.value === 'deletes') {
      const params = {
        id: init.value.id,
      };
      await delContracts(params);
      fetchData({
        pageIndex: 1,
        pageSize: 10,
        query: '',
        field: 'name',
      });
    }
    if (choose.value === 'create') {
      const data = content.value.resultData();
      const params = {
        name: data.name,
        customer: data.customer,
        description: data.description,
      };
      await createContracts(params);
      fetchData({
        pageIndex: 1,
        pageSize: 10,
        query: '',
        field: 'name',
      });
    }
  }

  const closeClick = () => {
    display.value = false;
  };
</script>

<style scoped lang="less">

  .container-contracts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: calc(100% - 60px);
    margin: 0 auto;
    overflow: hidden;
  }

  // 覆盖组件样式 满足设计图
  :deep(.tiny-grid-button__wrapper) {
    width: 100%;
  }

  :deep(.tiny-pager) {
    float: right;
  }

  :deep(.tiny-modal__box) {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 30px 15px rgba(37, 43, 58, 0.3);
  }

  .contracts-card {
    flex: 1 1 auto;
    margin: 8px 10px;
    padding: 0 30px;
    overflow: auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 8px 8px rgba(169, 174, 184, 0.05);
  }

  .btn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 100px;

    span {
      width: 56px;
      height: 20px;
      color: #202e54;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
    }

    button {
      display: block;
      border-radius: 4px;
    }
  }

  .operation {
    color: #526ecc;
  }

  .content :deep(.tiny-grid) {
    height: inherit;
  }
</style>
