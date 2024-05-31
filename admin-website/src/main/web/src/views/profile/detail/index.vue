<template>
  <div class="detail-page">
    <Breadcrumb :items="['menu.profile', 'menu.profile.detail']" />
    <div id="container">
      <div class="detail-contain">
        <tiny-collapse v-model="state.activeNames">
          <tiny-collapse-item :title="$t('baseForm.form.label.type')" name="1">
            <tiny-row :flex="true" justify="left" class="margin-bottom">
              <tiny-col :span="9">
                <div class="col">
                  {{ $t('baseForm.form.label.type') }}
                  <span>:</span>
                  <tiny-select
                    v-model="state.project"
                    :placeholder="$t('baseForm.form.label.placeholder')"
                    filterable
                  >
                    <tiny-option
                      v-for="item in state.Project"
                      :key="item"
                      :label="$t(item as any)"
                      :value="item"
                    ></tiny-option>
                  </tiny-select>
                </div>
              </tiny-col>
            </tiny-row>
          </tiny-collapse-item>

          <tiny-collapse-item :title="$t('baseForm.form.label.people')" name="2">
            <planDetail></planDetail>
          </tiny-collapse-item>

          <tiny-collapse-item
            :title="$t('baseForm.form.label.Objectives')"
            name="3"
          >
            <targetDetail></targetDetail>
          </tiny-collapse-item>
          <tiny-collapse-item :title="$t('baseForm.form.label.plan')" name="4">
            <evaluationDetail></evaluationDetail>
          </tiny-collapse-item>
          <tiny-collapse-item
            :title="$t('baseForm.form.label.evaluation')"
            name="5"
          >
            <wholeDetail></wholeDetail>
          </tiny-collapse-item>
          <tiny-collapse-item
            :title="$t('baseForm.form.label.mentortitle')"
            name="6"
          >
            <mentor></mentor>
          </tiny-collapse-item>
          <tiny-collapse-item :title="$t('baseForm.form.record')" name="7">
            <recordDetail
              :table-data="(state.tableData as [] | any)"
            ></recordDetail>
          </tiny-collapse-item>
        </tiny-collapse>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, onMounted } from 'vue';
  import {
    Row as TinyRow,
    Col as TinyCol,
    Select as TinySelect,
    Option as TinyOption,
    Collapse as TinyCollapse,
    CollapseItem as TinyCollapseItem,
    Loading,
  } from '@opentiny/vue';
  import { getDetailData } from '@/api/profile';
  import planDetail from './components/plan-detail.vue';
  import targetDetail from './components/target-detail.vue';
  import evaluationDetail from './components/evaluation-detail.vue';
  import wholeDetail from './components/whole-detail.vue';
  import mentor from './components/mentor-detail.vue';
  import recordDetail from './components/record-detail.vue';

  // 加载效果
  const state = reactive<{
    loading: any;
    filterOptions: object;
    activeNames: Array<string>;
    Project: Array<string>;
    tableData: Array<object>;
    project: string;
  }>({
    loading: null,
    filterOptions: {},
    activeNames: ['1', '2', '3', '4', '5', '6', '7'],
    Project: [],
    tableData: [],
    project: '',
  });

  // 请求数据接口方法
  const fetchData = async () => {
    state.loading = Loading.service({
      text: 'loading...',
      target: document.getElementById('container'),
      background: 'rgba(0, 0, 0, 0.7)',
    });
    try {
      const { data } = await getDetailData();
      state.Project = data.Project;
      state.tableData = data.tableData;
    } finally {
      state.loading.close();
    }
  };

  // 初始化请求数据
  onMounted(() => {
    fetchData();
  });
</script>

<style scoped lang="less">
  .detail-page {
    height: 100%;
  }
  #container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 60px);
    overflow-x: hidden;
    overflow-y: auto;
  }

  .detail-contain {
    flex: 1 1 auto;
    height: 100%;
    margin: 8px 10px;
    padding: 22px 20px;
    overflow: auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 8px 8px rgba(169, 174, 184, 0.05);
  }

  :deep(.tiny-select) {
    width: 400px;
  }

  :deep(.tiny-collapse-item) {
    margin-bottom: 20px;
  }

  .margin-bottom {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .col > span {
    padding: 0 10px;
  }
  :deep(.tiny-collapse-item__arrow.is-active, .tiny-collapse-item__arrow:hover){
    fill: var(--ti-common-color-text-highlight);
  }
  :deep(.tiny-collapse-item__header svg){
    fill: var(--ti-common-color-text-highlight);
  }
</style>
