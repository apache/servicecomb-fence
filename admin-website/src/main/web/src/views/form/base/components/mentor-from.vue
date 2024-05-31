<template>
  <tiny-layout>
    <tiny-form
      ref="mentorRef"
      :rules="rules"
      :mode="filterOptions"
      :responsive-layout="true"
      label-width="220px"
      :label-align="true"
      size="small"
    >
      <tiny-row :flex="true" justify="left">
        <tiny-col :span="8" label-width="100px">
          <tiny-form-item
            :label="$t('baseForm.form.label.mentor')"
            prop="mentor"
          >
            <div>
              <tiny-radio v-model="filterOptions.mentor" label="1">{{
                $t('baseForm.form.label.yes')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.mentor" label="2">{{
                $t('baseForm.form.label.no')
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
    mentor: string;
  }

  // 加载效果
  const state = reactive<{
    filterOptions: FilterOptions;
  }>({
    filterOptions: {
      mentor: '1',
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
      mentor: [rulesType],
    };
  });

  const mentorRef = ref();

  const mentorReset = () => {
    state.filterOptions = {
      mentor: '1',
    } as FilterOptions;
  };

  defineExpose({
    mentorReset,
  });
</script>

<style scoped lang="less"></style>
