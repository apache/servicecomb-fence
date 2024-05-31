<template>
  <tiny-layout>
    <tiny-form
      ref="objective"
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
            :label="$t('baseForm.form.label.culture')"
            prop="culture"
          >
            <div>
              <tiny-radio v-model="filterOptions.culture" label="1">{{
                $t('baseForm.form.label.yes')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.culture" label="2">{{
                $t('baseForm.form.label.no')
              }}</tiny-radio>
            </div>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>

      <tiny-row :flex="true" justify="left">
        <tiny-col :span="8" label-width="100px">
          <tiny-form-item
            :label="$t('baseForm.form.label.develop')"
            prop="develop"
          >
            <div>
              <tiny-radio v-model="filterOptions.develop" label="1">{{
                $t('baseForm.form.label.developone')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.develop" label="2">{{
                $t('baseForm.form.label.developtwo')
              }}</tiny-radio>
            </div>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>

      <tiny-row :flex="true" justify="left">
        <tiny-col :span="8" label-width="100px">
          <tiny-form-item
            :label="$t('baseForm.form.label.effective')"
            prop="effective"
          >
            <div>
              <tiny-radio v-model="filterOptions.effective" label="1">{{
                $t('baseForm.form.label.effectiveone')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.effective" label="2">{{
                $t('baseForm.form.label.effectivetwo')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.effective" label="3">{{
                $t('baseForm.form.label.effectivethree')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.effective" label="4">{{
                $t('baseForm.form.label.effectivefour')
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
    culture: string;
    develop: string;
    effective: string;
  }

  // 加载效果
  const state = reactive<{
    filterOptions: FilterOptions;
  }>({
    filterOptions: {
      culture: '1',
      develop: '1',
      effective: '1',
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
      culture: [rulesType],
      develop: [rulesType],
      effective: [rulesType],
    };
  });

  const objective = ref();

  const objectiveReset = () => {
    state.filterOptions = {
      culture: '1',
      develop: '1',
      effective: '1',
    } as FilterOptions;
  };

  defineExpose({
    objectiveReset,
  });
</script>

<style scoped lang="less"></style>
