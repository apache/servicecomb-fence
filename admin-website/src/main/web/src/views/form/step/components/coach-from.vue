<template>
  <tiny-layout>
    <tiny-form
      ref="coachFormRef"
      :model="state.filterOptions"
      :rules="rules"
      label-width="150px"
      :label-align="true"
      label-position="left"
      size="small"
    >
      <tiny-row :flex="true" justify="left">
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item :label="$t('stepForm.coach.culture')" prop="sector">
            <tiny-input
              v-model="state.filterOptions.sector"
              :disabled="disabled"
              :placeholder="$t('searchTable.form.input')"
            ></tiny-input>
          </tiny-form-item>
        </tiny-col>
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item
            :label="$t('stepForm.coach.position')"
            prop="position"
          >
            <tiny-select
              v-model="state.filterOptions.position"
              :disabled="disabled"
              :placeholder="$t('baseForm.form.label.placeholder')"
              multiple
            >
              <tiny-option
                v-for="item in (projectData?.position as any)"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></tiny-option>
            </tiny-select>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>

      <tiny-row :flex="true" justify="left">
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item label="HR" prop="hr">
            <tiny-select
              v-model="state.filterOptions.hr"
              :disabled="disabled"
              :placeholder="$t('baseForm.form.label.placeholder')"
              multiple
            >
              <tiny-option
                v-for="item in (projectData?.HR as any)"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></tiny-option>
            </tiny-select>
          </tiny-form-item>
        </tiny-col>
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item :label="$t('stepForm.coach.mentor')" prop="teacher">
            <tiny-select
              v-model="state.filterOptions.teacher"
              :disabled="disabled"
              :placeholder="$t('baseForm.form.label.placeholder')"
              multiple
            >
              <tiny-option
                v-for="item in (projectData?.mentor as any)"
                :key="item"
                :label="item"
                :value="item"
              ></tiny-option>
            </tiny-select>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>

      <tiny-row :flex="true" justify="left">
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item
            :label="$t('stepForm.coach.startTime')"
            prop="startTime"
          >
            <tiny-date-picker
              v-model="state.filterOptions.startTime"
              :disabled="disabled"
              :placeholder="$t('searchTable.form.input')"
            ></tiny-date-picker>
          </tiny-form-item>
        </tiny-col>
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item :label="$t('stepForm.coach.endTime')" prop="endTime">
            <tiny-date-picker
              v-model="state.filterOptions.endTime"
              :disabled="disabled"
              :placeholder="$t('searchTable.form.input')"
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
    Row as TinyRow,
    Col as TinyCol,
    Input as TinyInput,
    DatePicker as TinyDatePicker,
    Modal,
  } from '@opentiny/vue';

  interface FilterOptions {
    sector: string;
    position: Array<object>;
    hr: string;
    teacher: Array<object>;
    startTime: string;
    endTime: string;
  }

  // 父组件传值
  const props = defineProps({
    projectData: Object,
    coachPlay: Boolean,
  });

  const { coachPlay } = toRefs(props);

  // 加载效果
  const state = reactive<{
    filterOptions: FilterOptions;
  }>({
    filterOptions: {} as FilterOptions,
  });

  // 初始化请求数据
  const { t } = useI18n();
  const coachFormRef = ref();
  const disabled = ref(false);

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
      sector: coachPlay.value ? [rulesType] : '',
      position: coachPlay.value ? [rulesSelect] : '',
      hr: coachPlay.value ? [rulesSelect] : '',
      teacher: coachPlay.value ? [rulesSelect] : '',
      startTime: coachPlay.value ? [rulesType] : '',
      endTime: coachPlay.value ? [rulesType] : '',
    };
  });

  const coachValid = () => {
    let coachValidate = false;
    coachFormRef.value.validate((valid: boolean) => {
      if (valid) {
        disabled.value = true;
      }
      coachValidate = valid;
    });

    return coachValidate;
  };

  const coachReset = () => {
    disabled.value = false;
    state.filterOptions = {} as FilterOptions;
  };

  defineExpose({
    coachValid,
    coachReset,
  });
</script>

<style scoped lang="less">
  :deep(.tiny-row) {
    margin-bottom: 15px;
  }
</style>
