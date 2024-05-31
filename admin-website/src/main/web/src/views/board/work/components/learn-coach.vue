<template>
  <div class="coach-select">
    <h3>{{ $t('work.index.coach') }}</h3>
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
  <div>
    <tiny-layout>
      <tiny-row :flex="true" justify="center">
        <tiny-col :span="8">
          <div class="col">
            <div class="left">
              <div class="left-content">
                <span class="num">{{ number[0] }}</span>
                <span>&nbsp;/ {{ $t('work.index.Person') }}</span>
              </div>
              <div class="left-title">{{ $t('work.index.trainees') }}</div>
            </div>
            <div class="divider"></div>
            <div class="right">
              <img src="@/assets/images/coach-1.png" />
            </div>
          </div>
        </tiny-col>
        <tiny-col :span="8">
          <div class="col">
            <div class="left">
              <div class="left-content">
                <span class="num">{{ number[1] }}</span>
                <span>&nbsp;/ {{ $t('work.index.Person') }}</span>
              </div>
              <div class="left-title">{{ $t('work.index.coachNum') }}</div>
            </div>
            <div class="divider"></div>
            <div class="right">
              <img src="@/assets/images/coach-2.png" />
            </div>
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
  import { getUserData, getUserChange } from '@/api/board';

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
      const { data } = await getUserData();
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
  .col {
    display: flex;
    justify-content: space-around;
    min-height: 150px;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  }

  .col:hover {
    box-shadow: 0 3px 10px 0 rgb(64 98 225 / 45%);
  }

  .num {
    color: #575d6c;
    font-weight: 600;
    font-size: 30px;
    font-family: PingFang SC, PingFang SC-PingFang SC;
    line-height: 36px;
    text-align: left;
  }

  .left {
    width: 50%;
  }

  .right {
    width: 50%;
  }

  .left,
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .left-title {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4e5969;
    font-weight: normal;
    font-size: 18px;
    line-height: 14px;
  }

  .left-content {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 15px;
  }

  .divider {
    width: 1px;
    height: 41px;
    margin: 0 20px;
    margin-top: 8%;
    background: #7b7e84;
    opacity: 0.3;
  }

  .coach-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 8px;

    h3 {
      width: 20%;
      color: #575d6c;
      font-size: 16px;
      line-height: 14px;
      text-align: left;
    }

    div {
      width: 323px;
    }

    :deep(.tiny-input) {
      background-color: #f5f6f7;

      input {
        border-radius: 17px;
      }
    }
  }
  // responsive
  @media (max-width: @screen-md) {
    .num {
      font-size: 24px;
    }

    .left-title {
      font-size: 10px;
    }
  }
</style>
