<template>
  <div class="container-list">
    <Breadcrumb :items="['menu.list', 'menu.list.searchTable']"/>
    <div class="contain">
      <div class="contain-head">
        <span>{{ $t( 'searchTable.form.create' ) }}</span>
        <hr/>
        <div class="contain-img">
          <img
              v-if="setCollapse"
              src="@/assets/images/collapse.png"
              alt="collapse"
              @click="collapse"
          />
          <img
              v-if="!setCollapse"
              src="@/assets/images/expand.png"
              alt="expand"
              @click="extend"
          />
        </div>
        <div class="contain-text">
          {{
            setCollapse
                ? $t( 'searchTable.form.collapse' )
                : $t( 'searchTable.form.extend' )
          }}
        </div>
      </div>
      <tiny-form
          :model="filterOptions"
          label-position="right"
          label-width="100px"
          class="filter-form"
          size="small"
      >
        <tiny-row :flex="true" justify="center" class="col">
          <tiny-col :span="4" label-width="100px">
            <tiny-form-item :label="$t('searchTable.columns.name')">
              <tiny-input
                  v-model="filterOptions.name"
                  :placeholder="$t('searchTable.form.input')"
              ></tiny-input>
            </tiny-form-item>
          </tiny-col>
          <tiny-col :span="4" label-width="100px">
            <tiny-form-item
                :label="$t('searchTable.columns.department')"
                prop="id"
            >
              <tiny-input
                  v-model="filterOptions.department"
                  :placeholder="$t('searchTable.form.input')"
              ></tiny-input>
            </tiny-form-item>
          </tiny-col>
          <tiny-col :span="4" label-width="100px">
            <tiny-form-item :label="$t('searchTable.columns.role')">
              <tiny-input
                  v-model="filterOptions.roles"
                  :placeholder="$t('searchTable.form.input')"
              ></tiny-input>
            </tiny-form-item>
          </tiny-col>
        </tiny-row>

        <tiny-row v-if="setCollapse" :flex="true" justify="center" class="col">
          <tiny-col :span="4">
            <tiny-form-item :label="$t('searchTable.columns.workname')">
              <tiny-input
                  v-model="filterOptions.workbenchName"
                  :placeholder="$t('searchTable.form.input')"
              ></tiny-input>
            </tiny-form-item>
          </tiny-col>
          <tiny-col :span="4" label-width="100px">
            <tiny-form-item
                :label="$t('searchTable.columns.enablement')"
                prop="id"
            >
              <tiny-input
                  v-model="filterOptions.project"
                  :placeholder="$t('searchTable.form.input')"
              ></tiny-input>
            </tiny-form-item>
          </tiny-col>
          <tiny-col :span="4" label-width="100px">
            <tiny-form-item :label="$t('searchTable.columns.type')">
              <tiny-input
                  v-model="filterOptions.type"
                  :placeholder="$t('searchTable.form.input')"
              ></tiny-input>
            </tiny-form-item>
          </tiny-col>
        </tiny-row>

        <tiny-row :flex="true" justify="end" class="col">
          <tiny-col v-if="setCollapse" :span="4" label-width="100px">
            <tiny-form-item :label="$t('searchTable.columns.study')">
              <tiny-input
                  v-model="filterOptions.address"
                  :placeholder="$t('searchTable.form.input')"
              ></tiny-input>
            </tiny-form-item>
          </tiny-col>
          <tiny-col v-if="setCollapse" :span="4">
            <tiny-form-item :label="$t('searchTable.form.status')">
              <tiny-select
                  v-model="filterOptions.status"
                  :options="statusOptions"
              ></tiny-select>
            </tiny-form-item>
          </tiny-col>
          <tiny-col :span="4">
            <tiny-form-item>
              <div class="search-btn">
                <tiny-button type="primary" @click="reloadGrid">
                  {{ $t( 'searchTable.form.search' ) }}
                </tiny-button>
                <tiny-button @click="handleFormReset">
                  {{ $t( 'searchTable.form.reset' ) }}
                </tiny-button>
              </div>
            </tiny-form-item>
          </tiny-col>
        </tiny-row>
      </tiny-form>
      <div class="bottom-line">
        <hr/>
      </div>
      <tiny-fullscreen
          :teleport="true"
          :page-only="true"
          :z-index="999"
          :fullscreen="fullscreen"
          @update:fullscreen="fullscreen = $event"
      >
        <div class="tiny-fullscreen-scroll">
          <div class="tiny-fullscreen-wrapper">
            <tiny-grid
                ref="taskGrid"
                :fetch-data="fetchDataOption"
                :pager="pagerConfig"
                :loading="loading"
                size="medium"
                :auto-resize="true"
            >
              <template #toolbar>
                <tiny-grid-toolbar>
                  <template #buttons>
                    <div class="btn">
                      <tiny-button @click="toCsvEvent">
                        {{ $t( 'searchTable.operation.import' ) }}
                      </tiny-button>
                      <div class="screen">
                        <img
                            v-if="!fullscreen"
                            src="@/assets/images/screen-out.png"
                            class="screen-image"
                            @click="toggle"
                        />
                        <img
                            v-if="fullscreen"
                            src="@/assets/images/screen-in.png"
                            class="screen-image"
                            @click="toggle"
                        />
                        <span @click="toggle">
                          {{
                            fullscreen
                                ? $t( 'searchTable.collapse.restores' )
                                : $t( 'searchTable.collapse.full' )
                          }}
                        </span>
                      </div>
                    </div>
                  </template>
                </tiny-grid-toolbar>
              </template>

              <tiny-grid-column
                  field="name"
                  :title="$t('searchTable.columns.name')"
                  align="center"
              ></tiny-grid-column>
              <tiny-grid-column
                  field="employeeNo"
                  :title="$t('searchTable.columns.number')"
                  align="center"
              ></tiny-grid-column>
              <tiny-grid-column
                  field="departmentLevel"
                  :title="$t('searchTable.columns.filterType')"
                  align="center"
              ></tiny-grid-column>
              <tiny-grid-column
                  field="department"
                  :title="$t('searchTable.columns.department')"
                  align="center"
              ></tiny-grid-column>
              <tiny-grid-column
                  field="status"
                  :title="$t('searchTable.form.status')"
                  align="center"
              >
                <template #default="{ row }">
                  <span
                      class="status"
                      :class="{
                      'status-closed': row.status === '0',
                      'status-finished': row.status === '1',
                    }"
                  >
                    <span class="status-dot"></span>
                    <span class="status-text">
                      {{ getStatusText( row.status ) }}
                    </span>
                  </span>
                </template>
              </tiny-grid-column>
              <tiny-grid-column
                  field="workbenchName"
                  :title="$t('searchTable.columns.workname')"
                  align="center"
              ></tiny-grid-column>
              <tiny-grid-column
                  field="project"
                  :title="$t('searchTable.columns.enablement')"
                  align="center"
              ></tiny-grid-column>
              <tiny-grid-column
                  field="type"
                  :title="$t('searchTable.columns.type')"
                  align="center"
              ></tiny-grid-column>
              <tiny-grid-column
                  field="address"
                  :title="$t('searchTable.columns.study')"
                  align="center"
              ></tiny-grid-column>
              <tiny-grid-column
                  field="roles"
                  :title="$t('searchTable.columns.role')"
                  align="center"
              ></tiny-grid-column>
              <tiny-grid-column
                  field="lastUpdateUser"
                  :title="$t('searchTable.columns.updatesperson')"
                  align="center"
              ></tiny-grid-column>
              <tiny-grid-column
                  field="createTime"
                  :title="$t('searchTable.columns.createdTime')"
                  align="center"
              ></tiny-grid-column>
              <tiny-grid-column
                  :title="$t('searchTable.columns.operations')"
                  align="center"
              >
                <template  v-slot="data">
                  <a class="operation" @click="handleDelete(data.row.id)">
                    {{ $t( 'searchTable.columns.operations.delete' ) }}
                  </a>
                </template>
              </tiny-grid-column>
            </tiny-grid>
          </div>
        </div>
      </tiny-fullscreen>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, reactive, toRefs} from 'vue';
