<template>
  <tiny-layout>
    <tiny-form
      ref="directorFormRef"
      :model="state.filterOptions"
      :rules="rules"
      label-width="150px"
      :label-align="true"
      label-position="left"
      size="small"
    >
      <tiny-row :flex="true" justify="left">
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item
            :label="$t('stepForm.dire.supervisor')"
            prop="director"
          >
            <tiny-select
              v-model="state.filterOptions.director"
              :disabled="disabled"
              :placeholder="$t('baseForm.form.label.placeholder')"
              multiple
            >
              <tiny-option
                v-for="item in (projectData?.director as any)"
                :key="item"
                :label="$t(item)"
                :value="item"
              ></tiny-option>
            </tiny-select>
          </tiny-form-item>
        </tiny-col>
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item :label="$t('stepForm.dire.remarks')" prop="remark">
            <tiny-input
              v-model="state.filterOptions.remark"
              :disabled="disabled"
            ></tiny-input>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>

      <tiny-row :flex="true" justify="left">
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item
            :label="$t('stepForm.dire.startTime')"
            prop="startTime"
          >
            <tiny-date-picker
              v-model="state.filterOptions.startTime"
              :disabled="disabled"
            ></tiny-date-picker>
          </tiny-form-item>
        </tiny-col>
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item :label="$t('stepForm.dire.endTime')" prop="endTime">
            <tiny-date-picker
              v-model="state.filterOptions.endTime"
              :disabled="disabled"
              @blur="handleBlur"
            ></tiny-date-picker>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>
    </tiny-form>
  </tiny-layout>
</template>

<script lang="ts" setup>
  import {
    ref,
    reactive,
    defineProps,
    computed,
    defineExpose,
    toRefs,
  } from 'vue';
  import { useI18n } from 'vue-i18n';
  import {
    Select as TinySelect,
    Option as TinyOption,
    Layout as TinyLayout,
    Form as TinyForm,
    FormItem as TinyFormItem,
    Input as TinyInput,
    Row as TinyRow,
    Col as TinyCol,
    DatePicker as TinyDatePicker,
    Modal,
  } from '@opentiny/vue';

  interface FilterOptions {
    director: Array<object>;
    remark: string;
    startTime: string;
    endTime: string;
  }

  // 父组件传值
  const props = defineProps({
    projectData: Object,
    directorPlay: Boolean,
  });

  const { directorPlay } = toRefs(props);

  // 加载效果
  const state = reactive<{
    filterOptions: FilterOptions;
  }>({
    filterOptions: {} as FilterOptions,
  });

  // 初始化请求数据
  const { t } = useI18n();
  const directorFormRef = ref();
  const disabled = ref(false);
  // 校验规则
  const rulesType = {
    required: true,
    trigger: 'blur',
  };
  const rulesSelect = {
    required: true,
    message: '必选',
    trigger: 'blur',
  };
  const rules = computed(() => {
    return {
      director: directorPlay.value ? [rulesSelect] : '',
      remark: directorPlay.value ? [rulesType] : '',
      startTime: directorPlay.value ? [rulesType] : '',
      endTime: directorPlay.value ? [rulesType] : '',
    };
  });

  const handleBlur = () => {
    const start = new Date(
      JSON.parse(JSON.stringify(state.filterOptions.startTime))
    ).getTime();
    const end = new Date(
      JSON.parse(JSON.stringify(state.filterOptions.endTime))
    ).getTime();
    if (end < start) {
      state.filterOptions.endTime = '';
      Modal.message({
        message: t('userInfo.time.message'),
        status: 'error',
      });
    }
  };

  const directorValid = () => {
    let directorValidate = false;
    directorFormRef.value.validate((valid: boolean) => {
      if (valid) {
        disabled.value = true;
      }
      directorValidate = valid;
    });
    return directorValidate;
  };

  const directorReset = () => {
    disabled.value = false;
    state.filterOptions = {} as FilterOptions;
  };

  defineExpose({
    directorValid,
    directorReset,
  });
</script>

<style scoped lang="less"></style>
