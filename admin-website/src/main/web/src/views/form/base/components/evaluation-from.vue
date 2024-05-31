<template>
  <tiny-layout>
    <tiny-form
      ref="evaluationRef"
      :rules="rules"
      :mode="filterOptions"
      :responsive-layout="true"
      label-width="120px"
      :label-align="true"
      label-position="left"
      size="small"
    >
      <tiny-row :flex="true" justify="left">
        <tiny-col :span="8" label-width="100px">
          <tiny-form-item
            :label="$t('baseForm.form.label.wholeconfirm')"
            prop="wholeconfirm"
          >
            <div>
              <tiny-radio v-model="filterOptions.wholeconfirm" label="1">
                {{ $t('baseForm.form.label.yes') }}
              </tiny-radio>
              <tiny-radio v-model="filterOptions.wholeconfirm" label="2">
                {{ $t('baseForm.form.label.no') }}
              </tiny-radio>
            </div>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>
      <tiny-row :flex="true" justify="left">
        <tiny-col :span="8" label-width="100px">
          <tiny-form-item
            :label="$t('baseForm.form.label.evaluation')"
            prop="overallevaluation"
          >
            <div>
              <tiny-radio v-model="filterOptions.overallevaluation" label="1">{{
                $t('baseForm.form.label.evaluationyes')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.overallevaluation" label="2">{{
                $t('baseForm.form.label.evaluationno')
              }}</tiny-radio>
            </div>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>
    </tiny-form>
  </tiny-layout>
</template>

<script lang="ts" setup>
  import { reactive, toRefs, computed, ref, defineExpose } from 'vue';
  import {
    Layout as TinyLayout,
    Form as TinyForm,
    FormItem as TinyFormItem,
    Row as TinyRow,
    Col as TinyCol,
    Radio as TinyRadio,
  } from '@opentiny/vue';

  interface FilterOptions {
    wholeconfirm: string;
    overallevaluation: string;
  }

  // 加载效果
  const state = reactive<{
    filterOptions: FilterOptions;
  }>({
    filterOptions: {
      wholeconfirm: '1',
      overallevaluation: '1',
    } as FilterOptions,
  });
  const { filterOptions } = toRefs(state);

  // 校验规则
  const rulesType = {
    required: true,
    trigger: 'blur',
  };
  const rules = computed(() => {
    return {
      wholeconfirm: [rulesType],
      overallevaluation: [rulesType],
    };
  });

  const evaluationRef = ref();

  const evaluationReset = () => {
    state.filterOptions = {
      wholeconfirm: '1',
      overallevaluation: '1',
    } as FilterOptions;
  };

  defineExpose({
    evaluationReset,
  });
</script>

<style scoped lang="less"></style>
