<template>
  <div class="container-del">
    <h3>{{ $t('menu.cloud.del') }}</h3>
    <div class="contain">
      <img src="@/assets/images/deleted.png" alt="deleted" />
      <div class="contain-main">
        <div>
          {{ $t('menu.cloud.askDel') }}
          <b>{{ $t('menu.cloud.askContracts') }}</b
          >？
        </div>
        <div class="title"
          >{{ $t('menu.contracts.name') }}&nbsp;{{ props.init.name }}</div
        >
        <div>
          {{ $t('menu.cloud.askInput') }}
          <span class="del">DELETE</span>
          {{ $t('menu.cloud.askSure') }}
        </div>
        <tiny-input v-model="value"></tiny-input>
        <div class="btn">
          <tiny-button type="danger" @click="handleSubmit">
            {{ $t('menu.cloud.sure') }}
          </tiny-button>
          <tiny-button @click="handleCancel">
            {{ $t('menu.cloud.cancel') }}
          </tiny-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, defineEmits, defineProps } from 'vue';
  import { useI18n } from 'vue-i18n';
  import {
    Input as TinyInput,
    Button as TinyButton,
    Modal,
  } from '@opentiny/vue';

  // 注册
  const { t } = useI18n();
  const value = ref('');
  const props = defineProps({
    init: Object as any,
  });

  // 定义派发事件
  const emit = defineEmits(['myclick', 'mycancel']);

  const handleCancel = () => {
    emit('mycancel');
  };

  // 注册提交
  const handleSubmit = () => {
    if (value.value.trim() === 'DELETE') {
      Modal.message({
        message: t('menu.cloud.delpass'),
        status: 'success',
      });
      emit('myclick');
    } else {
      Modal.message({
        message: t('login.form.registerError'),
        status: 'warning',
      });
    }
  };
</script>

<style scoped lang="less">
  .container-del {
    h3 {
      height: 25px;
      color: #202e54;
      font-weight: bolder;
      font-size: 18px;
      line-height: 25px;
      text-align: left;
    }
  }

  .contain {
    display: flex;
    justify-content: space-around;
    margin-top: 10%;

    img {
      width: 38px;
      height: 33px;
    }

    .contain-main {
      width: 430px;
    }

    .btn {
      margin-top: 6%;

      :deep(.tiny-button) {
        width: 100px;
        height: 36px;
        border-radius: 4px;
      }
    }

    .del {
      color: red;
    }

    div {
      margin-bottom: 3%;
    }
  }
</style>
