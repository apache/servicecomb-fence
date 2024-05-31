<template>
  <tiny-layout>
    <tiny-form
      ref="summarizeRef"
      :model="state.filterOptions"
      :rules="rules"
      label-width="100px"
      :label-align="true"
      label-position="left"
      size="small"
    >
      <tiny-row :flex="true" justify="left">
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item :label="$t('stepForm.sum.self')" prop="summarize">
            <tiny-input
              v-model="state.filterOptions.summarize"
              :disabled="disabled"
              type="textarea"
            ></tiny-input>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>
    </tiny-form>
  </tiny-layout>
</template>

<script lang="ts" setup>
  import { ref, reactive, computed, defineExpose, toRefs } from 'vue';
  import {
    Layout as TinyLayout,
    Form as TinyForm,
    FormItem as TinyFormItem,
    Row as TinyRow,
    Col as TinyCol,
    Input as TinyInput,
  } from '@opentiny/vue';

  interface FilterOptions {
    summarize: string;
  }

  const props = defineProps({
    summationPlay: Boolean,
  });

  const { summationPlay } = toRefs(props);

  // 加载效果
  const state = reactive<{
    filterOptions: FilterOptions;
  }>({
    filterOptions: {} as FilterOptions,
  });

  // 初始化请求数据
  const summarizeRef = ref();
  const disabled = ref(false);
  // 校验规则
  const rulesType = {
    required: true,
    trigger: 'blur',
  };
  const rules = computed(() => {
    return {
      summarize: summationPlay.value ? [rulesType] : '',
    };
  });

  const summarizeValid = () => {
    let sumValid = false;
    summarizeRef.value.validate((valid: boolean) => {
      if (valid) {
        disabled.value = true;
      }
      sumValid = valid;
    });
    return sumValid;
  };

  const summarizeReset = () => {
    disabled.value = false;
    state.filterOptions = {} as FilterOptions;
  };

  defineExpose({
    summarizeValid,
    summarizeReset,
  });
</script>

<style scoped lang="less"></style>
