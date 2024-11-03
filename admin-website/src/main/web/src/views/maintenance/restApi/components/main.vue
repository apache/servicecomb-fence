<template>
  <div class="main">
    <div class="main-title">
      <span></span>
      <p>{{ $t('maintenance.restapi.main.title') }}</p>
    </div>
    <div class="main-content">
      <div class="main-content-method-and-url">
        <tiny-select v-model="state.method" class="url-select"
           :options="state.methodList"></tiny-select>
        <tiny-input v-model="state.url" class="url-input"></tiny-input>
        <tiny-button class="url-button" type="primary" @click="sendRequest">{{ $t('maintenance.restapi.main.send') }}</tiny-button>
      </div>

      <tiny-tabs v-model="state.activeTab">
      <tiny-tab-item title="Query Params" name="query">
      <div class="main-content-params">
      <div class="main-content-params-table">
        <tiny-grid :data="state.params">
          <tiny-grid-column field="" title="">
              <template #default="data">
                <tiny-checkbox v-model="data.row.checked"></tiny-checkbox>
              </template>
          </tiny-grid-column>
          <tiny-grid-column field="Key" title="Key">
              <template #default="data">
                <tiny-input v-model="data.row.key" @input="onQueryInputChange(data.row.id)"></tiny-input>
              </template>
          </tiny-grid-column>
          <tiny-grid-column field="Value" title="Value">
              <template #default="data">
                <tiny-input v-model="data.row.value"></tiny-input>
              </template>
          </tiny-grid-column>
          <tiny-grid-column field="" title="">
              <template #default="data">
                <tiny-button @click="deleteQueryRow(data.row.id)">{{ $t('maintenance.restapi.main.deleteRow') }}</tiny-button>
              </template>
          </tiny-grid-column>
        </tiny-grid>
      </div>
      </div>
      </tiny-tab-item>

      <tiny-tab-item title="Header Params" name="header">
      <div class="main-content-params">
      <div class="main-content-params-table">
        <tiny-grid :data="state.headers">
          <tiny-grid-column field="" title="">
              <template #default="data">
                <tiny-checkbox v-model="data.row.checked"></tiny-checkbox>
              </template>
          </tiny-grid-column>
          <tiny-grid-column field="Key" title="Key">
              <template #default="data">
                <tiny-input v-model="data.row.key" @input="onHeaderInputChange(data.row.id)"></tiny-input>
              </template>
          </tiny-grid-column>
          <tiny-grid-column field="Value" title="Value">
              <template #default="data">
                <tiny-input v-model="data.row.value"></tiny-input>
              </template>
          </tiny-grid-column>
          <tiny-grid-column field="" title="">
              <template #default="data">
                <tiny-button @click="deleteHeaderRow(data.row.id)">{{ $t('maintenance.restapi.main.deleteRow') }}</tiny-button>
              </template>
          </tiny-grid-column>
        </tiny-grid>
      </div>
      </div>
      </tiny-tab-item>

      <tiny-tab-item title="Body" name="body">
      <div class="main-content-params">
        <div class="main-content-params-text">
          <div class="main-textarea">
          <tiny-input type="textarea" v-model="state.body" placeholder=""
            :autosize="{ minRows: 20, maxRows: 100 }" ></tiny-input>
          </div>
        </div>
      </div>
      </tiny-tab-item>
      </tiny-tabs>

      <tiny-divider></tiny-divider>
      <div class="main-content-response">
        <tiny-input v-model="state.response.status" disabled label="Status Code: "></tiny-input>
        <div class="main-textarea">
        <tiny-input type="textarea" v-model="state.response.data" disabled placeholder=""
           :autosize="{ minRows: 20, maxRows: 100 }"></tiny-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Button as TinyButton,
  Row as TinyRow,
  Col as TinyCol,
  DatePicker as TinyDatePicker,
  Grid as TinyGrid, GridColumn as TinyGridColumn, GridToolbar as TinyGridToolbar,
  Select as TinySelect, Option as TinyOption,
  Checkbox as TinyCheckbox, Divider as TinyDivider,
  Tabs as TinyTabs, TabItem as TinyTabItem,
} from '@opentiny/vue';

const state = reactive({
  method: "GET",
  methodList: [{value: "GET", label: "GET"},{value: "POST", label: "POST"},
                 {value: "PUT", label: "PUT"},{value: "DELETE", label: "DELETE"}],
  url: "",
  params: [{id: 0, key: "", value: "", checked: false}],
  headers: [{id: 0, key: "", value: "", checked: false}],
  body: "",
  activeTab: "query",
  response: {},
});

const onQueryInputChange = (id)  => {
  state.params.forEach((element, index) => {
    if (element.id === id) {
      element.checked = true
    }
  });

  if (state.params[state.params.length - 1].key !== '') {
    state.params.push({id: state.params.length, key: "", value: "", checked: false});
  }
};

const onHeaderInputChange = (id)  => {
  state.headers.forEach((element, index) => {
    if (element.id === id) {
      element.checked = true
    }
  });

  if (state.headers[state.headers.length - 1].key !== '') {
    state.headers.push({id: state.headers.length, key: "", value: "", checked: false});
  }
};

const deleteQueryRow = (id)  => {
  state.params.splice(id, 1);
};

const deleteHeaderRow = (id)  => {
  state.headers.splice(id, 1);
};

const sendRequest = () => {
  const params = {};
  state.params.forEach((element, index) => {
    if (element.key !== "" && element.checked === true) {
      params[element.key] = element.value;
    }
  });
  const headers = {};
  state.headers.forEach((element, index) => {
    if (element.key !== "" && element.checked === true) {
      headers[element.key] = element.value;
    }
  });

  axios({
    url: state.url,
    method: state.method,
    headers: headers,
    params: params,
    data: state.body
  })
  .then(function(data) {
    state.response.status = "Response Success";
    state.response.data = JSON.stringify(data);
  });
}
</script>

<style scoped lang="less"></style>

<style lang="less" scoped>
.main {
  &-title {
    span {
      display: inline-block;
      position: relative;
      border-width: 0px;
      left: 0px;
      top: 4px;
      width: 6px;
      height: 20px;
      background: inherit;
      background-color: rgba(37, 97, 239, 1);
      border: none;
      border-radius: 8px;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;
    }

    p {
      margin-left: 10px;
      display: inline-block;
      font-weight: 500;
      font-style: normal;
      font-size: 18px;
      color: rgba(51, 51, 51, 0.898039215686275);
    }
  }

  &-content {
    .main-content-method-and-url {
      display: flex;
      gap: 10px;

      .url-select {
        width: 10%
      }
      .url-input {
        width: 80%
      }
      .url-button {
        width: 10%
      }
    }

    .main-content-params {
      &-table {
          width: 95%;
          background-color: saddlebrown;
      }
    }
  }
}

.tiny-textarea {
  height: 200px;
}
</style>
