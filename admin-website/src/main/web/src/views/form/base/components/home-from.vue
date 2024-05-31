<template>
  <tiny-layout>
    <tiny-form
      label-width="120px"
      :label-align="true"
      label-position="left"
      size="small"
    >
      <tiny-row :flex="true" justify="left">
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item
            :label="$t('baseForm.form.project')"
            prop="department"
          >
            <tiny-select
              v-model="filterOptions.project"
              :placeholder="$t('baseForm.form.label.placeholder')"
              filterable
            >
              <tiny-option
                v-for="item in projectData"
                :key="item"
                :label="$t(item)"
                :value="item"
              ></tiny-option>
            </tiny-select>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>
    </tiny-form>
  </tiny-layout>
</template>

<script lang="ts" setup>
  import { reactive, toRefs, defineProps } from 'vue';
  import {
    Layout as TinyLayout,
    Form as TinyForm,
    FormItem as TinyFormItem,
    Row as TinyRow,
    Col as TinyCol,
    Select as TinySelect,
    Option as TinyOption,
  } from '@opentiny/vue';

  interface FilterOptions {
    project: string;
  }

  const state = reactive<{
    filterOptions: FilterOptions;
  }>({
    filterOptions: {} as FilterOptions,
  });
  const { filterOptions } = toRefs(state);

  const props = defineProps({
    // eslint-disable-next-line vue/require-prop-types
    projectData: [],
  });

  const { projectData } = toRefs(props);
</script>

<style scoped lang="less"></style>
