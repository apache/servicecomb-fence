<template>
  <div>
    <div class="train-select">
      <h3>{{ $t('work.index.train') }}</h3>
      <tiny-select
        v-model="state.project"
        :placeholder="$t('baseForm.form.label.placeholder')"
        filterable
      >
        <tiny-option
          v-for="item in state.options"
          :key="item.value"
          :label="$t(item.label)"
          :value="item.value"
        ></tiny-option>
      </tiny-select>
    </div>

    <tiny-layout>
      <tiny-row :flex="true" justify="center" class="margin-bottom">
        <tiny-col :span="3">
          <div class="col">
            <div>
              <span class="font-pass">{{ number[0] }}</span>
              <span>&nbsp;/ {{ $t('work.index.Person') }}</span>
            </div>
            <span>{{ $t('work.index.assign') }}</span>
          </div>
        </tiny-col>
        <div class="divider"></div>
        <tiny-col :span="3">
          <div class="col">
            <div>
              <span class="font-pass">{{ number[1] }}</span>
              <span>&nbsp;/ {{ $t('work.index.Person') }}</span>
            </div>
            <span>{{ $t('work.index.prepare') }}</span>
          </div>
        </tiny-col>
        <div class="divider"></div>
        <tiny-col :span="3">
          <div class="col">
            <div>
              <span class="font-pass">{{ number[2] }}</span>
              <span>&nbsp;/ {{ $t('work.index.Person') }}</span>
            </div>
            <span>{{ $t('work.index.open') }}</span>
          </div>
        </tiny-col>
        <div class="divider"></div>
        <tiny-col :span="3">
          <div class="col">
            <div>
              <span class="font-pass">{{ number[3] }}</span>
              <span>&nbsp;/ {{ $t('work.index.Person') }}</span>
            </div>
            <span>{{ $t('work.index.classes') }}</span>
          </div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script lang="ts" setup>
  import {
    Layout as TinyLayout,
    Row as TinyRow,
    Col as TinyCol,
    Select as TinySelect,
    Option as TinyOption,
    Loading,
  } from '@opentiny/vue';
  import { reactive, onMounted, watch, ref } from 'vue';
  import { getUserTrain, getUserChange } from '@/api/board';

  // 加载效果
  const state = reactive<{
    loading: any;
    options: any;
    project: string;
  }>({
    loading: null,
    options: [] as any,
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
      const { data } = await getUserTrain();
      state.options = data.options;
    } finally {
      state.loading.close();
    }
  };

  // 初始化请求数据
  onMounted(() => {
    fetchData();
  });

  // 切换数据
  let number = ref([]);
  const fetchSelect = async (param: string) => {
    const { data } = await getUserChange(param);
    number.value = data;
  };

  // 切换数据
  watch(
    state,
    (newValue, oldValue) => {
      fetchSelect(newValue.project);
    },
    { immediate: true }
  );
</script>

<style scoped lang="less">
  .margin-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 98.5%;
    height: 150px;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  }

  .margin-bottom:hover {
    box-shadow: 0 3px 10px 0 rgb(64 98 225 / 45%);
  }

  .col {
    text-align: center;
  }

  .col > span {
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    text-align: center;
  }

  .col > span:last-child {
    color: #4e5969;
    font-weight: normal;
    font-size: 18px;
    line-height: 14px;
  }

  .divider {
    width: 1px;
    height: 41px;
    margin: 0 20px;
    background: #7b7e84;
    opacity: 0.3;
  }

  .font {
    color: #575d6c;
    font-weight: 600;
    font-size: 30px;
    font-family: PingFang SC, PingFang SC-PingFang SC;
    line-height: 36px;
    text-align: left;
  }

  .font-pass {
    .font();
  }

  .font-fail {
    .font();

    color: #2f5bea;
  }

  .train-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 8px;

    h3 {
      width: 20%;
      color: #575d6c;
      font-size: 16px;
      line-height: 14px;
      text-align: left;
    }

    div {
      width: 323px;
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    }

    :deep(.tiny-input) {
      input {
        border-radius: 17px;
      }
    }
  }
  @media (max-width: @screen-md) {
    .font-pass {
      font-size: 24px;
    }

    .col > span:last-child {
      font-size: 10px;
    }
  }
</style>
