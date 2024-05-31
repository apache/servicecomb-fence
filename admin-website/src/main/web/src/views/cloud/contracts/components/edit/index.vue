<template>
  <div class="container-edit">
    <h3>{{ $t('menu.cloud.edit') }}</h3>
    <div class="contain">
      <tiny-form
        ref="ruleForm"
        :model="createData"
        :rules="rules"
        :validate-on-rule-change="isvalidate"
        :label-align="true"
        label-position="left"
        label-width="110px"
      >
        <tiny-row :flex="true">
          <tiny-col>
            <tiny-form-item :label="$t('menu.cloud.name')" prop="name">
              <div>
                <tiny-input v-model="createData.name"></tiny-input>
                <div class="tip">{{ $t('menu.cloud.tip') }}</div>
              </div>
            </tiny-form-item>
          </tiny-col>
        </tiny-row>
        <tiny-row :flex="true">
          <tiny-col>
            <tiny-form-item :label="$t('menu.cloud.customer')" prop="customer">
              <tiny-input v-model="createData.customer"></tiny-input>
            </tiny-form-item>
          </tiny-col>
        </tiny-row>
        <tiny-row :flex="true">
          <tiny-col>
            <tiny-form-item
              :label="$t('menu.cloud.description')"
              prop="description"
            >
              <tiny-input
                v-model="createData.description"
                type="textarea"
              ></tiny-input>
            </tiny-form-item>
          </tiny-col>
        </tiny-row>
        <tiny-row :flex="true">
          <tiny-col>
            <tiny-form-item class="btn">
              <tiny-button type="primary" @click="handleSubmit">{{
                $t('menu.cloud.sure')
              }}</tiny-button>
              <tiny-button @click="handleCancel">{{
                $t('menu.cloud.cancel')
              }}</tiny-button>
            </tiny-form-item>
          </tiny-col>
        </tiny-row>
      </tiny-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {
    ref,
    reactive,
    computed,
    defineEmits,
    defineExpose,
    defineProps,
  } from 'vue';
  import { useI18n } from 'vue-i18n';
  import {
    Form as TinyForm,
    FormItem as TinyFormItem,
    Row as TinyRow,
    Col as TinyCol,
    Input as TinyInput,
    Button as TinyButton,
    Modal,
  } from '@opentiny/vue';

  // 注册
  const { t } = useI18n();
  const ruleForm = ref();
  const props = defineProps({
    // eslint-disable-next-line vue/require-prop-types
    init: {} as any,
  });

  // 校验格式
  const validatePass = (
    rule: any,
    value: string,
    callback: (arg0: Error | undefined) => void
  ) => {
    // eslint-disable-next-line no-useless-escape
    const nameRe =
      /^([a-zA-Z0-9]|[\u4e00-\u9fa5])([a-zA-Z0-9._:()（）、：\/-]|[\u4e00-\u9fa5]){2,254}$/; // eslint-disable-line
    if (!nameRe.test(value)) {
      callback(new Error(t('menu.cloud.tip')));
    } else {
      if (ruleForm.value.password !== '') {
        ruleForm.value.validateField('password');
      }
      callback(undefined);
    }
  };

  let createData = reactive({
    name: props.init.name,
    customer: props.init.customer,
    description: props.init.description,
  });

  let isvalidate = ref(true);

  const rules = computed(() => {
    return {
      name: [
        {
          required: true,
          message: t('menu.cloud.delpass'),
          trigger: 'blur',
        },
        { validator: validatePass, trigger: 'blur' },
      ],
      customer: [
        {
          required: false,
          trigger: 'blur',
        },
      ],
      description: [
        {
          required: false,
          trigger: 'change',
        },
      ],
    };
  });

  // 定义派发事件
  const emit = defineEmits(['myclick', 'mycancel']);

  const resultData = () => {
    return createData;
  };

  const handleCancel = () => {
    emit('mycancel');
  };

  // 注册提交
  const handleSubmit = () => {
    ruleForm.value.validate((e: any) => {
      if (e) {
        let data: any = reactive({
          username: createData.name,
        });
        Modal.message({
          message: t('menu.cloud.editpass'),
          status: 'success',
        });
        emit('myclick');
      } else {
        Modal.message({
          message: t('login.form.registerError'),
          status: 'warning',
        });
      }
    });
  };

  defineExpose({
    resultData,
  });
</script>

<style scoped lang="less">
  .container-edit {
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
    width: 90%;
    margin-top: 10%;
    color: var(--ti-common-color-text-secondary);
    font-size: var(--ti-default-font-size);
    line-height: var(--ti-formfield-item-required-label-line-height);

    .tip {
      color: #999;
      font-size: var(--ti-common-font-size-base);
    }

    .btn {
      margin-top: 6%;

      :deep(.tiny-button) {
        width: 100px;
        height: 36px;
        border-radius: 4px;
      }
    }

    :deep(.row-flex) {
      padding-bottom: 20px;
    }
  }
</style>