import {
  Grid as TinyGrid,
  GridColumn as TinyGridColumn,
  GridToolbar as TinyGridToolbar,
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Button as TinyButton,
  Row as TinyRow,
  Col as TinyCol,
  Select as TinySelect,
  Pager as TinyPager,
  Fullscreen as TinyFullscreen, Modal,
} from '@opentiny/vue';
import {
  queryEmployeeList,
  deleteEmployee,
  QueryTaskParmas,
} from '@/api/list';

// 初始化请求数据
interface FilterOptions {
  id: string;
  department: string;
  roles: string;
  dateRange: Array<string | Date>;
  name: string;
  status: string;
  workbenchName: string;
  project: string;
  type: string;
  address: string;
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

let tableData = ref([]);
const taskGrid = ref();
const {loading, filterOptions} = toRefs(state);

const statusOptions = [
  {
    value: '0',
    label: 'offline',
  },
  {
    value: '1',
    label: 'online',
  },
  {
    value: '2',
    label: 'doing',
  },
];

// 请求数据接口方法
async function fetchData(
    params: QueryTaskParmas = {
      pageIndex: 1,
      pageSize: 10,
      status: '',
    }
) {
  const {...rest} = filterOptions.value;
  const queryParmas = {
    searchInfo:rest,
    ...params,
  };

  state.loading = true;
  try {
    const {data} = await queryEmployeeList(queryParmas);
    const {data:list, total} = data;
    tableData.value = list;
    return {
      result: list,
      page: {total},
    };
  } finally {
    state.loading = false;
  }
}

const fetchDataOption = reactive({
  api: ({page}: any) => {
    const {currentPage, pageSize} = page;

    return fetchData({
      pageIndex: currentPage,
      pageSize,
    });
  },
});
const handleDelete = (id:string)=>{
  deleteEmployee(id).then((res)=>{
    Modal.message({
      message: '已删除',
      status: 'success',
    });
  })
}
function getStatusText(status: string) {
  return statusOptions.find(({value}) => status === value)?.label || '';
}

// form的button
function reloadGrid() {
  taskGrid?.value.handleFetch('reload');
  fetchData();
}

function handleFormReset() {
  state.filterOptions = {} as FilterOptions;
  reloadGrid();
}

const setCollapse = ref(true);

function collapse() {
  setCollapse.value = false;
}

function extend() {
  setCollapse.value = true;
}

// 导出
const toCsvEvent = () => {
  taskGrid.value.exportCsv({
    filename: 'table.csv',
    original: true,
    isHeader: false,
    data: tableData.value,
  });
};

// 全屏缩放设置
const fullscreen = ref(false);
const toggle = () => {
  fullscreen.value = !fullscreen.value;
};
</script>

<style scoped lang="less">
@import './search-table.less';
</style>
